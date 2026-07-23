import type { Metadata } from "next"
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
  )
}
