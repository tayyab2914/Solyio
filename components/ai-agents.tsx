"use client"

import { useState } from "react"
import { Bot, Mail, MessageSquare, Search, TrendingUp, Users, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function AIAgents() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const agents = [
    {
      icon: Users,
      title: "Lead Qualification Agents",
      shortDesc: "Automatically score and route leads to your sales team",
      description:
        "Automatically score, qualify, and route leads based on your criteria. Connect to your CRM and never miss a hot lead. Our AI analyzes prospect behavior, company data, and engagement signals to prioritize the leads most likely to convert.",
      features: ["CRM Integration", "Lead Scoring", "Auto-routing", "Behavior Analysis"],
      metric: "3x faster lead response",
    },
    {
      icon: TrendingUp,
      title: "Marketing Automation Agents",
      shortDesc: "Generate content and optimize campaigns at scale",
      description:
        "Generate content, optimize campaigns, and personalize messaging at scale. AI that learns your brand voice and creates on-brand content for social, email, and ads — all while continuously improving based on performance data.",
      features: ["Content Generation", "A/B Testing", "Brand Voice", "Performance Optimization"],
      metric: "10x content output",
    },
    {
      icon: MessageSquare,
      title: "Customer Support Agents",
      shortDesc: "24/7 intelligent support trained on your business",
      description:
        "24/7 chatbots trained on your business data. Ticket triage, knowledge base answers, and seamless escalation. Handle thousands of conversations simultaneously while maintaining personalized, context-aware responses.",
      features: ["24/7 Availability", "Ticket Triage", "Knowledge Base", "Smart Escalation"],
      metric: "85% resolution rate",
    },
    {
      icon: Search,
      title: "Data Scraping & Research Agents",
      shortDesc: "Automated web research and market intelligence",
      description:
        "Web scraping, data normalization, and market research automation. Get actionable insights on autopilot. Monitor competitors, track industry trends, and aggregate data from hundreds of sources automatically.",
      features: ["Web Scraping", "Data Normalization", "Competitor Tracking", "Trend Analysis"],
      metric: "500+ sources monitored",
    },
    {
      icon: Mail,
      title: "Sales Follow-up Agents",
      shortDesc: "Never let a prospect go cold with smart sequences",
      description:
        "Personalized email sequences, CRM updates, and deal tracking. Never let a prospect go cold. Our AI crafts contextual follow-ups based on previous interactions and optimal timing analysis.",
      features: ["Email Sequences", "CRM Updates", "Deal Tracking", "Timing Optimization"],
      metric: "2.5x reply rates",
    },
    {
      icon: Bot,
      title: "Internal Ops Agents",
      shortDesc: "Automate repetitive workflows and processes",
      description:
        "Automate repetitive workflows, document processing, and internal communications. Free your team to focus on growth. From expense reports to onboarding — streamline operations with intelligent automation.",
      features: ["Workflow Automation", "Document Processing", "Task Management", "Process Optimization"],
      metric: "40 hrs/week saved",
    },
  ]

  return (
    <section id="ai-agents" className="bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">AI Agent Capabilities</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            AI agents that <span className="text-[#1e3a5f]">replace manual work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in autonomous AI workflows that connect LLMs + tools + APIs to replace manual processes and
            differentiate your MVP.
          </p>
        </div>

        {/* Accordion-style Agent List */}
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {agents.map((agent, index) => {
              const isExpanded = expandedIndex === index
              const IconComponent = agent.icon

              return (
                <div
                  key={agent.title}
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    isExpanded
                      ? "border-[#1e3a5f]/30 bg-card shadow-lg"
                      : "border-border bg-card hover:border-[#1e3a5f]/20",
                  )}
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                          isExpanded ? "bg-[#1e3a5f] text-white" : "bg-[#f0f7ff] text-[#1e3a5f]",
                        )}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{agent.title}</h3>
                        <p className="text-sm text-muted-foreground">{agent.shortDesc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden rounded-full bg-[#f0f7ff] px-3 py-1 text-xs font-medium text-[#1e3a5f] sm:inline-block">
                        {agent.metric}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform duration-300",
                          isExpanded && "rotate-180",
                        )}
                      />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-border px-5 pb-5 pt-4">
                        <p className="mb-4 text-muted-foreground leading-relaxed">{agent.description}</p>

                        {/* Features Grid */}
                        <div className="mb-4 flex flex-wrap gap-2">
                          {agent.features.map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full border border-[#1e3a5f]/20 bg-[#f0f7ff] px-3 py-1 text-xs font-medium text-[#1e3a5f]"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Mobile Metric */}
                        <div className="flex items-center justify-between sm:justify-start">
                          <span className="rounded-full bg-[#1e3a5f] px-3 py-1 text-xs font-medium text-white sm:hidden">
                            {agent.metric}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/book">
            <Button className="bg-[#1e3a5f] text-white hover:bg-[#1e3a5f]/90">
              Get AI agents for your MVP
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
