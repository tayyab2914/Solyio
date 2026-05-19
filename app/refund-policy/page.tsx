import type { Metadata } from "next"
<<<<<<< HEAD
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Refund Policy | Solyio",
  description: "Solyio's refund and cancellation policy for software development and agency services.",
  alternates: { canonical: "https://solyio.com/refund-policy" },
}

const LAST_UPDATED = "1 May 2025"

export default function RefundPolicyPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] leading-relaxed selection:bg-[#FF1E41]/20 selection:text-[#FF1E41]">
      <SiteNavbar />
      <main className="pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto">
        <span className="text-[#FF1E41] font-bold text-sm tracking-[0.2em] uppercase mb-6 block">
          Legal
        </span>
        <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-[1] mb-6 text-[#1c1b1b]">
          Refund Policy
        </h1>
        <p className="text-[#5e3f3e] text-base mb-16">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="prose prose-lg max-w-none space-y-12 text-[#1c1b1b]">

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">1. Overview</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Solyio provides bespoke software development and agency services. Because every engagement involves the allocation of skilled team members, infrastructure, and time to your specific project, our refund policy reflects the custom nature of our work. Please read this policy carefully before engaging our services. By making a payment to Solyio you agree to the terms below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">2. Discovery Calls & Consultations</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Initial discovery calls and project scoping consultations are offered free of charge. No payment is required until a Statement of Work (SOW) is signed and a deposit invoice is issued.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">3. Project Deposits</h2>
            <p className="text-[#5e3f3e] leading-relaxed mb-4">
              Most projects require an upfront deposit (typically 30–50% of the total project value) to secure your place in our delivery schedule. Deposit refund eligibility is as follows:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#f0eded]">
                    <th className="text-left p-4 font-bold text-[#1c1b1b] border border-[#e8bcbb]/40">Cancellation timing</th>
                    <th className="text-left p-4 font-bold text-[#1c1b1b] border border-[#e8bcbb]/40">Deposit refund</th>
                  </tr>
                </thead>
                <tbody className="text-[#5e3f3e]">
                  <tr>
                    <td className="p-4 border border-[#e8bcbb]/40">Within 48 hours of deposit payment (no work started)</td>
                    <td className="p-4 border border-[#e8bcbb]/40 font-medium text-emerald-700">100% refund</td>
                  </tr>
                  <tr className="bg-[#faf8f7]">
                    <td className="p-4 border border-[#e8bcbb]/40">3–7 days after deposit (project kick-off initiated)</td>
                    <td className="p-4 border border-[#e8bcbb]/40 font-medium text-amber-700">50% refund</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-[#e8bcbb]/40">After 7 days or after first deliverable shared</td>
                    <td className="p-4 border border-[#e8bcbb]/40 font-medium text-[#FF1E41]">Non-refundable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">4. Milestone & Progress Payments</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Payments made against completed milestones are non-refundable. A milestone is considered completed when Solyio delivers the agreed artefacts (e.g., designs, code, reports) and the client has had a reasonable opportunity to review them. If you are unsatisfied with a milestone delivery, you must raise your concerns in writing within 5 business days of receipt; we will work in good faith to address them at no additional charge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">5. Retainer & Ongoing Services</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Monthly retainer fees are billed in advance. You may cancel a retainer with 14 days&apos; written notice prior to the next billing date. Cancellations received less than 14 days before the next billing date will be processed for the following billing cycle; the current month&apos;s retainer is non-refundable. Unused retainer hours do not roll over to the following month.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">6. Solyio-Initiated Cancellation</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              In the rare event that Solyio must cancel a project engagement before completion (e.g., due to unforeseen capacity constraints), we will provide a full refund of any fees paid for work not yet delivered and assist you in transitioning to an alternative provider where possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">7. Disputed Work</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              If you believe delivered work does not meet the agreed specifications in the SOW, please contact us at{" "}
              <a href="mailto:info@solyio.ai" className="text-[#FF1E41] hover:underline">info@solyio.ai</a> within 10 business days of delivery. We will review the dispute and, where our work is found to be deficient, we will either remedy the issue at no charge or issue a partial or full refund at our discretion. Disputes raised outside this window will be handled on a goodwill basis only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">8. Exclusions</h2>
            <p className="text-[#5e3f3e] leading-relaxed mb-4">Refunds will not be issued in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-3 text-[#5e3f3e]">
              <li>You change the project requirements after work has begun, causing scope changes.</li>
              <li>Delays or issues caused by your failure to provide required materials, feedback, or approvals on time.</li>
              <li>Third-party tool, API, or platform costs (e.g., cloud hosting, Stripe fees) paid on your behalf.</li>
              <li>You simply change your mind about a project direction after approved milestones have been delivered.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">9. How to Request a Refund</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              Email{" "}
              <a href="mailto:info@solyio.ai" className="text-[#FF1E41] hover:underline">info@solyio.ai</a> with the subject line &quot;Refund Request — [Your Project Name]&quot;, your invoice number, and the reason for your request. We will acknowledge your request within 2 business hours and aim to resolve it within 5 business days. Approved refunds are processed via the original payment method within 5–10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4">10. Contact</h2>
            <p className="text-[#5e3f3e] leading-relaxed">
              For any questions about this policy, contact us at{" "}
              <a href="mailto:info@solyio.ai" className="text-[#FF1E41] hover:underline">info@solyio.ai</a> or write to 42 Technology Plaza, Suite 900, Canary Wharf, London E14 5AB, United Kingdom.
            </p>
          </section>

        </div>

        <div className="mt-20 pt-10 border-t border-[#e8bcbb]/40 flex flex-wrap gap-6 text-sm text-[#5e3f3e]">
          <Link href="/privacy-policy" className="hover:text-[#FF1E41] transition-colors font-medium">Privacy Policy →</Link>
          <Link href="/terms-of-service" className="hover:text-[#FF1E41] transition-colors font-medium">Terms of Service →</Link>
          <Link href="/contact" className="hover:text-[#FF1E41] transition-colors font-medium">Contact Us →</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
=======
import { LegalPage, type LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Refund Policy | Solyio",
  description:
    "Solyio's refund policy — how deposits, milestones, cancellations, and refund requests are handled across our development and service engagements.",
  alternates: { canonical: "https://solyio.com/refund-policy" },
  robots: { index: true, follow: true },
}

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    blocks: [
      {
        type: "paragraph",
        text: "This Refund Policy explains how Solyio (\"Solyio\", \"we\", \"us\", or \"our\") handles deposits, payments, cancellations, and refund requests for our services. It applies to all engagements unless a signed Project Agreement states otherwise.",
      },
      {
        type: "paragraph",
        text: "Because we provide custom software development and professional services, refunds are assessed based on the work completed rather than offered as automatic returns. We aim to be fair and transparent in every case.",
      },
    ],
  },
  {
    id: "deposits",
    heading: "Deposits",
    blocks: [
      {
        type: "paragraph",
        text: "Most projects require an upfront deposit before work begins. This deposit reserves your place in our schedule and covers initial discovery, planning, and setup work.",
      },
      {
        type: "list",
        items: [
          "Deposits are non-refundable once project work has commenced, as this work is performed immediately after payment.",
          "If you cancel before any work has started, the deposit may be refundable in part, less any administrative or planning costs already incurred.",
        ],
      },
    ],
  },
  {
    id: "milestone-payments",
    heading: "Milestone Payments",
    blocks: [
      {
        type: "paragraph",
        text: "Projects are typically billed in milestones tied to defined stages of work. Payments made for milestones that have been completed and delivered are non-refundable.",
      },
      {
        type: "paragraph",
        text: "If a project is cancelled mid-milestone, we will assess the proportion of work completed within that milestone and refund any unearned balance, where applicable.",
      },
    ],
  },
  {
    id: "eligible",
    heading: "When You May Be Eligible for a Refund",
    blocks: [
      {
        type: "paragraph",
        text: "A partial or full refund of unearned fees may be considered in the following situations:",
      },
      {
        type: "list",
        items: [
          "Solyio is unable to start or continue your project for reasons within our control.",
          "You cancel the project before significant work has been completed, in which case you are charged only for work performed to date.",
          "Services paid for in advance were not delivered and cannot be delivered.",
        ],
      },
    ],
  },
  {
    id: "not-eligible",
    heading: "When Refunds Are Not Available",
    blocks: [
      {
        type: "paragraph",
        text: "Refunds are generally not available in the following circumstances:",
      },
      {
        type: "list",
        items: [
          "Work that has already been completed, delivered, or approved.",
          "Change of mind, change in business direction, or no longer needing the project.",
          "Delays or issues caused by missing information, late feedback, or unavailability on the client side.",
          "Dissatisfaction with outcomes that fall outside the agreed scope, where the delivered work meets the agreed specification.",
          "Third-party costs already incurred on your behalf, such as hosting, domains, licenses, or paid advertising spend.",
          "Subscription, retainer, or support fees for periods that have already begun.",
        ],
      },
    ],
  },
  {
    id: "cancellation",
    heading: "Project Cancellation",
    blocks: [
      {
        type: "paragraph",
        text: "Either party may cancel a project as set out in the applicable Project Agreement. If you choose to cancel, you remain responsible for payment of all work completed up to the cancellation date, including any work in progress.",
      },
      {
        type: "paragraph",
        text: "Upon cancellation, we will provide a summary of completed work and a final invoice or refund calculation reflecting the work performed.",
      },
    ],
  },
  {
    id: "retainers",
    heading: "Retainers & Subscriptions",
    blocks: [
      {
        type: "paragraph",
        text: "For ongoing retainers, support plans, or subscription services, you may cancel future billing cycles by giving notice as specified in your agreement. Fees for the current billing period are non-refundable, and cancellation takes effect at the end of that period.",
      },
    ],
  },
  {
    id: "revisions",
    heading: "Revisions & Quality Concerns",
    blocks: [
      {
        type: "paragraph",
        text: "If you believe a deliverable does not meet the agreed scope or specification, please contact us promptly. We will work to correct genuine errors or omissions within the agreed scope at no additional cost, as part of our commitment to quality.",
      },
      {
        type: "paragraph",
        text: "We prioritize resolving concerns through revisions and corrections before any refund is considered.",
      },
    ],
  },
  {
    id: "how-to-request",
    heading: "How to Request a Refund",
    blocks: [
      {
        type: "paragraph",
        text: "To request a refund, email us at hello@solyio.com with the following details:",
      },
      {
        type: "list",
        items: [
          "Your name and the project or invoice reference.",
          "The reason for your refund request.",
          "Any supporting information that helps us assess the request.",
        ],
      },
      {
        type: "paragraph",
        text: "We will review your request and respond within 5 business days. Approved refunds are processed within 10 business days using the original payment method.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Refund Policy from time to time. The updated version will be posted on this page with a revised \"Last updated\" date. The policy in effect at the time your Project Agreement is signed applies to that project.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions about this Refund Policy, contact us at hello@solyio.com.",
      },
    ],
  },
]

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Refund <span className="text-[#FF1E41] italic">Policy.</span>
        </>
      }
      intro="We believe in fair, transparent terms. Here's exactly how deposits, milestones, cancellations, and refunds work at Solyio."
      lastUpdated="May 17, 2026"
      sections={sections}
    />
>>>>>>> ad8552c3dd5d67d4379a8e72ecb9c5cfa97da98f
  )
}
