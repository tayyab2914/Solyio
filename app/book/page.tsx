import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingPageContent } from "@/components/booking-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Free Discovery Call - AI MVP Consultation",
  description:
    "Schedule a free 30-minute discovery call with Solyio's AI experts. Discuss your SaaS MVP idea and learn how we can build your product in 10 days. Available for US and European clients.",
  alternates: {
    canonical: "https://solyio.com/book",
  },
  openGraph: {
    title: "Book a Free Discovery Call - Solyio AI MVP Agency",
    description:
      "Schedule a free consultation to discuss your SaaS MVP idea. Get expert advice on AI-powered development.",
    url: "https://solyio.com/book",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Book a Free Discovery Call - Solyio",
    description: "Schedule a free 30-minute call to discuss your AI MVP project.",
  },
}

function BookingJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Discovery Call",
    description: "30-minute consultation to discuss your SaaS MVP idea",
    provider: {
      "@type": "Organization",
      name: "Solyio",
      url: "https://solyio.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free 30-minute discovery call",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://solyio.com" },
      { "@type": "ListItem", position: 2, name: "Book a Call", item: "https://solyio.com/book" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default function BookPage() {
  return (
    <>
      <BookingJsonLd />
      <main className="min-h-screen bg-background" role="main" aria-label="Book a Discovery Call">
        <Header />
        <BookingPageContent />
        <Footer />
      </main>
    </>
  )
}
