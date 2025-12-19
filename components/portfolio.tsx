import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const projects = [
    {
      slug: "robomarketer",
      name: "RoboMarketer",
      description: "AI marketing automation platform with content generation and campaign optimization agents.",
      aiAgent: "Marketing & Content Agent",
      outcome: "10x faster content creation",
      tags: ["Marketing", "AI Agents", "Automation"],
    },
    {
      slug: "expertaiq",
      name: "ExpertAIQ",
      description: "AI-powered insights platform that transforms raw data into actionable business intelligence.",
      aiAgent: "Research & Analysis Agent",
      outcome: "80% reduction in manual research",
      tags: ["Analytics", "AI Insights", "Data"],
    },
    {
      slug: "cashads",
      name: "CashAds",
      description: "Automated ad management platform with AI-driven bidding and creative optimization.",
      aiAgent: "Ad Optimization Agent",
      outcome: "35% improvement in ROAS",
      tags: ["Advertising", "Optimization", "AI"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Featured Resources</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            MVPs we&apos;ve launched with AI
          </h2>
          <p className="text-lg text-muted-foreground">Real products, real AI agents, real results.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-[#1e3a5f]/30 hover:shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-[#f0f7ff] to-[#e8f4ff] p-6">
                <div className="flex h-full items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <span className="text-2xl font-bold text-[#1e3a5f]">{project.name[0]}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
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
                <h3 className="mb-2 text-lg font-semibold text-foreground">{project.name}</h3>
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

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#f0f7ff] bg-transparent"
            asChild
          >
            <Link href="/portfolio">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
