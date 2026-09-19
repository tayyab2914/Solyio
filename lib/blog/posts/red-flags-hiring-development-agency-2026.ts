import type { Post } from "../types"

export const post: Post = {
  slug: "red-flags-hiring-development-agency-2026",
  title: "Red Flags When Hiring a Development Agency in 2026 (and the Green Flags That Matter More)",
  seoTitle: "Development Agency Red Flags: 2026 Vetting Guide",
  description:
    "Warning signs that a software agency will fail your project in 2026 — in sales, scoping, ownership, quality and AI-written code — and the questions that expose them.",
  excerpt:
    "Most bad agency engagements were visible before the contract was signed. Here is what to check at each stage, including how to tell whether AI-written code is actually being reviewed.",
  category: "founders",
  tags: ["hiring an agency", "vendor selection", "ai-generated code", "ip ownership", "due diligence"],
  author: "solyio",
  publishedAt: "2026-08-10",
  eyebrow: "For Founders",
  primaryKeyword: "red flags when hiring a development agency",
  keyTakeaways: [
    "The biggest red flag is a fixed price or confident timeline given from a short brief with no discovery, no written assumptions and no questions that challenge your feature list.",
    "You should own the code repository, cloud accounts, domain and app store listings from day one, with the agency given delegated access — never the other way around.",
    "In 2026 the new risk is AI-generated code that nobody on the team understands; ask how AI is used, who reviews every change, and whether tests run automatically on each pull request.",
    "Insist on meeting the engineers who will build your product, getting access to a working staging environment within the first two weeks, and speaking to at least two past clients without the agency on the call.",
    "Walk away from agencies that refuse repository access, cannot show automated tests or a CI pipeline, or hold your accounts in their own name.",
  ],
  blocks: [
    { type: "h2", text: "The four-minute filter before the first call" },
    {
      type: "p",
      text: "You can eliminate a surprising number of agencies before speaking to anyone. Spend four minutes checking whether their public evidence matches their claims.",
    },
    {
      type: "ul",
      items: [
        "**Case studies with specifics.** Look for named products, what was built and the stack — not only logos and adjectives.",
        "**Pricing signals.** Public starting prices, or at least a clear description of how they price, suggest a vendor comfortable with scrutiny.",
        "**Consistency.** If the site promises everything to everyone — any industry, any technology, any timeline — expect generic delivery.",
        "**Real contact details.** A named company, terms of service and a way to reach a person.",
      ],
    },

    { type: "h2", text: "Sales red flags" },
    {
      type: "p",
      text: "The sales stage reveals how an agency handles uncertainty. Agencies that promise speed and certainty before understanding the problem are usually managing the sale, not the project.",
    },
    {
      type: "table",
      caption: "What common sales lines usually mean, and what to ask instead.",
      headers: ["What you hear", "What it often means", "Ask this"],
      rows: [
        ["\"We can build that in two weeks.\"", "The scope has not been understood yet", "What would you leave out to hit that date?"],
        ["\"Everything is possible.\"", "No one is thinking about trade-offs", "What part of this would you advise us not to build?"],
        ["\"Our team is 200 engineers.\"", "Size is being sold instead of fit", "Who specifically would work on our project?"],
        ["\"We'll figure out details later.\"", "Details will become change orders", "Which assumptions is your price based on?"],
        ["\"Sign this week for the discount.\"", "Pressure replacing evaluation", "Can the price hold for two weeks while we check references?"],
      ],
    },

    { type: "h2", text: "Discovery red flags: no pushback on your feature list" },
    {
      type: "p",
      text: "An agency that accepts every feature you list is not thinking about your business. Good partners question priorities, suggest cutting scope for the first release, and ask how you will measure success.",
    },
    {
      type: "p",
      text: "Watch for the questions they ask. Questions about users, revenue, data and constraints are a good sign. Questions only about colors, pages and deadlines mean they are preparing to produce screens, not a product.",
    },

    { type: "h2", text: "The proposal test" },
    {
      type: "p",
      text: "A good proposal draws boundaries. It says what is included, what is excluded, which assumptions the price depends on, and how changes are handled. A proposal without those four things will be argued over later.",
    },
    {
      type: "ol",
      items: [
        "**Scope boundaries:** features and integrations listed explicitly, with exclusions.",
        "**Written assumptions:** for example, \"client provides API access by week one\" or \"data arrives in the documented format\".",
        "**Change process:** how a change is estimated, priced and approved before work starts.",
        "**Deliverables:** repository, deployed infrastructure, credentials and documentation — not just \"the app\".",
      ],
    },

    { type: "h2", text: "Pricing red flags" },
    {
      type: "p",
      text: "The most reliable pricing red flag is a **fixed price quoted from a one-paragraph brief**. Either the vendor has padded it heavily to cover unknowns, or they plan to recover the difference through change orders.",
    },
    {
      type: "ul",
      items: [
        "A price far below every other quote with no explanation of what was left out.",
        "No distinction between build cost and ongoing costs such as hosting, licenses and maintenance.",
        "Time and materials with no cap and no reporting commitment.",
        "Large payments due before any visible progress.",
      ],
    },

    { type: "h2", text: "The 2026 red flag: AI-generated code nobody understands" },
    {
      type: "p",
      text: "AI coding tools are now standard in professional development, and that is not a problem in itself. The red flag is **AI-generated code shipped without review**, which produces software that works in a demo and fails in ways no one on the team can explain.",
    },
    {
      type: "p",
      text: "The symptoms show up later: inconsistent patterns across the codebase, missing database migrations, permission checks that exist on some routes but not others, and engineers who cannot explain why a piece of code exists. By then you own it.",
    },

    { type: "h2", text: "Five questions about how an agency uses AI" },
    {
      type: "p",
      text: "Ask these directly. Good agencies answer them easily, because they have already had to decide.",
    },
    {
      type: "table",
      caption: "Questions to ask, with answers that pass and answers that should worry you.",
      headers: ["Question", "A passing answer", "A worrying answer"],
      rows: [
        ["How do you use AI tools in delivery?", "Specific: drafting code, tests and documentation, always reviewed", "\"AI builds most of it\" or a vague deflection"],
        ["Who reviews AI-assisted code before it merges?", "A named engineer reviews every pull request", "\"The AI is very accurate\""],
        ["Do tests run automatically on every change?", "Yes, in CI on each pull request", "\"We test manually before launch\""],
        ["Is any of our data or code sent to AI tools that train on it?", "Business tiers with training disabled; can name them", "\"I'm not sure\""],
        ["If the original developer leaves, can someone else maintain this?", "Yes: documentation, conventions and reviewed code", "\"They'll be available\""],
      ],
    },

    { type: "h2", text: "Ownership red flags" },
    {
      type: "p",
      text: "You should own every account your product depends on from the first day. The agency should have delegated access that you can revoke. If the vendor holds the accounts, the vendor effectively holds your product.",
    },
    {
      type: "table",
      caption: "Where each asset should live.",
      headers: ["Asset", "Should be owned by", "Red flag"],
      rows: [
        ["Code repository", "Your organization, agency invited as collaborators", "Repository in the agency's account, access \"at handover\""],
        ["Cloud hosting account", "Your company, billed to you", "Hosted in the agency's account with a markup"],
        ["Domain and DNS", "Your company", "Registered by the agency"],
        ["App store developer accounts", "Your company", "App published under the agency's developer account"],
        ["Third-party API keys", "Your accounts", "Keys created on the agency's accounts"],
      ],
    },

    { type: "h2", text: "Contract clauses to insist on" },
    {
      type: "p",
      text: "Three clauses prevent most ownership disputes. Have a lawyer review the agreement, but make sure these are present.",
    },
    {
      type: "ul",
      items: [
        "**IP transfer on payment.** Ownership of the custom work transfers to you when you have paid for it, with any pre-existing vendor components licensed to you in writing.",
        "**Repository access from day one.** Not \"on completion\" — from the start, so you can see progress and have a copy.",
        "**A defined exit handover.** What you receive if either side ends the engagement: code, credentials, documentation and a handover call.",
      ],
    },

    { type: "h2", text: "Team red flags" },
    {
      type: "p",
      text: "If you only ever meet a salesperson and a project manager, you have no evidence about the people who will actually write your code. Ask to meet the lead engineer before signing, and ask whether that person stays on the project.",
    },
    {
      type: "p",
      text: "Also ask how much of the work is subcontracted. Subcontracting is not automatically bad, but you should know who is doing the work and what agreements govern your code and data.",
    },

    { type: "h2", text: "Quality red flags" },
    {
      type: "p",
      text: "Four missing practices predict most quality problems: **no automated tests, no CI pipeline, no staging environment and no code review.** Ask to see each one on a current or recent project.",
    },
    {
      type: "ol",
      items: [
        "**No tests:** every change risks breaking something that used to work.",
        "**No CI pipeline:** tests and checks depend on someone remembering to run them.",
        "**No staging environment:** you see changes for the first time in production.",
        "**No code review:** one person's mistakes go straight into your product.",
      ],
    },

    { type: "h2", text: "Communication red flags" },
    {
      type: "p",
      text: "Weekly slide decks are not evidence of progress; a working staging URL is. Within the first two weeks you should be able to click on something real, even if it is rough.",
    },
    {
      type: "p",
      text: "Other warning signs: status updates that never mention risks, questions answered days later, and demos that are always \"almost ready.\"",
    },

    { type: "h2", text: "Reference checks that work" },
    {
      type: "p",
      text: "Ask for two past clients and speak to them without the agency present. These six questions surface more than \"were you happy?\"",
    },
    {
      type: "ol",
      items: [
        "What went wrong, and how did the agency handle it?",
        "How close did the final cost land to the original quote?",
        "Did you have repository and account access throughout?",
        "Were the engineers you met at the start the ones who built the product?",
        "Has anyone else worked on the code since, and what did they say about it?",
        "Would you hire them again for something more important?",
      ],
    },

    { type: "h2", text: "Green flags: what good looks like" },
    {
      type: "p",
      text: "Good agencies are recognizable by what they do early, not by what they promise.",
    },
    {
      type: "ul",
      items: [
        "**At proposal:** written scope, exclusions and assumptions; a phased plan; a clear change process.",
        "**At kickoff:** accounts created in your name; repository access granted; the lead engineer introduced.",
        "**By the end of week two:** a staging environment you can open, tests running in CI, and a short list of risks already identified.",
      ],
    },

    { type: "h2", text: "The red flag scorecard" },
    {
      type: "p",
      text: "Not every red flag is fatal. Use this scorecard to decide whether to walk away, negotiate or proceed.",
    },
    {
      type: "table",
      caption: "Decision guide for common findings during vetting.",
      headers: ["Finding", "Decision", "Why"],
      rows: [
        ["Refuses repository or account ownership for you", "Walk away", "You would not control your own product"],
        ["No tests, CI or code review on any project", "Walk away", "Quality depends entirely on luck"],
        ["Cannot explain how AI-assisted code is reviewed", "Walk away", "High risk of unmaintainable code"],
        ["Fixed price from a short brief with no assumptions", "Negotiate", "Ask for paid discovery or written assumptions"],
        ["Large upfront payment", "Negotiate", "Move to deposit plus milestones"],
        ["Will not let you meet engineers before signing", "Negotiate", "Make it a condition of signing"],
        ["Clear scope, your accounts, CI, references check out", "Proceed", "The fundamentals are in place"],
      ],
    },

    { type: "h2", text: "Already mid-project with the wrong agency?" },
    {
      type: "p",
      text: "Secure access before you do anything else, then assess the code, then decide whether to continue, repair or replace.",
    },
    {
      type: "steps",
      items: [
        { title: "Secure access quietly", text: "Confirm you have admin access to the repository, hosting, domain, app stores and key third-party services. Transfer ownership where you do not." },
        { title: "Get an independent code audit", text: "Have another team assess security, test coverage, architecture and whether the code matches what was invoiced." },
        { title: "Review the contract", text: "Check termination terms, payment obligations and what the agency must hand over." },
        { title: "Decide", text: "Continue with clear conditions, fix the worst issues with a new team, or rebuild the parts that cannot be saved." },
      ],
    },
    {
      type: "p",
      text: "If you need that audit, our [web development](/services/web-development) and [cyber security](/services/cyber-security) teams handle audits and takeovers, and our [portfolio](/portfolio) shows the kind of platforms we build and maintain.",
    },
    {
      type: "cta",
      title: "Want a second opinion before you sign?",
      text: "Send us the proposal you are considering. We will point out missing assumptions, ownership gaps and pricing risks — whether or not you end up working with us.",
      buttonLabel: "Book a free call",
      href: "/book",
    },
  ],
  faqs: [
    {
      q: "What is the biggest red flag when hiring a development agency?",
      a: "A confident fixed price or short timeline based on a brief conversation, with no written assumptions and no challenge to your feature list. It usually means the risk will come back to you as change orders or a rushed product.",
    },
    {
      q: "Who should own the code an agency writes for me?",
      a: "You should own the custom work once you have paid for it, and the repository should be in your organization's account from day one. Agencies often license pre-existing components they reuse; that is normal as long as it is written into the contract.",
    },
    {
      q: "How do I know if an agency is using AI to write my code?",
      a: "Ask directly. Most professional agencies use AI tools in some form. What matters is whether every change is reviewed by an engineer, whether tests run automatically in CI, and whether your code and data are only sent to tools that do not train on them.",
    },
    {
      q: "Is it a red flag if an agency won't let me speak to the developers?",
      a: "Before signing, yes. You are buying the work of specific people, and a short call with the lead engineer is a reasonable request. Make meeting the engineering lead a condition of signing.",
    },
    {
      q: "Should I ask for source code escrow?",
      a: "For most custom projects, repository access and accounts in your own name from day one are more useful than escrow. Escrow matters more when you rely on software the vendor hosts and controls.",
    },
    {
      q: "What should I do if I'm already mid-project with the wrong agency?",
      a: "First make sure you control the repository, hosting, domain and app store accounts. Then commission an independent code audit, review your contract's termination terms, and decide whether to continue with conditions, repair, or rebuild.",
    },
  ],
}
