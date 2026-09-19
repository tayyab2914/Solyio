import type { MetadataRoute } from "next"
import { CORE_ROUTES, LEGAL_ROUTES, SERVICE_ROUTES, SITE, absoluteUrl } from "@/lib/seo"
import { generateStaticParams as portfolioParams } from "./portfolio/[slug]/page"
import { generateStaticParams as productParams } from "./products/[slug]/page"
import { getAllPosts, POST_CATEGORIES } from "@/lib/blog"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const fixed = [...CORE_ROUTES, ...SERVICE_ROUTES, ...LEGAL_ROUTES].map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  // Case-study routes are derived from the pages themselves, so the sitemap can
  // never drift from what is actually rendered.
  const portfolio = portfolioParams().map(({ slug }) => ({
    url: absoluteUrl(`/portfolio/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const products = productParams().map(({ slug }) => ({
    url: absoluteUrl(`/products/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogIndex = [
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...POST_CATEGORIES.map((c) => ({
      url: absoluteUrl(`/blog/category/${c.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ]

  const posts = getAllPosts().map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.8 : 0.7,
  }))

  return [...fixed, ...portfolio, ...products, ...blogIndex, ...posts]
}

// Keeps the base URL in one place for robots.ts to reuse.
export const BASE_URL = SITE.url
