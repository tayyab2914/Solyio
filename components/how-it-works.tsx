import { Check } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      day: "Day 1-2",
      title: "Idea Validation + AI Use Case",
      description:
        "We deep-dive into your business idea and identify the perfect AI use cases that will differentiate your MVP.",
      tasks: ["Discovery call", "AI use case mapping", "Scope definition"],
    },
    {
      day: "Day 3-4",
      title: "UI/UX + Agent Flows",
      description: "Design your product interface and map out the AI agent workflows that will power your automation.",
      tasks: ["Wireframes & mockups", "Agent architecture", "User flow design"],
    },
    {
      day: "Day 5-8",
      title: "Development + AI Integration",
      description: "We build your MVP with production-ready code and integrate the AI agents into your workflows.",
      tasks: ["Core SaaS features", "AI agent development", "API integrations"],
    },
    {
      day: "Day 9",
      title: "QA + Deployment",
      description: "Thorough testing and deployment to ensure everything works perfectly before your launch.",
      tasks: ["Quality assurance", "Performance testing", "Cloud deployment"],
    },
    {
      day: "Day 10",
      title: "Launch + Handover",
      description: "Your MVP goes live! We hand over all code and documentation — you own everything.",
      tasks: ["Production launch", "Documentation", "Full code ownership"],
    },
  ]

  return (
    <section id="your-mvp-journey" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Your MVP Journey</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            See exactly how we turn your idea into a <span className="text-[#1e3a5f]">live product</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No guesswork. No endless timelines. Just a proven 10-day process that delivers results.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-[#1e3a5f] via-[#1e3a5f] to-transparent lg:left-1/2 lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.day}
                className={`relative flex flex-col gap-6 lg:flex-row lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#1e3a5f] bg-white lg:left-1/2 lg:block" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div
                    className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md ${
                      index % 2 === 1 ? "lg:ml-auto" : "lg:mr-auto"
                    } lg:max-w-md`}
                  >
                    <div className={`mb-3 flex items-center gap-3 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                      <span className="rounded-full bg-[#1e3a5f] px-3 py-1 text-xs font-semibold text-white">
                        {step.day}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{step.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                      {step.tasks.map((task) => (
                        <span
                          key={task}
                          className="inline-flex items-center gap-1 rounded-full bg-[#f0f7ff] px-2 py-1 text-xs font-medium text-[#1e3a5f]"
                        >
                          <Check className="h-3 w-3" />
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
