import type { Post } from "../types"

export const post: Post = {
  slug: "internal-tool-development-cost-2026",
  title: "Internal Tool Development Cost in 2026: Build vs Buy, With the Break-Even Math",
  seoTitle: "Internal Tool Cost in 2026: Build vs Buy Price Math",
  description:
    "What a custom internal tool costs to build in 2026, what Retool and Airtable really cost per seat, and the seat count where owning beats renting.",
  excerpt:
    "Admin panels, approval workflows, portals and reporting layers — priced by type, then compared against three years of per-seat SaaS fees.",
  category: "cost-guides",
  tags: ["internal tools", "retool", "airtable", "build vs buy", "pricing"],
  author: "solyio",
  publishedAt: "2026-09-04",
  eyebrow: "Cost Guide",
  primaryKeyword: "internal tool development cost",
  keyTakeaways: [
    "A custom internal tool typically costs $6,000-$60,000 to build in 2026: roughly $6,000-$15,000 for an admin panel, $15,000-$35,000 for an approval workflow app, and $18,000-$40,000 for a client portal.",
    "Per-seat tools are cheaper than they look at small team sizes: at 2026 annual list prices Airtable Business is about $45 per seat per month, and Retool Business about $50 per builder plus $15 per internal user.",
    "Over three years, a $25,000 custom tool with 20% annual maintenance and $100/month hosting costs about $43,600 — cheaper than Airtable Business above roughly 27 seats, but cheaper than Retool Business only above roughly 74 users.",
    "Ongoing ownership costs 15-25% of the build price per year for hosting, fixes, dependency updates and small changes.",
    "Keep using no-code when the workflow is still changing weekly, the team is under about 15 editors, or the tool is not core to how you make money.",
  ],
  blocks: [
    { type: "h2", text: "Internal tool cost in 2026: the short answer" },
    {
      type: "p",
      text: "A custom internal tool costs **$6,000-$60,000** to build, with most falling between **$10,000 and $35,000**. The price depends on how many systems it connects to, how many user roles it needs, and how messy the data you are moving into it is — not on how many screens it has.",
    },
    {
      type: "p",
      text: "Whether building is worth it depends on what you pay today. Below, we price five common tool types, lay out 2026 per-seat pricing for the usual no-code alternatives, and show the break-even calculation so you can plug in your own numbers.",
    },

    { type: "h2", text: "Price table: five common internal tools" },
    {
      type: "p",
      text: "The five tool types below cover most internal tool requests we see. Each range assumes a production-quality build with authentication, roles, backups and deployment — not a prototype.",
    },
    {
      type: "table",
      caption: "Indicative 2026 build costs from the agency market. Timelines assume access to source systems and a responsive product owner.",
      headers: ["Tool type", "Typical scope", "Build cost", "Timeline"],
      rows: [
        ["Admin panel / CRUD dashboard", "Search, edit and export records from one database; 2-3 roles", "$6,000-$15,000", "2-4 weeks"],
        ["Ops workflow app", "Multi-step approvals, roles, notifications, audit trail", "$15,000-$35,000", "5-10 weeks"],
        ["Client or partner portal", "External login, permissions per account, billing or reporting", "$18,000-$40,000", "6-12 weeks"],
        ["Reporting layer", "Dashboards over systems you already own, scheduled exports", "$9,000-$25,000", "3-7 weeks"],
        ["AI-assisted feature (add-on)", "Search, summarization or triage inside any of the above", "+$5,000-$20,000", "+2-5 weeks"],
      ],
    },

    { type: "h3", text: "Admin panel or CRUD dashboard: $6,000-$15,000" },
    {
      type: "p",
      text: "An admin panel is the cheapest custom tool because it sits on one database and mostly reads and edits records. Cost rises when you need bulk edits with validation, field-level permissions, or an export that finance will rely on.",
    },
    { type: "h3", text: "Ops workflow app with approvals and audit trail: $15,000-$35,000" },
    {
      type: "p",
      text: "Approval workflows cost more because every state change needs a rule, a notification and a record of who did what. The audit trail is usually the requirement that disqualifies spreadsheets and basic no-code tools in the first place.",
    },
    { type: "h3", text: "Client or partner portal: $18,000-$40,000" },
    {
      type: "p",
      text: "Portals are priced higher because external users raise the security bar: account isolation, password resets, invitations and sometimes billing. A leak between two client accounts is a business problem, not a bug.",
    },
    { type: "h3", text: "Reporting layer on systems you already own: $9,000-$25,000" },
    {
      type: "p",
      text: "A reporting layer is mostly data work: pulling from your CRM, accounting and product database, reconciling definitions, and scheduling refreshes. The dashboard is the easy part; agreeing what \"active customer\" means is the hard part.",
    },
    { type: "h3", text: "AI-assisted features: add $5,000-$20,000" },
    {
      type: "p",
      text: "Adding search across documents, summaries of long records or automatic triage adds $5,000-$20,000, plus a monthly model cost. Our [AI automation](/services/ai-automation) work covers how to scope this so it is measurable rather than a demo.",
    },

    { type: "h2", text: "2026 per-seat pricing: Retool, Airtable and friends" },
    {
      type: "p",
      text: "The honest comparison is against what you would pay a no-code platform over the same period. The main platforms price per user, and the details of who counts as a paid user matter more than the headline price.",
    },
    {
      type: "table",
      caption: "Indicative annual-billing list prices as of 2026. Monthly billing costs more, and enterprise contracts are negotiated. Confirm current pricing before deciding.",
      headers: ["Platform", "Plan", "List price", "Who you pay for"],
      rows: [
        ["Airtable", "Team", "~$20 per seat / month", "Editors and commenters; read-only users are free"],
        ["Airtable", "Business", "~$45 per seat / month", "Editors and commenters"],
        ["Retool", "Business", "~$50 per builder + ~$15 per internal user / month", "Builders and internal users priced separately; external users extra"],
        ["Zapier", "Team", "From ~$69 / month", "Priced by task volume, not seats"],
        ["Make", "Teams", "From ~$29 / month", "Priced by credits consumed"],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Check who actually edits",
      text: "Before you price anything, count editors separately from viewers. Many teams discover that half their Airtable seats only read data — moving those people to read-only access can cut the bill before any build discussion starts.",
    },

    { type: "h2", text: "Break-even table: when owning beats renting" },
    {
      type: "p",
      text: "Custom beats Airtable Business over three years at roughly **27 seats** for a $25,000 build, but beats Retool Business only at roughly **74 internal users**. Retool's cheap end-user pricing makes it much harder to beat on cost alone.",
    },
    {
      type: "table",
      caption: "Three-year view. Custom totals include 20% of build cost per year in maintenance plus hosting ($50/month for the $12k build, $100/month for the $25k build). Retool assumes 2 builders. Seat counts are rounded.",
      headers: ["Compared with", "Price basis", "$12,000 custom tool (3-yr ~$21,000)", "$25,000 custom tool (3-yr ~$43,600)"],
      rows: [
        ["Airtable Team", "$20 / seat / month", "Custom cheaper above ~29 seats", "Custom cheaper above ~61 seats"],
        ["Airtable Business", "$45 / seat / month", "Custom cheaper above ~13 seats", "Custom cheaper above ~27 seats"],
        ["Retool Business", "2 builders at $50 + users at $15", "Custom cheaper above ~32 users", "Custom cheaper above ~74 users"],
      ],
    },
    {
      type: "p",
      text: "Cost alone rarely settles it. Teams usually build because they hit a capability wall — record limits, permission rules the platform cannot express, performance, or an audit requirement — and then use this table to confirm the move is not financially reckless.",
    },

    { type: "h2", text: "The break-even formula, written out" },
    {
      type: "p",
      text: "Custom is cheaper over N years when **build cost + N x (annual maintenance + annual hosting)** is less than **N x 12 x monthly SaaS cost**. Use three years: shorter horizons unfairly favor renting, and longer ones assume nothing about your business will change.",
    },
    {
      type: "steps",
      items: [
        { title: "Price the custom side", text: "Build $25,000. Maintenance at 20% = $5,000 a year. Hosting $100 a month = $1,200 a year. Three-year total: $25,000 + 3 x $6,200 = **$43,600**." },
        { title: "Price the SaaS side", text: "40 Airtable Business seats at $45 = $1,800 a month, plus Zapier Team at $69 = $1,869 a month. Three-year total: 36 x $1,869 = **$67,284**." },
        { title: "Compare and sanity-check", text: "Custom saves about **$23,700** over three years here. Now ask whether the saving survives a 30% build overrun — a $32,500 build brings the total to about $51,100 with the same running costs, still well under the SaaS figure, so the decision is robust." },
      ],
    },

    { type: "h2", text: "What actually drives internal tool cost" },
    {
      type: "p",
      text: "Three factors decide most of the price: **integrations, roles and data quality.** Screens are cheap; connections, permissions and cleanup are not.",
    },
    {
      type: "ul",
      items: [
        "**Integrations.** Each system with a documented API adds a few days; each legacy system without one can add weeks.",
        "**Roles and permissions.** Two roles is simple. Record-level rules (\"regional managers see only their region\") multiply testing.",
        "**Data quality.** Duplicate customers, free-text fields used as categories, and inconsistent dates must be fixed or mapped before the tool is trustworthy.",
        "**Audit requirements.** If finance or compliance needs to know who changed what, that is designed in from day one.",
        "**Uptime expectations.** A tool that blocks shipping if it is down needs monitoring and alerting that a reporting dashboard does not.",
      ],
    },

    { type: "h2", text: "The data migration line nobody budgets for" },
    {
      type: "p",
      text: "Migrating data out of a spreadsheet or no-code base typically adds **10-25% to the build cost**, and it is the line most often missing from first quotes. Years of manual entry leave duplicates, orphaned records and fields that changed meaning halfway through.",
    },
    {
      type: "p",
      text: "Ask for migration to be a separate line item with its own acceptance check: record counts match, totals reconcile, and a named person has spot-checked a sample. It is cheaper to find problems in a trial import than after launch.",
    },

    { type: "h2", text: "Ongoing cost of ownership: the 15-25% rule" },
    {
      type: "p",
      text: "Owning a custom tool costs **15-25% of its build price per year**. That covers hosting, security patches, dependency updates, bug fixes and the small changes every team asks for once people start using it.",
    },
    {
      type: "p",
      text: "Hosting itself is usually modest — often $50-$300 a month for an internal tool on managed cloud infrastructure. The larger cost is engineering attention. Our [cloud infrastructure](/services/cloud-infrastructure) team typically sets tools up so routine updates are low-effort.",
    },

    { type: "h2", text: "When not to build" },
    {
      type: "p",
      text: "No-code is still the right answer when the process is changing faster than a developer can keep up, the team is small, or the tool has nothing to do with how you win customers.",
    },
    {
      type: "ol",
      items: [
        "**The workflow changes every week.** Settle the process in Airtable or a spreadsheet first; build once it is stable.",
        "**Fewer than about 15 editors.** At that size per-seat pricing is almost always cheaper than owning.",
        "**It is generic.** Expense approvals, PTO requests and simple ticketing have good off-the-shelf products.",
      ],
    },

    { type: "h2", text: "Worked example: replacing a 40-seat Airtable and Zapier stack" },
    {
      type: "p",
      text: "This is a modeled example, not a client invoice. A 40-person operations team runs order exceptions through Airtable Business with a set of Zaps moving data between a storefront, the warehouse system and email.",
    },
    {
      type: "table",
      caption: "Modeled comparison using the list prices and ranges in this article.",
      headers: ["Line", "Current stack (3 years)", "Custom tool (3 years)"],
      rows: [
        ["Platform seats", "$64,800 (40 x $45 x 36)", "$0"],
        ["Automation", "$2,484 (Zapier Team at $69 x 36)", "Included in build"],
        ["Build", "$0", "$25,000 (ops workflow app)"],
        ["Data migration", "$0", "Included above (~15% of build)"],
        ["Maintenance and hosting", "$0", "$18,600"],
        ["**Three-year total**", "**$67,284**", "**$43,600**"],
      ],
    },
    {
      type: "p",
      text: "The bigger win in cases like this is usually not the saving — it is removing record limits, getting proper permissions, and ending the fragile chain of automations that breaks when someone renames a field.",
    },

    { type: "h2", text: "Fixed price vs time and materials for internal tools" },
    {
      type: "p",
      text: "Use a **fixed price** once the screens, roles and integrations are listed in writing; internal tools are well-bounded enough for it. Use **time and materials with a cap** only for a short discovery phase when requirements are still unclear.",
    },

    { type: "h2", text: "How Solyio prices internal tools" },
    {
      type: "p",
      text: "Our public starting prices are **Launch from $1,900**, suited to a small tool of up to about five screens with basic integrations, and **Build from $6,900**, for a custom application with backend, database and API work plus one automation or integration. Larger multi-system tools and portals are **Scale**, quoted to scope. Every project gets a fixed quote before work begins — see [pricing](/pricing) for what each tier includes.",
    },
    {
      type: "cta",
      title: "Paying for more seats every quarter?",
      text: "Send us your current tool stack and seat counts. We will run the break-even math with you and give you a fixed quote — or tell you to stay where you are.",
      buttonLabel: "Get a fixed quote",
      href: "/book",
    },
  ],
  faqs: [
    {
      q: "At what team size does a custom internal tool become cheaper than Retool or Airtable?",
      a: "Over three years, a $25,000 custom tool becomes cheaper than Airtable Business at roughly 27 paid seats and cheaper than Airtable Team at roughly 61. Against Retool Business with two builders, it takes roughly 74 internal users because Retool charges less for users who only run apps. Smaller builds break even sooner.",
    },
    {
      q: "How much does it cost to replace an Airtable and Zapier stack with a custom app?",
      a: "Most replacements fall between $15,000 and $35,000 for the build, including data migration, plus 15-25% of that per year to maintain. The final price depends on how many systems the Zaps connect and how clean the Airtable data is.",
    },
    {
      q: "What does it cost to maintain a custom internal tool each year?",
      a: "Plan on 15-25% of the original build cost per year. Hosting is often only $50-$300 a month; the rest is security updates, dependency upgrades, bug fixes and small feature requests.",
    },
    {
      q: "Can we start small and expand the tool later?",
      a: "Yes, and it is usually the better approach. Build the one workflow that causes the most pain, run it for a month, then add the next. A well-structured codebase makes each addition cheaper than the first build.",
    },
    {
      q: "Is a custom internal tool riskier than a no-code platform?",
      a: "It moves the risk rather than removing it. With no-code you depend on the vendor's pricing and limits; with custom you depend on the code being documented and in your own accounts. Insist on owning the repository, the hosting account and the database from day one.",
    },
  ],
}
