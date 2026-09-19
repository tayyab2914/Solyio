import type { MetadataRoute } from "next"
import { SITE, absoluteUrl } from "@/lib/seo"

export const dynamic = "force-static"

const DISALLOW = ["/api/", "/admin/", "/private/"]

/**
 * AI crawlers are allowed on purpose. For an agency, being cited by ChatGPT,
 * Claude, Perplexity and Google AI Overviews is a primary acquisition channel —
 * blocking these bots removes the site from those answers entirely.
 */
const AI_AGENTS = [
  "GPTBot", // OpenAI crawler
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // gates Gemini / AI Overviews usage
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/api/", "/admin/"] },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/admin/"],
      })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  }
}
