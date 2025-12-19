import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch for AI MVP Development",
  description:
    "Contact Solyio for AI-powered SaaS MVP development services. Get a free consultation for your startup idea. We serve clients in the US, UK, Germany, and across Europe.",
  alternates: {
    canonical: "https://solyio.com/contact",
  },
  openGraph: {
    title: "Contact Solyio - AI MVP Development Agency",
    description:
      "Get in touch with Solyio for your AI-powered MVP project. Free consultation available for startups and entrepreneurs.",
    url: "https://solyio.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Solyio - AI MVP Development",
    description: "Get in touch for AI-powered SaaS MVP development services.",
  },
}

function ContactJsonLd() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Solyio",
    description: "Contact page for Solyio AI MVP development services",
    url: "https://solyio.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Solyio",
      email: "hello@solyio.com",
      telephone: "+1-555-123-4567",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://solyio.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://solyio.com/contact" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default function ContactPage() {
  return (
    <>
      <ContactJsonLd />
      <main className="min-h-screen bg-background" role="main" aria-label="Contact Page">
        <Header />
        <ContactPageContent />
        <Footer />
      </main>
    </>
  )
}
