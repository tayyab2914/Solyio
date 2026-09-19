import type { Category } from "./types"

export const POST_CATEGORIES: Category[] = [
  {
    slug: "ai-automation",
    name: "AI & Automation",
    description:
      "Practical guides to AI agents, workflow automation, and what they actually cost to build and run.",
    icon: "smart_toy",
  },
  {
    slug: "cost-guides",
    name: "Cost Guides",
    description:
      "Transparent, itemised price breakdowns for software projects — no 'contact us for a quote'.",
    icon: "payments",
  },
  {
    slug: "comparisons",
    name: "Comparisons",
    description:
      "Head-to-head decision guides: frameworks, platforms, and build approaches compared on real trade-offs.",
    icon: "compare_arrows",
  },
  {
    slug: "engineering",
    name: "Engineering",
    description:
      "Architecture, performance, and platform decisions from shipped client products.",
    icon: "code",
  },
  {
    slug: "mobile",
    name: "Mobile",
    description: "Building, launching, and maintaining mobile apps that people keep on their phones.",
    icon: "smartphone",
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Infrastructure, deployment, and cloud spend for teams without a platform department.",
    icon: "cloud",
  },
  {
    slug: "security",
    name: "Security",
    description: "Application security, compliance readiness, and the vulnerabilities we actually find in audits.",
    icon: "security",
  },
  {
    slug: "growth",
    name: "Growth & Marketing",
    description: "SEO, AI search visibility, and demand generation for software and service businesses.",
    icon: "trending_up",
  },
  {
    slug: "founders",
    name: "For Founders",
    description: "Scoping, budgeting, and hiring decisions for the people paying for the build.",
    icon: "rocket_launch",
  },
]

export function getCategory(slug: string): Category | undefined {
  return POST_CATEGORIES.find((c) => c.slug === slug)
}
