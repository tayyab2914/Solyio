import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Web Development Services | Solyio — Custom Platforms & SaaS",
  description:
    "Solyio builds fast, scalable web platforms, SaaS products, and dashboards tailored to your business. From marketing sites to full-stack applications — built to perform and grow.",
  alternates: { canonical: "https://solyio.com/services/web-development" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  provider: { "@type": "Organization", name: "Solyio", url: "https://solyio.com" },
  description:
    "Custom web development, SaaS platforms, dashboards, and full-stack applications built for performance and scale.",
  areaServed: "Worldwide",
  serviceType: "Web Development",
}

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 px-6 sm:px-8 overflow-hidden bg-[#fcf9f8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[#FF1E41]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#FF1E41]/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#FF1E41]/20 mb-8 bg-white/60 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-ping" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">
                Web Development
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.88] text-[#1c1b1b] mb-8">
              Websites &amp; Platforms{" "}
              <span className="text-[#FF1E41] italic">Built to Scale.</span>
            </h1>

            <p className="text-xl text-[#5e3f3e] max-w-xl mb-10 leading-relaxed font-light">
              We build fast, clean, production-ready web platforms — from SaaS
              dashboards and data intelligence tools to marketing sites and
              e-commerce experiences. Every line of code written for
              performance, reliability, and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="kinetic-gradient text-white font-headline font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all text-center"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/portfolio"
                className="bg-white border border-[#e8bcbb]/40 text-[#1c1b1b] font-headline font-bold py-4 px-10 rounded-full text-lg hover:bg-[#f7f4f3] transition-all text-center"
              >
                See Case Studies
              </Link>
            </div>
          </div>

          {/* Right: code card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-[#1c1b1b] rounded-[2.5rem] p-8 shadow-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#FF1E41]/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
                <span className="text-white/20 text-xs ml-2 font-mono">solyio_platform.tsx</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div><span className="text-[#FF1E41]">export</span> <span className="text-blue-400">default</span> <span className="text-yellow-400">function</span> <span className="text-white">Platform</span><span className="text-white/30">()</span> <span className="text-white/30">{"{"}</span></div>
                <div className="pl-4"><span className="text-blue-400">return</span> <span className="text-white/30">(</span></div>
                <div className="pl-8"><span className="text-emerald-400">&lt;App</span></div>
                <div className="pl-10"><span className="text-yellow-400">performance</span><span className="text-white/30">=</span><span className="text-[#FF1E41]">"blazing"</span></div>
                <div className="pl-10"><span className="text-yellow-400">scale</span><span className="text-white/30">=</span><span className="text-[#FF1E41]">"infinite"</span></div>
                <div className="pl-10"><span className="text-yellow-400">seo</span><span className="text-white/30">=</span><span className="text-[#FF1E41]">"optimized"</span></div>
                <div className="pl-8"><span className="text-emerald-400">/&gt;</span></div>
                <div className="pl-4"><span className="text-white/30">)</span></div>
                <div><span className="text-white/30">{"}"}</span></div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { val: "99%", label: "Uptime" },
                  { val: "<1s", label: "Load time" },
                  { val: "A+", label: "Perf score" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-[#FF1E41] font-headline font-black text-lg">{s.val}</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest">{s.label}</div>
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

/* ─── PROBLEM ────────────────────────────────────────────────────── */

const problems = [
  {
    icon: "speed",
    title: "Your Site Is Slow and Hurting Conversions",
    desc: "Every extra second of load time kills conversions. If your platform is slow, users leave — and Google penalises you for it. Speed isn't a nice-to-have, it's revenue.",
  },
  {
    icon: "build",
    title: "You've Outgrown Your Current Platform",
    desc: "Squarespace or Webflow worked early on. But now you need custom logic, role-based access, integrations with your CRM and payment stack, and real-time data — things templates can't do.",
  },
  {
    icon: "engineering",
    title: "Your Dev Team Is Stuck Maintaining Instead of Building",
    desc: "Legacy tech debt, inconsistent codebases, no proper CI/CD — your engineers spend most of their time keeping the lights on instead of shipping features.",
  },
  {
    icon: "search_off",
    title: "Your Platform Isn't Showing Up on Google",
    desc: "A beautiful site that no one finds is a beautiful waste. Technical SEO — proper structure, speed, metadata, schema — needs to be built in from day one, not bolted on after.",
  },
]

function ProblemSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">The Challenge</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            Common Problems We Solve
          </h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">
            Web development problems that cost businesses time, money, and customers every day.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-[2rem] p-8 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-6 group-hover:bg-[#FF1E41]/15 transition-colors">
                <span className="material-symbols-outlined text-[#FF1E41] text-2xl">{p.icon}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-[#1c1b1b] mb-3">{p.title}</h3>
              <p className="text-[#5e3f3e] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SOLUTION ───────────────────────────────────────────────────── */

const steps = [
  {
    n: "01",
    icon: "design_services",
    title: "Architecture First",
    desc: "Before writing a line of code we map out the data model, routing structure, auth flows, and integration points. A solid architecture avoids expensive rewrites later.",
  },
  {
    n: "02",
    icon: "web",
    title: "Modern Stack, Proven Results",
    desc: "We use Next.js, React, TypeScript, and Tailwind — technologies chosen for speed, SEO, developer experience, and the massive ecosystem behind them.",
  },
  {
    n: "03",
    icon: "database",
    title: "Backend & Integrations",
    desc: "Full backend development with Supabase or PostgreSQL, REST and GraphQL APIs, and clean integrations with Stripe, CRMs, analytics, and whatever else your stack requires.",
  },
  {
    n: "04",
    icon: "rocket_launch",
    title: "Performance & SEO Baked In",
    desc: "Core Web Vitals optimised, proper H1→H2→H3 hierarchy, schema markup, canonical URLs, sitemap — all technical SEO built in from the start, not added as an afterthought.",
  },
]

function SolutionSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b] mb-6">
              How We Build Your Platform
            </h2>
            <p className="text-[#5e3f3e] leading-relaxed text-lg font-light">
              We engineer platforms the right way — clean architecture,
              production-grade code, and a deployment pipeline built for the
              long term.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 text-[#FF1E41] font-headline font-black tracking-tight hover:gap-4 transition-all"
            >
              Start the conversation
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex gap-6 bg-[#fcf9f8] rounded-[1.5rem] p-7 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center group-hover:bg-[#FF1E41]/15 transition-colors">
                    <span className="material-symbols-outlined text-[#FF1E41]">{s.icon}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-[#FF1E41] tracking-widest uppercase mb-1">Step {s.n}</div>
                  <h3 className="text-xl font-headline font-bold text-[#1c1b1b] mb-2">{s.title}</h3>
                  <p className="text-[#5e3f3e] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CASE STUDIES ───────────────────────────────────────────────── */

const projects = [
  {
    name: "ExpertAIQ",
    category: "SaaS / Analytics",
    tagline: "AI research intelligence platform",
    color: "#1c1b1b",
    icon: "query_stats",
    problem:
      "A research firm with data spread across 15+ sources. Analysts spent 80% of their time just preparing data — by the time insights landed, they were already stale.",
    solution:
      "We built a full-stack SaaS platform with a natural language query layer over their entire data infrastructure. Ask a question in plain English, get a structured answer instantly.",
    metrics: [
      { val: "+80%", label: "Research Speed" },
      { val: "500+", label: "Reports/Month" },
      { val: "15+", label: "Sources Unified" },
      { val: "2s", label: "Response Time" },
    ],
    stack: ["Next.js", "Claude AI", "Supabase", "D3.js", "Vercel AI SDK"],
    slug: "expertaiq",
  },
  {
    name: "CashAds",
    category: "Ad Tech / E-Commerce",
    tagline: "AI-optimized advertising platform",
    color: "#FF1E41",
    icon: "campaign",
    problem:
      "An e-commerce brand managing $2M+ in monthly ad spend with a team manually checking bids — too slow to react to market changes, creative fatigue went undetected.",
    solution:
      "We built a web platform that connects to Google, Meta and TikTok APIs, runs AI bidding every 15 minutes, detects creative fatigue early, and reallocates budget automatically.",
    metrics: [
      { val: "+35%", label: "ROAS" },
      { val: "−42%", label: "CPA" },
      { val: "$2M+", label: "Spend Managed" },
      { val: "15min", label: "Optimisation Cycle" },
    ],
    stack: ["Next.js", "GPT-4", "Google Ads API", "Neon DB", "Vercel"],
    slug: "cashads",
  },
  {
    name: "Upgrr",
    category: "PropTech / SaaS",
    tagline: "AI-powered property management platform",
    color: "#1c1b1b",
    icon: "apartment",
    problem:
      "A property management company with 500+ units, drowning in tenant communications, manual maintenance routing, and rent follow-up calls. Staff morale was suffering.",
    solution:
      "A full-stack SaaS platform with an AI operations layer: tenant chatbot for 24/7 communication, smart maintenance ticket routing, and automated rent collection with escalation workflows.",
    metrics: [
      { val: "80%", label: "Auto-Resolved" },
      { val: "500+", label: "Units Managed" },
      { val: "50%", label: "Faster Resolution" },
      { val: "4.8★", label: "Tenant Rating" },
    ],
    stack: ["Next.js", "Claude AI", "Supabase", "Stripe", "Vercel AI SDK"],
    slug: "upgrr",
  },
]

function CaseStudiesSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
              Platforms We&apos;ve Built
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF1E41] border-b-2 border-[#FF1E41] pb-1 hover:opacity-70 transition-opacity shrink-0"
          >
            View All Projects
          </Link>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="bg-white rounded-[2rem] overflow-hidden border border-[#e8bcbb]/20 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="grid md:grid-cols-12">
                <div
                  className="md:col-span-4 p-10 flex flex-col justify-between"
                  style={{ backgroundColor: p.color }}
                >
                  <div>
                    <span
                      className="material-symbols-outlined text-5xl mb-6 block"
                      style={{ color: i === 1 ? "white" : "#FF1E41" }}
                    >
                      {p.icon}
                    </span>
                    <div
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4"
                      style={{
                        backgroundColor: i === 1 ? "rgba(255,255,255,0.2)" : "rgba(255,30,65,0.15)",
                        color: i === 1 ? "white" : "#FF1E41",
                      }}
                    >
                      {p.category}
                    </div>
                    <h3 className="text-2xl font-headline font-bold text-white mb-2">{p.name}</h3>
                    <p style={{ color: i === 1 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.5)" }} className="text-sm">
                      {p.tagline}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    {p.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl p-3"
                        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                      >
                        <div className="text-[#FF1E41] font-headline font-black text-xl" style={{ color: i === 1 ? "white" : "#FF1E41" }}>
                          {m.val}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8 p-10 flex flex-col justify-between">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-3">The Problem</div>
                      <p className="text-[#5e3f3e] text-sm leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-3">Our Solution</div>
                      <p className="text-[#5e3f3e] text-sm leading-relaxed">{p.solution}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="bg-[#f7f2f1] text-[#1c1b1b] text-[10px] font-bold px-3 py-1 rounded-full border border-[#e8bcbb]/30">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/portfolio/${p.slug}`}
                      className="inline-flex items-center gap-2 text-[#FF1E41] font-headline font-bold text-sm group-hover:gap-3 transition-all shrink-0"
                    >
                      Full Case Study
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── IMPACT ─────────────────────────────────────────────────────── */

function ImpactSection() {
  return (
    <section className="py-28 bg-[#1c1b1b] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF1E41]/10 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Business Impact</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-6">
              What a Great Platform Does for Your Business
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed">
              A well-built web platform isn't just a website — it's your primary
              sales channel, your product, and your brand all in one. Here's what
              the right build looks like in practice.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "speed",
                title: "Sub-second load times",
                desc: "Every 100ms of improvement increases conversions by up to 1%. We optimise for Core Web Vitals from day one.",
              },
              {
                icon: "search",
                title: "Organic traffic from day one",
                desc: "Proper technical SEO built into the architecture means Google can find, crawl, and rank your platform without additional plugins.",
              },
              {
                icon: "devices",
                title: "Works perfectly on every device",
                desc: "Mobile-first, responsive design that adapts to any screen size — because over 60% of your users are on phones.",
              },
              {
                icon: "trending_up",
                title: "Built to grow with you",
                desc: "Clean architecture and a modular codebase mean adding features, integrations, and users doesn't require a rebuild.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-[1.5rem] p-7 border border-white/10 hover:border-[#FF1E41]/30 transition-colors">
                <span className="material-symbols-outlined text-[#FF1E41] text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-white font-headline font-bold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TECH STACK ─────────────────────────────────────────────────── */

const techStack = [
  { name: "Next.js", icon: "web" },
  { name: "React", icon: "code" },
  { name: "TypeScript", icon: "terminal" },
  { name: "Tailwind CSS", icon: "palette" },
  { name: "Supabase", icon: "database" },
  { name: "PostgreSQL", icon: "storage" },
  { name: "Prisma", icon: "schema" },
  { name: "Stripe", icon: "payments" },
  { name: "Vercel", icon: "cloud" },
  { name: "GraphQL", icon: "hub" },
  { name: "Redis", icon: "memory" },
  { name: "Cloudflare", icon: "shield" },
]

function TechStackSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Technology</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            Our Web Stack
          </h2>
          <p className="text-[#5e3f3e] mt-4 max-w-xl mx-auto font-light">
            Battle-tested technologies chosen for performance, developer
            experience, and long-term maintainability.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-3 bg-[#fcf9f8] rounded-2xl p-5 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-md transition-all duration-300 group"
            >
              <span className="material-symbols-outlined text-[#FF1E41] text-3xl group-hover:scale-110 transition-transform">
                {t.icon}
              </span>
              <span className="text-xs font-bold text-[#1c1b1b] text-center">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="py-28 px-6 sm:px-8 bg-[#fcf9f8]">
      <div className="max-w-4xl mx-auto bg-[#FF1E41] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(255,30,65,0.25)]">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-6">
            Ready to Build Your Platform?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto font-light">
            Tell us what you need to build and we&apos;ll show you exactly how
            to get it live — fast, clean, and built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white text-[#FF1E41] px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-[#fcf9f8] transition-colors shadow-xl">
              Book a Free Call
            </Link>
            <Link href="/portfolio" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white hover:text-[#FF1E41] transition-all">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-[#5e3f3e] text-sm mb-4 font-bold uppercase tracking-widest">Explore Other Services</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: "AI Automation", href: "/services/ai-automation" },
            { label: "Mobile Development", href: "/services/mobile-development" },
            { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
            { label: "Marketing Services", href: "/services/marketing-services" },
            { label: "Cyber Security", href: "/services/cyber-security" },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="px-5 py-2 rounded-full border border-[#e8bcbb]/40 text-[#5e3f3e] text-sm font-bold hover:border-[#FF1E41]/40 hover:text-[#FF1E41] transition-all">
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WebDevelopmentPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CaseStudiesSection />
        <ImpactSection />
        <TechStackSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
