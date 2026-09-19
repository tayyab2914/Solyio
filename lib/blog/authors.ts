import type { Author } from "./types"
import { SITE } from "@/lib/seo"

/**
 * Named authors matter for E-E-A-T: Google and AI search engines both weight
 * attributed, expert-authored content far above anonymous agency copy.
 */
export const AUTHORS: Record<string, Author> = {
  solyio: {
    id: "solyio",
    name: "Solyio Engineering",
    role: "Product & Platform Team",
    bio: "The engineers and architects who build Solyio's client platforms — web, mobile, cloud, and AI automation. Everything here comes out of shipped client work.",
    url: `${SITE.url}/about`,
    sameAs: ["https://linkedin.com/company/solyio", "https://github.com/solyio"],
  },
  "solyio-ai": {
    id: "solyio-ai",
    name: "Solyio AI Practice",
    role: "AI & Automation Team",
    bio: "Solyio's AI practice designs and ships production AI agents and workflow automation for operations, sales, and support teams.",
    url: `${SITE.url}/services/ai-automation`,
    sameAs: ["https://linkedin.com/company/solyio"],
  },
  "solyio-security": {
    id: "solyio-security",
    name: "Solyio Security Practice",
    role: "Security & Compliance Team",
    bio: "Solyio's security team runs application audits, hardening engagements, and compliance readiness work for startups and SMBs.",
    url: `${SITE.url}/services/cyber-security`,
    sameAs: ["https://linkedin.com/company/solyio"],
  },
}

export function getAuthor(id: string): Author {
  return AUTHORS[id] ?? AUTHORS.solyio
}
