import type { Post } from "../types"

export const post: Post = {
  slug: "mvp-scope-document-for-development-agency",
  title: "How to Write an MVP Scope Document a Development Agency Can Actually Quote",
  seoTitle: "MVP Scope Document: What Agencies Need to Quote",
  description:
    "The 9 sections a dev agency needs to quote your MVP fast, the cut rules that shrink a 40-feature list to 6, and what each budget band really buys.",
  excerpt:
    "Agencies do not quote a vision, they quote decisions. Here are the nine sections that turn an idea into a fixed number, the four cut rules that shrink the feature list, and a fill-in template you can send to three firms the same day.",
  category: "founders",
  tags: ["mvp", "scoping", "requirements", "budgeting", "hiring an agency", "product"],
  author: "solyio",
  publishedAt: "2026-08-17",
  eyebrow: "Scoping Guide",
  primaryKeyword: "mvp scope document",
  keyTakeaways: [
    "An MVP scope document needs nine sections: a one-sentence job statement, one critical user journey written screen by screen, a must/later/never feature split, every integration and data source, user roles, the admin surface, non-functional requirements, launch criteria, and a real budget band with a deadline.",
    "Four tight pages get a faster and tighter quote than a forty-page PRD, and if your scope implies more than three months of build time you have a v1 product rather than an MVP.",
    "Quotes for the same app vary by 3x mainly because integrations, user roles, and admin tooling were left undefined, so each agency guessed differently; a complete scope document typically narrows that spread to 20-30%.",
    "Give a budget band rather than hiding it. Without one an agency prices defensively against the worst-case reading of your scope, which almost always costs you more than disclosure would.",
    "Admin and internal-ops screens are roughly a quarter to a third of MVP build hours, and they are the part founders forget because nobody demos a refund button.",
    "At Solyio, Launch starts at $1,900 for a landing page or thin MVP, Build starts at $6,900 for a custom app with backend, database, cloud deploy and one integration, and multi-role or compliance-heavy work is quoted to scope under Scale.",
  ],
  blocks: [
    {
      type: "h2",
      text: "What an Agency Reads First — and Why a Vague Brief Comes Back as a Range Instead of a Price",
    },
    {
      type: "p",
      text: "The first thing an estimator looks for in your brief is not your vision. It is the list of things they cannot see: which systems the product has to talk to, how many kinds of user exist, who cleans up bad data, and how both sides will agree the build is finished. Every one of those left blank becomes a risk premium, and a brief with all four missing comes back as \"$12,000 to $40,000, let's talk\" instead of a number you can act on.",
    },
    {
      type: "p",
      text: "That range is not an agency being cagey. It is arithmetic. If your brief says \"users can pay\" and nothing else, an honest estimator has to price the possibility that you mean a marketplace with split payouts, seller onboarding and identity checks — because if they price the easy reading and you meant the hard one, they eat three weeks. So they quote the middle and pad it. The pad is yours to remove, and the only tool that removes it is specificity.",
    },
    {
      type: "p",
      text: "The good news is that specificity here is cheap. You do not need a technical specification, an architecture diagram, or a database schema — those are the agency's job, and writing them badly is worse than not writing them at all. You need about four pages that answer nine questions. Below is what those nine sections are, what each one changes about the price, and a copy-paste template at the end.",
    },
    {
      type: "table",
      caption: "The nine sections, and what leaving each one blank does to your quote",
      headers: ["#", "Section", "The question it answers for the estimator", "Cost of leaving it blank"],
      rows: [
        ["1", "Job statement", "What is this thing for?", "The estimator invents a product, and it is always bigger than yours"],
        ["2", "Critical user journey", "How many screens are we designing and building?", "Screen count guessed high, design and QA hours padded to match"],
        ["3", "Must / Later / Never", "What is actually in v1?", "Everything you mentioned anywhere gets priced into v1"],
        ["4", "Data and integrations", "What systems do we have to talk to, and do you have access?", "The single largest source of 2-3x spread between quotes"],
        ["5", "Roles and permissions", "How many permission paths do we build and test?", "An auth and access model priced for the worst case"],
        ["6", "Admin and ops surface", "Who fixes a bad order at 9pm without an engineer?", "Either silently dropped and billed later, or padded now"],
        ["7", "Non-functional requirements", "What uptime, load, and law apply?", "Compliance and residency work discovered mid-build, as a change order"],
        ["8", "Launch criteria", "How do both sides know it is done?", "Open-ended QA, a drifting date, and a disputed final invoice"],
        ["9", "Budget band and deadline", "What can we responsibly build for you?", "Defensive pricing against the most expensive reading of your words"],
      ],
    },
    {
      type: "callout",
      variant: "info",
      title: "Four pages beats forty",
      text: "A tight four-page scope gets quoted faster and closer than a 40-page PRD. Long documents usually mean you are specifying a v1 product rather than an MVP, and they bury the four or five facts that actually move the price. If your document is long because you have a lot of features, the problem is the features, not the document.",
    },

    { type: "h2", text: "Section 1: The One-Sentence Job Statement" },
    {
      type: "p",
      text: "Write one sentence in this shape: *after launch, a [specific user] can [do a specific thing] so that [outcome], instead of [what they do today]*. That single sentence is the boundary of the build. Everything in the rest of the document either serves it or gets moved to phase two.",
    },
    {
      type: "p",
      text: "The test is whether the sentence rules anything out. \"A platform for property managers\" rules out nothing, so an estimator has to price a platform. \"After launch, a property manager can collect a signed renewal from a tenant by text message, instead of printing and scanning it\" rules out roughly ninety percent of what a property platform could contain — and that ninety percent is the part you were about to pay for by accident.",
    },
    {
      type: "ul",
      items: [
        "**Too broad:** \"An app that helps small businesses manage their finances.\" Prices as an accounting product.",
        "**Usable:** \"After launch, a freelance designer can turn a signed proposal into an invoice with two taps, instead of retyping it into a spreadsheet.\"",
        "**Too broad:** \"A marketplace connecting tutors and students.\" Prices as a two-sided marketplace with payouts, ratings and dispute handling.",
        "**Usable:** \"After launch, a parent can book and pay for a single trial lesson with a tutor they were already introduced to, instead of arranging it over WhatsApp and bank transfer.\"",
      ],
    },

    { type: "h2", text: "Section 2: The Single Critical User Journey, Written Screen by Screen" },
    {
      type: "p",
      text: "List the screens one user passes through to get the outcome in your job statement, in order, with one line each on what they see and what they can do. Stop at the moment the outcome happens. That numbered list is what design and front-end hours are estimated from, and it is the difference between \"probably eight to fourteen screens\" and \"nine screens.\"",
    },
    {
      type: "p",
      text: "Write it as a user, not as a developer. You are not describing components or endpoints. You are describing what someone looking at their phone sees next. If you cannot write the journey without inventing a second type of user halfway through, that is a finding: you have two journeys, and MVP scoping means picking one.",
    },
    {
      type: "ol",
      items: [
        "**Landing** — visitor sees what the product does and one price. Can sign up with email or Google.",
        "**Onboarding, one step** — new user enters business name and picks a currency. Nothing else is required to continue.",
        "**Empty dashboard** — user sees a single prompt: create your first proposal.",
        "**Proposal builder** — user enters client name, line items, total. Can save a draft or send.",
        "**Send confirmation** — user sees the link that was emailed to their client, and can copy it.",
        "**Client view (public link, no login)** — client sees the proposal and can accept it.",
        "**Accepted state** — user gets an email and sees the proposal marked accepted with a date. *Outcome reached — stop here.*",
      ],
    },
    {
      type: "p",
      text: "Seven screens, one role, one public page. An estimator can price that in an afternoon. Compare that to \"a proposal and invoicing tool for freelancers,\" which could be seven screens or seventy, and you can see where the range in your last quote came from.",
    },

    { type: "h2", text: "Section 3: The Feature List, Split Into Must-Have, Later, and Explicitly Never" },
    {
      type: "p",
      text: "Split every feature you have thought of into three columns — Must, Later, and Never — and make Never a real column with real entries. Anything mentioned in a brief without a column gets priced, because the estimator has no way to know you were thinking out loud.",
    },
    {
      type: "p",
      text: "The Never column is the one founders skip, and it is the one that saves the most money. Writing \"no in-app chat, ever — we use email\" removes an entire subsystem from the estimator's mental model along with its notification infrastructure, moderation questions and mobile push. Writing nothing leaves it hovering as a maybe, and maybes get padded.",
    },
    {
      type: "ul",
      items: [
        "**Must** — the product is broken, unusable, or illegal without it. If you are not sure, it is not a Must.",
        "**Later** — you want it, you are not paying for it now, and you are stating it so nobody prices it into v1. Listing it also tells a good agency to avoid architectural choices that would make it painful later.",
        "**Never** — a decision, not an omission. \"No native mobile app in year one, responsive web only.\" \"No multi-currency.\" \"No white-labeling.\"",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Put a number on Must",
      text: "Cap the Must column at eight items before you write it, then fill it. A cap forces the trade-off conversation to happen inside your own head, where it is free, rather than in a change order three weeks into the build, where it is not.",
    },

    { type: "h2", text: "Section 4: Data and Third-Party Integrations — the Number One Cause of Quote Blowout" },
    {
      type: "p",
      text: "List every external system the product must read from or write to, and for each one say whether you already have credentials or sandbox access. Integrations are the largest single driver of variance between quotes, because the gap between a documented modern API and a nightly CSV drop from a legacy ERP is not 20% of effort — it is an order of magnitude.",
    },
    {
      type: "p",
      text: "The second half of that sentence matters more than founders expect. \"We will integrate with their system\" is not scope until somebody confirms the system has an API, that access can be granted, and how long the vendor takes to grant it. Several categories of integration are gated by a vendor review that takes weeks of calendar time regardless of how fast anyone codes. If that review has not started when the build starts, it becomes the critical path.",
    },
    {
      type: "table",
      caption:
        "Indicative build effort for common MVP integrations, for a small senior team, as of 2026. Engineering days, not vendor fees — treat as a planning range, not a quote.",
      headers: ["Integration", "Typical MVP effort", "What turns it into weeks"],
      rows: [
        ["Card payments, one-off checkout", "1-2 days", "Split payouts, marketplace flows, seller identity verification"],
        ["Subscriptions with plan changes", "3-6 days", "Proration, failed-payment recovery, mid-cycle upgrades, sales tax"],
        ["Transactional email", "0.5-1 day", "Multi-language templates, deliverability warm-up on a brand-new domain"],
        ["SMS or WhatsApp notifications", "1-3 days", "Carrier and template registration — calendar time you cannot compress"],
        ["Google or Microsoft social sign-in", "0.5-1 day", "Enterprise SSO with SAML or SCIM, directory sync, per-tenant config"],
        ["Two-way calendar sync", "3-8 days", "Recurring events, timezone edge cases, conflict and deletion handling"],
        ["A documented REST API from a modern SaaS", "2-5 days", "Rate limits, a sandbox you do not have yet, partner approval queues"],
        ["A legacy ERP, or an SFTP drop of CSVs", "5-15 days", "Undocumented field meanings, nightly batch windows, no test environment"],
        ["Bank or accounting data aggregation", "5-15 days", "Vendor review before production access — often weeks of waiting"],
        ["Document OCR or LLM extraction", "3-10 days", "An accuracy bar. \"95% correct\" is a research project, not a sprint"],
      ],
    },
    {
      type: "p",
      text: "For each integration, four lines are enough. Get them down and you have removed most of the guesswork from your quote.",
    },
    {
      type: "ul",
      items: [
        "**System and direction** — do we read from it, write to it, or both?",
        "**Access status** — do you have API credentials and a sandbox today, are you applying, or have you not asked?",
        "**Volume** — dozens of records, or millions? This is the difference between a script and a pipeline.",
        "**Owner** — who on your side can get an answer out of that vendor when it stalls? Name a person.",
      ],
    },
    {
      type: "p",
      text: "Also describe data you already have and want to bring with you. \"About 4,000 customer records in a Google Sheet\" is a day. \"Twelve years of records in an on-premise system with no export\" is a project of its own, and it deserves its own line in the quote. This is the kind of work that sits underneath most of the platforms on our [portfolio](/portfolio) — a pricing tool or a logistics dashboard is usually 30% product and 70% getting somebody else's data to behave.",
    },

    { type: "h2", text: "Sections 5 and 6: Roles, Permissions, and the Admin Surface You Forgot" },
    {
      type: "p",
      text: "These two sections cover everyone who touches the product other than your main user, and together they are the most commonly underestimated part of an MVP. Two roles is an MVP. Five roles is a v2. And the internal screens your own team needs to run the thing are, in our experience estimating builds, somewhere between a quarter and a third of total hours.",
    },
    { type: "h3", text: "Section 5: Two roles is an MVP, five is a v2" },
    {
      type: "p",
      text: "Name each role, and for each one write what they can do and what they explicitly cannot. The cost driver is not the number of roles — it is the number of permission paths, which grows faster than the role count because every role has to be checked against every protected action, in the UI and again on the server, and then tested.",
    },
    {
      type: "ul",
      items: [
        "**One role** — everyone who logs in sees the same thing. Cheapest possible auth. Genuinely fine for a lot of first releases.",
        "**Two roles** — typically one customer and one operator. This is the right shape for most MVPs, and it is what our [Build tier](/pricing) assumes.",
        "**Three or more, with granular per-object permissions** — you are building a permissions system, and it wants its own design, its own test matrix and its own line in the budget. If your five roles are really one role with five job titles, collapse them.",
        "**Organizations, teams, or invite flows** — multi-tenancy is a separate decision with architecture consequences. Say so explicitly if you need it in v1, and say so explicitly if you do not.",
      ],
    },
    { type: "h3", text: "Section 6: The admin surface is the invisible 30%" },
    {
      type: "p",
      text: "Write down every action someone on your team must be able to take without calling an engineer. Refund an order. Fix a typo in a listing. Deactivate an abusive account. Re-send an email that bounced. Export a report for your accountant. None of these appear in a pitch deck, all of them appear in week two of real usage, and if they are not in the scope they get done by an engineer running database queries by hand, billed to you.",
    },
    {
      type: "stats",
      items: [
        {
          value: "25-35%",
          label: "of MVP build hours are internal-facing",
          note: "Admin, ops, and support screens. Our own estimating rule of thumb, not a published statistic.",
        },
        {
          value: "2",
          label: "roles is the right size for an MVP",
          note: "One customer, one operator. Each additional role multiplies the permission paths to build and test.",
        },
        {
          value: "4-12",
          label: "weeks to ship a genuine MVP",
          note: "Beyond three months you are building a v1 product, not testing a hypothesis.",
        },
      ],
    },
    {
      type: "p",
      text: "There is a cheap version of this section, and stating it is worth real money. If your team is five people and you trust them, a single protected admin page with a searchable table and an edit form covers most of it. Say that explicitly — \"one admin table, no admin roles, no audit log in v1\" — and you have just removed a week from the estimate rather than leaving the estimator to assume you want a proper back office.",
    },

    { type: "h2", text: "Section 7: The Non-Functional Requirements Founders Forget" },
    {
      type: "p",
      text: "Four numbers and two legal facts are enough here: expected users in month one and month six, the regions your users are in, whether any regulation applies, and the uptime you actually need. These rarely change a small MVP much, but when they do change it, they change it by a lot — and they are almost always discovered late, as a change order, rather than early, as a line item.",
    },
    {
      type: "ul",
      items: [
        "**Expected load** — \"200 users in month one, maybe 3,000 by month six\" tells an engineer they can use a single managed database and stop thinking about it. Skipping the number invites architecture you do not need yet.",
        "**Regions and data residency** — if EU personal data has to stay in the EU, that decides hosting regions and sometimes which vendors are usable at all. Decide it before the first deploy, because moving a live database between regions later is a migration project.",
        "**Regulation** — GDPR, HIPAA, PCI, or none. GDPR alone brings real, buildable requirements: deletion on request, export, a lawful basis for processing, and a cookie decision. They are not expensive if planned and genuinely annoying if retrofitted.",
        "**Retention and audit** — how long do you keep records, and does anyone need to see who changed what? An audit trail is cheap to design in and expensive to add later.",
        "**Uptime** — be honest. Most MVPs need \"back within an hour if it breaks on a Tuesday,\" not four nines. Asking for four nines buys you redundancy, failover testing and on-call, and it is one of the fastest ways to double an infrastructure line. Our [cloud infrastructure](/services/cloud-infrastructure) work only gets complicated when the availability target genuinely demands it.",
        "**Devices and browsers** — \"modern browsers and iOS/Android web\" is a scope. \"Must work on the warehouse team's Android 9 scanners\" is a different scope, and a materially more expensive one.",
      ],
    },

    { type: "h2", text: "Sections 8 and 9: Launch Criteria, Budget Band, and a Real Deadline" },
    {
      type: "p",
      text: "Section 8 defines done as a checklist both sides sign; Section 9 states the money and the date. Together they are the two sections that decide whether the project ends cleanly. Almost every disputed final invoice in this industry traces back to one of them being missing.",
    },
    { type: "h3", text: "Section 8: Launch criteria — how both sides agree the build is finished" },
    {
      type: "p",
      text: "Write done as a list of observable facts, not a feeling. \"The product is polished\" is not testable and will be argued about. \"A new user can sign up, create a proposal, send it, and the client can accept it, on iOS Safari and Chrome desktop, without an engineer present\" is testable on a Tuesday afternoon by someone who was not in the meetings.",
    },
    {
      type: "ul",
      items: [
        "The critical journey in Section 2 completes end to end, in production, on the listed devices.",
        "Both roles can do their listed actions and cannot do their forbidden ones.",
        "Every Must feature from Section 3 is live. Nothing from Later is.",
        "Named integrations are working against production credentials, not sandbox.",
        "The admin actions in Section 6 are usable by a named non-engineer on your team.",
        "Handover is complete: repository access, environment variables documented, a deploy that someone other than the original builder can run.",
      ],
    },
    { type: "h3", text: "Section 9: Your budget band and the deadline behind it" },
    {
      type: "p",
      text: "Give a band, not a number: \"$5,000 to $10,000 for a first release.\" Withholding it does not get you a better price. It gets you a defensive one, because the agency must now price against the most expensive reading of your scope and cannot tell you which two features to move to phase two in order to fit.",
    },
    {
      type: "p",
      text: "Do the same with the deadline, and include the reason. \"Mid-November\" is a preference. \"Mid-November, because we demo to an investor committee on the 21st and our current tool's contract ends on the 30th\" is a constraint an agency can plan around — and a good one will tell you which parts can slip past the demo without hurting you.",
    },
    {
      type: "callout",
      variant: "key",
      title: "The budget question, answered honestly",
      text: "Founders hide budgets because they expect the number to expand to fill the space. It can — that is a real risk with the wrong partner. The protection is not secrecy, it is a fixed quote against a written scope, with an explicit process for change requests. Ask for that, state your band, and you get the best of both: a firm price and an agency that tells you what to cut rather than quietly padding.",
    },

    { type: "h2", text: "The Cut Rules: Four Tests That Take a 40-Feature List Down to Six" },
    {
      type: "p",
      text: "Run your feature list through these four tests in order. A list of forty usually comes out somewhere between five and eight Musts, which is the correct size for something you intend to ship in eight weeks.",
    },
    {
      type: "steps",
      items: [
        {
          title: "The one-journey test",
          text: "Cross out every feature that is not on the single journey from Section 2. If a feature serves a different journey, it is a different product, and it belongs in phase two. This test alone usually removes half the list.",
        },
        {
          title: "The manual test",
          text: "For each survivor, ask whether you could do it by hand for your first fifty users. Matching, moderation, onboarding, reporting, invoicing and refunds nearly always can be. A human with a spreadsheet costs nothing to change when you learn you were wrong; a built feature costs thousands.",
        },
        {
          title: "The learning test",
          text: "Ask what shipping it teaches you. If the answer is not a sentence about user behavior, it is decoration. Dark mode, avatar uploads, notification preference panels, and in-app chat rarely survive this one, and no early user has ever churned over any of them.",
        },
        {
          title: "The regret test",
          text: "Ask what breaks on launch day if it is missing. If nothing breaks and nobody leaves, it is a Later. If the product is unusable, unsellable, or illegal without it, it is a Must. This is the only test that can promote something back up.",
        },
      ],
    },
    {
      type: "p",
      text: "The features that survive all four are your build. The ones that died in test two are your ops process for the first few months, and that is a feature of the plan, not a compromise — the manual version teaches you what the automated version should actually do.",
    },

    { type: "h2", text: "Validate First: Three Cheap Tests That Kill a Bad MVP in a Week" },
    {
      type: "p",
      text: "If you cannot name ten specific people who have told you, unprompted, that they have this problem, do not write a scope document yet. Three tests, run in about a week for the cost of a domain and your own time, will tell you what a three-month build would tell you for tens of thousands of dollars.",
    },
    {
      type: "ol",
      items: [
        "**A landing page with a real price and a real button.** Not \"join the waitlist\" — a price and a Buy or Book button, with an honest \"we are onboarding in batches\" screen behind it. Waitlist signups measure politeness. Someone reaching for a card measures demand.",
        "**Ten problem interviews, not pitch calls.** Ask what they did the last time they had this problem and what it cost them. Do not describe your product until the end. If nobody has a workaround, nobody has the problem badly enough to pay.",
        "**A concierge run.** Deliver the outcome by hand for five customers using email, a spreadsheet and your own labor. It is unglamorous, it does not scale, and it will teach you which three of your forty features matter — usually not the three you expected.",
      ],
    },
    {
      type: "p",
      text: "We have ended discovery calls by telling a founder the right next step was a landing page and ten conversations rather than a build. That costs us the project this quarter and it is still the correct advice, because an MVP built on an unvalidated assumption is not a cheap experiment — it is an expensive one with a nicer interface. If you are at that stage, [talk to us anyway](/contact); a thirty-minute conversation about what to test is free and occasionally saves you $7,000.",
    },

    { type: "h2", text: "Scope Size vs Price Band: What $1,900, $6,900, and a Scale Quote Actually Buy" },
    {
      type: "p",
      text: "Our published prices are Launch from $1,900, Build from $6,900, and Scale quoted to scope — and the useful thing about publishing them is that you can map your own scope document onto a band before you ever send it. Read down the first column, find the row that matches what you just wrote, and you will know whether your document is asking for a $1,900 build or a $25,000 one.",
    },
    {
      type: "table",
      caption: "Mapping your scope document to a price band. Solyio prices are current published starting prices; timelines are typical, not guaranteed.",
      headers: ["What your scope document says", "Band", "What it buys", "Realistic window"],
      rows: [
        [
          "No validated demand yet, no named users, no journey you can write down",
          "$0 and a week of your time",
          "Landing page, ten interviews, a manual concierge version delivered by hand",
          "1-2 weeks",
        ],
        [
          "One journey, one role, up to five screens, no custom backend logic",
          "Launch, from $1,900",
          "Responsive site or thin MVP, up to 5 pages or screens, contact form and basic integrations, SEO-ready foundation, 2 weeks of post-launch support",
          "2-4 weeks",
        ],
        [
          "One journey, two roles, real backend and database, one integration, a basic admin screen",
          "Build, from $6,900",
          "Custom web or mobile app, tailored design system, backend/API and database, cloud deploy and CI/CD, one AI automation or integration, analytics, 30 days of post-launch support",
          "6-12 weeks",
        ],
        [
          "Three-plus roles with granular permissions, several integrations, compliance obligations, or web plus native mobile",
          "Scale, quoted to scope",
          "Multi-platform engineering with a dedicated cross-functional team, advanced automation, cloud architecture and security hardening, priority SLA, quarterly roadmap",
          "12 weeks and up, usually phased",
        ],
      ],
    },
    {
      type: "p",
      text: "Two things to notice. First, the jump from Launch to Build is not about screen count — it is about whether there is a real backend with its own data model behind the screens. Second, almost everything that pushes a project into Scale appears in Sections 4, 5 and 7 of your document, not Section 3. It is integrations, roles and regulation that move you up a band, not features. You can see the full tier breakdown on [our pricing page](/pricing), and the shapes those builds take on the [web](/services/web-development) and [mobile](/services/mobile-development) service pages.",
    },
    {
      type: "p",
      text: "And the honest case against us: if your scope document says you need four full-time engineers embedded for a year, an agency of any size is the wrong structure and you should be hiring. If your document describes something a no-code tool does natively — a form, a scheduler, a simple internal database — build it there first and come back when you hit its ceiling. If you are a funded team with an existing product and an in-house engineering lead, you usually want staff augmentation, not a fixed-scope project. We are a good fit for a well-defined first release, a rebuild of something that has outgrown its tooling, or a specific capability like [AI automation](/services/ai-automation) bolted onto a product that already works. We are a poor fit for open-ended exploration with no journey written down.",
    },

    { type: "h2", text: "Red Flags in Your Own Brief" },
    {
      type: "p",
      text: "Certain phrases reliably force an agency to pad a quote, because each one hides a subsystem. If any of these appear in your document, replace them before you send it — every substitution below typically takes real money off the number you get back.",
    },
    {
      type: "ul",
      items: [
        "**\"Like Uber, but for X.\"** Reads as: two-sided onboarding, real-time matching, live location, payouts, ratings, and dispute handling. Replace with the single journey for one side.",
        "**\"A simple dashboard.\"** *Simple* is doing enormous work in that sentence. Name the four numbers on it and where each comes from.",
        "**\"A basic admin panel.\"** Name the five actions your team must be able to take. \"Basic\" ranges from one table to a back-office product.",
        "**\"It needs to scale.\"** Replace with your month-one and month-six user numbers. Everything scales to 3,000 users; the question is what you are actually paying to prepare for.",
        "**\"AI-powered.\"** Name the input, the output, and the accuracy you would accept. \"Summarizes an inbound email into five fields, and a human checks it\" is buildable. \"Uses AI to understand our customers\" is not scope.",
        "**\"Just like [competitor], but better.\"** Nobody can see their backend, their roles, or their integrations. Their product is five years of accumulated v1s and you want the first one.",
        "**\"We'll figure out the details during the build.\"** True for design details, expensive for integrations and roles. The details you defer are exactly the ones being priced defensively right now.",
        "**A \"nice to have\" list with no owner.** Move each item to Later or Never. Unassigned nice-to-haves get priced as maybes.",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "The marketplace trap",
      text: "\"Like Uber, but for X\" is the single most expensive sentence a founder can write, because a marketplace is two products plus a payments layer plus a trust layer, and it is worthless until both sides show up. Nearly every successful marketplace started by manually serving one side. If your scope document describes a marketplace, the highest-value edit you can make is deciding which side you serve first, by hand, for the first fifty users.",
    },

    { type: "h2", text: "How to Send the Same Doc to Three Agencies and Compare Apples to Apples" },
    {
      type: "p",
      text: "Send the identical document to all three on the same day, with no verbal additions to one and not the others, and ask each for the same six things back. The comparison that matters is not the bottom-line number — it is the assumptions each agency had to make, because those tell you who actually read it.",
    },
    {
      type: "ol",
      items: [
        "**Send the same artifact.** Any extra context given verbally to one agency invalidates the comparison and usually produces the lowest quote, for the wrong reason.",
        "**Ask for the quote broken down by your nine sections,** plus separate lines for admin tooling and QA. A single lump number cannot be compared to anything.",
        "**Ask each one to list their assumptions.** This is the most informative page you will receive. Three assumption lists side by side will show you exactly which parts of your document were still ambiguous.",
        "**Ask what is explicitly excluded.** A quote that excludes nothing has not been thought about.",
        "**Ask how change requests work.** Hourly ad-hoc changes and a defined change-request process produce very different final invoices from the same starting quote.",
        "**Ask who is actually writing the code** and whether that changes after the contract is signed.",
        "**Compare on assumptions, exclusions and change process first.** Only then compare on price. The cheapest quote is frequently the one that assumed the least work, and you will pay the difference later.",
      ],
    },
    {
      type: "p",
      text: "If the three quotes still vary by more than about 30%, the variance is almost always in Section 4 or Section 6 — integrations or the admin surface. Go back, tighten those two sections, and re-send. It is faster than negotiating.",
    },

    { type: "h2", text: "Copy-Paste MVP Scope Template" },
    {
      type: "p",
      text: "Paste this into a document, fill in the brackets, and delete nothing — an empty section is information too, and writing \"none\" under integrations is a decision an estimator can price. Four pages is the target.",
    },
    {
      type: "code",
      language: "markdown",
      filename: "mvp-scope.md",
      code: `# MVP Scope — [Product name]
Prepared by: [name]          Date: [date]
Budget band: [$X - $Y]       Hard deadline and why: [date, reason]

## 1. Job statement
After launch, a [specific user] can [do a specific thing]
so that [outcome], instead of [what they do today].

## 2. The critical user journey
1. [Screen] — user sees ..., can ...
2. [Screen] — user sees ..., can ...
3. ...
(Stop at the screen where the outcome in section 1 happens.)
Devices this must work on: [...]

## 3. Features
MUST — v1 is broken, unusable or illegal without it (cap: 8)
- ...
LATER — wanted, not paid for now, listed so nobody prices it
- ...
NEVER — decided against on purpose
- ...

## 4. Data and integrations
System | In / Out / Both | Credentials or sandbox today? | Owner
------ | --------------- | ----------------------------- | -----
[...]  | [...]           | yes / no / applying           | [name]

Existing data to migrate: [how many records, what format, where it lives]
Volume expected: [records per day or month]

## 5. Roles and permissions
Role A — [name]: can [...]. Cannot [...].
Role B — [name]: can [...]. Cannot [...].
(More than three? Mark the extras LATER.)
Teams / organizations / invites needed in v1? [yes / no]

## 6. Admin and ops surface
Actions our team must take without an engineer:
- [...]
Who handles support, and in which tool? [...]
Audit log needed in v1? [yes / no]

## 7. Non-functional
Users, month 1 / month 6: [n] / [n]
Regions and data residency: [...]
Regulation that applies: [GDPR / HIPAA / PCI / none]
Uptime actually required: [...]
Browsers and devices: [...]
Languages and currencies: [...]

## 8. Launch criteria — we are done when
- [ ] The section 2 journey completes end to end in production
- [ ] Both roles can do their listed actions, and not the forbidden ones
- [ ] Every MUST is live; nothing from LATER is
- [ ] Integrations work on production credentials
- [ ] [name] can perform every section 6 admin action unaided
- [ ] Handover done: repo access, env vars documented, deploy runnable by us

## 9. Commercials
Budget band: [...]
Deadline and the real reason behind it: [...]
Decision maker: [name] — who signs, and who can say no
Review cadence during the build: [weekly demo / other]
`,
    },
    {
      type: "p",
      text: "If you finish the template and find you cannot answer Sections 4, 5 or 7, that is not a failure of the template — it is the finding. Those three are where the money is, and an hour spent getting answers to them is worth more than a week of rewriting Section 1.",
    },

    {
      type: "cta",
      title: "Send us the filled-in template",
      text: "We will read it, send back a written list of the assumptions we had to make, and give you a fixed price against it — or tell you it is a phase-two scope and what to cut. A 30-minute call is enough to get there.",
      buttonLabel: "Book a scoping call",
      href: "/book",
    },
  ],
  faqs: [
    {
      q: "What should an MVP scope document include?",
      a: "Nine sections: a one-sentence job statement, the single critical user journey written as screens, a must/later/never feature split, every third-party integration and data source with its access status, user roles and permissions, the admin and ops surface, non-functional requirements like load and regulation, launch criteria, and your real budget band and deadline. Nine is enough — anything longer usually means you are specifying a v1 product rather than an MVP. Agencies quote faster and tighter from four tight pages than from a forty-page PRD.",
    },
    {
      q: "Do I need a technical spec before contacting a development agency?",
      a: "No. You need a product scope, not a technical spec. Describing what users do, what the system must connect to, and how you will know it is finished is your job; choosing the database, framework, hosting and architecture is the agency's. Writing a technical spec you are not qualified to write is the fastest way to get accurately quoted for the wrong build, and a good agency will have to unpick it before it can quote anything.",
    },
    {
      q: "Should I tell a dev agency my budget?",
      a: "Yes — give a band rather than a single number, such as \"$5,000 to $10,000 for a first release.\" Without it an agency has to price defensively against the worst-case interpretation of your scope, which usually produces a higher quote than being open would have. A stated band also lets a good partner tell you immediately which two or three features have to move to phase two in order to fit, which is the conversation you actually want. Protect yourself with a fixed quote against a written scope and a defined change-request process, not with secrecy.",
    },
    {
      q: "How long should an MVP take to build?",
      a: "A genuine MVP ships in 4 to 12 weeks. If your scope implies more than three months of build time, you have a v1 product rather than an MVP, and you should cut until one core user journey works end to end. Longer timelines also compound risk: markets, funding, and your own assumptions all move while you are still in development, and every week before launch is a week you are not learning anything from real users.",
    },
    {
      q: "Why do quotes for the same MVP vary by 3x between agencies?",
      a: "Almost always because the brief left integrations, admin tooling, user roles and launch criteria undefined, so each agency guessed differently. Agencies that assume the heavier reading quote high; those that assume the lighter one quote low and recover the difference later through change orders. A complete scope document typically collapses that variance to roughly 20-30%. If three quotes still differ by more than a third after you have sent a full document, the ambiguity is nearly always in the integrations section or the admin surface.",
    },
    {
      q: "How do I know if I should validate my idea before building anything?",
      a: "If you cannot name ten specific people who have told you unprompted that they have this problem, validate first. A landing page with a real price and a real button, ten problem interviews about what they did the last time they hit this problem, or a manually delivered version of the service for five customers will tell you in a week what a three-month build would tell you for tens of thousands of dollars. Validation is not a delay — it is the cheapest part of the scope, and it usually rewrites the feature list.",
    },
  ],
}
