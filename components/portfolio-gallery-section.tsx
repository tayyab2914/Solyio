"use client"

import { useState } from "react"
import Link from "next/link"

const allProjects = [
  {
    slug: "robomarketer",
    name: "RoboMarketer",
    thumbnail: "/RoboMarketer.png",
    category: "Marketing",
    tagline: "AI marketing automation that never sleeps",
    outcome: "10x content output",
    year: "2024",
  },
  {
    slug: "expertaiq",
    name: "ExpertAIQ",
    thumbnail: "/ExpertAIQ.png",
    category: "Analytics",
    tagline: "Transform raw data into competitive intelligence",
    outcome: "80% faster research",
    year: "2024",
  },
  {
    slug: "cashads",
    name: "CashAds",
    thumbnail: "/CashAds.png",
    category: "E-commerce",
    tagline: "AI-optimized advertising that maximizes ROAS",
    outcome: "35% ROAS improvement",
    year: "2024",
  },
  {
    slug: "healthtrack-ai",
    name: "PriceSmurf",
    thumbnail: "/PriceSmurf.png",
    category: "Healthcare",
    tagline: "AI-powered health insights and appointment intelligence",
    outcome: "60% fewer no-shows",
    year: "2024",
  },
  {
    slug: "Upgrr",
    name: "Upgrr",
    thumbnail: "/upgrr.png",
    category: "Real Estate",
    tagline: "Intelligent property management at scale",
    outcome: "50% faster resolution",
    year: "2024",
  },
  {
    slug: "Meon",
    name: "Meon",
    thumbnail: "/upgrr.png",
    category: "SaaS",
    tagline: "AI-powered personal productivity engine",
    outcome: "3x team efficiency",
    year: "2024",
  },
]

const FILTERS = ["All", "Marketing", "Analytics", "E-commerce", "Healthcare", "Real Estate", "SaaS"]

export function PortfolioGallerySection() {
  const [active, setActive] = useState("All")

  const visible =
    active === "All" ? allProjects : allProjects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-24 px-8 bg-[#f7f4f4]">
      <div className="max-w-7xl mx-auto">
        {/* ─── Header ──────────────────────────────────────────── */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-8 border border-[#d5c2c1]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF1E41]">
              Our Impact
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 border-b border-[#d5c2c1] pb-10">
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-[#1c1b1b] leading-[0.9] tracking-tighter">
              Case Studies
              <br />
              <span className="text-[#FF1E41]">That Speak.</span>
            </h2>

            <div className="max-w-sm">
              <p className="text-[#5e3f3e] text-lg leading-relaxed mb-8">
                From idea to market-ready product in 10 days. These aren&apos;t
                mock-ups — they&apos;re live products driving real revenue.
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="text-3xl font-headline font-bold text-[#FF1E41]">50+</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#5e3f3e] mt-1">
                    MVPs Launched
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-headline font-bold text-[#1c1b1b]">10</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#5e3f3e] mt-1">
                    Days to Launch
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-headline font-bold text-[#006a66]">95%</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#5e3f3e] mt-1">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Filter Tabs ─────────────────────────────────────── */}
        <div className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full font-headline text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                active === f
                  ? "bg-[#FF1E41] text-white shadow-lg shadow-[#FF1E41]/20"
                  : "bg-white text-[#5e3f3e] border border-[#d5c2c1]/40 hover:border-[#FF1E41]/40 hover:text-[#FF1E41]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ─── Staggered Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {visible.flatMap((project, i) => {
            const els = []

            /* Full-width mid-grid CTA inserted before 4th card in "All" view */
            if (i === 3 && active === "All") {
              els.push(
                <div
                  key="mid-cta"
                  className="md:col-span-2 bg-[#1c1b1b] rounded-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF1E41] mb-3">
                      Your project, next
                    </p>
                    <h3 className="text-3xl md:text-4xl font-headline font-bold text-white leading-tight">
                      Ready to become
                      <br />a case study?
                    </h3>
                  </div>
                  <Link
                    href="/book"
                    className="shrink-0 bg-[#FF1E41] text-white font-headline font-bold px-10 py-5 rounded-full text-lg hover:bg-[#bb0029] transition-colors shadow-xl shadow-[#FF1E41]/20"
                  >
                    Start Your Project →
                  </Link>
                </div>
              )
            }

            /* Project card — odd-indexed cards are staggered down */
            els.push(
              <Link
                key={project.slug}
                href={`/products/${project.slug}`}
                className={`group relative overflow-hidden rounded-xl bg-white border border-[#d5c2c1]/30 hover:border-[#FF1E41]/30 transition-all duration-500 hover:shadow-2xl ${
                  i % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e0e0]">
                  {project.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover object-top 0 group-hover:0-0 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f0eded] to-[#e5e0e0]">
                      <span className="text-6xl font-headline font-bold text-[#d5c2c1]">
                        {project.name[0]}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF1E41]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-headline font-bold text-[#1c1b1b]">
                      {project.name}
                    </h3>
                    <span className="text-xs text-[#5e3f3e] font-bold">{project.year}</span>
                  </div>
                  <p className="text-[#5e3f3e] mb-6 text-sm leading-relaxed">{project.tagline}</p>
                  <div className="flex items-center justify-between border-t border-[#d5c2c1]/30 pt-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#5e3f3e]">
                        Key Outcome
                      </p>
                      <p className="text-base font-headline font-bold text-[#1c1b1b] mt-0.5">
                        {project.outcome}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[#FF1E41] group-hover:translate-x-2 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            )

            return els
          })}
        </div>
      </div>
    </section>
  )
}
