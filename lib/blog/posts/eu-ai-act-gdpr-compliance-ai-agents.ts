import type { Post } from "../types"

export const post: Post = {
  slug: "eu-ai-act-gdpr-compliance-ai-agents",
  title:
    "EU AI Act and GDPR Compliance for AI Agents: What a 20-Person Company Actually Has to Do",
  seoTitle: "EU AI Act & GDPR for AI Agents: 2026 SMB Guide",
  description:
    "What the EU AI Act and GDPR really require when you deploy an AI agent in 2026: obligations by role and tier, post-Omnibus dates, vendor DPAs and real costs.",
  excerpt:
    "Most small companies running an AI agent are deployers of a minimal-risk system, and the paperwork that eats time is GDPR's, not the AI Act's. Role, tier, dates, vendor settings and hours — in one place.",
  category: "security",
  tags: ["eu ai act", "gdpr", "ai agents", "compliance", "data residency", "dpia"],
  author: "solyio-security",
  publishedAt: "2026-08-06",
  eyebrow: "EU Compliance",
  primaryKeyword: "eu ai act compliance for small business",
  keyTakeaways: [
    "Most small companies running an AI agent are **deployers** of a **minimal- or limited-risk** system, and their entire AI Act obligation is three things: avoid the prohibited practices, disclose that users are talking to an AI, and take measures supporting AI literacy for the staff who operate it.",
    "Regulation (EU) 2026/1744 — the AI omnibus, in force since 27 July 2026 — moved high-risk obligations for Annex III systems to 2 December 2027 and for Annex I embedded systems to 2 August 2028. Prohibitions, AI literacy, GPAI rules and Article 50 transparency were not delayed.",
    "You can put EU customer data into ChatGPT or Claude, on four conditions: a business or API tier, a signed DPA, training-on-your-data off, and retention plus a Chapter V transfer mechanism recorded in your ROPA. Personal consumer accounts fail all four.",
    "EU data residency costs far less than buyers expect — a regional-processing premium in the 0-20% range at list price across the major platforms as of 2026, with AWS Bedrock historically pricing EU regions at parity with US ones.",
    "Compliance work adds roughly 25-60 hours to a first EU agent deployment (DPIA, ROPA, DPA review, retention and redaction config, human-in-the-loop UI, notices) and 7-13 hours per additional agent after that.",
    "AI Act fines reach €35 million or 7% of global turnover for prohibited practices, but SMEs and startups are capped at the **lower** of the fixed sum and the percentage — and for a 20-person company the realistic exposure is a GDPR complaint or a failed procurement review, not an AI Act fine.",
  ],
  blocks: [
    { type: "h2", text: "What actually applies to you right now" },
    {
      type: "p",
      text: "If you are under 50 people, you bought or commissioned an AI agent, and you point it at support tickets, sales research, document drafting or internal search, you are a **deployer** of a **minimal-** or **limited-risk** AI system. Your AI Act obligations come down to three: stay away from the prohibited practices, tell people when they are interacting with an AI, and take reasonable measures so the staff operating the thing understand what it does. Everything else on your compliance list is GDPR, and GDPR applied to you long before anyone drafted the AI Act.",
    },
    {
      type: "p",
      text: "That answer is unpopular with two groups. Law firms sell readiness programs designed for enterprises running credit models. Vendors sell \"AI Act compliant\" platforms that mostly resell configuration switches you could have flipped yourself. Meanwhile the artifact that actually gets a German procurement team to sign is a two-page data sheet showing where the tokens go, how long they are kept, and who signed a data processing agreement.",
    },
    {
      type: "p",
      text: "This is the version of the briefing we give clients before an EU deployment. Dates are current as of August 2026. The AI Act text has moved twice in the past year, so verify anything date-sensitive against the Official Journal before you budget against it — and nothing here is legal advice.",
    },
    {
      type: "stats",
      items: [
        {
          value: "3",
          label: "AI Act duties for a typical SMB agent",
          note: "No prohibited use, Article 50 disclosure, Article 4 AI literacy",
        },
        {
          value: "2 Dec 2027",
          label: "New Annex III high-risk deadline",
          note: "Moved from 2 Aug 2026 by Regulation (EU) 2026/1744",
        },
        {
          value: "€20M / 4%",
          label: "GDPR ceiling — the law that realistically bites",
          note: "Article 83(5); €10M / 2% for the lesser categories",
        },
        {
          value: "25-60 hrs",
          label: "Compliance work on a first EU agent build",
          note: "Falls to 7-13 hours per agent after the first",
        },
      ],
    },

    { type: "h2", text: "Two separate laws doing two separate jobs" },
    {
      type: "p",
      text: "The AI Act regulates the *system*. GDPR regulates the *personal data flowing through it*. Different laws, different regulators, different triggers, different fines — and compliance with one tells you nothing about the other. An agent that summarizes your public product documentation is minimal-risk under the AI Act and nearly invisible to GDPR. An agent that reads inbound support tickets is still minimal-risk under the AI Act and a full GDPR processing activity with a lawful basis, a retention period, a processor chain and a transfer mechanism attached.",
    },
    { type: "h3", text: "The AI Act is product-safety law — it regulates the system" },
    {
      type: "p",
      text: "Read the AI Act as a CE-marking regime that happens to be about software. Obligations attach to two things: the **role** you play in putting the system on the EU market, and the **risk category of the use case** — never the sophistication of the model. A 2-billion-parameter classifier that screens job applicants carries vastly more obligation than a frontier model writing marketing copy. It is extraterritorial in the same way GDPR is: if you place an AI system on the EU market, or the output of your system is used in the EU, you are in scope regardless of where you are incorporated.",
    },
    { type: "h3", text: "GDPR is data law — it regulates the personal data going through it" },
    {
      type: "p",
      text: "GDPR does not care whether your system is AI. It cares that personal data is being processed, by whom, on what basis, for how long and where. The novelty an agent introduces is not legal, it is architectural: a single prompt can copy personal data into a model vendor's inference stack, an observability tool, a vector index, a cache and a log aggregator within 400 milliseconds, and three of those five are things nobody at your company has ever put in a records of processing activities entry.",
    },
    { type: "h3", text: "Which one bites an SMB first (almost always GDPR)" },
    {
      type: "p",
      text: "GDPR, and it is not close. Any customer, employee or competitor can file a complaint with a supervisory authority for free, and the authority has to respond. AI Act enforcement runs through national market surveillance authorities that in many member states are still being stood up and staffed, and their early attention is going to prohibited practices and large GPAI providers, not to a 20-person company with a support bot. The realistic 2026 risk for a small company is a subject access request it cannot answer because the agent's logs were never designed to be searchable by data subject.",
    },
    {
      type: "callout",
      variant: "info",
      title: "The one-line test",
      text: "Ask: *what is this system allowed to decide about a person?* If the honest answer is \"nothing — it drafts, retrieves, summarizes or routes,\" you are in minimal-risk territory and your work is GDPR paperwork. If the answer involves hiring, credit, education, benefits, pricing for an individual, or access to an essential service, stop and read the high-risk section twice.",
    },

    { type: "h2", text: "Are you a provider or a deployer? The role decision" },
    {
      type: "p",
      text: "You are a **deployer** if you use an AI system under your own authority. You are a **provider** if you develop one, or put your name or trademark on one, or substantially modify one already on the market, and then make it available in the EU. The overwhelming majority of small companies are deployers, and deployer obligations are dramatically lighter — no technical documentation file, no quality management system, no conformity assessment.",
    },
    { type: "h3", text: "You bought a tool and configured it — deployer" },
    {
      type: "p",
      text: "Buying a vendor chatbot, connecting it to your helpdesk and writing a system prompt does not make you a provider. Configuration within the intended purpose the vendor documented is deployer activity. Your duties: use it in line with the vendor's instructions, run the Article 50 disclosure, keep whatever logs the system generates if it is high-risk, assign a competent human to oversee it, and handle the GDPR side because you are the controller for the data you pushed into it.",
    },
    { type: "h3", text: "You put your name on it or materially modified it — provider" },
    {
      type: "p",
      text: "Three moves flip you to provider. Placing the system on the market under your own brand. Substantially modifying a system already on the market. Changing the intended purpose of a system in a way that makes it high-risk when it was not. The third is the trap: take a general-purpose summarization tool, point it at CVs and have it rank candidates, and you have created a high-risk system and made yourself its provider. Nobody sends you a warning email when this happens.",
    },
    { type: "h3", text: "Your agency built it for you — who holds which obligation" },
    {
      type: "p",
      text: "Split it in the contract, and be aware that regulators read facts rather than labels. On our own [AI automation](/services/ai-automation) engagements we write the split into the statement of work: for data we touch during build and support we are a **processor** under a DPA, you are the **controller**; for AI Act purposes the client is normally the deployer and, where the system runs under the client's brand, the provider too. A contract that assigns provider status to the agency while the client brands, operates and monetizes the system will not survive contact with a supervisory authority.",
    },
    {
      type: "table",
      caption:
        "Role mapping for common SMB setups. GDPR roles assume the data is your customers' or staff's.",
      headers: ["Your setup", "AI Act role", "GDPR role", "What you actually owe"],
      rows: [
        [
          "Subscribe to a vendor chatbot and configure it",
          "Deployer",
          "Controller",
          "Vendor DPA, Article 50 notice, AI literacy, ROPA entry",
        ],
        [
          "Agency builds a custom agent that runs under your brand",
          "Deployer and provider",
          "Controller",
          "The above, plus provider duties if the use case is high-risk",
        ],
        [
          "You resell the agent to your own customers",
          "Provider",
          "Controller for your data, processor for theirs",
          "Full provider stack if high-risk; transparency, DPAs and a sub-processor list otherwise",
        ],
        [
          "You change a bought system's intended purpose",
          "You become the provider of the modified system",
          "Controller",
          "You inherit the provider obligations for the new purpose",
        ],
        [
          "You call a model API from inside your own product",
          "Deployer of your system; the model vendor is the GPAI provider",
          "Controller; vendor is processor",
          "DPA, region and retention configuration, transparency, transfer mechanism",
        ],
      ],
    },

    { type: "h2", text: "AI Act risk tiers, decoded for a small company" },
    {
      type: "p",
      text: "Four tiers: prohibited, high-risk, limited-risk transparency, and minimal risk. In the EU deployments we work on, the large majority of agents land in minimal risk with an Article 50 transparency duty bolted on — because they draft, retrieve, summarize and route rather than decide anything about a person. The tier is set by the use case, not the model, so the same model can sit in three different tiers across three of your workflows.",
    },
    { type: "h3", text: "Prohibited practices — the ones SMBs walk into by accident" },
    {
      type: "p",
      text: "Article 5 bans a short list outright, in force since 2 February 2025: social scoring, exploitative manipulation of vulnerable groups, untargeted scraping of facial images to build recognition databases, biometric categorization to infer protected characteristics, and — the one that catches small companies — **inferring emotions of people in the workplace or in education**. From 2 December 2026 the list also covers AI that generates non-consensual intimate imagery and child sexual abuse material, added by the 2026 omnibus. If a sales tool is scoring the emotional state of *your own employees* on recorded calls, that is squarely in the prohibited zone. Sentiment analysis on customer-authored text is a different and more defensible analysis, but get it looked at before you ship it.",
    },
    { type: "h3", text: "High-risk Annex III — CV screening, credit, education, essential services" },
    {
      type: "p",
      text: "Annex III lists the high-risk uses, and four of them are reachable by a small company: **employment** (screening or ranking applicants, allocating tasks, monitoring or evaluating people, decisions about promotion or termination), **creditworthiness** assessment for individuals, **access to education or vocational training**, and **access to essential private and public services**. If your agent ranks job applicants, it is high-risk. That is the single most common way a 30-person company walks into Annex III without meaning to — usually via a recruiting tool someone bought on a corporate card.",
    },
    { type: "h3", text: "Limited-risk transparency under Article 50" },
    {
      type: "p",
      text: "Article 50 has applied since 2 August 2026 and it is short. If a person interacts with an AI system, they have to be told — unless it is obvious from the context to a reasonably well-informed person. Synthetic audio, image, video or text content has to be marked as artificially generated in a machine-readable form by the provider, and deep fakes and AI-generated text published to inform the public on matters of public interest must be disclosed. Providers of generative systems already on the market before 2 August 2026 got a grace period on the machine-readable marking duty until 2 December 2026. For most SMB deployers this is one sentence of UI copy and one line in the privacy notice.",
    },
    { type: "h3", text: "Minimal risk — and what you still owe there" },
    {
      type: "p",
      text: "Minimal risk carries no mandatory AI Act obligations for the system itself. It does not carry zero obligations. Article 4 AI literacy still applies to every deployer regardless of tier. GDPR applies in full. And your customers' procurement questionnaires apply hardest of all — the security review is what will actually gate the deal, which is why we treat the [security and compliance work](/services/cyber-security) as part of shipping rather than as a follow-up project.",
    },
    {
      type: "table",
      caption: "AI Act tiers mapped to SMB reality, with the dates that apply after the 2026 omnibus.",
      headers: ["Tier", "Typical SMB example", "What you owe as deployer", "Applies from"],
      rows: [
        [
          "Prohibited",
          "Emotion inference on employee calls; social scoring",
          "Do not deploy. No exceptions, no risk assessment that fixes it",
          "2 Feb 2025 (NCII and CSAM additions: 2 Dec 2026)",
        ],
        [
          "High-risk (Annex III)",
          "CV ranking, credit scoring, tuition or benefits eligibility",
          "Human oversight, input data governance, log retention, instructions-for-use compliance, registration where required",
          "2 Dec 2027 (was 2 Aug 2026)",
        ],
        [
          "High-risk (Annex I, embedded in regulated products)",
          "AI inside a medical device or machinery",
          "Sector conformity route plus AI Act requirements",
          "2 Aug 2028",
        ],
        [
          "Limited risk (Article 50)",
          "Customer support chatbot, AI-written content, voice agent",
          "Disclose that it is AI; label synthetic content; deep fake disclosure",
          "2 Aug 2026 (marking grace to 2 Dec 2026 for pre-existing systems)",
        ],
        [
          "Minimal risk",
          "Internal drafting, retrieval over your own docs, ticket routing",
          "Nothing under the Act for the system — but Article 4 literacy and all of GDPR still apply",
          "n/a",
        ],
      ],
    },

    { type: "h2", text: "The 2026-2028 compliance calendar" },
    {
      type: "p",
      text: "As of August 2026: prohibitions and AI literacy have applied since 2 February 2025; general-purpose AI model obligations since 2 August 2025; the remainder of the Act including Article 50 transparency since 2 August 2026; two new prohibitions and the expiry of the Article 50(2) marking grace period land on 2 December 2026; Annex III high-risk requirements now apply from 2 December 2027 and Annex I embedded high-risk from 2 August 2028.",
    },
    {
      type: "table",
      caption:
        "EU AI Act application dates as amended by Regulation (EU) 2026/1744. Verify against the Official Journal before committing budget.",
      headers: ["Date", "What applies", "Who it hits", "Status"],
      rows: [
        [
          "2 Feb 2025",
          "Article 5 prohibitions; Article 4 AI literacy",
          "Everyone, providers and deployers",
          "In force, not delayed",
        ],
        [
          "2 Aug 2025",
          "GPAI model obligations, governance bodies, notified bodies, penalty provisions",
          "Model providers mainly",
          "In force, not delayed",
        ],
        [
          "27 Jul 2026",
          "Regulation (EU) 2026/1744 (the AI omnibus) enters into force",
          "Amends the AI Act itself",
          "In force",
        ],
        [
          "2 Aug 2026",
          "General application, including Article 50 transparency and Commission enforcement powers over GPAI",
          "Deployers and providers of chatbots and generative systems",
          "In force, not delayed",
        ],
        [
          "2 Dec 2026",
          "New Article 5 prohibitions (NCII, CSAM); Article 50(2) machine-readable marking for systems on the market before 2 Aug 2026",
          "Providers of generative systems",
          "Upcoming",
        ],
        [
          "2 Dec 2027",
          "Chapter III high-risk requirements for stand-alone Annex III systems",
          "Recruitment, credit, education, essential services",
          "Moved from 2 Aug 2026",
        ],
        [
          "2 Aug 2028",
          "Chapter III high-risk requirements for Annex I embedded systems",
          "AI inside regulated products",
          "Moved from 2 Aug 2027",
        ],
      ],
    },
    { type: "h3", text: "What the Digital Omnibus actually changed" },
    {
      type: "p",
      text: "Regulation (EU) 2026/1744 was published in the Official Journal on 24 July 2026 and entered into force on 27 July 2026. Four changes matter to a small company. It moved the high-risk dates to **fixed** calendar dates rather than the conditionally triggered mechanism originally proposed, which is a genuine planning improvement. It rewrote Article 4 from a duty to *ensure a sufficient level* of AI literacy into a duty to *take measures supporting its development* — an effort obligation that still binds every deployer but no longer implies a measurable standard. It added the two new Article 5 prohibitions. And it extended SME simplifications — simplified technical documentation templates, proportionality in quality management systems, priority access to regulatory sandboxes — to small mid-caps under 750 employees and €150 million turnover.",
    },
    {
      type: "p",
      text: "A separate GDPR and ePrivacy omnibus is still moving through the legislative process and has drawn hard pushback from data protection authorities. The proposals that would matter most to AI builders — an explicit legitimate-interest basis for AI development, narrower treatment of pseudonymized data, an Article 9 carve-out for residual special-category data in training sets — are **not law**. Do not design a data strategy around them until they appear in the Official Journal.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "The delay is not a reprieve",
      text: "If your use case is Annex III, 2 December 2027 is a **build** deadline, not a filing deadline. Technical documentation, a quality management system, data governance, logging, human oversight design and a conformity assessment are 9-18 months of work for a team that has never run one. Starting in mid-2027 means missing it.",
    },

    { type: "h2", text: "The deployer checklist: 11 things to have on file" },
    {
      type: "p",
      text: "Eleven artifacts. If you can produce this folder on request, you will clear almost any EU procurement security review and you will survive a supervisory authority's first letter without panic. None of them requires a consultant.",
    },
    {
      type: "ol",
      items: [
        "A signed DPA with every vendor in the chain — model provider, orchestration platform, observability tool, vector database — with the sub-processor list attached.",
        "A ROPA entry for the agent under Article 30: purposes, categories of data subject and data, recipients, transfers, retention periods, security measures.",
        "A documented lawful basis per purpose under Article 6, plus a written legitimate interests assessment if that is the basis you chose.",
        "A DPIA where Article 35 triggers, or a short dated note recording why you concluded it does not.",
        "A retention setting you actually configured in the vendor console — with a screenshot and a date, not a belief.",
        "A transfer mechanism: a Data Privacy Framework certification check against the official list, or SCCs plus a transfer impact assessment, dated.",
        "The Article 50 disclosure text exactly as it appears in the UI, screenshotted.",
        "An internal AI use policy naming the approved tools and, more importantly, the banned ones.",
        "Evidence of Article 4 AI literacy measures: an attendance list, a training deck, an onboarding note — dated.",
        "A data flow diagram showing every hop a prompt takes, including logging and analytics vendors people forget.",
        "A named human owner, an escalation path, and a written statement of what the agent is not allowed to do unsupervised.",
      ],
    },

    { type: "h2", text: "Where AI agents actually break GDPR" },
    {
      type: "p",
      text: "Six places, and in our audits they show up in roughly this order: no articulated lawful basis, a human review that is not really a review, support data quietly repurposed as training data, personal data sprayed into logs and vector stores with no deletion path, an unpapered processor chain, and a transfer mechanism nobody wrote down.",
    },
    { type: "h3", text: "Article 6 lawful basis for feeding customer data to a model" },
    {
      type: "p",
      text: "Pick a basis per purpose before the first prompt is sent, and write it down. **Contract performance** covers using an agent to deliver the service the customer actually asked for. **Legitimate interests** covers most internal productivity uses but requires a documented balancing test weighing your interest against the data subject's reasonable expectations. **Consent** is usually the worst option for an operational system: it must be freely given and it is withdrawable, and an agent whose lawful basis can evaporate mid-quarter is an operations problem, not just a legal one. Using an agent internally does not create a new basis — it is a new *means* of processing under the basis you already have, and it can push the processing outside what the data subject reasonably expected.",
    },
    { type: "h3", text: "Article 22 and automated decisions with legal or similar effect" },
    {
      type: "p",
      text: "Article 22 gives people the right not to be subject to a decision based **solely** on automated processing that produces legal effects or similarly significantly affects them. The load-bearing word is *solely*. A human who rubber-stamps whatever the agent produced has not made the decision non-automated: the review has to be meaningful, performed by someone with the authority, the information and the realistic time to overturn the output. Practical test — if your agent can decline an application, close an account, set an individual's price or reject a candidate without a specific person who could have said no and would have known why, redesign it before launch.",
    },
    { type: "h3", text: "Purpose limitation — using support tickets as training data" },
    {
      type: "p",
      text: "Support tickets collected to resolve support tickets cannot be silently repurposed as fine-tuning data. That is a different purpose and needs either a compatibility assessment under Article 6(4) or a fresh basis, plus updated Article 13 information. The cheaper engineering answer is usually retrieval over a curated, reviewed corpus rather than fine-tuning on raw customer text — you get most of the quality gain, you keep a deletion path, and the compliance story fits in a paragraph.",
    },
    { type: "h3", text: "Data minimisation in prompts, logs and vector stores" },
    {
      type: "p",
      text: "The vector store is where GDPR problems compound quietly. Deleting a row from your production database does not delete the embedding, the chunk text in the index, the prompt held in your observability tool, the entry in your evaluation dataset, or the trace sitting in the vendor's 30-day log. Build the deletion path on day one or you will rebuild the whole retrieval layer later. Four rules that cover most of it: strip direct identifiers before text enters a prompt; pass stable pseudonymous ids instead of names and emails; cap prompt and trace log retention at 30 days unless you can justify longer; and keep the vector store in the same region and under the same retention policy as the source database.",
    },
    { type: "h3", text: "Articles 28 and 30 — processors, sub-processors and your ROPA entry" },
    {
      type: "p",
      text: "Every vendor whose systems touch a prompt is a processor and needs an Article 28 contract, including the ones that feel like infrastructure — the tracing tool, the queue, the transcription service. On Article 30, the exemption for organizations under 250 employees almost never rescues an AI deployment: it falls away when the processing is not occasional, when it risks the rights and freedoms of data subjects, or when it involves special categories. An agent that runs continuously against customer data is by definition not occasional. Write the ROPA entry.",
    },
    { type: "h3", text: "International transfers, the Data Privacy Framework and SCCs" },
    {
      type: "p",
      text: "If a token crosses the Atlantic you need a Chapter V transfer mechanism. Two routes: the EU-US Data Privacy Framework, if the specific vendor entity is certified for the relevant data category — check the official DPF list, not the vendor's marketing page — or Standard Contractual Clauses plus a transfer impact assessment. The DPF adequacy decision remains in force but has been under legal challenge since it was adopted. Keep SCCs in the contract as a documented fallback so a future invalidation is a paperwork event for you rather than a service shutdown.",
    },

    { type: "h2", text: "Model vendor reality check: DPAs, retention and EU regions" },
    {
      type: "p",
      text: "On business and API tiers, the major model vendors do not train on your data by default, will sign a DPA, and offer some combination of retention controls and EU processing. On personal consumer tiers, all three of those statements can be false. That gap — an employee with a personal account pasting a customer contract — is the single most common compliance failure we find, and it costs nothing to close.",
    },
    {
      type: "table",
      caption:
        "Indicative as of mid-2026, at the vendor's published business or API terms. These change often — confirm on the vendor's trust page and in your contract before you rely on any row.",
      headers: [
        "Vendor / surface",
        "Trains on your data by default",
        "Default content retention",
        "Zero-retention option",
        "EU processing option",
      ],
      rows: [
        [
          "OpenAI API and business tiers",
          "No",
          "Up to ~30 days for abuse monitoring",
          "Yes — zero data retention on request for eligible customers and endpoints",
          "European data residency, extended to in-region inference in early 2026",
        ],
        [
          "Anthropic API / Claude Enterprise",
          "No",
          "Configurable on commercial terms",
          "Yes — enterprise option, eligibility-reviewed",
          "EU-hosted enterprise option advertised; the dependable route is Claude via Bedrock or Vertex in an EU region",
        ],
        [
          "Azure OpenAI",
          "No",
          "Abuse-monitoring retention, disableable on approval",
          "Effectively, via the abuse-monitoring exemption",
          "EU Data Zone deployments under the Microsoft EU Data Boundary commitments",
        ],
        [
          "AWS Bedrock",
          "No",
          "Not stored by the service; you opt into invocation logging in your own account",
          "Default behavior is close to it",
          "EU regions including Ireland and Frankfurt, with EU inference profiles",
        ],
        [
          "Google Vertex AI",
          "No",
          "Configurable",
          "Available on enterprise terms",
          "EU regions including Belgium, Netherlands and Finland; model availability varies by region",
        ],
        [
          "Mistral",
          "No",
          "Configurable",
          "Enterprise terms",
          "EU hosting by default; US endpoints are an explicit opt-in",
        ],
        [
          "Personal consumer accounts (free / Plus / Pro)",
          "Often yes unless a user opts out",
          "Vendor-set, user-controlled at best",
          "No",
          "No — and no business DPA",
        ],
      ],
    },
    { type: "h3", text: "Zero-data-retention: who offers it, on which endpoints, at what cost" },
    {
      type: "p",
      text: "Zero data retention is usually free and almost never a self-serve toggle. It is an eligibility review, it is granted per account, and it is commonly scoped to a **specific list of endpoints** — features that need server-side state, such as stored files, long-running assistant threads, batch jobs and some caching, frequently sit outside it. Ask for the endpoint list in writing and store it with the DPA. Also be precise about what ZDR is: it removes *content* at rest. Metadata survives. Timestamps, token counts, error codes and user identifiers persist for operational reasons, and a user identifier is personal data. ZDR is a strong minimization control and a weak substitute for a transfer mechanism.",
    },
    { type: "h3", text: "Trained-on-your-data defaults by tier — the consumer trap" },
    {
      type: "p",
      text: "The failure mode is not the API. It is the personal subscription. A support rep on a personal account pasting a customer's contract has created a processing activity with no DPA, no ROPA entry, no transfer mechanism, no retention control and possibly no training opt-out — and your company is the controller for it. The fix is boring and works: buy the business tier for everyone who needs it, block the consumer domain at the identity or network layer where you can, and put the approved-tools list in the AI use policy so the ban is enforceable rather than implied.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "The question to ask every vendor, in writing",
      text: "\"List every sub-processor that receives prompt content, the region each one processes in, and the retention period for each.\" Vendors that cannot answer that in a week are vendors you cannot put in a ROPA entry — and that is a procurement answer, not a legal one.",
    },

    { type: "h2", text: "EU data residency options, ranked by cost" },
    {
      type: "p",
      text: "Four options, and for a company under 50 people the first one wins on nearly every axis: pin inference to an EU region on a hyperscaler AI service you already use. Second, EU residency on the model vendor's own platform. Third, an open-weight model on managed EU GPU capacity. Fourth, self-hosting on your own EU infrastructure — which is almost always the wrong answer until volume or a contract clause forces it.",
    },
    {
      type: "table",
      caption:
        "Indicative at 2026 list prices. Per-model pricing moves; check your exact model in your exact region before budgeting.",
      headers: ["Option", "Cost vs global endpoint", "Engineering effort", "Model choice", "When it makes sense"],
      rows: [
        [
          "EU region on a hyperscaler AI service (Bedrock, Vertex, Azure OpenAI)",
          "Parity to roughly +10-20% depending on platform and model",
          "Hours — a region string and an IAM policy",
          "Broad, though not every model is in every EU region",
          "Default choice for almost every SMB",
        ],
        [
          "Model vendor's own EU residency (OpenAI Europe, Mistral, Claude Enterprise EU)",
          "Typically a single-digit to ~10% premium, or bundled into an enterprise tier",
          "Low — a project or workspace setting",
          "That vendor's models only",
          "You are already standardized on one vendor and want their newest models fast",
        ],
        [
          "Open-weight model on managed EU GPU hosting",
          "Roughly $400-$1,500/mo per mid-size GPU instance at on-demand list prices",
          "Days — deployment, scaling, evals, monitoring",
          "Open weights only; a real quality gap on the hardest tasks",
          "Sustained high token volume, or a contract that forbids third-party processing",
        ],
        [
          "Self-hosted on your own EU infrastructure",
          "Roughly $1,500-$3,000/mo all-in once you count on-call and ops time",
          "Weeks, then ongoing",
          "Open weights only",
          "Regulated data classification, or a customer contract that leaves no alternative",
        ],
      ],
    },
    { type: "h3", text: "EU API regions and EU-hosted enterprise deployments" },
    {
      type: "p",
      text: "Pinning inference to a named EU region generally carries a premium, and it is smaller than buyers expect — across the major platforms it has sat in the 0-20% range at list price as of 2026, with something close to 10% commonly quoted and AWS Bedrock historically pricing EU regions at parity with US ones. Treat those as indicative and verify the list price for your exact model in your exact region. Two practical cautions: model availability lags in EU regions, so the newest model may be US-only for a quarter or two; and \"EU region\" describes where inference runs, not where the vendor's abuse-monitoring logs, support tooling or billing systems live. Ask about all four.",
    },
    { type: "h3", text: "Open-weight models on EU infrastructure — when the math works" },
    {
      type: "p",
      text: "Self-hosting beats an API only under sustained volume or a hard contractual ban on third-party processing. A single mid-size GPU instance on EU infrastructure runs roughly $400-$1,500 a month at on-demand list prices as of 2026, depending on card and provider, before anyone is paid to keep it running — call it $1,500-$3,000 a month all-in for something you would put in front of customers with an uptime commitment. At mid-2026 hosted API prices, a support agent handling a few thousand conversations a month costs a small fraction of that. The crossover is real, but it sits far higher than most people guess, and the honest reason to cross it is usually a contract clause rather than a spreadsheet. If you do cross it, the hosting decision is a [cloud infrastructure](/services/cloud-infrastructure) problem before it is an AI one.",
    },

    { type: "h2", text: "What compliance work adds to an AI build" },
    {
      type: "p",
      text: "Roughly 25-60 hours on a first EU agent deployment, and 7-13 hours per agent after that — because the ROPA structure, the vendor DPA review and the policy work amortize across everything you build afterward. The spread depends almost entirely on whether a DPIA is triggered and whether you need a human-in-the-loop review surface, which is real product work rather than paperwork.",
    },
    {
      type: "table",
      caption: "Effort for a first EU agent deployment versus each additional agent on the same stack.",
      headers: ["Work item", "First agent", "Each agent after", "Who usually does it"],
      rows: [
        ["DPIA screening, and the full DPIA where triggered", "6-12 h", "1-2 h", "Deployer with counsel or a DPO"],
        ["ROPA entry and data flow diagram", "3-5 h", "1 h", "Deployer"],
        ["Vendor DPA review and sub-processor mapping", "2-4 h", "0.5 h", "Counsel or ops"],
        ["Region, retention and logging configuration", "3-6 h", "1-2 h", "Engineering"],
        ["PII redaction in prompts, traces and logs", "4-10 h", "1-3 h", "Engineering"],
        ["Human-in-the-loop review UI and audit trail", "6-16 h", "2-4 h", "Engineering"],
        ["Article 50 notices and internal AI use policy", "2-4 h", "0.5 h", "Deployer"],
        ["AI literacy session and attendance record", "2-3 h", "0 h", "Deployer"],
      ],
    },
    { type: "h3", text: "DPIA, ROPA update and vendor DPA review" },
    {
      type: "p",
      text: "Do the DPIA screening even when you are confident you do not need one, because the two-page note saying why is itself the evidence. Article 35 bites on systematic monitoring, large-scale profiling, special-category data and automated decisions with significant effect. A read-only internal drafting agent over your own documents usually does not trigger it. An agent that scores applicants, monitors staff performance or touches health data does, and in several member states that class of processing sits on the supervisory authority's published mandatory-DPIA list.",
    },
    { type: "h3", text: "Logging, retention and redaction configuration" },
    {
      type: "p",
      text: "This is where engineering hours actually go, and it is the half most compliance vendors cannot do for you. Redaction before the prompt leaves your perimeter. Separate retention policies for prompts, traces, evaluation datasets and the vector index. A deletion routine that fans out to every store when a data subject exercises Article 17. Region pinning on the database, the index and the inference endpoint, not just the one everybody remembers. Done during the build this is a day or two. Retrofitted a year later it is a rearchitecture.",
    },
    { type: "h3", text: "Human-in-the-loop UI and transparency notices" },
    {
      type: "p",
      text: "If Article 22 is anywhere near your use case, the review interface is the compliance control, and it has to be usable enough that reviewers do not degenerate into clicking approve. That means showing the evidence the agent used, making rejection as cheap as approval, and recording who decided what and when. The Article 50 notice is by comparison trivial — one sentence in the interface and one line in the privacy notice — but write it before launch, because retrofitting disclosure to a bot that has been talking to customers for six months is an awkward conversation.",
    },
    { type: "h3", text: "The documentation pack we ship with an EU deployment" },
    {
      type: "p",
      text: "Every EU agent we hand over goes out with the same folder: a data flow diagram down to the sub-processor, the region and retention configuration with dated screenshots, the sub-processor list, the Article 50 notice text as implemented, the redaction and deletion runbook, the DPIA screening note, and a draft ROPA entry your DPO or counsel can adopt. You can see the shape of the systems this attaches to in our [portfolio](/portfolio).",
    },
    {
      type: "p",
      text: "What that costs in money: on a Solyio **Build** engagement, which starts at **$6,900**, the engineering half of that list — region and retention configuration, redaction, the audit trail, the review surface, the notice text — is inside scope, because we do not consider an EU agent shippable without it. **Launch**, from **$1,900**, is a smaller build with a correspondingly smaller compliance surface; it is not a discount on the obligations you still owe. **Scale** engagements are quoted to scope. Full pricing is on the [pricing page](/pricing). The legal half — DPIA sign-off, the legitimate interests assessment, anything that needs a lawyer's name on it — is yours or your counsel's, and outside DPIA support from a privacy consultancy has indicatively run $1,500-$6,500 for a first one. Get two quotes.",
    },

    { type: "h2", text: "Penalties: what is real and what vendors use to scare you" },
    {
      type: "p",
      text: "The statutory ceilings are real. AI Act fines reach €35 million or 7% of total worldwide annual turnover for prohibited practices, up to €15 million or 3% for most other breaches including high-risk obligations, and up to €7.5 million or 1% for supplying incorrect or misleading information to authorities. GDPR tops out at €20 million or 4% for the serious categories and €10 million or 2% for the rest. Critically for a small company: for SMEs and startups the AI Act cap is the **lower** of the fixed amount and the percentage, not the higher.",
    },
    {
      type: "p",
      text: "And the ceilings are not your exposure. For a 20-person company the three things that actually cost money are, in descending order of likelihood:",
    },
    {
      type: "ul",
      items: [
        "**A failed procurement review.** A German or Dutch buyer's security questionnaire asks where prompt data is processed and who the sub-processors are. No answer, no deal. This happens constantly and costs you revenue with no regulator involved.",
        "**A contractual indemnity you already signed.** Enterprise MSAs routinely make you liable for your own sub-processors' failures. That clause is enforceable long before any authority takes an interest.",
        "**A supervisory authority complaint.** Usually triggered by a subject access request you cannot fully answer. It costs perhaps 40 hours, a stressful letter exchange and a remediation commitment — rarely a headline fine at your size.",
      ],
    },
    {
      type: "p",
      text: "A vendor quoting €35 million at a 20-person company is selling fear. The number is real and almost entirely irrelevant to you. Budget against the procurement review, not the ceiling.",
    },

    { type: "h2", text: "Three EU deployment patterns, three compliance paths" },
    {
      type: "p",
      text: "Almost every EU agent we ship fits one of three patterns, and the pattern determines how much work this is. Identify yours before you design anything.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Pattern A — internal agent, low-sensitivity data, global endpoint",
          text: "An internal drafting, search or research agent over your own documents, no customer personal data of consequence. Minimal risk. What you need: a business-tier account with a signed DPA, training off, 30-day retention, a ROPA entry, an AI use policy and an AI literacy session. Realistically 8-15 hours of work total and no region change required. Most companies over-engineer this one.",
        },
        {
          title: "Pattern B — customer-facing agent, EU personal data, region pinned",
          text: "Support, onboarding or sales agents handling customer data. Limited risk with an Article 50 duty, and a full GDPR processing activity. What you need: everything from Pattern A, plus EU region pinning, prompt and log redaction, a documented deletion path across the vector store, a transfer mechanism, the disclosure text in the UI and a DPIA screening note. This is where the 25-60 hours lands, and it is where most of our EU work sits.",
        },
        {
          title: "Pattern C — Annex III use case, or a no-third-party-processing clause",
          text: "Anything touching recruitment, credit, education access or essential services — or a customer contract that forbids sending data to third-party model providers. High-risk obligations from 2 December 2027, or self-hosted open weights on EU infrastructure, or both. This is a programme with a named compliance owner, not a sprint, and you should be scoping it now rather than in 2027.",
        },
      ],
    },

    { type: "h2", text: "When we are the wrong people to call" },
    {
      type: "p",
      text: "Three situations where hiring an agency for this is the wrong move, and we would rather say so now. First, if your use case is genuinely Annex III high-risk, you need a compliance lead and a conformity assessment process, not a build partner — we will build the system and we will not pretend to run your conformity assessment. Second, if what you actually need is legal sign-off, hire a data protection lawyer in your lead supervisory authority's member state; we write documentation and configure systems, and nothing on this page is legal advice. Third, if you already have a DPO and an internal security function, you probably need two weeks of a fractional engineer to fix the retention and redaction layer, not a project — tell us that in the [contact form](/contact) and we will say if that is what it looks like.",
    },
    {
      type: "p",
      text: "Where we are the right call: you are shipping to EU customers, the compliance questions are blocking the deal rather than the build, and you want the agent and the documentation pack delivered together by people who have configured these settings on live systems.",
    },
    {
      type: "cta",
      title: "Shipping an AI agent to EU customers?",
      text: "Bring your use case and your vendor list. In 30 minutes we will tell you your AI Act role, your tier, whether a DPIA is triggered, and what region and retention configuration your build actually needs — before you write any code.",
      buttonLabel: "Book a compliance-scoped call",
      href: "/book",
    },
    {
      type: "callout",
      variant: "key",
      title: "If you remember one thing",
      text: "Your AI Act obligations are probably three lines long. Your GDPR obligations are a folder. Build the folder during the project, not after the first customer security questionnaire arrives.",
    },
  ],
  faqs: [
    {
      q: "Does the EU AI Act apply to my US company?",
      a: "Yes, if you place an AI system on the EU market or the output of your system is used in the EU — the same extraterritorial logic as GDPR. A US SaaS with German customers is in scope for the obligations tied to its role, usually deployer duties plus Article 50 transparency if the system talks to people or generates content.",
    },
    {
      q: "Is a customer support chatbot high-risk under the EU AI Act?",
      a: "No. A support chatbot is limited-risk, and the obligation is transparency: tell the user they are interacting with an AI system, which has applied since 2 August 2026 under Article 50. High-risk status under Annex III attaches to uses like CV screening, credit scoring, access to education and access to essential services — and those requirements now apply from 2 December 2027.",
    },
    {
      q: "Can I use ChatGPT or Claude with EU customer data?",
      a: "Yes, with four things in place: a business or API tier rather than a personal consumer account, a signed DPA with the vendor, the training-on-your-data default confirmed off, and retention plus region settings configured — with a transfer mechanism such as a Data Privacy Framework certification check or SCCs recorded in your ROPA. Personal consumer subscriptions fail all four and are the most common source of GDPR exposure we find.",
    },
    {
      q: "Do I need a DPIA for an AI agent?",
      a: "You need one when the processing is likely to result in a high risk under Article 35: systematic monitoring, large-scale profiling, special-category data, or automated decisions with legal or similarly significant effect. A read-only internal drafting agent over your own documents usually does not require one. An agent that scores job applicants, monitors staff or handles health data does — and several member states list that class of processing as mandatory-DPIA. Do the screening either way and keep the dated note.",
    },
    {
      q: "Who is liable if the agency built the agent — them or us?",
      a: "It splits by role. The builder may be the provider for the system itself, and is normally your processor under GDPR for data it touches. You are almost always the deployer and the GDPR controller for the data going through the agent. Put the split in the contract, but understand that regulators read the facts — who brands, operates and monetizes the system — rather than the label the contract uses.",
    },
    {
      q: "What is the minimum paperwork for a low-risk internal agent?",
      a: "Six items: a ROPA entry, a signed vendor DPA with its sub-processor list, a documented lawful basis, a configured retention setting with a dated screenshot, an AI-use notice and policy for staff, and evidence of the Article 4 AI literacy measures for the people operating it. That is realistically 8-15 hours of work, and it is enough to clear most EU procurement reviews.",
    },
    {
      q: "Did the Digital Omnibus cancel the EU AI Act?",
      a: "No. Regulation (EU) 2026/1744 entered into force on 27 July 2026 and delayed the high-risk requirements — Annex III to 2 December 2027, Annex I embedded systems to 2 August 2028 — while softening Article 4 AI literacy into an effort-based duty and extending SME simplifications to small mid-caps. Prohibitions, AI literacy, GPAI obligations and Article 50 transparency were not delayed. A separate GDPR and ePrivacy omnibus is still only a proposal and should not be planned against.",
    },
  ],
}
