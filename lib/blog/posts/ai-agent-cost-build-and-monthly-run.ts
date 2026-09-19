import type { Post } from "../types"

export const post: Post = {
  slug: "ai-agent-cost-build-and-monthly-run",
  title: "What an AI Agent Actually Costs in 2026: Build Price, Monthly Run Cost, and Payback",
  seoTitle: "AI Agent Cost 2026: Build Price + Monthly Run Cost",
  description:
    "What an AI agent really costs in 2026: build price by scope, monthly token and infrastructure run cost, and the payback math that tells you if it is worth it.",
  excerpt:
    "Most AI agent quotes stop at the build price. Here is the other half — tokens, orchestration, review time and maintenance — with the formula to check payback yourself.",
  category: "cost-guides",
  tags: ["ai agents", "ai automation", "pricing", "llm costs", "roi"],
  author: "solyio",
  publishedAt: "2026-09-08",
  featured: true,
  eyebrow: "Cost Guide",
  primaryKeyword: "ai agent cost per month",
  keyTakeaways: [
    "A production AI agent typically costs $3,000-$60,000 to build in 2026, depending on how many systems it touches and whether it takes actions or only drafts.",
    "Most small-business agents cost $90-$800 per month to run, covering model tokens, orchestration, hosting, monitoring and the human review time nobody puts in the quote.",
    "Model choice moves token cost roughly 7-13x for the same workload: at September 2026 list prices a flash-tier model runs about $0.75/$3.75 per million input/output tokens, while frontier models run $5-$10 input and $25-$50 output.",
    "Budget 15-30% of the build cost per year for maintenance — prompt updates, model migrations, integration changes and evaluation upkeep.",
    "Payback in months equals build cost divided by (hours reclaimed per month x loaded hourly rate - monthly run cost); a well-scoped first agent should pay back in 3-9 months.",
  ],
  blocks: [
    { type: "h2", text: "The short answer: build $3k-$60k, run $90-$800 a month" },
    {
      type: "p",
      text: "An AI agent that drafts work inside one system costs roughly **$3,000-$12,000** to build. One that takes actions across several systems, with approvals and an audit trail, costs **$25,000-$60,000**. Once live, most small-business agents cost **$90-$800 a month** to operate, and high-volume ones reach about $2,400.",
    },
    {
      type: "p",
      text: "Those ranges are wide because \"AI agent\" describes everything from a support-ticket drafter to a multi-step operations system. The rest of this guide breaks the number into the pieces you can actually control, so you can check any quote — including ours — against the math.",
    },
    {
      type: "stats",
      items: [
        { value: "$3k-$60k", label: "Build cost", note: "Drafting agent to multi-system operations agent" },
        { value: "$90-$800", label: "Monthly run cost", note: "Typical SMB volume, all-in" },
        { value: "15-30%", label: "Annual maintenance", note: "As a share of build cost" },
        { value: "3-9 mo", label: "Healthy payback", note: "For a well-scoped first agent" },
      ],
    },

    { type: "h2", text: "Build cost by scope: five agent types, five price bands" },
    {
      type: "p",
      text: "Build cost tracks two things above all: **how many systems the agent integrates with**, and **whether it acts or only drafts**. An agent that proposes an answer for a human to send is a fraction of the cost of one that writes to your CRM on its own, because the second needs permissions, validation, rollback and an exception queue.",
    },
    {
      type: "table",
      caption: "Indicative 2026 agency market ranges for a production build, not a demo. Timelines assume timely access to systems and sample data.",
      headers: ["Agent type", "What it does", "Typical build cost", "Timeline"],
      rows: [
        ["Drafting agent", "Reads one system, drafts replies or documents; a human approves and sends", "$3,000-$12,000", "2-4 weeks"],
        ["Knowledge assistant", "Answers questions over your documents with citations and access control", "$6,000-$20,000", "3-6 weeks"],
        ["Action agent, one system", "Updates a CRM, helpdesk or ERP with approval rules and logging", "$10,000-$30,000", "4-8 weeks"],
        ["Operations agent, multi-system", "Coordinates 3+ systems, exception queue, audit trail, retries", "$25,000-$60,000", "8-14 weeks"],
        ["Agent platform or product", "Multiple agents, custom UI, tenants, billing, admin", "$50,000+ (scoped)", "3-6+ months"],
      ],
    },
    {
      type: "p",
      text: "If a proposal lands far below these bands for the same scope, check what is missing — usually evaluation, error handling or the integration work. If it lands far above, ask what is being built that you did not ask for. Either way, the [AI automation service page](/services/ai-automation) describes how we scope these engagements.",
    },

    { type: "h2", text: "Why two quotes for the same agent differ 10x" },
    {
      type: "p",
      text: "Two quotes differ by an order of magnitude when the vendors have made different assumptions about six variables. Put these in writing before you compare prices, and most of the gap disappears.",
    },
    {
      type: "ol",
      items: [
        "**Integration count and quality.** A clean REST API with good docs takes days; a legacy system with no API, rate limits or a CSV export takes weeks.",
        "**Act versus draft.** Letting the agent write to a system of record adds permission design, validation, idempotency and rollback.",
        "**Required accuracy.** \"Usually right\" and \"right 98% of the time on this test set\" are different projects. The second needs an evaluation suite.",
        "**Data condition.** Messy, duplicated or unlabeled source data turns into cleanup work that someone has to pay for.",
        "**Human-in-the-loop design.** A review screen that people will actually use is real product work, not a checkbox.",
        "**Security and compliance posture.** Region pinning, PII redaction, retention settings and audit logs add effort, especially for EU customer data.",
      ],
    },

    { type: "h2", text: "The line most quotes hide: what running an agent costs" },
    {
      type: "p",
      text: "Monthly run cost is the sum of four things: **model tokens, orchestration and hosting, supporting services, and human review time.** Most proposals quote only the first, if they quote anything at all, and it is often the smallest of the four.",
    },
    {
      type: "table",
      caption: "Typical monthly operating cost for a small-business agent. Indicative list prices as of 2026.",
      headers: ["Cost line", "What it covers", "Typical monthly range", "Notes"],
      rows: [
        ["Model tokens", "Every call to the language model", "$10-$600", "Driven by volume, context size and model tier"],
        ["Orchestration", "Workflow runner or your own worker service", "$20-$150", "n8n Cloud starts around €20-€50/month; a small container runs $20-$80"],
        ["Data and retrieval", "Database, vector search, file storage", "$0-$80", "Postgres with a vector extension often covers it"],
        ["Monitoring and tracing", "Logs, traces, evaluation runs", "$0-$100", "Several tracing tools have usable free tiers"],
        ["Human review", "Staff time approving or correcting output", "Often the largest line", "Shrinks as accuracy is proven and review moves to sampling"],
      ],
    },
    {
      type: "callout",
      variant: "key",
      title: "Budget the review time",
      text: "If a person spends 20 minutes a day checking agent output at a $40 loaded hourly rate, that is roughly $290 a month — frequently more than the token bill. Plan how review drops from every item to a sample, and put that plan in the scope.",
    },

    { type: "h2", text: "Token math, worked end to end" },
    {
      type: "p",
      text: "Token cost per month equals **tokens per run x runs per month x price per token**, calculated separately for input and output because output tokens cost several times more. Here is the full calculation for a support-ticket triage agent.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Count tokens per call",
          text: "System instructions (~1,500 tokens) + the ticket (~500) + retrieved help-center passages (~4,000) = roughly **6,000 input tokens**. The drafted reply is about **800 output tokens**.",
        },
        {
          title: "Count calls per run",
          text: "One call classifies the ticket and one drafts the reply, so a single run is about **12,000 input and 1,600 output tokens**.",
        },
        {
          title: "Price one run",
          text: "On a production-tier model at $2 per million input and $10 per million output tokens: 12,000 x $2 / 1M = $0.024, plus 1,600 x $10 / 1M = $0.016. **About $0.04 per ticket.**",
        },
        {
          title: "Multiply by volume",
          text: "At 3,000 tickets a month that is **roughly $120 in tokens**. Add about 10-20% for retries and re-runs during testing, and you have your token budget.",
        },
      ],
    },
    {
      type: "p",
      text: "Do this calculation before you sign anything. If a vendor cannot tell you roughly how many tokens a run consumes, they have not designed the agent yet.",
    },

    { type: "h2", text: "Model choice swings run cost 7-13x" },
    {
      type: "p",
      text: "The same agent costs roughly seven to thirteen times more per run on a frontier model than on a flash-tier model. The practical answer is to route: use a cheap model for classification and extraction, and reserve the expensive one for the steps where quality measurably matters.",
    },
    {
      type: "table",
      caption: "The triage run above (12,000 input / 1,600 output tokens) priced by model tier. Representative list prices as of September 2026 — vendors change these often, so check current pricing before budgeting.",
      headers: ["Model tier", "Price per 1M tokens (in / out)", "Cost per run", "3,000 runs / month"],
      rows: [
        ["Budget open-weight API", "~$0.14 / $0.28", "~$0.002", "~$7"],
        ["Flash tier", "~$0.75 / $3.75", "~$0.015", "~$45"],
        ["Production tier", "~$2 / $10-$12", "~$0.04", "~$120"],
        ["Frontier tier", "~$5-$10 / $25-$50", "~$0.10-$0.20", "~$300-$600"],
      ],
    },
    {
      type: "p",
      text: "Cheaper is not automatically better. A flash model that misroutes 8% of tickets can cost more in human correction than the token saving. Choose per step, based on an evaluation set, not on the price table alone.",
    },

    { type: "h2", text: "Cost centers nobody quotes" },
    {
      type: "p",
      text: "The hidden costs in an agent project are the ones that make it reliable: evaluation, retries, data cleanup, exception handling and prompt upkeep. Leaving them out is how a $6,000 quote becomes a $15,000 project.",
    },
    {
      type: "ul",
      items: [
        "**Evaluation suite.** A labeled test set of 100-300 real examples and a script that scores every change. Without it, nobody can tell whether a prompt edit made things better or worse.",
        "**Retries and fallbacks.** Model APIs time out and rate-limit. Someone has to design what happens next.",
        "**Data cleanup.** Knowledge bases with contradictory articles produce contradictory answers. Fixing the source is often the highest-return work in the project.",
        "**Exception handling.** The 5-10% of cases the agent should not handle need a queue, an owner and a notification.",
        "**Prompt and model maintenance.** Vendors deprecate models. Each migration needs a re-run of the evaluation suite.",
      ],
    },

    { type: "h2", text: "Maintenance: what 15-30% a year pays for" },
    {
      type: "p",
      text: "Plan on **15-30% of the original build cost per year** to keep an agent working. The low end applies to a drafting agent on stable systems; the high end to action agents connected to several SaaS tools whose APIs keep changing.",
    },
    {
      type: "p",
      text: "That budget covers model migrations, integration updates when a vendor changes an API, prompt adjustments as your products and policies change, and periodic re-evaluation. An agent with no maintenance budget does not stay the same — it slowly gets worse as everything around it moves.",
    },

    { type: "h2", text: "Three cost profiles" },
    {
      type: "p",
      text: "These are modeled profiles built from the ranges in this article, not specific client invoices. They show how build and run cost relate for three common first agents.",
    },
    {
      type: "table",
      caption: "Modeled profiles. Run cost includes tokens, hosting and monitoring; it excludes staff review time.",
      headers: ["Agent", "Volume", "Build cost", "Monthly run cost", "Main cost driver"],
      rows: [
        ["Support triage and drafting", "3,000 tickets / month", "$8,000-$15,000", "$150-$400", "Help-center retrieval context size"],
        ["Inbound lead response", "800 leads / month", "$6,000-$14,000", "$90-$250", "CRM integration and enrichment lookups"],
        ["Pricing and margin analysis", "Weekly batch over deal exports", "$20,000-$50,000", "$200-$900", "Data preparation and auditability of every number"],
      ],
    },
    {
      type: "p",
      text: "The pricing profile is the most expensive to build and cheapest per run — the difficulty is trustworthy data handling, not token volume. That is the pattern behind the [pricing intelligence platform](/portfolio/pricing-intelligence) in our portfolio.",
    },

    { type: "h2", text: "Fixed price, time and materials, or retainer" },
    {
      type: "p",
      text: "Insist on a **fixed price for a defined first phase** once scope is written down, use **time and materials** only for genuinely exploratory work with a not-to-exceed cap, and move to a **retainer** after launch for maintenance and improvements.",
    },
    {
      type: "p",
      text: "Agent projects tempt vendors toward open-ended time-and-materials billing because accuracy work feels unbounded. It is bounded if the acceptance criteria are: a named evaluation set and a target score. Put that in the contract and a fixed price becomes reasonable for both sides.",
    },

    { type: "h2", text: "What $2k, $7k and $30k+ actually buy" },
    {
      type: "p",
      text: "Our public pricing maps onto agent work like this. **Launch, from $1,900,** suits validating an idea — a narrow prototype on one data source to see whether the approach works before funding a production build. **Build, from $6,900,** is a custom application that includes one production AI automation or integration. **Scale** is quoted to scope and covers advanced multi-system agents with ongoing engineering.",
    },
    {
      type: "p",
      text: "Most first production agents with one or two integrations land in Build territory; multi-system operations agents belong in Scale. The full tier breakdown is on the [pricing page](/pricing).",
    },

    { type: "h2", text: "Payback math: will it pay for itself?" },
    {
      type: "p",
      text: "Payback in months equals **build cost / (hours reclaimed per month x loaded hourly rate - monthly run cost)**. If the result is over 12 months, the scope is probably wrong — either automate a higher-volume task or build less.",
    },
    {
      type: "table",
      caption: "Worked payback examples. Loaded hourly rate includes salary, taxes, benefits and overhead.",
      headers: ["Build cost", "Hours reclaimed / month", "Loaded rate", "Run cost / month", "Payback"],
      rows: [
        ["$8,000", "40", "$40", "$200", "~5.7 months"],
        ["$12,000", "60", "$45", "$250", "~4.9 months"],
        ["$30,000", "120", "$55", "$700", "~5.1 months"],
        ["$15,000", "20", "$40", "$300", "~30 months — rescope"],
      ],
    },
    {
      type: "p",
      text: "Be honest about \"hours reclaimed.\" Count only time that is redeployed to something valuable or that avoids a hire. Time that simply becomes slack does not show up in your bank account.",
    },

    { type: "h2", text: "Seven red flags in an AI agent proposal" },
    {
      type: "p",
      text: "A proposal that cannot answer basic operating questions is a proposal for a demo, not a production system. Walk away from, or push back hard on, any of these:",
    },
    {
      type: "ol",
      items: [
        "No estimate of monthly run cost, or \"it depends\" with no formula.",
        "No evaluation set or measurable acceptance criteria.",
        "The agent can take irreversible actions with no approval step.",
        "The vendor keeps the model API keys and the workflow in their own accounts.",
        "No plan for model deprecation or maintenance.",
        "Pricing based on \"per agent\" with no definition of what an agent is.",
        "No mention of where your data is processed, retained, or whether it is used for training.",
      ],
    },

    { type: "h2", text: "Five ways to cut agent cost 30-40% without cutting scope" },
    {
      type: "p",
      text: "The largest savings come from sending fewer, smaller requests to the right model — not from negotiating the build price. These five changes routinely cut a meaningful share of operating cost.",
    },
    {
      type: "ul",
      items: [
        "**Route by step.** Use a flash-tier model for classification and extraction; reserve the stronger model for drafting or judgment.",
        "**Use prompt caching.** Major providers discount repeated prompt prefixes such as long system instructions. Structure prompts so the static part comes first.",
        "**Batch what can wait.** Nightly reports and backfills can use batch APIs, which several providers price well below real-time calls.",
        "**Retrieve less, retrieve better.** Five relevant passages beat twenty loosely related ones — cheaper and usually more accurate.",
        "**Move review to sampling.** Once the evaluation score is stable, review a sample instead of every output.",
      ],
    },
    { type: "h2", text: "When an agent is the wrong answer" },
    {
      type: "p",
      text: "If the task happens fewer than a few dozen times a month, follows fixed rules, or already has an off-the-shelf tool that does it well, do not build an agent. A standard workflow automation or a seat license will be cheaper and more reliable. Build when the work uses your own data, spans your own systems, and happens often enough for the payback formula to work.",
    },
    {
      type: "cta",
      title: "Want a run-cost estimate before you commit?",
      text: "Send us the workflow you want to automate and a rough monthly volume. We will come back with a fixed build quote and a monthly operating estimate using the math above.",
      buttonLabel: "Book a free call",
      href: "/book",
    },
  ],
  faqs: [
    {
      q: "How much does it cost to build an AI agent in 2026?",
      a: "A drafting agent that reads one system and prepares output for a person to approve typically costs $3,000-$12,000. An agent that writes to a CRM, helpdesk or ERP with approval logic runs roughly $10,000-$30,000, and a multi-system operations agent $25,000-$60,000. Integration count and whether the agent takes actions drive the price more than the model does.",
    },
    {
      q: "What does it cost to run an AI agent every month?",
      a: "Most small-business agents cost $90-$800 per month including model tokens, orchestration, data storage and monitoring. High-volume agents can reach around $2,400. Staff time spent reviewing output is often larger than the token bill and should be budgeted separately.",
    },
    {
      q: "LLM prices keep falling — does that make agents cheap now?",
      a: "It makes inference cheap, not agents cheap. Most first-year spending goes into integrations, data cleanup, evaluation, error handling and permissions rather than tokens. Falling model prices mainly help high-volume agents.",
    },
    {
      q: "Is it cheaper to buy an off-the-shelf AI tool than to build an agent?",
      a: "Usually yes for generic jobs such as meeting notes, FAQ chat or email drafting. Building pays off when the workflow depends on your own data, spans several internal systems, or encodes business rules that give you an edge. Compare three years of seat cost against build cost plus three years of run and maintenance cost.",
    },
    {
      q: "What is a realistic payback period for an AI automation project?",
      a: "For a well-scoped first agent, 3-9 months is realistic. Calculate it as build cost divided by the monthly value of reclaimed hours minus monthly run cost. A result above 12 months usually means the task volume is too low or the scope is too broad.",
    },
    {
      q: "Who should own the model API keys and accounts?",
      a: "You should. Model provider accounts, orchestration workspaces and hosting should be in your company's name, with the agency given access. That keeps billing transparent and means you can change vendors without rebuilding.",
    },
  ],
}
