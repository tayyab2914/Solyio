"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import type { GlobeMarker } from "@/components/ui/3d-globe"

/* ─── lazy-load Globe so SSR never touches WebGL ─────────────────── */
const Globe3D = dynamic(
  () => import("@/components/ui/3d-globe").then((m) => m.Globe3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#fff0f2] to-[#fcf9f8] animate-pulse" />
    ),
  }
)

/* ─── DATA ────────────────────────────────────────────────────────── */

const GLOBE_MARKERS: GlobeMarker[] = [
  { lat: 40.7128,  lng: -74.006,   src: "https://randomuser.me/api/portraits/men/32.jpg",   label: "New York" },
  { lat: 51.5074,  lng: -0.1278,   src: "https://randomuser.me/api/portraits/women/44.jpg", label: "London" },
  { lat: 35.6762,  lng: 139.6503,  src: "https://randomuser.me/api/portraits/men/15.jpg",   label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093,  src: "https://randomuser.me/api/portraits/women/22.jpg", label: "Sydney" },
  { lat: 48.8566,  lng: 2.3522,    src: "https://randomuser.me/api/portraits/men/62.jpg",   label: "Paris" },
  { lat: 28.6139,  lng: 77.209,    src: "https://randomuser.me/api/portraits/women/68.jpg", label: "New Delhi" },
  { lat: 25.2048,  lng: 55.2708,   src: "https://randomuser.me/api/portraits/men/77.jpg",   label: "Dubai" },
  { lat: 1.3521,   lng: 103.8198,  src: "https://randomuser.me/api/portraits/women/55.jpg", label: "Singapore" },
]

interface Reviewer {
  name: string
  role: string
  city: string
  avatar: string
  quote: string
  stars: number
}

const REVIEWERS: Reviewer[] = [
  {
    name: "Marcus Thorne",
    role: "Head of Pricing, PriceSmurf",
    city: "New York",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "PriceSmurf surfaced margin leaks we had no idea existed — hidden in plain sight inside our own Excel files. The ROI was immediate.",
    stars: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "CMO, RoboMarketer",
    city: "London",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Our content velocity went 10x overnight. RoboMarketer's AI employees run every channel while our team focuses purely on strategy.",
    stars: 5,
  },
  {
    name: "Kenji Watanabe",
    role: "Coach, ExpertAIQ Platform",
    city: "Tokyo",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    quote: "ExpertAIQ let me turn my entire consulting methodology into an AI that works for my clients 24/7 — without writing a single line of code.",
    stars: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Growth Director, CashAds",
    city: "Paris",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "CashAds let me earn $450 a day selling ads I generated in seconds. No clients, no portfolio, no design experience needed.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "CEO, NovaPay",
    city: "Singapore",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    quote: "Solyio delivered a Stripe integration so seamless our finance team thought it was built in-house. The app handles millions in transactions without a single failure.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "CTO, ZenCart",
    city: "New Delhi",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "We went from a 2.1-star app to a 4.9-star app in a single release. The Flutter rebuild completely changed how our customers feel about buying from us.",
    stars: 5,
  },
  {
    name: "James Hartley",
    role: "Founder, TrackrPro",
    city: "Sydney",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    quote: "The subscription architecture handles everything — trials, upgrades, downgrades, and failed payments — without us touching a line of code. It just works.",
    stars: 5,
  },
  {
    name: "Aisha Al-Farsi",
    role: "COO, DeliverIQ",
    city: "Dubai",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    quote: "The Stripe Connect implementation alone saved us 3 full-time ops roles. Payouts that took 5 days of manual work now happen automatically within minutes.",
    stars: 5,
  },
  {
    name: "Tom Eriksen",
    role: "Sales Consultant, Upgrr",
    city: "Stockholm",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Upgrr gave us the credibility to close — clients finally understood the numbers and said yes with confidence. Deals that used to take weeks now close in one meeting.",
    stars: 5,
  },
  {
    name: "Mia Johnson",
    role: "Agency Director, RoboMarketer",
    city: "Toronto",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    quote: "RoboMarketer replaced the work of an entire marketing team without a single new hire. 72 hours saved every week — that's time we reinvest into landing bigger clients.",
    stars: 5,
  },
  {
    name: "Rafael Moreno",
    role: "Creator, CashAds Marketplace",
    city: "São Paulo",
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    quote: "I went from zero design experience to generating and selling professional ads the same day I signed up. CashAds is the most frictionless income stream I've ever had.",
    stars: 5,
  },
  {
    name: "Yuki Tanaka",
    role: "Head of Research, ExpertAIQ",
    city: "Osaka",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    quote: "The most significant leap in our team's intelligence capability. ExpertAIQ's RAG engine answers student questions exactly the way I would — at any hour, at any scale.",
    stars: 5,
  },
]

