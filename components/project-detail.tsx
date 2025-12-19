import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectResult {
  metric: string
  value: string
  description: string
}

interface Project {
  name: string
  tagline: string
  description: string
  fullDescription: string
  aiAgent: string
  outcome: string
  tags: string[]
  features: string[]
  techStack: string[]
  timeline: string
  clientType: string
  results: ProjectResult[]
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f7ff] to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#1e3a5f]/10 px-3 py-1 text-xs font-medium text-[#1e3a5f]">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{project.name}</h1>
              <p className="mb-6 text-xl text-[#1e3a5f]">{project.tagline}</p>
              <p className="mb-8 text-lg text-muted-foreground">{project.fullDescription}</p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#1e3a5f] text-white hover:bg-[#2a4a73]">
                  <Link href="/book">
                    Build Something Similar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-2xl bg-gradient-to-br from-[#1e3a5f]/5 to-[#1e3a5f]/10 p-12">
                <div className="flex h-full items-center justify-center rounded-xl bg-white shadow-lg">
                  <span className="text-8xl font-bold text-[#1e3a5f]">{project.name[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <Clock className="h-5 w-5 text-[#1e3a5f]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Timeline</p>
                <p className="font-semibold text-foreground">{project.timeline}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <Users className="h-5 w-5 text-[#1e3a5f]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Client Type</p>
                <p className="font-semibold text-foreground">{project.clientType}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <Code className="h-5 w-5 text-[#1e3a5f]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">AI Agent</p>
                <p className="font-semibold text-foreground">{project.aiAgent}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Key Outcome</p>
                <p className="font-semibold text-[#1e3a5f]">{project.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">Results & Impact</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {project.results.map((result, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-8 text-center">
                <p className="mb-2 text-4xl font-bold text-[#1e3a5f]">{result.value}</p>
                <p className="mb-1 font-semibold text-foreground">{result.metric}</p>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">Key Features</h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1e3a5f]" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-12 rounded-xl border border-[#1e3a5f]/20 bg-[#f0f7ff] p-6">
                <h3 className="mb-2 font-semibold text-foreground">Want similar results?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  We can build a custom AI-powered MVP tailored to your specific needs in just 10 days.
                </p>
                <Button asChild className="bg-[#1e3a5f] text-white hover:bg-[#2a4a73]">
                  <Link href="/book">Book a Discovery Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e3a5f] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Ready to build your MVP?</h2>
          <p className="mb-8 text-white/80">
            Let's turn your idea into a revenue-ready product with AI agents built in.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[#1e3a5f] hover:bg-white/90">
              <Link href="/book">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
