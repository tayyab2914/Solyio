import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    slug: "robomarketer",
    name: "RoboMarketer",
    description: "AI marketing automation platform with content generation and campaign optimization agents.",
    aiAgent: "Marketing & Content Agent",
    outcome: "10x faster content creation",
    tags: ["Marketing", "AI Agents", "Automation"],
    clientType: "Marketing Agency",
  },
  {
    slug: "expertaiq",
    name: "ExpertAIQ",
    description: "AI-powered insights platform that transforms raw data into actionable business intelligence.",
    aiAgent: "Research & Analysis Agent",
    outcome: "80% reduction in manual research",
    tags: ["Analytics", "AI Insights", "Data"],
    clientType: "Research Firm",
  },
  {
    slug: "cashads",
    name: "CashAds",
    description: "Automated ad management platform with AI-driven bidding and creative optimization.",
    aiAgent: "Ad Optimization Agent",
    outcome: "35% improvement in ROAS",
    tags: ["Advertising", "Optimization", "AI"],
    clientType: "E-commerce Brand",
  },
  {
    slug: "healthtrack-ai",
    name: "HealthTrack AI",
    description: "Patient engagement platform with AI-powered health recommendations and appointment scheduling.",
    aiAgent: "Health & Wellness Agent",
    outcome: "60% reduction in no-shows",
    tags: ["Healthcare", "Patient Engagement", "AI"],
    clientType: "Healthcare Clinic",
  },
  {
    slug: "learnmate",
    name: "LearnMate",
    description: "Adaptive learning platform with AI tutors that personalize education for each student.",
    aiAgent: "Education & Tutoring Agent",
    outcome: "45% improvement in test scores",
    tags: ["Education", "EdTech", "AI Tutoring"],
    clientType: "Online Education Company",
  },
  {
    slug: "propwise",
    name: "PropWise",
    description:
      "Real estate management platform with AI agents for tenant communication and maintenance coordination.",
    aiAgent: "Property Management Agent",
    outcome: "50% faster maintenance resolution",
    tags: ["Real Estate", "Property Management", "AI"],
    clientType: "Property Management Company",
  },
]

export function PortfolioPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f7ff] to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Our Portfolio</p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              MVPs we've <span className="text-[#1e3a5f]">launched with AI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real products, real AI agents, real results. Explore how we've helped founders bring their ideas to life
              in just 10 days.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">50+</p>
              <p className="text-sm text-muted-foreground">MVPs Launched</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">10 Days</p>
              <p className="text-sm text-muted-foreground">Average Delivery</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">95%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">12+</p>
              <p className="text-sm text-muted-foreground">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-[#1e3a5f]/30 hover:shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-[#f0f7ff] to-[#e8f4ff] p-6">
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <span className="text-3xl font-bold text-[#1e3a5f]">{project.name[0]}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs font-medium text-[#1e3a5f]">{project.clientType}</div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mb-4 space-y-2 rounded-lg bg-muted/50 p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">AI Agent:</span>
                      <span className="font-medium text-foreground">{project.aiAgent}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Outcome:</span>
                      <span className="font-medium text-[#1e3a5f]">{project.outcome}</span>
                    </div>
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#1e3a5f] transition-colors hover:text-[#2a4a73]"
                  >
                    View case study
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e3a5f] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Ready to join our portfolio?</h2>
          <p className="mb-8 text-white/80">Let's discuss your MVP idea and create something amazing together.</p>
          <Button asChild size="lg" className="bg-white text-[#1e3a5f] hover:bg-white/90">
            <Link href="/book">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
