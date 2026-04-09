"use client"

import Link from "next/link"
import { useState } from "react"

const PROJECTS: {
  slug: string
  name: string
  category: string
  thumbnail: string
  metric: string
  description: string
  detailHref: string
  tags?: string[]
}[] = [
  {
  slug: "expertaiq",
  name: "ExpertAIQ",
  category: "SaaS",
  thumbnail: "/ExpertAIQ.png",
  metric: "105+ Coaches",
  description:
    "White-label AI coaching platform where consultants upload their knowledge base, build a personalized AI persona, and monetize their expertise — students learn directly from RAG-powered AI trained on the coach's own material.",
  detailHref: "/portfolio/expertaiq",
  tags: ["RAG", "White-label", "AI Agents", "Next.js"],
},
  {
  slug: "robomarketer",
  name: "RoboMarketer",
  category: "Marketing",
  thumbnail: "/RoboMarketer.png",
  metric: "12 AI Agents",
  description:
    "AI marketing automation platform that deploys 12 pre-trained AI employees to run paid ads, social media, SEO, email, and content on autopilot — saving agencies 72+ hours weekly without adding headcount.",
  detailHref: "/portfolio/robomarketer",
  tags: ["Django", "Next.js", "AI Agents", "Stripe"],
},
  {
  slug: "cashads",
  name: "CashAds",
  category: "Advertising",
  thumbnail: "/Cashads.png",
  metric: "AI Admaker",
  description:
    "AI-powered ad creative marketplace where anyone can generate professional ads in seconds and sell them instantly to businesses — 80+ creators, 158 buyers, and $500K in annual marketplace revenue.",
  detailHref: "/portfolio/cashads",
  tags: ["Next.js", "Django", "LangChain", "Stripe"],
},
  {
  slug: "pricing-intelligence",
  name: "PriceSmurf",
  category: "SaaS",
  thumbnail: "/PriceSmurf.png",
  metric: "Pricing Intellignece",
  description:
    "Multi-tenant AI pricing intelligence platform — 5 specialized agents that detect margin leakage, upsell gaps, and win/loss patterns directly from enterprise sales data.",
  detailHref: "/portfolio/pricing-intelligence",
  tags: ["Next.js", "Vertex AI", "Gemini", "Stripe" , "LangChain" , "RAG"],
},
  {
  slug: "upgrr",
  name: "Upgrr",
  category: "SaaS",
  thumbnail: "/upgrr.png",
  metric: "2000+ Reports Generated",
  description:
    "Financial analysis platform built for the printing equipment industry — sales consultants generate NPV-based lease comparison reports in 5 seconds, closing deals with boardroom-ready financial justification.",
  detailHref: "/portfolio/upgrr",
  tags: ["Next.js", "Financial Modelling", "SaaS", "PDF Reports"],
},
  {
    slug: "novapay",
    name: "NovaPay",
    category: "Mobile",
    thumbnail: "/novapay-ui.svg",
    metric: "",
    description:
      "Cross-platform React Native fintech app with full Stripe integration — subscriptions, one-time payments, and Connect marketplace payouts for 50k+ active users.",
    detailHref: "/portfolio/novapay",
    tags: ["React Native", "Stripe", "iOS", "Android"],
  },
  {
    slug: "zencart",
    name: "ZenCart",
    category: "Mobile",
    thumbnail: "/zencart-ui.svg",
    metric: "",
    description:
      "AI-powered Flutter e-commerce app with Stripe Checkout, Apple Pay, and Google Pay — achieving 185% higher conversion vs the client's previous native app.",
    detailHref: "/portfolio/zencart",
    tags: ["Flutter", "Stripe", "Apple Pay", "Google Pay"],
  },
  {
    slug: "trackrpro",
    name: "TrackrPro",
    category: "Mobile",
    thumbnail: "/trackrpro-ui.svg",
    metric: "",
    description:
      "iOS-native fitness and wellness app with Stripe subscription billing, free trial management, and StoreKit 2 — scaling to 40,000 paying subscribers in 8 months.",
    detailHref: "/portfolio/trackrpro",
    tags: ["iOS", "Swift", "Stripe", "StoreKit 2"],
  },
  {
    slug: "deliveriq",
    name: "DeliverIQ",
    category: "Mobile",
    thumbnail: "/deliveriq-ui.svg",
    metric: "",
    description:
      "React Native on-demand delivery marketplace with Stripe Connect split payments, real-time driver tracking, and automated payouts to 500+ courier partners.",
    detailHref: "/portfolio/deliveriq",
    tags: ["React Native", "Stripe Connect", "iOS", "Android"],
  },
]

