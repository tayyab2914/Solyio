import type { Faq } from "@/lib/seo"

export type { Faq }

/**
 * Content blocks. Posts are authored as typed data rather than MDX so that
 * every post is type-checked at build time and structured data (FAQ, HowTo,
 * tables) can be derived from the content instead of duplicated by hand.
 *
 * Inline formatting is supported in every `text` field:
 *   **bold**   *italic*   `code`   [label](/href)
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | {
      type: "callout"
      variant: "info" | "warning" | "tip" | "key"
      title?: string
      text: string
    }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "stats"; items: { value: string; label: string; note?: string }[] }
  | { type: "code"; language?: string; filename?: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "faq"; items: Faq[] }
  | { type: "cta"; title: string; text: string; buttonLabel: string; href: string }
  | { type: "divider" }

export interface Author {
  id: string
  name: string
  role: string
  bio: string
  avatar?: string
  url?: string
  sameAs?: string[]
}

export interface Category {
  slug: string
  name: string
  description: string
  icon: string
}

export interface Post {
  slug: string
  /** H1 on the page. */
  title: string
  /** <title> tag. Falls back to `title` when omitted. Keep under ~60 chars. */
  seoTitle?: string
  /** Meta description. Keep under ~155 chars. */
  description: string
  /** Short summary used on cards and in the index. */
  excerpt: string
  category: string
  tags: string[]
  author: string
  /** ISO 8601 date, e.g. "2026-09-16". */
  publishedAt: string
  updatedAt?: string
  featured?: boolean
  eyebrow?: string
  /** The direct answer block. Rendered up top and used for AI-search citation. */
  keyTakeaways: string[]
  blocks: Block[]
  /** Rendered as an FAQ section and emitted as FAQPage structured data. */
  faqs?: Faq[]
  /** Slugs of related posts. Auto-filled by category when omitted. */
  related?: string[]
  primaryKeyword: string
  /** Optional hero image for OG / cards. */
  cover?: string
}
