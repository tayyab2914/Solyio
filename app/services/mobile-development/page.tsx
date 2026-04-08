import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Mobile App Development | Solyio — iOS, Android & Cross-Platform",
  description:
    "Solyio builds high-performance iOS and Android apps using React Native and Flutter. From fintech and e-commerce to delivery marketplaces — we ship apps users love.",
  alternates: { canonical: "https://solyio.com/services/mobile-development" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  provider: { "@type": "Organization", name: "Solyio", url: "https://solyio.com" },
  description: "Cross-platform iOS and Android app development using React Native and Flutter, with Stripe payments, real-time features, and scalable backends.",
  areaServed: "Worldwide",
  serviceType: "Mobile App Development",
}

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
          <div className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#FF1E41]/20 mb-8 bg-white/60 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-ping" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">Mobile Development</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.88] text-[#1c1b1b] mb-8">
              Apps Your Users{" "}
              <span className="text-[#FF1E41] italic">Actually Want to Use.</span>
            </h1>
            <p className="text-xl text-[#5e3f3e] max-w-xl mb-10 leading-relaxed font-light">
              We build cross-platform iOS and Android apps that feel native,
              perform fast, and scale to tens of thousands of users — with
              payments, real-time features, and everything your business needs
              built right in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="kinetic-gradient text-white font-headline font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all text-center">
                Discuss Your App
              </Link>
              <Link href="/portfolio" className="bg-white border border-[#e8bcbb]/40 text-[#1c1b1b] font-headline font-bold py-4 px-10 rounded-full text-lg hover:bg-[#f7f4f3] transition-all text-center">
                See Case Studies
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-panel rounded-[2.5rem] p-8 border border-[#e8bcbb]/20 shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { val: "4.9★", label: "Avg App Store Rating", color: "text-[#FF1E41]" },
                  { val: "50k+", label: "Active users shipped", color: "text-[#1c1b1b]" },
                  { val: "94%", label: "Trial-to-paid rate", color: "text-[#1c1b1b]" },
                  { val: "−74%", label: "Cart abandonment drop", color: "text-[#FF1E41]" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className={`text-3xl font-headline font-black ${s.color}`}>{s.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#1c1b1b] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF1E41]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#FF1E41] text-xl">smartphone</span>
                </div>
                <div>
                  <div className="text-white font-headline font-bold text-sm">iOS &amp; ANDROID</div>
                  <div className="text-white/40 text-xs">React Native · Flutter · Swift</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const problems = [
  { icon: "devices_off", title: "Your App Only Works on One Platform", desc: "Building separate iOS and Android apps doubles your dev cost and creates two codebases to maintain. Most businesses can't afford that — and shouldn't have to." },
  { icon: "payment", title: "Payment Integration Is a Nightmare", desc: "Stripe, Apple Pay, Google Pay, subscriptions, free trials, marketplace payouts to multiple vendors — mobile payments have dozens of edge cases that most developers get wrong." },
  { icon: "speed", title: "Performance Gets Worse as You Grow", desc: "A poorly architected app that works for 100 users falls apart at 10,000. Slow lists, laggy animations, crashing on older devices — users don't give second chances." },
  { icon: "update", title: "App Store Rejections and Slow Updates", desc: "Getting rejected by Apple or Google for policy violations, or waiting weeks to ship a bug fix because of slow review processes — it costs you users and revenue." },
]

function ProblemSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">The Challenge</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">Why Mobile Projects Fail</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">
            These are the mobile development problems we fix before they sink your product.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-white rounded-[2rem] p-8 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-xl transition-all duration-500 group">
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

const steps = [
  { n: "01", icon: "draw", title: "UX Design First", desc: "Before any code, we wireframe every screen, map every user journey, and validate the flow. A confused user flow can't be fixed with better code." },
  { n: "02", icon: "smartphone", title: "Cross-Platform by Default", desc: "We build with React Native or Flutter so a single codebase runs on both iOS and Android — saving you 40–60% in development cost without sacrificing native performance." },
  { n: "03", icon: "payments", title: "Payments Built the Right Way", desc: "Stripe SDK, Apple Pay, Google Pay, StoreKit 2 for in-app purchases, subscription billing with free trials and failed-payment recovery — all wired up and tested." },
  { n: "04", icon: "rocket_launch", title: "App Store Launch & Beyond", desc: "We handle App Store and Google Play submissions, respond to reviewer feedback, and set up over-the-air update pipelines so future releases don't require weeks of review." },
]

function SolutionSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b] mb-6">How We Build Your App</h2>
            <p className="text-[#5e3f3e] leading-relaxed text-lg font-light">
              From first wireframe to App Store listing — a focused, no-waste
              process that ships quality apps on schedule.
            </p>
            <Link href="/book" className="mt-8 inline-flex items-center gap-2 text-[#FF1E41] font-headline font-black tracking-tight hover:gap-4 transition-all">
              Start the conversation
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-6 bg-[#fcf9f8] rounded-[1.5rem] p-7 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/20 hover:shadow-lg transition-all duration-300 group">
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

const caseStudies = [
  {
    name: "ZenCart",
    category: "E-Commerce App",
    tagline: "Flutter shopping app with Apple Pay & Google Pay",
    headerBg: "#FF1E41",
    icon: "shopping_cart",
    problem: "An e-commerce brand's previous iOS-only app had an 81% cart abandonment rate. It was slow, crashed on older devices, and had no Android version — cutting off half their potential customers.",
    solution: "We rebuilt from scratch in Flutter: native Stripe Payment Sheet, Apple Pay and Google Pay with one tap, AI product recommendations, and a single codebase for both platforms.",
    metrics: [{ val: "+185%", label: "Conversion" }, { val: "4.9★", label: "App Rating" }, { val: "81%→23%", label: "Abandonment" }, { val: "−55%", label: "Dev Cost" }],
    stack: ["Flutter", "Stripe", "Apple Pay", "Google Pay", "Firebase"],
    slug: "zencart",
  },
  {
    name: "TrackrPro",
    category: "Fitness & Wellness App",
    tagline: "iOS native app with Stripe subscription billing",
    headerBg: "#1c1b1b",
    icon: "fitness_center",
    problem: "A fitness app with a passionate user base but zero monetisation. They had no subscription system, no trial flow, and no way to recover failed payments — leaving money on the table every day.",
    solution: "We built a clean subscription system with 7-day free trial, Stripe Billing for web and StoreKit 2 for in-app purchases, unified entitlement management, and automated dunning for failed payments.",
    metrics: [{ val: "40k+", label: "Subscribers" }, { val: "94%", label: "Trial Conversion" }, { val: "$480K", label: "MRR" }, { val: "+34%", label: "Payment Recovery" }],
    stack: ["Swift", "StoreKit 2", "Stripe Billing", "CloudKit", "Xcode"],
    slug: "trackrpro",
  },
  {
    name: "NovaPay",
    category: "Fintech App",
    tagline: "React Native payments app for 50k+ users",
    headerBg: "#FF1E41",
    icon: "account_balance_wallet",
    problem: "A fintech platform with a 74% checkout abandonment rate, no marketplace payout system for their vendor network, and no subscription engine for recurring revenue products.",
    solution: "React Native app with native Stripe SDK, Stripe Connect for marketplace payouts to vendors, subscription billing with multiple tiers, and a seamless one-tap payment experience.",
    metrics: [{ val: "+220%", label: "Transaction Vol." }, { val: "50k+", label: "Active Users" }, { val: "$3.2M", label: "Monthly GMV" }, { val: "−62%", label: "Abandonment" }],
    stack: ["React Native", "Stripe Connect", "Stripe SDK", "Expo", "Supabase"],
    slug: "novapay",
  },
  {
    name: "DeliverIQ",
    category: "Delivery Marketplace",
    tagline: "React Native courier marketplace with live tracking",
    headerBg: "#1c1b1b",
    icon: "local_shipping",
    problem: "A delivery startup with 500+ courier partners managing payouts manually — a 5-person finance team processing payments weekly, no live tracking, and AI dispatch that couldn't optimise routes.",
    solution: "React Native app with Stripe Connect for instant automated payouts to couriers, real-time GPS tracking via WebSockets, AI dispatch engine, and a customer-facing order tracking screen.",
    metrics: [{ val: "−45%", label: "Delivery Time" }, { val: "500+", label: "Couriers" }, { val: "8k+", label: "Daily Deliveries" }, { val: "92%", label: "On-Time Rate" }],
    stack: ["React Native", "Stripe Connect", "WebSockets", "Mapbox", "Node.js"],
    slug: "deliveriq",
  },
]

function CaseStudiesSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">Apps We&apos;ve Shipped</h2>
          </div>
          <Link href="/portfolio" className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF1E41] border-b-2 border-[#FF1E41] pb-1 hover:opacity-70 transition-opacity shrink-0">
            View All Projects
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((p) => (
            <div key={p.name} className="bg-white rounded-[2rem] overflow-hidden border border-[#e8bcbb]/20 hover:shadow-2xl transition-all duration-500 group flex flex-col">
              <div className="p-8 relative overflow-hidden" style={{ backgroundColor: p.headerBg }}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-[60px]" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-white/15 text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">{p.category}</div>
                    <h3 className="text-2xl font-headline font-bold text-white mb-1">{p.name}</h3>
                    <p className="text-white/50 text-sm">{p.tagline}</p>
                  </div>
                  <span className="material-symbols-outlined text-white/30 text-4xl">{p.icon}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-5">
                  <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-2">The Problem</div>
                  <p className="text-[#5e3f3e] text-sm leading-relaxed">{p.problem}</p>
                </div>
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-2">Our Solution</div>
                  <p className="text-[#5e3f3e] text-sm leading-relaxed">{p.solution}</p>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="bg-[#f7f2f1] rounded-xl p-3 text-center">
                      <div className="text-[#FF1E41] font-headline font-black text-base">{m.val}</div>
                      <div className="text-[9px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="bg-[#1c1b1b] text-white text-[10px] font-bold px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <Link href={`/portfolio/${p.slug}`} className="inline-flex items-center gap-2 text-[#FF1E41] font-headline font-bold text-sm group-hover:gap-3 transition-all shrink-0">
                    Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  return (
    <section className="py-28 bg-[#1c1b1b] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF1E41]/10 blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Business Impact</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">What a Great App Does for Revenue</h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-lg font-light">Numbers from real apps we've shipped — not industry averages.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { val: "−62%", label: "Cart abandonment", sub: "With native payment UX" },
            { val: "94%", label: "Free trial conversion", sub: "With smart onboarding" },
            { val: "4.9★", label: "App Store rating", sub: "Across shipped apps" },
            { val: "$3.2M", label: "Monthly GMV", sub: "On a single app we built" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-[1.5rem] p-7 border border-white/10 hover:border-[#FF1E41]/30 transition-colors">
              <div className="text-4xl font-headline font-black text-[#FF1E41] mb-2">{s.val}</div>
              <div className="text-white font-bold mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const techStack = [
  { name: "React Native", icon: "smartphone" },
  { name: "Flutter", icon: "widgets" },
  { name: "Swift", icon: "phone_iphone" },
  { name: "Kotlin", icon: "android" },
  { name: "Expo", icon: "rocket_launch" },
  { name: "Stripe SDK", icon: "payments" },
  { name: "StoreKit 2", icon: "store" },
  { name: "Firebase", icon: "local_fire_department" },
  { name: "Supabase", icon: "database" },
  { name: "WebSockets", icon: "wifi" },
  { name: "Mapbox", icon: "map" },
  { name: "Cloudflare", icon: "shield" },
]

function TechStackSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Technology</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">Our Mobile Stack</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-xl mx-auto font-light">Technologies that let us ship fast, stable apps for both platforms without doubling the work.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-3 bg-[#fcf9f8] rounded-2xl p-5 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-md transition-all duration-300 group">
              <span className="material-symbols-outlined text-[#FF1E41] text-3xl group-hover:scale-110 transition-transform">{t.icon}</span>
              <span className="text-xs font-bold text-[#1c1b1b] text-center">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-28 px-6 sm:px-8 bg-[#fcf9f8]">
      <div className="max-w-4xl mx-auto bg-[#FF1E41] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(255,30,65,0.25)]">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-6">Ready to Ship Your App?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto font-light">Tell us your idea — we&apos;ll show you exactly how to build it, what it will cost, and how fast we can get it in the App Store.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white text-[#FF1E41] px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-[#fcf9f8] transition-colors shadow-xl">Book a Free Call</Link>
            <Link href="/portfolio" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white hover:text-[#FF1E41] transition-all">See Our Apps</Link>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-[#5e3f3e] text-sm mb-4 font-bold uppercase tracking-widest">Explore Other Services</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: "AI Automation", href: "/services/ai-automation" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
            { label: "Marketing Services", href: "/services/marketing-services" },
            { label: "Cyber Security", href: "/services/cyber-security" },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="px-5 py-2 rounded-full border border-[#e8bcbb]/40 text-[#5e3f3e] text-sm font-bold hover:border-[#FF1E41]/40 hover:text-[#FF1E41] transition-all">{s.label}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MobileDevelopmentPage() {
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
