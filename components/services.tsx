import { Cpu, Rocket, Zap, Search, TrendingUp, Settings } from "lucide-react"
import { ArrowRight } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Rocket,
      title: "AI-Powered SaaS MVP",
      description: "Full MVP with AI agent architecture, core SaaS features, auth, dashboard, and billing-ready setup.",
      features: ["AI agent integration", "Dashboard & auth", "Billing-ready", "Deployment included"],
      link: "Learn more",
    },
    {
      icon: Cpu,
      title: "AI Agent Integration",
      description:
        "Add AI agents to your existing apps. Automate workflows with custom agent logic and seamless integration.",
      features: ["Custom agent logic", "API integrations", "Workflow automation", "Human-in-the-loop"],
      link: "Learn more",
    },
    {
      icon: Search,
      title: "SEO & Content Setup",
      description:
        "Launch with SEO best practices baked in. AI-powered content generation and optimization from day one.",
      features: ["Technical SEO setup", "AI content generation", "Keyword optimization", "Schema markup"],
      link: "Learn more",
    },
    {
      icon: TrendingUp,
      title: "Marketing Automation",
      description: "AI-powered marketing agents for email campaigns, social media, and lead nurturing sequences.",
      features: ["Email automation", "Social scheduling", "Lead nurturing", "Campaign analytics"],
      link: "Learn more",
    },
    {
      icon: Settings,
      title: "Launch & Setup Package",
      description:
        "Everything you need to go live: hosting, domain setup, analytics, monitoring, and support handover.",
      features: ["Cloud deployment", "Domain & SSL", "Analytics setup", "Monitoring & alerts"],
      link: "Learn more",
    },
    {
      icon: Zap,
      title: "Growth Stack",
      description: "Post-launch growth tools: A/B testing, conversion optimization, and performance tracking.",
      features: ["A/B testing setup", "Conversion tracking", "Performance monitoring", "Growth analytics"],
      link: "Learn more",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Services</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to launch <span className="text-[#1e3a5f]">properly</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end services from idea to launch and beyond — all with AI at the core.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-[#1e3a5f]/30 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0f7ff]">
                <service.icon className="h-7 w-7 text-[#1e3a5f]" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mb-6 flex-1 text-muted-foreground">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1e3a5f]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="inline-flex items-center text-sm font-semibold text-[#1e3a5f] transition-colors hover:text-[#2a4a73]"
              >
                {service.link}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
