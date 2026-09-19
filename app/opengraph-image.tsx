import { ImageResponse } from "next/og"
import { SITE } from "@/lib/seo"

export const alt = `${SITE.name} — ${SITE.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Generated at build time so the social card can never 404 or go stale.
 * Uses system fonts only — no font fetch, so the build stays offline-safe.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fcf9f8",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "10px",
            background: "linear-gradient(90deg, #FF1E41 0%, #bb0029 100%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #FF1E41 0%, #bb0029 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ fontSize: "34px", fontWeight: 700, color: "#1c1b1b", letterSpacing: "-0.02em" }}>
            {SITE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              color: "#1c1b1b",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              maxWidth: "980px",
              display: "flex",
            }}
          >
            Web, Mobile, Cloud &amp; AI — built to ship.
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "30px",
              color: "#5e3f3e",
              maxWidth: "860px",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Fixed scope. Fixed price. Quoted before any work begins.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: "26px", color: "#5e3f3e", display: "flex" }}>solyio.com</div>
          <div
            style={{
              display: "flex",
              padding: "12px 28px",
              borderRadius: "999px",
              background: "#FF1E41",
              color: "white",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            From $1,900
          </div>
        </div>
      </div>
    ),
    size,
  )
}
