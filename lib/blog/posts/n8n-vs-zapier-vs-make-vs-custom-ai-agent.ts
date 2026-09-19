import type { Post } from "../types"

export const post: Post = {
  slug: "n8n-vs-zapier-vs-make-vs-custom-ai-agent",
  title: "n8n vs Zapier vs Make vs a Custom Build: Which Should Run Your AI Agents in 2026?",
  seoTitle: "n8n vs Zapier vs Make vs Custom AI Agent Build",
  description:
    "How n8n, Zapier and Make bill AI agent workflows in 2026, the volume where each gets expensive, where no-code breaks, and when a custom build is worth it.",
  excerpt:
    "One AI agent run can be one billable unit or fifteen, depending on the platform. Here is how the billing models, failure modes and break-even points actually compare.",
  category: "comparisons",
  tags: ["n8n", "zapier", "make", "ai agents", "workflow automation"],
  author: "solyio",
  publishedAt: "2026-08-24",
  eyebrow: "Comparison",
  primaryKeyword: "n8n vs zapier vs make for ai agents",
  keyTakeaways: [
    "n8n bills per workflow execution, Zapier bills per completed action (task), and Make bills per module operation (credit), so a 10-step AI agent run costs 1 unit on n8n and roughly 10 on Zapier or Make.",
    "At 2026 annual list prices, n8n Cloud Starter is about €20/month for 2,500 executions, Zapier Professional starts around $19.99/month for 750 tasks, and Make Core starts around $9/month for 10,000 credits.",
    "For AI agent workloads above a few thousand runs a month, n8n is usually the cheapest managed option; Zapier becomes the most expensive fastest because every agent step is a billable task.",
    "Move from no-code to custom code when you need automated tests and evaluations, state shared across runs, low latency, or agent logic that ships inside your own product — not merely to save on platform fees.",
    "The pattern that works best for most teams is hybrid: a workflow tool handles triggers and integrations, and a small custom service handles the agent reasoning that needs testing and version control.",
  ],
  blocks: [
    { type: "h2", text: "The straight answer by volume" },
    {
      type: "p",
      text: "Under about 500 agent runs a month, **use whichever tool your team already knows** — the bill will be small on all three. From roughly 500 to 5,000 runs, **n8n is usually the cheapest managed option** because it does not charge per step. Above tens of thousands of runs, or when reliability requirements rise, **self-hosted n8n or a custom service** usually wins.",
    },
    {
      type: "table",
      caption: "Recommended default by monthly volume, assuming an AI agent workflow of about 10 steps per run.",
      headers: ["Runs per month", "Default pick", "Why", "Watch out for"],
      rows: [
        ["Under 500", "Tool you already use", "Platform fees are small everywhere", "Building habits that will not scale"],
        ["500-5,000", "n8n Cloud or Make", "Per-execution or cheap per-credit billing", "Zapier task counts climbing fast"],
        ["5,000-50,000", "n8n (Cloud Pro or self-hosted) or hybrid", "Step-based billing gets expensive", "Concurrency limits and debugging at volume"],
        ["50,000+", "Self-hosted n8n or custom service", "Platform fees and limits dominate", "You now own operations and on-call"],
      ],
    },

    { type: "h2", text: "How each tool bills in 2026" },
    {
      type: "p",
      text: "The billing unit decides your cost more than the sticker price does. **Zapier counts tasks**: each successfully completed action step. **Make counts credits**: roughly one per module operation, with iterators and routers multiplying usage. **n8n counts executions**: one per workflow run, however many steps it contains.",
    },
    {
      type: "ul",
      items: [
        "**Zapier:** most action steps count as a task; triggers do not. Overage is billed at a premium to your plan rate up to a cap, after which Zaps pause until the next cycle.",
        "**Make:** every module that runs uses credits. A loop over 20 items runs the modules inside it 20 times.",
        "**n8n Cloud:** a run is one execution regardless of steps. Plans also cap concurrent executions, which matters for bursty agent workloads.",
        "**Self-hosted n8n:** no execution meter; you pay for servers and the time to run them.",
        "**Custom code:** you pay for compute, usually a small container or serverless functions, plus engineering time.",
      ],
    },

    { type: "h2", text: "Price side by side" },
    {
      type: "p",
      text: "Entry prices look similar; what differs is how far each plan stretches for an AI workload. The table shows 2026 entry plans and what they include.",
    },
    {
      type: "table",
      caption: "Indicative annual-billing list prices as of 2026. Monthly billing costs more. Model API costs are separate on every option. Confirm current pricing before deciding.",
      headers: ["Option", "Entry plan", "Included", "Billing unit", "Notes"],
      rows: [
        ["n8n Cloud", "Starter ~€20/mo", "2,500 executions, 5 concurrent", "Execution", "Pro ~€50/mo for 10,000 executions and 20 concurrent"],
        ["Zapier", "Professional ~$19.99/mo", "750 tasks", "Task (action step)", "Team from ~$69/mo; higher task tiers cost more"],
        ["Make", "Core ~$9/mo", "10,000 credits", "Credit (module operation)", "Pro ~$16/mo, Teams ~$29/mo"],
        ["n8n self-hosted", "Community edition, free license", "No execution cap", "Your infrastructure", "Server roughly $20-$150/mo plus ops time; paid tiers add SSO and environments"],
        ["Custom service", "No platform fee", "Whatever you build", "Compute", "Build cost plus hosting, typically $20-$80/mo for a small service"],
      ],
    },

    { type: "h2", text: "The AI agent multiplier" },
    {
      type: "p",
      text: "An AI agent run is rarely one step. A typical support agent receives a trigger, fetches the customer, calls the model, searches a knowledge base, looks up an order, calls the model again, updates the ticket and posts a notification — **8 to 15 billable steps for one logical run.**",
    },
    {
      type: "table",
      caption: "Billable units per month for an agent averaging 10 steps per run.",
      headers: ["Runs per month", "Zapier tasks", "Make credits", "n8n executions"],
      rows: [
        ["500", "~5,000", "~5,000", "500"],
        ["5,000", "~50,000", "~50,000", "5,000"],
        ["50,000", "~500,000", "~500,000", "50,000"],
      ],
    },
    {
      type: "callout",
      variant: "key",
      title: "Tokens are the same everywhere",
      text: "The language model bill does not change with the orchestration tool if you use your own API key. What changes is the platform fee wrapped around it. Compare platforms on orchestration cost, then add model cost separately.",
    },

    { type: "h2", text: "Break-even: when custom code beats per-step billing" },
    {
      type: "p",
      text: "A small custom agent service costs roughly **$10,000-$30,000 to build**, plus hosting and **15-30% of build cost per year** to maintain — on the order of $150-$800 a month all-in. It beats platform fees alone once your platform bill consistently exceeds that range.",
    },
    {
      type: "p",
      text: "With Zapier, that can happen at a few thousand agent runs a month because every step is a task. With n8n Cloud or self-hosted n8n, platform fees rarely get high enough to justify custom code on cost alone. That is why the honest reasons to go custom are usually capability, not price.",
    },

    { type: "h2", text: "Self-hosting n8n honestly" },
    {
      type: "p",
      text: "Self-hosted n8n removes the execution meter but makes you the operator. The license is free; the work is not. Budget for it before assuming self-hosting is the cheap option — or have a [cloud infrastructure](/services/cloud-infrastructure) team run it for you.",
    },
    {
      type: "ul",
      items: [
        "**Infrastructure:** a VPS or container, a Postgres database, and Redis plus worker processes once you run queue mode at volume — roughly $20-$150 a month.",
        "**Upgrades:** n8n ships frequently. Someone must test upgrades against your workflows.",
        "**Backups and recovery:** the database holds workflows, credentials and execution history. Test restores, not just backups.",
        "**Security:** patching, network exposure, and safe storage of the credentials encryption key.",
        "**On-call:** when a workflow that sends customer emails stops at 2am, who notices and who fixes it?",
        "**Licensing:** n8n uses a fair-code license. Internal use is fine; offering n8n itself as a hosted service to others is restricted.",
      ],
    },

    { type: "h2", text: "Where no-code breaks" },
    {
      type: "p",
      text: "Workflow tools strain under AI agents in six specific places. If two or more apply to you, plan for at least part of the logic to live in code.",
    },
    {
      type: "table",
      caption: "Common failure modes when agent workloads grow.",
      headers: ["Requirement", "What goes wrong in a workflow tool", "What code gives you"],
      rows: [
        ["Long-running jobs", "Step and execution timeouts, awkward waits", "Background jobs with checkpoints"],
        ["Retries and idempotency", "Partial runs repeat side effects such as duplicate emails", "Idempotency keys and controlled retries"],
        ["Shared state across runs", "Workarounds via external tables and lookups", "A proper database model"],
        ["Concurrency", "Plan limits and race conditions on shared records", "Queues and locks you control"],
        ["Versioning and review", "Visual diffs are hard to review; changes go straight to production", "Pull requests, code review, rollbacks"],
        ["Testing and evaluation", "Little support for automated test suites", "Unit tests and model evaluation sets in CI"],
      ],
    },

    { type: "h2", text: "Where no-code wins outright" },
    {
      type: "p",
      text: "Do not pay to custom-build workflows that are simple, low-volume and made of standard integrations. These five almost always belong in a workflow tool:",
    },
    {
      type: "ol",
      items: [
        "Form submissions into a CRM with a notification.",
        "New deal or ticket alerts into Slack or Teams.",
        "Invoice and payment syncing between billing and accounting tools.",
        "Lead enrichment with a single lookup and a model-written summary.",
        "Scheduled report emails assembled from one or two sources.",
      ],
    },

    { type: "h2", text: "Reliability and observability" },
    {
      type: "p",
      text: "For agent workflows you need to answer three questions quickly: what did it do, why, and did quality change after the last edit. Workflow tools answer the first reasonably well through execution logs; the second and third usually need additions.",
    },
    {
      type: "p",
      text: "Whatever you choose, log the model inputs and outputs for each run with sensible retention, keep a labeled evaluation set of real cases, and re-run it whenever prompts or models change. That discipline matters more than the platform.",
    },

    { type: "h2", text: "EU and UK buyers: residency and sub-processors" },
    {
      type: "p",
      text: "If you process EU customer data, check where each tool stores and processes it and list it as a sub-processor. **Make** offers EU hosting options, **n8n** is a Berlin-based company whose self-hosted edition runs wherever you deploy it, and **Zapier** is US-based, so transfers need the usual safeguards.",
    },
    {
      type: "p",
      text: "Self-hosting in an EU region often settles procurement questions fastest because data residency is then something you control directly. Confirm each vendor's current data processing terms before relying on this summary.",
    },

    { type: "h2", text: "Lock-in and exit cost" },
    {
      type: "p",
      text: "No workflow format moves cleanly between Zapier, Make and n8n; migrations are rebuilds. What does carry over is everything outside the tool: prompts, evaluation sets, API credentials, documentation of each workflow's purpose, and any logic you already moved into code.",
    },
    {
      type: "p",
      text: "Keep prompts and business rules in a version-controlled place rather than pasted into steps, and a future migration becomes days of rewiring instead of weeks of rediscovery.",
    },

    { type: "h2", text: "The hybrid pattern we ship most" },
    {
      type: "p",
      text: "Most production agent systems we build are hybrid: **n8n or another workflow tool handles triggers, schedules and integrations**, and **a small custom service handles the agent reasoning** — prompts, tool calls, validation and evaluation — behind a single API endpoint.",
    },
    {
      type: "p",
      text: "This keeps the parts that change often and need testing in code with version control, while operations staff can still adjust triggers and integrations visually. Our [AI automation service](/services/ai-automation) is usually scoped this way.",
    },

    { type: "h2", text: "Decision tree: seven questions" },
    {
      type: "p",
      text: "Answer these in order; the first \"yes\" that points to code usually settles the architecture.",
    },
    {
      type: "ol",
      items: [
        "**Does the agent logic ship inside your own product for customers?** Yes: custom code.",
        "**Do mistakes have financial, legal or customer-facing consequences?** Yes: code for the reasoning, with evaluations and approvals.",
        "**Do you need state shared across runs?** Yes: code or a hybrid with a real database.",
        "**Will volume exceed about 5,000 runs a month?** Yes: avoid per-step billing; use n8n or code.",
        "**Is EU data residency a contractual requirement?** Yes: self-host or choose an EU-hosted option.",
        "**Does anyone on the team write and maintain code?** No: stay on a managed workflow tool, or buy maintenance.",
        "**Is the workflow still changing weekly?** Yes: prototype in a workflow tool first, then harden.",
      ],
    },

    { type: "h2", text: "Migrating off 40 tangled Zaps" },
    {
      type: "p",
      text: "Migrate by volume and risk, not all at once. Most teams find a handful of Zaps generate most of the task bill and most of the failures.",
    },
    {
      type: "steps",
      items: [
        { title: "Inventory", text: "Export the list of Zaps with monthly task counts, owner and what breaks if it stops." },
        { title: "Classify", text: "Mark each as keep, rebuild in n8n, move to code, or delete. Expect a meaningful share to be deleted." },
        { title: "Rebuild the heaviest first", text: "Start with the highest-task, highest-risk workflows where savings and reliability gains are largest." },
        { title: "Run in parallel", text: "Run the new version in shadow mode, comparing outputs before switching off the old one." },
        { title: "Cut over one at a time", text: "Switch per workflow with a rollback plan, and leave the long tail of trivial Zaps where they are." },
      ],
    },
    {
      type: "p",
      text: "A hybrid n8n-plus-custom agent project typically starts from our **Build tier at $6,900** for one production automation; larger multi-workflow migrations are quoted to scope on the [pricing page](/pricing).",
    },
    {
      type: "cta",
      title: "Not sure which side of the line you are on?",
      text: "Send us your workflow list and monthly volumes. We will tell you what to keep, what to move, and what a custom service would cost — with a fixed quote.",
      buttonLabel: "Book a free call",
      href: "/book",
    },
  ],
  faqs: [
    {
      q: "Is n8n actually cheaper than Zapier for AI workflows?",
      a: "Usually, yes. n8n bills per workflow execution, while Zapier bills per completed action. An AI agent run with ten steps is one execution on n8n and roughly ten tasks on Zapier, so the gap widens quickly as volume grows. Self-hosted n8n removes the execution meter but adds operating work.",
    },
    {
      q: "Can n8n replace a custom-built AI agent?",
      a: "For many internal workflows, yes — n8n handles triggers, model calls, tool calls, branching and retries well. It is a weaker fit when you need automated test suites, shared state across runs, low latency, or agent logic that ships inside your own product.",
    },
    {
      q: "When should we move off Zapier?",
      a: "Common triggers are a task bill that keeps climbing because agent workflows have many steps, a single process spread across many chained Zaps, or failures that customers notice before your team does. Move the highest-volume and highest-risk workflows first and leave simple ones in place.",
    },
    {
      q: "Is self-hosting n8n safe for client data?",
      a: "It can be, if you run it like production infrastructure: private networking, patching, encrypted backups, careful handling of the credentials encryption key, access control and monitoring. The risk comes from treating it as a side project rather than from n8n itself.",
    },
    {
      q: "What does a hybrid n8n-plus-custom build cost?",
      a: "A hybrid with one production agent service and a handful of workflows commonly falls around $10,000-$25,000, and Solyio's Build tier starts at $6,900. Add hosting of roughly $20-$150 a month and model API costs, which depend on volume and model choice.",
    },
    {
      q: "Does Make or Zapier charge for AI model usage?",
      a: "If you connect your own model provider API key, the provider bills you for tokens and the platform bills for its own units. Some platforms also offer built-in AI features that consume their credits or tasks, so check which option a workflow uses.",
    },
  ],
}
