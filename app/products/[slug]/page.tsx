import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"
import { ORGANIZATION_ID, SITE, absoluteUrl, breadcrumbSchema } from "@/lib/seo"

/* ─── Data ───────────────────────────────────────────────────────── */

const caseStudies = {
  robomarketer: {
    name: "RoboMarketer",
    category: "Marketing Automation",
    year: "2024",
    thumbnail: "/RoboMarketer.png",
    tagline: "AI marketing automation that never sleeps",
    quoteText:
      "RoboMarketer gave us superpowers. We publish 10x more content with the same headcount — and every piece performs beyond expectations.",
    quoteAuthor: "Sarah Mitchell",
    quoteRole: "Marketing Director",
    challenge: {
      headline: "A Marketing Team Buried in Production Cycles",
      body: "Our client, a mid-size SaaS company, was producing just 8 pieces of content per week with a 4-person team. Competitors were publishing daily across every channel. The bottleneck wasn't creative vision — it was execution. Manual writing, scheduling, A/B testing, and performance tracking consumed 85% of team bandwidth, leaving zero room for strategic work.",
      timeline: "10 Days",
      clientType: "Marketing Agency",
      techStack: ["Next.js", "OpenAI GPT-4", "Vercel AI SDK", "PostgreSQL", "Stripe"],
      outcome: "10x faster content creation",
    },
    solution: {
      headline: "A Multi-Agent Marketing Brain",
      body: "We deployed three specialized AI agents working in concert: a Content Agent trained on brand voice and industry data, a Campaign Agent optimizing distribution timing and channel mix, and a Performance Agent autonomously reallocating budget to top performers. The system runs 24/7 without human intervention.",
    },
    architectureCards: [
      {
        icon: "edit_note",
        title: "Content Generation Engine",
        description:
          "GPT-4 fine-tuned on brand voice, producing blogs, social copy, and email at 10x human speed with 94% consistency.",
      },
      {
        icon: "campaign",
        title: "Campaign Optimizer",
        description:
          "Real-time A/B testing and performance scoring to maximize engagement and reach per published piece.",
      },
      {
        icon: "analytics",
        title: "Multi-Channel Distributor",
        description:
          "Automated scheduling across LinkedIn, X, email, and blog with platform-native formatting and timing intelligence.",
      },
    ],
    stats: [
      { value: "10×", label: "Content Output", description: "pieces produced per week" },
      { value: "40h", label: "Weekly Savings", description: "team hours recovered for strategy" },
      { value: "285%", label: "Campaign ROI", description: "average return on ad spend" },
      { value: "94%", label: "Brand Accuracy", description: "consistency on voice audits" },
    ],
  },
  expertaiq: {
    name: "ExpertAIQ",
    category: "Analytics & Intelligence",
    year: "2024",
    thumbnail: "/ExpertAIQ.png",
    tagline: "Transform raw data into competitive intelligence",
    quoteText:
      "ExpertAIQ turned our data warehouse into a live competitive intelligence machine. Decisions that took weeks now happen in minutes.",
    quoteAuthor: "James Park",
    quoteRole: "Chief Executive Officer",
    challenge: {
      headline: "Data Rich, Insight Poor",
      body: "A B2B research firm was sitting on petabytes of market data across 15+ disconnected sources. Their analysts spent 80% of their week just preparing and formatting data for reports. By the time insights reached executives, the window for action had closed. They needed a layer that could synthesize, interpret, and deliver intelligence in real time.",
      timeline: "10 Days",
      clientType: "Research Firm",
      techStack: ["Next.js", "Claude AI", "Vercel AI SDK", "Supabase", "D3.js"],
      outcome: "80% reduction in manual research",
    },
    solution: {
      headline: "An AI Research Layer That Thinks",
      body: "We built a natural language intelligence layer sitting on top of their existing data infrastructure. Users ask questions in plain English and receive structured, sourced answers in seconds. The system auto-generates executive reports, flags anomalies, and distributes insights to stakeholders via Slack and email.",
    },
    architectureCards: [
      {
        icon: "hub",
        title: "Data Ingestion Layer",
        description:
          "Unified connector ingesting 15+ sources — CRM, spreadsheets, APIs, databases — into a single semantic layer.",
      },
      {
        icon: "psychology",
        title: "NLP Analysis Engine",
        description:
          "Claude AI trained on domain vocabulary, converting natural language queries into structured, cited data insights.",
      },
      {
        icon: "send",
        title: "Insight Distribution System",
        description:
          "Automated report generation and multi-channel delivery with role-based access and scheduling.",
      },
    ],
    stats: [
      { value: "80%", label: "Faster Research", description: "reduction in manual research hours" },
      { value: "15+", label: "Data Sources", description: "integrated in a single platform" },
      { value: "500+", label: "Reports / Month", description: "generated and distributed automatically" },
      { value: "92%", label: "Decision Accuracy", description: "improvement in data-driven outcomes" },
    ],
  },
  cashads: {
    name: "CashAds",
    category: "Ad Tech & E-commerce",
    year: "2024",
    thumbnail: "/Cashads.png",
    tagline: "AI-optimized advertising that maximizes ROAS",
    quoteText:
      "We handed CashAds $2M/month in ad spend and watched it turn into a $2.7M return. The ROI was visible within the first 72 hours.",
    quoteAuthor: "Priya Kapoor",
    quoteRole: "Head of Growth",
    challenge: {
      headline: "Hemorrhaging Budget on Underperforming Campaigns",
      body: "An e-commerce brand with $2M+ monthly ad spend was watching their ROAS decline quarter-over-quarter. Manual bid management couldn't keep pace with real-time market shifts. Creative fatigue was undetected until damage was done. They needed a system that could react faster than any human team.",
      timeline: "10 Days",
      clientType: "E-commerce Brand",
      techStack: ["Next.js", "GPT-4", "Vercel AI SDK", "Neon", "Google Ads API"],
      outcome: "35% improvement in ROAS",
    },
    solution: {
      headline: "A Real-Time AI Bidding Intelligence",
      body: "We deployed an AI orchestration layer over their Google, Meta, and TikTok ad accounts. The Bid Management Engine recalibrates bids every 15 minutes based on live auction signals. The Creative Optimizer detects fatigue before CTR drops. Budget is continuously reallocated to highest-performing segments — autonomously.",
    },
    architectureCards: [
      {
        icon: "price_change",
        title: "Bid Management Engine",
        description:
          "15-minute recalibration cycles across all platforms, responding to auction dynamics in real time.",
      },
      {
        icon: "auto_awesome",
        title: "Creative Optimizer",
        description:
          "AI detects creative fatigue before performance drops, triggering variant testing automatically.",
      },
      {
        icon: "account_balance_wallet",
        title: "Budget Allocation AI",
        description:
          "Continuous reallocation across campaigns, adsets, and creatives to maximize ROAS at every moment.",
      },
    ],
    stats: [
      { value: "35%", label: "ROAS Improvement", description: "return on ad spend increase" },
      { value: "42%", label: "CPA Reduction", description: "lower cost per acquisition" },
      { value: "$2M+", label: "Monthly Spend", description: "managed autonomously" },
      { value: "98%", label: "System Uptime", description: "continuous AI-managed operation" },
    ],
  },
  "healthtrack-ai": {
    name: "PriceSmurf",
    category: "Healthcare Tech",
    year: "2024",
    thumbnail: "/PriceSmurf.png",
    tagline: "AI-powered health insights and appointment intelligence",
    quoteText:
      "PriceSmurf eliminated the chaos in our scheduling completely. No-shows dropped 60% in the first month and patient satisfaction hit an all-time high.",
    quoteAuthor: "Dr. Elena Torres",
    quoteRole: "Clinical Operations Director",
    challenge: {
      headline: "A Healthcare System Drowning in Scheduling Chaos",
      body: "A multi-location healthcare clinic was losing significant revenue to appointment no-shows and inefficient scheduling. Staff spent hours on manual reminders, rescheduling, and EHR data entry. Patient engagement between visits was near zero. A modern AI layer was urgently needed to reclaim operational efficiency.",
      timeline: "10 Days",
      clientType: "Healthcare Clinic",
      techStack: ["Next.js", "Claude AI", "Vercel AI SDK", "Supabase", "Twilio"],
      outcome: "60% reduction in no-shows",
    },
    solution: {
      headline: "An AI Patient Engagement Engine",
      body: "We built a conversational AI layer that manages the full patient journey: personalized health reminders, smart appointment scheduling, symptom triage, and proactive follow-up sequences. The system integrates directly with existing EHR systems, requiring no workflow changes from clinical staff.",
    },
    architectureCards: [
      {
        icon: "calendar_month",
        title: "Intelligent Scheduling AI",
        description:
          "Predictive slot optimization and automated reminders that reduce no-shows by identifying risk patterns.",
      },
      {
        icon: "health_and_safety",
        title: "Health Insights Engine",
        description:
          "Personalized recommendations and medication reminders delivered at the right moment in the patient journey.",
      },
      {
        icon: "sync_alt",
        title: "EHR Integration Layer",
        description:
          "Bidirectional sync with major EHR systems for zero-disruption deployment into existing clinical workflows.",
      },
    ],
    stats: [
      { value: "60%", label: "No-Show Reduction", description: "fewer missed appointments" },
      { value: "3×", label: "Patient Engagement", description: "increase in app interactions" },
      { value: "25h", label: "Weekly Savings", description: "staff hours recovered per week" },
      { value: "4.8/5", label: "Patient Rating", description: "average satisfaction score" },
    ],
  },
  upgrr: {
    name: "Upgrr",
    category: "PropTech",
    year: "2024",
    thumbnail: "/upgrr.png",
    tagline: "Intelligent property management at scale",
    quoteText:
      "Upgrr transformed our entire operations. What used to require 3 staff members is now handled by a single AI agent — and it does it better.",
    quoteAuthor: "Michael Brennan",
    quoteRole: "Director of Operations",
    challenge: {
      headline: "Property Management Crushed by Volume",
      body: "A property management company overseeing 500+ residential units was drowning in tenant communication. Maintenance requests took days to route. Rent follow-ups were fully manual. Staff morale was suffering as reactive workloads consumed all strategic capacity. A smarter operating layer was essential.",
      timeline: "10 Days",
      clientType: "Property Management Company",
      techStack: ["Next.js", "Claude AI", "Vercel AI SDK", "Supabase", "Stripe"],
      outcome: "50% faster maintenance resolution",
    },
    solution: {
      headline: "An AI Operations Layer for Real Estate",
      body: "We built an AI agent orchestrating the full tenant-landlord lifecycle: instant conversational response to tenant inquiries, intelligent maintenance ticket routing to the right vendor, automated rent reminders with payment processing, and vacancy lead capture. The agent handles 80% of interactions without human escalation.",
    },
    architectureCards: [
      {
        icon: "chat",
        title: "Tenant Communication AI",
        description:
          "24/7 conversational agent handling inquiries, complaints, and requests in natural language with instant response.",
      },
      {
        icon: "build",
        title: "Maintenance Router",
        description:
          "Intelligent ticket classification and vendor dispatch with real-time status tracking delivered to tenants.",
      },
      {
        icon: "payments",
        title: "Rent Collection Engine",
        description:
          "Automated payment reminders, online collection, and overdue escalation workflows with zero manual intervention.",
      },
    ],
    stats: [
      { value: "50%", label: "Faster Resolution", description: "maintenance turnaround time" },
      { value: "500+", label: "Units Managed", description: "on the platform" },
      { value: "80%", label: "Auto-Resolution", description: "tenant queries handled by AI" },
      { value: "4.8/5", label: "Tenant Rating", description: "average platform satisfaction" },
    ],
  },
  meon: {
    name: "Meon",
    category: "Productivity SaaS",
    year: "2024",
    thumbnail: "/upgrr.png",
    tagline: "AI-powered personal productivity engine",
    quoteText:
      "Meon didn't just improve our team's output — it redefined what was possible. We're running at 3x capacity without adding a single headcount.",
    quoteAuthor: "Alex Chen",
    quoteRole: "Founder & CEO",
    challenge: {
      headline: "Teams Working Hard, Not Smart",
      body: "A fast-growing startup was experiencing a productivity plateau. Despite longer hours and more hires, output per person was declining. Context-switching, poor prioritization, and endless meeting overhead were the culprits. The founder needed an intelligent system that could coach teams toward peak performance automatically.",
      timeline: "10 Days",
      clientType: "Productivity SaaS",
      techStack: ["Next.js", "Claude AI", "Vercel AI SDK", "Supabase", "Stripe"],
      outcome: "3x team efficiency",
    },
    solution: {
      headline: "A Personalized AI Productivity Coach",
      body: "We built an AI productivity layer that learns individual work patterns, automatically prioritizes task lists, and proactively surfaces focus time. The system integrates with calendar, Slack, and project management tools to give each team member a personalized daily operating plan — updated in real time.",
    },
    architectureCards: [
      {
        icon: "psychology",
        title: "Pattern Learning Engine",
        description:
          "Analyzes work history and output data to build a personalized productivity profile for each user.",
      },
      {
        icon: "task_alt",
        title: "Smart Prioritization AI",
        description:
          "Automatically reorders task lists based on deadlines, energy levels, and live team dependencies.",
      },
      {
        icon: "integration_instructions",
        title: "Workflow Integration Hub",
        description:
          "Connects calendar, Slack, Linear, Notion, and more for a unified AI-managed daily operating plan.",
      },
    ],
    stats: [
      { value: "3×", label: "Team Efficiency", description: "output per person increase" },
      { value: "40%", label: "Meeting Reduction", description: "fewer unnecessary meetings" },
      { value: "2h", label: "Daily Focus Time", description: "reclaimed per team member" },
      { value: "91%", label: "User Retention", description: "monthly active rate" },
    ],
  },
}

