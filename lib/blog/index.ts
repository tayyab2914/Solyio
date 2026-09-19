import type { Block, Post } from "./types"
import { POSTS } from "./posts"

export type { Author, Block, Category, Faq, Post } from "./types"
export { AUTHORS, getAuthor } from "./authors"
export { POST_CATEGORIES, getCategory } from "./categories"

/* ─── Queries ────────────────────────────────────────────────────── */

/** All published posts, newest first. */
export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) => p.category === category)
}

export function getFeaturedPosts(limit = 3): Post[] {
  const featured = getAllPosts().filter((p) => p.featured)
  return (featured.length ? featured : getAllPosts()).slice(0, limit)
}

/** Categories that actually have posts, with their counts. */
export function getPopulatedCategories() {
  const counts = new Map<string, number>()
  for (const p of POSTS) counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
  return counts
}

/**
 * Related posts: same category first, then shared tags, then anything recent.
 * Explicit `related` slugs on the post always win.
 */
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  if (post.related?.length) {
    const explicit = post.related
      .map((s) => getPostBySlug(s))
      .filter((p): p is Post => Boolean(p) && p!.slug !== post.slug)
    if (explicit.length >= limit) return explicit.slice(0, limit)
  }

  const scored = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      let score = 0
      if (p.category === post.category) score += 3
      score += p.tags.filter((t) => post.tags.includes(t)).length
      return { post: p, score }
    })
    .sort((a, b) => b.score - a.score)

  const explicit = (post.related ?? [])
    .map((s) => getPostBySlug(s))
    .filter((p): p is Post => Boolean(p) && p!.slug !== post.slug)

  const out = [...explicit]
  for (const { post: p } of scored) {
    if (out.length >= limit) break
    if (!out.some((o) => o.slug === p.slug)) out.push(p)
  }
  return out.slice(0, limit)
}

/* ─── Derived content ────────────────────────────────────────────── */

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export interface TocEntry {
  id: string
  text: string
  level: 2 | 3
}

/** Table of contents built from the post's own H2/H3 blocks. */
export function getToc(post: Post): TocEntry[] {
  const toc: TocEntry[] = []
  for (const b of post.blocks) {
    if (b.type === "h2" || b.type === "h3") {
      toc.push({ id: slugifyHeading(b.text), text: stripInline(b.text), level: b.type === "h2" ? 2 : 3 })
    }
  }
  if (post.faqs?.length) {
    toc.push({ id: "faq", text: "Frequently asked questions", level: 2 })
  }
  return toc
}

/** Remove inline markdown so text is safe for titles, TOC, and JSON-LD. */
export function stripInline(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
}

function blockWordCount(b: Block): number {
  const count = (s: string) => stripInline(s).split(/\s+/).filter(Boolean).length
  switch (b.type) {
    case "p":
    case "h2":
    case "h3":
      return count(b.text)
    case "quote":
      return count(b.text)
    case "callout":
      return count(b.text) + (b.title ? count(b.title) : 0)
    case "ul":
    case "ol":
      return b.items.reduce((n, i) => n + count(i), 0)
    case "table":
      return b.headers.reduce((n, h) => n + count(h), 0) + b.rows.flat().reduce((n, c) => n + count(c), 0)
    case "stats":
      return b.items.reduce((n, i) => n + count(i.label) + (i.note ? count(i.note) : 0), 0)
    case "steps":
      return b.items.reduce((n, i) => n + count(i.title) + count(i.text), 0)
    case "faq":
      return b.items.reduce((n, i) => n + count(i.q) + count(i.a), 0)
    case "code":
      return Math.round(b.code.split(/\s+/).length / 2)
    case "cta":
      return count(b.title) + count(b.text)
    default:
      return 0
  }
}

/** Reading time derived from the content, so it can never go stale. */
export function getReadingMinutes(post: Post): number {
  const words =
    post.blocks.reduce((n, b) => n + blockWordCount(b), 0) +
    (post.faqs ?? []).reduce((n, f) => n + stripInline(f.q).split(/\s+/).length + stripInline(f.a).split(/\s+/).length, 0)
  return Math.max(1, Math.round(words / 225))
}

export function getWordCount(post: Post): number {
  return post.blocks.reduce((n, b) => n + blockWordCount(b), 0)
}

/** Every FAQ on the page — explicit `faqs` plus any inline faq blocks. */
export function getAllFaqs(post: Post) {
  const inline = post.blocks.flatMap((b) => (b.type === "faq" ? b.items : []))
  return [...inline, ...(post.faqs ?? [])]
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
