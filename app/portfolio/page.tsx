import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioPageContent } from "@/components/portfolio-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - AI-Powered SaaS MVPs We've Launched",
  description:
    "Explore the AI-powered SaaS MVPs Solyio has launched. Real case studies with measurable results: 10x content output, 80% time savings, and more. See our work in healthcare, education, marketing, and real estate.",
  alternates: {
    canonical: "https://solyio.com/portfolio",
  },
  openGraph: {
    title: "Solyio Portfolio - AI-Powered SaaS MVPs",
    description:
      "Explore successful AI-powered MVPs we've launched. Real products with real results in various industries.",
    url: "https://solyio.com/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solyio Portfolio - AI MVPs We've Built",
    description: "See the AI-powered SaaS products we've launched for startups and businesses.",
  },
}

function PortfolioJsonLd() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Solyio Portfolio",
    description: "Collection of AI-powered SaaS MVPs built by Solyio",
    url: "https://solyio.com/portfolio",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "RoboMarketer", url: "https://solyio.com/portfolio/robomarketer" },
        { "@type": "ListItem", position: 2, name: "ExpertAIQ", url: "https://solyio.com/portfolio/expertaiq" },
        { "@type": "ListItem", position: 3, name: "CashAds", url: "https://solyio.com/portfolio/cashads" },
        {
          "@type": "ListItem",
          position: 4,
          name: "HealthTrack AI",
          url: "https://solyio.com/portfolio/healthtrack-ai",
        },
        { "@type": "ListItem", position: 5, name: "LearnMate", url: "https://solyio.com/portfolio/learnmate" },
        { "@type": "ListItem", position: 6, name: "PropWise", url: "https://solyio.com/portfolio/propwise" },
      ],
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://solyio.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://solyio.com/portfolio" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioJsonLd />
      <main className="min-h-screen bg-background" role="main" aria-label="Portfolio">
        <Header />
        <PortfolioPageContent />
        <Footer />
      </main>
    </>
  )
}
