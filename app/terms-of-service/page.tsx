import type { Metadata } from "next"
<<<<<<< HEAD
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms of Service | Solyio",
  description: "The terms and conditions that govern your use of Solyio's website and services.",
  alternates: { canonical: "https://solyio.com/terms-of-service" },
}

const LAST_UPDATED = "1 May 2025"

export default function TermsOfServicePage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main className="pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto">
        <span className="text-[#FF1E41] font-bold text-sm tracking-[0.2em] uppercase mb-6 block">
          Legal
        </span>
        <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-[1] mb-6 text-[#1c1b1b]">
          Terms of Service
        </h1>
        <p className="text-[#5e3f3e] text-base mb-16">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="prose prose-lg max-w-none space-y-12 text-[#1c1b1b]">

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              By accessing{" "}
              <a href="https://solyio.com" className="text-[#FF1E41] hover:underline">solyio.com</a> or engaging Solyio for services, you agree to be bound by these Terms of Service and our{" "}
              <Link href="/privacy-policy" className="text-[#FF1E41] hover:underline">Privacy Policy</Link>. If you do not agree, please do not use our website or services. These terms are governed by the laws of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">2. Services</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Solyio provides custom software development services including, but not limited to, web development, mobile app development, cloud infrastructure, AI automation, cyber security consultancy, and digital marketing. The specific scope, timeline, deliverables, and fees for any engagement are set out in a separate Statement of Work (SOW) or project proposal agreed in writing between Solyio and the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">3. Client Obligations</h2>
            <ul className="list-disc pl-6 space-y-3 text-[#5e3f3e]">
              <li>Provide accurate, complete, and timely information, materials, and feedback required for project delivery.</li>
              <li>Ensure you have the legal right to use any content, data, or third-party assets you provide to us.</li>
              <li>Designate a single point of contact authorised to make decisions on your behalf.</li>
              <li>Pay invoices in accordance with agreed payment terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-[#5e3f3e] leading-relaxed mb-4">
              Upon receipt of full payment, all custom code and deliverables produced specifically for your project are assigned to you. The following remain the exclusive property of Solyio and are licensed (not sold) to you for use within the delivered project:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#5e3f3e]">
              <li>Internal frameworks, libraries, and reusable components developed independently of your project.</li>
              <li>Our proprietary development methodologies and processes.</li>
            </ul>
            <p className="text-[#5e3f3e] leading-relaxed mt-4">
              You grant us a non-exclusive licence to use your name and a brief description of the project in our portfolio and marketing materials, unless you request otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-3 text-[#5e3f3e]">
              <li>All fees are stated in British Pounds (GBP) or US Dollars (USD) as agreed in the SOW.</li>
              <li>Invoices are payable within 14 days of issue unless otherwise agreed.</li>
              <li>Late payments accrue interest at 8% per annum above the Bank of England base rate under the Late Payment of Commercial Debts Act 1998.</li>
              <li>We reserve the right to pause or cease work on overdue accounts without liability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">6. Confidentiality</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Both parties agree to keep confidential any non-public information disclosed during the engagement, including business plans, technical specifications, and financial data. This obligation survives termination of the engagement for a period of three (3) years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              To the fullest extent permitted by law, Solyio&apos;s total liability for any claim arising out of or related to our services shall not exceed the total fees paid by you in the three (3) months preceding the claim. We are not liable for indirect, incidental, special, or consequential damages, including lost profits or data loss, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">8. Warranties & Disclaimers</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              We warrant that our services will be performed with reasonable skill and care. We do not warrant that deliverables will be free from all defects or that they will meet every business objective. Our website and any publicly available materials are provided &quot;as is&quot; without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">9. Termination</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Either party may terminate an engagement with 14 days&apos; written notice. Upon termination, you are liable for payment of all work completed up to the termination date. Solyio will deliver all completed work product upon receipt of final payment. Clauses regarding intellectual property, confidentiality, and limitation of liability survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">10. Website Use</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              You may not use our website to: (a) violate any applicable law; (b) transmit malicious code; (c) scrape or harvest data without our written consent; or (d) impersonate any person or entity. We reserve the right to restrict access to users who breach these conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">11. Governing Law & Disputes</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              These terms are governed by the laws of England and Wales. Any dispute shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">12. Changes to These Terms</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              We may update these terms periodically. Continued use of our website or services after changes are posted constitutes your acceptance. Material changes to client engagements require written agreement from both parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">13. Contact</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Questions about these terms? Reach us at{" "}
              <a href="mailto:info@solyio.ai" className="text-[#FF1E41] hover:underline">info@solyio.ai</a> or 42 Technology Plaza, Suite 900, Canary Wharf, London E14 5AB, United Kingdom.
            </p>
          </section>

        </div>

        <div className="mt-20 pt-10 border-t border-[#e8bcbb]/40 flex flex-wrap gap-6 text-sm text-[#5e3f3e]">
          <Link href="/privacy-policy" className="hover:text-[#FF1E41] transition-colors font-medium">Privacy Policy →</Link>
          <Link href="/refund-policy" className="hover:text-[#FF1E41] transition-colors font-medium">Refund Policy →</Link>
          <Link href="/contact" className="hover:text-[#FF1E41] transition-colors font-medium">Contact Us →</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
=======
import { LegalPage, type LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service | Solyio",
  description:
    "The terms and conditions that govern your use of the Solyio website and our web, mobile, cloud, and AI development services.",
  alternates: { canonical: "https://solyio.com/terms-of-service" },
  robots: { index: true, follow: true },
}

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms of Service (\"Terms\") govern your access to and use of the Solyio website (solyio.com) and the services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms.",
      },
      {
        type: "paragraph",
        text: "If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.",
      },
    ],
  },
  {
    id: "services",
    heading: "Our Services",
    blocks: [
      {
        type: "paragraph",
        text: "Solyio provides software development and related services, including web development, mobile app development, cloud infrastructure, AI automation, marketing services, and cyber security.",
      },
      {
        type: "paragraph",
        text: "The specific scope, deliverables, timeline, and fees for any project are defined in a separate written proposal, statement of work, or agreement (\"Project Agreement\"). In the event of a conflict between these Terms and a signed Project Agreement, the Project Agreement governs that project.",
      },
    ],
  },
  {
    id: "engagement",
    heading: "Engagement & Quotes",
    blocks: [
      {
        type: "paragraph",
        text: "Quotes and proposals provided by Solyio are valid for the period stated within them and are estimates based on the information available at the time. A project is confirmed only when a Project Agreement is signed and any required deposit is received.",
      },
      {
        type: "paragraph",
        text: "Changes to project scope after a Project Agreement is signed may affect the timeline and fees and will be handled through a written change request.",
      },
    ],
  },
  {
    id: "payment",
    heading: "Payment Terms",
    blocks: [
      {
        type: "list",
        items: [
          "Fees, payment schedules, and milestones are set out in the applicable Project Agreement.",
          "Unless stated otherwise, a deposit is required before work begins, with remaining payments tied to project milestones.",
          "Invoices are due within the period stated on the invoice. Late payments may incur interest or result in suspension of work.",
          "All fees are exclusive of applicable taxes unless stated otherwise, which are the responsibility of the client.",
          "Third-party costs such as hosting, licenses, domains, or paid services are billed separately or passed through to the client.",
        ],
      },
    ],
  },
  {
    id: "client-responsibilities",
    heading: "Client Responsibilities",
    blocks: [
      {
        type: "paragraph",
        text: "To deliver your project successfully, we rely on your cooperation. You agree to:",
      },
      {
        type: "list",
        items: [
          "Provide accurate, complete, and timely information, content, and feedback.",
          "Designate a point of contact authorized to make decisions on the project.",
          "Review deliverables and provide feedback within agreed timeframes.",
          "Ensure you have the rights to any materials, content, or assets you provide to us.",
          "Make payments according to the agreed schedule.",
        ],
      },
      {
        type: "paragraph",
        text: "Delays caused by missing information, late feedback, or unavailability may affect the project timeline and are not the responsibility of Solyio.",
      },
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    blocks: [
      {
        type: "paragraph",
        text: "Upon full payment of all fees for a project, ownership of the final custom deliverables created specifically for you transfers to you, except as noted below.",
      },
      {
        type: "list",
        items: [
          "Solyio retains ownership of any pre-existing tools, frameworks, libraries, or components used in the project, and grants you a license to use them as part of your deliverables.",
          "Third-party components remain subject to their respective licenses.",
          "Until full payment is received, all deliverables and work product remain the property of Solyio.",
          "Unless you opt out in writing, Solyio may display non-confidential project work in its portfolio and marketing materials.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    heading: "Confidentiality",
    blocks: [
      {
        type: "paragraph",
        text: "Each party agrees to keep confidential any non-public information disclosed by the other party in connection with a project, and to use it only for the purpose of delivering the services. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.",
      },
    ],
  },
  {
    id: "warranties",
    heading: "Warranties & Disclaimers",
    blocks: [
      {
        type: "paragraph",
        text: "We deliver our services with reasonable skill and care, in line with professional industry standards. Where included in a Project Agreement, we provide a defined support or bug-fix period after delivery.",
      },
      {
        type: "paragraph",
        text: "Except as expressly stated, our website and services are provided \"as is\" without warranties of any kind, whether express or implied, including warranties of merchantability or fitness for a particular purpose. We do not guarantee specific business outcomes, revenue, rankings, or results.",
      },
    ],
  },
  {
    id: "liability",
    heading: "Limitation of Liability",
    blocks: [
      {
        type: "paragraph",
        text: "To the maximum extent permitted by law, Solyio shall not be liable for any indirect, incidental, special, or consequential damages, or for loss of profits, revenue, or data, arising from your use of our website or services.",
      },
      {
        type: "paragraph",
        text: "Our total aggregate liability for any claim arising from a project shall not exceed the total fees paid by you for that project.",
      },
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    blocks: [
      {
        type: "paragraph",
        text: "Either party may terminate a Project Agreement as set out within it, or where the other party materially breaches these Terms and fails to remedy the breach within a reasonable period after written notice.",
      },
      {
        type: "paragraph",
        text: "Upon termination, you remain responsible for payment of all work completed up to the termination date. Sections relating to intellectual property, confidentiality, and limitation of liability survive termination.",
      },
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable Use of the Website",
    blocks: [
      {
        type: "paragraph",
        text: "You agree not to misuse our website, including by attempting to gain unauthorized access, interfering with its operation, transmitting malicious code, or using it for any unlawful purpose.",
      },
    ],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms are governed by and construed in accordance with applicable law in the jurisdiction in which Solyio operates. Any disputes shall be subject to the exclusive jurisdiction of the competent courts of that jurisdiction.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    blocks: [
      {
        type: "paragraph",
        text: "We may update these Terms from time to time. The updated version will be posted on this page with a revised \"Last updated\" date. Continued use of our website after changes constitutes acceptance of the updated Terms.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions about these Terms of Service, contact us at hello@solyio.com.",
      },
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Terms of <span className="text-[#FF1E41] italic">Service.</span>
        </>
      }
      intro="The ground rules for working with Solyio. These terms cover how we engage, deliver, and protect both sides of every project."
      lastUpdated="May 17, 2026"
      sections={sections}
    />
>>>>>>> ad8552c3dd5d67d4379a8e72ecb9c5cfa97da98f
  )
}
