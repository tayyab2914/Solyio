import { Check, X } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Pain-free AI MVP development, <span className="text-[#1e3a5f]">done properly</span>
          </h2>
          <p className="text-lg text-muted-foreground">— without the pressure to expand your team</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Problem Card */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <X className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">The Problem</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="font-medium text-foreground">Hiring devs is slow & expensive</p>
                  <p className="text-sm text-muted-foreground">
                    Finding the right talent takes months and costs a fortune
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="font-medium text-foreground">AI is confusing & overwhelming</p>
                  <p className="text-sm text-muted-foreground">LLMs, vectors, agents — where do you even start?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <p className="font-medium text-foreground">MVPs take months to build</p>
                  <p className="text-sm text-muted-foreground">
                    Traditional development cycles are too slow for validation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="rounded-2xl border border-[#1e3a5f]/20 bg-gradient-to-br from-[#f0f7ff] to-white p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f]">
                <Check className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">The Solyio Solution</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1e3a5f]" />
                <div>
                  <p className="font-medium text-foreground">Pre-defined MVP scope</p>
                  <p className="text-sm text-muted-foreground">
                    Clear deliverables with fixed pricing — no scope creep
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1e3a5f]" />
                <div>
                  <p className="font-medium text-foreground">AI agents integrated from day one</p>
                  <p className="text-sm text-muted-foreground">
                    We handle the complexity of LLMs, vectors, and automation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1e3a5f]" />
                <div>
                  <p className="font-medium text-foreground">Delivery in 10 days</p>
                  <p className="text-sm text-muted-foreground">From idea to production-ready launch, fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
