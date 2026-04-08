import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "AI Automation Services | Solyio — Automate Your Business Workflows",
  description:
    "Solyio builds custom AI automation systems that eliminate repetitive work, handle customer interactions, and run your business operations 24/7 — tailored to your exact workflow.",
  alternates: { canonical: "https://solyio.com/services/ai-automation" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Services",
  provider: { "@type": "Organization", name: "Solyio", url: "https://solyio.com" },
  description:
    "Custom AI automation systems for workflow automation, intelligent chatbots, marketing automation, and business process automation.",
  areaServed: "Worldwide",
  serviceType: "AI Automation",
}

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 px-6 sm:px-8 overflow-hidden bg-[#fcf9f8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Ambient glows */}
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
                AI Automation
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.88] text-[#1c1b1b] mb-8">
              Stop Doing Work{" "}
              <span className="text-[#FF1E41] italic">AI Can Handle.</span>
            </h1>

            <p className="text-xl text-[#5e3f3e] max-w-xl mb-10 leading-relaxed font-light">
              We build custom AI systems that take over repetitive tasks —
              customer support, lead follow-up, scheduling, reporting, content
              creation — and run them automatically, around the clock.
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

          {/* Right: stat card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-panel rounded-[2.5rem] p-8 border border-[#e8bcbb]/20 shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { val: "40h", label: "Saved per week", color: "text-[#FF1E41]" },
                  { val: "80%", label: "Tasks auto-resolved", color: "text-[#1c1b1b]" },
                  { val: "10x", label: "Content output", color: "text-[#1c1b1b]" },
                  { val: "24/7", label: "Always running", color: "text-[#FF1E41]" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className={`text-3xl font-headline font-black ${s.color}`}>{s.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#1c1b1b] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF1E41]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#FF1E41] text-xl">psychology</span>
                </div>
                <div>
                  <div className="text-white font-headline font-bold text-sm">AI AGENTS ACTIVE</div>
                  <div className="text-white/40 text-xs">Running across client workflows</div>
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

/* ─── PROBLEM ────────────────────────────────────────────────────── */

const problems = [
  {
    icon: "schedule",
    title: "Manual Work Is Eating Your Team's Time",
    desc: "Your team spends hours on tasks that follow the same pattern every time — answering the same questions, copy-pasting data, chasing leads, sending reminders. That time could go to actual strategy.",
  },
  {
    icon: "support_agent",
    title: "Customer Queries Fall Through the Cracks",
    desc: "No one's available at 11pm when a customer needs help. Slow response times cost you sales, damage satisfaction scores, and burn your support team.",
  },
  {
    icon: "trending_down",
    title: "Marketing Teams Drowning in Production",
    desc: "Content calendars, A/B tests, campaign scheduling, performance reporting — the production overhead leaves no room for the creative thinking that actually moves metrics.",
  },
  {
    icon: "data_usage",
    title: "Insights Are Buried in Spreadsheets",
    desc: "Your data exists, but pulling it together and making sense of it takes half a day. By the time you have the report, the moment to act on it has already passed.",
  },
]

function ProblemSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            Why Businesses Come to Us
          </h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">
            These are the problems we hear on every first call — and the ones
            we know how to fix.
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
    icon: "search",
    title: "Map Your Workflows",
    desc: "We spend time understanding exactly how your business operates — where work enters, where it gets stuck, and what follows a repeatable pattern that an AI system can own.",
  },
  {
    n: "02",
    icon: "architecture",
    title: "Design the AI System",
    desc: "We design a custom solution: the right agents, the right triggers, the right integrations. No off-the-shelf templates — every system is built for your specific operations.",
  },
  {
    n: "03",
    icon: "integration_instructions",
    title: "Build & Integrate",
    desc: "We plug into your existing tools — CRM, email, calendar, database, Slack — so the AI works inside your workflow, not alongside it. Zero disruption to how you currently operate.",
  },
  {
    n: "04",
    icon: "monitoring",
    title: "Monitor & Improve",
    desc: "We watch the system in production, catch edge cases, and improve it over time. Your AI gets smarter the longer it runs.",
  },
]

function SolutionSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b] mb-6">
              How We Build Your Automation
            </h2>
            <p className="text-[#5e3f3e] leading-relaxed text-lg font-light">
              Every automation we build starts with understanding your business — not
              with plugging in a template. Here's how we go from first call to live
              AI system.
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

function CaseStudiesSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
              AI Automation in the Wild
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF1E41] border-b-2 border-[#FF1E41] pb-1 hover:opacity-70 transition-opacity shrink-0"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* RoboMarketer */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-[#e8bcbb]/20 hover:shadow-2xl transition-all duration-500 group flex flex-col">
            <div className="bg-[#1c1b1b] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF1E41]/15 rounded-full blur-[60px]" />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#FF1E41]/20 text-[#FF1E41] text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                    Marketing Agency
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-2">RoboMarketer</h3>
                  <p className="text-white/50 text-sm">AI marketing automation that never sleeps</p>
                </div>
                <span className="material-symbols-outlined text-[#FF1E41] text-4xl opacity-60">campaign</span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-2">The Problem</div>
                <p className="text-[#5e3f3e] text-sm leading-relaxed">
                  A 4-person marketing team was spending 85% of their time on content production with zero bandwidth left for strategy. Competitors were publishing daily — they could barely manage weekly.
                </p>
              </div>

              <div className="mb-6">
                <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-2">Our Solution</div>
                <p className="text-[#5e3f3e] text-sm leading-relaxed">
                  We built three AI agents: a Content Agent trained on their brand voice, a Campaign Agent for distribution scheduling, and a Performance Agent that reallocates budget in real time. All three work together autonomously.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { val: "10x", label: "Content Output" },
                  { val: "285%", label: "Campaign ROI" },
                  { val: "40h", label: "Saved Weekly" },
                  { val: "94%", label: "Brand Accuracy" },
                ].map((m) => (
                  <div key={m.label} className="bg-[#f7f2f1] rounded-xl p-4">
                    <div className="text-[#FF1E41] font-headline font-black text-xl">{m.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["GPT-4", "Vercel AI SDK", "Next.js", "PostgreSQL", "Stripe"].map((t) => (
                  <span key={t} className="bg-[#1c1b1b] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href="/portfolio/robomarketer"
                className="mt-auto inline-flex items-center gap-2 text-[#FF1E41] font-headline font-bold text-sm group-hover:gap-3 transition-all"
              >
                Read Full Case Study
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* PriceSmurf */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-[#e8bcbb]/20 hover:shadow-2xl transition-all duration-500 group flex flex-col">
            <div className="bg-[#FF1E41] p-8 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px]" />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                    Healthcare Clinic
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-2">PriceSmurf</h3>
                  <p className="text-white/70 text-sm">AI patient engagement & scheduling intelligence</p>
                </div>
                <span className="material-symbols-outlined text-white text-4xl opacity-60">health_and_safety</span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-2">The Problem</div>
                <p className="text-[#5e3f3e] text-sm leading-relaxed">
                  A multi-location clinic was losing thousands in revenue to a 30% no-show rate. Their team was spending hours on manual reminder calls, rescheduling, and EHR data entry — with no time for actual patient care.
                </p>
              </div>

              <div className="mb-6">
                <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-2">Our Solution</div>
                <p className="text-[#5e3f3e] text-sm leading-relaxed">
                  We deployed an AI patient engagement engine: intelligent appointment reminders, smart rescheduling conversations, symptom triage, and bidirectional EHR sync — all automated and running 24/7.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { val: "−60%", label: "No-Show Rate" },
                  { val: "3x", label: "Patient Engagement" },
                  { val: "25h", label: "Saved Weekly" },
                  { val: "4.8★", label: "Patient Rating" },
                ].map((m) => (
                  <div key={m.label} className="bg-[#f7f2f1] rounded-xl p-4">
                    <div className="text-[#FF1E41] font-headline font-black text-xl">{m.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Claude AI", "Vercel AI SDK", "Twilio", "Supabase", "Next.js"].map((t) => (
                  <span key={t} className="bg-[#1c1b1b] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href="/portfolio/healthtrack-ai"
                className="mt-auto inline-flex items-center gap-2 text-[#FF1E41] font-headline font-bold text-sm group-hover:gap-3 transition-all"
              >
                Read Full Case Study
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── BUSINESS IMPACT ────────────────────────────────────────────── */

function ImpactSection() {
  return (
    <section className="py-28 bg-[#1c1b1b] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF1E41]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
            Business Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
            What Happens After You Automate
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-lg font-light">
            The numbers our clients see within the first 30 days of going live.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { val: "40h+", label: "Hours saved per week", sub: "On average across all clients" },
            { val: "80%", label: "Tasks auto-resolved", sub: "Without human intervention" },
            { val: "3x", label: "Faster response time", sub: "Customer-facing interactions" },
            { val: "−60%", label: "Operational overhead", sub: "In automated departments" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-[1.5rem] p-7 border border-white/10 hover:border-[#FF1E41]/30 transition-colors">
              <div className="text-4xl font-headline font-black text-[#FF1E41] mb-2">{s.val}</div>
              <div className="text-white font-bold mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-[1.5rem] p-8 border border-white/10">
            <div className="text-xs font-black tracking-widest uppercase text-white/40 mb-6">Before Automation</div>
            <ul className="space-y-4">
              {[
                "Team spends 60%+ of time on repetitive tasks",
                "Customer queries wait hours for a response",
                "Reports take half a day to compile",
                "Marketing output limited by team capacity",
                "Human errors in data entry and follow-ups",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/50 text-sm">
                  <span className="material-symbols-outlined text-red-500/50 text-sm mt-0.5 shrink-0">close</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FF1E41]/10 rounded-[1.5rem] p-8 border border-[#FF1E41]/20">
            <div className="text-xs font-black tracking-widest uppercase text-[#FF1E41] mb-6">After Automation</div>
            <ul className="space-y-4">
              {[
                "AI handles routine work 24/7, team focuses on strategy",
                "Instant responses — even at 3am on a Sunday",
                "Dashboards and reports generated automatically",
                "Content and campaigns run without production overhead",
                "Consistent, error-free execution every time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-emerald-400 text-sm mt-0.5 shrink-0">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TECH STACK ─────────────────────────────────────────────────── */

const techStack = [
  { name: "OpenAI GPT-4", icon: "psychology" },
  { name: "Claude AI", icon: "smart_toy" },
  { name: "Vercel AI SDK", icon: "bolt" },
  { name: "LangChain", icon: "link" },
  { name: "Python", icon: "code" },
  { name: "FastAPI", icon: "api" },
  { name: "n8n", icon: "account_tree" },
  { name: "Zapier", icon: "electric_bolt" },
  { name: "Supabase", icon: "database" },
  { name: "Twilio", icon: "sms" },
  { name: "Next.js", icon: "web" },
  { name: "Stripe", icon: "payments" },
]

function TechStackSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            What We Build With
          </h2>
          <p className="text-[#5e3f3e] mt-4 max-w-xl mx-auto font-light">
            Best-in-class tools chosen for reliability, speed, and how well
            they fit your existing stack.
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto font-light">
            Tell us which part of your workflow is eating the most time. We'll
            show you exactly how to automate it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-[#FF1E41] px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-[#fcf9f8] transition-colors shadow-xl"
            >
              Book a Free Call
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white hover:text-[#FF1E41] transition-all"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Internal links to other services */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-[#5e3f3e] text-sm mb-4 font-bold uppercase tracking-widest">Explore Other Services</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: "Web Development", href: "/services/web-development" },
            { label: "Mobile Development", href: "/services/mobile-development" },
            { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
            { label: "Marketing Services", href: "/services/marketing-services" },
            { label: "Cyber Security", href: "/services/cyber-security" },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="px-5 py-2 rounded-full border border-[#e8bcbb]/40 text-[#5e3f3e] text-sm font-bold hover:border-[#FF1E41]/40 hover:text-[#FF1E41] transition-all"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function AIAutomationPage() {
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
