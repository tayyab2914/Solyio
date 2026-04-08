import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Cloud Infrastructure Services | Solyio — AWS, GCP & Azure",
  description:
    "Solyio designs and manages cloud infrastructure on AWS, GCP, and Azure. Secure, scalable, cost-efficient environments with DevOps, CI/CD, and 24/7 monitoring.",
  alternates: { canonical: "https://solyio.com/services/cloud-infrastructure" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud Infrastructure Services",
  provider: { "@type": "Organization", name: "Solyio", url: "https://solyio.com" },
  description: "Cloud infrastructure design, migration, DevOps, CI/CD pipelines, and managed cloud services on AWS, GCP, and Azure.",
  areaServed: "Worldwide",
  serviceType: "Cloud Infrastructure",
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
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">Cloud Infrastructure</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.88] text-[#1c1b1b] mb-8">
              Cloud That Scales{" "}
              <span className="text-[#FF1E41] italic">Without the Headaches.</span>
            </h1>
            <p className="text-xl text-[#5e3f3e] max-w-xl mb-10 leading-relaxed font-light">
              We design, build, and manage cloud environments on AWS, GCP, and
              Azure — secure, cost-efficient, and built to grow with your
              business. No overcomplicated setups, no surprise bills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="kinetic-gradient text-white font-headline font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-[#FF1E41]/20 hover:-translate-y-0.5 transition-all text-center">
                Discuss Your Infrastructure
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
                  { val: "99.99%", label: "Uptime SLA", color: "text-[#FF1E41]" },
                  { val: "−60%", label: "Infra cost reduction", color: "text-[#1c1b1b]" },
                  { val: "<200ms", label: "Global response time", color: "text-[#1c1b1b]" },
                  { val: "24/7", label: "Monitoring & alerts", color: "text-[#FF1E41]" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className={`text-2xl font-headline font-black ${s.color}`}>{s.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#1c1b1b] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-emerald-400 text-xl">cloud_done</span>
                </div>
                <div>
                  <div className="text-white font-headline font-bold text-sm">INFRASTRUCTURE HEALTHY</div>
                  <div className="text-white/40 text-xs">All systems operational</div>
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

const problems = [
  { icon: "attach_money", title: "Your Cloud Bills Are Out of Control", desc: "Unused resources, oversized instances, no auto-scaling — cloud costs creep up with no visibility into what's causing them. A proper setup cuts 30–60% without touching performance." },
  { icon: "warning", title: "One Bad Deploy Can Take Down Everything", desc: "No staging environment, no rollback mechanism, manual deployments via SSH — when something breaks in production, it stays broken while your team scrambles." },
  { icon: "lock_open", title: "Your Infrastructure Isn't Secure", desc: "Open ports, root credentials in environment files, no network segmentation, no audit logging — a single misconfiguration is all it takes to expose your entire system." },
  { icon: "trending_down", title: "You Can't Scale Under Load", desc: "Traffic spikes crash your server. Your single database instance is a bottleneck. You're on a VPS that can't handle 10x the users — and you know it's only a matter of time." },
]

function ProblemSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">The Challenge</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">Cloud Problems We Fix</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">Infrastructure issues that quietly bleed money and risk until something finally breaks.</p>
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
  { n: "01", icon: "map", title: "Infrastructure Audit", desc: "We map your current setup: what's running, what it costs, what's exposed, and what will break under load. You get a clear picture of where you stand." },
  { n: "02", icon: "architecture", title: "Architecture Design", desc: "We design the right cloud architecture for your load profile — multi-AZ, auto-scaling, managed databases, CDN, and proper network segmentation. Built to grow." },
  { n: "03", icon: "code", title: "Infrastructure as Code", desc: "Everything provisioned via Terraform or CDK — fully reproducible, version-controlled, and reviewable. No more undocumented manual changes." },
  { n: "04", icon: "monitor_heart", title: "CI/CD & Monitoring", desc: "Automated pipelines for testing and deployment, plus full observability: metrics, logs, traces, and alerts — so you catch issues before your users do." },
]

function SolutionSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b] mb-6">How We Set Up Your Cloud</h2>
            <p className="text-[#5e3f3e] leading-relaxed text-lg font-light">A methodical approach to cloud infrastructure that prioritises security, reliability, and cost efficiency — in that order.</p>
            <Link href="/book" className="mt-8 inline-flex items-center gap-2 text-[#FF1E41] font-headline font-black tracking-tight hover:gap-4 transition-all">
              Start the conversation <span className="material-symbols-outlined">arrow_forward</span>
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

function CaseStudySection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Case Study</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">
            Fintech Startup: Monolith to Microservices on AWS
          </h2>
        </div>

        <div className="bg-white rounded-[2rem] overflow-hidden border border-[#e8bcbb]/20 shadow-xl">
          <div className="bg-[#1c1b1b] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF1E41]/10 rounded-full blur-[80px]" />
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Client</div>
                <div className="text-white font-headline font-bold text-lg">FinFlow Technologies</div>
                <div className="text-white/50 text-sm">B2B payments infrastructure</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Challenge</div>
                <div className="text-white font-headline font-bold text-lg">Monolith Bottleneck</div>
                <div className="text-white/50 text-sm">Scaling failures under peak load</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Outcome</div>
                <div className="text-[#FF1E41] font-headline font-bold text-lg">99.99% Uptime</div>
                <div className="text-white/50 text-sm">60% infrastructure cost reduction</div>
              </div>
            </div>
          </div>

          <div className="p-10 grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-4">The Problem</div>
              <p className="text-[#5e3f3e] text-sm leading-relaxed mb-4">
                FinFlow was running a monolithic Rails application on a single EC2 instance. As transaction volume grew, the system struggled — payment processing latency spiked during peak hours, and a single failing service took down the entire platform.
              </p>
              <p className="text-[#5e3f3e] text-sm leading-relaxed">
                Deployments required a full application restart, causing 5–10 minutes of downtime each time. Their cloud costs were growing faster than revenue, with no visibility into what was causing the spend.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-4">Our Solution</div>
              <p className="text-[#5e3f3e] text-sm leading-relaxed mb-4">
                We migrated the monolith to a microservices architecture on AWS — separate ECS Fargate services for payments, auth, notifications, and reporting, each independently scalable and deployable.
              </p>
              <ul className="space-y-2">
                {[
                  "Multi-AZ RDS with read replicas and automated failover",
                  "CloudFront CDN + Application Load Balancer",
                  "Terraform infrastructure-as-code across all environments",
                  "GitHub Actions CI/CD with blue-green deployment",
                  "CloudWatch + Grafana for full observability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#5e3f3e] text-sm">
                    <span className="material-symbols-outlined text-[#FF1E41] text-sm mt-0.5 shrink-0">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-10 pb-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: "99.99%", label: "Uptime (from 97.2%)" },
                { val: "−60%", label: "Monthly AWS Cost" },
                { val: "<80ms", label: "API Response Time" },
                { val: "0min", label: "Deployment Downtime" },
              ].map((m) => (
                <div key={m.label} className="bg-[#f7f2f1] rounded-2xl p-5 text-center">
                  <div className="text-[#FF1E41] font-headline font-black text-2xl">{m.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-1">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["AWS ECS Fargate", "RDS Aurora", "CloudFront", "Terraform", "GitHub Actions", "CloudWatch", "Grafana"].map((t) => (
                <span key={t} className="bg-[#1c1b1b] text-white text-[10px] font-bold px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
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
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">What Proper Cloud Does for Your Business</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { val: "99.99%", label: "Uptime SLA", sub: "Multi-AZ, auto-healing architecture" },
            { val: "−60%", label: "Cloud Cost", sub: "Right-sizing + reserved capacity" },
            { val: "0min", label: "Deploy Downtime", sub: "Blue-green deployment pipeline" },
            { val: "24/7", label: "Monitoring", sub: "Alerts before users notice issues" },
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
  { name: "AWS", icon: "cloud" }, { name: "Google Cloud", icon: "cloud_circle" }, { name: "Azure", icon: "cloud_queue" },
  { name: "Terraform", icon: "code" }, { name: "Docker", icon: "deployed_code" }, { name: "Kubernetes", icon: "hub" },
  { name: "GitHub Actions", icon: "play_circle" }, { name: "CloudFlare", icon: "shield" }, { name: "Grafana", icon: "bar_chart" },
  { name: "Datadog", icon: "monitor_heart" }, { name: "Redis", icon: "memory" }, { name: "PostgreSQL", icon: "storage" },
]

function TechStackSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Technology</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">Our Cloud Stack</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-xl mx-auto font-light">Cloud-native tools chosen for reliability, observability, and long-term maintainability.</p>
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
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-6">Ready to Fix Your Infrastructure?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto font-light">Tell us about your current setup — we&apos;ll audit it for free and show you exactly what needs to change.</p>
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

export default function CloudInfrastructurePage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CaseStudySection />
        <ImpactSection />
        <TechStackSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
