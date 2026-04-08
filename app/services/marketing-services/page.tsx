import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Marketing Services | Solyio — SEO, Paid Ads & Growth Marketing",
  description:
    "Solyio delivers SEO, PPC, social media, and content marketing that drives real traffic and conversions. Data-driven growth marketing for businesses that want measurable results.",
  alternates: { canonical: "https://solyio.com/services/marketing-services" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Services",
  provider: { "@type": "Organization", name: "Solyio", url: "https://solyio.com" },
  description: "Digital marketing services including SEO, PPC advertising, social media management, and content marketing.",
  areaServed: "Worldwide",
  serviceType: "Digital Marketing",
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
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">Marketing Services</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.88] text-[#1c1b1b] mb-8">
              Marketing That{" "}
              <span className="text-[#FF1E41] italic">Brings Customers In.</span>
            </h1>
            <p className="text-xl text-[#5e3f3e] max-w-xl mb-10 leading-relaxed font-light">
              SEO, paid advertising, social media, and content strategy — all
              tied together with data. We build marketing systems that find the
              right people, convert them, and keep them coming back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="kinetic-gradient text-white font-headline font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all text-center">
                Discuss Your Growth
              </Link>
              <Link href="/book" className="bg-white border border-[#e8bcbb]/40 text-[#1c1b1b] font-headline font-bold py-4 px-10 rounded-full text-lg hover:bg-[#f7f4f3] transition-all text-center">
                Get a Free Audit
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-panel rounded-[2.5rem] p-8 border border-[#e8bcbb]/20 shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { val: "3.5x", label: "Avg ROAS on Paid Ads", color: "text-[#FF1E41]" },
                  { val: "+285%", label: "Campaign ROI (RoboMarketer)", color: "text-[#1c1b1b]" },
                  { val: "Top 3", label: "Google Ranking Goal", color: "text-[#1c1b1b]" },
                  { val: "30d", label: "To first measurable results", color: "text-[#FF1E41]" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className={`text-2xl font-headline font-black ${s.color}`}>{s.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#1c1b1b] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF1E41]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#FF1E41] text-xl">trending_up</span>
                </div>
                <div>
                  <div className="text-white font-headline font-bold text-sm">GROWTH TRACKING LIVE</div>
                  <div className="text-white/40 text-xs">Analytics · Ads · SEO · Social</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: "search",
    title: "SEO & GEO",
    desc: "Technical SEO, keyword strategy, content optimisation, and link building — plus Generative Engine Optimisation so your business appears in AI search results like ChatGPT and Perplexity.",
    tags: ["Technical SEO", "GEO / AI Search", "Link Building", "Content Strategy"],
  },
  {
    icon: "ads_click",
    title: "Paid Advertising (PPC)",
    desc: "Google Ads, Meta Ads, and TikTok Ads managed with data-driven bidding, creative testing, and continuous optimisation. Every pound spent tracked against revenue.",
    tags: ["Google Ads", "Meta Ads", "TikTok Ads", "ROAS Optimisation"],
  },
  {
    icon: "groups",
    title: "Social Media Marketing",
    desc: "Strategy, content creation, scheduling, and community management across LinkedIn, Instagram, X, and TikTok — building an audience that converts to customers.",
    tags: ["LinkedIn", "Instagram", "X (Twitter)", "Content Calendar"],
  },
  {
    icon: "edit_note",
    title: "Content Marketing",
    desc: "Blog posts, landing pages, email sequences, and thought leadership content — written for humans and optimised for search. Content that educates, builds trust, and drives inbound.",
    tags: ["Blog & Articles", "Email Marketing", "Landing Pages", "Lead Magnets"],
  },
  {
    icon: "analytics",
    title: "Analytics & Reporting",
    desc: "GA4, Search Console, ad dashboards, and custom reporting — so you always know where traffic is coming from, what's converting, and where budget should go next.",
    tags: ["GA4", "Google Search Console", "Custom Dashboards", "Monthly Reports"],
  },
  {
    icon: "psychology",
    title: "AI-Powered Marketing Automation",
    desc: "AI content agents, automated campaign scheduling, and performance-based budget reallocation — like what we built for RoboMarketer, delivering 10x output with the same team.",
    tags: ["AI Content", "Auto-Scheduling", "Budget Automation", "Performance Agents"],
  },
]

function ServicesSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">Our Marketing Services</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">Everything you need to get found, build trust, and convert visitors into paying customers.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-[2rem] p-8 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-xl transition-all duration-500 group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-6 group-hover:bg-[#FF1E41]/15 transition-colors">
                <span className="material-symbols-outlined text-[#FF1E41] text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-[#1c1b1b] mb-3">{s.title}</h3>
              <p className="text-[#5e3f3e] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="bg-[#f7f2f1] text-[#5e3f3e] text-[10px] font-bold px-3 py-1 rounded-full border border-[#e8bcbb]/30">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { n: "01", icon: "manage_search", title: "Audit & Benchmark", desc: "We analyse your current traffic, rankings, ad performance, and social presence. Then we find the biggest gaps and the fastest wins." },
    { n: "02", icon: "flag", title: "Strategy & Goals", desc: "We agree on clear targets — organic traffic, cost per lead, ROAS — and build a 90-day plan to hit them. No vague promises." },
    { n: "03", icon: "campaign", title: "Execute & Publish", desc: "We create the content, launch the ads, and publish the strategy. You see work happening every week, not just at end-of-month reports." },
    { n: "04", icon: "bar_chart", title: "Measure & Optimise", desc: "Every decision is backed by data. We review performance weekly, cut what isn't working, and double down on what is." },
  ]
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">How We Run Your Marketing</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-xl mx-auto font-light">A clear, accountable process from audit to results.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#fcf9f8] rounded-[1.5rem] p-7 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/20 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              <div className="text-[100px] font-headline font-black text-[#FF1E41]/5 absolute -top-8 -right-4 leading-none select-none">{s.n}</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-6 group-hover:bg-[#FF1E41]/15 transition-colors">
                  <span className="material-symbols-outlined text-[#FF1E41]">{s.icon}</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-[#1c1b1b] mb-3">{s.title}</h3>
                <p className="text-[#5e3f3e] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  { quote: "RoboMarketer gave us superpowers. We publish 10x more content with the same headcount — and every piece performs beyond expectations.", name: "Sarah Mitchell", role: "Marketing Director", accent: "#FF1E41" },
  { quote: "We handed CashAds $2M/month in ad spend and watched it turn into a $2.7M return. The ROI was visible within the first 72 hours.", name: "Priya Kapoor", role: "Head of Growth", accent: "#1c1b1b" },
  { quote: "The SEO and content work Solyio did for us put us on the first page for our three most competitive keywords in under 90 days.", name: "James Park", role: "CEO, Analytics Firm", accent: "#FF1E41" },
]

function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Results</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">From Our Clients</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-[2rem] p-8 border-l-8 hover:shadow-xl transition-all duration-300" style={{ borderLeftColor: t.accent }}>
              <p className="text-lg italic text-[#1c1b1b] mb-8 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-headline font-bold text-[#1c1b1b]">{t.name}</p>
                <p className="text-xs uppercase font-bold tracking-widest mt-1" style={{ color: t.accent }}>{t.role}</p>
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
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Impact</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">Marketing That Pays for Itself</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { val: "285%", label: "Campaign ROI", sub: "Delivered via AI-powered automation" },
            { val: "3.5x", label: "Average ROAS", sub: "On paid advertising campaigns" },
            { val: "Top 3", label: "Google Rankings", sub: "For target keywords in 90 days" },
            { val: "10x", label: "Content Output", sub: "With AI marketing automation" },
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

function CTASection() {
  return (
    <section className="py-28 px-6 sm:px-8 bg-[#fcf9f8]">
      <div className="max-w-4xl mx-auto bg-[#FF1E41] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(255,30,65,0.25)]">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-6">Ready to Grow Your Audience?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto font-light">Let&apos;s talk about where your traffic is coming from — and where it should be coming from.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white text-[#FF1E41] px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-[#fcf9f8] transition-colors shadow-xl">Book a Free Call</Link>
            <Link href="/book" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white hover:text-[#FF1E41] transition-all">Get a Free Audit</Link>
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
            <Link key={s.href} href={s.href} className="px-5 py-2 rounded-full border border-[#e8bcbb]/40 text-[#5e3f3e] text-sm font-bold hover:border-[#FF1E41]/40 hover:text-[#FF1E41] transition-all">{s.label}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MarketingServicesPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ImpactSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
