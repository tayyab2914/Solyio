import type { Metadata } from "next"
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Pricing | Solyio — Transparent Plans for Web, Mobile, Cloud & AI",
  description:
    "Simple, transparent pricing for Solyio's web development, mobile apps, cloud infrastructure, and AI automation services. Find the plan that fits your business.",
  alternates: { canonical: "https://solyio.com/pricing" },
}

/* ─── DATA ───────────────────────────────────────────────────────── */

const PLANS = [
  {
    name: "Launch",
    tagline: "For founders validating an idea fast.",
    price: "$1,900",
    priceNote: "starting price",
    icon: "rocket_launch",
    featured: false,
    features: [
      "Single landing page or MVP",
      "Responsive, modern design",
      "Up to 5 pages or screens",
      "Contact form & basic integrations",
      "SEO-ready foundation",
      "2 weeks of post-launch support",
    ],
    cta: "Start with Launch",
  },
  {
    name: "Build",
    tagline: "For businesses shipping a full custom product.",
    price: "$6,900",
    priceNote: "starting price",
    icon: "construction",
    featured: true,
    features: [
      "Custom web or mobile application",
      "Tailored UI/UX design system",
      "Backend, database & API development",
      "Cloud deployment & CI/CD setup",
      "One AI automation or integration",
      "Analytics & performance tuning",
      "30 days of post-launch support",
    ],
    cta: "Start with Build",
  },
  {
    name: "Scale",
    tagline: "For teams that need an ongoing partner.",
    price: "Custom",
    priceNote: "tailored to scope",
    icon: "trending_up",
    featured: false,
    features: [
      "Multi-platform product engineering",
      "Dedicated cross-functional team",
      "Advanced AI agents & automation",
      "Cloud architecture & security hardening",
      "Marketing & growth services",
      "Priority SLA & ongoing maintenance",
      "Quarterly roadmap planning",
    ],
    cta: "Talk to Sales",
  },
]

const INCLUDED = [
  { icon: "verified", title: "Fixed Quotes", desc: "A clear scope and price before we start — no surprise invoices." },
  { icon: "groups", title: "Dedicated Team", desc: "Real engineers and designers assigned to your project end to end." },
  { icon: "bolt", title: "Fast Delivery", desc: "Lean process and pre-built components to ship in days, not months." },
  { icon: "support_agent", title: "Real Support", desc: "Direct access to your team and post-launch support on every plan." },
]

const ADDONS = [
  { name: "AI Automation", desc: "Custom AI agents and workflow automation built around your operations." },
  { name: "Marketing Services", desc: "SEO, paid ads, content, and social to get your product found." },
  { name: "Cloud & DevOps", desc: "Scalable infrastructure, monitoring, and CI/CD on AWS, GCP, or Azure." },
  { name: "Cyber Security", desc: "Security audits, hardening, and ongoing monitoring for peace of mind." },
  { name: "Maintenance Plans", desc: "Monthly retainers for updates, fixes, and continuous improvement." },
  { name: "Branding & Design", desc: "Logo, identity, and design systems that make your product stand out." },
]

const FAQS = [
  {
    q: "How is pricing determined?",
    a: "Every project is quoted based on its scope, complexity, and timeline. The prices shown are starting points — once we understand your requirements, we provide a fixed, transparent quote before any work begins.",
  },
  {
    q: "Do you offer payment in milestones?",
    a: "Yes. Most projects are split into a deposit and milestone payments tied to defined stages of work, so you only pay as value is delivered.",
  },
  {
    q: "What's included after launch?",
    a: "Every plan includes a post-launch support window for bug fixes and adjustments. For ongoing work, we offer monthly maintenance retainers tailored to your needs.",
  },
  {
    q: "Can I upgrade or add services later?",
    a: "Absolutely. You can add AI automation, marketing, cloud, or security services at any point. Many clients start with Launch or Build and grow into a Scale partnership.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Third-party costs like hosting, domains, or licenses are always discussed upfront and billed transparently or passed through at cost.",
  },
]

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-16 pt-32 pb-16 text-center">
      <span className="text-[#FF1E41] text-sm font-bold tracking-[0.25em] uppercase mb-6 block">
        Pricing
      </span>
      <h1 className="text-5xl md:text-7xl xl:text-8xl font-headline font-black tracking-tighter leading-[0.9] mb-8 text-[#1c1b1b] max-w-4xl mx-auto">
        Pricing that&apos;s as{" "}
        <span className="text-[#FF1E41] italic">honest</span> as our work.
      </h1>
      <p className="text-lg md:text-xl text-[#5e3f3e] max-w-2xl mx-auto leading-relaxed font-light">
        No hourly mysteries, no inflated retainers. Pick a starting point, get a
        fixed quote, and know exactly what you&apos;re paying for.
      </p>
    </section>
  )
}

/* ─── PLANS ──────────────────────────────────────────────────────── */

function PlansSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl p-10 flex flex-col transition-all duration-500 ${
              plan.featured
                ? "bg-[#1c1b1b] text-white shadow-2xl lg:-mt-6 lg:mb-6"
                : "bg-white border border-[#e8bcbb]/25 hover:shadow-xl"
            }`}
          >
            {plan.featured && (
              <span className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-[0.2em] bg-[#FF1E41] text-white px-4 py-1.5 rounded-full">
                Most Popular
              </span>
            )}

            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                plan.featured ? "bg-[#FF1E41]/15" : "bg-[#FF1E41]/8"
              }`}
            >
              <span className="material-symbols-outlined text-[#FF1E41] text-3xl">
                {plan.icon}
              </span>
            </div>

            <h2
              className={`text-2xl font-headline font-bold mb-2 ${
                plan.featured ? "text-white" : "text-[#1c1b1b]"
              }`}
            >
              {plan.name}
            </h2>
            <p
              className={`text-sm mb-8 ${
                plan.featured ? "text-white/50" : "text-[#5e3f3e]"
              }`}
            >
              {plan.tagline}
            </p>

            <div className="mb-8">
              <span
                className={`text-5xl font-headline font-black tracking-tighter ${
                  plan.featured ? "text-white" : "text-[#1c1b1b]"
                }`}
              >
                {plan.price}
              </span>
              <span
                className={`block mt-2 text-xs font-bold uppercase tracking-widest ${
                  plan.featured ? "text-[#FF1E41]" : "text-[#5e3f3e]/70"
                }`}
              >
                {plan.priceNote}
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="material-symbols-outlined text-[#FF1E41] shrink-0" style={{ fontSize: "20px" }}>
                    check_circle
                  </span>
                  <span
                    className={`text-sm leading-relaxed ${
                      plan.featured ? "text-white/80" : "text-[#5e3f3e]"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/book"
              className={`block text-center w-full py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                plan.featured
                  ? "bg-[#FF1E41] text-white hover:bg-[#bb0029]"
                  : "bg-[#1c1b1b] text-white hover:bg-[#FF1E41]"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-[#5e3f3e]/70 mt-10">
        Prices are starting points. Every project gets a fixed quote after a
        free scoping call.
      </p>
    </section>
  )
}

/* ─── INCLUDED ───────────────────────────────────────────────────── */

function IncludedSection() {
  return (
    <section className="py-24 bg-[#f6f3f2]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="mb-16 text-center">
          <span className="text-[#FF1E41] text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
            Every Plan Includes
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-[#1c1b1b]">
            What you always get.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INCLUDED.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-6 group-hover:bg-[#FF1E41]/15 transition-colors">
                <span className="material-symbols-outlined text-[#FF1E41] text-2xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-lg font-headline font-bold text-[#1c1b1b] mb-3">
                {item.title}
              </h3>
              <p className="text-[#5e3f3e] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── ADD-ONS ────────────────────────────────────────────────────── */

function AddonsSection() {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-8 md:px-16">
      <div className="mb-16">
        <span className="text-[#FF1E41] text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
          Add-Ons
        </span>
        <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-[#1c1b1b]">
          Extend any plan.
        </h2>
        <p className="text-[#5e3f3e] text-lg mt-4 max-w-2xl">
          Mix and match services to build exactly the engagement your business
          needs — added to any plan, priced per scope.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ADDONS.map((addon) => (
          <div
            key={addon.name}
            className="bg-white rounded-2xl p-8 border border-[#e8bcbb]/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF1E41]" />
              <h3 className="text-lg font-headline font-bold text-[#1c1b1b]">
                {addon.name}
              </h3>
            </div>
            <p className="text-[#5e3f3e] text-sm leading-relaxed">{addon.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── FAQ ────────────────────────────────────────────────────────── */

function FaqSection() {
  return (
    <section className="py-24 bg-[#f6f3f2]">
      <div className="max-w-[900px] mx-auto px-8 md:px-16">
        <div className="mb-16 text-center">
          <span className="text-[#FF1E41] text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-[#1c1b1b]">
            Pricing questions, answered.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white rounded-2xl border border-[#e8bcbb]/25 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-8 py-6 cursor-pointer list-none">
                <span className="font-headline font-bold text-[#1c1b1b] text-lg">
                  {faq.q}
                </span>
                <span className="material-symbols-outlined text-[#FF1E41] transition-transform duration-300 group-open:rotate-45 shrink-0">
                  add
                </span>
              </summary>
              <p className="px-8 pb-6 text-[#5e3f3e] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-[1000px] mx-auto bg-[#FF1E41] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-8 relative z-10">
          Not sure which plan fits?
        </h2>
        <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto relative z-10">
          Book a free scoping call. We&apos;ll map out your project and send a
          fixed quote — no obligation, no pressure.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
          <Link
            href="/book"
            className="bg-white text-[#FF1E41] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#fcf9f8] transition-colors shadow-xl"
          >
            Book a Free Call
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/30 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#FF1E41] transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function PricingPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <PlansSection />
        <IncludedSection />
        <AddonsSection />
        <FaqSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
