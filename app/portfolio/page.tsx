import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"
import { ORGANIZATION_ID, SITE, absoluteUrl, breadcrumbSchema, ogImage } from "@/lib/seo"

const PAGE_DESCRIPTION =
  "A gallery of neural-first AI solutions that transformed legacy systems into high-efficiency profit engines. Real results across SaaS, Marketing, Advertising, and Mobile."

export const metadata: Metadata = {
  title: "Portfolio — Case Studies",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: absoluteUrl("/portfolio") },
  openGraph: {
    images: ogImage(),
    type: "website",
    url: absoluteUrl("/portfolio"),
    title: "Portfolio — Case Studies",
    description: PAGE_DESCRIPTION,
    siteName: SITE.name,
  },
}

/* ─── STRUCTURED DATA ────────────────────────────────────────────── */

/**
 * Slug / name / category of every case study rendered by <PortfolioGrid />.
 * Kept in the same order the grid renders them so the ItemList mirrors the page.
 */
const CASE_STUDIES: { slug: string; name: string; category: string }[] = [
  { slug: "expertaiq", name: "ExpertAIQ", category: "SaaS" },
  { slug: "robomarketer", name: "RoboMarketer", category: "Marketing" },
  { slug: "cashads", name: "CashAds", category: "Advertising" },
  { slug: "pricing-intelligence", name: "PriceSmurf", category: "SaaS" },
  { slug: "upgrr", name: "Upgrr", category: "SaaS" },
  { slug: "novapay", name: "NovaPay", category: "Mobile" },
  { slug: "zencart", name: "ZenCart", category: "Mobile" },
  { slug: "trackrpro", name: "TrackrPro", category: "Mobile" },
  { slug: "deliveriq", name: "DeliverIQ", category: "Mobile" },
]

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absoluteUrl("/portfolio")}#collection`,
  url: absoluteUrl("/portfolio"),
  name: `Portfolio — ${SITE.name}`,
  description: PAGE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": ORGANIZATION_ID },
  mainEntity: {
    "@type": "ItemList",
    name: `${SITE.name} Case Studies`,
    numberOfItems: CASE_STUDIES.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: CASE_STUDIES.map((cs, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/portfolio/${cs.slug}`),
      name: cs.name,
      item: {
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(`/portfolio/${cs.slug}`)}#case-study`,
        name: cs.name,
        url: absoluteUrl(`/portfolio/${cs.slug}`),
        about: { "@type": "Thing", name: cs.category },
        creator: { "@id": ORGANIZATION_ID },
      },
    })),
  },
}

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="px-8 max-w-[1440px] mx-auto mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-widest text-[#bb0029] font-bold mb-4 block">
            Proven Results
          </span>
          <h1 className="text-7xl md:text-8xl font-headline font-black tracking-tighter leading-none text-[#1c1b1b] mb-8">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-[#5e3f3e] font-light leading-relaxed max-w-2xl">
            Real projects. Real results. From AI-powered SaaS platforms and
            mobile apps to brand campaigns and enterprise software — work
            that moved the needle for the businesses behind it.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="h-20 w-px bg-[#e8bcbb]/30 hidden md:block mr-12 mb-4" />
         
          <Link
            href="/book"
            className="bg-white text-[#1c1b1b] border border-[#e8bcbb]/30 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#f0eded] transition-all group"
          >
            Let&apos;s Talk Efficiency
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function PortfolioPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#bb0029]/20 selection:text-[#bb0029]">
      <JsonLd
        data={[
          collectionSchema,
          breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }]),
        ]}
      />
      <SiteNavbar />
      <main className="pt-32 pb-0">
        <HeroSection />
        <PortfolioGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
