import type { Post } from "../types"

import { post as aiAgentCost } from "./ai-agent-cost-build-and-monthly-run"
import { post as aiAgentSecurityQuestions } from "./ai-agent-security-questions-before-granting-access"
import { post as aiAutomationMarketingAgencies } from "./ai-automation-for-marketing-agencies"
import { post as euAiActGdpr } from "./eu-ai-act-gdpr-compliance-ai-agents"
import { post as fixedPriceVsTm } from "./fixed-price-vs-time-and-materials-vs-retainer"
import { post as herokuToAws } from "./heroku-to-aws-migration-cost-timeline"
import { post as agencyVsAiCodingTool } from "./hire-agency-vs-ai-coding-tool-lovable-cursor"
import { post as internalToolCost } from "./internal-tool-development-cost-2026"
import { post as mvpScopeDocument } from "./mvp-scope-document-for-development-agency"
import { post as n8nVsZapierVsMake } from "./n8n-vs-zapier-vs-make-vs-custom-ai-agent"
import { post as pricingIntelligenceB2b } from "./pricing-intelligence-software-for-b2b-distributors"
import { post as agencyRedFlags } from "./red-flags-hiring-development-agency-2026"
import { post as takeOverProject } from "./take-over-software-project-from-another-agency"
import { post as moveOffServerless } from "./when-to-move-off-serverless"

/**
 * Post registry. One file per post in this directory; add the import and the
 * array entry here. Order does not matter — queries sort by `publishedAt`.
 */
export const POSTS: Post[] = [
  aiAgentCost,
  aiAgentSecurityQuestions,
  aiAutomationMarketingAgencies,
  euAiActGdpr,
  fixedPriceVsTm,
  herokuToAws,
  agencyVsAiCodingTool,
  internalToolCost,
  mvpScopeDocument,
  n8nVsZapierVsMake,
  pricingIntelligenceB2b,
  agencyRedFlags,
  takeOverProject,
  moveOffServerless,
]
