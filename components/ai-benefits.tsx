import { Lightbulb, TrendingUp, Clock, DollarSign, Users, Zap } from "lucide-react"

export function AIBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Save 40+ Hours/Week",
      description: "AI agents handle repetitive tasks while you focus on strategy and growth.",
    },
    {
      icon: DollarSign,
      title: "Cut Operational Costs by 60%",
      description: "Replace manual processes with intelligent automation that works 24/7.",
    },
    {
      icon: TrendingUp,
      title: "Scale Without Hiring",
      description: "AI agents grow with your business — no additional headcount needed.",
    },
    {
      icon: Users,
      title: "Better Customer Experience",
      description: "Instant responses, personalized interactions, and zero wait times.",
    },
    {
      icon: Lightbulb,
      title: "Data-Driven Decisions",
      description: "AI analyzes patterns and provides insights humans might miss.",
    },
    {
      icon: Zap,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors still doing things the old way.",
    },
  ]

  return (
    <section className="bg-[#1e3a5f] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#7eb8ff]">The AI Advantage</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            What most businesses don&apos;t realize about AI
          </h2>
          <p className="text-lg text-[#a8c8e8]">
            90% of businesses are leaving money on the table by not leveraging AI. Here&apos;s what you&apos;re missing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <benefit.icon className="h-6 w-6 text-[#7eb8ff]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="text-sm text-[#a8c8e8]">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#a8c8e8]">
            <span className="font-semibold text-white">The question isn&apos;t if</span> you should use AI,{" "}
            <span className="font-semibold text-white">it&apos;s how soon</span> you can start.
          </p>
        </div>
      </div>
    </section>
  )
}