type SlugKey = keyof typeof caseStudies

/** schema.org applicationCategory, derived from the category each page already states. */
const APPLICATION_CATEGORY: Record<SlugKey, string> = {
  robomarketer: "BusinessApplication",
  expertaiq: "BusinessApplication",
  cashads: "BusinessApplication",
  "healthtrack-ai": "HealthApplication",
  upgrr: "BusinessApplication",
  meon: "BusinessApplication",
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies[slug as SlugKey]
  if (!cs) return { title: "Case Study Not Found" }

  const url = absoluteUrl(`/products/${slug}`)
  const title = `${cs.name} Case Study`
  const description = `${cs.tagline}. See how Solyio built ${cs.name} in ${cs.challenge.timeline} — ${cs.challenge.outcome}.`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: SITE.name,
      ...(cs.thumbnail ? { images: [{ url: absoluteUrl(cs.thumbnail), alt: cs.name }] } : {}),
    },
  }
}

/* ─── Hero ───────────────────────────────────────────────────────── */

function HeroSection({ cs, slug }: { cs: (typeof caseStudies)[SlugKey]; slug: string }) {
  return (
    <section className="relative min-h-[100vh] bg-[#0f0e0e] flex items-center overflow-hidden pt-32 pb-24 px-8">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#FF1E41] opacity-[0.04] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left: text */}
        <div className="lg:col-span-6 space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/40">
            <Link href="/products" className="text-xs uppercase tracking-widest font-bold hover:text-white/70 transition-colors">
              Products
            </Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-xs uppercase tracking-widest font-bold text-[#FF1E41]">
              Case Study
            </span>
          </div>

          {/* Category + year pills */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/60">
              {cs.category}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#FF1E41]/10 border border-[#FF1E41]/20 text-xs font-bold uppercase tracking-widest text-[#FF1E41]">
              {cs.year}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-7xl md:text-9xl font-headline font-bold text-white leading-[0.85] tracking-tighter">
            {cs.name}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-lg">{cs.tagline}</p>

          {/* Quote card */}
          <div className="glass-panel rounded-2xl p-8 border border-white/10 bg-white/[0.04] backdrop-blur-xl mt-10">
            <span
              className="material-symbols-outlined text-[#FF1E41] text-4xl mb-4 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
            <p className="text-white/90 text-lg italic leading-relaxed mb-6">
              &ldquo;{cs.quoteText}&rdquo;
            </p>
            <div>
              <p className="font-headline font-bold text-white">{cs.quoteAuthor}</p>
              <p className="text-xs uppercase tracking-widest text-[#FF1E41] mt-1">{cs.quoteRole}</p>
            </div>
          </div>
        </div>

        {/* Right: circular image with spinning rings */}
        <div className="lg:col-span-6 hidden lg:flex justify-center items-center">
          <div className="relative w-[480px] h-[480px]">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-white/5 border-dashed animate-spin [animation-duration:30s]" />
            {/* Mid ring */}
            <div className="absolute inset-8 rounded-full border border-[#FF1E41]/10 animate-spin [animation-duration:18s] [animation-direction:reverse]" />
            {/* Inner ring */}
            <div className="absolute inset-16 rounded-full border-2 border-[#FF1E41]/20 border-dashed animate-spin [animation-duration:10s]" />

            {/* Circular thumbnail */}
            <div className="absolute inset-20 rounded-full overflow-hidden bg-[#1c1b1b] border border-white/10 shadow-2xl">
              {cs.thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cs.thumbnail}
                  alt={cs.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl font-headline font-bold text-white/20">
                    {cs.name[0]}
                  </span>
                </div>
              )}
            </div>

            {/* Floating stat badge */}
            <div className="absolute bottom-8 -right-8 bg-[#FF1E41] rounded-2xl px-6 py-4 shadow-xl shadow-[#FF1E41]/30">
              <p className="text-white/80 text-[10px] uppercase tracking-widest font-bold">
                Key Result
              </p>
              <p className="text-white text-xl font-headline font-bold mt-1">
                {cs.stats[0].value}
              </p>
              <p className="text-white/70 text-[10px] mt-0.5">{cs.stats[0].label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Challenge ──────────────────────────────────────────────────── */

function ChallengeSection({ cs }: { cs: (typeof caseStudies)[SlugKey] }) {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: challenge text */}
        <div className="lg:col-span-8">
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#FF1E41] mb-6">
            01 — The Challenge
          </p>
          <h2 className="text-5xl md:text-6xl font-headline font-bold text-[#1c1b1b] leading-[0.95] tracking-tighter mb-10">
            {cs.challenge.headline}
          </h2>
          <p className="text-xl text-[#5e3f3e] leading-relaxed max-w-2xl">{cs.challenge.body}</p>

          {/* Big stat pull-quote */}
          <div className="mt-16 border-l-4 border-[#FF1E41] pl-10">
            <p className="text-7xl font-headline font-bold text-[#FF1E41]">
              {cs.stats[0].value}
            </p>
            <p className="text-[#5e3f3e] text-lg mt-2">{cs.stats[0].description}</p>
          </div>
        </div>

        {/* Right: sticky metadata */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-[#f7f4f4] rounded-2xl p-8 border border-[#d5c2c1]/30">
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#5e3f3e] mb-2">
                  Client Type
                </p>
                <p className="font-headline font-bold text-[#1c1b1b]">{cs.challenge.clientType}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#5e3f3e] mb-2">
                  Timeline
                </p>
                <p className="font-headline font-bold text-[#1c1b1b]">{cs.challenge.timeline}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#5e3f3e] mb-2">
                  Key Outcome
                </p>
                <p className="font-headline font-bold text-[#FF1E41]">{cs.challenge.outcome}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#5e3f3e] mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.challenge.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white rounded-full text-xs font-bold text-[#1c1b1b] border border-[#d5c2c1]/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Solution ───────────────────────────────────────────────────── */

function SolutionSection({ cs }: { cs: (typeof caseStudies)[SlugKey] }) {
  return (
    <section className="py-32 px-8 bg-[#f7f4f4]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-[#d5c2c1] pb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#FF1E41] mb-4">
              02 — The Solution
            </p>
            <h2 className="text-5xl md:text-6xl font-headline font-bold text-[#1c1b1b] leading-[0.95] tracking-tighter">
              {cs.solution.headline}
            </h2>
          </div>
          <p className="text-[#5e3f3e] text-lg leading-relaxed max-w-md">{cs.solution.body}</p>
        </div>

        {/* Architecture cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cs.architectureCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-xl p-10 border border-[#d5c2c1]/30 hover:bg-[#1c1b1b] transition-all duration-500 cursor-default"
            >
              <span className="material-symbols-outlined text-[#FF1E41] text-4xl mb-6 block">
                {card.icon}
              </span>
              <h4 className="text-xl font-headline font-bold text-[#1c1b1b] mb-4 group-hover:text-white transition-colors duration-500">
                {card.title}
              </h4>
              <p className="text-[#5e3f3e] leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dark CTA strip */}
        <div className="bg-[#1c1b1b] rounded-2xl px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-2xl font-headline font-bold">
            Want this architecture for your product?
          </p>
          <Link
            href="/book"
            className="shrink-0 bg-[#FF1E41] text-white font-headline font-bold px-8 py-4 rounded-full hover:bg-[#bb0029] transition-colors"
          >
            Book a Briefing →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Business Impact ────────────────────────────────────────────── */

function ImpactSection({ cs }: { cs: (typeof caseStudies)[SlugKey] }) {
  const colors = ["#FF1E41", "#006a66", "#1c1b1b", "#FF1E41"]
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#FF1E41] mb-6">
          03 — Business Impact
        </p>
        <h2 className="text-5xl md:text-7xl font-headline font-bold text-[#1c1b1b] leading-[0.9] tracking-tighter mb-20">
          Numbers Don&apos;t Lie.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cs.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl p-12 border border-[#d5c2c1]/30 bg-[#f7f4f4] hover:shadow-lg transition-shadow"
            >
              <p
                className="text-6xl md:text-7xl font-headline font-bold mb-4"
                style={{ color: colors[i] }}
              >
                {stat.value}
              </p>
              <p className="text-xl font-headline font-bold text-[#1c1b1b] mb-2">{stat.label}</p>
              <p className="text-[#5e3f3e]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Visual Gallery ─────────────────────────────────────────────── */

function GallerySection({ cs }: { cs: (typeof caseStudies)[SlugKey] }) {
  return (
    <section className="py-32 px-8 bg-[#f7f4f4]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#FF1E41] mb-6">
          04 — Visual Gallery
        </p>
        <h2 className="text-4xl font-headline font-bold text-[#1c1b1b] tracking-tighter mb-16">
          Product in Motion.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large: main screenshot */}
          <div className="lg:col-span-8 aspect-video rounded-2xl overflow-hidden bg-[#1c1b1b] relative group">
            {cs.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cs.thumbnail}
                alt={`${cs.name} interface`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl font-headline font-bold text-white/10">{cs.name[0]}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0e]/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-white/60 text-xs uppercase tracking-widest font-bold">
                Product Dashboard
              </span>
            </div>
          </div>

          {/* Right column: two smaller panels */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Stats panel */}
            <div className="flex-1 rounded-2xl bg-[#1c1b1b] p-10 flex flex-col justify-between">
              <span
                className="material-symbols-outlined text-[#FF1E41] text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                trending_up
              </span>
              <div>
                <p className="text-6xl font-headline font-bold text-white">{cs.stats[1].value}</p>
                <p className="text-white/60 text-sm mt-2">{cs.stats[1].label}</p>
                <p className="text-white/40 text-xs mt-1">{cs.stats[1].description}</p>
              </div>
            </div>

            {/* Category panel */}
            <div
              className="flex-1 rounded-2xl p-10 kinetic-gradient flex flex-col justify-between"
            >
              <span className="material-symbols-outlined text-white text-4xl">
                {cs.architectureCards[0].icon}
              </span>
              <div>
                <p className="text-white/80 text-xs uppercase tracking-widest font-bold mb-2">
                  {cs.category}
                </p>
                <p className="text-white text-xl font-headline font-bold leading-tight">
                  {cs.architectureCards[0].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CTASection({ cs }: { cs: (typeof caseStudies)[SlugKey] }) {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-5xl mx-auto kinetic-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(255,30,65,0.2)]">
        <div className="absolute inset-0 bg-white/5" />
        <div className="relative z-10">
          <p className="text-white/70 text-xs uppercase tracking-[0.25em] font-bold mb-6">
            Ready to build your own {cs.category} product?
          </p>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-8 tracking-tighter">
            Your MVP in 10 Days.
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto">
            Join the roster. Let&apos;s engineer your competitive edge together.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/book"
              className="bg-white text-[#FF1E41] font-headline font-bold px-10 py-5 rounded-full text-xl shadow-xl hover:scale-105 transition-transform"
            >
              Start Your Project
            </Link>
            <Link
              href="/products#portfolio"
              className="bg-transparent border-2 border-white text-white font-headline font-bold px-10 py-5 rounded-full text-xl hover:bg-white hover:text-[#FF1E41] transition-colors"
            >
              More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = caseStudies[slug as SlugKey]

  if (!cs) notFound()

  const url = absoluteUrl(`/products/${slug}`)

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: cs.name,
    url,
    description: `${cs.tagline}. ${cs.solution.body}`,
    applicationCategory: APPLICATION_CATEGORY[slug as SlugKey],
    applicationSubCategory: cs.category,
    inLanguage: "en",
    featureList: cs.architectureCards.map((card) => card.title),
    keywords: cs.challenge.techStack.join(", "),
    publisher: { "@id": ORGANIZATION_ID },
    creator: { "@id": ORGANIZATION_ID },
    ...(cs.thumbnail ? { image: absoluteUrl(cs.thumbnail) } : {}),
  }

  return (
    <div className="font-body bg-[#0f0e0e] text-[#1c1b1b] selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <JsonLd
        data={[
          softwareSchema,
          breadcrumbSchema([
            { name: "Solutions", path: "/products" },
            { name: cs.name, path: `/products/${slug}` },
          ]),
        ]}
      />
      <SiteNavbar variant="dark" />
      <main>
        <HeroSection cs={cs} slug={slug} />
        <ChallengeSection cs={cs} />
        <SolutionSection cs={cs} />
        <ImpactSection cs={cs} />
        <GallerySection cs={cs} />
        <CTASection cs={cs} />
      </main>
      <SiteFooter />
    </div>
  )
}
