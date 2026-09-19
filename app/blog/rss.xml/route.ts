import { getAllPosts, getAuthor, getCategory } from "@/lib/blog"
import { SITE, absoluteUrl } from "@/lib/seo"

export const dynamic = "force-static"

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function rfc822(iso: string): string {
  return new Date(`${iso}T09:00:00Z`).toUTCString()
}

export async function GET() {
  const posts = getAllPosts()
  const feedUrl = absoluteUrl("/blog/rss.xml")
  const lastBuild = posts[0] ? rfc822(posts[0].updatedAt ?? posts[0].publishedAt) : undefined

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`)
      const category = getCategory(post.category)
      const author = getAuthor(post.author)
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${rfc822(post.publishedAt)}</pubDate>
      <dc:creator>${escapeXml(author.name)}</dc:creator>
${category ? `      <category>${escapeXml(category.name)}</category>\n` : ""}    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`${SITE.name} Blog`)}</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>${escapeXml(
      "Software build guides, real cost breakdowns, and stack comparisons from the Solyio product team.",
    )}</description>
    <language>en</language>
${lastBuild ? `    <lastBuildDate>${lastBuild}</lastBuildDate>\n` : ""}    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
