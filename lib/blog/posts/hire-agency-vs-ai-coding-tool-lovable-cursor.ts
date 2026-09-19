import type { Post } from "../types"

export const post: Post = {
  slug: "hire-agency-vs-ai-coding-tool-lovable-cursor",
  title: "Hiring a Dev Agency vs Building It Yourself With Lovable, Cursor or Replit (2026)",
  seoTitle: "Hire an Agency vs Build With Lovable or Cursor (2026)",
  description:
    "Real 2026 costs for building with Lovable or Cursor versus hiring a dev agency, the seven ways AI-generated code breaks, and when to switch.",
  excerpt:
    "AI builders are the cheapest way to find out whether anyone wants your product. They are also the most common reason we get called in to rebuild an auth layer six months later. Here is exactly where the line sits.",
  category: "comparisons",
  tags: ["vibe coding", "lovable", "cursor", "mvp", "agency", "build vs buy", "ai coding tools"],
  author: "solyio",
  publishedAt: "2026-09-11",
  eyebrow: "Agency vs AI Tools",
  primaryKeyword: "hire a development agency vs AI coding tools",
  keyTakeaways: [
    "Building it yourself with AI tools costs roughly $200-$3,000 for the first year; an AI-assisted agency MVP runs $10,000-$50,000; a full custom build runs $20,000-$200,000 and up.",
    "Solyio's published prices are $1,900 for a Launch project and $6,900 for a Build project, with Scale quoted to scope.",
    "AI-generated codebases fail in seven repeatable ways: broken tenant isolation, secrets in the client bundle, no database migrations, no tests, unbounded LLM spend, no observability, and no rate limiting.",
    "Symbiotic Security's 2026 scan of 1,072 publicly reachable vibe-coded apps reported that 98% had at least one security flaw, with only 26 coming back clean.",
    "Hardening an AI-built app typically costs $5,000-$15,000 over two to four weeks; a rescue that rebuilds the data model and auth layer runs $25,000-$50,000 over four to eight weeks.",
    "Switch to professional engineering the moment you take payments, store another company's data, need SSO or an audit trail, or get sent a security questionnaire.",
  ],
  blocks: [
    {
      type: "p",
      text: "The honest version of this decision is not *which tool is better*. It is *which path is right for the next eight weeks*. AI builders like Lovable, Replit and v0 are the cheapest way on earth to find out whether anyone wants what you are building. They are also the single most common reason we get a call that starts with the phrase **we need someone to look at our auth**. Both of those things are true at the same time, and the whole decision comes down to knowing where the line between them sits.",
    },

    { type: "h2", text: "The short answer: what each path actually gets you" },
    {
      type: "p",
      text: "Use an AI builder if you are validating an idea and nobody is paying you yet — it costs $200-$3,000 for a year and puts something clickable in front of users in days. Hire an agency the moment real money moves, you hold another company's data, or someone sends you a security questionnaire; that is a $10,000-$50,000 AI-assisted build. Everything below is the detail behind those two sentences.",
    },
    {
      type: "p",
      text: "The mistake is rarely picking the wrong path. It is picking a path and then staying on it past the point where it stops working. Almost every expensive rescue we have taken on started as a perfectly sensible prototype that quietly became the production system, because it was working well enough that nobody wanted to stop and rebuild it.",
    },
    {
      type: "table",
      caption: "The four realistic paths, and where each one runs out of road.",
      headers: ["Path", "First-year cost", "Time to first users", "Where it breaks", "Best for"],
      rows: [
        [
          "DIY AI builder (Lovable, Replit, Bolt)",
          "$200-$3,000",
          "Days",
          "Auth, data model, cost control",
          "Validating an idea before you fund it",
        ],
        [
          "AI-assisted freelancer",
          "$4,000-$20,000",
          "3-8 weeks",
          "Handover, review process, one-person bus factor",
          "A single well-specified app with one clear owner",
        ],
        [
          "AI-assisted agency build",
          "$10,000-$50,000",
          "4-12 weeks",
          "Cost — it is overkill for an unvalidated idea",
          "A product with paying customers or real data",
        ],
        [
          "Full custom build",
          "$20,000-$200,000+",
          "3-6 months",
          "Burn rate before revenue exists",
          "Regulated data, SSO, deep integrations, scale",
        ],
      ],
    },

    { type: "h2", text: "2026 cost bands: what you pay before anyone writes a spec" },
    {
      type: "p",
      text: "DIY tooling runs $200-$3,000 all-in for year one. An AI-assisted agency MVP runs $10,000-$50,000. A full custom build with integrations, role systems and compliance work runs $20,000-$200,000 and up. The gap between band one and band two is not agency markup — it is the price of the work the AI builders do not do at all.",
    },
    {
      type: "table",
      caption:
        "Indicative US list prices checked September 2026. Credit-based plans mean the sticker price is a floor, not your bill.",
      headers: ["Tool", "Free tier", "Paid entry", "Next tier up", "What you are actually buying"],
      rows: [
        [
          "Lovable",
          "5 credits/day, 30/mo cap",
          "$25/mo Pro (100 credits)",
          "$50/mo Business",
          "Full-stack app generation, usually on a Supabase backend",
        ],
        [
          "Cursor",
          "Hobby, limited usage",
          "$20/mo Pro",
          "$60/mo Pro Plus, $200/mo Ultra",
          "An IDE with model credits — you still read and review the code",
        ],
        [
          "Replit",
          "Free, limited",
          "$20/mo Core ($20 credits)",
          "$100/mo Pro",
          "Agent build plus hosting and a database in one account",
        ],
        [
          "v0 (Vercel)",
          "$5/mo credits, 7 messages/day",
          "$30/user/mo Team",
          "$100/user/mo Business",
          "UI and front-end generation inside the Vercel stack",
        ],
        [
          "Supabase",
          "Free tier",
          "$25/mo Pro",
          "$599/mo Team",
          "The Postgres, auth and storage layer under most AI-built apps",
        ],
      ],
    },
    {
      type: "p",
      text: "Read that table as a floor. Every one of these products moved to credit or usage billing during 2025 and 2026, which means a month where you are iterating hard costs three to five times what a quiet month costs. Budget the paid tier plus roughly the same amount again in top-ups and overages, then add hosting, a domain, transactional email and whatever model API you call directly. A solo builder shipping steadily realistically lands between $80 and $250 a month, not the $25 on the pricing page.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "The credit-burn trap",
      text: "Credits are consumed by *attempts*, not by successes. The expensive months are the ones where the agent cannot fix a bug and you re-prompt it eleven times. If you find yourself burning credits re-explaining the same broken behavior, that is not a budgeting problem — it is the signal that the codebase has outgrown what the generator can hold in its head.",
    },

    { type: "h2", text: "The decision matrix: 14 factors, scored across all three paths" },
    {
      type: "p",
      text: "Across the 14 factors that decide whether a build survives contact with real users, DIY AI tools win on exactly three: speed to a clickable demo, cost to validate, and default UI quality. Agencies win the other eleven — and every one of those eleven is something you do not notice until after launch, which is why the comparison feels lopsided one way in week one and lopsided the other way in month six.",
    },
    {
      type: "table",
      caption: "Scored on what we actually find when we audit or take over codebases.",
      headers: ["Factor", "DIY AI tools", "AI-assisted freelancer", "Agency"],
      rows: [
        ["Time to first clickable demo", "Excellent — hours", "Fair — 1-2 weeks", "Fair — 1-3 weeks"],
        ["Cost to validate an idea", "Excellent — under $500", "Weak — $4,000+", "Weak — $1,900+"],
        ["Default UI quality", "Strong — genuinely good", "Varies by person", "Strong — designed to brand"],
        ["Auth and tenant isolation", "Weak — the number one failure", "Varies widely", "Strong — reviewed and tested"],
        ["Database migrations", "Weak — often none at all", "Fair", "Strong — versioned, reversible"],
        ["Automated test coverage", "Weak — near zero by default", "Fair", "Strong — policy-driven"],
        ["Security review before launch", "None", "Rare", "Strong — a standard gate"],
        ["Observability and error tracking", "Weak", "Fair", "Strong — wired in at setup"],
        ["Payments and third-party integrations", "Fair for Stripe basics", "Fair", "Strong — edge cases handled"],
        ["Accessibility and technical SEO", "Weak", "Varies", "Strong"],
        ["Surviving a security questionnaire", "No", "Unlikely", "Yes"],
        ["Continuity if one person leaves", "Weak", "Weak — single point of failure", "Strong"],
        ["Code another team can pick up", "Weak", "Fair", "Strong"],
        ["12-month total cost", "$200-$3,000", "$4,000-$20,000", "$10,000-$50,000"],
      ],
    },

    { type: "h2", text: "What Lovable, Cursor, Replit and v0 genuinely do well in 2026" },
    {
      type: "p",
      text: "They are very good at the first 60% of a product — screens, forms, CRUD, a plausible schema and a deployed URL inside an afternoon. That is not a toy capability, and dismissing it is the standard agency mistake. A founder who spends a weekend and $40 proving that nobody wants the thing has made a far better decision than one who spends $30,000 proving the same point four months later.",
    },
    {
      type: "ul",
      items: [
        "**Lovable** is strongest at generating a complete app shell with a database behind it — signup, dashboard, CRUD, deploy — with almost no technical knowledge required from you.",
        "**v0** produces the cleanest front-end code of the group and stays inside React and Next.js conventions, so what it writes is usually salvageable by a real team later.",
        "**Replit** bundles generation, a database and hosting in one account, which removes the biggest source of non-technical drop-off: deployment.",
        "**Cursor** is a different category entirely. It is an IDE for people who can read code — it multiplies an engineer, it does not replace one. Judging Cursor against Lovable is a category error.",
      ],
    },
    {
      type: "p",
      text: "That last distinction matters more than any feature comparison. If you can read a diff and know what a foreign key constraint is, Cursor plus your own judgment is the best value in this entire article. If you cannot, the generate-and-host tools are your only real option — and they will cheerfully generate code you have no way to evaluate.",
    },

    { type: "h2", text: "Where AI-generated codebases break: the seven failure patterns" },
    {
      type: "p",
      text: "Seven failures show up again and again in AI-generated codebases: broken tenant isolation, secrets exposed in the client bundle, no database migrations, no tests, unbounded LLM spend, no observability, and no rate limiting. None of them are visible in the demo. All of them are visible in the first week you have real users.",
    },
    {
      type: "stats",
      items: [
        {
          value: "98%",
          label: "of scanned vibe-coded apps had a security flaw",
          note: "Symbiotic Security scan of 1,072 public apps, 2026 — 26 came back clean",
        },
        {
          value: "7",
          label: "failure patterns behind most rescue work",
          note: "Ranked by how often we find them in takeovers",
        },
        { value: "$5k-$15k", label: "typical hardening sprint", note: "Market range, two to four weeks" },
      ],
    },
    {
      type: "ol",
      items: [
        "**Tenant isolation is wrong or absent.** Row-level security is either not enabled, or enabled with a policy that does the opposite of what was intended. Every customer can read every other customer's rows.",
        "**Secrets live in the client.** API keys, service-role database keys and webhook signing secrets end up in code that ships to the browser, where anyone can read them in devtools.",
        "**No migrations.** The schema was changed by talking to an agent, so there is no versioned history. The first time you need to alter a column on live data, there is no safe path and no rollback.",
        "**No tests.** Nothing stops a regression, so every change is a coin flip. This is why late-stage AI builds get slower rather than faster.",
        "**Unbounded LLM spend.** Model calls with no per-user budget, no token ceiling and no caching. One scripted loop against your endpoint and the bill is four figures.",
        "**No observability.** No error tracking, no structured logs, no alerting. You learn something is broken when a customer emails you, which puts your mean time to detection in days.",
        "**No rate limiting.** Signup, password reset, file upload and every AI endpoint are wide open to abuse and account enumeration.",
      ],
    },
    {
      type: "p",
      text: "A note on that 98% figure, because being straight about sourcing is the point of a page like this: it comes from a security vendor scanning publicly reachable apps, not from peer-reviewed research, and a company that sells scanning has an obvious interest in an alarming headline. Treat it as directional. Our own experience taking over AI-generated codebases is consistent with the direction if not the decimal point — we have yet to open one that had all seven of the above handled.",
    },

    { type: "h2", text: "Two failure patterns in detail" },
    { type: "h3", text: "Auth, row-level security and multi-tenant data leaks" },
    {
      type: "p",
      text: "This is the one that ends companies, and it is the most common serious finding in our audits by a wide margin. The pattern is consistent: the app behaves correctly when you are logged in as yourself, so it looks finished, but the database policy meant to restrict rows to their owner was never written, was written backwards, or was bypassed entirely by a service-role key used in a public code path.",
    },
    {
      type: "p",
      text: "This is not hypothetical. A publicly reported vulnerability affecting Lovable-generated projects, tracked as `CVE-2025-48757`, covered exactly this class of row-level security misconfiguration, and researchers reported well over a hundred affected apps leaking data including email addresses and API keys. The tools have improved their defaults since. The underlying problem has not gone away, because the model is writing an access policy it has no way to test against a real adversary.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Test this yourself in ten minutes",
      text: "Create two accounts in your own app. Log in as account A, open devtools, and copy any request the app makes that returns your data. Now replay that request using account B's session together with A's record ID. If you get A's data back, you have a tenant isolation bug and you have it right now. Do this before you onboard a single paying customer.",
    },
    { type: "h3", text: "Unbounded LLM spend with no ceiling" },
    {
      type: "p",
      text: "AI features generated by AI tools almost never ship with a budget attached. The generated call passes user input straight to a model with no token limit, no per-user quota and no caching, which means your unit economics are set by whoever is most willing to abuse your free tier. A single unauthenticated endpoint can turn a $30 month into a four-figure one over a weekend.",
    },
    {
      type: "code",
      language: "ts",
      filename: "lib/ai/generate.ts",
      code: `// What the generator typically writes
const reply = await openai.chat.completions.create({ model, messages })

// What survives contact with a paying customer
const usedCents = await spend.forUser(userId)
if (usedCents >= PLAN_LIMIT_CENTS) throw new OverBudgetError()
if (!(await limiter.allow(userId, 20, "1m"))) throw new RateLimitedError()

const guarded = await openai.chat.completions.create({
  model: routeModel(task),   // cheap model for cheap tasks
  messages,
  max_tokens: 800,           // a hard ceiling, not a suggestion
})
await spend.record(userId, guarded.usage)`,
    },
    {
      type: "p",
      text: "Four controls turn an AI feature from a liability into a product: a per-user spend budget enforced before the call, a rate limit, a hard token ceiling, and model routing so trivial tasks never run on your most expensive model. Caching identical prompts is the fifth and usually the cheapest win. Most of our [AI automation work](/services/ai-automation) on top of an existing prototype is exactly this — the feature already works, it just has no economics attached to it yet.",
    },

    { type: "h2", text: "The five triggers that mean you have outgrown the AI builder" },
    {
      type: "p",
      text: "Any one of these five triggers is enough on its own. You do not need all five, and notably, none of them are about how many screens your app has.",
    },
    {
      type: "ol",
      items: [
        "**Money moves.** You are charging customers, or worse, moving money between users. Payment edge cases — refunds, disputes, partial failures, replayed webhooks — are where generated code is thinnest.",
        "**You hold data that is not yours.** Another company's customer list, health records, financial data, or anything you would legally have to disclose a breach of.",
        "**Someone sends you a security questionnaire.** The first enterprise deal brings a vendor assessment. If you cannot answer questions about access control, logging and backups, the deal stalls no matter how good the product is.",
        "**You need SSO, roles or an audit trail.** SAML, granular permissions and immutable audit logs sit outside what the generate-and-host tools produce reliably, and retrofitting a role system costs far more than designing one.",
        "**Changes have started breaking other things.** When fixing A reliably breaks B, you have hit the ceiling of what a generator can reason about without tests. This one arrives quietly and is the most reliable signal of the five.",
      ],
    },

    { type: "h2", text: "What a vibe-code rescue costs: hardening vs rebuild" },
    {
      type: "p",
      text: "A production-hardening sprint on a small, coherent AI-generated codebase runs $5,000-$15,000 over two to four weeks. A rescue that rebuilds the data model and auth layer underneath the existing interface runs $25,000-$50,000 over four to eight weeks. The variable that decides which one you need is not the number of screens — it is how tangled the permissions logic has become across the app.",
    },
    {
      type: "table",
      caption:
        "Market ranges for rescue work in 2026, not Solyio quotes. Solyio's own published prices are Launch from $1,900, Build from $6,900, and Scale quoted to scope.",
      headers: ["Engagement", "Typical cost", "Timeline", "What you get", "Choose it when"],
      rows: [
        [
          "Audit only",
          "$1,500-$5,000",
          "3-7 days",
          "Written findings, severity ranking, a prioritized fix plan",
          "You need to know how bad it is before committing budget",
        ],
        [
          "Hardening sprint",
          "$5,000-$15,000",
          "2-4 weeks",
          "Tenant isolation fixed, secrets rotated, migrations, CI, error tracking, rate limits",
          "The data model is sane and the plumbing is not",
        ],
        [
          "Partial rebuild",
          "$25,000-$50,000",
          "4-8 weeks",
          "Data model and auth layer rebuilt, most of the interface preserved",
          "Permissions logic is smeared across the whole app",
        ],
        [
          "Full rebuild",
          "Quoted to scope",
          "8-16 weeks",
          "A new codebase, with the prototype used as a living specification",
          "You are past product-market fit and the prototype is the bottleneck",
        ],
      ],
    },
    {
      type: "p",
      text: "If you do not know which band you are in, pay for the audit first. It is the cheapest decision in this entire article and it converts a vague fear into a list with prices next to each line. Our [security practice](/services/cyber-security) runs this as standalone work precisely because most people asking the question do not yet need a rebuild — they need to know whether they do.",
    },

    { type: "h2", text: "The hybrid sequence that works: prototype, harden, own the repo" },
    {
      type: "p",
      text: "The highest-return sequence we see is not agency-or-tools. It is tools first, agency second, with a deliberate handover in between. Spend $200-$600 and three weeks proving demand with an AI builder, then spend $10,000-$30,000 turning the validated thing into something that can safely hold customers. That order saves most founders one entire wasted build.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Prototype with the AI builder, deliberately as a throwaway",
          text: "Give yourself a fixed budget and a fixed deadline — say $500 and four weeks. The goal is evidence about demand, not a foundation. Naming it a throwaway out loud is what stops it from quietly becoming production.",
        },
        {
          title: "Put it in front of real users and measure one number",
          text: "Signups, paid conversions, repeat usage — pick the single number that would make you confident. If the prototype cannot move it, no amount of engineering will, and you have just saved yourself $30,000.",
        },
        {
          title: "Export the repository and confirm it runs locally",
          text: "Before any agency conversation, clone the code and start it on your own machine. What runs locally is portable. What only runs on the platform is a screenshot with a database attached.",
        },
        {
          title: "Commission an audit, not a rebuild",
          text: "Hand the repo to an engineering team for a fixed-fee review. You get back a severity-ranked list. That list, not a sales call, is what tells you whether you need $8,000 of hardening or $40,000 of rebuild.",
        },
        {
          title: "Harden, and keep the prototype as the specification",
          text: "The most valuable artifact from step one is not the code — it is a working demonstration of exactly what the product should do. That removes most of the ambiguity that makes custom builds expensive, which is why post-prototype builds usually quote lower than greenfield ones.",
        },
      ],
    },

    { type: "h2", text: "Who should keep building it themselves, and who should hire on day one" },
    { type: "h3", text: "Keep going yourself — but add these five guardrails first" },
    {
      type: "p",
      text: "If you have no paying customers, hold no third-party data and are still changing the core idea weekly, hiring anyone is premature. Keep building. But spend one day adding these five things, because they cost almost nothing now and a great deal later.",
    },
    {
      type: "ul",
      items: [
        "**Turn on row-level security and test it with two accounts.** Ten minutes of work, using the replay test above. Nothing else on this list matters as much.",
        "**Move every secret to a server-side environment variable** and rotate anything that has ever been in client code or a public repo. Assume anything exposed has already been scraped.",
        "**Add error tracking.** A free tier is plenty for an early product and it turns silent failure into a notification you actually receive.",
        "**Rate-limit signup, password reset, upload and every AI endpoint.** Those four abuse surfaces exist in every application ever built.",
        "**Set a hard spend cap on every paid API,** including your model provider and your hosting. Every major provider supports a billing ceiling and almost nobody sets one.",
      ],
    },
    { type: "h3", text: "Hire on day one if any of this is true" },
    {
      type: "p",
      text: "Some products have no validation phase where the cheap path is safe, because version one already carries real consequences. If you are taking payments from day one, handling regulated data, integrating with an ERP or a clinical system, selling into procurement, or building something where a data leak is existential rather than embarrassing, start with engineers. The prototype phase does not save you money here — it delays the same spend and adds a migration on top.",
    },
    {
      type: "callout",
      variant: "info",
      title: "When Solyio is the wrong choice",
      text: "If you have not validated demand yet, do not hire us. Spend $200 on an AI builder and four weeks on customer conversations first — we will tell you the same thing on a call. Equally, if you need one small change a month to a stable app, a good freelancer on retainer is better value than an agency. And if you already have in-house engineers who are simply short on capacity, you want staff augmentation, not a fixed-scope build. We are the right call when something needs to be designed, built and made safe to operate, and there is nobody in the building whose job that is.",
    },

    { type: "h2", text: "Nine questions to ask an agency that says it uses AI tools too" },
    {
      type: "p",
      text: "Every competent agency in 2026 uses AI coding tools, this one included, and any shop claiming otherwise is either not telling you the truth or is slower than it needs to be. The question is never whether they use them. It is what happens between generation and production — because that gap is the entire thing you are paying for.",
    },
    {
      type: "ol",
      items: [
        "Who reviews AI-written code before it merges, and can a change reach production without a human approving it?",
        "What is your test coverage policy, and specifically what is covered on a project the size of mine?",
        "How do you verify tenant isolation? Ask them to describe the actual test, not the principle.",
        "What does your database migration process look like, and how do you roll back a bad migration on live data?",
        "What error tracking, logging and alerting ships by default, and who is watching it after launch?",
        "Where do secrets live, and how are they rotated when someone leaves the project?",
        "What rate limits and spend ceilings do you put on AI endpoints before launch?",
        "Do I own the repository from the first commit, and does it live in my organization or yours?",
        "What happens after the support window closes — what does maintenance cost, and can I take this code to another team without your cooperation?",
      ],
    },
    {
      type: "p",
      text: "Good answers are specific and slightly boring. Bad answers are about velocity, or they quietly reframe the question as being about tooling. If an agency cannot describe how it verifies that customer A cannot read customer B's data, it is shipping the same seven failure patterns as the generator, just at ten times the price.",
    },

    { type: "h2", text: "12-month total cost: three worked scenarios" },
    {
      type: "p",
      text: "Cost bands only become useful attached to something real. Here are three scenarios from opposite ends of the range, costed over twelve months including tooling, hosting and the rework each path realistically incurs.",
    },
    {
      type: "table",
      caption: "Twelve-month all-in cost, including hosting, tooling and likely rework.",
      headers: ["Scenario", "DIY with AI tools", "Agency path", "Who wins"],
      rows: [
        [
          "Waitlist site with email capture and a simple CMS",
          "$300-$900",
          "$1,900-$4,000",
          "DIY, clearly. Do not pay anyone to build this for you.",
        ],
        [
          "Two-sided marketplace, Stripe Connect payouts, two user roles",
          "$1,200-$3,000, plus a $25,000-$50,000 rescue when payouts or permissions break",
          "$15,000-$45,000",
          "Agency, from the moment money moves between two users.",
        ],
        [
          "Internal ops tool for 40 staff with SSO and an audit log",
          "Not realistically achievable — SAML and immutable audit logging sit outside what the builders generate reliably",
          "$20,000-$60,000",
          "Agency on day one. There is no cheap validation phase here.",
        ],
      ],
    },
    {
      type: "p",
      text: "Row one is the row agencies never put in their comparison tables, and it is the most honest line in this article. A large share of what gets pitched as a custom build is a landing page with a form on it. If that is what you have, an AI builder will do it faster and cheaper than any engagement, and you should keep the money.",
    },

    { type: "h2", text: "Ownership, IP and lock-in: what you keep under each path" },
    {
      type: "p",
      text: "Every mainstream AI builder now lets you connect or export a Git repository, so the licence is rarely the real problem. The lock-in is architectural: the generated app assumes the platform's auth, its database conventions, its edge functions and its deployment model. You own the files and still cannot move them anywhere.",
    },
    {
      type: "p",
      text: "The test that settles it takes half an hour. Export the repository, clone it onto a clean machine, install dependencies and run it against a local database. If it starts and you can sign in, you have portable code and any competent team can pick it up. If it needs platform-specific services just to boot, what you own is source code rather than a working system — which is fine for a prototype and a serious problem for a business.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Do the portability test before you need it",
      text: "Run the export-and-boot test in month one, not in month nine while you are mid-negotiation with a development partner and discovering that your data model only exists inside a hosted dashboard. Knowing the answer early changes which path you should be on.",
    },
    {
      type: "p",
      text: "Under an agency engagement this should be non-negotiable: the repository sits in your organization from the first commit, infrastructure runs in cloud accounts you own, and nothing depends at runtime on the agency's own services. Ask about it explicitly before you sign anything. It is the difference between hiring a builder and renting a building.",
    },

    { type: "h2", text: "How this maps to Solyio's Launch, Build and Scale tiers" },
    {
      type: "p",
      text: "Launch starts at $1,900 and covers a single validated surface — a marketing site or a small MVP of up to about five pages or screens, with the SEO and analytics foundation in place. It is the right tier when an AI prototype proved demand and what you need now is a professional front door rather than a platform. Build starts at $6,900 and covers a full custom application: backend, database, API, cloud deployment with CI/CD, and one AI automation. That is the tier most post-prototype work lands in. Scale is quoted to scope and covers ongoing multi-platform engineering with security hardening and a maintained roadmap.",
    },
    {
      type: "p",
      text: "For rescue work specifically, an audit and a hardening sprint on a coherent codebase sit inside Build's territory, and a partial rebuild of the data model and auth layer usually does too. Where a prototype has to be replaced outright, it becomes a Scale conversation, because that work does not end at launch. The full breakdown is on the [pricing page](/pricing), and the [portfolio](/portfolio) has examples of the kind of platforms this produces — including [RoboMarketer](/portfolio/robomarketer), an AI-heavy product of exactly the sort people often try to generate first. If you would rather see a productized version before commissioning anything, our [products](/products) are a reasonable starting point, and the [web development](/services/web-development) and [cloud infrastructure](/services/cloud-infrastructure) pages cover how the build and deployment side actually runs.",
    },
    {
      type: "cta",
      title: "Not sure whether you need hardening or a rebuild?",
      text: "Bring the repository. We will tell you which of the seven failure patterns are in it, what each one costs to fix, and whether you should keep building it yourself for another two months instead. If the honest answer is that you do not need us yet, that is what you will hear.",
      buttonLabel: "Book a 30-minute review",
      href: "/book",
    },
  ],
  faqs: [
    {
      q: "Can I just build my whole product with Lovable and skip developers entirely?",
      a: "You can get to a working demo and often to your first handful of users, which is genuinely worth doing before you spend $20,000. What you cannot reliably get is correct auth and tenant isolation, database migrations that do not lose data, rate limiting, and cost controls on LLM calls. Those four things are what turn a demo into a liability once real customers and real money are attached. Plenty of products do live happily on an AI builder forever — they are the ones with one user type, no payments and no third-party data.",
    },
    {
      q: "How much does it cost to fix an app that was built with AI coding tools?",
      a: "A production-hardening sprint on a small, coherent codebase typically runs $5,000-$15,000 over two to four weeks. A full rescue with a partial rebuild of the data model and auth layer runs closer to $25,000-$50,000 over four to eight weeks. The variable is not the number of screens, it is how tangled the data model and permissions logic are. A fixed-fee audit at $1,500-$5,000 is the cheapest way to find out which band you are in before committing to either.",
    },
    {
      q: "Is it cheaper to start with an AI tool and hire an agency later?",
      a: "Usually yes, if you treat the AI build as a disposable prototype rather than a foundation. Validating the idea for a few hundred dollars before committing to a $10,000-$50,000 build is the single highest-return decision most founders make, and the working prototype doubles as a specification that removes most of the ambiguity from the later quote. It stops being cheaper the moment you sell the prototype to paying customers and then have to rebuild it underneath them while they are using it.",
    },
    {
      q: "Do good agencies use AI coding tools themselves?",
      a: "The competent ones do, and they should tell you so openly. The difference is that an agency uses them inside a review, testing and deployment process, so the generated code is checked, typed, tested and observable before it reaches your users. Ask any agency directly how they review AI-written code, what their test coverage policy is, and how they verify that one customer cannot read another customer's data. Specific answers are a good sign; answers about speed are not.",
    },
    {
      q: "Who owns the code if I build it with Lovable or Replit?",
      a: "Most AI builders let you export or connect a Git repository, so the licence is usually not the issue. The practical lock-in is in the platform's hosting, auth and database conventions. Before you commit, export the repo and confirm it runs on your own machine against a local database with no platform-specific services. If it does not start, you do not really have portable code yet — you have source files that only work in one place.",
    },
    {
      q: "Is Cursor the same kind of tool as Lovable?",
      a: "No, and comparing them directly is a category error. Cursor is an IDE with AI built in, priced from $20 a month at list, and it assumes you can read and evaluate the code it writes — it multiplies an engineer rather than replacing one. Lovable, Replit and v0 generate and host an application for someone who cannot. If you can read a diff, Cursor plus your own judgment is the best value on this list. If you cannot, it will not help you, because its main benefit is precisely the review step you are unable to perform.",
    },
  ],
}