const CATEGORIES = ["All", "SaaS", "Marketing", "Advertising", "Mobile"]

/* ─── Single card ─────────────────────────────────────────────────── */

function ProjectCard({
  project,
  offset,
}: {
  project: (typeof PROJECTS)[0]
  offset: boolean
}) {
  return (
    <div className={`group cursor-pointer ${offset ? "md:mt-24" : ""}`}>
      <Link href={project.detailHref}>
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 bg-[#f0eded]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover 0 group-hover:0-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          {/* Category badge */}
          <div className="absolute top-6 left-6">
            <span className="bg-[#fcf9f8]/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1c1b1b]">
              {project.category}
            </span>
          </div>
          {/* Arrow button */}
          <div className="absolute bottom-6 right-6">
            <div className="bg-[#bb0029] text-white p-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="material-symbols-outlined">north_east</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-4xl font-headline font-bold tracking-tight text-[#1c1b1b] group-hover:text-[#bb0029] transition-colors">
              {project.name}
            </h3>
            <span className="text-[#bb0029] font-headline font-black text-2xl tracking-tighter shrink-0">
              {project.metric}
            </span>
          </div>
          <p className="text-[#5e3f3e] text-lg leading-relaxed max-w-lg">
            {project.description}
          </p>
          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-[#f0eded] text-[10px] font-bold uppercase tracking-widest text-[#5e3f3e]">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1c1b1b] group-hover:text-[#bb0029] transition-colors mt-2">
            View Case Study
            <span className="w-8 h-px bg-[#e8bcbb] group-hover:bg-[#bb0029] group-hover:w-12 transition-all inline-block" />
          </div>
        </div>
      </Link>
    </div>
  )
}

/* ─── Grid with filters ───────────────────────────────────────────── */

export function PortfolioGrid() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  const before = filtered.slice(0, 2)
  const after = filtered.slice(2)

  return (
    <>
      {/* Filter bar */}
      <section className="px-8 max-w-[1440px] mx-auto mb-16 overflow-x-auto">
        <div className="flex items-center gap-3 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-colors ${
                active === cat
                  ? "bg-[#1c1b1b] text-[#fcf9f8]"
                  : "bg-[#eae7e7] text-[#5e3f3e] hover:bg-[#e5e2e1]"
              }`}
            >
              {cat === "All" ? "All Projects" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project grid */}
      <section className="px-8 max-w-[1440px] mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* First pair */}
          {before.map((project, i) => (
            <ProjectCard key={project.slug} project={project} offset={i === 1} />
          ))}

          {/* Mid-grid CTA */}
          {filtered.length > 0 && (
            <div className="col-span-1 md:col-span-2 py-24 flex flex-col items-center text-center">
              <div className="h-16 w-px bg-[#bb0029] mb-8" />
              <h2 className="text-5xl font-headline font-black tracking-tighter mb-8 max-w-2xl text-[#1c1b1b]">
                Ready to be our next benchmark success story?
              </h2>
              <Link
                href="/book"
                className="bg-[#bb0029] text-white px-10 py-5 rounded-full font-headline font-black text-lg hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-[#bb0029]/20"
              >
                Book a Discovery Call
              </Link>
              <p className="mt-6 text-[#5e3f3e] text-sm font-bold uppercase tracking-widest">
                No Commitment. Just Engineering Clarity.
              </p>
            </div>
          )}

          {/* Remaining cards */}
          {after.map((project, i) => (
            <ProjectCard key={project.slug} project={project} offset={i % 2 === 1} />
          ))}
        </div>
      </section>
    </>
  )
}
