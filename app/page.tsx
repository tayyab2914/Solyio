import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { GlobalPresenceSection } from "@/components/global-presence-section"
import { HeroVisual } from "@/components/hero-visual"
import { HeroHeadline } from "@/components/hero-headline"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Solyio | Web, Mobile, Cloud & AI Solutions",
  description:
    "Solyio builds web platforms, mobile apps, cloud infrastructure, and AI automation that simplify your business and accelerate growth.",
  alternates: { canonical: "https://solyio.com" },
}

/* ─── NAV ────────────────────────────────────────────────────────── */

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative pt-35 pb-32 px-12 overflow-hidden min-h-screen flex items-center bg-[#fcf9f8]">
      {/* Ambient glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-[#FF1E41]/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-[#FF1E41]/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col justify-center reveal-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#FF1E41]/20 mb-10 w-fit bg-white/50 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-ping" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">
              Web · Mobile · Cloud · AI
            </span>
          </div>

            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-10 leading-[0.82] text-[#1c1b1b]">
  We Simplify your{" "}
  <span className="text-[#FF1E41] italic inline-block transform -skew-x-6">
    Business
  </span>{" "}
  with AI.
</h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-[#5e3f3e] max-w-xl mb-14 leading-relaxed font-light">
            From web & mobile to cloud and{" "}
            <span className="text-[#FF1E41] font-bold border-b-4 border-[#FF1E41]/10 px-1 inline-block">
              AI automation
            </span>{" "}
            — we build the digital foundation your business needs to scale effortlessly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-8">
            <Link
              href="/book"
              className="kinetic-gradient text-white font-headline font-bold py-5 px-14 rounded-full text-lg shadow-2xl shadow-[#FF1E41]/25 hover:-translate-y-0.5 hover:shadow-[#FF1E41]/40 active:translate-y-0 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/portfolio"
              className="bg-white border border-[#e8bcbb]/40 text-[#1c1b1b] font-headline font-bold py-5 px-14 rounded-full text-lg hover:bg-[#f7f4f3] hover:border-[#e8bcbb] transition-all"
            >
              Our Work
            </Link>
          </div>
        </div>

        {/* Right: animated AI visual */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end py-16 lg:py-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

/* ─── VALUE PROP ─────────────────────────────────────────────────── */

function ValuePropSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f7f4f3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">

        {/* Section header */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e8bcbb]/40 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E41]" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#5e3f3e]">6 Core Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-[#1c1b1b] tracking-tighter leading-none">
              Services That Help You   {" "}
              <span className="italic text-[#FF1E41]">Grow </span>{" "}
            </h2>
          </div>
          
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">

          {/* ── AI Automation — hero card ── */}
          <Link
            href="/services/ai-automation"
            className="md:col-span-7 bg-[#1c1b1b] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#FF1E41]/12 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#FF1E41] block mb-1.5">Most In-Demand</span>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tighter leading-tight">
                  AI Workflow Automation
                </h3>
              </div>
              <span className="material-symbols-outlined text-[#FF1E41] shrink-0 group-hover:rotate-12 transition-transform duration-500" style={{ fontSize: "40px" }}>
                smart_toy
              </span>
            </div>

            <p className="relative z-10 text-white/50 text-sm leading-relaxed mb-5">
              Replace manual work with AI — chatbots, workflow triggers, lead pipelines, reporting, and internal ops — running 24/7.
            </p>

            <div className="relative z-10 flex flex-wrap gap-1.5 mb-5">
              {["AI Chatbots", "Lead Automation", "Workflow Triggers", "AI Agents", "Report Generation"].map((tag) => (
                <span key={tag} className="text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/8 text-white/45 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex gap-6">
                {[{ n: "10×", l: "Faster Ops" }, { n: "24/7", l: "Autonomous" }, { n: "85%", l: "Less Manual" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-lg font-headline font-black text-white tracking-tighter">{s.n}</div>
                    <div className="text-[9px] uppercase tracking-wider text-white/30">{s.l}</div>
                  </div>
                ))}
              </div>
              <span className="material-symbols-outlined text-white/20 group-hover:text-[#FF1E41] group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
            </div>
          </Link>

          {/* ── Cyber Security ── */}
          <Link
            href="/services/cyber-security"
            className="md:col-span-5 bg-[#1c1b1b] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group border border-[#FF1E41]/10 hover:border-[#FF1E41]/30 hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF1E41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#FF1E41]/70 block mb-1.5">Security</span>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tighter">Cyber Security</h3>
              </div>
              <span className="material-symbols-outlined text-[#FF1E41]/40 group-hover:text-[#FF1E41] transition-colors duration-500 shrink-0" style={{ fontSize: "36px" }}>
                security
              </span>
            </div>

            <p className="relative z-10 text-white/45 text-sm leading-relaxed mb-4">
              Pentests, security audits, zero-trust architecture, and compliance — find the gaps before attackers do.
            </p>

            <div className="relative z-10 flex flex-wrap gap-1.5 mb-4">
              {["Penetration Testing", "GDPR/HIPAA", "Zero-Trust", "SOC 2"].map((tag) => (
                <span key={tag} className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-white/6 text-white/35 border border-white/8">
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-white/25 text-[10px] font-headline tracking-widest uppercase">Explore</span>
              <span className="material-symbols-outlined text-white/20 group-hover:text-[#FF1E41] group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
            </div>
          </Link>

          {/* ── Web Development ── */}
          <Link
            href="/services/web-development"
            className="md:col-span-4 bg-white rounded-2xl md:rounded-3xl p-6 md:p-7 flex flex-col justify-between relative overflow-hidden group border border-[#e8bcbb]/25 hover:border-[#FF1E41]/35 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
          >
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#FF1E41]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#FF1E41] block mb-1.5">Platforms</span>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-[#1c1b1b] tracking-tighter">Web Development</h3>
              </div>
              <span className="material-symbols-outlined text-[#FF1E41] shrink-0 group-hover:scale-110 transition-transform duration-500" style={{ fontSize: "34px" }}>
                code
              </span>
            </div>

            <p className="relative z-10 text-[#5e3f3e] text-sm leading-relaxed opacity-75 mb-4">
              SaaS platforms, landing pages, e-commerce, and full-stack apps — built fast, built to scale.
            </p>

            <div className="relative z-10 flex flex-wrap gap-1.5 mb-4">
              {["Next.js", "SaaS", "E-commerce", "APIs"].map((tag) => (
                <span key={tag} className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-[#f7f4f3] text-[#5e3f3e] border border-[#e8bcbb]/40">
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#e8bcbb]/30">
              <span className="text-[#5e3f3e]/35 text-[10px] font-headline tracking-widest uppercase">Explore</span>
              <span className="material-symbols-outlined text-[#5e3f3e]/25 group-hover:text-[#FF1E41] group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
            </div>
          </Link>

          {/* ── Mobile Development ── */}
          <Link
            href="/services/mobile-development"
            className="md:col-span-4 bg-white rounded-2xl md:rounded-3xl p-6 md:p-7 flex flex-col justify-between relative overflow-hidden group border border-[#e8bcbb]/25 hover:border-[#FF1E41]/35 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
          >
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#FF1E41]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#FF1E41] block mb-1.5">Apps</span>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-[#1c1b1b] tracking-tighter">Mobile Development</h3>
              </div>
              <span className="material-symbols-outlined text-[#FF1E41] shrink-0 group-hover:scale-110 transition-transform duration-500" style={{ fontSize: "34px" }}>
                smartphone
              </span>
            </div>

            <p className="relative z-10 text-[#5e3f3e] text-sm leading-relaxed opacity-75 mb-4">
              Cross-platform iOS & Android apps — polished UX, payment-ready, app-store launched.
            </p>

            <div className="relative z-10 flex flex-wrap gap-1.5 mb-4">
              {["React Native", "Flutter", "iOS", "Android"].map((tag) => (
                <span key={tag} className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-[#f7f4f3] text-[#5e3f3e] border border-[#e8bcbb]/40">
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#e8bcbb]/30">
              <span className="text-[#5e3f3e]/35 text-[10px] font-headline tracking-widest uppercase">Explore</span>
              <span className="material-symbols-outlined text-[#5e3f3e]/25 group-hover:text-[#FF1E41] group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
            </div>
          </Link>

          {/* ── Cloud Infrastructure ── */}
          <Link
            href="/services/cloud-infrastructure"
            className="md:col-span-4 bg-white rounded-2xl md:rounded-3xl p-6 md:p-7 flex flex-col justify-between relative overflow-hidden group border border-[#e8bcbb]/25 hover:border-[#FF1E41]/35 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
          >
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#FF1E41]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#FF1E41] block mb-1.5">Infrastructure</span>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-[#1c1b1b] tracking-tighter">Cloud Infrastructure</h3>
              </div>
              <span className="material-symbols-outlined text-[#FF1E41] shrink-0 group-hover:scale-110 transition-transform duration-500" style={{ fontSize: "34px" }}>
                cloud
              </span>
            </div>

            <p className="relative z-10 text-[#5e3f3e] text-sm leading-relaxed opacity-75 mb-4">
              AWS, GCP, or Azure — set up, secured, and scaled without the complexity or surprise bills.
            </p>

            <div className="relative z-10 flex flex-wrap gap-1.5 mb-4">
              {["AWS / GCP", "Docker", "Kubernetes", "CI/CD"].map((tag) => (
                <span key={tag} className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-[#f7f4f3] text-[#5e3f3e] border border-[#e8bcbb]/40">
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#e8bcbb]/30">
              <span className="text-[#5e3f3e]/35 text-[10px] font-headline tracking-widest uppercase">Explore</span>
              <span className="material-symbols-outlined text-[#5e3f3e]/25 group-hover:text-[#FF1E41] group-hover:translate-x-1 transition-all duration-300">arrow_forward</span>
            </div>
          </Link>

          {/* ── Marketing Services — full-width bottom card ── */}
          <Link
            href="/services/marketing-services"
            className="md:col-span-12 bg-[#FF1E41] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between relative overflow-hidden group shadow-[0_20px_60px_-10px_rgba(255,30,65,0.3)] hover:shadow-[0_30px_70px_-10px_rgba(255,30,65,0.45)] transition-all duration-500 gap-5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#bb0029] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-white/5 rounded-full" />

            <div className="relative z-10">
              <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white block mb-1.5">Growth Engine</span>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tighter mb-2">Marketing Services</h3>
              <p className="text-white text-sm leading-relaxed max-w-lg">
                SEO & GEO, paid ads, social media, content, and AI campaign automation — we bring customers in.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 shrink-0">
              {[
                { icon: "search", label: "SEO & GEO" },
                { icon: "ads_click", label: "Paid Ads" },
                { icon: "share", label: "Social Media" },
                { icon: "auto_graph", label: "Analytics" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 transition-colors hover:bg-white/20">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: "15px" }}>{item.icon}</span>
                  <span className="text-white font-headline font-bold text-xs whitespace-nowrap">{item.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 bg-white text-[#FF1E41] rounded-xl px-3.5 py-2 font-headline font-black text-xs whitespace-nowrap group-hover:bg-[#fcf9f8] transition-colors">
                Explore
                <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform" style={{ fontSize: "14px" }}>arrow_forward</span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

/* ─── CASE STUDIES ───────────────────────────────────────────────── */

const roboFeatures = [
  { icon: "bolt", label: "1-Click Automation", desc: "Paid ads, SEO, social & email — fully automated" },
  { icon: "store", label: "White-Label Ready", desc: "Unlimited client accounts under your own brand" },
  { icon: "timer", label: "90-sec Onboarding", desc: "Drop a URL, connect accounts — live instantly" },
  { icon: "fact_check", label: "Human-in-the-Loop", desc: "Optional review & approval before anything posts" },
]

const priceSmurfAgents = [
  { icon: "verified", label: "Data Quality" },
  { icon: "trending_down", label: "Margin Leakage" },
  { icon: "rocket_launch", label: "Opportunity" },
  { icon: "leaderboard", label: "Win-Loss" },
  { icon: "balance", label: "Value" },
]

function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">

        {/* Heading */}
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF1E41]/20 mb-6" style={{ backgroundColor: "rgba(255,30,65,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E41]" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">Real Projects. Real Results.</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-[#1c1b1b] tracking-tighter leading-none">
              Our Most{" "}
              <span className="italic text-[#FF1E41]">Successful</span>
              <br />
              Case Studies
            </h2>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#5e3f3e] font-headline text-sm tracking-widest uppercase hover:text-[#FF1E41] transition-colors group shrink-0"
            >
              See All Work
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">

          {/* ── RoboMarketer — HERO CARD (left, tall) ── */}
          <div className="lg:col-span-7 bg-[#1c1b1b] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-12 flex flex-col relative overflow-hidden group">
            {/* Glow */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF1E41]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FF1E41]/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-start justify-between mb-5 gap-4">
              <div>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FF1E41] block mb-2">
                  World&apos;s First White-Label AI Employee Platform
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-none">
                  RoboMarketer 3.0
                </h3>
              </div>
              <div className="shrink-0 bg-[#FF1E41] text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full">
                Live
              </div>
            </div>

            <p className="relative z-10 text-white/55 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
              Replace your agency team with pre-trained AI employees. Run paid ads, SEO, social media, email &amp; Google reviews — all from one command center, 24/7.
            </p>

            {/* ── YouTube embed — compact 16:9 ── */}
            <div className="relative z-10 w-full rounded-xl md:rounded-2xl overflow-hidden mb-7" style={{ paddingBottom: "52%" }}>
              <iframe
                src="https://www.youtube.com/embed/1uGJ9T3Zz9Q?rel=0&modestbranding=1"
                title="RoboMarketer 3.0 — AI Employee Platform for Marketing Agencies"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* 4 feature pills */}
            <div className="relative z-10 grid grid-cols-2 gap-3 mb-7">
              {roboFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-[#FF1E41]/30 rounded-xl px-4 py-3 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[#FF1E41] shrink-0 mt-0.5" style={{ fontSize: "16px" }}>{f.icon}</span>
                  <div>
                    <p className="text-white font-headline font-bold text-xs mb-0.5">{f.label}</p>
                    <p className="text-white/40 text-[11px] leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats + tech */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "10×", label: "Content Output" },
                  { num: "85%", label: "Less Manual Work" },
                  { num: "24/7", label: "Autonomous" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-headline font-black text-white tracking-tighter">{s.num}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-label mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "OpenAI", "Stripe", "n8n"].map((t) => (
                  <span key={t} className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/8 text-white/35 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: PriceSmurf + CashAds */}
          <div className="lg:col-span-5 flex flex-col gap-5 md:gap-6">

            {/* ── PriceSmurf ── */}
            <div className="flex-1 bg-[#f7f4f3] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-2xl transition-all duration-500">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#FF1E41]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5 gap-3">
                  <div>
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FF1E41] block mb-2">AI Pricing Intelligence SaaS</span>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-[#1c1b1b] tracking-tighter">PriceSmurf</h3>
                  </div>
                  <span className="material-symbols-outlined text-[#FF1E41] text-4xl group-hover:scale-110 transition-transform duration-500">analytics</span>
                </div>
                <p className="text-[#5e3f3e] text-sm leading-relaxed opacity-80 mb-6">
                  Upload sales data → pick an AI agent → get charts, recommendations &amp; PDF in minutes. No consultants. Multi-tenant, Stripe-billed, GDPR-ready.
                </p>

                {/* Agent chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {priceSmurfAgents.map((a) => (
                    <div key={a.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#e8bcbb]/40 hover:border-[#FF1E41]/40 transition-colors">
                      <span className="material-symbols-outlined text-[#FF1E41]" style={{ fontSize: "13px" }}>{a.icon}</span>
                      <span className="text-[11px] font-bold text-[#1c1b1b] font-headline">{a.label}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF1E41]/8 border border-[#FF1E41]/20">
                    <span className="material-symbols-outlined text-[#FF1E41]" style={{ fontSize: "13px" }}>auto_awesome</span>
                    <span className="text-[11px] font-bold text-[#FF1E41] font-headline">Gemini 2.5</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3 pt-5 border-t border-[#e8bcbb]/40">
                {[
                  { num: "5", label: "AI Agents" },
                  { num: "Multi", label: "Tenant" },
                  { num: "100%", label: "Automated" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xl md:text-2xl font-headline font-black text-[#FF1E41] tracking-tighter">{s.num}</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#5e3f3e]/50 font-label mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CashAds ── */}
            <div className="flex-1 bg-[#FF1E41] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(255,30,65,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-16 translate-y-16" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5 gap-3">
                  <div>
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white block mb-2">Performance Ad Network</span>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tighter">CashAds</h3>
                  </div>
                  <span className="material-symbols-outlined text-white text-4xl group-hover:text-white/50 transition-colors duration-500">campaign</span>
                </div>
                <p className="text-white text-sm leading-relaxed mb-6">
                  Full-stack ad platform connecting advertisers &amp; publishers. Real-time tracking, payout management, and AI bid optimization built to scale.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3 pt-5 border-t border-white/20">
                {[
                  { num: "+185%", label: "Ad Revenue" },
                  { num: "3.5×", label: "ROAS" },
                  { num: "Live", label: "Analytics" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-xl md:text-2xl font-headline font-black text-white tracking-tighter">{s.num}</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/45 font-label mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-8 md:px-12 bg-[#fcf9f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center bg-white px-6 py-16 sm:px-12 sm:py-20 md:p-24 rounded-[2rem] md:rounded-[5rem] relative overflow-hidden border border-[#e8bcbb]/20 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 kinetic-gradient opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1 kinetic-gradient pointer-events-none" />
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold text-[#1c1b1b] mb-8 md:mb-12 tracking-tighter leading-none">
          Ready to{" "}
          <span className="italic text-[#FF1E41] block sm:inline">
            Simplify
          </span>{" "}
          & Scale?
        </h2>
        <p className="text-lg sm:text-xl md:text-3xl text-[#5e3f3e] mb-10 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed opacity-80">
          Let&apos;s build the web, mobile, cloud, or AI solution your
          business needs — and make it work from day one.
        </p>
        <Link
          href="/book"
          className="kinetic-gradient text-white font-headline font-bold py-4 px-10 md:py-7 md:px-20 rounded-full text-lg md:text-2xl shadow-[0_25px_60px_rgba(255,30,65,0.35)] hover:scale-105 hover:shadow-[0_30px_70px_rgba(255,30,65,0.5)] active:scale-95 transition-all inline-block"
        >
          Book a Free Call
        </Link>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ValuePropSection />
        <CaseStudiesSection />
        <GlobalPresenceSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
