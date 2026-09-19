import type { Metadata } from "next"
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"
import { SITE, absoluteUrl, breadcrumbSchema, ogImage } from "@/lib/seo"

const PAGE_DESCRIPTION =
  "Join the team engineering the future of AI. We're always looking for exceptional minds — check back soon for open roles."

export const metadata: Metadata = {
  title: "Careers — Work With Us",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: absoluteUrl("/careers") },
  openGraph: {
    images: ogImage(),
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/careers"),
    title: "Careers — Work With Us",
    description: PAGE_DESCRIPTION,
    siteName: SITE.name,
  },
}

const PERKS = [
  { icon: "globe", title: "Remote First", desc: "Work from anywhere in the world. We believe talent has no zip code." },
  { icon: "psychology", title: "AI-Native Culture", desc: "Every team member works alongside cutting-edge AI tools from day one." },
  { icon: "trending_up", title: "Equity & Growth", desc: "Competitive packages with meaningful equity at a company that's scaling fast." },
  { icon: "school", title: "Learning Budget", desc: "$3,000 annual budget for courses, conferences, and certifications." },
  { icon: "health_and_safety", title: "Full Benefits", desc: "Comprehensive health, dental, and vision coverage for you and your family." },
  { icon: "schedule", title: "Async by Default", desc: "No unnecessary meetings. Deep work is protected. Results are what matter." },
]

export default function CareersPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      {/*
        Breadcrumb only. The page states "No vacancies available right now", so
        there is no JobPosting schema to emit — marking up a placeholder role
        with no title, location, or date would be structured-data spam.
      */}
      <JsonLd data={breadcrumbSchema([{ name: "Careers", path: "/careers" }])} />
      <SiteNavbar />

      <main className="pt-32">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-24">
          <div className="max-w-4xl">
            <span className="text-[#FF1E41] text-sm font-bold tracking-[0.25em] uppercase mb-6 block">
              Join the Team
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-[0.88] mb-8 text-[#1c1b1b]">
              Build what comes{" "}
              <span className="text-[#FF1E41] italic">next.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5e3f3e] max-w-2xl leading-relaxed font-light">
              We&apos;re a team of engineers, scientists, and strategists obsessed with
              one thing — using AI to radically transform how businesses operate.
            </p>
          </div>
        </section>

        {/* ── NO VACANCIES BANNER ──────────────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-24">
          <div className="relative bg-[#1c1b1b] rounded-[2.5rem] overflow-hidden px-12 py-20 flex flex-col md:flex-row items-center gap-12">
            {/* Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF1E41]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF1E41]/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Icon */}
            <div className="relative shrink-0 w-24 h-24 rounded-full bg-[#FF1E41]/10 border border-[#FF1E41]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#FF1E41] text-5xl">
                work_off
              </span>
            </div>

            {/* Text */}
            <div className="relative flex-1 text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF1E41] mb-3">
                Current Openings
              </p>
              <h2 className="text-3xl md:text-4xl font-headline font-black text-white tracking-tighter mb-4">
                No vacancies available right now.
              </h2>
              <p className="text-white/50 text-base leading-relaxed max-w-xl">
                We&apos;re not hiring at this moment, but we&apos;re growing fast. Leave your
                details and we&apos;ll reach out the moment a role opens that matches
                your profile.
              </p>
            </div>

            {/* CTA */}
            <div className="relative shrink-0">
              <Link
                href="/book"
                className="inline-flex items-center gap-3 bg-[#FF1E41] text-white px-8 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#bb0029] transition-all shadow-lg shadow-[#FF1E41]/20"
              >
                Express Interest
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY SOLYIO ───────────────────────────────────────── */}
        <section className="py-24 bg-[#f6f3f2]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16">
            <div className="mb-16">
              <span className="text-[#FF1E41] text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
                Why Solyio
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-[#1c1b1b]">
                A place worth waiting for.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PERKS.map((perk) => (
                <div
                  key={perk.title}
                  className="bg-white rounded-2xl p-8 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-6 group-hover:bg-[#FF1E41]/15 transition-colors">
                    <span className="material-symbols-outlined text-[#FF1E41] text-2xl">
                      {perk.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-headline font-bold text-[#1c1b1b] mb-3">
                    {perk.title}
                  </h3>
                  <p className="text-[#5e3f3e] text-sm leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOTIFY ME STRIP ──────────────────────────────────── */}
        <section className="py-24 max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white border border-[#e8bcbb]/30 rounded-[2rem] px-12 py-12 shadow-sm">
            <div>
              <h3 className="text-2xl md:text-3xl font-headline font-black text-[#1c1b1b] tracking-tighter mb-2">
                Want to be first to know?
              </h3>
              <p className="text-[#5e3f3e] text-base">
                Send us your CV and we&apos;ll contact you as soon as a fitting role opens.
              </p>
            </div>
            <Link
              href="mailto:info@solyio.com?subject=Career%20Interest%20at%20Solyio"
              className="shrink-0 inline-flex items-center gap-3 bg-[#1c1b1b] text-white px-10 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#FF1E41] transition-all duration-300 group"
            >
              Send Your CV
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                send
              </span>
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
