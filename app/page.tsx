import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoStrip } from "@/components/logo-strip"
import { ProblemSolution } from "@/components/problem-solution"
import { AIAgents } from "@/components/ai-agents"
import { HowItWorks } from "@/components/how-it-works"
import { Stats } from "@/components/stats"
import { CTABanner } from "@/components/cta-banner"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Portfolio } from "@/components/portfolio"
import { Footer } from "@/components/footer"
import { AIBenefits } from "@/components/ai-benefits"
import { Niches } from "@/components/niches"
import { FAQSection } from "@/components/faq-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solyio | AI-Powered SaaS MVP Development Agency | Launch in 10 Days",
  description:
    "Launch a revenue-ready SaaS MVP with AI agents in 10 days. Solyio is the #1 AI MVP development agency for startups and entrepreneurs in the US and Europe. Custom AI agents, automated workflows, and scalable SaaS products.",
  alternates: {
    canonical: "https://solyio.com",
  },
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background" role="main" aria-label="Solyio Homepage">
        <Header />
        <Hero />
        <LogoStrip />
        <ProblemSolution />
        <AIBenefits />
        <AIAgents />
        <Niches />
        <HowItWorks />
        <Stats />
        <CTABanner />
        <Services />
        <Testimonials />
        <Portfolio />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}
