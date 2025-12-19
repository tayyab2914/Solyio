import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://solyio.com"),
  title: {
    default: "Solyio | AI-Powered SaaS MVP Development Agency | Launch in 10 Days",
    template: "%s | Solyio - AI MVP Development",
  },
  description:
    "Launch a revenue-ready SaaS MVP with AI agents in 10 days. Solyio is the leading AI-powered MVP development agency for startups, entrepreneurs, and non-technical founders in the US and Europe. Get custom AI agents, automated workflows, and scalable SaaS products.",
  keywords: [
    "SaaS MVP development",
    "AI MVP agency",
    "AI agents for business",
    "MVP development services",
    "SaaS development company",
    "AI-powered MVP",
    "rapid MVP development",
    "startup MVP builder",
    "AI automation agency",
    "custom AI agents",
    "MVP development USA",
    "MVP development Europe",
    "SaaS product development",
    "AI software development",
    "no-code MVP",
    "low-code MVP",
    "AI startup agency",
    "MVP in 10 days",
    "AI SaaS builder",
    "automated business solutions",
    "AI development company",
    "startup development services",
    "AI integration services",
    "SaaS automation",
    "enterprise AI solutions",
  ],
  authors: [{ name: "Solyio", url: "https://solyio.com" }],
  creator: "Solyio",
  publisher: "Solyio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://solyio.com",
    languages: {
      "en-US": "https://solyio.com",
      "en-GB": "https://solyio.com",
      "de-DE": "https://solyio.com/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "de_DE", "fr_FR"],
    url: "https://solyio.com",
    siteName: "Solyio",
    title: "Solyio | AI-Powered SaaS MVP Development Agency | Launch in 10 Days",
    description:
      "Launch a revenue-ready SaaS MVP with AI agents in 10 days. The leading AI MVP development agency for startups and entrepreneurs in the US and Europe.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solyio - AI-Powered SaaS MVP Development Agency",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 600,
        height: 600,
        alt: "Solyio Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@solyio",
    creator: "@solyio",
    title: "Solyio | AI-Powered SaaS MVP Development Agency",
    description:
      "Launch a revenue-ready SaaS MVP with AI agents in 10 days. Custom AI agents, automated workflows, and scalable SaaS products.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Business Software Development",
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    ICBM: "37.7749, -122.4194",
    "dc.language": "en",
    "dc.coverage": "World",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Solyio",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a5f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
}

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://solyio.com/#organization",
    name: "Solyio",
    url: "https://solyio.com",
    logo: {
      "@type": "ImageObject",
      url: "https://solyio.com/logo.png",
      width: 200,
      height: 60,
    },
    description: "AI-powered SaaS MVP development agency. Launch revenue-ready products with AI agents in 10 days.",
    foundingDate: "2024",
    sameAs: ["https://twitter.com/solyio", "https://linkedin.com/company/solyio", "https://github.com/solyio"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "sales",
        areaServed: ["US", "GB", "DE", "FR", "NL", "ES", "IT"],
        availableLanguage: ["English", "German", "French"],
      },
      {
        "@type": "ContactPoint",
        email: "hello@solyio.com",
        contactType: "customer service",
        areaServed: "Worldwide",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "CA",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Italy" },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://solyio.com/#website",
    url: "https://solyio.com",
    name: "Solyio",
    description: "AI-Powered SaaS MVP Development Agency",
    publisher: { "@id": "https://solyio.com/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://solyio.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://solyio.com/#service",
    serviceType: "SaaS MVP Development",
    provider: { "@id": "https://solyio.com/#organization" },
    name: "AI-Powered SaaS MVP Development",
    description:
      "Launch a revenue-ready SaaS MVP with AI agents in 10 days. Custom AI development, automated workflows, and scalable products.",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MVP Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Powered MVP Development",
            description: "Full SaaS MVP built with AI agents in 10 days",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Agent Integration",
            description: "Custom AI agents for customer support, sales, and operations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Launch & Marketing Setup",
            description: "SEO, marketing automation, and go-to-market strategy",
          },
        },
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to build a SaaS MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With Solyio, we deliver a revenue-ready SaaS MVP in just 10 days. Our AI-powered development process and pre-built components allow us to move fast without sacrificing quality.",
        },
      },
      {
        "@type": "Question",
        name: "What are AI agents and how do they help my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI agents are intelligent software programs that can automate tasks, provide customer support, generate content, analyze data, and handle operations 24/7. They reduce costs by up to 80% and work without breaks or salaries.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need technical skills to work with Solyio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No technical skills required. Solyio is built for non-technical founders, entrepreneurs, and businesses. We handle all the technical work while you focus on your vision and customers.",
        },
      },
      {
        "@type": "Question",
        name: "Which countries do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve clients globally with a focus on the United States, United Kingdom, Germany, France, Netherlands, and other European countries. Our team works across time zones to deliver your MVP.",
        },
      },
      {
        "@type": "Question",
        name: "What industries can benefit from AI-powered MVPs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almost every industry can benefit from AI automation. We've built MVPs for e-commerce, healthcare, education, real estate, professional services, food & hospitality, fintech, and many more.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://solyio.com",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <JsonLd />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="DE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
