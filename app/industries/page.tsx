import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Industries | Solyio — Real Results Across Every Sector",
  description:
    "See how Solyio helps businesses in marketing, e-commerce, healthcare, real estate, logistics and more scale with web, mobile, cloud and AI solutions.",
  alternates: { canonical: "https://solyio.com/industries" },
}

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative px-8 py-32 md:py-48 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF1E41]/5 to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF1E41]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF1E41]/5 rounded-full border border-[#FF1E41]/10 mb-8">
          <span className="w-2 h-2 bg-[#FF1E41] rounded-full animate-pulse" />
          <span className="font-headline text-[10px] font-bold tracking-[0.3em] uppercase text-[#FF1E41]">
            Real Use Cases · Real Results
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter text-[#1c1b1b] mb-8">
              We Help{" "}
              <span className="bg-gradient-to-r from-[#FF1E41] to-[#bb0029] bg-clip-text text-transparent italic">
                Every
              </span>{" "}
              Industry Scale.
            </h1>
          </div>

          <div className="lg:col-span-4 pb-4">
            <p className="text-xl text-[#534342] font-light leading-relaxed mb-8 border-l-2 border-[#FF1E41]/20 pl-6">
              From marketing agencies to healthcare clinics to property managers
              — we build the web, mobile, cloud and AI systems that make your
              business faster, leaner, and ready to grow.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-headline text-3xl font-black text-[#FF1E41]">6+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Industries Served
                </span>
              </div>
              <div className="w-px h-10 bg-[#d8c2c1]/30" />
              <div className="flex flex-col">
                <span className="font-headline text-3xl font-black text-[#1c1b1b]">9+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Live Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── INDUSTRY USE CASES ─────────────────────────────────────────── */

function IndustrySection() {
  return (
    <section className="px-8 py-32 bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex justify-between items-end mb-16 border-b border-[#d8c2c1]/30 pb-10">
          <div>
            <h2 className="font-headline text-4xl font-black tracking-tight text-[#1c1b1b]">
              Industry Use Cases
            </h2>
            <p className="text-[#534342] mt-2 uppercase text-xs tracking-widest font-bold">
              Built from real client projects
            </p>
          </div>
          <Link
            href="/portfolio"
            className="font-headline text-xs font-bold tracking-[0.2em] uppercase text-[#FF1E41] border-b-2 border-[#FF1E41] pb-1 hover:opacity-70 transition-opacity"
          >
            View All Projects
          </Link>
        </div>

        {/* Row 1: Marketing (8) + Healthcare (4) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Marketing */}
          <div className="md:col-span-8 group bg-white rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)] transition-transform duration-500 hover:-translate-y-2">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-12 flex flex-col justify-between order-2 md:order-1">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#FF1E41]/5 text-[#FF1E41] text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
                    Marketing Agencies
                  </div>
                  <h3 className="font-headline text-4xl font-black mb-4 leading-none text-[#1c1b1b]">
                    10x Content Output with AI Automation
                  </h3>
                  <p className="text-[#534342] text-sm leading-relaxed mb-4">
                    We built <strong>RoboMarketer</strong> for a marketing agency
                    drowning in production. A 4-person team was spending 85% of
                    their time just producing content with zero time left for
                    strategy.
                  </p>
                  <p className="text-[#534342] text-sm leading-relaxed mb-8">
                    We deployed three AI agents — one for content creation in
                    their brand voice, one for campaign scheduling, and one for
                    real-time performance optimization. The result: 10x content
                    output, 40 hours saved per week, and 285% campaign ROI.
                  </p>
                </div>
                <div className="bg-[#FF1E41]/5 rounded-2xl p-6 border border-[#FF1E41]/10">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#FF1E41] mb-1">
                    Project Result
                  </div>
                  <div className="text-4xl font-headline font-black text-[#FF1E41]">
                    10x{" "}
                    <span className="text-sm font-normal text-[#534342] uppercase tracking-tighter">
                      Content Output
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden order-1 md:order-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Marketing automation"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxatwIPCTLKa3p7LMX4hUUmGWpz83kDhLHSx68PVWyDaC0POc298nq9X--UGd55dYKQtFyEhZjwAdUQVq2dy6mWd4DVQmpe7F_q0fzPkx9xlKqzKh79O0sFWtceASrYioGLznGPew5C8gH7g5nKML7dyzOtfyg9StctyB58RvpeC56RCLnk0uu24aL1HxU3FFLHmXM013kFiyWkzF8xdm1A7oV2bzQL_Z4VHe9t4EyyT6RshHIJYahC6txJ-LSk1l_Hd6CAIEDO380"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className="md:col-span-4 group bg-[#1c1b1b] rounded-3xl p-10 flex flex-col justify-between text-white overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)] transition-transform duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1E41]/20 blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#FF1E41] text-white rounded-xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  health_and_safety
                </span>
              </div>
              <h3 className="font-headline text-3xl font-black mb-4">
                Healthcare Clinics
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                We built <strong className="text-white/80">PriceSmurf</strong> — an
                AI patient engagement platform that eliminated scheduling chaos
                for a multi-location clinic losing revenue to no-shows.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-10">
                The AI handles appointment reminders, smart rescheduling,
                symptom triage, and EHR sync — all automated.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#FF1E41]">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  60% Fewer No-Shows
                </div>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#FF1E41]">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  3x Patient Engagement
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1 text-white">
                Project Result
              </div>
              <div className="text-5xl font-headline font-black text-[#FF1E41]">
                −60%{" "}
                <span className="text-xs font-normal text-white uppercase tracking-tighter">
                  No-Shows
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: E-commerce (4) + Real Estate (4) + Logistics (4) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* E-commerce */}
          <div className="md:col-span-4 group bg-white/70 backdrop-blur-2xl border border-[#FF1E41]/8 rounded-3xl p-10 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)] transition-transform duration-500 hover:-translate-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="E-commerce"
              className="absolute inset-0 w-full h-full object-cover opacity-5 grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw-xX1f1MGAOxiehVT8hFYOFc1HXVcPXvVqbGagEAmOnOzxzISQ6uLNO9YT8IJJ5Z8LiKijFQqYd5tLk7YhTbREQ90dJRySxzC-JAaRx6zBNifQHCcWrPpvWJ87nUTeVFxvNz_QtF1D5yfcb3ZJ81dufujA9YF1zfF_GKjXi_i_EwlhE9xdvC4xXc-BeSJdtMSX5CG9UB3yBwVjAs7DNEBM5emKZWaHpiCNvTLzPZA39pwTAapmohHJUU45xNeAYshjnpk"
            />
            <div className="relative z-10 flex flex-col h-full">
              <span
                className="material-symbols-outlined text-[#FF1E41] text-4xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                storefront
              </span>
              <h3 className="font-headline text-2xl font-black mb-4 text-[#1c1b1b]">
                E-Commerce & Retail
              </h3>
              <p className="text-[#534342] text-sm mb-4">
                <strong>CashAds</strong> manages $2M+ monthly ad spend for an
                e-commerce brand with AI-driven bidding and creative
                optimization across Google, Meta and TikTok.
              </p>
              <p className="text-[#534342] text-sm mb-auto">
                <strong>ZenCart</strong> — a Flutter mobile app with Apple Pay
                and Google Pay — achieved 185% higher conversion vs the client's
                previous app.
              </p>
              <div className="mt-12 pt-8 border-t border-[#d8c2c1]/30">
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#FF1E41] mb-1">
                  Project Result
                </div>
                <div className="text-4xl font-headline font-black text-[#1c1b1b]">
                  +185%{" "}
                  <span className="text-xs font-normal opacity-60 uppercase tracking-tighter">
                    Conversion
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Real Estate */}
          <div className="md:col-span-4 group bg-white border border-[#d8c2c1]/20 rounded-3xl p-10 overflow-hidden relative transition-transform duration-500 hover:-translate-y-2 shadow-[0_40px_100px_-20px_rgba(28,27,27,0.08)] [&::after]:content-[''] [&::after]:absolute [&::after]:left-0 [&::after]:top-0 [&::after]:w-[2px] [&::after]:h-full [&::after]:bg-[#FF1E41] [&::after]:scale-y-0 [&::after]:origin-top [&::after]:transition-transform [&::after]:duration-400 hover:[&::after]:scale-y-100">
            <div className="flex justify-between items-start mb-10">
              <div className="w-12 h-12 bg-[#1c1b1b]/5 rounded-full flex items-center justify-center text-[#FF1E41]">
                <span className="material-symbols-outlined text-2xl">apartment</span>
              </div>
            </div>
            <h3 className="font-headline text-2xl font-black mb-4 text-[#1c1b1b]">
              Real Estate & PropTech
            </h3>
            <p className="text-[#534342] text-sm mb-4">
              <strong>Upgrr</strong> — an AI operations layer for a property
              management company handling 500+ units. Tenant communication,
              maintenance routing and rent collection — all automated.
            </p>
            <p className="text-[#534342] text-sm mb-auto">
              What used to require 3 staff members is now handled by a single
              AI agent with 80% auto-resolution rate.
            </p>
            <div className="mt-12 pt-8 border-t border-[#d8c2c1]/30">
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#FF1E41] mb-1">
                Project Result
              </div>
              <div className="text-4xl font-headline font-black text-[#1c1b1b]">
                80%{" "}
                <span className="text-xs font-normal opacity-60 uppercase tracking-tighter">
                  Auto-Resolved
                </span>
              </div>
            </div>
          </div>

          {/* Logistics */}
          <div className="md:col-span-4 group bg-[#FF1E41] rounded-3xl p-10 text-white overflow-hidden relative transition-transform duration-500 hover:-translate-y-2 shadow-[0_40px_100px_-20px_rgba(255,30,65,0.25)]">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-[40px] pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="material-symbols-outlined text-white text-4xl mb-8">
                local_shipping
              </span>
              <h3 className="font-headline text-2xl font-black mb-4">
                Delivery & Logistics
              </h3>
              <p className="text-white/80 text-sm mb-4">
                <strong>DeliverIQ</strong> — a React Native on-demand delivery
                marketplace with Stripe Connect split payments, real-time driver
                tracking and automated payouts to 500+ courier partners.
              </p>
              <p className="text-white/80 text-sm mb-auto">
                Built on iOS and Android, reducing delivery coordination time by
                45% and scaling to a full courier network from day one.
              </p>
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/60 mb-1">
                  Project Result
                </div>
                <div className="text-4xl font-headline font-black text-white">
                  −45%{" "}
                  <span className="text-xs font-normal opacity-60 uppercase tracking-tighter">
                    Coord. Time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: SaaS / Analytics (full width) */}
        <div className="grid grid-cols-1 gap-8">
          <div className="group bg-[#1c1b1b] rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(28,27,27,0.15)] transition-transform duration-500 hover:-translate-y-2">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#FF1E41]/20 text-[#FF1E41] text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
                    SaaS & Business Intelligence
                  </div>
                  <h3 className="font-headline text-4xl font-black mb-4 leading-none text-white">
                    Turn Your Data Into Decisions
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    We built <strong className="text-white/80">ExpertAIQ</strong>{" "}
                    for a research firm with petabytes of data spread across 15+
                    sources. Their analysts were spending 80% of their time just
                    preparing data — with insights already stale by the time they
                    arrived.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    We built an AI intelligence layer on top of their entire
                    data infrastructure. Analysts now ask questions in plain
                    English and get structured answers, auto-generated reports,
                    and anomaly alerts — in seconds, not weeks.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { val: "80%", label: "Faster Research" },
                      { val: "15+", label: "Data Sources" },
                      { val: "500+", label: "Reports/Month" },
                      { val: "92%", label: "Decision Accuracy" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/5 rounded-2xl p-4">
                        <div className="text-[#FF1E41] font-headline font-black text-2xl">{s.val}</div>
                        <div className="text-[10px] uppercase text-white/40 font-bold mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative min-h-[300px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Data analytics"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr9fnTW_6E-Y2bV4Kr_g3FBVcPc_oWjazgYVtcrL2g8a2eachaPcPHEoCneE62ZIIAQm_QR0K85jTmvkWu6Cb0ro7kuGKxnXlicgioW0KzSbiOyRwwrrifI4rE125N9M56f5sr-LHA__QM89RPWcXXI-V03aN_LIwTio-se2sDknXG5rLLEEWi-SLof1LJGR6oAn4T9bxaqvWtVonQL2i2OlM7VYIUjMGGDHpBVcNjZH1ks_Sz48N1H74_Cka7jIYVj99oTGiy-U1v"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b1b] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── HOW WE WORK ────────────────────────────────────────────────── */

function MethodSection() {
  const steps = [
    {
      n: "01",
      title: "Discover",
      body: "We sit with your team, understand the business, identify where time and money are being lost, and map out exactly what needs to be built.",
    },
    {
      n: "02",
      title: "Build",
      body: "We design and develop the solution — web platform, mobile app, cloud setup, or AI automation — with fast delivery cycles and constant communication.",
    },
    {
      n: "03",
      title: "Launch & Scale",
      body: "We ship, monitor, and iterate. After launch we make sure everything runs smoothly and is ready to grow with your business.",
    },
  ]

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="font-headline text-xs font-black tracking-[0.4em] uppercase text-[#FF1E41] mb-4 block">
            How We Work
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-[#1c1b1b]">
            Simple Process.{" "}
            <span className="italic text-[#FF1E41]">Real Results.</span>
          </h2>
          <p className="mt-6 text-xl text-[#534342] font-light">
            No jargon, no overcomplicated processes. We move fast and build
            things that actually work for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map(({ n, title, body }) => (
            <div key={n} className="relative group">
              <div className="text-[120px] font-headline font-black text-[#FF1E41]/5 absolute -top-20 -left-4 select-none group-hover:text-[#FF1E41]/10 transition-colors leading-none">
                {n}
              </div>
              <div className="relative pt-4">
                <h4 className="font-headline text-xl font-extrabold text-[#1c1b1b] mb-4">
                  {title}
                </h4>
                <p className="text-[#534342] text-sm leading-relaxed">{body}</p>
              </div>
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
    <section className="px-8 py-40 text-center relative overflow-hidden bg-[#1c1b1b] text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF1E41] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-headline text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
          Your Industry.{" "}
          <span className="text-[#FF1E41] italic">Our Expertise.</span>
        </h2>
        <p className="text-white/60 text-xl mb-16 font-light max-w-2xl mx-auto leading-relaxed">
          Whether you need a web platform, a mobile app, cloud infrastructure,
          or AI automation — we know how to build it and make it work for your
          specific business.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/book"
            className="bg-[#FF1E41] text-white px-12 py-6 rounded-full font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#FF1E41] transition-all shadow-xl"
          >
            Book a Free Call
          </Link>
          <Link
            href="/portfolio"
            className="bg-white/5 border border-white/20 text-white px-12 py-6 rounded-full font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function IndustriesPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main className="pt-20">
        <HeroSection />
        <IndustrySection />
        <MethodSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
