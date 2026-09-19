import type { Post } from "../types"

export const post: Post = {
  slug: "heroku-to-aws-migration-cost-timeline",
  title:
    "Moving Off Heroku: What the Migration Really Costs, How Long It Takes, and How to Cut Over With Under Five Minutes of Downtime",
  seoTitle: "Heroku to AWS Migration: Cost, Timeline, Downtime",
  description:
    "What moving off Heroku really costs in 2026: list-price comparisons, a nine-step runbook, and how to cut Postgres over in under five minutes of downtime.",
  excerpt:
    "Most Heroku migrations run $4,000-$18,000 and three to eight weeks. Here is the price math, the destination comparison, and the cutover method that keeps the write freeze under five minutes.",
  category: "cloud-devops",
  tags: ["heroku", "aws", "cloud migration", "devops", "postgres", "cost guide"],
  author: "solyio",
  publishedAt: "2026-09-01",
  eyebrow: "Migration Guide",
  primaryKeyword: "heroku to aws migration cost",
  keyTakeaways: [
    "Migrating a typical production app off Heroku costs $4,000-$18,000 in engineering time and takes three to eight weeks from inventory to the end of the post-cutover watch window.",
    "With Postgres logical replication and DNS TTL lowered to 60 seconds beforehand, the write-freeze window at cutover is two to five minutes; a dump-and-restore instead costs 30 minutes to several hours, scaling with database size.",
    "Heroku's 2026 list prices are $5/month Eco, $7 Basic, $25 Standard-1X, $50 Standard-2X, $250 Performance-M and $500 Performance-L per dyno, with Postgres at $5 for Essential-0 and $50 for Standard-0.",
    "A three-process app with Postgres and Redis costs roughly $130-$160/month on Heroku and roughly $75-$160/month on AWS, so the savings case is weak at Standard tier and strong above it.",
    "Payback is six to fourteen months for teams spending more than about $500/month on Heroku; below roughly $300/month the migration never pays for itself on infrastructure savings alone.",
    "The closest like-for-like replacements for a small team are Render and Fly.io; choose AWS when you pass roughly $1,000/month of spend, need compliance controls, or want one cloud account for everything.",
  ],
  blocks: [
    {
      type: "p",
      text: "A Heroku migration for one production app with a database, background workers and a handful of add-ons costs $4,000 to $18,000 in engineering time and takes three to eight weeks of calendar time. The cutover itself — the part everyone is actually nervous about — is two to five minutes of frozen writes if you move Postgres with logical replication, and anywhere from thirty minutes to several hours if you move it with `pg_dump`. Everything else in this post is detail on those two numbers: where the money goes, where the weeks go, and which decisions change them.",
    },
    {
      type: "p",
      text: "This is a vendor-neutral runbook. We do this work under [cloud infrastructure](/services/cloud-infrastructure), so we have an obvious interest, and we will tell you plainly in the last section when the right answer is to stay on Heroku and spend the money on product instead.",
    },

    { type: "h2", text: "The short answer: $4,000-$18,000, three to eight weeks, two to five minutes down" },
    {
      type: "p",
      text: "A single production app — web processes, one or two background workers, Postgres, Redis, a few add-ons — is a $4,000-$9,000 project at the small end and $12,000-$18,000 when there are six or more processes, queues that cannot lose messages, or a compliance requirement attached. Calendar time is three to eight weeks, of which roughly one week is inventory, two to four weeks is building and running the new stack in parallel, one evening is the cutover, and 72 hours is the watch window nobody budgets for and everybody needs.",
    },
    {
      type: "stats",
      items: [
        { value: "$4k-$18k", label: "Engineering cost", note: "One production app, inventory through watch window" },
        { value: "3-8 weeks", label: "Calendar time", note: "Roughly half of it parallel-running" },
        { value: "2-5 min", label: "Write freeze at cutover", note: "Logical replication + 60s DNS TTL" },
        { value: "40-70%", label: "Compute saving", note: "At Standard dynos and above; near zero below" },
      ],
    },
    {
      type: "p",
      text: "What moves you inside that range is not the language or the framework. It is four things: how many processes run outside the main web app, whether anyone can still explain the config vars, whether the database has pinned extensions or a non-default collation, and whether you need a compliance story at the end. A Rails app with three processes and a clean `Procfile` is the cheap end. A Django monolith with eleven config vars nobody recognizes, a cron job that emails finance, and a PDF library that needs system packages is the expensive end.",
    },

    { type: "h2", text: "Heroku's 2026 price list, line by line" },
    {
      type: "p",
      text: "Heroku's published 2026 dyno prices are $5/month for Eco, $7 for Basic, $25 for Standard-1X, $50 for Standard-2X, $250 for Performance-M and $500 for Performance-L, each per dyno per month. Postgres starts at $5/month for Essential-0 and jumps to $50/month for Standard-0, the first plan Heroku describes as production-grade. These are list prices as of September 2026 and Heroku prorates most of them to the second, so treat them as monthly ceilings rather than guaranteed charges.",
    },
    {
      type: "table",
      caption: "Heroku list prices, September 2026. Per dyno or per add-on instance, per month.",
      headers: ["Plan", "What you get", "List price/month"],
      rows: [
        ["Eco dyno", "Pooled hours, sleeps when idle — not for production", "$5"],
        ["Basic dyno", "512 MB, always on, no horizontal scaling", "$7"],
        ["Standard-1X", "512 MB, autoscaling, metrics, preboot", "$25"],
        ["Standard-2X", "1 GB, same features as 1X", "$50"],
        ["Performance-M", "2.5 GB, dedicated compute", "$250"],
        ["Performance-L", "14 GB, dedicated compute", "$500"],
        ["Postgres Essential-0", "Row-limited, no in-place upgrade path", "$5"],
        ["Postgres Essential-1 / 2", "Larger row and storage limits", "$9 / $20"],
        ["Postgres Standard-0", "First production tier: followers, PITR, no row cap", "$50"],
        ["Key-Value Store Mini", "Small Redis-compatible cache", "$3"],
        ["Key-Value Store Premium", "HA Redis-compatible, starts around", "$15+"],
      ],
    },
    {
      type: "callout",
      variant: "info",
      title: "Verify before you quote these internally",
      text: "Every price here is list price checked in September 2026 and Heroku changes them. Before you put a number in a board deck, pull your own last three invoices — actual spend is almost always higher than the plan list because of prorated one-off dynos, `heroku run` usage and add-ons somebody enabled two years ago.",
    },

    { type: "h2", text: "The real trigger is rarely the dynos — it is Postgres and the add-on stack" },
    {
      type: "p",
      text: "Most teams who call us about leaving Heroku are not annoyed about dyno prices. They are stuck on a database ladder. Postgres Essential-2 is $20/month and the next rung, Standard-0, is $50/month — and crossing it is not a slider, it is a plan change with a maintenance window. Above that the ladder keeps climbing in steps that do not map to how much database you actually need, and Essential plans have no in-place upgrade path at all.",
    },
    {
      type: "p",
      text: "The second trigger is the add-on bill. Nobody decides to spend $180/month on Heroku; they add a logging add-on, a Redis instance, a scheduler, an error tracker and a metrics dashboard over three years and then read the invoice. The classic moment of clarity is discovering that the add-ons cost more than the dynos.",
    },
    {
      type: "ul",
      items: [
        "**Database ceilings.** You need a bigger instance, more connections, a read replica, or a Postgres extension Heroku does not ship.",
        "**Add-on sprawl.** Four to eight add-ons whose combined cost exceeds the compute bill.",
        "**Compliance.** A customer asks for a VPC diagram, data residency, audit logs, or a signed BAA and the platform answer is a support ticket.",
        "**Network isolation.** You need private networking to a service that is not on Heroku, and Private Spaces pricing is a large step up.",
        "**Consolidation.** Half your stack is already on AWS and you are paying two vendors to run one product.",
        "**The bus factor.** The person who set up Heroku has left and nobody can safely change anything.",
      ],
    },

    { type: "h2", text: "The same app priced both ways" },
    {
      type: "p",
      text: "A three-process app with Postgres and Redis costs roughly $130-$160/month on Heroku and roughly $75-$160/month on AWS depending on how lean you build it — which means at this size migrating purely to save money is not worth it. The table below prices the same workload three ways at September 2026 US East list prices. AWS Fargate is billed around $0.04048 per vCPU-hour and $0.004445 per GB-hour; we have rounded the monthly figures.",
    },
    {
      type: "table",
      caption: "Three-process web app (2 web, 1 worker) with Postgres and Redis. Indicative US East list prices, September 2026.",
      headers: ["Component", "Heroku", "AWS, built lean", "AWS, like-for-like"],
      rows: [
        ["Web processes (2)", "2 x Standard-1X = $50", "2 Fargate tasks @ 0.25 vCPU / 0.5 GB ≈ $18", "2 tasks @ 0.5 vCPU / 1 GB ≈ $36"],
        ["Background worker (1)", "Standard-1X = $25", "1 task @ 0.25 / 0.5 ≈ $9", "1 task @ 0.5 / 1 ≈ $18"],
        ["Postgres", "Standard-0 = $50", "db.t4g.micro + 20 GB gp3 ≈ $14", "db.t4g.small + 50 GB gp3 ≈ $29"],
        ["Redis / key-value", "Mini $3 to Premium ~$15", "cache.t4g.micro ≈ $12", "cache.t4g.micro ≈ $12"],
        ["HTTPS routing", "Included", "ALB ≈ $17 + LCUs", "ALB ≈ $17 + LCUs"],
        ["Outbound networking", "Included", "Public subnets, no NAT = $0", "1 NAT Gateway ≈ $33 + $0.045/GB"],
        ["Logs and metrics", "Add-on, $0-$15", "CloudWatch ≈ $5", "CloudWatch ≈ $12"],
        ["**Monthly total**", "**~$133-$160**", "**~$75**", "**~$157**"],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "The NAT Gateway line is the one that surprises people",
      text: "A single NAT Gateway is roughly $33/month before you send a byte through it, and a three-availability-zone setup triples that. Teams copying a reference architecture into a small app routinely add $100/month of networking they do not need. For a small production app, tasks in public subnets with tight security groups plus VPC endpoints for S3 and ECR is the cheaper and perfectly defensible pattern.",
    },

    { type: "h2", text: "Where the gap actually opens: Performance tier" },
    {
      type: "p",
      text: "The savings case becomes real above Standard dynos, where Heroku's per-dyno price stops tracking the underlying compute. A Performance-M dyno at $250/month buys 2.5 GB of RAM; comparable Fargate capacity at 2 vCPU and 4 GB is roughly $72/month on demand and around $50 with a one-year Compute Savings Plan. That is where the commonly quoted 50-80% reductions come from — not from the small app.",
    },
    {
      type: "table",
      caption: "Compute only, per process, per month. AWS figures are indicative September 2026 US East rates, rounded.",
      headers: ["Workload size", "Heroku plan", "Comparable AWS compute", "On demand", "1-year commitment"],
      rows: [
        ["Side project", "Basic, $7", "Fargate 0.25 vCPU / 0.5 GB", "~$9", "~$6"],
        ["Small production", "Standard-1X, $25", "Fargate 0.5 vCPU / 1 GB", "~$18", "~$12"],
        ["Memory-hungry", "Standard-2X, $50", "Fargate 1 vCPU / 2 GB", "~$36", "~$24"],
        ["Heavy", "Performance-M, $250", "Fargate 2 vCPU / 4 GB", "~$72", "~$50"],
        ["Very heavy", "Performance-L, $500", "Fargate 4 vCPU / 16 GB", "~$170", "~$120"],
      ],
    },
    {
      type: "p",
      text: "Read that table as a decision rule, not a promise. At Basic and Standard-1X, AWS is a rounding error cheaper and considerably more work. At Performance-M and above, you are paying Heroku a two-to-five-times premium for operational convenience, and at that point the convenience has to be worth roughly $180-$380 per process per month to justify staying.",
    },

    { type: "h2", text: "Where to land: AWS vs Render vs Fly.io vs Railway vs DigitalOcean" },
    {
      type: "p",
      text: "AWS is not automatically the destination. For a team of one to five engineers with no platform specialist, Render and Fly.io are the closest like-for-like replacements for Heroku — git-push deploys, managed Postgres, background workers and cron, without a VPC to design. The cost advantage of AWS only outweighs its operational cost once you have real scale or a compliance requirement.",
    },
    {
      type: "table",
      caption: "Destination comparison. Prices are indicative entry-level list rates as of September 2026 and change often.",
      headers: ["Platform", "Entry price", "Ops burden", "Best for", "Main downside"],
      rows: [
        ["AWS ECS on Fargate", "~$40-$80/mo realistic floor", "High — you own VPC, IAM, logging, alerting", "Teams over ~$1,000/mo, or with compliance needs", "Weeks of setup; easy to overbuild"],
        ["Render", "Web service from ~$7/mo; Postgres from ~$6/mo + storage", "Low", "Rails, Django and Node apps wanting a Heroku feel", "Costs converge with AWS as you scale"],
        ["Fly.io", "Small machines ~$2-$5/mo; managed Postgres from ~$38/mo", "Low-medium", "Latency-sensitive or multi-region apps", "You think about regions and volumes earlier"],
        ["Railway", "Hobby from $5/mo including usage credit", "Low", "Prototypes and internal tools", "Usage-based bills are hard to forecast"],
        ["DigitalOcean App Platform", "Starts around $5/mo", "Low-medium", "Predictable flat pricing, simple apps", "Fewer managed primitives than AWS"],
        ["Stay on Heroku", "Your current bill", "Lowest", "Under ~$300/mo with no compliance pressure", "Ceilings you will hit again later"],
      ],
    },
    {
      type: "p",
      text: "One honest note on lock-in: moving Heroku to Render or Fly.io is largely a `Dockerfile` and a database move, and you can do it again later for a fraction of the cost. Moving Heroku to a full AWS build with Terraform, IAM roles and CI pipelines is a bigger investment that is much harder to unwind. If you are not sure you will still want this architecture in three years, take the cheaper, more reversible step first.",
    },

    { type: "h2", text: "The honest rule: under $300/month go managed, over $1,000/month go AWS" },
    {
      type: "p",
      text: "Use your current monthly Heroku invoice as the deciding number. Under about $300/month, a migration cannot pay for itself in infrastructure savings within a reasonable horizon, so only move if you have a non-cost reason. Between $300 and $1,000/month, move to Render or Fly.io — you capture most of the saving for a fraction of the effort. Above roughly $1,000/month, or under any real compliance requirement, AWS starts to earn its complexity.",
    },
    {
      type: "ol",
      items: [
        "**Under $300/month, no compliance pressure:** stay, or move to Render if you are hitting a specific Heroku ceiling. The engineering time is worth more spent on the product.",
        "**$300-$1,000/month:** move to a managed PaaS. Expect a 30-50% bill reduction and a one-to-three-week project instead of a six-week one.",
        "**Over $1,000/month:** AWS or GCP. The compute savings alone justify the build, and reserved capacity or Savings Plans widen the gap by a further 25-40%.",
        "**Any hard compliance requirement** — VPC isolation, data residency, audit trails, a signed agreement your platform will not sign: go to a cloud you control, at any spend level. This is a security decision, not a cost one, and it usually pairs with a [security review](/services/cyber-security).",
      ],
    },

    { type: "h2", text: "The nine-step runbook we use" },
    {
      type: "p",
      text: "Every migration we run follows the same nine steps in the same order, because the order is what keeps the downtime short. Inventory before infrastructure, parallel-run before cutover, and the database moves by replication rather than by dump. Steps one through three usually take a week, four through six take one to three weeks, and seven through nine happen in a single evening plus the following 72 hours.",
    },
    {
      type: "steps",
      items: [
        {
          title: "1. Full inventory",
          text: "Every dyno type and count, every add-on and plan, every config var, every scheduled job, every Postgres extension, the Postgres version and collation, buildpacks, domains, certificates, log drains, and anything running outside the repository. This is a written document, not a conversation.",
        },
        {
          title: "2. Secrets and config vars",
          text: "Move config vars into AWS Secrets Manager or SSM Parameter Store. Classify each one: still used, rotate at cutover, or delete. Expect 20-40% of them to be dead. Rotate every credential that a departed engineer ever saw.",
        },
        {
          title: "3. Buildpack to Dockerfile",
          text: "Recreate the runtime as an explicit image: correct language version, system packages the buildpack was quietly installing, and a non-root user. Run the test suite inside the image before anything else is built.",
        },
        {
          title: "4. Infrastructure as code",
          text: "VPC, ECS cluster, task definitions, ALB, target groups, RDS instance, ElastiCache, IAM roles, log groups. Write it in Terraform or CDK from the start. Clicking it in the console costs you the second environment and every future change.",
        },
        {
          title: "5. Parallel run",
          text: "The new stack runs against a restored copy of production data on a staging hostname for one to two weeks. Background workers run in dry-run mode where side effects would be visible to customers. Alerting and backups go in now, not after cutover.",
        },
        {
          title: "6. Postgres logical replication",
          text: "Stand up RDS, create a publication on Heroku Postgres and a subscription on RDS, and let it catch up over hours or days. Verify row counts, sequences, extensions and foreign keys while both databases are live.",
        },
        {
          title: "7. DNS cutover",
          text: "Lower the DNS TTL to 60 seconds at least 24 hours ahead. On the night: enable maintenance mode, wait for replication lag to hit zero, bump sequences, repoint DNS, disable maintenance mode. This is the two-to-five-minute window.",
        },
        {
          title: "8. Rollback trigger",
          text: "Write down in advance what makes you roll back — error rate above X%, p95 latency above Y ms, any data-integrity alarm — and who decides. Keep Heroku running and paid for at least two weeks so rollback is DNS-only.",
        },
        {
          title: "9. The 72-hour watch",
          text: "Somebody watches error rates, queue depth, database connections and cost for three days. Most migration failures are not cutover failures; they are the nightly job that did not run and the certificate nobody set to auto-renew.",
        },
      ],
    },

    { type: "h3", text: "Steps 1-3: why the inventory is the deliverable" },
    {
      type: "p",
      text: "The inventory phase is the one clients most want to skip and the one that most reliably saves money. Half the migrations we see quoted badly are quoted badly because nobody counted the scheduled jobs. If the original developer is gone, run the inventory as a standalone paid piece of work and stop there if the numbers do not justify continuing — you still own a document that tells you exactly what your product depends on, which is worth having whether or not you migrate.",
    },
    {
      type: "h3",
      text: "Steps 4-6: logical replication, not pg_dump",
    },
    {
      type: "p",
      text: "Logical replication is the single decision that separates a five-minute cutover from a five-hour one. With `pg_dump` and `pg_restore`, the database is frozen for as long as the dump, the transfer and the restore take — roughly thirty minutes for a few gigabytes and several hours once you are into the tens of gigabytes, plus index rebuild time. With logical replication, the copy happens while the old database is still serving traffic, and the cutover is only the time it takes for the last transactions to drain.",
    },
    {
      type: "callout",
      variant: "key",
      title: "The three things that actually cause cutover downtime",
      text: "**DNS TTL you forgot to lower** — a 3,600-second TTL means an hour of split traffic. **Sequences you forgot to bump** — logical replication does not carry sequence values, so the new database starts handing out primary keys that already exist. **Extensions that did not come across** — `pgcrypto`, `postgis`, `pg_trgm` and friends must exist on the target before the subscription starts. Check all three in the parallel-run week, not on the night.",
    },
    { type: "h3", text: "Steps 7-9: the cutover evening" },
    {
      type: "p",
      text: "The cutover runs in a fixed order and takes under five minutes when the preparation is done. Enable maintenance mode on Heroku so writes stop. Watch replication lag until it reaches zero. Advance every sequence on the target past its current maximum. Run a short read-only smoke test against the new stack. Repoint DNS. Disable maintenance mode. Then leave the old stack running, untouched and paid for, until the watch window closes — deleting Heroku early to save $150 is how a recoverable incident becomes an unrecoverable one.",
    },

    { type: "h2", text: "Replacing Heroku's invisible work" },
    {
      type: "p",
      text: "The hidden cost of leaving Heroku is not compute, it is the dozen small things the platform did that nobody wrote down: review apps, log drains, the scheduler, automated backups, certificate renewal, one-off shells and one-command rollback. Budget three to six engineering days to rebuild them, and expect $10-$80/month of tooling to come back on the bill.",
    },
    {
      type: "table",
      caption: "Heroku feature to replacement, with realistic rebuild effort.",
      headers: ["Heroku feature", "What it really is", "Replacement", "Added cost/month", "Build time"],
      rows: [
        ["Review apps", "Ephemeral environment per pull request", "GitHub Actions + per-PR ECS service, or a PaaS preview environment", "$0-$30", "1-2 days"],
        ["Log drains", "Syslog stream to a provider", "CloudWatch Logs, or ship to a hosted log tool", "$5-$40", "0.5 day"],
        ["Heroku Scheduler", "Cron with no history and no alerting", "EventBridge Scheduler + scheduled ECS task (better: it has history)", "Under $1", "0.5 day"],
        ["Automated Postgres backups", "Continuous protection and point-in-time restore", "RDS automated backups + PITR", "Storage only", "0.5 day, incl. a restore drill"],
        ["Automatic SSL", "Managed certificate and renewal", "AWS Certificate Manager on the ALB", "$0", "0.5 day"],
        ["`heroku run bash`", "One-off dyno with production credentials", "ECS Exec over SSM — and it is audited, which Heroku's is not", "$0", "0.5 day"],
        ["`heroku rollback`", "One command back to the last release", "Immutable image tags + ECS service rollback", "$0", "0.5 day"],
        ["Platform on-call", "Somebody else's pager", "Yours", "—", "Ongoing"],
      ],
    },
    {
      type: "p",
      text: "That last row is the honest one. Heroku's price includes an operations team you never meet. When you leave, that responsibility becomes yours or your agency's, and it does not show up in any cost comparison table — including ours.",
    },

    { type: "h2", text: "CI/CD for a one-to-five person team" },
    {
      type: "p",
      text: "Replacing `git push heroku main` takes about a day and one GitHub Actions workflow: build the image, push it to ECR, force a new ECS deployment, and wait for the service to stabilize. Use OIDC to assume an AWS role rather than storing long-lived access keys as repository secrets — leaked CI credentials are one of the most common ways small teams get compromised after a migration.",
    },
    {
      type: "code",
      language: "yaml",
      filename: ".github/workflows/deploy.yml",
      code: `name: deploy
on:
  push:
    branches: [main]

jobs:
  ship:
    runs-on: ubuntu-latest
    permissions:
      id-token: write   # OIDC into AWS — no long-lived keys in secrets
      contents: read
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::\${{ secrets.AWS_ACCOUNT_ID }}:role/gha-deploy
          aws-region: us-east-1
      - run: |
          docker build -t $ECR_URI:$GITHUB_SHA .
          docker push $ECR_URI:$GITHUB_SHA
      - run: aws ecs update-service --cluster prod --service web --force-new-deployment
      - run: aws ecs wait services-stable --cluster prod --services web`,
    },
    {
      type: "p",
      text: "Four rules make this pipeline safe for a small team. Tag images with the commit SHA and never with `latest`, so a rollback is a known-good tag rather than a rebuild. Run database migrations as a separate ECS task before the deployment, not in the container entrypoint. Use ECS rolling deployments with a health check so a broken image never fully replaces a working one. And make `aws ecs wait services-stable` the last step, so a red build means a failed deploy instead of a silent one.",
    },

    { type: "h2", text: "Uptime after the move: what each nine actually costs" },
    {
      type: "p",
      text: "99.9% uptime means 43 minutes and 12 seconds of allowed downtime per month, and for a normal web app it costs roughly $40-$120/month more than a single-task setup — two tasks across two availability zones, health checks, automated backups and alerting that reaches a human. Every additional nine after that costs multiples more, and the fourth nine is a staffing decision rather than an infrastructure one.",
    },
    {
      type: "table",
      caption: "Availability targets, allowed downtime, and what it realistically takes.",
      headers: ["Target", "Downtime/month", "Downtime/year", "What it requires", "Extra cost/month"],
      rows: [
        ["99.0%", "7h 18m", "3d 15h", "One task, one AZ, restarts when someone notices", "$0"],
        ["99.9%", "43m 12s", "8h 46m", "2+ tasks across 2 AZs, health checks, backups, real alerting", "~$40-$120"],
        ["99.95%", "21m 36s", "4h 23m", "Multi-AZ RDS, blue/green deploys, tested runbooks", "~$150-$400"],
        ["99.99%", "4m 19s", "52m 34s", "Multi-region failover, on-call rotation, regular failure drills", "$1,000+ plus staffing"],
      ],
    },
    {
      type: "p",
      text: "Two things worth saying out loud. First, a cloud provider's own SLA credit does not make your customers whole — it refunds a fraction of your bill, so buy availability because you need it, not because a document promises it. Second, most teams that say they need four nines actually need three nines plus a status page and an incident process, which costs an order of magnitude less.",
    },

    { type: "h2", text: "The six things that break every time" },
    {
      type: "p",
      text: "Across migrations, the same six failures recur, and none of them appear during the cutover itself — they surface in the following 72 hours. Check each one explicitly during the parallel-run week.",
    },
    {
      type: "ol",
      items: [
        "**Background workers process nothing.** The queue driver, the Redis URL format or the TLS setting differs, and the worker connects to the wrong place or silently idles. Verify by draining a real queue in staging, not by checking that the process is running.",
        "**File uploads vanish.** Code writing to local disk worked on Heroku for the life of one dyno and now fails differently. Everything user-uploaded has to be on S3 before cutover, and old files have to be copied and re-pointed.",
        "**A Postgres extension or collation is missing.** `pgcrypto`, `postgis`, `pg_trgm`, or a `citext` column behaving differently because the target has a different collation. Compare extension lists and the ordering of a text index before you subscribe.",
        "**Timezones move.** Heroku dynos run UTC. If a scheduled job or a report assumed that and the new container inherits a different `TZ`, month-end numbers change quietly. Pin `TZ=UTC` explicitly in the task definition.",
        "**Hardcoded Heroku environment variables.** `DYNO`, `HEROKU_APP_NAME`, `HEROKU_SLUG_COMMIT` and `PORT` assumptions are scattered through most mature Heroku codebases. Grep for `HEROKU_` before you build the image.",
        "**Certificates do not renew.** Heroku renewed them for you. If the ALB certificate is not in ACM with DNS validation on a zone you control, you will find out 90 days later, at the worst possible hour.",
      ],
    },

    { type: "h2", text: "Total cost of ownership and the break-even month" },
    {
      type: "p",
      text: "Total cost is the agency or engineering fee plus internal hours plus two to four weeks of running both stacks, and it only pays back through monthly savings if your Heroku bill is large enough. For a small app saving $40-$90/month against a $4,000-$9,000 project, the break-even is past three years — which is to say there is no cost case, only a capability case. For a team spending over $500/month, six to fourteen months is realistic.",
    },
    {
      type: "table",
      caption: "Total cost of ownership for a Heroku migration, by app size.",
      headers: ["Line item", "Small app (3 processes, 1 DB)", "Mid-size app (6+ processes, queues, compliance)"],
      rows: [
        ["Agency or contractor engineering", "$4,000-$9,000", "$12,000-$18,000"],
        ["Internal engineering hours", "15-30 hrs", "40-80 hrs"],
        ["Parallel-running infrastructure (2-4 weeks)", "$150-$400", "$600-$1,500"],
        ["One-off data transfer and tooling", "$0-$200", "$200-$800"],
        ["Monthly saving after cutover", "$40-$90", "$400-$1,400"],
        ["**Break-even on cost alone**", "**40+ months — not a cost decision**", "**6-14 months**"],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "How we scope this",
      text: "A migration is usually a [Build](/pricing) engagement, from $6,900, with the inventory phase scoped like a Launch project from $1,900 if you want to buy the assessment first and decide afterwards. Larger multi-service migrations with a compliance component are quoted to scope. We would rather sell you the $1,900 inventory and tell you to stay on Heroku than sell you a migration that never pays back.",
    },

    { type: "h2", text: "When you should not leave Heroku" },
    {
      type: "p",
      text: "Stay on Heroku if your bill is under about $300/month, you have no compliance requirement, and nobody on your team wants to own infrastructure. At that size the migration costs more than several years of savings, and the engineering weeks are worth far more spent on the product. We turn this project down more often than we take it.",
    },
    {
      type: "ul",
      items: [
        "**You are pre-product-market-fit.** Six weeks of platform work while you are still changing the product weekly is the wrong trade at any bill size.",
        "**Nobody will own the pager.** If there is no plan for who gets woken at 3am, Heroku's operations team is a bargain and you should keep buying it.",
        "**Your bill is under $300/month and stable.** The arithmetic does not work. Revisit when you cross Standard-2X or add a second database.",
        "**You are mid-fundraise or mid-launch.** Cutovers need a quiet fortnight either side. Do it after, not during.",
        "**The real problem is the application, not the platform.** If the app is slow because of N+1 queries and missing indexes, moving it to AWS makes it a slow app on AWS. Fix that first — often as a [web development](/services/web-development) engagement — and the infrastructure question may disappear.",
      ],
    },
    {
      type: "p",
      text: "If none of those apply, the decision is straightforward: price your current stack honestly, pick the destination by the $300 and $1,000 thresholds, and run the nine steps in order. The work is well understood and the downtime number is a choice, not a risk you have to accept. You can see the kind of production platforms we run in our [portfolio](/portfolio), including builds like [ExpertAIQ](/portfolio/expertaiq).",
    },
    {
      type: "cta",
      title: "Get a fixed-scope migration plan",
      text: "Send us your Heroku invoice and your app's process list. We will come back with an inventory, a destination recommendation, a month-by-month cost comparison and a downtime estimate — and we will tell you if the honest answer is to stay.",
      buttonLabel: "Book a migration review",
      href: "/book",
    },
    {
      type: "p",
      text: "Prefer to ask a question first? [Get in touch](/contact) — a five-minute answer about whether your bill justifies a move is free, and we would rather give it than quote a project you do not need.",
    },
  ],
  faqs: [
    {
      q: "How much does it cost to migrate from Heroku to AWS?",
      a: "For a single production app with a database, background workers and a handful of add-ons, budget $4,000-$18,000 of engineering or agency time plus a few hundred dollars of parallel-running infrastructure. Monthly savings are typically 40-70% at Standard dyno scale and larger at Performance tier, which puts payback between six and fourteen months for teams spending over roughly $500 a month. Below about $300 a month there is no payback at all.",
    },
    {
      q: "How much downtime does a Heroku migration need?",
      a: "With Postgres logical replication and a DNS TTL lowered to 60 seconds at least 24 hours ahead of the cutover, the write-freeze window is typically two to five minutes. Teams that dump and restore instead usually see 30 minutes to several hours, scaling with database size and index rebuild time, which is why the replication approach is worth the extra day of setup.",
    },
    {
      q: "Is AWS actually cheaper than Heroku for a small app?",
      a: "At the very small end the difference is marginal — roughly $130-$160 a month on Heroku versus $75-$160 on AWS depending on how lean you build — so migrating purely to save money is not worth it. The gap becomes real above Standard dynos: a $250 Performance-M dyno maps to roughly $72 a month of comparable Fargate capacity on demand and around $50 with a one-year commitment.",
    },
    {
      q: "What is the best Heroku alternative for a small team that does not want to run AWS?",
      a: "Render and Fly.io are the closest like-for-like replacements: git-push deploys, managed Postgres, background workers and cron, with no VPC or Kubernetes to learn. Railway and DigitalOcean App Platform are also viable and start around $5 a month. Choose AWS only when you are past roughly $1,000 a month of spend, need compliance controls such as VPC isolation or audit trails, or want a single cloud account for everything.",
    },
    {
      q: "Can you migrate our app if the original developer is gone?",
      a: "Yes, and it is one of the most common versions of this project. The first phase is a paid inventory: config vars, add-ons, cron jobs, database extensions and versions, worker processes and anything running outside the repository all get documented before a line of infrastructure is built. That inventory is a deliverable you keep regardless of whether you continue with the migration, and it is worth having even if you decide to stay on Heroku.",
    },
    {
      q: "Will our app be down or slower after the move?",
      a: "Performance normally holds or improves, because lower-tier Heroku dynos share heavily oversubscribed hardware and a comparably priced dedicated container gives more consistent CPU. The risk to manage is not speed but operational maturity: alerting, backups and an on-call plan have to exist before cutover, not after, which is why the runbook puts monitoring in place during the parallel-running week and keeps the old stack paid for two more weeks.",
    },
  ],
}
