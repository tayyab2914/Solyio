import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Portfolio | Solyio — Our Impact",
  description:
    "A gallery of neural-first AI solutions that transformed legacy systems into high-efficiency profit engines. Real results across SaaS, Marketing, Advertising, and Healthcare.",
  alternates: { canonical: "https://solyio.com/portfolio" },
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
            A gallery of neural-first solutions that transformed legacy systems
            into high-efficiency profit engines. We don&apos;t just build
            software; we engineer competitive advantages.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="h-20 w-px bg-[#e8bcbb]/30 hidden md:block mr-12 mb-4" />
          <a
            href="/"
            download
            className="kinetic-gradient text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:-translate-y-0.5 transition-all shadow-lg shadow-[#FF1E41]/20 group"
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              download
            </span>
            Download Portfolio
          </a>
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
      <SiteNavbar />
      <main className="pt-32 pb-0">
        <HeroSection />
        <PortfolioGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
