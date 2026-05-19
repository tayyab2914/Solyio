import type { Metadata } from "next"
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
  )
}
