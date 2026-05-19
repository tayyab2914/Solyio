import type { Metadata } from "next"
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Solyio",
  description: "How Solyio collects, uses, and protects your personal information.",
  alternates: { canonical: "https://solyio.com/privacy-policy" },
}

const LAST_UPDATED = "1 May 2025"

export default function PrivacyPolicyPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main className="pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto">
        <span className="text-[#FF1E41] font-bold text-sm tracking-[0.2em] uppercase mb-6 block">
          Legal
        </span>
        <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-[1] mb-6 text-[#1c1b1b]">
          Privacy Policy
        </h1>
        <p className="text-[#5e3f3e] text-base mb-16">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="prose prose-lg max-w-none space-y-12 text-[#1c1b1b]">

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">1. Who We Are</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Solyio (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a software development agency incorporated in the United Kingdom, with its principal office at 42 Technology Plaza, Suite 900, Canary Wharf, London E14 5AB. We build web platforms, mobile apps, cloud infrastructure, and AI automation systems for businesses worldwide. This Privacy Policy explains how we handle personal data when you interact with our website at{" "}
              <a href="https://solyio.com" className="text-[#FF1E41] hover:underline">solyio.com</a> or engage us for services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">2. What Data We Collect</h2>
            <p className="text-[#5e3f3e] leading-relaxed mb-4">We collect data in two ways:</p>
            <ul className="list-disc pl-6 space-y-3 text-[#5e3f3e]">
              <li>
                <strong className="text-[#1c1b1b]">Data you provide directly</strong> — your name, email address, company name, and any message you send through our contact or booking forms.
              </li>
              <li>
                <strong className="text-[#1c1b1b]">Data collected automatically</strong> — anonymised analytics such as pages visited, referral source, and device type. We do not use advertising trackers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-3 text-[#5e3f3e]">
              <li>To respond to enquiries and schedule discovery calls.</li>
              <li>To deliver agreed project work and ongoing support.</li>
              <li>To send transactional emails (project updates, invoices). We do not send marketing emails without your explicit opt-in.</li>
              <li>To improve our website and services using aggregated, anonymised analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              If you are located in the UK or European Economic Area, our legal bases for processing your data are: (a) your consent when submitting a form; (b) performance of a contract when we are engaged to deliver services; and (c) our legitimate interests in operating and improving our business, where those interests are not overridden by your rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">5. Data Sharing</h2>
            <p className="text-[#5e3f3e] leading-relaxed mb-4">
              We do not sell your personal data. We share data only with the following sub-processors, strictly as needed to operate our services:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#5e3f3e]">
              <li><strong className="text-[#1c1b1b]">Resend</strong> — transactional email delivery.</li>
              <li><strong className="text-[#1c1b1b]">Vercel</strong> — website hosting and edge functions.</li>
              <li><strong className="text-[#1c1b1b]">Stripe</strong> — payment processing (when applicable).</li>
            </ul>
            <p className="text-[#5e3f3e] leading-relaxed mt-4">
              All sub-processors are GDPR-compliant and bound by data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">6. Data Retention</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              We retain contact enquiry data for up to 24 months. Client project data is retained for the duration of the engagement plus 12 months, after which it is securely deleted unless retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">7. Your Rights</h2>
            <p className="text-[#5e3f3e] leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-3 text-[#5e3f3e]">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data (&quot;right to be forgotten&quot;).</li>
              <li>Object to or restrict processing.</li>
              <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at{" "}
                <a href="https://ico.org.uk" className="text-[#FF1E41] hover:underline">ico.org.uk</a>.
              </li>
            </ul>
            <p className="text-[#5e3f3e] leading-relaxed mt-4">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:info@solyio.ai" className="text-[#FF1E41] hover:underline">info@solyio.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">8. Cookies</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              We use strictly necessary cookies to operate the website and optional analytics cookies to understand visitor behaviour. Analytics cookies are only set after you accept them. You can withdraw consent at any time by clearing your browser cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">9. Security</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              We apply industry-standard security measures including TLS encryption in transit, AES-256 encryption at rest, and access controls limiting who can view personal data. No system is 100% secure; if you suspect a breach, contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">10. Changes to This Policy</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              We may update this policy from time to time. Material changes will be announced on this page with an updated &quot;Last updated&quot; date. Continued use of our website after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">11. Contact</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              For any privacy-related questions, contact our data team at{" "}
              <a href="mailto:info@solyio.ai" className="text-[#FF1E41] hover:underline">info@solyio.ai</a> or write to us at 42 Technology Plaza, Suite 900, Canary Wharf, London E14 5AB, United Kingdom.
            </p>
          </section>

        </div>

        <div className="mt-20 pt-10 border-t border-[#e8bcbb]/40 flex flex-wrap gap-6 text-sm text-[#5e3f3e]">
          <Link href="/terms-of-service" className="hover:text-[#FF1E41] transition-colors font-medium">Terms of Service →</Link>
          <Link href="/refund-policy" className="hover:text-[#FF1E41] transition-colors font-medium">Refund Policy →</Link>
          <Link href="/contact" className="hover:text-[#FF1E41] transition-colors font-medium">Contact Us →</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
