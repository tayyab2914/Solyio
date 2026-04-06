import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { GlobalPresenceSection } from "@/components/global-presence-section"
import { HeroVisual } from "@/components/hero-visual"
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
    <section className="relative pt-48 pb-32 px-12 overflow-hidden min-h-screen flex items-center bg-[#fcf9f8]">
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

const services = [
  {
    icon: "psychology",
    title: "AI Workflow Automation",
    desc: "We automate repetitive business processes with custom AI — from lead handling and invoicing to customer support and internal ops.",
  },
  {
    icon: "language",
    title: "Web Development",
    desc: "Fast, scalable web platforms built for growth. From landing pages to full-stack SaaS products, we ship clean and performant.",
  },
  {
    icon: "smartphone",
    title: "Mobile Development",
    desc: "Cross-platform iOS & Android apps with smooth UX. We turn your idea into a polished app your users will love.",
  },
  {
    icon: "cloud",
    title: "Cloud Infrastructure",
    desc: "Reliable, secure, and cost-efficient cloud setups on AWS, GCP, or Azure — built to scale with your business without the overhead.",
  },
]

function ValuePropSection() {
  return (
    <section className="py-40 bg-[#f7f4f3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
          {/* Sticky left */}
          <div className="md:col-span-1 sticky top-32">
            <div className="mb-12">
              <h2 className="text-6xl font-headline font-bold text-[#1c1b1b] mb-8 tracking-tighter leading-[0.9]">
                Everything Your{" "}
                <br />
                <span className="text-[#FF1E41] italic underline decoration-4 underline-offset-8">
                  Business Needs
                </span>
              </h2>
              <p className="text-[#5e3f3e] text-xl leading-relaxed opacity-80">
                We don&apos;t just build software. We build systems that run,
                scale, and work for your business — day and night.
              </p>
            </div>

            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyLM5osB1-6CMK3Mg76HLntAj_KQkM-SoMncTxgqjMjIT0QqAVAArd8xOESXNoA9-NHLuObv_sV3YbKxx1CS6-QvlEHTRE7bRawoTFhDgC7faWWGUP__3qv06_Dp082K-Ku_u2c5wiR01lNoP0yNBJi1OcOS6Y51R6YdCQAYIU2yJkc1NCkhR4trAHBOVZpdNPVpzAhevT9Pz1yGaX1zZlfXjcXPAg55FtZXLUjw6BKAGWpU5cP6qSwfyzmevnhzLY6LaPDOEVEYZI"
                alt="Blockchain pattern"
                className="w-full h-80 object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#FF1E41]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
            </div>
          </div>

          {/* 2×2 cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-12 rounded-[2.5rem] border border-[#e8bcbb]/20 hover:border-[#FF1E41]/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#FF1E41]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <span className="material-symbols-outlined text-[#FF1E41] text-6xl mb-10 group-hover:scale-110 transition-transform block">
                  {s.icon}
                </span>
                <h3 className="text-2xl font-headline font-bold text-[#1c1b1b] mb-6">
                  {s.title}
                </h3>
                <p className="text-[#5e3f3e] leading-relaxed text-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SPECIALIZATION BENTO ───────────────────────────────────────── */

function SpecializationSection() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Heading */}
        <div className="mb-12 md:mb-20 lg:mb-24 flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-[#1c1b1b] mb-8 tracking-tighter uppercase italic leading-none">
            Our Specialization
          </h2>
          <div className="h-2 w-48 bg-[#FF1E41] rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-ping" />
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 h-auto lg:h-[800px]">
          {/* Enterprise Architecture – wide top-left */}
          <div className="col-span-12 lg:col-span-8 bg-[#f7f4f3] rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-end relative overflow-hidden group border border-[#e8bcbb]/20 hover:shadow-2xl transition-all duration-500 min-h-[280px] md:min-h-[340px] lg:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUj7sEBoM30ylGv_4gX0IYg8M5Zm14YJnQLhWkIvh7RKNgQJf2XiUDR3k_hQfUjSiTwJ815CsLDmXYwxloOiGDLWYkVPSIhsPDsB3k81MVrnYtQoj94pFhAE7jvVdpDBlZS_4fX4TWW_kcqUk2vlgentDWUH_7FPwwmQMWJrT7AI9UrTOGCHFzFGvNT9NXfTcK-9Curyr-ZZYCdhYdNIIyWPY9dCxhmdX_7F7l7aSfp0OHfTb_lcUrQALNyqQlAePcwuvRr4hwrd-o"
              alt="Code background"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000"
            />
            <div className="relative z-10">
              <h4 className="text-[#FF1E41] text-[11px] font-black uppercase tracking-[0.4em] mb-4 md:mb-8">
                Our Core Service
              </h4>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-[#1c1b1b] mb-4 md:mb-8 tracking-tighter">
                AI-Powered
                <br />
                Business Automation
              </h3>
              <p className="max-w-xl text-[#5e3f3e] text-base md:text-xl leading-relaxed font-light">
                We automate the workflows slowing you down — from sales pipelines
                and support to reporting and ops. Less manual work, more growth.
              </p>
            </div>
          </div>

          {/* Venture Acceleration – top-right */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#ebe8e7] rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between border border-[#FF1E41]/5 hover:border-[#FF1E41]/30 transition-all duration-500 group shadow-sm hover:shadow-xl min-h-[260px] md:min-h-0">
            <span className="material-symbols-outlined text-[#FF1E41] text-5xl md:text-7xl group-hover:translate-x-4 transition-transform duration-500">
              campaign
            </span>
            <div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-[#1c1b1b] mb-4 md:mb-6 tracking-tight">
                Marketing Services
              </h3>
              <p className="text-[#5e3f3e] text-base md:text-lg leading-relaxed opacity-90">
                SEO, social media, paid ads, and content strategy — we help
                you get found, build trust, and convert visitors into customers.
              </p>
            </div>
          </div>

          {/* 2X red stat – bottom-left */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#FF1E41] rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between text-white shadow-[0_40px_80px_-20px_rgba(255,30,65,0.4)] relative overflow-hidden group min-h-[260px] md:min-h-0">
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            <div className="text-6xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter relative z-10 leading-none">
              5×
            </div>
            <p className="font-bold text-lg md:text-2xl leading-tight relative z-10">
              Faster operations on average after clients automate workflows
              with our AI solutions.
            </p>
          </div>

          {/* AI-First Engineering – bottom-right wide */}
          <div className="col-span-12 lg:col-span-8 glass-panel rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between border border-[#e8bcbb]/30 shadow-xl hover:shadow-2xl transition-all duration-500 group gap-6 sm:gap-8">
            <div className="flex-1 sm:pr-8 lg:pr-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#1c1b1b] mb-4 md:mb-8 tracking-tighter">
                Cloud Infrastructure
              </h3>
              <p className="text-[#5e3f3e] text-base md:text-xl max-w-lg leading-relaxed font-light">
                We design and manage your cloud environment so it's secure,
                fast, and ready to scale — without the complexity or hidden costs.
              </p>
            </div>
            <div className="hidden lg:block w-52 h-52 rotate-12 slash-mask bg-[#e5e2e1] overflow-hidden relative shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR_n247jvGbfR2rg5qz2UGcEO10wqwiqTOIZVpW-CmXi_ZSoN7b3OZH3mEiHqyvpPEhgStbTgewpi1e9WQ4fBqh14XNL4d0D3QAknZOk5j9NedN7cGdaIPuAX-vuBSaJFMYVBdJoV_Aq2i5KGOJS5uX6APBc7eGCRXYbYbJk5pstEbtZ-pm0wS-k1oEs17qJc5hX1XZ9TPKbbCWPFY_5QDdwR7YphwLnAv54fclMs7o9IrS_aZE3QYmoRK8Wnui3BcGUKXF3RhGTi4"
                alt="AI concept"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-1000"
              />
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
        <div className="absolute inset-0 kinetic-gradient opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-full h-1 kinetic-gradient" />
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
        <SpecializationSection />
        <GlobalPresenceSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
