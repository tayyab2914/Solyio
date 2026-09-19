import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"
import { PostCard } from "@/components/blog/post-card"
import { POST_CATEGORIES, getCategory, getPostsByCategory } from "@/lib/blog"
import { ORGANIZATION_ID, SITE, absoluteUrl, breadcrumbSchema, ogImage } from "@/lib/seo"

export function generateStaticParams() {
  return POST_CATEGORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return { title: "Category not found" }

  const title = `${category.name} Articles`
  return {
    title,
    description: category.description,
    alternates: { canonical: absoluteUrl(`/blog/category/${category.slug}`) },
    openGraph: {
      images: ogImage(),
      type: "website",
      url: absoluteUrl(`/blog/category/${category.slug}`),
      title,
      description: category.description,
      siteName: SITE.name,
    },
  }
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const posts = getPostsByCategory(category.slug)

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(`/blog/category/${category.slug}`)}#collection`,
    url: absoluteUrl(`/blog/category/${category.slug}`),
    name: `${category.name} — ${SITE.name} Blog`,
    description: category.description,
    inLanguage: "en",
    isPartOf: { "@id": `${absoluteUrl("/blog")}#blog` },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/blog/${p.slug}`),
        name: p.title,
      })),
    },
  }

  return (
    <div className="font-body min-h-screen bg-[#fcf9f8] text-[#1c1b1b] antialiased">
      <JsonLd
        data={[
          collectionSchema,
          breadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: category.name, path: `/blog/category/${category.slug}` },
          ]),
        ]}
      />
      <SiteNavbar />

      <main>
        <section className="relative overflow-hidden px-6 pt-36 pb-14 md:px-10 md:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#FF1E41]/5 blur-[130px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-screen-xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#5e3f3e]/50">
                <li>
                  <Link href="/blog" className="transition-colors hover:text-[#bb0029]">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#bb0029]">{category.name}</li>
              </ol>
            </nav>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FF1E41]/8 px-4 py-2">
              <span className="material-symbols-outlined text-[#FF1E41]" style={{ fontSize: "16px" }}>
                {category.icon}
              </span>
              <span className="font-headline text-[10px] font-bold uppercase tracking-[0.25em] text-[#bb0029]">
                {posts.length} {posts.length === 1 ? "article" : "articles"}
              </span>
            </div>

            <h1 className="font-headline mb-6 max-w-3xl text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
              {category.name}
            </h1>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-[#534342]">
              {category.description}
            </p>
          </div>
        </section>

        <section className="px-6 pb-28 md:px-10">
          <div className="mx-auto max-w-screen-xl">
            {posts.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#d8c2c1]/60 bg-white/50 px-8 py-16 text-center">
                <p className="mb-6 text-[#5e3f3e]/80">Nothing published in this category yet.</p>
                <Link
                  href="/blog"
                  className="font-headline inline-flex items-center gap-2 rounded-full bg-[#1c1b1b] px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#FF1E41]"
                >
                  Browse all articles
                </Link>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            )}

            <div className="mt-14 flex flex-wrap gap-2.5">
              <Link
                href="/blog"
                className="font-headline rounded-full border border-[#d8c2c1]/50 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#5e3f3e] transition-all hover:border-[#FF1E41]/40 hover:text-[#bb0029]"
              >
                ← All articles
              </Link>
              {POST_CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  className="font-headline rounded-full border border-[#d8c2c1]/50 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#5e3f3e] transition-all hover:border-[#FF1E41]/40 hover:text-[#bb0029]"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
