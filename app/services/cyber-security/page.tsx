import Link from "next/link"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Cyber Security Services | Solyio — Penetration Testing & Compliance",
  description:
    "Solyio provides cybersecurity services including penetration testing, security audits, HIPAA/GDPR compliance, and zero-trust architecture. Protect your business before attackers find the gap.",
  alternates: { canonical: "https://solyio.com/services/cyber-security" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cyber Security Services",
  provider: { "@type": "Organization", name: "Solyio", url: "https://solyio.com" },
  description: "Cybersecurity services including penetration testing, security audits, compliance consulting, and zero-trust architecture implementation.",
  areaServed: "Worldwide",
  serviceType: "Cybersecurity",
}

function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 px-6 sm:px-8 overflow-hidden bg-[#1c1b1b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[#FF1E41]/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#FF1E41]/5 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#FF1E41]/30 mb-8 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF1E41] animate-ping" />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#FF1E41]">Cyber Security</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.88] text-white mb-8">
              Find the Gaps{" "}
              <span className="text-[#FF1E41] italic">Before Attackers Do.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-xl mb-10 leading-relaxed font-light">
              Security audits, penetration testing, compliance consulting, and
              zero-trust architecture — we harden your systems so a breach
              becomes a non-event rather than a business-ending crisis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="kinetic-gradient text-white font-headline font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-[#FF1E41]/30 hover:-translate-y-0.5 transition-all text-center">
                Request a Security Audit
              </Link>
              <Link href="/book" className="bg-white/8 border border-white/20 text-white font-headline font-bold py-4 px-10 rounded-full text-lg hover:bg-white/15 transition-all text-center">
                Book a Pentest
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/10 shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { val: "100%", label: "HIPAA/GDPR Compliant", color: "text-emerald-400" },
                  { val: "0", label: "Critical Vulns Left Open", color: "text-[#FF1E41]" },
                  { val: "OWASP", label: "Top 10 Tested", color: "text-white" },
                  { val: "Zero", label: "Trust Architecture", color: "text-white" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/8 rounded-2xl p-5 border border-white/5">
                    <div className={`text-2xl font-headline font-black ${s.color}`}>{s.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#FF1E41]/10 border border-[#FF1E41]/20 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF1E41]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#FF1E41] text-xl">security</span>
                </div>
                <div>
                  <div className="text-white font-headline font-bold text-sm">SECURITY SCAN ACTIVE</div>
                  <div className="text-white/40 text-xs">Monitoring for vulnerabilities</div>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-[#FF1E41] animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const problems = [
  { icon: "bug_report", title: "You Don't Know What Vulnerabilities You Have", desc: "Most businesses only discover security gaps after they've been exploited. By then, customer data is compromised, regulators are calling, and trust is gone. A pentest finds these gaps first." },
  { icon: "gavel", title: "You Need to Be Compliant but Don't Know Where to Start", desc: "HIPAA, GDPR, SOC 2, PCI-DSS — compliance requirements are complex, technical, and carry serious penalties for non-compliance. Most businesses don't have the expertise in-house." },
  { icon: "lock_open", title: "Your Team Has No Security-First Culture", desc: "Weak passwords, shared credentials, unpatched dependencies, open S3 buckets — the most dangerous vulnerabilities come from everyday habits, not sophisticated attacks." },
  { icon: "wifi_tethering_error", title: "Your Network Has No Segmentation", desc: "A flat network means if one machine is compromised, everything is. No zero-trust, no least-privilege access, no audit logging — attackers can move laterally without resistance." },
]

function ProblemSection() {
  return (
    <section className="py-28 bg-[#f7f2f1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">The Challenge</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">Security Risks That Keep CEOs Up at Night</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-2xl mx-auto text-lg font-light">These aren't hypothetical. They're the vulnerabilities we find on every new client engagement.</p>
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

const services = [
  { icon: "manage_search", title: "Penetration Testing", desc: "We simulate real-world attacks against your web applications, APIs, mobile apps, and network — using the same techniques actual attackers use. You get a full report with severity ratings and remediation steps.", tags: ["Web App Pentest", "API Security", "Mobile App Testing", "Network Pentest"] },
  { icon: "fact_check", title: "Security Audit", desc: "A comprehensive review of your codebase, infrastructure configuration, access controls, and security policies — identifying vulnerabilities before they become incidents.", tags: ["Code Review", "Config Audit", "Access Control", "Dependency Scan"] },
  { icon: "policy", title: "Compliance Consulting", desc: "We guide you through HIPAA, GDPR, SOC 2, and PCI-DSS requirements — mapping your current state, identifying gaps, and implementing the controls needed to pass audits.", tags: ["HIPAA", "GDPR", "SOC 2", "PCI-DSS"] },
  { icon: "hub", title: "Zero-Trust Architecture", desc: "Implementing least-privilege access, network micro-segmentation, MFA everywhere, and continuous verification — so a compromised credential doesn't mean a compromised system.", tags: ["Zero Trust", "MFA", "Network Segmentation", "IAM"] },
]

function ServicesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">What We Secure</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-xl mx-auto font-light">End-to-end security — from your codebase to your cloud to your team's habits.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-[#fcf9f8] rounded-[2rem] p-8 border border-[#e8bcbb]/20 hover:border-[#FF1E41]/30 hover:shadow-xl transition-all duration-500 group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#FF1E41]/8 flex items-center justify-center mb-6 group-hover:bg-[#FF1E41]/15 transition-colors">
                <span className="material-symbols-outlined text-[#FF1E41] text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-[#1c1b1b] mb-3">{s.title}</h3>
              <p className="text-[#5e3f3e] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="bg-[#1c1b1b] text-white text-[10px] font-bold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
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
            Healthcare SaaS: HIPAA Compliance & Zero-Trust Implementation
          </h2>
        </div>

        <div className="bg-white rounded-[2rem] overflow-hidden border border-[#e8bcbb]/20 shadow-xl">
          <div className="bg-[#1c1b1b] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF1E41]/10 rounded-full blur-[80px]" />
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Client</div>
                <div className="text-white font-headline font-bold text-lg">MedCore SaaS</div>
                <div className="text-white/50 text-sm">Electronic health records platform</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Challenge</div>
                <div className="text-white font-headline font-bold text-lg">Non-HIPAA Compliant</div>
                <div className="text-white/50 text-sm">Handling PHI without proper controls</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Outcome</div>
                <div className="text-[#FF1E41] font-headline font-bold text-lg">Full HIPAA Certification</div>
                <div className="text-white/50 text-sm">Zero critical vulnerabilities remaining</div>
              </div>
            </div>
          </div>

          <div className="p-10 grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-4">The Problem</div>
              <p className="text-[#5e3f3e] text-sm leading-relaxed mb-4">
                MedCore was processing patient health records (PHI) across a SaaS platform with no encryption at rest, no audit logging, shared database credentials across environments, and no Business Associate Agreements in place with their cloud providers.
              </p>
              <p className="text-[#5e3f3e] text-sm leading-relaxed">
                Our initial penetration test identified 3 critical vulnerabilities — including an IDOR flaw that would allow any authenticated user to access any other patient's records.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#FF1E41] uppercase tracking-widest mb-4">Our Solution</div>
              <ul className="space-y-2">
                {[
                  "Full HIPAA gap analysis and remediation roadmap",
                  "AES-256 encryption at rest and in transit for all PHI",
                  "Zero-trust network architecture with AWS PrivateLink",
                  "Role-based access control with audit logging to CloudTrail",
                  "Automated vulnerability scanning in CI/CD pipeline",
                  "Staff security awareness training programme",
                  "BAA setup with AWS, Twilio, and all third-party vendors",
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
                { val: "0", label: "Critical Vulns Remaining" },
                { val: "100%", label: "HIPAA Compliant" },
                { val: "AES-256", label: "Encryption Standard" },
                { val: "90d", label: "Time to Full Compliance" },
              ].map((m) => (
                <div key={m.label} className="bg-[#f7f2f1] rounded-2xl p-5 text-center">
                  <div className="text-[#FF1E41] font-headline font-black text-2xl">{m.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#5e3f3e] font-bold mt-1">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["HIPAA", "OWASP", "AWS WAF", "CloudTrail", "KMS", "Zero Trust", "Burp Suite", "Nessus"].map((t) => (
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
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Why It Matters</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">The Cost of Not Acting</h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-lg font-light">A breach isn't just a technical problem. It's a business-ending event for most SMEs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { val: "$4.9M", label: "Avg cost of a data breach", sub: "IBM Cost of a Data Breach 2024" },
            { val: "60%", label: "SMEs close within 6 months", sub: "After a significant cyber attack" },
            { val: "277d", label: "Avg time to detect a breach", sub: "Without proper monitoring" },
            { val: "90d", label: "To full compliance", sub: "Our average engagement timeline" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-[1.5rem] p-7 border border-white/10 hover:border-[#FF1E41]/30 transition-colors">
              <div className="text-4xl font-headline font-black text-[#FF1E41] mb-2">{s.val}</div>
              <div className="text-white font-bold mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-[#FF1E41]/10 border border-[#FF1E41]/20 rounded-[2rem] p-8 text-center">
          <span className="material-symbols-outlined text-[#FF1E41] text-4xl mb-4 block">info</span>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto">
            The average cost of a penetration test is <strong className="text-white">less than 0.1%</strong> of the average cost of a data breach. Security isn&apos;t an expense — it&apos;s the cheapest insurance you&apos;ll ever buy.
          </p>
        </div>
      </div>
    </section>
  )
}

const techStack = [
  { name: "Burp Suite", icon: "bug_report" }, { name: "Nessus", icon: "manage_search" }, { name: "OWASP ZAP", icon: "security" },
  { name: "AWS WAF", icon: "shield" }, { name: "Cloudflare", icon: "cloud" }, { name: "Snyk", icon: "verified_user" },
  { name: "AWS KMS", icon: "key" }, { name: "CloudTrail", icon: "history" }, { name: "Vault", icon: "lock" },
  { name: "Trivy", icon: "deployed_code" }, { name: "SonarQube", icon: "code" }, { name: "1Password", icon: "password" },
]

function TechStackSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF1E41] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Technology</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-[#1c1b1b]">Our Security Toolkit</h2>
          <p className="text-[#5e3f3e] mt-4 max-w-xl mx-auto font-light">Industry-standard tools used by security professionals worldwide — the same ones real attackers use.</p>
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
      <div className="max-w-4xl mx-auto bg-[#1c1b1b] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(28,27,27,0.2)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#FF1E41]/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-6">
            Don&apos;t Wait for a Breach to Act.
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto font-light">
            Book a free security consultation. We&apos;ll tell you where your biggest risks are — no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="kinetic-gradient text-white px-10 py-5 rounded-full font-headline font-bold text-lg shadow-xl hover:scale-105 transition-transform">
              Book a Free Consultation
            </Link>
            <Link href="/book" className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-all">
              Request a Pentest
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
            { label: "Marketing Services", href: "/services/marketing-services" },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="px-5 py-2 rounded-full border border-[#e8bcbb]/40 text-[#5e3f3e] text-sm font-bold hover:border-[#FF1E41]/40 hover:text-[#FF1E41] transition-all">{s.label}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CyberSecurityPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <CaseStudySection />
        <ImpactSection />
        <TechStackSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
