import { ImageResponse } from "next/og"
import { getAllPosts, getCategory, getPostBySlug, getReadingMinutes } from "@/lib/blog"
import { SITE } from "@/lib/seo"

export const alt = "Solyio article"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

/** Per-post social card, generated at build time from the post's own data. */
export default async function PostOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const title = post?.title ?? SITE.name
  const category = post ? getCategory(post.category)?.name : undefined
  const minutes = post ? getReadingMinutes(post) : undefined
  const fontSize = title.length > 78 ? 54 : title.length > 52 ? 64 : 74

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
          padding: "68px",
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
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #FF1E41 0%, #bb0029 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#1c1b1b", letterSpacing: "-0.02em" }}>
            {SITE.name}
          </div>
          {category && (
            <div
              style={{
                display: "flex",
                marginLeft: "12px",
                padding: "8px 20px",
                borderRadius: "999px",
                background: "rgba(255,30,65,0.10)",
                color: "#bb0029",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {category}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: `${fontSize}px`,
            fontWeight: 800,
            color: "#1c1b1b",
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            maxWidth: "1020px",
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: "24px", color: "#5e3f3e", display: "flex" }}>solyio.com/blog</div>
          {minutes !== undefined && (
            <div style={{ fontSize: "24px", color: "#5e3f3e", display: "flex" }}>{minutes} min read</div>
          )}
        </div>
      </div>
    ),
    size,
  )
}
