import { Bot, Mail, MessageSquare, Search, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AIAgents() {
  const agents = [
    {
      icon: Users,
      title: "Lead Qualification Agents",
      description:
        "Automatically score, qualify, and route leads based on your criteria. Connect to your CRM and never miss a hot lead.",
      color: "bg-[#e8f4ff]",
      iconColor: "text-[#1e3a5f]",
    },
    {
      icon: TrendingUp,
      title: "Marketing Automation Agents",
      description:
        "Generate content, optimize campaigns, and personalize messaging at scale. AI that learns your brand voice.",
      color: "bg-[#fff4e8]",
      iconColor: "text-orange-600",
    },
    {
      icon: MessageSquare,
      title: "Customer Support Agents",
      description:
        "24/7 chatbots trained on your business data. Ticket triage, knowledge base answers, and seamless escalation.",
      color: "bg-[#e8fff4]",
      iconColor: "text-green-600",
    },
    {
      icon: Search,
      title: "Data Scraping & Research Agents",
      description:
        "Web scraping, data normalization, and market research automation. Get actionable insights on autopilot.",
      color: "bg-[#f4e8ff]",
      iconColor: "text-purple-600",
    },
    {
      icon: Mail,
      title: "Sales Follow-up Agents",
      description: "Personalized email sequences, CRM updates, and deal tracking. Never let a prospect go cold.",
      color: "bg-[#ffe8e8]",
      iconColor: "text-red-600",
    },
    {
      icon: Bot,
      title: "Internal Ops Agents",
      description:
        "Automate repetitive workflows, document processing, and internal communications. Free your team to focus on growth.",
      color: "bg-[#e8f0ff]",
      iconColor: "text-blue-600",
    },
  ]

  return (
    <section id="ai-agents" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">AI Agent Capabilities</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            AI agents that <span className="text-[#1e3a5f]">replace manual work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in autonomous AI workflows that connect LLMs + tools + APIs to replace manual processes and
            differentiate your MVP.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-[#1e3a5f]/30 hover:shadow-lg"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${agent.color}`}>
                <agent.icon className={`h-6 w-6 ${agent.iconColor}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{agent.title}</h3>
              <p className="text-sm text-muted-foreground">{agent.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#f0f7ff] bg-transparent">
            See how it works
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
