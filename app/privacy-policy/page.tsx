import type { Metadata } from "next"
<<<<<<< HEAD
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
=======
import { LegalPage, type LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | Solyio",
  description:
    "How Solyio collects, uses, stores, and protects your personal data across our website and services. Read our full privacy policy.",
  alternates: { canonical: "https://solyio.com/privacy-policy" },
  robots: { index: true, follow: true },
}

const sections: LegalSection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    blocks: [
      {
        type: "paragraph",
        text: "Solyio (\"Solyio\", \"we\", \"us\", or \"our\") respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains what information we collect, how we use it, and the rights you have over it when you visit solyio.com or engage our services.",
      },
      {
        type: "paragraph",
        text: "By using our website or services, you consent to the practices described in this policy. If you do not agree with this policy, please do not use our website or services.",
      },
    ],
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    blocks: [
      {
        type: "paragraph",
        text: "We collect information in two ways — information you provide directly and information collected automatically as you use our site.",
      },
      {
        type: "list",
        items: [
          "Contact details you submit through our forms, such as your name, email address, phone number, and company.",
          "Project information you share with us when requesting a quote, consultation, or proposal.",
          "Communications you send to us via email, calls, or scheduled meetings.",
          "Technical data collected automatically, including IP address, browser type, device information, pages visited, and referring URLs.",
          "Cookies and similar technologies used to analyze traffic and improve your experience.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "We use the information we collect for legitimate business purposes, including:",
      },
      {
        type: "list",
        items: [
          "Responding to your inquiries and providing the services you request.",
          "Preparing proposals, quotes, and project deliverables.",
          "Communicating with you about projects, updates, and support.",
          "Improving our website, services, and customer experience.",
          "Sending you relevant updates or marketing communications, where you have opted in.",
          "Complying with legal obligations and protecting our legal rights.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    heading: "Cookies & Analytics",
    blocks: [
      {
        type: "paragraph",
        text: "Our website uses cookies and analytics tools to understand how visitors interact with our content. These help us measure traffic, improve performance, and deliver a better experience.",
      },
      {
        type: "paragraph",
        text: "You can control or disable cookies through your browser settings. Note that disabling cookies may affect certain features of the website.",
      },
    ],
  },
  {
    id: "data-sharing",
    heading: "How We Share Information",
    blocks: [
      {
        type: "paragraph",
        text: "We do not sell your personal data. We only share information in the limited circumstances below:",
      },
      {
        type: "list",
        items: [
          "With trusted service providers who help us operate our business, such as hosting, analytics, and email providers, under confidentiality obligations.",
          "When required by law, regulation, legal process, or government request.",
          "To protect the rights, property, or safety of Solyio, our clients, or others.",
          "In connection with a merger, acquisition, or sale of assets, where data may be transferred as part of the transaction.",
        ],
      },
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    blocks: [
      {
        type: "paragraph",
        text: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    blocks: [
      {
        type: "paragraph",
        text: "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, to comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.",
      },
    ],
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    blocks: [
      {
        type: "paragraph",
        text: "Depending on your location, you may have the following rights regarding your personal data:",
      },
      {
        type: "list",
        items: [
          "The right to access the personal data we hold about you.",
          "The right to request correction of inaccurate or incomplete data.",
          "The right to request deletion of your personal data.",
          "The right to object to or restrict certain processing of your data.",
          "The right to withdraw consent for marketing communications at any time.",
          "The right to data portability, where applicable.",
        ],
      },
      {
        type: "paragraph",
        text: "To exercise any of these rights, contact us at hello@solyio.com. We will respond within the timeframe required by applicable law.",
      },
    ],
  },
  {
    id: "third-party",
    heading: "Third-Party Links",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      },
    ],
  },
  {
    id: "children",
    heading: "Children's Privacy",
    blocks: [
      {
        type: "paragraph",
        text: "Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can remove it.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised \"Last updated\" date. Continued use of our website after changes constitutes acceptance of the updated policy.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have questions or concerns about this Privacy Policy or how we handle your data, contact us at hello@solyio.com.",
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Privacy <span className="text-[#FF1E41] italic">Policy.</span>
        </>
      }
      intro="Your privacy matters to us. This policy explains exactly what data we collect, why we collect it, and the control you have over it."
      lastUpdated="May 17, 2026"
      sections={sections}
    />
>>>>>>> ad8552c3dd5d67d4379a8e72ecb9c5cfa97da98f
  )
}
