import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Check } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-background pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e8f4ff] px-4 py-1.5 text-sm font-medium text-[#1e3a5f]">
              <span className="h-2 w-2 rounded-full bg-[#1e3a5f]"></span>
              AI-Powered MVP Development
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Launch a revenue ready SaaS MVP in <span className="text-[#1e3a5f]">10 days</span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground">
              We design, build, and integrate AI agents that automate your business idea helping side-hustlers,
              founders & non-technical entrepreneurs who want to validate fast.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button size="lg" className="bg-[#1e3a5f] text-white hover:bg-[#2a4a73]" asChild>
                <Link href="/book">
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link href="/portfolio" className="inline-block">
                <div
                  className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#f0f7ff] bg-transparent flex"
                >
                  <Play className="mr-2 h-4 w-4" />
                  See AI use cases
                </div>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Check className="h-4 w-4 text-[#1e3a5f]" /> High-touch development
              </span>
              <span className="mx-3">|</span>
              <span className="inline-flex items-center gap-1">
                <Check className="h-4 w-4 text-[#1e3a5f]" /> Fixed scope, fast delivery
              </span>
              <span className="mx-3">|</span>
              <span className="inline-flex items-center gap-1">
                <Check className="h-4 w-4 text-[#1e3a5f]" /> Production-ready
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-border/50 bg-white p-2 shadow-2xl shadow-[#1e3a5f]/10">
              <div className="overflow-hidden rounded-xl bg-[#f8fafc]">
                <div className="flex items-center gap-2 border-b border-border/50 bg-white px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 flex-1 rounded bg-muted px-3 py-1 text-xs text-muted-foreground">
                    Your 10-Day MVP Journey
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-white text-sm font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">Discovery & Strategy</p>
                          <span className="text-xs text-muted-foreground">Day 1-2</span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div className="h-full w-full rounded-full bg-[#1e3a5f]"></div>
                        </div>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-white text-sm font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">Design & AI Architecture</p>
                          <span className="text-xs text-muted-foreground">Day 3-4</span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div className="h-full w-3/4 rounded-full bg-[#1e3a5f]"></div>
                        </div>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">Development & Integration</p>
                          <span className="text-xs text-muted-foreground">Day 5-8</span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div className="h-full w-1/2 rounded-full bg-orange-500"></div>
                        </div>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">QA & Deployment</p>
                          <span className="text-xs text-muted-foreground">Day 9</span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div className="h-full w-0 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">Launch & Handover</p>
                          <span className="text-xs text-muted-foreground">Day 10</span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div className="h-full w-0 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -right-4 -top-4 rounded-xl bg-white p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">MVP Launched</p>
                  <p className="text-xs text-muted-foreground">Day 10</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ff]">
                  <span className="text-sm">🤖</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">AI Agents Active</p>
                  <p className="text-xs text-muted-foreground">Ready to work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
