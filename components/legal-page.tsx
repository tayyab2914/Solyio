import type React from "react"
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export interface LegalBlock {
  type: "paragraph" | "list"
  text?: string
  items?: string[]
}

export interface LegalSection {
  id: string
  heading: string
  blocks: LegalBlock[]
}

interface LegalPageProps {
  eyebrow: string
  title: React.ReactNode
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "list") {
    return (
      <ul className="space-y-3 my-4">
        {block.items?.map((item, i) => (
          <li key={i} className="flex gap-3 text-[#5e3f3e] leading-relaxed">
            <span className="mt-2.5 w-1.5 h-1.5 bg-[#FF1E41] rounded-full shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="text-[#5e3f3e] leading-relaxed my-4">{block.text}</p>
}

export function LegalPage({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />

      <main className="pt-32">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-16">
          <div className="max-w-4xl">
            <span className="text-[#FF1E41] text-sm font-bold tracking-[0.25em] uppercase mb-6 block">
              {eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter leading-[0.9] mb-8 text-[#1c1b1b]">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-[#5e3f3e] max-w-2xl leading-relaxed font-light">
              {intro}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5e3f3e] bg-[#f0eded] px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-[#FF1E41]" style={{ fontSize: "16px" }}>
                update
              </span>
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* ── CONTENT ──────────────────────────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-24">
          <div className="grid grid-cols-12 gap-12">
            {/* Table of contents */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF1E41] mb-5">
                  On This Page
                </p>
                <nav className="space-y-1">
                  {sections.map((section, i) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-[#5e3f3e] hover:text-[#bb0029] py-1.5 transition-colors"
                    >
                      <span className="text-[#FF1E41]/50 font-bold mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div className="col-span-12 lg:col-span-9 max-w-3xl">
              {sections.map((section, i) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 pb-12 mb-12 border-b border-[#e8bcbb]/25 last:border-0 last:mb-0 last:pb-0"
                >
                  <h2 className="text-2xl md:text-3xl font-headline font-bold tracking-tight text-[#1c1b1b] mb-2">
                    <span className="text-[#FF1E41]/40 mr-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  {section.blocks.map((block, bi) => (
                    <Block key={bi} block={block} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="pb-32 px-8">
          <div className="max-w-[1000px] mx-auto bg-[#1c1b1b] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FF1E41]/15 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF1E41]/10 rounded-full blur-[80px]" />
            <h2 className="text-3xl md:text-4xl font-headline font-black text-white tracking-tighter mb-5 relative z-10">
              Questions about this policy?
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Our team is happy to clarify anything. Reach out and we&apos;ll get
              back to you within one business day.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
              <Link
                href="mailto:hello@solyio.com"
                className="bg-[#FF1E41] text-white px-10 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#bb0029] transition-colors"
              >
                Email Us
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#1c1b1b] transition-all"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
