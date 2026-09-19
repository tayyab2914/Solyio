import type { Post } from "../types"

export const post: Post = {
  slug: "fixed-price-vs-time-and-materials-vs-retainer",
  title: "Fixed Price vs Time and Materials vs Retainer: Which Software Contract Should You Sign?",
  seoTitle: "Fixed Price vs T&M vs Retainer: Which to Sign",
  description:
    "Fixed price, time and materials, or retainer: who carries the risk in each software contract, the clauses that decide your outcome, and how to compare quotes.",
  excerpt:
    "The contract model decides who pays when scope moves. Here is how each one fails, the nine clauses that matter, and the AI-era terms most templates still miss.",
  category: "founders",
  tags: ["contracts", "pricing models", "hiring an agency", "statement of work", "ip ownership"],
  author: "solyio",
  publishedAt: "2026-08-13",
  eyebrow: "For Founders",
  primaryKeyword: "fixed price vs time and materials software development",
  keyTakeaways: [
    "Choose fixed price when scope can be written down precisely, time and materials with a not-to-exceed cap for genuinely exploratory work, and a retainer only after launch for ongoing maintenance and improvements.",
    "A fixed price includes a contingency for the vendor's risk, commonly somewhere around 15-35% of the estimate, so you pay a premium in exchange for cost certainty.",
    "Time and materials is only safe with three controls: a not-to-exceed ceiling, a weekly burn report, and a written scope ledger recording every change.",
    "IP ownership should transfer to you on full payment of the fees for custom work, and the contract should list deliverables as repository, infrastructure, credentials and documentation — not just \"the app\".",
    "Contracts written in 2026 should also cover who owns prompts and evaluation sets, how AI model costs are billed, and whether your data may be used to improve the vendor's own products.",
  ],
  blocks: [
    {
      type: "callout",
      variant: "info",
      title: "Not legal advice",
      text: "This is a practical guide from the vendor side of the table. Have a lawyer in your jurisdiction review any contract before you sign it.",
    },
    { type: "h2", text: "The straight answer" },
    {
      type: "p",
      text: "Use **fixed price** when the scope can be written down precisely — which, with a proper discovery phase, covers most projects if they are broken into phases. Use **time and materials (T&M)** with a cap for work you cannot yet define. Use a **retainer** after launch, for maintenance and a steady flow of improvements.",
    },
    {
      type: "p",
      text: "The model matters because it decides who pays when reality differs from the plan. Everything else in the contract is about making that allocation fair and visible.",
    },

    { type: "h2", text: "The three models on one table" },
    {
      type: "p",
      text: "Each model moves risk to a different party and fails in a predictable way. Knowing the failure mode is more useful than knowing the definition.",
    },
    {
      type: "table",
      caption: "How the three common contract models compare.",
      headers: ["", "Fixed price", "Time and materials", "Retainer"],
      rows: [
        ["Who carries overrun risk", "Vendor, within agreed scope", "Client", "Shared, capped per month"],
        ["Cost of changing scope", "Change order required", "Just more hours", "Absorbed if within the monthly allowance"],
        ["Price premium", "Contingency built into the price", "None, but no ceiling by default", "Often a small discount for commitment"],
        ["Typical failure", "Arguments over what was in scope", "Budget drift with no clear endpoint", "Paying monthly for little delivered"],
        ["Cash flow for client", "Predictable, milestone-based", "Variable, usually monthly", "Flat monthly"],
        ["Best for", "Defined builds and phases", "Discovery, research, unclear problems", "Post-launch maintenance and iteration"],
      ],
    },

    { type: "h2", text: "The hidden premium inside a fixed price" },
    {
      type: "p",
      text: "Every fixed price contains a contingency: the amount the vendor adds to cover estimate uncertainty. You are buying insurance against overruns, and like all insurance it costs something even in the years nothing goes wrong.",
    },
    { type: "h3", text: "How agencies price uncertainty" },
    {
      type: "p",
      text: "Contingency commonly lands somewhere around **15-35% of the base estimate**, depending on how well the scope is defined and how many unknown integrations there are. The math is simple once written out.",
    },
    {
      type: "table",
      caption: "Illustrative contingency math on a $20,000 base estimate.",
      headers: ["Scope clarity", "Contingency", "Fixed price", "What drives it"],
      rows: [
        ["Detailed spec, known APIs", "~15%", "~$23,000", "Few unknowns remain"],
        ["Clear goals, some open questions", "~25%", "~$25,000", "One or two integrations untested"],
        ["Short brief, legacy systems", "~35%", "~$27,000", "Data quality and integrations unverified"],
      ],
    },
    { type: "h3", text: "When the premium is worth paying" },
    {
      type: "p",
      text: "Pay the premium when budget certainty matters more than the lowest possible cost — a board-approved budget, a grant, or a founder spending personal money. The cheapest way to reduce it is a short, paid discovery phase that turns unknowns into knowns before the main price is set.",
    },

    { type: "h2", text: "Where time and materials goes wrong, and how to cap it" },
    {
      type: "p",
      text: "T&M fails when nobody can say how much has been spent against what was delivered. It is safe with three controls in the contract.",
    },
    { type: "h3", text: "Not-to-exceed ceilings that still allow change" },
    {
      type: "p",
      text: "A not-to-exceed (NTE) ceiling caps spend for a defined scope. The vendor must stop and ask before crossing it. You keep T&M's flexibility, but the budget cannot drift silently.",
    },
    { type: "h3", text: "Sprint budgets and the weekly burn report" },
    {
      type: "p",
      text: "Require a weekly report with hours used, hours remaining against the NTE, what shipped, and what is at risk. If a vendor cannot produce this in fifteen minutes, they are not tracking it.",
    },
    { type: "h3", text: "The scope ledger" },
    {
      type: "p",
      text: "Keep one shared document listing every scope change: date, who requested it, estimated impact and approval. It ends most billing disputes before they start because the history is not a matter of memory.",
    },

    { type: "h2", text: "What a retainer should and should not include" },
    {
      type: "p",
      text: "A good retainer buys a defined capacity or set of outcomes each month, with response times you can hold the vendor to. A bad one buys vague availability.",
    },
    { type: "h3", text: "Hours versus outcomes" },
    {
      type: "p",
      text: "Hour-based retainers are simple to measure but reward slowness. Outcome-based retainers — for example, \"security patches applied within a week, up to N small changes a month\" — are harder to define but align better. Many teams combine a small base of guaranteed hours with named recurring outcomes.",
    },
    { type: "h3", text: "Rollover, expiry and the unused-hours trap" },
    {
      type: "p",
      text: "Unused hours that expire each month quietly raise your effective rate. Negotiate a limited rollover, such as one month, or a quarterly true-up.",
    },
    { type: "h3", text: "Response-time SLAs with consequences" },
    {
      type: "p",
      text: "Define severity levels and response times — for example, production down versus minor bug — and what happens when the vendor misses them, such as a service credit. An SLA without a consequence is a hope.",
    },
    { type: "h3", text: "Is your retainer a subscription to nothing?" },
    {
      type: "p",
      text: "Test it quarterly: list what the retainer delivered, estimate what it would have cost as separate small projects, and compare. If the retainer costs much more for months running, resize it or end it.",
    },

    { type: "h2", text: "The hybrid model we use" },
    {
      type: "p",
      text: "Our default is phased: **scope and quote the first phase at a fixed price, then fix-price later phases or move to a retainer after launch.** It gives you cost certainty on the part you can define and avoids pricing guesswork into the parts you cannot.",
    },
    {
      type: "p",
      text: "Solyio projects are quoted at a fixed price before work begins, with a deposit and milestone payments tied to defined stages. Public starting points are **Launch from $1,900** and **Build from $6,900**, with **Scale** quoted to scope — see [pricing](/pricing). Our [Terms of Service](/terms-of-service) and [refund policy](/refund-policy) describe how deposits, milestones and cancellations work.",
    },

    { type: "h2", text: "The nine clauses that decide your outcome" },
    {
      type: "p",
      text: "Pitch decks do not decide how a project ends; these nine clauses do. Read them before you read anything else in the agreement.",
    },
    {
      type: "table",
      caption: "What to look for in each clause. Wording varies; the intent is what matters.",
      headers: ["Clause", "What good looks like", "Red flag"],
      rows: [
        ["IP assignment", "Ownership of custom deliverables transfers on full payment; any pre-existing vendor components are licensed to you", "Vendor keeps ownership, or rights are unclear"],
        ["Third-party and open-source licenses", "Vendor warrants licenses are compatible with your use and lists major dependencies", "No mention of licenses at all"],
        ["Deliverables definition", "Repository, deployed infrastructure, credentials and documentation", "\"The website\" or \"the app\""],
        ["Acceptance criteria", "Written criteria and a fixed test window, e.g. 5-10 business days", "Acceptance at the vendor's discretion"],
        ["Change orders", "Written process with price and timeline impact before work starts", "Changes billed after the fact"],
        ["Termination for convenience", "Either side can exit; you pay for work done plus a fair notice fee", "No exit, or you forfeit everything paid"],
        ["Credential custody", "Accounts in your name from day one; vendor has delegated access", "Vendor-owned cloud, domain or app store accounts"],
        ["Warranty", "Defined period to fix defects against the agreed spec at no charge", "No warranty, or one that excludes most bugs"],
        ["Liability and AI-generated code", "Reasonable mutual cap; clear statements on AI-assisted code and licensing", "Unlimited liability on one side, or silence on AI"],
      ],
    },

    { type: "h3", text: "IP assignment: on payment, not on signature" },
    {
      type: "p",
      text: "Transfer on full payment is standard and fair: the vendor is protected against non-payment, and you own the custom work once you have paid for it. What you should reject is ambiguity. The clause should name what transfers, and separately state how any vendor-owned frameworks or components are licensed to you.",
    },
    { type: "h3", text: "Credential custody and when escrow is real" },
    {
      type: "p",
      text: "Source code escrow is often theater on small projects: if the repository, cloud account and domain are in your name from day one, you already have what escrow promises. Escrow earns its cost when you depend on software the vendor hosts and controls.",
    },
    { type: "h3", text: "Termination and a fair kill fee" },
    {
      type: "p",
      text: "A fair termination clause lets you stop, pay for work completed, and receive everything produced so far. A kill fee equal to a short notice period, commonly a few weeks of planned work, compensates the vendor for reserved capacity without trapping you.",
    },

    { type: "h2", text: "Payment schedules compared" },
    {
      type: "p",
      text: "Milestone-based schedules protect both sides best, because payment follows visible progress.",
    },
    {
      type: "table",
      caption: "Common payment structures for a fixed-price project.",
      headers: ["Schedule", "How it works", "Risk to client", "Risk to vendor"],
      rows: [
        ["50 / 50", "Half up front, half on completion", "High — half paid before seeing anything", "High — final half withheld over small issues"],
        ["30 / 40 / 30", "Deposit, mid-point, completion", "Moderate", "Moderate"],
        ["Deposit + milestones", "Deposit, then payment per delivered milestone", "Low — pay as value appears", "Low — steady cash flow"],
        ["Monthly in arrears (T&M)", "Invoice hours worked each month", "Budget drift without an NTE", "Delayed payment"],
      ],
    },
    { type: "h3", text: "Why 50/50 is a red flag in both directions" },
    {
      type: "p",
      text: "A 50/50 split puts too much at stake at two single moments. Clients pay heavily before any evidence of progress; vendors then carry the whole second half against a subjective \"done\". Smaller, more frequent milestones remove both problems.",
    },

    { type: "h2", text: "AI-era clauses most older templates miss" },
    {
      type: "p",
      text: "Contract templates written before AI-heavy development usually say nothing about prompts, models or AI-generated code. Add four clauses.",
    },
    {
      type: "ol",
      items: [
        "**Prompts, evaluation sets and fine-tunes.** State that prompts, evaluation data and any fine-tuned models built for your project are deliverables you own on payment.",
        "**Model vendor costs.** Say whether API costs are passed through at cost, marked up, or capped, and whose account the keys live in. Your own account is best.",
        "**AI-assisted code.** Ask the vendor to confirm that all code, including AI-assisted code, is reviewed by their engineers and meets the license warranties in the contract.",
        "**Use of your data.** Prohibit the vendor from using your data or outputs to train or improve their own products or models without written consent.",
      ],
    },

    { type: "h2", text: "How to compare two quotes that are not comparable" },
    {
      type: "p",
      text: "Normalize both quotes to the same scope and the same worst case before comparing prices. Here is a worked example.",
    },
    {
      type: "table",
      caption: "Illustrative example. Quote A is fixed price; Quote B is T&M with a ceiling.",
      headers: ["Item", "Quote A (fixed)", "Quote B (T&M)"],
      rows: [
        ["Headline price", "$18,000", "Estimated $15,400-$20,900 (140-190 hours at $110)"],
        ["Data migration", "Excluded — add ~$3,000", "Included"],
        ["Revision rounds", "2 included", "Billed as hours"],
        ["Warranty", "30 days", "None stated — negotiate"],
        ["Worst case", "$21,000 plus approved change orders", "$22,000 not-to-exceed ceiling"],
        ["Normalized comparison", "~$21,000", "$15,400-$22,000"],
      ],
    },
    {
      type: "p",
      text: "After normalizing, the quotes are close. The decision now turns on how confident you are in the scope: confident, take A for certainty; unsure, take B for flexibility — but only with the ceiling in writing.",
    },

    { type: "h2", text: "Red flags in the contract, not the pitch" },
    {
      type: "ul",
      items: [
        "Deliverables described only as \"the website\" or \"the platform\".",
        "Cloud, domain or app store accounts registered to the vendor.",
        "No acceptance window, or acceptance at the vendor's sole discretion.",
        "No termination for convenience, or forfeiture of all fees paid.",
        "Silence on third-party licenses and AI-generated code.",
        "T&M with no ceiling and no reporting obligation.",
      ],
    },
    {
      type: "cta",
      title: "Want a fixed quote you can actually compare?",
      text: "Tell us what you are building. We will send a phased, fixed-price proposal with deliverables, milestones and assumptions spelled out.",
      buttonLabel: "Request a proposal",
      href: "/contact",
    },
  ],
  faqs: [
    {
      q: "Who owns the code — the agency or us?",
      a: "Normally you own the custom work once the project fees are paid in full. Agencies often keep ownership of pre-existing frameworks or components they reuse and license them to you. Make sure the contract names what transfers and how any retained components are licensed.",
    },
    {
      q: "Is a 50% upfront deposit normal?",
      a: "It happens, but a smaller deposit followed by milestone payments is safer for both sides. Large upfront payments put your money at risk before any progress is visible, and a large final payment puts the vendor at risk over subjective sign-off.",
    },
    {
      q: "Can I get a fixed price without a discovery phase?",
      a: "For small, well-understood projects, yes. For anything with unknown integrations or unclear requirements, a fixed price without discovery will either carry a large contingency or lead to change-order disputes. A short paid discovery phase usually saves money overall.",
    },
    {
      q: "What is a fair kill fee?",
      a: "Payment for all work completed plus a modest notice fee, commonly equal to a few weeks of planned work, to cover capacity the vendor reserved. You should receive everything produced up to the termination date.",
    },
    {
      q: "Do I need source code escrow on a $20,000 project?",
      a: "Usually not. If the repository, hosting account, domain and credentials are in your name from the start, you already hold what escrow would protect. Escrow matters more when you depend on software the vendor hosts and controls.",
    },
    {
      q: "What happens to my project if the agency goes out of business?",
      a: "If you own the accounts and have repository access, another team can take over with limited disruption. If the vendor controls the accounts, recovery can be slow and costly — which is why credential custody belongs in the contract, not in trust.",
    },
  ],
}
