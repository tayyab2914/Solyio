import type { Post } from "../types"

export const post: Post = {
  slug: "when-to-move-off-serverless",
  title:
    "When to Move Off Serverless: The Traffic, Duty-Cycle and Bill Thresholds That Actually Matter",
  seoTitle: "When Serverless Stops Being Cheaper Than Containers",
  description:
    "The duty-cycle and traffic thresholds where Lambda or Vercel stops being cheaper than containers, with priced break-even tables and a six-question test.",
  excerpt:
    "Request count is the wrong metric. What decides whether you should leave Lambda or Vercel is how busy your compute actually is — and how heavy each invocation is. Here are the priced crossover points.",
  category: "cloud-devops",
  tags: [
    "serverless",
    "cloud costs",
    "aws lambda",
    "vercel",
    "containers",
    "architecture",
  ],
  author: "solyio",
  publishedAt: "2026-08-03",
  eyebrow: "Cost Decision",
  primaryKeyword: "when to move off serverless",
  keyTakeaways: [
    "Serverless stops being cheaper when your compute is busy more than roughly 40-50% of the time; below about 10% duty cycle a container you pay for around the clock mostly sits idle and costs more.",
    "The single most useful number is average concurrent executions. Below 0.5 sustained, stay on serverless. Above 5 sustained on flat traffic, containers typically cut the compute bill by 50-70%.",
    "At 1 GB and 400 ms per request, list-price Lambda plus HTTP API costs roughly $3/month at 10,000 requests a day and roughly $250/month at 1 million a day, while two small VPS instances behind a load balancer cost $18-$56/month across that entire range.",
    "Function weight moves the crossover more than traffic does: at 2 GB and 1.5 seconds per job, serverless loses to containers somewhere between 10,000 and 50,000 jobs a day instead of between 200,000 and 1 million.",
    "Most oversized Vercel bills are function duration, bandwidth and image optimization — not invocation count. Fix caching and image handling first; that resolves a large share of bill spikes without touching your architecture.",
    "The stable end state for most teams is hybrid: containers for the steady API and database access, serverless kept for webhooks, cron, image handling and genuinely spiky endpoints.",
  ],
  blocks: [
    {
      type: "p",
      text: "The crossover is not a request count. It is a duty cycle. Serverless bills you roughly twice the per-vCPU-hour rate of a container but charges nothing while idle, so it wins whenever your compute sits idle most of the time and loses once it does not. As a working threshold: below about 10% duty cycle serverless is clearly cheaper, between 10% and 40% it is a genuine toss-up, and above 40-50% containers win — usually by 2-3x on compute alone.",
    },
    {
      type: "p",
      text: "Everything below is the arithmetic behind that, priced at published list rates as of 2026, plus the four symptoms that mean you have already crossed the line and the honest case for staying exactly where you are.",
    },
    {
      type: "stats",
      items: [
        {
          value: "~2x",
          label: "Lambda vs. Fargate per vCPU-hour of always-on compute",
          note: "$0.104/hr vs. $0.049/hr at list price, us-east-1",
        },
        {
          value: "40-50%",
          label: "Duty cycle where containers overtake serverless",
          note: "Lower for memory-heavy or long-running work",
        },
        {
          value: "1.4",
          label: "Average concurrent 1 GB functions inside Vercel Pro's included allowance",
          note: "1,000 GB-hours divided by 730 hours in a month",
        },
      ],
    },

    { type: "h2", text: "The short answer: duty cycle, not request count" },
    {
      type: "p",
      text: "Serverless is cheaper than containers until your functions are busy more than roughly 40-50% of the time. That is the whole decision in one line. A 1,769 MB Lambda — the size at which AWS gives you one full vCPU — costs about $0.104 per hour of execution at list price. An ECS Fargate task with 1 vCPU and 2 GB costs about $0.049 per hour. Lambda is roughly 2x more expensive per unit of compute, and that premium is exactly what you pay for not having to provision anything.",
    },
    {
      type: "p",
      text: "So the math is simple. If your workload would keep a container busy 20% of the time, serverless costs you 2x on 20% of the hours and zero on the other 80% — you win. If it would keep that container busy 60% of the time, you are paying a 2x premium on most of the month and the container is the better buy. The break-even sits a little under 50%, and it drops further once you add API Gateway, log ingestion and egress, which containers either avoid or pay less for.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Check the bill before you check the architecture",
      text: "A large share of alarming serverless bills are not a compute problem at all. On Vercel, the usual culprits are uncached responses burning bandwidth, unbounded `next/image` transformations, and observability add-ons — none of which a migration fixes and all of which get carried over to your new platform. Rank your line items by dollar amount first. If function duration is not the top item, you have a caching bug, not a platform problem.",
    },

    { type: "h2", text: "The break-even table: 10k, 50k, 200k and 1M requests a day" },
    {
      type: "p",
      text: "For a typical synchronous API request — 1 GB of memory, 400 ms of billed duration, an HTTP response of about 30 KB — serverless stays cheaper all the way up to somewhere between 200,000 and 1 million requests a day. That is a much higher ceiling than most cost-panic threads will tell you, and it is the first honest thing to say: at light request weights, Lambda and Cloud Run are genuinely inexpensive.",
    },
    {
      type: "table",
      caption:
        "Light synchronous API: 1 GB, 400 ms billed duration, 30-day month, us-east-1 / us-central1 list prices, free tiers excluded. Container columns assume peak traffic at 3x average and two instances for high availability. Egress excluded: at 30 KB per response it adds roughly nothing at 10k/day and roughly $72/month at 1M/day on AWS, and nothing on a host that bundles 20 TB of transfer.",
      headers: [
        "Requests/day",
        "Lambda + HTTP API + logs",
        "Cloud Run (request-billed)",
        "Fargate, 2 tasks + ALB",
        "2 VPS + load balancer",
      ],
      rows: [
        ["10,000 (300k/mo)", "~$3", "~$4", "~$58", "~$18"],
        ["50,000 (1.5M/mo)", "~$13", "~$17", "~$58", "~$18"],
        ["200,000 (6M/mo)", "~$50", "~$66", "~$94", "~$30"],
        ["1,000,000 (30M/mo)", "~$251", "~$330", "~$318", "~$56"],
      ],
    },
    {
      type: "p",
      text: "Two things in that table are worth sitting with. First, Fargate loses at low volume — not because containers are expensive, but because the *floor* is expensive. Two tasks plus an Application Load Balancer costs about $58/month whether you serve ten requests a day or ten million, and the ALB alone is most of it. Second, the VPS column barely moves. That flat line is the real argument for containers: you are buying capacity, not consumption, and capacity you already own is free to use harder.",
    },
    {
      type: "p",
      text: "The VPS column also hides a cost the others do not. Managed platforms do patching, host failure recovery, TLS renewal and capacity planning invisibly. Two rented boxes do not. Budget several hours a month of real engineering attention, and if your team does not have someone who will genuinely do that work, treat the VPS column as fiction and compare Lambda against Fargate or Cloud Run instead.",
    },

    { type: "h2", text: "Function weight moves the crossover more than traffic does" },
    {
      type: "p",
      text: "Make each invocation heavier and the crossover collapses. The same four traffic volumes, run at 2 GB and 1.5 seconds per job — a PDF render, a scrape, a batch transform, a model call that holds weights in memory — put containers ahead somewhere between 10,000 and 50,000 jobs a day rather than between 200,000 and 1 million. That is a 20x shift in the threshold, driven entirely by how long each invocation runs.",
    },
    {
      type: "table",
      caption:
        "Heavier, queueable work: 2 GB, 1.5 s per job, asynchronous. Because the work can be queued, container columns are sized for 70% sustained utilization instead of provisioning for peak, and need no load balancer. List prices as of 2026, free tiers excluded.",
      headers: [
        "Jobs/day",
        "Lambda (2 GB / 1.5 s)",
        "Fargate workers at 70% utilization",
        "Self-managed VMs at 70% utilization",
      ],
      rows: [
        ["10,000", "~$16", "~$18", "~$12"],
        ["50,000", "~$78", "~$36", "~$12"],
        ["200,000", "~$310", "~$141", "~$50"],
        ["1,000,000", "~$1,551", "~$705", "~$110"],
      ],
    },
    {
      type: "p",
      text: "The reason is structural, not incidental. Serverless prices wall-clock time, so a function waiting 900 ms on an S3 read and a database round trip is billed for compute it never used. A queue plus a worker pool prices *capacity*, so the same waiting overlaps across jobs and disappears into utilization. The more of your invocation is I/O wait, the worse the serverless deal gets — which is the opposite of the intuition most teams start with.",
    },

    { type: "h2", text: "How to measure your duty cycle in ten minutes" },
    {
      type: "p",
      text: "Duty cycle is total billed function-seconds divided by wall-clock seconds in the same period. The result is your average concurrent executions — the number of workers you would need running continuously to do the same work. You already have every number required, and it takes about ten minutes to pull.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Get total billed function-seconds for 30 days",
          text: "On AWS: CloudWatch, namespace `AWS/Lambda`, metric `Duration`, statistic **Sum**, period 30 days, divided by 1,000 to convert from milliseconds. On Vercel: the Usage tab gives you function GB-hours directly. On Cloud Run: `run.googleapis.com/container/billable_instance_time`.",
        },
        {
          title: "Divide by the seconds in the period",
          text: "2,592,000 seconds in 30 days. For Vercel, divide GB-hours by 730 hours and then by your configured memory in GB. Example: 1,000 GB-hours on a 1 GB function is 1.37 average concurrent executions — which happens to be exactly what Vercel Pro's included allowance buys you.",
        },
        {
          title: "Pull peak concurrency for the same window",
          text: "CloudWatch `ConcurrentExecutions` with statistic **Maximum** at a one-minute period. On Vercel, the concurrency chart in Observability. This is the number a container fleet would have to be provisioned against.",
        },
        {
          title: "Compute flatness: average divided by peak",
          text: "Above 0.4 your traffic is flat and a container fleet wastes little headroom. Below 0.15 you are spiky, and any fleet you provision will idle most of the day — which is the case serverless was built for.",
        },
      ],
    },
    {
      type: "table",
      caption:
        "The decision grid. Average concurrency is how much compute you are buying; flatness (average divided by peak concurrency) is how much a container fleet would have to over-provision to cover your peaks.",
      headers: [
        "Average concurrent executions",
        "Flat traffic (avg/peak above 0.4)",
        "Spiky traffic (avg/peak below 0.15)",
      ],
      rows: [
        ["Under 0.5", "Stay on serverless", "Stay on serverless"],
        ["0.5 - 2", "Containers, marginally — not worth a migration alone", "Stay on serverless"],
        ["2 - 5", "Containers win; expect 40-60% off compute", "Toss-up; decide on operational fit, not price"],
        ["Over 5 sustained", "Containers win decisively; 50-70% off compute", "Hybrid: containers for the baseline, serverless for the spikes"],
      ],
    },

    { type: "h2", text: "How a Vercel bill is actually built in 2026" },
    {
      type: "p",
      text: "Vercel bills six things that can each independently blow up, and invocation count is not one of them. The Pro plan is $20 per seat per month and includes roughly 1 TB of bandwidth, 1,000 GB-hours of function execution, 5,000 image optimizations and 6,000 build minutes. Everything past those lines is metered, and the meters that surprise people are duration, bandwidth and image optimization — in that order.",
    },
    {
      type: "table",
      caption:
        "Indicative Vercel list rates as of 2026, US regions. Vercel has been actively changing this model — the Fluid compute Active CPU rates replaced flat GB-hour billing for functions — so treat these as an order-of-magnitude guide and confirm against your own invoice and region before modeling anything.",
      headers: ["Line item", "Pro includes", "Indicative overage", "What actually drives it"],
      rows: [
        ["Seats", "1", "~$20/seat/month", "Team size, not traffic"],
        [
          "Function execution (legacy GB-hours)",
          "1,000 GB-hours",
          "~$0.18/GB-hour",
          "Memory setting multiplied by wall-clock time, including I/O wait",
        ],
        [
          "Fluid compute — Active CPU",
          "Plan-dependent",
          "~$0.128 per Active CPU-hour (iad1)",
          "Genuine CPU work: rendering, serialization, crypto",
        ],
        [
          "Fluid compute — Provisioned Memory",
          "Plan-dependent",
          "~$0.0106 per GB-hour (iad1)",
          "Memory size multiplied by wall time — still billed while waiting on I/O",
        ],
        ["Fast Data Transfer", "~1 TB", "~$0.15/GB", "Uncached responses, large JSON payloads, unoptimized assets"],
        [
          "Image Optimization",
          "~5,000 transformations",
          "~$5 per 1,000",
          "Unbounded `next/image` sources and many size or format variants per source",
        ],
        ["Build execution", "~6,000 minutes", "~$0.005/minute", "A preview deploy per pull request, monorepo full rebuilds"],
      ],
    },
    {
      type: "p",
      text: "Fluid compute's Active CPU pricing is a real improvement and it changes the advice. By splitting the bill into CPU time (charged only while your code is on the CPU) and provisioned memory (charged for the whole wall clock), it removes most of the penalty for I/O-bound handlers. If your functions are mostly waiting on a database, Fluid compute may cut your bill enough that the migration question goes away. If your functions are genuinely CPU-bound, it changes very little — the Active CPU meter runs the whole time.",
    },
    {
      type: "p",
      text: "Before you price a migration, do the two cheap fixes. Put real `Cache-Control` and `stale-while-revalidate` headers on anything that is not per-user, and constrain `next/image` to a fixed set of sources and widths. We have seen both of those, done in an afternoon, take more off a bill than a platform move would have. If you want a second pair of eyes on which line item is actually bleeding, that is the kind of thing our [cloud infrastructure team](/services/cloud-infrastructure) looks at first.",
    },

    { type: "h2", text: "Four symptoms that mean you have already crossed the line" },
    {
      type: "p",
      text: "You do not need to run the arithmetic if you have any two of these four. Each one is a case where the serverless pricing model is working against the shape of your workload rather than with it.",
    },
    { type: "h3", text: "1. A flat traffic baseline" },
    {
      type: "p",
      text: "If your traffic graph looks like a plateau with a modest business-hours bump rather than a series of spikes, you are paying the on-demand premium for capacity you could simply have bought. A B2B API serving 200,000 predictable requests a day with a 2-to-1 peak-to-trough ratio is the textbook case: the elasticity you are paying roughly 2x for is elasticity you never use. This is where teams most often find their serverless bill running around 3x the container equivalent once egress and gateway charges are added in.",
    },
    { type: "h3", text: "2. Long-running or memory-heavy work" },
    {
      type: "p",
      text: "PDF generation, video transcoding, scraping, large batch transforms, and anything that loads a model into memory all price badly on serverless. You pay for memory across the full wall clock, you hit hard execution ceilings, and you cannot amortize an expensive initialization across requests. A worker that loads a 400 MB model once and then serves a thousand jobs is not just cheaper than a function that loads it a thousand times — it is a different order of magnitude.",
    },
    { type: "h3", text: "3. Chatty database access" },
    {
      type: "p",
      text: "Serverless and connection-pooled databases are a structurally awkward pair. Each concurrent execution wants its own connection, Postgres has a hard connection ceiling, and the standard fix — a pooler such as PgBouncer, RDS Proxy or a provider's serverless driver — adds a network hop to every query and rules out prepared statements in transaction mode. A long-lived container holds ten connections open forever and queries across them with no per-request setup. If your p95 is dominated by database round trips and you are running a pooler purely to survive concurrency, containers remove the problem rather than managing it.",
    },
    { type: "h3", text: "4. Your bill is less predictable than your traffic" },
    {
      type: "p",
      text: "This is the softest symptom and often the decisive one. If traffic grew 20% and the invoice grew 60%, some meter is coupled to something other than demand — a retry storm, a cache miss cliff, a new image source, a middleware that now runs on every static asset. Consumption pricing means every bug has a price tag attached, and the feedback arrives a month late. Fixed capacity converts that class of incident from a financial surprise into a latency alert, which is a much easier thing to be on call for.",
    },

    { type: "h2", text: "Cold starts in 2026: mostly solved, still not free" },
    {
      type: "p",
      text: "Cold starts are no longer a good reason to leave serverless for typical workloads. Node.js and Python functions now cold-start in roughly 100-500 ms, ARM-based functions initialize meaningfully faster than x86, and SnapStart brings JVM and .NET starts down from multiple seconds to the low hundreds of milliseconds by restoring a pre-initialized snapshot. For most CRUD APIs this is now below the noise floor of the network.",
    },
    {
      type: "p",
      text: "What is not solved: very large dependency bundles, VPC-attached functions with heavy initialization, and anything that must hold state or a model in memory across requests. Provisioned concurrency fixes the latency but destroys the economics — you are now paying for idle capacity at serverless rates, which is strictly worse than paying for idle capacity at container rates. If you are considering provisioned concurrency for more than a handful of instances, you have already answered the migration question.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "The provisioned-concurrency tell",
      text: "Buying provisioned concurrency is buying a container with extra steps and a worse price. If more than about 20% of your invocations are being served by pre-warmed capacity, price the equivalent container fleet — it is almost always cheaper and usually faster, because a warm container also keeps its database connections and caches.",
    },

    { type: "h2", text: "The hybrid almost everyone should land on" },
    {
      type: "p",
      text: "The stable end state is not serverless or containers — it is containers for the steady-state API and serverless for the spiky edges. Put the thing that runs continuously on capacity you own: the HTTP API, the server-rendered routes, the database access layer. Leave on serverless the things that are genuinely bursty, rarely running, or operationally annoying to host: inbound webhooks, scheduled jobs, image transformation, one-off exports, third-party callbacks.",
    },
    {
      type: "callout",
      variant: "key",
      title: "The split that works",
      text: "Containers handle the compute you would have to provision anyway. Serverless handles the compute you cannot predict. You keep elastic scale exactly where elasticity has value and stop paying the on-demand premium everywhere else — which for most teams captures 70-80% of the theoretical saving at a fraction of the migration risk.",
    },
    {
      type: "p",
      text: "This is also the split that survives contact with a real team. A full migration puts every endpoint, every cron job and every webhook on the critical path at once. A hybrid move lets you migrate the top three endpoints by GB-hours, verify the bill actually dropped, and stop there if it did. Most of the platform work we do on [cloud infrastructure](/services/cloud-infrastructure) engagements ends in this shape rather than a clean-sheet rebuild.",
    },

    { type: "h2", text: "What moving actually costs, and the four things that always break" },
    {
      type: "p",
      text: "For a typical Next.js or Node API, budget two to six weeks of part-time engineering. The application code is rarely the hard part — a Node service that runs in a function usually runs in a container with minimal change. The work is in the invisible things the managed platform was doing for you, and it is consistently these four:",
    },
    {
      type: "ol",
      items: [
        "**Preview deploys.** Rebuilding per-branch preview environments in your own CI is the single largest line item, usually three to seven days. This is the capability teams most regret losing and most underestimate replacing.",
        "**Cron and background jobs.** Platform-native scheduling has to become an actual scheduler — ECS Scheduled Tasks, a Kubernetes CronJob, or a queue worker — with its own retry semantics, dead-lettering and alerting, none of which the managed platform made you think about.",
        "**Platform-specific APIs.** Edge middleware, image optimization, ISR, framework-specific caching primitives and request-context helpers do not have drop-in container equivalents. Each one needs a named replacement before you start, not during.",
        "**Environment parity and secrets.** Config that lived in a dashboard now needs a real secret store, a bootstrap path, and a way to keep staging honest. This is where most of the post-migration incidents come from.",
      ],
    },
    {
      type: "p",
      text: "Then do the payback arithmetic before committing. A migration that saves $500/month and costs six weeks of senior engineering time does not pay back inside two years, and in that window you will likely re-platform anyway. Our own [pricing](/pricing) starts at $6,900 for a Build engagement, with larger platform moves quoted to scope — which means a migration is worth commissioning at roughly $1,500/month of savings and above, and is usually not worth it below $500/month.",
    },
    {
      type: "table",
      caption:
        "Payback on a migration engagement. Assumes the saving is durable and traffic is not about to change shape; if you are pre-product-market-fit, treat every row as longer than it looks.",
      headers: ["Monthly saving", "Engagement at $6,900", "Engagement at $20,000", "Verdict"],
      rows: [
        ["$300", "23 months", "67 months", "Do not migrate — optimize instead"],
        ["$800", "9 months", "25 months", "Only if you had platform reasons anyway"],
        ["$1,900", "4 months", "11 months", "Worth doing"],
        ["$5,000", "1.4 months", "4 months", "Should already be underway"],
      ],
    },

    { type: "h2", text: "What you give up, and how to rebuild each piece" },
    {
      type: "p",
      text: "Leaving a managed platform costs you three things that were genuinely valuable, and pretending otherwise is how migrations end badly. Price the replacement for each before you decide, because together they eat a meaningful share of the saving.",
    },
    {
      type: "ul",
      items: [
        "**Preview deploys per pull request.** Replaceable with ephemeral environments in GitHub Actions plus a wildcard subdomain and a per-branch container, but it is real work to build and real work to keep working. Some teams solve this by keeping the frontend on Vercel and moving only the API — the cheapest answer available.",
        "**Zero-ops upgrades and patching.** You now own base image updates, OS patching and runtime upgrades. Managed container runtimes such as Fargate or Cloud Run remove the host layer entirely and are worth the roughly 2x premium over raw VMs for most teams without a platform engineer.",
        "**Instant autoscale.** Container autoscaling is minutes, not milliseconds. If you have genuine flash traffic, keep those specific routes on serverless rather than over-provisioning the fleet to survive a spike you see twice a year.",
        "**Global edge distribution.** A CDN in front of your origin recovers most of this for static assets and cacheable responses. What you do not easily recover is running application logic near the user — if that is load-bearing for your product, weight it heavily.",
      ],
    },

    { type: "h2", text: "Worked example: a $2,300 Vercel bill modeled down to roughly $400" },
    {
      type: "p",
      text: "This is a modeled example built from the list rates in this article, not a specific client invoice — but the shape is the one we see most often. A team on Vercel Pro with three seats, a server-rendered app with heavy database access and an image-rich catalog, running about 250,000 requests a day.",
    },
    {
      type: "table",
      caption:
        "Before and after. The saving is concentrated in function duration and bandwidth, and the frontend never leaves Vercel — preview deploys are preserved by moving only the API and the data-heavy render path.",
      headers: ["Line item", "Before", "After", "What changed"],
      rows: [
        ["Seats (3)", "$60", "$60", "Unchanged — frontend stays on Vercel"],
        [
          "Function execution",
          "$1,332",
          "$72",
          "8,400 GB-hours moved to two Fargate tasks at 1 vCPU / 2 GB",
        ],
        ["Load balancing", "$0", "$25", "New: ALB plus LCU charges"],
        [
          "Bandwidth",
          "$630",
          "$40",
          "5.2 TB dropped to ~450 GB of origin egress once cache headers were correct; CDN serves the rest",
        ],
        ["Image optimization", "$210", "$50", "47,000 transformations moved to a CDN image pipeline with a fixed width set"],
        ["Build minutes", "$40", "$25", "Preview builds scoped to changed packages"],
        ["Logs and observability", "$28", "$35", "Slightly worse: self-managed log ingestion with sampling"],
        ["**Total invoices**", "**$2,300**", "**$307**", "~$2,000/month saved"],
        [
          "**All-in with ops time**",
          "**$2,300**",
          "**~$400**",
          "Adding roughly $100/month of engineering attention for patching and on-call",
        ],
      ],
    },
    {
      type: "p",
      text: "Note how much of that saving came from caching rather than from the platform move. The bandwidth line fell 94% because responses that should always have been cacheable were not — a fix worth $590/month that required no migration at all. That is the general pattern, and it is why the first recommendation in this article is to rank your line items before you rewrite anything.",
    },

    { type: "h2", text: "When staying on serverless is correct, even at $2,000 a month" },
    {
      type: "p",
      text: "Sometimes the right answer is to keep paying. A $2,000 monthly bill that buys you zero infrastructure headcount is cheap — it is well under a quarter of one engineer's fully loaded cost. If any of the following are true, stay where you are and spend the engineering time on your product instead:",
    },
    {
      type: "ul",
      items: [
        "**Your traffic is genuinely spiky.** Average-to-peak concurrency below 0.15 means a container fleet would idle through most of the day at a 2x-cheaper rate on capacity you barely use. That is not a saving.",
        "**Nobody on the team wants to own infrastructure.** A platform nobody maintains degrades. If the honest answer to \"who patches this\" is silence, the managed bill is buying you something real.",
        "**You are still changing shape.** Pre-product-market-fit, your traffic profile in six months is unknowable and elasticity has genuine option value. Optimize your bill; do not re-platform.",
        "**Your app is genuinely global.** If latency from edge execution is load-bearing for conversion, replicating that across regions on containers costs more than the serverless premium you are trying to escape.",
        "**The saving is under about $500/month.** At that level the migration will not pay back before your architecture changes for some other reason.",
      ],
    },
    {
      type: "p",
      text: "We will say this to your face on a scoping call, and we have talked teams out of migrations that would have made us money. A platform move that saves $300/month and costs a quarter of roadmap is a bad trade, and the fastest way to tell is the concurrency number in the grid above. If you are unsure which side of it you are on, the [contact form](/contact) gets you a straight answer faster than another week of spreadsheet.",
    },

    { type: "h2", text: "The six-question decision test" },
    {
      type: "p",
      text: "Score one point for each yes. Four or more means move the steady-state workload to containers. Two or three means do the hybrid split. Zero or one means stay on serverless and fix your caching.",
    },
    {
      type: "ol",
      items: [
        "Is your average concurrent execution count above 2, sustained over a full week?",
        "Is average concurrency divided by peak concurrency above 0.4 — that is, is your traffic flat rather than spiky?",
        "Does any single function average more than 1 second of billed duration, or run at 2 GB or more?",
        "Are you running a connection pooler purely to survive function concurrency, rather than for genuine query volume?",
        "Have you bought provisioned concurrency, or are you seriously considering it for more than a handful of instances?",
        "Would the modeled monthly saving exceed $1,500, after you have already fixed caching and image handling?",
      ],
    },
    {
      type: "p",
      text: "Question six is deliberately last and deliberately conditional. Most teams who answer yes to four of the first five will find that fixing caching takes them from a clear yes on six to a marginal one — which is exactly the right order to discover it, because the fix is an afternoon and the migration is six weeks.",
    },

    {
      type: "cta",
      title: "Want the number run against your actual bill?",
      text: "Send us a month of usage data and we will tell you your real duty cycle, what a container equivalent would cost, and whether the migration pays back — including when the answer is that it does not. We build and operate both sides of this, on [web platforms](/services/web-development) and on the [infrastructure](/services/cloud-infrastructure) underneath them.",
      buttonLabel: "Book a 30-minute review",
      href: "/book",
    },

    { type: "divider" },
    {
      type: "p",
      text: "All third-party prices in this article are published list rates gathered in 2026 for US regions (us-east-1, us-central1, iad1) and exclude free tiers, committed-use discounts, Savings Plans and Spot pricing, any of which can shift the comparison by 30-70%. Vendor pricing — Vercel's in particular — has been changing quickly; confirm against your own invoice before making a decision. You can see the kind of platforms these numbers come out of in our [case studies](/portfolio), including advertising and marketing products such as [CashAds](/portfolio/cashads) and [RoboMarketer](/portfolio/robomarketer).",
    },
  ],
  faqs: [
    {
      q: "At what point does AWS Lambda become more expensive than a server?",
      a: "The crossover is driven by duty cycle, not request count alone. Lambda charges roughly $0.104 per hour for one vCPU-equivalent versus about $0.049 per hour on Fargate, so serverless costs about 2x per unit of compute but nothing while idle. That makes it cheaper below roughly a 10% duty cycle, a toss-up between 10% and 40%, and more expensive above 40-50%. In request terms, for a light 1 GB / 400 ms API the crossover falls between 200,000 and 1 million requests a day; for a 2 GB / 1.5 s job it falls between 10,000 and 50,000 a day.",
    },
    {
      q: "Why is my Vercel bill suddenly so high?",
      a: "In most cases it is not invocation count — it is function duration, bandwidth and image optimization compounding as traffic grows, plus observability add-ons. Open the Usage tab and rank line items by dollar amount before changing any architecture. A large share of oversized bills are fixed by adding correct Cache-Control headers to responses that should never have been dynamic, and by constraining next/image to a fixed set of sources and widths, with no migration required.",
    },
    {
      q: "Do I have to leave serverless entirely?",
      a: "No, and you usually should not. The stable end state for most teams is a container running the steady-traffic API and database access, with serverless kept for webhooks, cron, image handling and genuinely spiky endpoints. That hybrid typically captures 70-80% of the theoretical saving while keeping elastic scale on the unpredictable paths, and it lets you migrate your three most expensive endpoints first and stop if the bill drops enough.",
    },
    {
      q: "How long does it take to migrate from serverless to containers?",
      a: "For a typical Next.js or Node API, budget two to six weeks of part-time work: containerizing the app, replacing platform-specific APIs, rebuilding preview deploys in CI, and moving cron and background jobs. The long pole is rarely the application; it is the deploy pipeline and the environment parity work the managed platform was doing invisibly. Rebuilding per-pull-request preview environments alone is usually three to seven days.",
    },
    {
      q: "Are cold starts still a problem in 2026?",
      a: "For typical JavaScript and Python workloads, cold starts now land in the range of roughly 100-500 ms and are rarely the deciding factor. They still matter for large dependency bundles, JVM and .NET runtimes without SnapStart, VPC-attached functions with heavy initialization, and anything holding a model in memory. In those cases a warm container is both faster and cheaper, because it also keeps database connections and caches alive between requests.",
    },
    {
      q: "Is Cloud Run cheaper than Lambda?",
      a: "It depends on how your work maps to CPU allocation. Cloud Run's request-based billing allocates at least a full vCPU per instance, so at list price it often costs more per request than a 1 GB Lambda, which gets roughly 0.57 vCPU. Cloud Run wins back ground by needing no separate API gateway, by billing per 100 ms with a more generous free tier, and by allowing concurrent requests per instance — which for I/O-bound handlers can cut effective cost several-fold. For a CPU-bound single-concurrency workload, Lambda on ARM is usually cheaper.",
    },
  ],
}
