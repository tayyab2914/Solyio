import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioPageContent } from "@/components/portfolio-page-content"

export const metadata = {
  title: "Portfolio - Solyio",
  description: "Explore MVPs we've launched with AI agents. Real products, real results.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PortfolioPageContent />
      <Footer />
    </main>
  )
}
