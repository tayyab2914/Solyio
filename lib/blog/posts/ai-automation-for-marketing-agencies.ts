import type { Post } from "../types"

export const post: Post = {
  slug: "ai-automation-for-marketing-agencies",
  title:
    "AI Automation for Marketing Agencies: What to Automate First, What It Costs, and What Stays Human",
  seoTitle: "AI Automation for Marketing Agencies: 2026 Playbook",
  description:
    "What marketing agencies should automate with AI first, in what order, and what it costs — build versus buy, with real numbers and what stays human.",
  excerpt:
    "The four-layer automation sequence we use when we build for agencies: what to automate first, what a custom build costs against subscription tooling, and the work that never compresses.",
  category: "ai-automation",
  tags: [
    "ai automation",
    "marketing agencies",
    "agency operations",
    "workflow automation",
    "ai agents",
    "build vs buy",
  ],
  author: "solyio-ai",
  publishedAt: "2026-08-20",
  eyebrow: "Agency Playbook",
  primaryKeyword: "ai automation for marketing agencies",

  keyTakeaways: [
    "Automate client reporting first. It is the highest-frequency, lowest-judgment work in an agency, it reads from ad and analytics APIs you already have connected, and it shows a return inside one billing cycle.",
    "Automate in four layers, in this order: reporting and client comms, creative production, campaign ops, then new business. Skipping to creative or new business first is the most common way agency automation programs stall.",
    "Off-the-shelf agency automation tooling runs roughly $99–$500 per month for a 10-retainer agency at 2026 list prices. A custom build with Solyio starts at $1,900 for a single workflow and $6,900 for a multi-workflow build; a multi-tenant, white-label platform is quoted to scope.",
    "RoboMarketer, an AI marketing platform Solyio built, ships 12 pre-trained AI employees, 90-second onboarding and 10+ automated workflows, and its agency users report 72+ hours saved per week.",
    "Automation buys execution capacity, not judgment capacity. Strategy, creative direction, escalation calls and pricing conversations do not compress, so plan headcount against those rather than against total task volume.",
    "Do not commission a custom build if you run fewer than about 10 retainers or your delivery process changes every quarter. Subscription tooling wins until the process is stable and repeated across accounts.",
  ],

  blocks: [
    {
      type: "p",
      text: "Most agency automation projects fail for a sequencing reason, not a technology reason. The team buys an AI writing tool, points it at creative production — the most visible, most judgment-heavy part of delivery — gets output nobody wants to send to a client, and concludes AI does not work for agencies. The order is wrong. Reporting comes first, and it is not close.",
    },
    {
      type: "p",
      text: "This is the sequence we use when we scope automation for an agency, the cost bands on both sides of the build-versus-buy line, and the parts of delivery we tell clients not to automate.",
    },

    { type: "h2", text: "The Agency Automation Stack Has Four Layers, Not One Tool" },
    {
      type: "p",
      text: "Agency automation works when you treat it as four ordered layers — reporting and client comms, creative production, campaign ops, and new business — and build them in that order. Each layer funds the next: reporting is the cheapest to automate and the fastest to prove, which buys you the internal permission to touch the layers where mistakes are more expensive.",
    },
    {
      type: "ul",
      items: [
        "**Layer 1 — Reporting and client comms.** Scheduled performance reports, commentary drafts, meeting recaps, status updates. Clean API data sources, near-zero judgment, weekly or monthly frequency.",
        "**Layer 2 — Creative production.** Ad copy variants, asset resizing and versioning, landing page and email drafts. High volume, medium judgment, needs a human editor in the loop permanently.",
        "**Layer 3 — Campaign ops.** Budget pacing, anomaly alerts, tracking and naming QA, disapproval triage. Low volume of output but high cost of error, because this layer can touch live spend.",
        "**Layer 4 — New business.** Prospect audits, proposal assembly, onboarding and access collection. Highest return per hour saved, but it depends on your positioning being stable, which is why it goes last.",
      ],
    },
    {
      type: "p",
      text: "The layers are ordered by two things: how clean the data source is, and how expensive a mistake is. Layer 1 reads from APIs you already have connected and the worst failure is a wrong number caught in review. Layer 3 can pause a campaign or blow a daily budget. Build trust on the cheap layer before you hand anything write access to a live ad account.",
    },

    { type: "h2", text: "Where Agency Hours Actually Go" },
    {
      type: "p",
      text: "In a 10-retainer agency, the largest blocks of delivery time are reporting, creative variant production, campaign QA and status communication — not strategy. When we time delivery work during discovery, strategy and client relationship work usually accounts for well under a third of billed delivery hours. The rest is repeatable, and most of it is automatable to some degree.",
    },
    {
      type: "callout",
      variant: "info",
      title: "How to read the numbers below",
      text: "These are the planning ranges we use when scoping an agency build, taken from timing delivery teams during discovery. They are scoping estimates, not survey data, and they move a lot with channel mix — a paid social shop and a technical SEO shop have very different profiles. Use them to rank your own workflows, then measure your actual hours before you commit to a build.",
    },
    {
      type: "table",
      caption:
        "Twelve delivery workflows, ranked by how much time they take and how much of that time automation can realistically remove. Scoping ranges, not survey data.",
      headers: ["Workflow", "Hours/week at ~10 retainers", "Realistic automation share", "Layer"],
      rows: [
        ["Recurring client performance reporting", "8–14", "80–95%", "1"],
        ["Ad-hoc client status updates and inbox replies", "6–10", "30–50%", "1"],
        ["Meeting notes, recaps and action items", "3–5", "70–90%", "1"],
        ["Ad copy and creative variant production", "6–12", "50–70%", "2"],
        ["Static asset resizing and versioning", "3–6", "70–90%", "2"],
        ["Landing page and email copy drafts", "4–8", "40–60%", "2"],
        ["Budget pacing checks across accounts", "3–6", "85–95%", "3"],
        ["Cross-channel QA (tracking, UTMs, naming)", "3–5", "60–80%", "3"],
        ["Anomaly triage (CPA spikes, disapprovals)", "2–5", "60–80%", "3"],
        ["Keyword and audience research refresh", "3–6", "40–60%", "3"],
        ["Prospect audits and pitch decks", "4–8", "50–70%", "4"],
        ["New-client onboarding and access collection", "3–6", "60–80%", "4"],
      ],
    },
    {
      type: "p",
      text: "Add the midpoints and a 10-retainer agency is carrying somewhere around 60 to 70 hours a week of repeatable delivery work. That is the pool automation is competing for — roughly one and a half full-time people, which is also the honest benchmark for whether a build pays for itself.",
    },

    { type: "h2", text: "Layer 1 — Reporting and Client Comms: Automate This First" },
    {
      type: "p",
      text: "Automate reporting first because it has the best ratio of hours removed to risk taken in the entire agency. The data lives in APIs you are already authenticated against — Google Ads, Meta, GA4, Search Console, a CRM — the output cadence is predictable, and the failure mode is a wrong number that a human catches before send, not a live budget mistake.",
    },
    {
      type: "p",
      text: "A working Layer 1 build does four things. It pulls the period's metrics on a schedule. It computes the deltas and flags what actually changed. It drafts commentary in your agency's voice against those deltas. And it delivers the result into whatever channel the client already reads — a PDF, a dashboard link, a Slack message — with a named human approving before anything leaves.",
    },
    {
      type: "p",
      text: "The commentary step is where the real hours are. Pulling numbers has been solved by dashboards for a decade; what still eats a Monday is writing the paragraph that explains why cost per acquisition moved 14% and what you are doing about it. A model with the account's history, the client's goals and last month's commentary in context drafts that in seconds. Your account manager then spends ten minutes editing rather than ninety minutes writing.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "The cheapest possible starting point",
      text: "If you are not ready to commission anything, connect a reporting SaaS to your accounts, put your commentary template into a prompt, and have one person run it manually for a month. You will learn exactly which parts of the report your clients read — and that is the spec for the build. We have talked agencies out of a project at this stage more than once.",
    },

    { type: "h2", text: "Layer 2 — Creative Production: Where AI Ad Generation Pays Off (and Where It Produces Slop)" },
    {
      type: "p",
      text: "AI creative production pays off on volume and variation, and produces slop on concept. Generating forty headline variants against a brief a human wrote is a genuine time saver. Asking a model to invent the campaign idea, the positioning or the hook from a one-line prompt reliably produces output that is fluent, generic and unsendable.",
    },
    { type: "h3", text: "Where it earns its keep" },
    {
      type: "ul",
      items: [
        "**Variant expansion.** One approved concept into the 15–40 headline, description and primary-text combinations the platforms want for testing.",
        "**Format and size adaptation.** Taking a signed-off master asset into every placement ratio and channel spec without a designer touching each one.",
        "**Localization and account adaptation.** The same offer restated for a different region, vertical or audience segment, with a human checking claims.",
        "**First drafts against a real brief.** Landing page and email copy that starts at 70% rather than a blank document.",
      ],
    },
    { type: "h3", text: "Where it fails" },
    {
      type: "p",
      text: "Concept, tone calibration for a specific client, and anything with a factual or regulated claim. The failure is subtle: the output is grammatical and on-topic, so it passes a skim, and you only find out it was wrong when a client asks where a statistic came from. Every creative automation we build ships with a human approval gate and an audit trail of which model produced which asset. That is not compliance theater — it is what makes the layer usable at all.",
    },
    {
      type: "p",
      text: "We built the production version of this pattern into [CashAds](/portfolio/cashads), a two-sided ad creative marketplace with a LangChain and RAG-powered generation engine. The architecture that makes it work is the retrieval layer: the model generates against grounded brand and product context rather than from a bare prompt, which is the difference between a usable variant and slop.",
    },

    { type: "h2", text: "Layer 3 — Campaign Ops: Budget Pacing, Anomaly Alerts, and Cross-Channel QA" },
    {
      type: "p",
      text: "Campaign ops automation should start read-only and stay read-only far longer than you expect. The highest-value automations in this layer do not change anything — they watch every account continuously and tell a human when something needs attention, which is work no agency does well manually across twenty accounts.",
    },
    {
      type: "ol",
      items: [
        "**Budget pacing.** Compare spend-to-date against the monthly commitment for every account, every morning, and flag anything projected to over- or under-deliver by more than a set threshold. This is the single most common cause of an awkward end-of-month client call, and it is almost fully automatable.",
        "**Anomaly detection.** Watch cost per acquisition, conversion rate, impression share and disapproval status against each account's own trailing baseline. Absolute thresholds generate noise; baselines that adapt per account generate signal.",
        "**Structural QA.** Check naming conventions, UTM parameters, conversion tracking status and audience overlap on a schedule. This catches the tracking break that silently ruins a month of data.",
        "**Change logging.** Record every change made in every account, by whom, with a reason. Unglamorous, and it is what saves you in a dispute.",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Be deliberate about write access",
      text: "An agent that can pause campaigns or change budgets is a different risk class from one that sends a Slack alert. If you do grant write access, scope it narrowly (one action type, one budget ceiling), require a human confirmation for anything above a threshold, log every action, and make sure rollback is a single command. We have shipped write-enabled agents; we have never shipped one without those four controls.",
    },

    { type: "h2", text: "Layer 4 — New Business: Audit, Proposal, and Onboarding Automation" },
    {
      type: "p",
      text: "New-business automation has the highest value per hour saved and goes last, because it only works once your positioning is stable. An automated audit that produces a generic finding costs you the pitch; the same audit produced against a sharp point of view wins it. Automate this before you know exactly what you sell and you will industrialize a weak pitch.",
    },
    {
      type: "ul",
      items: [
        "**Prospect audit generation.** Pull a prospect's public ad library, site performance, tracking setup and organic footprint into a structured findings document before the first call. This converts a four-hour manual audit into a thirty-minute review.",
        "**Proposal assembly.** Compose scope, pricing and case-study selection from a library of approved components rather than editing last quarter's deck. Faster, and it stops old client names surviving into a new proposal.",
        "**Onboarding and access collection.** Chase account access, brand assets, tracking permissions and billing details automatically. This is where new engagements lose their first two weeks.",
        "**Discovery synthesis.** Turn call recordings into a structured brief, an account plan and a first-90-days checklist that the delivery team actually receives.",
      ],
    },

    { type: "h2", text: "What Stays Human: Strategy, Creative Direction, and the Client Relationship" },
    {
      type: "p",
      text: "Four things do not compress, and you should stop trying: strategy, creative direction, the escalation conversation, and pricing. These are exactly the activities clients are paying a premium for, and they are the activities where being wrong is expensive and hard to detect from the output alone.",
    },
    {
      type: "ul",
      items: [
        "**Strategy and channel allocation.** Deciding what to do with a budget requires context that is never fully in the data — a product launch date, a board's risk tolerance, a competitor's funding round.",
        "**Creative direction.** A model can produce forty variants of an idea. Choosing which idea deserves forty variants is the job.",
        "**Escalations and bad news.** When a quarter misses, the client is buying a person who will explain it and own the plan. Automating this reads as contempt.",
        "**Pricing and scope negotiation.** Judgment about what an engagement is worth, and what you are willing to walk away from.",
      ],
    },
    {
      type: "p",
      text: "This is why agency headcount planning has to change shape rather than shrink. Automation gives each account manager more execution capacity, so the constraint moves to how many client relationships one person can genuinely hold. In our experience that ceiling is a people number, somewhere in the range of 8 to 12 active relationships per account manager, and no amount of automation moves it.",
    },

    { type: "h2", text: "Off-the-Shelf Tools vs a Custom Build: The Decision Table" },
    {
      type: "p",
      text: "Buy off the shelf when your delivery process is standard, and build custom when your delivery process is the thing clients are paying for. That is the whole decision. Everything else — price, time to value, integrations — is a consequence of it. If your reporting looks like everyone else's reporting, a subscription is the right answer and a build is a waste of money.",
    },
    {
      type: "table",
      caption: "Where each approach genuinely wins. Indicative figures for a 10-retainer agency as of 2026.",
      headers: ["Decision factor", "Off-the-shelf tooling", "Custom build"],
      rows: [
        ["Time to first value", "Days", "4–8 weeks for the first live workflow"],
        ["Upfront cost", "$0–$2,000 in setup and migration", "From $1,900 (single workflow) or $6,900 (multi-workflow)"],
        ["Monthly run cost", "Roughly $99–$500 in subscriptions", "Roughly $40–$400 in infrastructure and model usage"],
        ["Standard delivery process", "Strong fit — this is the point", "Overkill; you are paying to rebuild a product that exists"],
        ["Process that is your differentiator", "Poor fit — you reshape the agency around the tool", "Strong fit — the software encodes your method"],
        ["White-label resale to clients", "Rare, and usually a paid tier", "Built in if you scope multi-tenancy from day one"],
        ["Data residency and MSA subprocessors", "Vendor's tenant, vendor's terms", "Your tenant, your terms, your DPA"],
        ["Who fixes it when it breaks", "A vendor support queue", "You, or the partner who built it"],
        ["Ceiling", "The vendor's roadmap", "Your engineering budget"],
      ],
    },
    {
      type: "p",
      text: "The pattern we see most often in practice is a hybrid, and it is usually correct: subscription tooling for the commodity layer (dashboards, scheduling, the connectors) plus a custom layer for the two or three workflows that encode how your agency specifically works. Paying for a platform to replace something you can rent for $99 a month is the most common way agencies waste a build budget.",
    },

    { type: "h2", text: "What This Actually Costs" },
    {
      type: "p",
      text: "A 10-retainer agency running entirely on off-the-shelf tooling should expect roughly $99 to $500 per month all in. A custom build starts at $1,900 for a single workflow with one integration and $6,900 for a multi-workflow build, with a multi-tenant, client-facing platform quoted to scope. Model usage and infrastructure on top of a custom build typically land between $40 and $400 a month for an agency of this size.",
    },
    {
      type: "table",
      caption:
        "Indicative costs as of 2026, at list prices, in USD. Third-party vendor pricing changes frequently and often bills by usage — verify current rates before you budget against them.",
      headers: ["Option", "Typical upfront", "Typical monthly", "Best for"],
      rows: [
        [
          "Agency reporting SaaS",
          "$0",
          "Roughly $20–$25 per client/month, or about $79–$439 on tiered plans",
          "Under ~15 retainers on standard channels",
        ],
        [
          "No-code automation (Zapier, Make, n8n cloud)",
          "$0",
          "Roughly $9–$104 on entry tiers; scales with task or execution volume",
          "Glue between SaaS you already pay for",
        ],
        [
          "Self-hosted n8n on your own cloud",
          "$500–$3,000 to set up properly",
          "Roughly $20–$80 in compute",
          "Teams with someone who can run and patch a container",
        ],
        [
          "Model inference (OpenAI, Anthropic and similar)",
          "$0",
          "Roughly $0.20–$5 per million input tokens and $1.20–$30 per million output, depending on tier",
          "Any custom layer; batch and cached pricing cuts this substantially",
        ],
        [
          "[Solyio Launch](/pricing)",
          "From $1,900",
          "Infrastructure only",
          "One workflow, one integration, proving the value",
        ],
        [
          "[Solyio Build](/pricing)",
          "From $6,900",
          "Infrastructure plus model usage",
          "Two to four workflows with an internal dashboard",
        ],
        [
          "[Solyio Scale](/pricing)",
          "Quoted to scope",
          "Infrastructure plus model usage",
          "Multi-tenant, white-label, client-facing platform",
        ],
      ],
    },
    {
      type: "p",
      text: "Two notes on the vendor rows. First, every one of those providers bills partly on usage, so the entry price is the floor and not the bill — a Zapier or Make plan that looks like $9 a month at the tier can multiply once a reporting workflow runs across twenty accounts daily. Second, model inference is almost never the expensive part of a custom build; engineering time is. Agencies routinely over-index on token cost and under-budget the integration work, which is where the weeks actually go.",
    },
    {
      type: "p",
      text: "Our own pricing is published in full on the [pricing page](/pricing), and the scoping conversation that determines which band you land in is free.",
    },

    { type: "h2", text: "Two Builds We Shipped, and What They Prove" },
    {
      type: "p",
      text: "Two of our own products demonstrate opposite ends of this stack: RoboMarketer is the full four-layer agency platform, and CashAds is a deep build on the creative production layer alone. The figures below are the published outcomes from those builds.",
    },
    {
      type: "stats",
      items: [
        { value: "12", label: "AI Employees", note: "RoboMarketer, each covering a distinct marketing function" },
        { value: "72+", label: "Hours Saved Weekly", note: "Reported by RoboMarketer's agency users" },
        { value: "90 sec", label: "Onboarding", note: "Context ingestion before all agents are live" },
        { value: "10+", label: "Automated Workflows", note: "Running end to end across channels" },
      ],
    },
    { type: "h3", text: "RoboMarketer — the full stack, built once" },
    {
      type: "p",
      text: "[RoboMarketer](/portfolio/robomarketer) is an AI marketing automation platform built around a marketplace of 12 pre-trained AI employees, each handling a distinct function — paid ads, SEO, social, email, content, competitor analysis — deployable from a single dashboard. Agencies feed in company data, KPIs, funnels and competitor context once, in about 90 seconds, and every agent produces brand-accurate output from that shared context. Its published outcomes are 72+ hours saved per week and over $500K in monthly marketing output under management.",
    },
    {
      type: "p",
      text: "The architectural decision that matters there is the shared context layer. Twelve agents each maintaining their own understanding of a client would be twelve places for brand drift to start. One ingestion step feeding all of them is why the onboarding is 90 seconds rather than 90 minutes per agent, and it is the pattern we reuse on nearly every multi-agent build.",
    },
    { type: "h3", text: "CashAds — one layer, taken all the way" },
    {
      type: "p",
      text: "[CashAds](/portfolio/cashads) goes deep on Layer 2 instead of broad across all four: a LangChain and RAG-powered AdMaker that generates professional ad creative in seconds, wrapped in a two-sided marketplace with Stripe-powered instant payouts. Published outcomes include 80+ active creators, 158 business buyers and $500K in annual marketplace revenue.",
    },
    {
      type: "p",
      text: "The lesson for an agency owner is the second half of that build. The generation engine was the interesting engineering; the marketplace, payouts and buyer trust layer were what made it a business. If you are planning to resell automation to your clients rather than just use it internally, budget for the commercial layer — tenancy, billing, permissions — from the start. Retrofitting multi-tenancy onto a single-tenant internal tool is usually more expensive than building it in on day one.",
    },

    { type: "h2", text: "Rollout: Weeks 1–8 of an Agency Automation Program" },
    {
      type: "p",
      text: "A first agency automation workflow should be live in production in four to eight weeks, not six months. The schedule below is roughly how our [AI automation engagements](/services/ai-automation) run, and the non-negotiable part is that something real ships to a real client account before week five.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Week 1 — Measure before you build",
          text: "Time the actual delivery work for two weeks across a representative set of accounts. Rank workflows by hours consumed multiplied by automation share. If the top workflow is not worth at least 5 hours a week, stop here and buy a subscription instead.",
        },
        {
          title: "Weeks 2–3 — Wire the data layer",
          text: "Get scoped, read-only API access to the ad platforms, analytics, CRM and project tool. This is where projects actually slip: access approvals, OAuth scopes and client permission chains take longer than the code. Start it on day one.",
        },
        {
          title: "Weeks 3–5 — Ship one workflow end to end",
          text: "One workflow, one client cohort, human approval before anything leaves the building. Reporting is almost always the right first workflow. Resist the urge to build three at once — the integration surface is what breaks, and one at a time is how you find out which integration is lying to you.",
        },
        {
          title: "Weeks 5–6 — Run it in parallel with the manual process",
          text: "Produce both outputs and compare them for two full cycles. This is the step teams skip and the step that catches the silent data problems — a timezone mismatch, a currency conversion, a conversion action counted twice.",
        },
        {
          title: "Weeks 6–8 — Roll out and instrument",
          text: "Extend to the full client roster, add failure alerting to a channel a human reads, and start logging the metrics in the next section. Then pick the second workflow, and only then.",
        },
      ],
    },

    { type: "h2", text: "Measuring ROI: Hours, Accounts Per Head, and Margin Per Retainer" },
    {
      type: "p",
      text: "Measure three things: hours recovered per account manager per week, retainers carried per delivery head, and gross margin per retainer. Hours recovered is the leading indicator, accounts per head is the capacity result, and margin per retainer is the only one that shows up in your P&L. Track all three or you will not be able to tell whether automation created capacity or just moved work around.",
    },
    {
      type: "table",
      caption:
        "The metrics we hold an agency automation program to. Targets, not benchmarks — measure your own baseline before you build so the comparison means something.",
      headers: ["Metric", "How to measure it", "What a working program looks like"],
      rows: [
        [
          "Hours recovered per account manager/week",
          "Task time sampled for two weeks before, then at week eight",
          "8–20 hours",
        ],
        [
          "Retainers per delivery head",
          "Active accounts divided by delivery headcount",
          "Up meaningfully within two quarters, capped by relationship load",
        ],
        [
          "Gross margin per retainer",
          "(Retainer fee minus delivery cost) divided by retainer fee",
          "Up by several points once the first two layers are live",
        ],
        ["Report cycle time", "Period close to client delivery", "Days down to hours"],
        [
          "Automation reliability",
          "Successful runs divided by total runs",
          "Above 97%, with every failure alerting a named human",
        ],
        [
          "Human rework rate",
          "Outputs needing material rewrite divided by outputs shipped",
          "Falling month over month; under 20% by month three",
        ],
      ],
    },
    {
      type: "p",
      text: "The rework rate is the one to watch most closely. A workflow that saves ninety minutes of writing but adds sixty minutes of editing and fact-checking has saved thirty minutes, not ninety — and if nobody is measuring, the team will report the ninety. If rework is not falling by month three, the problem is almost always missing context in the prompt or the retrieval layer, not the model.",
    },

    { type: "h2", text: "Five Failure Modes: Why AI Employees Stall After Month Two" },
    {
      type: "p",
      text: "Agency automation programs stall for five predictable reasons, and four of them are organizational rather than technical. Month one is enthusiasm, month two is when the first workflow meets the messy reality of twenty different client accounts, and month three is where programs either become infrastructure or quietly get abandoned.",
    },
    {
      type: "ol",
      items: [
        "**No owner.** The build is somebody's side project on top of a full delivery load. Automation needs a named owner with real hours allocated, or it decays the first time an API changes.",
        "**Automating the exception instead of the rule.** Teams build for the one complicated account instead of the eight standard ones, then find the system is too specific to use anywhere. Automate the common case and leave the exception manual — permanently, if necessary.",
        "**No failure alerting.** A workflow that silently stops running is worse than no workflow, because the team has already stopped doing it manually. Every automation needs a heartbeat and an alert into a channel someone actually reads.",
        "**Skipping the parallel-run period.** Cutting over without comparing output to the manual process for two cycles is how a data error reaches a client. The cost of that is not the error, it is the credibility.",
        "**Confusing capacity with judgment.** The most expensive version: an agency takes on 40% more accounts on the strength of recovered execution hours, then discovers strategy and relationship work did not scale with it, and quality drops across the whole book.",
      ],
    },

    { type: "h2", text: "Build In-House, Hire a Partner, or Buy a Platform? A Three-Question Filter" },
    {
      type: "p",
      text: "Three questions settle it. Is your delivery process standard or is it your differentiator? Do you have an engineer who will still be here in eighteen months? And is this internal efficiency or a product you intend to sell? Standard process plus no engineer plus internal use means buy a platform. Differentiated process plus a product ambition means build, with or without a partner depending on the second question.",
    },
    {
      type: "ol",
      items: [
        "**Is the process standard, or is it the product?** If your reporting and QA look like everybody else's, a subscription is correct and a build is money you will not get back. If your method is what clients are buying, software that encodes it is a durable advantage.",
        "**Who maintains it in eighteen months?** In-house builds fail when the one person who understood the system leaves. If you have no permanent engineering capacity, either buy, or engage a partner on terms that include maintenance and a documented handover.",
        "**Internal tool or revenue line?** An internal tool can be single-tenant and scrappy. Anything you plan to white-label and resell needs tenancy, billing and permissions designed in from the first commit — that decision is expensive to reverse.",
      ],
    },
    {
      type: "callout",
      variant: "key",
      title: "When we are the wrong choice",
      text: "If you run under about ten retainers, or your delivery process is still changing every quarter, do not commission a custom build — including from us. Subscription tooling plus a disciplined prompt library will get you 80% of the benefit for under $500 a month, and you will not have frozen a process you are still figuring out. Come back when the process is stable and repeated across accounts, because that is the point at which encoding it in software actually compounds.",
    },
    {
      type: "p",
      text: "If you are past that line, the useful next step is a scoping conversation about which single workflow to build first — not a platform pitch. Most agencies we speak to end up starting with one reporting workflow at the [Launch price](/pricing), proving the hours, and deciding about the rest of the stack from evidence. If marketing execution itself is the gap rather than the tooling, our [marketing services](/services/marketing-services) team is the better first call.",
    },
    {
      type: "cta",
      title: "Find out which workflow to automate first",
      text: "Bring your delivery hours and your client roster. We will rank your workflows by hours recovered per dollar spent, tell you which ones a subscription already solves, and scope only what is left. No obligation, and we will say so if a build is not worth it.",
      buttonLabel: "Book a scoping call",
      href: "/book",
    },
  ],

  faqs: [
    {
      q: "What should a marketing agency automate with AI first?",
      a: "Client reporting and recurring client communication, every time. It is the highest-frequency, lowest-judgment work in an agency, it has a clean data source in the ad and analytics platforms you are already authenticated against, and the failure mode is a wrong number caught in review rather than a live budget mistake. It also delivers visible return inside the first billing cycle, which is what buys you internal permission to automate the riskier layers. Creative production and campaign ops come second and third; new-business automation goes last, because it only works once your positioning is stable.",
    },
    {
      q: "How much does it cost to build custom AI automation for a marketing agency?",
      a: "With Solyio, a single workflow with one integration starts at $1,900 and a multi-workflow build starts at $6,900; a multi-tenant, client-facing platform is quoted to scope. Running costs on top of a custom build typically land between $40 and $400 a month for a 10-retainer agency, covering infrastructure and model usage. Off-the-shelf tooling is cheaper up front at roughly $99 to $500 a month at 2026 list prices, but it caps out when your delivery process is your differentiator, because you end up shaping the agency around the tool instead of the reverse. Budget engineering and integration time as the dominant cost — model inference is rarely the expensive part.",
    },
    {
      q: "Will AI automation let me take on more clients without hiring?",
      a: "Yes, but only for execution capacity, not judgment capacity. Agencies that automate reporting, QA and creative variant production recover meaningful hours per account manager per week — we plan builds against a target of 8 to 20 — and that translates into more accounts per delivery head. What does not compress is strategy, creative direction, escalations and pricing conversations, and there is a practical ceiling on how many client relationships one person can genuinely hold regardless of tooling. Plan headcount against relationship load rather than task volume, or you will take on 40% more accounts and drop quality across the whole book.",
    },
    {
      q: "Is it safe to put client ad accounts and performance data into an AI system?",
      a: "It is, provided you use API-scoped read access rather than shared credentials, keep client data in your own tenant instead of a vendor's shared workspace, and disable model training on any provider you send data to. Start read-only and stay read-only longer than feels necessary: an agent that can pause campaigns or change budgets is a different risk class from one that posts a Slack alert, and anything with write access needs a scoped action list, a spend ceiling, full action logging and one-command rollback. Contractually, check your client MSAs for subprocessor clauses before adding any new AI vendor to the stack — many agency MSAs require notice or consent.",
    },
    {
      q: "Can we white-label an automation platform and resell it to our clients?",
      a: "Yes, and it is one of the better margin plays available to an agency. A multi-tenant build with per-client workspaces, your branding and its own billing layer turns an internal efficiency tool into a recurring revenue line. The critical decision is timing: budget for tenancy, permissions and billing architecture up front, because retrofitting multi-tenancy onto a single-tenant internal tool is usually more expensive than building it in from day one. Treat the commercial layer — billing, buyer trust, support — as real scope rather than an afterthought; on the marketplace builds we have shipped, that layer was what turned working technology into a business.",
    },
    {
      q: "Off-the-shelf agency automation tools or a custom build — how do I decide?",
      a: "Buy off the shelf when your delivery process is standard, and build custom when your delivery process is the thing clients are paying for. Everything else follows from that. In practice the right answer for most agencies is a hybrid: subscription tooling for the commodity layer such as dashboards, scheduling and connectors, plus a custom layer for the two or three workflows that encode how your agency specifically works. Paying to rebuild something you can rent for $99 a month is the most common way agencies waste a build budget.",
    },
  ],
}
