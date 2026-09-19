import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"
import { JsonLd } from "@/components/json-ld"
import { ORGANIZATION_ID, WEBSITE_ID, absoluteUrl, breadcrumbSchema, faqSchema, ogImage } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us — Talk to an Engineer",
  description:
    "Contact Solyio for AI-powered SaaS MVP development services. Get a free consultation for your startup idea. We serve clients in the US, UK, Germany, and across Europe.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    images: ogImage(),
    title: "Contact Solyio — Talk to an Engineer",
    description:
      "Get in touch with Solyio for your AI-powered MVP project. Free consultation available for startups and entrepreneurs.",
    url: absoluteUrl("/contact"),
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Solyio — Talk to an Engineer",
    description: "Tell us what you are building and we will send back a fixed scope and price.",
  },
}

/**
 * ContactPage only. The Organization (with its contactPoint, email and phone)
 * is emitted once site-wide in app/layout.tsx — we reference it by @id here
 * instead of redefining it.
 */
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contact")}#webpage`,
  name: "Contact Solyio",
  description: "Contact page for Solyio AI MVP development services",
  url: absoluteUrl("/contact"),
  inLanguage: "en",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": ORGANIZATION_ID },
}

/**
 * These Q&As are rendered visibly by <ContactPageContent /> in its
 * "Frequently Asked Questions" section. Keep this list byte-for-byte in sync
 * with components/contact-page-content.tsx — if the visible copy changes or is
 * removed, update or delete this schema too.
 */
const FAQS = [
  {
    q: "How long does it take to build an MVP?",
    a: "Our AI-powered development process delivers production-ready MVPs in just 10 days. This includes discovery, design, development, AI agent integration, and launch.",
  },
  {
    q: "What if I don't have technical knowledge?",
    a: "That's exactly who we built Solyio for! We handle all the technical work while you focus on your business vision. No coding required from your side.",
  },
  {
    q: "What kind of AI agents do you integrate?",
    a: "We integrate custom AI agents for customer support, content generation, data analysis, marketing automation, and more. The specific agents depend on your business needs.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes! We offer various support packages including maintenance, updates, and scaling assistance. Your MVP is just the beginning of our partnership.",
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema,
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
          faqSchema(FAQS),
        ]}
      />
      <main className="min-h-screen bg-background" role="main" aria-label="Contact Page">
        <Header />
        <ContactPageContent />
        <Footer />
      </main>
    </>
  )
}
