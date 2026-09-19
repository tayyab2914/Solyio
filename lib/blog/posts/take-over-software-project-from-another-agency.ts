import type { Post } from "../types"

export const post: Post = {
  slug: "take-over-software-project-from-another-agency",
  title: "Software Project Rescue: What It Costs to Take Over a Stalled or Broken Build",
  seoTitle: "Taking Over a Software Project From Another Agency",
  description:
    "Inherited a half-finished app or a silent agency? The 10-day audit, the rewrite-vs-repair rule, real rescue costs, and how to get your code back.",
  excerpt:
    "A field guide for founders whose build has stalled: what to secure in the first 48 hours, how a takeover audit is run, when repair beats a rewrite, and where a rescue lands on price.",
  category: "founders",
  tags: [
    "project rescue",
    "agency handoff",
    "inherited codebase",
    "rewrite vs refactor",
    "technical audit",
    "vendor transition",
  ],
  author: "solyio",
  publishedAt: "2026-09-15",
  featured: true,
  eyebrow: "Project Rescue",
  primaryKeyword: "take over software project from another agency",
  keyTakeaways: [
    "Recover access before you terminate anything: the domain registrar, the cloud billing owner, and the repository organization are the three assets that are genuinely hard to get back once a vendor stops replying.",
    "A takeover audit runs about 10 working days and should end in a written risk register, a dependency and CVE report, an infrastructure inventory with the real monthly bill, and a re-estimate of the work still outstanding.",
    "Repair beats a rewrite when the data model is broadly right and authentication uses a maintained library; a rewrite wins when auth is hand-rolled or database migrations do not exist, because every later fix compounds against you.",
    "Budget a 20-40% inheritance tax over greenfield: the same feature costs more in someone else's codebase because you are also paying to read it, test it, and prove you did not break the parts nobody documented.",
    "Most of the stack is recoverable without the old agency's cooperation, because registrars, cloud providers, Stripe and both app stores all have ownership-recovery routes that turn on proof of payment and identity rather than a developer's goodwill.",
    "Solyio quotes rescue work only after a paid, fixed-fee audit that sits below our $1,900 Launch tier and is credited against the first phase if you continue with us.",
  ],
  blocks: [
    {
      type: "p",
      text: "A stalled build is rarely a coding problem by the time it reaches us. It is an access problem, a knowledge problem, and a trust problem, in that order — and the sequence you work them in decides whether the next quarter costs you a few weeks or the whole product. What follows is the process we actually run when a founder calls with a half-finished app and an agency that has stopped answering email.",
    },

    { type: "h2", text: "If you are mid-crisis, do these three things first" },
    {
      type: "p",
      text: "Before you send a termination email, do three things: take a full database dump and store it somewhere the outgoing vendor cannot reach, confirm that you personally control the domain registrar account, and confirm that your card — not theirs — is the billing owner on the cloud account. Everything else in a takeover is recoverable with money and patience. Those three are the ones that turn a bad month into starting over.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Take a database dump today, and a second one tomorrow",
          text: "Not a backup inside the same provider account — an export you hold. A `pg_dump`, or the managed provider's export into a bucket you own. Two dumps 24 hours apart also tells you whether the system is still writing, which matters more than it sounds.",
        },
        {
          title: "Log into the registrar yourself",
          text: "Not the DNS dashboard your agency shared with you. The registrar where the domain is actually registered. If you cannot log in, or the registrant contact is the agency's email address, that is the highest-priority item on your list and it moves ahead of the code.",
        },
        {
          title: "Open the cloud console and find the billing owner",
          text: "If the account sits on the agency's payment method, you do not own it, whatever the contract says. Note the root account email address before you say anything to anyone.",
        },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Do not terminate before you have access",
      text: "The most expensive mistake we see is a founder sending a firm, satisfying termination email on a Friday afternoon while the other party still holds the domain, the cloud root account and the App Store credentials. Access first, conversation second. A vendor who is ignoring you will ignore you for another week; a vendor who feels cornered can make recovery genuinely hard.",
    },

    { type: "h2", text: "Get control before you terminate: the access recovery checklist in priority order" },
    {
      type: "p",
      text: "Work the list in order of how hard each asset is to recover, not in order of how much it irritates you. Domain and DNS first, then cloud billing ownership, then repository organization ownership, then the app store developer accounts, then payments and email authentication, then every API key. Almost everything below can be recovered through the platform itself with proof of payment and identity — the exception is the domain, which is exactly why it goes first.",
    },
    {
      type: "table",
      caption:
        "Access recovery, ordered by difficulty. Timings are what we typically see, not anything a provider guarantees.",
      headers: ["Asset", "Who actually controls it", "Recoverable without the agency?", "Route", "Typical time"],
      rows: [
        [
          "Domain + DNS",
          "The registrar account holder, not whoever edits DNS records",
          "Hard, if the registrar account is theirs",
          "Registrar ownership dispute with incorporation and payment evidence",
          "Days to several weeks",
        ],
        [
          "Cloud root account + billing",
          "The root email address and the payment method on file",
          "Usually yes, if you pay the card",
          "Provider account recovery with billing proof, then rotate root credentials",
          "2-10 business days",
        ],
        [
          "Git repository",
          "The organization owner — collaborator access is not ownership",
          "Only if you hold the org",
          "Request an org transfer; otherwise re-clone from any machine that still has it",
          "Same day, or never",
        ],
        [
          "Apple Developer account",
          "The Account Holder on the team",
          "Yes, via app transfer rather than account takeover",
          "App Store Connect app transfer, initiated and accepted by both Account Holders",
          "1-3 days once both sides act",
        ],
        [
          "Google Play Console",
          "The account owner",
          "Yes",
          "Play Console ownership transfer, or a new account plus an app transfer request",
          "Days to weeks",
        ],
        [
          "Stripe",
          "Account owner / Super Administrator",
          "Yes",
          "Dashboard ownership transfer, or Stripe support with company documentation",
          "1-5 business days",
        ],
        [
          "Analytics + Search Console",
          "Property administrator",
          "Yes, once DNS is yours",
          "Re-verify the domain with a DNS record",
          "Same day",
        ],
        [
          "SPF / DKIM / DMARC",
          "Whoever holds DNS",
          "Follows the domain",
          "Rebuild the records after DNS moves",
          "Hours",
        ],
        [
          "CI secrets and API keys",
          "Whoever owns each vendor account",
          "Rotate, do not recover",
          "Issue new keys, revoke the old ones, redeploy",
          "Hours",
        ],
      ],
    },

    { type: "h3", text: "Domain registrar and DNS — the one thing that is genuinely hard to get back" },
    {
      type: "p",
      text: "The domain is the only asset on that list with no clean technical escape hatch. If the registrant contact is the agency and the registrar account is in their name, you are relying on a registrar dispute process and on evidence: invoices showing you paid for the domain, incorporation documents, prior correspondence. Build that evidence pack before you escalate. Note also that under ICANN's transfer policy a change of registrant has historically triggered a 60-day lock on moving the domain to a different registrar, and that rule has been under revision through 2026 — so check your registrar's current terms rather than assuming either way. Plan for the lock and be pleased if it does not apply.",
    },

    { type: "h3", text: "Repository organization ownership, not just collaborator access" },
    {
      type: "p",
      text: "Being able to see the code is not the same as owning where it lives. If the repository sits inside the agency's organization, they can revoke you in one click, and your local clone — while it holds the full commit history — does not hold the issues, the pull request discussion, the CI configuration, the deployment hooks or the secrets stored at organization level. Ask for a repository transfer into an organization you own. If that request goes unanswered, clone every branch and every tag immediately, export the issue tracker, and treat the CI configuration as something you will rebuild rather than inherit.",
    },

    { type: "h3", text: "Cloud root account, billing owner and IAM" },
    {
      type: "p",
      text: "Ownership of a cloud account follows the root credentials and the payment method, not the org chart. If your company card is on the account, providers will generally work with you on recovery. If the agency's card is on it, you are asking them for a favor — and the practical fallback is to stand up a new account you own and migrate into it, which is roughly a week of work on a small stack and considerably more once managed databases, queues and private networking are involved. This is the point where experienced hands pay for themselves; it is most of what our [cloud infrastructure](/services/cloud-infrastructure) team does during a takeover.",
    },

    { type: "h3", text: "App Store and Play Console developer accounts" },
    {
      type: "p",
      text: "You do not take over somebody's developer account — you transfer the app into yours. Apple's process requires the Account Holder on both teams to initiate and accept, requires the app to have shipped at least one released version, and requires both sides to be clear of pending agreements and reviews; the listing keeps its URL, its ratings and its reviews, and users see no interruption. Google Play has an equivalent transfer flow. If the agency will not cooperate at all, you are republishing under a new bundle identifier and losing your reviews and your install base, which is unpleasant but survivable. As of 2026 the Apple Developer Program costs $99 per year and Google Play charges a one-time $25 registration fee, so standing up your own accounts is never the expensive part.",
    },

    { type: "h3", text: "Payments, analytics, email authentication and every API key" },
    {
      type: "p",
      text: "Stripe ownership transfers from the account owner in team settings, and Stripe support will act on documentation if the previous owner is gone. Analytics and Search Console re-verify off DNS, so they resolve themselves the moment the domain is yours. Everything else — the payment gateway keys, the transactional email provider, the SMS gateway, the map tiles, the model API keys — you do not recover. You rotate. Assume every key the outgoing team ever saw is compromised, issue new ones, revoke the old ones, and redeploy. Budget half a day and do it in one sitting so nothing is left half-migrated.",
    },

    { type: "h2", text: "The 10-day takeover audit, day by day" },
    {
      type: "p",
      text: "A takeover audit is 10 working days of two engineers reading, running and instrumenting what you already own, ending in a written risk register and a re-estimate you can take to any agency. We change nothing in production during the audit. The point is to replace the question you cannot answer — is this salvageable? — with a number you can budget against.",
    },
    {
      type: "stats",
      items: [
        { value: "10 days", label: "Elapsed audit window", note: "Two engineers, read-only on production" },
        { value: "Day 1", label: "Clean-machine build test", note: "The most predictive single signal in the whole audit" },
        {
          value: "0",
          label: "Production changes during the audit",
          note: "Nothing is touched until scope is agreed in writing",
        },
        {
          value: "20-40%",
          label: "Inheritance tax over greenfield",
          note: "What the same feature costs in code you did not write",
        },
      ],
    },

    { type: "h3", text: "Days 1-2: can we run it from a clean machine? (the runbook test)" },
    {
      type: "p",
      text: "We wipe a machine, clone the repository, and try to get the application running from the README alone with a stopwatch on it. Under two hours means the project was maintained by someone who expected to hand it over. Two days, with a list of environment variables reconstructed by grepping the source, means nobody ever onboarded a second developer — which predicts almost everything else we are about to find. If nothing runs at all, the first week of any engagement goes on reconstructing the runbook, and no honest agency can promise you a shipped fix before week two.",
    },

    { type: "h3", text: "Days 3-4: dependency drift, CVE scan, secrets committed to history" },
    {
      type: "p",
      text: "We produce a full dependency tree with major versions behind, a vulnerability scan across direct and transitive dependencies, and a scan of the entire git history for committed credentials — not just the current checkout, because a secret deleted in a later commit is still sitting in the history for anyone holding a clone. A framework two majors behind is a scheduled cost, not an emergency. A framework four majors behind with unmaintained plugins pinned to it is a rewrite argument. Our [security practice](/services/cyber-security) runs this half of the audit.",
    },

    { type: "h3", text: "Days 5-6: data model review and migration state" },
    {
      type: "p",
      text: "This is the section that decides the rest of the engagement. We read the schema, check whether it is reproducible from versioned migrations or was changed by hand in a console, look for the usual structural tells — money stored as floating point, no foreign key constraints, soft-delete flags nobody honors, one table doing the work of four — and check whether the production data actually conforms to the model the code expects. A correct data model under a bad application is a repair job. A wrong data model is the one problem you cannot refactor your way out of cheaply.",
    },

    { type: "h3", text: "Days 7-8: infrastructure inventory, orphaned resources and the real monthly bill" },
    {
      type: "p",
      text: "We inventory every running resource against the deployed application and flag anything attached to nothing. Orphaned resources — detached volumes, idle load balancers, a staging environment nobody stopped, a database provisioned for a launch that never came — are the most common line item these audits turn up, and cutting them often funds a meaningful slice of the rescue itself. For scale: a small production stack on a managed platform plus a managed Postgres instance typically runs roughly $50 to $400 per month at list prices as of 2026, depending on traffic and how many environments are still switched on. If your bill is an order of magnitude above that for a pre-revenue product, something is running that should not be.",
    },

    { type: "h3", text: "Days 9-10: auth, permissions, deployment path and the written risk register" },
    {
      type: "p",
      text: "We review authentication and authorization end to end — session handling, password storage, and whether any endpoint checks ownership as well as identity — then trace the real deployment path from commit to production, including who can trigger it and whether a rollback exists. The deliverable is a risk register: every finding, its blast radius, the effort to fix it in hours, and a recommendation of fix now, fix soon, or accept. You keep that document whether or not you hire us, including if you take it to a different agency. That is deliberate. An audit you cannot take elsewhere is a sales document, not an audit.",
    },

    { type: "h2", text: "Rewrite versus repair: the decision rule" },
    {
      type: "p",
      text: "Repair when the data model is broadly right and authentication uses a maintained library; rewrite when the data model is wrong or auth is hand-rolled. Those two dimensions predict the outcome better than code quality, test coverage, or how much you dislike the previous team. Where repair applies, it is typically 40-60% cheaper than a rewrite across the first six months. Where it does not apply, repair becomes more expensive than a rewrite inside the same window, because every fix has to be made compatible with a foundation that keeps being wrong.",
    },
    {
      type: "table",
      caption:
        "The eight signals we score. Four or more landing in the right-hand column and we recommend a rewrite that keeps your data.",
      headers: ["Dimension", "Repair the codebase", "Rewrite, keep the data"],
      rows: [
        ["Data model", "Broadly correct; entities map to the business", "Wrong shape; core concepts missing or conflated"],
        [
          "Authentication",
          "A maintained library or a managed identity provider",
          "Hand-rolled sessions, custom password hashing, or auth logic in the UI layer",
        ],
        [
          "Database migrations",
          "Versioned, in the repo, reproducible from empty",
          "None, or the schema was edited by hand in production",
        ],
        [
          "Tests",
          "Some coverage on the revenue path, however thin",
          "None, or a suite that has been failing long enough that nobody looks",
        ],
        ["Framework count", "One, coherently applied", "Two or three eras of framework layered on each other"],
        ["Environments", "Separate staging and production", "One environment serving as both"],
        ["Build reproducibility", "Runs from a clean machine inside a day", "Only builds on one person's laptop"],
        [
          "Remaining scope",
          "Under roughly 30% of the product still to build",
          "More than half the product still to build",
        ],
      ],
    },
    { type: "h3", text: "The strangler-fig middle path — keep the data, replace the app surface by surface" },
    {
      type: "p",
      text: "The honest answer in most rescues is neither pure repair nor a from-scratch rewrite. You keep the database, stand up a new application alongside the old one, put a router in front, and move one surface at a time — the highest-risk or highest-traffic screen first — until nothing routes to the old app and you delete it. It takes more total engineering days than a clean rewrite, and it is the only approach that lets a live product with paying customers keep running throughout. If you have revenue flowing through the thing, this is almost always the right shape, and it is how most of our [web platform](/services/web-development) rescues are structured.",
    },

    { type: "h2", text: "What a rescue actually costs" },
    {
      type: "p",
      text: "A rescue is priced on remaining engineering effort plus an inheritance tax, never as a percentage of what you already spent. We publish three tiers and quote rescue work inside them — Launch from $1,900, Build from $6,900, and Scale quoted to scope — and the table below shows where each shape of rescue normally lands. Effort ranges assume a small team on the codebase full time; calendar time runs longer than engineering time because access recovery and approvals move on somebody else's clock.",
    },
    {
      type: "table",
      caption:
        "Where each rescue shape typically lands. Effort is engineering time; calendar time includes access recovery and review cycles.",
      headers: ["Rescue shape", "Typical engineering effort", "Calendar time", "Where it lands in our pricing"],
      rows: [
        [
          "Audit only",
          "8-12 engineer-days",
          "2 weeks",
          "Fixed fee below the $1,900 Launch tier, credited against phase one",
        ],
        [
          "One broken flow — checkout, signup, a failing integration",
          "3-8 engineer-days",
          "1-2 weeks",
          "Launch, from $1,900",
        ],
        ["Stabilize and ship the missing 20%", "3-6 engineer-weeks", "4-8 weeks", "Build, from $6,900"],
        [
          "Partial rebuild behind the existing front end",
          "6-12 engineer-weeks",
          "2-4 months",
          "Build or Scale, depending on how many surfaces move",
        ],
        ["Full rebuild that keeps your data", "10-20 engineer-weeks", "3-5 months", "Scale, quoted to scope"],
      ],
    },
    {
      type: "p",
      text: "The counter-intuitive line there is the last one. A full rebuild is genuinely cheaper than a repair once the remaining scope is large, because in a rebuild you pay for a feature once, whereas in a repair you pay to understand the existing implementation, pay to change it, and pay again to prove the change did not break something undocumented. Past roughly the halfway mark on remaining scope, that third cost stops being worth paying. Our [pricing](/pricing) page sets out what sits inside each tier.",
    },
    { type: "h3", text: "The 20-40% inheritance tax over greenfield, and what drives it" },
    {
      type: "p",
      text: "The same feature costs 20-40% more in a codebase you did not write. That is our estimating rule, applied across the whole remaining scope, and four things drive it.",
    },
    {
      type: "ul",
      items: [
        "**Comprehension time.** Every change starts with reading code written under deadline pressure by someone who is not available to explain it.",
        "**Regression risk without a safety net.** With no tests, the only way to prove a change is safe is manual verification of everything near it — which is precisely what you were not paying for before.",
        "**Constraint archaeology.** Half the odd decisions in an inherited codebase exist for a reason nobody wrote down, and finding out which half the hard way is a recurring cost.",
        "**Rework from wrong assumptions.** The first fortnight produces estimates that are wrong in both directions until the mental model settles. Good teams price that in rather than discovering it in week three.",
      ],
    },

    { type: "h2", text: "The seven things we find in almost every inherited codebase" },
    {
      type: "p",
      text: "Seven findings turn up in nearly every takeover audit we run, and together they account for most of the gap between the estimate a founder is carrying in their head and the real number. The frequencies below describe what our own audits surface. They are not survey data and we would not present them as such.",
    },
    {
      type: "table",
      caption: "Recurring findings and the remediation effort we typically scope for each.",
      headers: ["Finding", "How common", "Typical remediation effort"],
      rows: [
        ["Secrets committed to git history", "Near-universal", "4-16 hours to rotate, revoke, and clean or accept the history"],
        [
          "No reproducible build — undocumented env vars and setup steps",
          "Near-universal",
          "8-40 hours to produce a runbook that works on a clean machine",
        ],
        [
          "Dependency drift and unpatched vulnerabilities",
          "Near-universal",
          "16-60 hours, more when a pinned unmaintained plugin blocks the upgrade",
        ],
        ["No automated tests on the revenue path", "Near-universal", "30-80 hours for a regression net worth having"],
        [
          "Schema changed by hand, no versioned migrations",
          "Common",
          "20-60 hours to reconstruct a baseline migration from production",
        ],
        [
          "Hand-rolled authentication and session handling",
          "Common",
          "40-120 hours to move onto a maintained library or managed provider",
        ],
        [
          "One environment serving as both staging and production",
          "Common",
          "16-40 hours to split, plus the cloud cost of the second environment",
        ],
      ],
    },

    { type: "h2", text: "What we cannot fix cheaply" },
    {
      type: "p",
      text: "Four findings change the conversation from a rescue to a reconstruction, and you deserve to hear about them on day two rather than in week six. None of them are about code quality. All of them are about things that are missing or legally encumbered rather than merely badly done.",
    },
    {
      type: "ul",
      items: [
        "**No backups and no point-in-time recovery.** If the only copy of your data is the running database and there is no tested restore, you are one bad migration away from having no company. This is the first thing we fix in every engagement, before any feature work, and it is not negotiable.",
        "**License violations and resold templates.** A commercial template used beyond its license, a copyleft component linked into a closed product, or stock assets with no receipt are legal exposure that engineering cannot remove. Sometimes the remedy is buying the correct license. Sometimes it is replacing the component outright.",
        "**A custom CMS with no export path.** Years of content locked inside a bespoke admin tool with no API and no export is a migration project in its own right, and its cost scales with content volume rather than with code size. It is frequently the largest single line in a rebuild quote.",
        "**Infrastructure owned by the previous vendor's account.** If the account is theirs and they will not transfer it, you are rebuilding the environment from an inventory rather than migrating it — and if the data lives there too, you are negotiating rather than engineering.",
      ],
    },
    {
      type: "callout",
      variant: "key",
      title: "The backup test takes four minutes",
      text: "Ask whoever currently holds your stack one question: when did you last restore a backup into a scratch environment and confirm the application boots against it? An untested backup is a belief, not a backup. If the answer is anything other than a date, you have found your first real finding without needing an audit at all.",
    },

    { type: "h2", text: "Getting your code out of an unresponsive agency" },
    {
      type: "p",
      text: "Most of what you need does not require the agency's cooperation — it requires proof of ownership routed through each platform, which is why the access table above is ordered the way it is. Cooperation matters for exactly three things: the repository organization, the app store transfers, and any undocumented knowledge living in somebody's head. Everything else you can simply take. Work the recoverable assets first, so that by the time you are negotiating you are negotiating over three items rather than thirty.",
    },
    { type: "h3", text: "The contract levers that actually work" },
    {
      type: "p",
      text: "Read your agreement for four clauses specifically: who owns the intellectual property and whether that ownership is conditional on full payment, whether there is a defined handover obligation with a deliverable list, whether there is a termination-for-convenience notice period, and whether disputes go to arbitration. Conditional IP assignment is the clause that most often surprises founders — if the contract assigns ownership on final payment and an invoice is outstanding, withholding the code may be contractually permitted however unreasonable it feels. Establish that fact before you draft anything, because it determines whether you are making a demand or an offer. None of this is legal advice; it is the order we see these situations resolve in.",
    },
    { type: "h3", text: "What to put in writing, and in what order" },
    { type: "p", text: "Vague requests are what stall. Specific, itemized, dated requests are what move." },
    {
      type: "ol",
      items: [
        "A written handover request naming every asset — repository URL, cloud account ID, registrar, developer account team IDs, each third-party service — with a deadline of 5 to 10 business days.",
        "A short follow-up confirming which items have been delivered and which remain outstanding. This creates the record you may need later and, often, the pressure that resolves it.",
        "A formal notice referencing the specific handover clause in the agreement, sent to whoever signed the contract rather than into the project channel.",
        "If an invoice is outstanding and the code is worth more than the balance, an offer that pays it against simultaneous transfer of the named assets. Settling is regularly cheaper than being right.",
        "Only then a lawyer's letter — and only once you have already recovered everything the platforms will hand you directly.",
      ],
    },
    { type: "h3", text: "When rebuilding is cheaper than litigating" },
    {
      type: "p",
      text: "For most small and mid-sized products, the arithmetic favors rebuilding. Legal action over a stalled build takes months of your attention, costs real money before anything is recovered, and ends with you holding a codebase written by a team you no longer trust. If the audit says the remaining scope is a rebuild anyway, the code you are fighting over has limited value — what actually matters is your data, your domain and your users, all of which sit further up the recovery list. Pursue the contract where the sums are large or the data is genuinely trapped. Otherwise take the loss, keep the invoices as evidence, and spend the money on shipping instead.",
    },

    { type: "h2", text: "Three rescue shapes, and what each one costs" },
    {
      type: "p",
      text: "Rescues fall into three recognizable shapes. These are patterns, not case studies — we do not publish client figures or attach invented outcome metrics to real engagements, and you should be skeptical of any agency that does. The products themselves are on the [portfolio](/portfolio) if you want to see shipped work rather than numbers.",
    },
    {
      type: "p",
      text: "**The ninety-percent app.** The build is nearly done, the last 10% has been nearly done for four months, and nobody can articulate what remains. The audit almost always finds that the missing 10% is not features but everything around them: no deployment path, no error tracking, no environment separation, and a handful of flows that work in the demo and fail on real data. Effort is typically 3 to 6 engineer-weeks and it lands in the Build tier. The fix is boring infrastructure work, which is precisely why it never got done.",
    },
    {
      type: "p",
      text: "**The silent vendor.** The product is live and taking payments, nobody has committed in months, and the developer has stopped replying. Week one goes entirely on access recovery, week two is the audit, and only then does anyone write code. The codebase is frequently more salvageable than the founder fears — a running product with customers has already been tested against reality, and what is missing is ownership rather than engineering.",
    },
    {
      type: "p",
      text: "**The wrong foundation.** A working product on a data model that cannot express what the business now does, so every new feature takes longer than the last. This is the one where the audit recommends the strangler-fig path: keep the data, migrate the schema in versioned steps, replace surfaces one at a time. It is the largest of the three engagements, usually 10 to 20 engineer-weeks, and it is the only one where doing nothing costs more than the fix.",
    },

    { type: "h2", text: "How we quote a rescue" },
    {
      type: "p",
      text: "We do not quote a rescue blind, because the difference between a two-week stabilization and a three-month rebuild is not visible from a demo — it is visible from the repository, the database and the cloud account. The sequence is: a fixed-fee audit agreed in writing before it starts, 10 working days of read-only investigation, a risk register and effort estimate you keep regardless of what you do next, then a phased quote against our published tiers. The audit fee sits below the $1,900 Launch tier and is credited against the first phase if you continue with us. If you take the findings to another agency, they are still yours — and they will make that agency's quote more accurate too.",
    },

    { type: "h2", text: "When a rescue is the wrong call, and when we are the wrong agency" },
    {
      type: "p",
      text: "A rescue is the wrong call more often than agencies admit, and there are four cases where we will say so on the first call. If the product has no users, no revenue and a small scope, ignore the sunk cost and start clean with a sharper brief — you will be live faster and the audit fee is better spent on the build. If the original developer is in-house and simply overloaded rather than absent, adding capacity and closing the deployment and testing gaps beats replacing anyone, and it costs less. If the broken thing is a marketing site on a mainstream CMS or a site builder, a formal takeover audit is overkill for the problem. And if the codebase is a stack we do not work in daily, we will tell you rather than learn it on your budget.",
    },
    {
      type: "p",
      text: "There are honest limits on what we offer, too. We do not claim certifications, partnerships or an on-site presence we do not have, and if your situation needs a formal attestation or a local team in the room, that is a real requirement and we are not the right fit for it. What we do well is the engineering: recovering the stack, reading the codebase honestly, and handing you a number you can plan against. If that is the gap you have, [talk to us](/contact).",
    },

    { type: "h2", text: "Start with the audit" },
    {
      type: "p",
      text: "You cannot make a good decision about a stalled build from a demo and a feeling. Ten days of investigation converts the whole situation into a document with numbers in it: what is wrong, what it costs to fix, what is not worth fixing, and how long before something ships. Bring the repository, the cloud account and whatever access you still hold. If you hold none of it, bring that too — it is a more common starting point than you would expect, and the first week's work is the same either way.",
    },
    {
      type: "cta",
      title: "Book a takeover audit",
      text: "Ten working days, a fixed fee agreed up front, a written risk register and a re-estimate you keep whatever you decide next. Credited against the first phase if you continue with us.",
      buttonLabel: "Book a rescue audit",
      href: "/book",
    },
  ],
  faqs: [
    {
      q: "Will you take over code you did not write?",
      a: "Yes, after a paid audit. We do not quote a rescue blind, because the difference between a two-week stabilization and a three-month rebuild is not visible from a demo — it is visible from the repository, the database and the cloud account. The audit runs 10 working days at a fixed fee agreed in writing before it starts.",
    },
    {
      q: "How do I know whether my app should be rewritten or repaired?",
      a: "Start with the data model and the auth layer. If the data model is broadly right and authentication uses a maintained library, repair is usually 40-60% cheaper across the first six months. If the data model is wrong or auth is hand-rolled, every fix compounds and a rewrite that keeps your data is generally faster inside the same window. Versioned migrations, a single framework, and a build that runs on a clean machine all push the decision toward repair.",
    },
    {
      q: "My agency will not hand over the repository. What now?",
      a: "Work the access list in order: registrar and DNS first, then cloud billing ownership, then the repository. Much of what matters can be recovered directly through the platforms with proof of ownership and payment, without the agency's cooperation at all. Send the handover request in writing with a specific asset list and a 5-to-10-business-day deadline — vague requests are what stall. Meanwhile, clone every branch and tag you can still reach and export the issue tracker.",
    },
    {
      q: "How fast can you ship a fix once you take over?",
      a: "For a codebase that builds and deploys, the first production fix usually lands in week two, after the audit. If nothing runs locally and there is no deployment path, week one goes on reconstructing the runbook, and that is the honest timeline. Anyone promising a shipped fix in week one has not looked at the repository yet.",
    },
    {
      q: "Do we pay for the audit if we then hire you for the build?",
      a: "The audit is a fixed fee and is credited against the first phase if you continue with us. You keep the written findings and the risk register either way — including if you take them to a different agency. An audit you cannot take elsewhere is a sales document, not an audit.",
    },
    {
      q: "Can you work alongside our existing developer?",
      a: "Often the better option. If one in-house developer built it and is simply overloaded, a rescue can mean adding capacity and closing the deployment, testing and environment gaps rather than replacing anyone. It is usually cheaper than a handover, and it keeps the only person who understands the constraints in the room.",
    },
  ],
}
