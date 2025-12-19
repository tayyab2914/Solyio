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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
      <Footer />
    </main>
  )
}