/* ─── Compact horizontal card for mobile marquee ─────────────────── */

function MobileReviewCard({ reviewer }: { reviewer: Reviewer }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-[#e8bcbb]/30 p-4 shadow-sm flex gap-3 items-start">
      {/* Avatar */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={reviewer.avatar}
        alt={reviewer.name}
        className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-[#e8bcbb]/40"
      />
      <div className="min-w-0">
        {/* Stars */}
        <div className="flex gap-0.5 mb-1">
          {Array.from({ length: reviewer.stars }).map((_, i) => (
            <span key={i} className="text-[#FF1E41] text-[10px]">★</span>
          ))}
        </div>
        {/* Quote */}
        <p className="text-[11px] text-[#5e3f3e] leading-snug line-clamp-2 mb-1.5">
          &ldquo;{reviewer.quote}&rdquo;
        </p>
        {/* Name + role */}
        <p className="text-[10px] font-bold text-[#1c1b1b] uppercase tracking-widest truncate">
          {reviewer.name}
        </p>
        <p className="text-[9px] text-[#5e3f3e]/60 truncate">{reviewer.role}</p>
      </div>
    </div>
  )
}

/* ─── Single photo/review card ────────────────────────────────────── */

function ReviewCard({ reviewer, size = "md" }: { reviewer: Reviewer; size?: "sm" | "md" | "lg" }) {
  const imgH = size === "lg" ? "h-52" : size === "sm" ? "h-32" : "h-44"

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-sm border border-white bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-default">
      {/* Photo */}
      <div className={`w-full ${imgH} overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={reviewer.avatar}
          alt={reviewer.name}
          className="w-full h-full object-cover 0-[30%] group-hover:0-0 group-hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* Review strip — visible by default, expands on hover */}
      <div className="px-4 py-3 bg-white">
        {/* Stars */}
        <div className="flex gap-0.5 mb-1">
          {Array.from({ length: reviewer.stars }).map((_, i) => (
            <span key={i} className="text-[#FF1E41] text-xs">★</span>
          ))}
        </div>
        {/* Quote — truncated, expands to full text on hover */}
        <p className="text-[11px] text-[#5e3f3e] leading-snug line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
          &ldquo;{reviewer.quote}&rdquo;
        </p>
        {/* Name */}
        <p className="text-[10px] font-bold text-[#1c1b1b] uppercase tracking-widest mt-1.5 truncate">
          {reviewer.name}
        </p>
        <p className="text-[9px] text-[#5e3f3e]/60 truncate">{reviewer.city}</p>
      </div>
    </div>
  )
}

/* ─── A floating column of cards ─────────────────────────────────── */

function FloatColumn({
  reviewers,
  animClass,
}: {
  reviewers: Reviewer[]
  animClass: string
}) {
  return (
    <div className={`flex flex-col gap-4 ${animClass}`}>
      {reviewers.map((r, i) => (
        <ReviewCard
          key={r.name}
          reviewer={r}
          size={i % 3 === 1 ? "lg" : i % 3 === 2 ? "sm" : "md"}
        />
      ))}
      {/* Repeat for seamless feel */}
      {reviewers.slice(0, 2).map((r) => (
        <ReviewCard key={`dup-${r.name}`} reviewer={r} size="md" />
      ))}
    </div>
  )
}

/* ─── MAIN SECTION ────────────────────────────────────────────────── */

export function GlobalPresenceSection() {
  const leftGroup1  = REVIEWERS.slice(0, 3)
  const leftGroup2  = REVIEWERS.slice(3, 6)
  const rightGroup1 = REVIEWERS.slice(6, 9)
  const rightGroup2 = REVIEWERS.slice(9, 12)

  return (
    <section className="relative bg-[#faf8f8] overflow-hidden py-0">
      {/* Top & bottom gradient fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 z-20 bg-gradient-to-b from-[#fcf9f8] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-[#fcf9f8] to-transparent" />

      {/* Left & right edge fades */}
      <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-24 z-20 bg-gradient-to-r from-[#faf8f8] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-24 z-20 bg-gradient-to-l from-[#faf8f8] to-transparent" />

      <div className="flex items-center min-h-[680px]">
        {/* ── Left photo columns ─────────────────────────────── */}
        <div className="hidden lg:flex gap-4 shrink-0 px-6 py-16 self-start overflow-visible" style={{ width: "340px" }}>
          <div className="w-1/2">
            <FloatColumn reviewers={leftGroup1} animClass="float-col-up" />
          </div>
          <div className="w-1/2 mt-16">
            <FloatColumn reviewers={leftGroup2} animClass="float-col-down" />
          </div>
        </div>

        {/* ── Center ─────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col items-center text-center px-8 py-20 z-10 relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF1E41]/20 bg-white mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E41] animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FF1E41]">
              Testimonials
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-black tracking-tighter leading-[0.9] text-[#1c1b1b] mb-4 max-w-2xl">
            Trusted by leaders
            <br />
            <span className="text-[#ff0039]">from various industries</span>
          </h2>

          {/* Sub */}
          <p className="text-lg text-[#5e3f3e] font-light max-w-lg leading-relaxed mb-10">
            Learn why professionals trust our AI solutions to engineer their
            competitive advantages and complete their growth journeys.
          </p>

          {/* Globe */}
          <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border border-[#FF1E41]/10 scale-110" />
            <div className="absolute inset-0 rounded-full border border-[#FF1E41]/5 scale-125" />
            {/* Subtle red radial glow behind */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_#FF1E4112_0%,_transparent_70%)]" />

            <Globe3D
              className="w-full h-full"
              markers={GLOBE_MARKERS}
              config={{
                autoRotateSpeed: 2.5,
                showAtmosphere: true,
                atmosphereColor: "#FF1E41",
                atmosphereIntensity: 0.35,
                atmosphereBlur: 3,
                bumpScale: 3,
                enableZoom: false,
                enablePan: false,
                backgroundColor: "transparent",
              }}
            />
          </div>

          {/* Stats row below globe */}
          <div className="flex items-center gap-8 mt-10 flex-wrap justify-center">
            {[
              { v: "50+", l: "Clients" },
              { v: "13+", l: "Countries" },
              { v: "6",   l: "Continents" },
              { v: "98%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-2xl font-headline font-black text-[#FF1E41]">{s.v}</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#5e3f3e]">{s.l}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/portfolio"
            className="mt-10 inline-flex items-center gap-3 bg-[#1c1b1b] text-white px-8 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest hover:bg-[#FF1E41] transition-all duration-300 group shadow-lg shadow-black/10"
          >
            Read Success Stories
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* ── Right photo columns ─────────────────────────────── */}
        <div className="hidden lg:flex gap-4 shrink-0 px-6 py-16 self-start overflow-visible" style={{ width: "340px" }}>
          <div className="w-1/2 mt-10">
            <FloatColumn reviewers={rightGroup1} animClass="float-col-up-slow" />
          </div>
          <div className="w-1/2 mt-24">
            <FloatColumn reviewers={rightGroup2} animClass="float-col-down-slow" />
          </div>
        </div>
      </div>

      {/* ── Mobile / Tablet reviews (hidden on lg+) ────────────────── */}
      <div className="lg:hidden pb-16 space-y-4 overflow-hidden">
        {/* Row 1 — scrolls left */}
        <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
          {[...REVIEWERS.slice(0, 6), ...REVIEWERS.slice(0, 6)].map((r, i) => (
            <MobileReviewCard key={`r1-${i}`} reviewer={r} />
          ))}
        </div>
        {/* Row 2 — scrolls right (reversed) */}
        <div className="flex gap-3 animate-marquee-reverse" style={{ width: "max-content" }}>
          {[...REVIEWERS.slice(6), ...REVIEWERS.slice(6)].map((r, i) => (
            <MobileReviewCard key={`r2-${i}`} reviewer={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
