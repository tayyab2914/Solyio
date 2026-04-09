import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Full Stack Brand Marketing & Creative Agency | Solyio",
  description:
    "Solyio is a Full Stack Brand Marketing & Creative Agency with 15+ years of experience. Corporate branding, social media, TVCs, AI creative, talent management, events, and more.",
  alternates: { canonical: "https://solyio.com/services/marketing-services" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Stack Brand Marketing & Creative Services",
  provider: { "@type": "Organization", name: "Solyio", url: "https://solyio.com" },
  description:
    "Full Stack Brand Marketing & Creative Agency — social media, TVCs, corporate branding, AI creative, talent management, events, and brand strategy.",
  areaServed: "Worldwide",
  serviceType: "Brand Marketing & Creative Agency",
}

/* ─── HERO ─────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 px-6 sm:px-8 overflow-hidden bg-[#fcf9f8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[#FF1E41]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#FF1E41]/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#FF1E41]/20 mb-8 bg-white/60 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-ping" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">
                Full Stack Brand Marketing & Creative Agency
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.88] text-[#1c1b1b] mb-8">
              Where AI Meets{" "}
              <span className="text-[#FF1E41] italic">Brand Strategy.</span>
            </h1>

            <p className="text-xl text-[#5e3f3e] max-w-xl mb-4 leading-relaxed font-light">
              15+ years driving transformative brand experiences for national and
              international organizations. From corporate identity to AI-powered
              creative — all under one roof.
            </p>
            <p className="text-sm text-[#5e3f3e]/70 mb-10">
              Recognized by{" "}
              <span className="font-bold text-[#FF1E41]">LinkedIn Learning</span>{" "}
              · Trusted by Nestlé, Coca-Cola, USAID, Amazon & 40+ global brands
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="kinetic-gradient text-white font-headline font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all text-center"
              >
                Start a Project
              </Link>
              <a
                href="/"
                download
                className="bg-white border border-[#e8bcbb]/40 text-[#1c1b1b] font-headline font-bold py-4 px-10 rounded-full text-lg hover:bg-[#f7f4f3] transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span className="material-symbols-outlined text-[#FF1E41] text-xl group-hover:scale-110 transition-transform">download</span>
                Download Marketing Portfolio
              </a>
            </div>
          </div>

          {/* Right: stat panel */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-panel rounded-[2.5rem] p-8 border border-[#e8bcbb]/20 shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { val: "15+", label: "Years Experience", color: "text-[#FF1E41]" },
                  { val: "40+", label: "Global Brands", color: "text-[#1c1b1b]" },
                  { val: "13", label: "Service Verticals", color: "text-[#1c1b1b]" },
                  { val: "AI+", label: "Traditional Marketing", color: "text-[#FF1E41]" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className={`text-3xl font-headline font-black ${s.color}`}>{s.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#1c1b1b] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF1E41]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#FF1E41] text-xl">brand_awareness</span>
                </div>
                <div>
                  <div className="text-white font-headline font-bold text-sm">FULL STACK BRAND AGENCY</div>
                  <div className="text-white/40 text-xs">Strategy · Creative · AI · Production</div>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TRUSTED BY ────────────────────────────────────────────────────── */

const CLIENTS_ROW1 = [
  "Systems", "Tapestry", "Dubai Islamic Bank", "RAKBANK", "Tenovos", "Sukoon Insurance",
  "Visionet", "Musictribe", "ADIB", "USAID", "Amazon Australia", "Packages Limited",
  "Chantler Packages", "Bustle", "Nestlé", "Coca-Cola",
]
const CLIENTS_ROW2 = [
  "Addo AI", "Subway", "O.Food", "K&N's", "LUMS", "NUR International University",
  "KIKO Milano", "Defence Raya", "Total", "PARCO", "Nexton", "DevPod",
  "Asia e University", "Pakistan Sweet Home", "CYTE Foundation", "101 Group", "Mukhtar Sons", "HR Pod",
]

function TrustedBySection() {
  return (
    <section className="py-20 bg-white border-y border-[#e8bcbb]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="text-center">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-3 block">Trusted By</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            40+ National & International Organizations
          </h2>
          <p className="text-[#5e3f3e] mt-3 text-base font-light max-w-xl mx-auto">
            From Fortune 500 multinationals to high-growth national brands
          </p>
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative flex overflow-hidden mb-3 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="animate-marquee flex gap-4 whitespace-nowrap">
          {[...CLIENTS_ROW1, ...CLIENTS_ROW1].map((client, i) => (
            <div
              key={`r1-${i}`}
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#e8bcbb]/40 bg-[#fcf9f8] text-[#5e3f3e] text-sm font-bold whitespace-nowrap shrink-0 hover:border-[#FF1E41]/40 hover:text-[#FF1E41] transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="animate-marquee-slow flex gap-4 whitespace-nowrap" style={{ animationDirection: "reverse" }}>
          {[...CLIENTS_ROW2, ...CLIENTS_ROW2].map((client, i) => (
            <div
              key={`r2-${i}`}
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#e8bcbb]/30 bg-white text-[#5e3f3e]/70 text-sm font-bold whitespace-nowrap shrink-0 hover:border-[#FF1E41]/30 hover:text-[#FF1E41] transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── WORK SHOWCASE ─────────────────────────────────────────────────── */

const SHOWCASE_ITEMS = [
  {
    src: "/work-social-campaigns.jpg",
    label: "Social Media Campaigns",
    desc: "K&N's · Systems · Universities",
    span: "lg:col-span-2",
  },
  {
    src: "/work-systems-ai.jpg",
    label: "AI & Tech Campaigns",
    desc: "Systems Limited · MWC25 · AI Automation",
    span: "lg:col-span-1",
  },
  {
    src: "/work-enterprise.jpg",
    label: "Enterprise Campaigns",
    desc: "SAP · Systems · VisionToValue · Boston HealthAI",
    span: "lg:col-span-1",
  },
  {
    src: "/work-addo-ai.jpg",
    label: "Addo AI Brand Content",
    desc: "Full social media brand management · ITCN · LEAP 2026",
    span: "lg:col-span-1",
  },
  {
    src: "/work-training.jpg",
    label: "Educational Campaigns",
    desc: "IT Mustakbil Training Program · Systems x ITM x BNU",
    span: "lg:col-span-1",
  },
  {
    src: "/work-ai-creative.jpg",
    label: "Gen AI Portfolio Highlights",
    desc: "10,000+ AI-generated images · Commercial-grade · 4K",
    span: "lg:col-span-3",
    tall: true,
  },
]

function WorkShowcaseSection() {
  return (
    <section className="py-28 bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
              Real Work. Real Results.
            </h2>
            <p className="text-[#5e3f3e] mt-4 max-w-xl font-light text-lg">
              A glimpse into the campaigns, creatives, and content we&apos;ve produced
              for national and international brands.
            </p>
          </div>
          <a
            href="/"
            download
            className="kinetic-gradient text-white font-headline font-bold py-4 px-8 rounded-full text-base shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all flex items-center gap-2 shrink-0 group"
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">download</span>
            Download Full Portfolio
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOWCASE_ITEMS.map((item) => (
            <div
              key={item.src}
              className={`${item.span} group relative overflow-hidden rounded-[1.5rem] border border-[#e8bcbb]/20 bg-[#1c1b1b] hover:shadow-2xl transition-all duration-500`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.label}
                className={`w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ${item.tall ? "h-[420px]" : "h-[260px]"}`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/90 via-[#1c1b1b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Label strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <div className="text-[10px] font-black text-[#FF1E41] uppercase tracking-widest mb-1">{item.desc}</div>
                <div className="text-white font-headline font-bold text-base">{item.label}</div>
              </div>
              {/* Static bottom badge (always visible) */}
              <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                <span className="bg-white/90 backdrop-blur-sm text-[#1c1b1b] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 13 SERVICES ───────────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: "campaign",
    title: "Social Media Branding & Marketing",
    desc: "End-to-end social presence — from campaign design to platform strategy — that builds communities and drives measurable business growth.",
    items: ["Social media campaign design", "Content calendars & scheduling", "Platform strategy (IG · TikTok · LinkedIn · X)", "Industries: Tech · F&B · Education · Fintech · AI"],
  },
  {
    icon: "movie",
    title: "TVCs / DVCs / Jingle & Anthem Branding",
    desc: "High-production video commercials and audio branding that make your organization unforgettable across every screen and airwave.",
    items: ["TV commercials (TVC)", "Digital video commercials (DVC)", "Corporate jingles & anthems", "Brand audio identity"],
  },
  {
    icon: "slideshow",
    title: "Corporate PowerPoint Decks",
    desc: "Static and fully animated presentation design that commands attention in boardrooms, investor meetings, and global conferences.",
    items: ["Professional presentation design", "Static & animated decks", "Investor & corporate pitch decks", "Brand-consistent templates"],
  },
  {
    icon: "star",
    title: "A/A+ Celebrity & Vocalist Talent Management",
    desc: "End-to-end talent management for top-tier celebrities and vocalists across Hollywood, Bollywood, and regional markets.",
    items: ["Hollywood & Bollywood talent", "Regional celebrity management", "Vocalist representation", "Brand ambassador partnerships"],
  },
  {
    icon: "palette",
    title: "Brand Collateral Development",
    desc: "Complete brand identity systems that unify your organization's visual language across every physical and digital touchpoint.",
    items: ["Complete brand identity systems", "Stationery & print materials", "Brand style guidelines", "Packaging & label design"],
  },
  {
    icon: "storefront",
    title: "E-Commerce & Digital Campaign Design",
    desc: "Campaign creatives engineered for conversion on Daraz and major digital platforms — from product launches to seasonal campaigns.",
    items: ["Daraz & e-commerce creatives", "Product launch campaigns", "Seasonal & promotional assets", "A/B-tested ad creatives"],
  },
  {
    icon: "business_center",
    title: "Corporate Stationery Systems",
    desc: "Cohesive branded stationery that communicates professionalism and brand authority from first impression to last touchpoint.",
    items: ["Letterheads & envelopes", "Business cards", "Brand guidelines documentation", "Office & desk stationery"],
  },
  {
    icon: "location_city",
    title: "Site Office Branding",
    desc: "International office and workspace branding — from New York to the UAE — that extends your identity into every environment.",
    items: ["New York & UAE office branding", "International workspace design", "Environmental signage", "Interior brand integration"],
  },
  {
    icon: "event",
    title: "Corporate Events",
    desc: "Immersive, fully branded corporate events from thematic infrastructure to technical execution — experiences that leave lasting impressions.",
    items: [
      "Space layout · Thematic design · Furniture layout",
      "Custom branding · Ambiance creation",
      "Interactive activities · Program scheduling",
      "Setup supervision · Technical support",
    ],
  },
  {
    icon: "photo_camera",
    title: "Portfolio / Professional Photography",
    desc: "Full-service photography with pre-shoot strategy, expert crew, and high-resolution delivery with commercial usage rights.",
    items: [
      "Pre-shoot consultation & location scouting",
      "Professional equipment & full crew",
      "Styling & makeup services",
      "High-res delivery · Usage rights",
    ],
  },
]

function ServicesSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            Our Service Verticals
          </h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">
            From brand identity to cinematic production — every discipline your brand needs, under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-[2rem] p-8 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-6 group-hover:bg-[#FF1E41]/15 transition-colors">
                <span className="material-symbols-outlined text-[#FF1E41] text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-[#1c1b1b] mb-3">{s.title}</h3>
              <p className="text-[#5e3f3e] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <ul className="space-y-2 border-t border-[#e8bcbb]/20 pt-5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#5e3f3e]">
                    <span className="w-1 h-1 rounded-full bg-[#FF1E41] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── BRAND STRATEGY ────────────────────────────────────────────────── */

const strategySteps = [
  { n: "01", icon: "search", title: "Market Opportunity Assessment", desc: "We identify gaps, whitespace, and competitive advantages before a single creative is produced." },
  { n: "02", icon: "route", title: "Customer Journey Mapping", desc: "End-to-end journey design — from first impression to loyal advocate — across every channel." },
  { n: "03", icon: "tune", title: "Channel Selection Strategy", desc: "Right message, right platform, right time. We match your brand to where your audience actually lives." },
  { n: "04", icon: "account_balance", title: "Budget Allocation Planning", desc: "Data-informed budget splits across paid, organic, and experiential channels for maximum return." },
  { n: "05", icon: "bar_chart", title: "Performance Metrics Setup", desc: "KPIs, dashboards, and tracking infrastructure built before campaigns launch — not after." },
  { n: "06", icon: "calendar_month", title: "Campaign Timeline Creation", desc: "Precise campaign roadmaps aligned to business cycles, seasonality, and market moments." },
  { n: "07", icon: "calculate", title: "ROI Projection Modeling", desc: "Scenario modeling and revenue forecasting so you know what success looks like before you invest." },
  { n: "08", icon: "autorenew", title: "Quarterly Review Process", desc: "Structured quarterly reviews that course-correct strategy, reallocate budget, and compound results." },
]

function BrandStrategySection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Brand Strategy</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b] mb-6">
              Strategy Before Creative.
            </h2>
            <p className="text-[#5e3f3e] leading-relaxed text-lg font-light">
              Every execution we produce is anchored in a rigorous strategic
              foundation — from market research to quarterly accountability.
              No guesswork, no wasted spend.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 text-[#FF1E41] font-headline font-black tracking-tight hover:gap-4 transition-all"
            >
              Build your strategy
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {strategySteps.map((s) => (
              <div
                key={s.n}
                className="flex gap-4 bg-[#fcf9f8] rounded-[1.5rem] p-6 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center group-hover:bg-[#FF1E41]/15 transition-colors">
                    <span className="material-symbols-outlined text-[#FF1E41] text-xl">{s.icon}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-[#FF1E41] tracking-widest uppercase mb-1">Step {s.n}</div>
                  <h3 className="text-sm font-headline font-bold text-[#1c1b1b] mb-1.5">{s.title}</h3>
                  <p className="text-[#5e3f3e] text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── AI + TRADITIONAL CONVERGENCE ─────────────────────────────────── */

function AIConvergenceSection() {
  return (
    <section className="py-28 bg-[#1c1b1b] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF1E41]/10 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-6 block">The Convergence</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-white mb-6 leading-[1.05]">
              AI + Traditional Marketing.{" "}
              <span className="text-[#FF1E41] italic">Together, Finally.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6 font-light">
              Solyio spearheads the transformative intersection of Generative AI, Brand Strategy,
              and Organizational Excellence — delivering solutions that bridge technological
              innovation with business growth objectives.
            </p>
            <p className="text-white/35 text-base leading-relaxed mb-10 font-light">
              Recognized by LinkedIn Learning, we have conducted multiple training and speaker
              sessions on leveraging AI in professional practices — from creative production
              to corporate communication strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="kinetic-gradient text-white font-headline font-bold py-4 px-8 rounded-full text-base shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all text-center">
                Discuss Your Brand
              </Link>
              <Link href="/services/ai-automation" className="border border-white/20 text-white font-headline font-bold py-4 px-8 rounded-full text-base hover:bg-white/5 transition-all text-center">
                See AI Services →
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "psychology", title: "Generative AI Creative", desc: "AI-powered content at scale — 10,000 images/month, copy generation, video scripts" },
              { icon: "brand_awareness", title: "Brand Strategy", desc: "Market-led strategy with ROI modeling, journey mapping, and quarterly reviews" },
              { icon: "groups", title: "AI Training & Workshops", desc: "AI-in-practice sessions and speaker engagements for teams and leadership" },
              { icon: "trending_up", title: "Growth Engineering", desc: "Performance metrics, channel optimization, and data-driven budget allocation" },
            ].map((c) => (
              <div key={c.title} className="bg-white/5 rounded-[1.5rem] p-6 border border-white/10 hover:border-[#FF1E41]/30 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-[#FF1E41]/15 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[#FF1E41] text-xl">{c.icon}</span>
                </div>
                <h3 className="text-sm font-headline font-bold text-white mb-2">{c.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── GEN AI CREATIVE ────────────────────────────────────────────────── */

function GenAISection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: detail */}
          <div>
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Gen AI Creative</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b] mb-6">
              10,000 AI Images.{" "}
              <span className="text-[#FF1E41] italic">Per Month.</span>
            </h2>
            <p className="text-[#5e3f3e] text-lg leading-relaxed mb-8 font-light">
              Commercially licensed, 4K resolution, style-consistent AI-generated images at a
              scale no traditional creative team can match. Starting package includes 10,000
              images per month with priority processing and up to 4 style variations per concept.
            </p>
            <div className="space-y-3 mb-10">
              {[
                { icon: "image", label: "10,000 AI-generated images / month (starter)" },
                { icon: "hd", label: "4K resolution output across all deliverables" },
                { icon: "style", label: "Up to 4 style variations per concept" },
                { icon: "edit_note", label: "Basic image editing & enhancement included" },
                { icon: "gavel", label: "Commercial usage rights in every package" },
                { icon: "bolt", label: "Priority processing & fast turnaround" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-[#5e3f3e]">
                  <div className="w-8 h-8 rounded-lg bg-[#FF1E41]/8 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#FF1E41] text-base">{item.icon}</span>
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
            <Link href="/book" className="kinetic-gradient text-white font-headline font-bold py-4 px-10 rounded-full text-base shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all inline-block">
              Get a Quote
            </Link>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "10k+", label: "Images per month", sub: "Starter package", bg: "bg-[#FF1E41]", valCls: "text-white", labelCls: "text-white/80", subCls: "text-white/50" },
              { val: "4K", label: "Resolution output", sub: "Every deliverable", bg: "bg-white", valCls: "text-[#1c1b1b]", labelCls: "text-[#1c1b1b]", subCls: "text-[#5e3f3e]" },
              { val: "4x", label: "Style variations", sub: "Per concept", bg: "bg-white", valCls: "text-[#1c1b1b]", labelCls: "text-[#1c1b1b]", subCls: "text-[#5e3f3e]" },
              { val: "100%", label: "Commercial rights", sub: "Included always", bg: "bg-[#1c1b1b]", valCls: "text-[#FF1E41]", labelCls: "text-white", subCls: "text-white/40" },
            ].map((s) => (
              <div key={s.label} className={`${s.bg} rounded-[1.5rem] p-7 border border-[#e8bcbb]/20 shadow-sm`}>
                <div className={`text-4xl font-headline font-black ${s.valCls} mb-1`}>{s.val}</div>
                <div className={`text-sm font-bold ${s.labelCls} mb-0.5`}>{s.label}</div>
                <div className={`text-xs ${s.subCls}`}>{s.sub}</div>
              </div>
            ))}
            <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#e8bcbb]/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF1E41]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#FF1E41]">auto_awesome</span>
              </div>
              <div>
                <div className="text-[#1c1b1b] font-headline font-bold text-sm">AI IMAGE GENERATION ACTIVE</div>
                <div className="text-[#5e3f3e] text-xs">Powered by latest generative models · Priority queue available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTENT PRODUCTION PIPELINE ──────────────────────────────────── */

function ContentProductionSection() {
  const steps = [
    { n: "01", icon: "lightbulb", title: "Concept & Storyboard", desc: "Idea to visual script. We visualize and storyboard the full concept before production begins — so every shoot day is purposeful." },
    { n: "02", icon: "map", title: "Location Scouting & Management", desc: "We identify, survey, and secure locations — handling permits, access, and logistics from start to finish." },
    { n: "03", icon: "videocam", title: "Professional Production", desc: "Full crew. Professional equipment. Styling and makeup on set. Multiple shot variations captured for maximum editorial flexibility." },
    { n: "04", icon: "auto_fix_high", title: "Post-Production & VFX", desc: "Editing, color grading, visual effects, and finishing — delivered to broadcast standard and ready for every platform." },
    { n: "05", icon: "cloud_upload", title: "Multi-Format Delivery", desc: "Every platform, every size, every specification — from full-length TVCs to 9:16 Reels, all in one delivery package." },
    { n: "06", icon: "gavel", title: "Usage Rights Consultation", desc: "We handle the licensing and usage rights documentation so your content is fully cleared for commercial use." },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Content Creation</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            Jaw-Dropping Content. <span className="text-[#FF1E41] italic">Every Time.</span>
          </h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">
            Our full production pipeline — from the initial concept to final delivery — for content
            that stops the scroll and converts audiences into customers.
          </p>
        </div>

        <div className="space-y-4">
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
              <div className="flex-1">
                <div className="text-[10px] font-black text-[#FF1E41] tracking-widest uppercase mb-1">Step {s.n}</div>
                <h3 className="text-xl font-headline font-bold text-[#1c1b1b] mb-2">{s.title}</h3>
                <p className="text-[#5e3f3e] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CORPORATE EVENTS ──────────────────────────────────────────────── */

function EventsSection() {
  const eventServices = [
    { icon: "space_dashboard", label: "Space Layout Design", desc: "Optimized floor plans that flow beautifully and support every event activity." },
    { icon: "architecture", label: "Thematic Infrastructure", desc: "Full set builds and structural elements that immerse guests in the brand world." },
    { icon: "celebration", label: "Interactive Activities", desc: "Engaging activations and experiences that create memorable brand moments." },
    { icon: "schedule", label: "Program Scheduling", desc: "Timed, detailed runsheets that keep every element perfectly on track." },
    { icon: "palette", label: "Custom Branding & Ambiance", desc: "Bespoke signage, lighting, and décor that turn spaces into brand statements." },
    { icon: "chair", label: "Furniture & Styling Layout", desc: "Curated furniture selection and arrangement designed for brand and comfort." },
    { icon: "engineering", label: "Setup Supervision", desc: "On-ground oversight ensuring every element is executed exactly as designed." },
    { icon: "settings_input_hdmi", label: "Technical Support", desc: "AV, lighting, and technical infrastructure managed end-to-end." },
  ]

  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Corporate Events</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
              Experiences That Define Brands.
            </h2>
            <p className="text-[#5e3f3e] mt-4 max-w-xl font-light text-lg">
              Immersive, fully branded corporate events — from thematic infrastructure to technical
              execution — that forge deep emotional connections between brands and their audiences.
            </p>
          </div>
          <Link href="/book" className="kinetic-gradient text-white font-headline font-bold py-4 px-8 rounded-full text-base shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all text-center shrink-0">
            Plan an Event
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {eventServices.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-[1.5rem] p-6 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/25 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-4 group-hover:bg-[#FF1E41]/15 transition-colors">
                <span className="material-symbols-outlined text-[#FF1E41] text-xl">{s.icon}</span>
              </div>
              <h3 className="text-sm font-headline font-bold text-[#1c1b1b] mb-2">{s.label}</h3>
              <p className="text-[#5e3f3e] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PHOTOGRAPHY ────────────────────────────────────────────────────── */

function PhotographySection() {
  return (
    <section className="py-28 bg-[#1c1b1b] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF1E41]/8 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-6 block">Professional Photography</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-white mb-6">
              Every Frame,{" "}
              <span className="text-[#FF1E41] italic">Intentional.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8 font-light">
              Full-service professional photography — pre-shoot strategy through to final delivery — with
              commercial usage rights, styling, and the crew to execute flawlessly.
            </p>
            <Link href="/book" className="kinetic-gradient text-white font-headline font-bold py-4 px-8 rounded-full text-base shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all inline-block">
              Book a Shoot
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {[
              { icon: "forum", title: "Pre-Shoot Consultation", desc: "We align on creative direction, mood boards, and shot lists before production day." },
              { icon: "map", title: "Location Scouting & Permits", desc: "We handle site surveys, permit applications, and all location logistics." },
              { icon: "camera_alt", title: "Professional Equipment & Crew", desc: "Full production crew with lighting rigs, cameras, and on-set direction." },
              { icon: "checkroom", title: "Styling & Makeup Services", desc: "Full styling and makeup for talent — ensuring every subject looks their best." },
              { icon: "photo_library", title: "Multiple Shot Variations", desc: "Extensive coverage with multiple looks, angles, and set-ups in each session." },
              { icon: "cloud_done", title: "High-Res Delivery & Rights", desc: "Retouched, high-resolution files delivered with a full commercial usage rights package." },
            ].map((s) => (
              <div key={s.title} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#FF1E41]/30 transition-colors group">
                <span className="material-symbols-outlined text-[#FF1E41] text-xl mb-3 block">{s.icon}</span>
                <h3 className="text-sm font-headline font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TALENT MANAGEMENT ─────────────────────────────────────────────── */

function TalentSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Talent Management</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            A/A+ Celebrity & Vocalist Talent
          </h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">
            End-to-end talent management for top-tier celebrities and vocalists across
            Hollywood, Bollywood, and regional markets — from brand ambassador deals to
            full campaign representation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "movie_filter",
              title: "Hollywood & Bollywood Talent",
              desc: "Access to and management of top-tier international talent for brand campaigns, endorsements, and corporate appearances.",
              tags: ["Celebrity Endorsements", "Brand Campaigns", "Corporate Appearances"],
            },
            {
              icon: "music_note",
              title: "Vocalist Representation",
              desc: "Full management for vocalists — from recording projects to brand partnerships, jingle recordings, and live event performances.",
              tags: ["Jingle Recording", "Brand Partnerships", "Live Performances"],
            },
            {
              icon: "handshake",
              title: "Brand Ambassador Partnerships",
              desc: "Strategic matching of brand to talent for authentic, high-impact ambassador relationships that resonate with the right audiences.",
              tags: ["Ambassador Strategy", "Contract Negotiation", "Campaign Integration"],
            },
          ].map((s) => (
            <div key={s.title} className="bg-[#fcf9f8] rounded-[2rem] p-8 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-xl transition-all duration-500 group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-6 group-hover:bg-[#FF1E41]/15 transition-colors">
                <span className="material-symbols-outlined text-[#FF1E41] text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-[#1c1b1b] mb-3">{s.title}</h3>
              <p className="text-[#5e3f3e] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2 border-t border-[#e8bcbb]/20 pt-5">
                {s.tags.map((tag) => (
                  <span key={tag} className="bg-[#1c1b1b] text-white text-[10px] font-bold px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── IMPACT ─────────────────────────────────────────────────────────── */

function ImpactSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            A World-Class Brand Agency.
          </h2>
          <p className="text-[#5e3f3e] mt-4 max-w-3xl mx-auto text-lg font-light">
            Solyio is a high-impact team driving the revolutionary convergence of Artificial Intelligence and Traditional
            Marketing. With 15+ years of experience, we have a proven track record of creating transformative brand
            experiences that build deep emotional connections between brands and their customers — at scale, across borders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { val: "15+", label: "Years in Brand Marketing", sub: "National & international clients" },
            { val: "40+", label: "Global Organizations", sub: "From Fortune 500 to fast-growth brands" },
            { val: "4", label: "Continents Served", sub: "US · UAE · UK · Asia-Pacific" },
            { val: "LinkedIn", label: "Learning Recognized", sub: "AI in professional practice" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-[1.5rem] p-7 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/20 hover:shadow-lg transition-all">
              <div className="text-4xl font-headline font-black text-[#FF1E41] mb-2">{s.val}</div>
              <div className="text-[#1c1b1b] font-bold mb-1">{s.label}</div>
              <div className="text-[#5e3f3e] text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#e8bcbb]/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline font-bold text-[#1c1b1b]">Our Core Specializations</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Corporate Branding", "Communication Strategy", "Experiential Marketing",
              "Design Strategy", "AI + Marketing Convergence", "Social Media Strategy",
              "TVC & DVC Production", "Brand Audio Identity", "Celebrity Talent Management",
              "E-Commerce Campaigns", "Corporate Events", "AI Creative Generation",
              "Brand Collateral", "Professional Photography", "Speaker Sessions",
            ].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-[#e8bcbb]/40 text-[#5e3f3e] text-sm font-bold hover:border-[#FF1E41]/40 hover:text-[#FF1E41] transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="py-28 px-6 sm:px-8 bg-[#fcf9f8]">
      <div className="max-w-4xl mx-auto bg-[#FF1E41] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(255,30,65,0.25)]">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto font-light">
            From brand strategy to AI-powered creative production — let&apos;s build
            something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white text-[#FF1E41] px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-[#fcf9f8] transition-colors shadow-xl">
              Start a Project
            </Link>
            <Link href="/portfolio" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white hover:text-[#FF1E41] transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-[#5e3f3e] text-sm mb-4 font-bold uppercase tracking-widest">Explore Other Services</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: "AI Automation", href: "/services/ai-automation" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Mobile Development", href: "/services/mobile-development" },
            { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
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

/* ─── PAGE ─────────────────────────────────────────────────────────────  */

export default function MarketingServicesPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <WorkShowcaseSection />
        <ServicesSection />
        <BrandStrategySection />
        <AIConvergenceSection />
        <GenAISection />
        <ContentProductionSection />
        <EventsSection />
        <PhotographySection />
        <TalentSection />
        <ImpactSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
