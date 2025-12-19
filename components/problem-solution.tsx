"use client"

import { ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProblemSolution() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Pain-free AI MVP development, <span className="text-[#1e3a5f]">done properly</span>
          </h2>
        </div>

        {/* First Feature Block - Build Fast & Smart */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Build fast and <span className="text-[#1e3a5f]">validate smarter</span>
            </h3>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Stop wasting months on development cycles. With Solyio, you get a production-ready MVP with AI agents
              integrated from day one — designed to generate revenue, not just look good.
            </p>

            {/* Feature Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {["Fixed Scope", "10-Day Delivery", "AI-First Architecture", "Revenue-Ready"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#1e3a5f]/20 bg-[#f0f7ff] px-3 py-1 text-sm font-medium text-[#1e3a5f]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="mb-6 rounded-xl bg-muted/50 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f]">
                  <Quote className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Sarah Chen</p>
                  <p className="text-xs text-muted-foreground">Founder, HealthTrack AI</p>
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">
                "We went from idea to paying customers in under two weeks. Solyio delivered exactly what we needed
                without the typical startup dev headaches."
              </p>
            </div>

            <Link href="/book">
              <Button variant="link" className="h-auto p-0 text-[#1e3a5f] hover:text-[#1e3a5f]/80">
                See how it works
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                  app.solyio.com/dashboard
                </div>
              </div>
              {/* Dashboard Content */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">Project Timeline</h4>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                    On Track
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Day 1-2", task: "Discovery & Scope", status: "complete" },
                    { day: "Day 3-5", task: "Core Development", status: "complete" },
                    { day: "Day 6-8", task: "AI Integration", status: "current" },
                    { day: "Day 9-10", task: "Launch & Deploy", status: "pending" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium ${
                          item.status === "complete"
                            ? "bg-[#1e3a5f] text-white"
                            : item.status === "current"
                              ? "bg-[#e8f4ff] text-[#1e3a5f] ring-2 ring-[#1e3a5f]"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.task}</p>
                        <p className="text-xs text-muted-foreground">{item.day}</p>
                      </div>
                      {item.status === "complete" && <span className="text-xs text-green-600">Done</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -right-4 -top-4 rounded-xl bg-[#1e3a5f] px-4 py-2 text-sm font-semibold text-white shadow-lg">
              10 Days
            </div>
          </div>
        </div>

        {/* Second Feature Block - AI Agents at Scale */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Visual - Agent Workflow */}
          <div className="order-2 lg:order-1 relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                  app.solyio.com/agents
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-foreground">AI Agents Active</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Lead Qualifier", metric: "847 leads processed", trend: "+23%" },
                    { name: "Support Bot", metric: "2.4k tickets resolved", trend: "+18%" },
                    { name: "Content Writer", metric: "156 posts generated", trend: "+45%" },
                  ].map((agent, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-[#1e3a5f] flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{agent.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{agent.name}</p>
                          <p className="text-xs text-muted-foreground">{agent.metric}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-green-600">{agent.trend}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white border border-border px-4 py-3 shadow-lg">
              <p className="text-xs text-muted-foreground">Automation Rate</p>
              <p className="text-xl font-bold text-[#1e3a5f]">94%</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Operationalize AI <span className="text-[#1e3a5f]">at scale</span>
            </h3>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              We don't just build chatbots. We integrate autonomous AI agents that connect to your CRM, databases, and
              APIs — handling real business operations 24/7 while you focus on growth.
            </p>

            {/* Feature Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {["LLM Integration", "Tool Orchestration", "API Connections", "Real-time Analytics"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#1e3a5f]/20 bg-[#f0f7ff] px-3 py-1 text-sm font-medium text-[#1e3a5f]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="mb-6 rounded-xl bg-muted/50 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f]">
                  <Quote className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Marcus Johnson</p>
                  <p className="text-xs text-muted-foreground">CEO, RoboMarketer</p>
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">
                "The AI agents Solyio built handle 90% of our lead qualification. Our sales team now focuses only on hot
                leads."
              </p>
            </div>

            <Link href="/book">
              <Button variant="link" className="h-auto p-0 text-[#1e3a5f] hover:text-[#1e3a5f]/80">
                See how it works
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Third Feature Block - Reduce Risk & Prove It */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Actually reduce risk and <span className="text-[#1e3a5f]">prove it</span>
            </h3>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Go beyond idea-building. With Solyio, you validate product-market fit quickly, get real user feedback, and
              show traction to investors, customers, and your team — at any time.
            </p>

            {/* Feature Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {["Investor-Ready", "Real Analytics", "User Validation", "Fast Iteration"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#1e3a5f]/20 bg-[#f0f7ff] px-3 py-1 text-sm font-medium text-[#1e3a5f]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Process Icons */}
            <div className="mb-6 flex items-center gap-4">
              {[
                { icon: "📋", label: "Scope" },
                { icon: "→", label: "" },
                { icon: "🛠️", label: "Build" },
                { icon: "→", label: "" },
                { icon: "🚀", label: "Launch" },
                { icon: "→", label: "" },
                { icon: "📈", label: "Validate" },
              ].map((step, i) =>
                step.icon === "→" ? (
                  <ArrowRight key={i} className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <div key={i} className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f7ff] text-lg">
                      {step.icon}
                    </div>
                    <span className="mt-1 text-xs text-muted-foreground">{step.label}</span>
                  </div>
                ),
              )}
            </div>

            <Link href="/book">
              <Button variant="link" className="h-auto p-0 text-[#1e3a5f] hover:text-[#1e3a5f]/80">
                See how it works
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Right Visual - Metrics Dashboard */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                  app.solyio.com/analytics
                </div>
              </div>
              <div className="p-6">
                <h4 className="mb-4 font-semibold text-foreground">Validation Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Active Users", value: "1,247", change: "+34%" },
                    { label: "Conversion Rate", value: "12.4%", change: "+8%" },
                    { label: "Revenue", value: "$24.8k", change: "+67%" },
                    { label: "NPS Score", value: "72", change: "+15" },
                  ].map((metric, i) => (
                    <div key={i} className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                      <p className="text-lg font-bold text-foreground">{metric.value}</p>
                      <span className="text-xs font-medium text-green-600">{metric.change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              PMF Achieved
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
