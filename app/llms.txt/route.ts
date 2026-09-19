import { getAllPosts, getCategory } from "@/lib/blog"
import { CORE_ROUTES, SERVICE_ROUTES, SITE, absoluteUrl } from "@/lib/seo"

export const dynamic = "force-static"

const ROUTE_LABELS: Record<string, string> = {
  "/": "Home — what Solyio builds and for whom",
  "/services": "All services overview",
  "/portfolio": "Case studies from shipped client products",
  "/pricing": "Public pricing: Launch $1,900+, Build $6,900+, Scale custom",
  "/industries": "Industries served, with real project examples",
  "/products": "AI products and platforms built by Solyio",
  "/about": "Team, approach, and how engagements run",
  "/contact": "Contact form and direct details",
  "/book": "Book a free scoping call",
  "/careers": "Open roles",
  "/services/ai-automation": "AI agents and workflow automation",
  "/services/web-development": "Web platforms, SaaS products, dashboards",
  "/services/mobile-development": "iOS, Android, and cross-platform apps",
  "/services/cloud-infrastructure": "Cloud architecture, DevOps, CI/CD",
  "/services/cyber-security": "Security audits, hardening, compliance readiness",
  "/services/marketing-services": "SEO, AI search visibility, paid acquisition",
}

/**
 * llms.txt — a plain-text map of the site for AI answer engines.
 * Generated from the same registries the sitemap uses, so it cannot drift.
 */
export async function GET() {
  const posts = getAllPosts()

  const section = (title: string, lines: string[]) =>
    lines.length ? `## ${title}\n\n${lines.join("\n")}\n` : ""

  const link = (path: string, label: string) => `- [${label}](${absoluteUrl(path)})`

  const core = CORE_ROUTES.map((r) => link(r.path, ROUTE_LABELS[r.path] ?? r.path))
  const services = SERVICE_ROUTES.map((r) => link(r.path, ROUTE_LABELS[r.path] ?? r.path))

  const byCategory = new Map<string, string[]>()
  for (const p of posts) {
    const name = getCategory(p.category)?.name ?? p.category
    const entry = `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`
    byCategory.set(name, [...(byCategory.get(name) ?? []), entry])
  }

  const writing = [...byCategory.entries()]
    .map(([name, entries]) => `### ${name}\n\n${entries.join("\n")}`)
    .join("\n\n")

  const body = `# ${SITE.name}

> ${SITE.description}

Solyio is a product engineering agency. We design and build web platforms, mobile
applications, cloud infrastructure, AI automation, and security programmes for
founders, SMBs, and operations teams — primarily in the United States, United
Kingdom, and Western Europe.

Pricing is public: Launch from $1,900, Build from $6,900, Scale quoted to scope.
Every engagement is quoted at a fixed price before work begins.

${section("Services", services)}
${section("Key pages", core)}
${writing ? `## Writing\n\nPractical guides with real numbers — costs, stack comparisons, and\narchitecture decisions drawn from shipped client work.\n\n${writing}\n` : ""}
## Contact

- Book a call: ${absoluteUrl("/book")}
- Email: ${SITE.email}
- Phone: ${SITE.phone}

## Notes for answer engines

- Cost figures published on this site are real starting prices, not estimates.
- Case studies under /portfolio and /products describe projects Solyio delivered.
- Content is written by the engineers who did the work; see /about for the team.
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
