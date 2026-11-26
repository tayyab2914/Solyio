#!/usr/bin/env node
/**
 * Builds a self-hosted subset of the Material Symbols Outlined icon font that
 * contains only the icons this site actually uses.
 *
 * Why: the full Google-hosted variable font is ~4 MB, so for the first seconds
 * of a visit browsers showed icon names ("arrow_forward") as plain text. The
 * subset is a few KB and is bundled through next/font in app/layout.tsx, which
 * self-hosts it, preloads it on every page and caches it forever.
 *
 * Runs automatically as part of `npm run dev` and `npm run build`; run it on its
 * own with `npm run icons`. It only re-downloads the font when the set of icons
 * in the code changes, and a network error never fails the build: the existing
 * font is kept and the next run tries again.
 */
import { existsSync } from "node:fs"
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const SCAN_DIRS = ["app", "components", "lib", "hooks"]
const SCAN_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mdx", ".md", ".json"])

const FONT_PATH = path.join(ROOT, "app/fonts/material-symbols-outlined.woff2")
// Kept outside the scanned folders so its own icon list is never re-scanned.
const MANIFEST_PATH = path.join(ROOT, "scripts/material-symbols-icons.json")
const CODEPOINTS_CACHE = path.join(ROOT, "node_modules/.cache/material-symbols/codepoints.txt")
const CODEPOINTS_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000

// Official list of every Material Symbols icon name.
const CODEPOINTS_URL =
  "https://raw.githubusercontent.com/google/material-design-icons/master/variablefont/MaterialSymbolsOutlined%5BFILL,GRAD,opsz,wght%5D.codepoints"

// Pinned to the values globals.css uses. FILL stays variable (0..1) because some
// icons are rendered filled with `fontVariationSettings: "'FILL' 1"`.
const AXES = "opsz,wght,FILL,GRAD@24,400,0..1,0"

// Google Fonts only serves woff2 to browsers it recognises.
const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"

// Anything that could be an icon name: JSX text such as `>arrow_forward<` and
// whole string literals such as `icon: "rocket_launch"`. Intersecting these with
// the official icon list drops everything that isn't an icon.
const JSX_TEXT = />\s*([a-z0-9_]+)\s*</g
const STRING_LITERAL = /(["'`])([a-z0-9_]+)\1/g

async function listFiles(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return []
  }
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await listFiles(full)))
    else if (SCAN_EXTENSIONS.has(path.extname(entry.name))) files.push(full)
  }
  return files
}

async function collectCandidates() {
  const candidates = new Set()
  for (const dir of SCAN_DIRS) {
    for (const file of await listFiles(path.join(ROOT, dir))) {
      const source = await readFile(file, "utf8")
      for (const match of source.matchAll(JSX_TEXT)) candidates.add(match[1])
      for (const match of source.matchAll(STRING_LITERAL)) candidates.add(match[2])
    }
  }
  return candidates
}

async function loadIconNames() {
  const cached = existsSync(CODEPOINTS_CACHE)
  const fresh = cached && Date.now() - (await stat(CODEPOINTS_CACHE)).mtimeMs < CODEPOINTS_MAX_AGE_MS
  let text
  if (fresh) {
    text = await readFile(CODEPOINTS_CACHE, "utf8")
  } else {
    try {
      const res = await fetch(CODEPOINTS_URL)
      if (!res.ok) throw new Error(`icon list request failed: HTTP ${res.status}`)
      text = await res.text()
      await mkdir(path.dirname(CODEPOINTS_CACHE), { recursive: true })
      await writeFile(CODEPOINTS_CACHE, text)
    } catch (err) {
      if (!cached) throw err
      text = await readFile(CODEPOINTS_CACHE, "utf8") // a stale list beats none
    }
  }
  return new Set(
    text
      .split("\n")
      .map((line) => line.split(" ")[0].trim())
      .filter(Boolean),
  )
}

async function downloadFont(icons) {
  const cssUrl =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:" +
    `${AXES}&icon_names=${icons.join(",")}&display=block`
  const cssRes = await fetch(cssUrl, { headers: { "User-Agent": BROWSER_UA } })
  if (!cssRes.ok) throw new Error(`Google Fonts CSS request failed: HTTP ${cssRes.status}`)
  const css = await cssRes.text()
  const fontUrl = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]woff2['"]\)/)?.[1]
  if (!fontUrl) throw new Error("no woff2 URL in the Google Fonts response")
  const fontRes = await fetch(fontUrl)
  if (!fontRes.ok) throw new Error(`font download failed: HTTP ${fontRes.status}`)
  return Buffer.from(await fontRes.arrayBuffer())
}

async function main() {
  const [candidates, iconNames] = await Promise.all([collectCandidates(), loadIconNames()])
  const icons = [...candidates].filter((name) => iconNames.has(name)).sort()
  const manifest = { axes: AXES, icons }

  // Normalise line endings: Git on Windows may check the manifest out with CRLF.
  const previous = existsSync(MANIFEST_PATH) ? (await readFile(MANIFEST_PATH, "utf8")).replace(/\r\n/g, "\n") : ""
  const next = JSON.stringify(manifest, null, 2) + "\n"
  if (existsSync(FONT_PATH) && previous === next) {
    console.log(`[icons] Icon font up to date (${icons.length} icons).`)
    return
  }

  const font = await downloadFont(icons)
  await mkdir(path.dirname(FONT_PATH), { recursive: true })
  await writeFile(FONT_PATH, font)
  await writeFile(MANIFEST_PATH, next)
  console.log(`[icons] Built icon font: ${icons.length} icons, ${(font.length / 1024).toFixed(1)} KB.`)
}

main().catch((err) => {
  if (existsSync(FONT_PATH)) {
    console.warn(`[icons] Could not update the icon font, keeping the existing one: ${err.message}`)
    return
  }
  console.error("[icons] Failed to build the icon font:", err)
  process.exitCode = 1
})
