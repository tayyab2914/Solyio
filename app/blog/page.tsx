import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"
import { PostCard } from "@/components/blog/post-card"
import {
  POST_CATEGORIES,
  getAllPosts,
  getFeaturedPosts,
  getPopulatedCategories,
} from "@/lib/blog"
import { ORGANIZATION_ID, SITE, absoluteUrl, breadcrumbSchema, ogImage } from "@/lib/seo"

const TITLE = "Blog — Build Guides, Costs & Comparisons"
const DESCRIPTION =
  "Real numbers and decision guides from a working product agency: what software actually costs, which stack to pick, and how to automate operations without wasting budget."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/blog"),
    types: { "application/rss+xml": absoluteUrl("/blog/rss.xml") },
  },
  openGraph: {
    images: ogImage(),
    type: "website",
    url: absoluteUrl("/blog"),
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const featured = getFeaturedPosts(2)
  const featuredSlugs = new Set(featured.map((p) => p.slug))
  const rest = posts.filter((p) => !featuredSlugs.has(p.slug))
  const counts = getPopulatedCategories()
  const activeCategories = POST_CATEGORIES.filter((c) => (counts.get(c.slug) ?? 0) > 0)

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/blog")}#blog`,
    url: absoluteUrl("/blog"),
    name: `${SITE.name} Blog`,
    description: DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
    })),
  }

  return (
    <div className="font-body min-h-screen bg-[#fcf9f8] text-[#1c1b1b] antialiased">
      <JsonLd data={[blogSchema, breadcrumbSchema([{ name: "Blog", path: "/blog" }])]} />
      <SiteNavbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 pt-36 pb-16 md:px-10 md:pt-44 md:pb-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-[#FF1E41]/5 blur-[140px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-screen-xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FF1E41]/15 bg-white/60 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF1E41]" />
              <span className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF1E41]">
                Field Notes From The Build
              </span>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="font-headline text-5xl font-bold leading-[0.9] tracking-tighter text-[#1c1b1b] md:text-7xl">
                  What software <span className="italic text-[#FF1E41]">actually</span> costs.
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="border-l-2 border-[#FF1E41]/20 pl-6 text-lg font-light leading-relaxed text-[#534342]">
                  No gated PDFs and no &ldquo;contact us for a quote.&rdquo; These are the price
                  ranges, architecture trade-offs, and automation decisions we work through with
                  clients every week — written down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY FILTER ──────────────────────────────────── */}
        {activeCategories.length > 0 && (
          <section className="px-6 pb-12 md:px-10">
            <div className="mx-auto flex max-w-screen-xl flex-wrap gap-2.5">
              <span className="font-headline rounded-full bg-[#1c1b1b] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                All ({posts.length})
              </span>
              {activeCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  className="font-headline inline-flex items-center gap-1.5 rounded-full border border-[#d8c2c1]/50 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#5e3f3e] transition-all hover:border-[#FF1E41]/40 hover:text-[#bb0029]"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                    {c.icon}
                  </span>
                  {c.name}
                  <span className="opacity-50">{counts.get(c.slug)}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── POSTS ────────────────────────────────────────────── */}
        <section className="px-6 pb-28 md:px-10">
          <div className="mx-auto max-w-screen-xl">
            {posts.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#d8c2c1]/60 bg-white/50 px-8 py-20 text-center">
                <span
                  className="material-symbols-outlined mb-4 text-[#FF1E41]/40"
                  style={{ fontSize: "40px" }}
                >
                  edit_note
                </span>
                <h2 className="font-headline mb-3 text-2xl font-bold tracking-tight">
                  First posts are on the way.
                </h2>
                <p className="mx-auto mb-8 max-w-md text-[#5e3f3e]/80">
                  In the meantime, the fastest way to get a straight answer about scope and budget
                  is to just ask us.
                </p>
                <Link
                  href="/book"
                  className="font-headline inline-flex items-center gap-2 rounded-full bg-[#FF1E41] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#bb0029]"
                >
                  Book a free call
                </Link>
              </div>
            ) : (
              <>
                {featured.length > 0 && (
                  <div className="mb-8 grid gap-6 md:grid-cols-2">
                    {featured.map((p) => (
                      <PostCard key={p.slug} post={p} featured />
                    ))}
                  </div>
                )}

                {rest.length > 0 && (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((p) => (
                      <PostCard key={p.slug} post={p} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="px-6 pb-28 md:px-10">
          <div className="mx-auto max-w-screen-xl overflow-hidden rounded-3xl bg-[#0f0e0e] px-8 py-14 md:px-14 md:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="font-headline mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Skip the research. Get a real quote.
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-white/60">
                  Tell us what you are trying to build and we will send back a fixed scope and a
                  fixed price — usually within two working days.
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <Link
                  href="/book"
                  className="font-headline inline-flex items-center gap-2 rounded-full bg-[#FF1E41] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#bb0029] active:scale-95"
                >
                  Book a free call
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
