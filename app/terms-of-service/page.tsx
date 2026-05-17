import type { Metadata } from "next"
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
  )
}
