import type { Metadata } from "next"
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
  )
}
