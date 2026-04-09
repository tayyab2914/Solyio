import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

/* ─── DATA ────────────────────────────────────────────────────────── */

const GALLERY_IMG_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_xWM1ptGvm-SVdM7oyerPQxfPdzKSkgGeEAtgFmykoS-LB3C-idwVcDDHXbY-V8GAjIx5aflJ743pm0AsB6MPwqC0ha7UYdeUGWkyGNBDj0S-uqNxe3_TXaHubEprDj_oF3IeHVFTMaNJ6_M8VG1-OLJc1y2OyJDvuUWsO6IkW71x_y3VDNTxpveaDYVUI3CKiZuDxP-Ozm1hM4QgCQjF1dLg1dHZSP_URrByDriacK35yepQHj7A3O_EuQy15gaYdOxPoE7d4a-c"
const GALLERY_IMG_2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCIa77YU__qCZWacppYoW4yPpMgQ1jJjnQ2El-iQwiVtthCZsNOJIpCy17sYqM3p_ZzyA7Fbyo-jz7xQLOqw3NaDLszL6VzzvJheXaJGtENwK0yRDHsBX4HueZSF90M0Yi1jXnnU9d7pzggup3C9DXqollSvY7Opi2XIRxalYgv_3989NBP_p2Pot4-zo-_a5vi-WjXCuV1Ku9PKKNx-kzlrhCFeoVTph8uEJxAiJshvcjtGJ7kkNBXESabX5TgF9eD4oxAmYarKlUd"
const CHALLENGE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfeD-5jpfbL5cbUpBd4oGwma1m5YVVIHDk6FsRFVp8MOUkWoAXXYtdIwm2ifu1cRiZcTMXIy986w8XpcIpiKB1kVsa-e0amor6S1BzDq9cle-zYR-woLv9K9EQLNMrlh-IHMopoA_dnD1vDz2ze3in93vAuS-NjHOsxAxJqQ9FDybDS0rYhmP-tmFKQndlt4JMkx237jep3FdvhME4Hle3xp6pph0oL-j5WXTmXu-LiklLOhfo_J_WRCpMaqswQpWYXpsveiqHKKZr"

interface Tile {
  value: string
  label: string
  bg: string
  valueCls: string
  labelCls: string
}

interface CaseStudy {
  name: string
  category: string
  tagline: string
  thumbnail: string
  images: { challenge: string; gallery1: string; gallery2: string }
  heroMetrics: { value: string; label: string }[]
  quote: { text: string; author: string }
  challenge: {
    title: string
    tagline: string
    cards: { icon: string; title: string; description: string }[]
  }
  solution: {
    title: string
    tagline: string
    cards: { n: string; title: string; description: string; cta: string }[]
  }
  outcomes: {
    title: string
    description: string
    bullets: { title: string; description: string }[]
    tiles: Tile[]
  }
  gallery: { title: string; description: string }
}

const caseStudies: Record<string, CaseStudy> = {
expertaiq: {
  name: "ExpertAIQ",
  category: "SaaS · AI Coaching",
  tagline:
    "How we built a white-label AI consulting platform where coaches upload their knowledge base, build a personalized AI persona, and monetize their expertise — serving 105+ coaches and 1M+ interactions.",
  thumbnail: "/ExpertAIQ.png",
  images: {
    challenge: "/ExpertAIQ.png",
    gallery1: "https://plus.unsplash.com/premium_photo-1683121723970-b7a354d62e18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery2: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  heroMetrics: [
    { value: "105+", label: "Coaches Onboarded" },
  ],
  quote: {
    text: "ExpertAIQ let me turn my entire consulting methodology into an AI that works for my clients 24/7.",
    author: "Coach, ExpertAIQ Platform",
  },
  challenge: {
    title: "The Challenge",
    tagline:
      "Expert consultants and coaches had no scalable way to deliver personalized guidance — their knowledge was locked inside their heads and 1-on-1 sessions.",
    cards: [
      {
        icon: "person_off",
        title: "Knowledge Locked to the Coach",
        description:
          "Coaches could only serve clients in live sessions — their frameworks, methodologies, and expertise had no scalable delivery mechanism, capping revenue and reach.",
      },
      {
        icon: "manage_search",
        title: "Generic AI Gives Generic Answers",
        description:
          "Off-the-shelf AI tools couldn't reflect a coach's unique voice, knowledge base, or methodology — students got generic responses that didn't reflect the coach's actual expertise.",
      },
    ],
  },
  solution: {
    title: "The AI Implementation",
    tagline:
      "We built a full white-label SaaS platform where coaches create their AI persona, upload their knowledge base for RAG, and deploy a personalized AI consultant their students can interact with 24/7.",
    cards: [
      {
        n: "01",
        title: "RAG-Powered AI Persona",
        description:
          "Coaches upload up to 20GB of their own material — documents, frameworks, course content — which powers a Retrieval-Augmented Generation engine that answers student questions in the coach's own voice.",
        cta: "Explore RAG Engine",
      },
      {
        n: "02",
        title: "White-Label Coach Platform",
        description:
          "Every coach gets a fully branded, isolated workspace — their own AI persona, student roster, knowledge base, and monetisation setup. No shared generic AI.",
        cta: "Platform Architecture",
      },
      {
        n: "03",
        title: "Monetisation & Admin Layer",
        description:
          "Built-in subscription and payment tooling lets coaches gate access, set pricing, and manage students — turning their expertise into a scalable, recurring revenue stream.",
        cta: "View Demo",
      },
    ],
  },
  outcomes: {
    title: "Business Impact",
    description:
      "ExpertAIQ transformed how consultants deliver expertise — from time-capped 1-on-1 sessions to an always-on AI that scales their knowledge to unlimited students simultaneously.",
    bullets: [
      {
        title: "25+ Coaches Monetising Their Expertise",
        description:
          "Coaches onboarded their full knowledge base and launched personalized AI consulting services without writing a single line of code.",
      },
      {
        title: "1M+ Student Interactions Served",
        description:
          "RAG-powered AI responses grounded in each coach's own material delivered personalised guidance at a scale no human consultant could match alone.",
      },
    ],
    tiles: [
      { value: "105+", label: "Coaches", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
      { value: "10+", label: "AI Interactions", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
      { value: "20GB+", label: "Knowledge per Coach", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
      { value: "<2s", label: "AI Response Time", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
    ],
  },
  gallery: {
    title: "Your Expertise. Scaled by AI.",
    description:
      "ExpertAIQ isn't a chatbot — it's a full coaching intelligence platform that lets any consultant clone their knowledge, serve unlimited students, and earn while they sleep.",
  },
},
robomarketer: {
  name: "RoboMarketer",
  category: "SaaS · Marketing Automation",
  tagline:
    "How we built an AI marketing automation platform with 12 pre-trained AI employees that run paid ads, SEO, email, and content on autopilot — saving 72+ hours weekly and managing $500K+ in monthly revenue for agencies.",
  thumbnail: "/RoboMarketer.png",
  images: {
    challenge: "/RoboMarketer.png",
    gallery1: "https://plus.unsplash.com/premium_photo-1682308239835-6b4d3ee79e4d?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery2: "https://images.unsplash.com/photo-1699973008199-c10140850a11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  heroMetrics: [
    { value: "72+", label: "Hours Saved Weekly" },
    { value: "12", label: "AI Employees" },
  ],
  quote: {
    text: "RoboMarketer replaced the work of an entire marketing team — without a single new hire.",
    author: "Agency Director, RoboMarketer Client",
  },
  challenge: {
    title: "The Challenge",
    tagline:
      "Marketing agencies were burning hours on repetitive execution tasks — leaving no capacity for strategy, growth, or new client acquisition.",
    cards: [
      {
        icon: "hourglass_empty",
        title: "Execution Killing Capacity",
        description:
          "Agency teams spent 70%+ of their week on repeatable tasks — writing ad copy, scheduling posts, pulling reports, sending emails — with no time left for high-value strategic work.",
      },
      {
        icon: "group_off",
        title: "Scaling Meant Hiring",
        description:
          "Every new client added headcount pressure. Agencies couldn't take on more clients without proportionally growing their team, capping revenue growth and compressing margins.",
      },
    ],
  },
  solution: {
    title: "The AI Implementation",
    tagline:
      "We built a full-stack AI automation platform where agencies onboard in 90 seconds, deploy 12 pre-trained AI employees, and run every marketing channel on autopilot — with human managers overseeing strategy.",
    cards: [
      {
        n: "01",
        title: "12 Pre-Trained AI Employees",
        description:
          "A marketplace of specialized AI agents — each handling a distinct marketing function: paid ads, SEO, social media, email, content, competitor analysis, and more — deployable instantly from a single dashboard.",
        cta: "Explore Agents",
      },
      {
        n: "02",
        title: "90-Second Onboarding",
        description:
          "Agencies feed in company data, KPIs, funnels, and competitor insights once — RoboMarketer ingests this context and all 12 AI employees immediately produce brand-accurate, strategy-aligned outputs.",
        cta: "Onboarding Flow",
      },
      {
        n: "03",
        title: "10+ Automated Workflows",
        description:
          "End-to-end marketing workflows run autonomously — from content ideation to publishing, ad creation to optimization, report generation to delivery — across all channels simultaneously.",
        cta: "View Demo",
      },
    ],
  },
  outcomes: {
    title: "Business Impact",
    description:
      "RoboMarketer transformed marketing agencies from execution-heavy teams into lean, strategy-led operations — scaling client capacity without scaling headcount.",
    bullets: [
      {
        title: "72+ Hours Saved Every Week",
        description:
          "Agencies reclaimed over 72 hours weekly by automating repetitive execution tasks across paid, organic, email, and content channels simultaneously.",
      },
      {
        title: "$500K+ Monthly Revenue Managed",
        description:
          "Enterprise agency clients use RoboMarketer to manage over $500K in monthly marketing output — with greater consistency and speed than any human team could deliver.",
      },
    ],
    tiles: [
      { value: "12", label: "AI Employees", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
      { value: "72+", label: "Hours Saved/Week", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
      { value: "50+", label: "Agencies Onboarded", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
      { value: "10+", label: "Auto Workflows", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
    ],
  },
  gallery: {
    title: "Your Agency. Multiplied by AI.",
    description:
      "RoboMarketer isn't a scheduling tool — it's a full AI workforce that runs every marketing channel on autopilot, so your human team can focus entirely on strategy and growth.",
  },
},

 cashads: {
  name: "CashAds",
  category: "Advertising · AI Marketplace",
  tagline:
    "How we built an AI-powered ad creative marketplace where anyone can generate professional ads in seconds and sell them instantly — 80+ creators, 158 business buyers, and $500K in annual marketplace revenue.",
  thumbnail: "/Cashads.png",
  images: {
    challenge: "/Cashads.png",
    gallery1: "/cash1.png",
    gallery2: "/cash2.png",
  },
  heroMetrics: [
    { value: "$500K", label: "Annual Marketplace Revenue" },
    { value: "80+", label: "Active Creators" },
  ],
  quote: {
    text: "CashAds let me earn $450 a day selling ads I generated in seconds — no clients, no portfolio, no design experience needed.",
    author: "Creator, CashAds Marketplace",
  },
  challenge: {
    title: "The Challenge",
    tagline:
      "Businesses needed high-performing ad creatives fast. Designers needed clients and a portfolio just to get started. Neither side had a frictionless solution.",
    cards: [
      {
        icon: "image_not_supported",
        title: "Creatives Took Too Long",
        description:
          "Businesses waiting days for agencies or freelancers to deliver ad creatives missed campaign windows — by the time assets arrived, the opportunity had already passed.",
      },
      {
        icon: "person_off",
        title: "Designers Needed a Portfolio to Start",
        description:
          "Aspiring ad creators were locked out of earning — every platform required an established client base or portfolio before they could make a single sale.",
      },
    ],
  },
  solution: {
    title: "The AI Implementation",
    tagline:
      "We built a two-sided AI marketplace — creators generate professional ad creatives in seconds using the AI AdMaker, and businesses purchase them instantly with no back-and-forth.",
    cards: [
      {
        n: "01",
        title: "AI AdMaker Engine",
        description:
          "LangChain and RAG-powered creative generation tool that produces professional, brand-accurate ad creatives in seconds — no design experience, software, or client brief required.",
        cta: "Explore AdMaker",
      },
      {
        n: "02",
        title: "Built-in Creative Marketplace",
        description:
          "A frictionless two-sided marketplace where creators list AI-generated ad assets and businesses browse, preview, and purchase instantly — no negotiation, no waiting, no agency middleman.",
        cta: "Marketplace Architecture",
      },
      {
        n: "03",
        title: "Instant Stripe Payouts",
        description:
          "Stripe-powered payment infrastructure handles instant creator payouts the moment a sale completes — no invoicing, no chasing, no delays.",
        cta: "View Demo",
      },
    ],
  },
  outcomes: {
    title: "Business Impact",
    description:
      "CashAds turned ad creative production from a slow, expensive agency process into an instant, democratized marketplace — giving creators a new income stream and businesses on-demand assets.",
    bullets: [
      {
        title: "80+ Creators Earning Without a Portfolio",
        description:
          "Creators with zero design experience or client history started generating and selling professional ad creatives from day one — averaging $450 per day in earnings.",
      },
      {
        title: "$500K Annual Marketplace Revenue",
        description:
          "158 business buyers purchasing ready-made AI ad creatives drove half a million dollars in annual marketplace transactions — with zero agency overhead.",
      },
    ],
    tiles: [
      { value: "80+", label: "Active Creators", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
      { value: "158", label: "Business Buyers", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
      { value: "$500K", label: "Annual Revenue", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
      { value: "200+", label: "Ads Generated", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
    ],
  },
  gallery: {
    title: "Anyone Can Sell Ads. Instantly.",
    description:
      "CashAds isn't just an ad tool — it's a fully functioning creative economy where AI closes the gap between inspiration and income, and between businesses and the assets they need right now.",
  },
},

  "pricing-intelligence": {
  name: "PriceSmurf",
  category: "SaaS · Pricing Intelligence",
  tagline:
    "How we built a multi-tenant AI pricing intelligence platform — 5 specialized agents that detect margin leakage, upsell gaps, and win/loss patterns directly from enterprise sales data.",
  thumbnail: "/PriceSmurf.png",
  images: {
    challenge: "/PriceSmurf.png",
    gallery1: "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0",
    gallery2: "https://plus.unsplash.com/premium_photo-1725985758251-b49c6b581d17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  heroMetrics: [
    { value: "5", label: "AI Pricing Agents" },
    { value: "3", label: "Role Based Access" },
  ],
  quote: {
    text: "PriceSmurf surfaced margin leaks we had no idea existed — hidden in plain sight inside our own Excel files.",
    author: "Head of Pricing, Enterprise Client",
  },
  challenge: {
    title: "The Challenge",
    tagline:
      "Enterprise pricing teams were drowning in spreadsheets — margin erosion, upsell gaps, and losing deals on price with no way to see why.",
    cards: [
      {
        icon: "manage_search",
        title: "Silent Margin Leakage",
        description:
          "Pricing teams had no systematic way to detect below-cost sales, discount violations, or margin erosion buried across thousands of rows of Excel data — leaks compounded silently for months.",
      },
      {
        icon: "trending_down",
        title: "No Win/Loss Visibility",
        description:
          "Deal outcomes sat in disconnected CRM exports and spreadsheets with no analysis layer — teams couldn't identify which pricing decisions were winning or losing deals.",
      },
    ],
  },
  solution: {
    title: "The AI Implementation",
    tagline:
      "We built a full-stack SaaS platform powered by AI — users upload their sales data and five specialized agents produce structured, visual pricing intelligence reports.",
    cards: [
      {
        n: "01",
        title: "5 Pricing Agents",
        description:
          "Specialized AI agents for Data Quality, Margin Leakage, Opportunity Detection, Value Analysis, and Win/Loss — each running parallel sub-calls against uploaded Excel/CSV data.",
        cta: "Explore Agents",
      },
      {
        n: "02",
        title: "Multi-Tenant Workspace Platform",
        description:
          "Full multi-tenant SaaS architecture with subdomain-based workspaces, role-based access (owner/admin/member/viewer), Stripe billing, and Clerk authentication.",
        cta: "Platform Architecture",
      },
      {
        n: "03",
        title: "Structured Visual Reports",
        description:
          "Every agent produces a tabbed results page with interactive Recharts visualizations, sortable data tables, SQL audit queries, and one-click PDF export.",
        cta: "View Demo",
      },
    ],
  },
  outcomes: {
    title: "What We Built",
    description:
      "PriceSmurf is a production-grade, deployed SaaS platform running on Google Cloud Run — 45+ API routes, 18 MongoDB collections, 5 live AI agents, and full Stripe subscription billing.",
    bullets: [
      {
        title: "Margin Leakage Quantified in Seconds",
        description:
          "The Margin Leakage Agent identifies below-cost sales, calculates exact revenue impact per product/customer/region, and generates corrective action recommendations — all from a raw Excel upload.",
      },
      {
        title: "Win/Loss Intelligence from Raw Deal Data",
        description:
          "The Win-Loss Agent extracts deal patterns, pricing impact on win rate, and competitive intelligence directly from CRM exports — no manual tagging required.",
      },
    ],
    tiles: [
      { value: "5", label: "AI Agents", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
      { value: "45+", label: "API Routes", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
      { value: "18", label: "DB Collections", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
      { value: "GCP", label: "Cloud Run Deploy", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
    ],
  },
  gallery: {
    title: "Pricing Intelligence at Enterprise Scale",
    description:
      "PriceSmurf isn't a dashboard — it's a full AI-powered SaaS platform that turns raw pricing spreadsheets into strategic intelligence: margin visibility, deal patterns, and revenue opportunities, all in one place.",
  },
},


 upgrr: {
  name: "Upgrr",
  category: "SaaS · Financial Analysis",
  tagline:
    "How we built a purpose-built financial analysis platform for the printing equipment industry — 100+ sales consultants generating NPV-based lease comparison reports in 5 seconds, influencing 60+ in monthly deals.",
  thumbnail: "/upgrr.png",
  images: {
    challenge: "/upgrr.png",
    gallery1: "/ug1.png",
    gallery2: "/ug2.png",
  },
  heroMetrics: [
    { value: "2000+", label: "Reports Generated" },
    { value: "5s", label: "Report Generation" },
  ],
  quote: {
    text: "Upgrr gave us the credibility to close — clients finally understood the numbers and said yes with confidence.",
    author: "Sales Consultant, Upgrr User",
  },
  challenge: {
    title: "The Challenge",
    tagline:
      "Printing equipment sales ran on long-term leases with complex financials — and every upgrade analysis was being done manually in Excel, inconsistently, slowly, and often incorrectly.",
    cards: [
      {
        icon: "calculate",
        title: "No Purpose-Built Tool Existed",
        description:
          "Sales consultants had no dedicated platform for lease upgrade analysis — settlement costs, NPV modelling, escalation clauses, and click charges were all calculated manually in spreadsheets, leading to errors that lost deals or damaged client trust.",
      },
      {
        icon: "trending_down",
        title: "Deals Lost to Unclear Numbers",
        description:
          "When clients asked 'can you show me the numbers?', consultants had no fast, credible answer. Complex 36–60 month lease structures with early exit penalties made financial justification nearly impossible to communicate clearly.",
      },
    ],
  },
  solution: {
    title: "The Platform We Built",
    tagline:
      "We built a purpose-built financial analysis SaaS for printing equipment sales — consultants enter lease details, hit generate, and receive a boardroom-ready NPV comparison report in 5 seconds.",
    cards: [
      {
        n: "01",
        title: "NPV-Based Lease Modelling",
        description:
          "Upgrr compares the true lifetime cost of keeping versus upgrading equipment — discounted to today's money using Net Present Value modelling — giving clients a financially rigorous basis for every upgrade decision.",
        cta: "Explore Modelling",
      },
      {
        n: "02",
        title: "Lease Settlement Calculator",
        description:
          "Instantly calculates the exact cost to exit any lease mid-contract — including whether a lessor's settlement quote is fair — eliminating the guesswork that stalls upgrade conversations.",
        cta: "Settlement Engine",
      },
      {
        n: "03",
        title: "Boardroom-Ready PDF Reports",
        description:
          "Every analysis produces a clean, printable financial report in 5 seconds — professional enough to walk into any boardroom and credible enough to get a signature on the spot.",
        cta: "View Demo",
      },
    ],
  },
  outcomes: {
    title: "Business Impact",
    description:
      "Upgrr eliminated the industry's biggest sales bottleneck — replacing slow, error-prone Excel analysis with instant, accurate financial reports that give consultants the credibility to close.",
    bullets: [
      {
        title: "2000+ Reports Generated",
        description:
          "100+ sales consultants across the printing equipment industry have used Upgrr to generate over 2,000 financial comparison reports — each one replacing hours of manual spreadsheet work.",
      },
      {
        title: "60+ Monthly Deals Influenced",
        description:
          "Enterprise clients use Upgrr to justify and close large-scale fleet upgrade deals — with clear NPV and ROI analysis that gives business owners the confidence to commit.",
      },
    ],
    tiles: [
      { value: "2000+", label: "Reports Generated", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
      { value: "100+", label: "Sales Consultants", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
      { value: "5s", label: "Report Generation", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
      { value: "60+", label: "Monthly Deals", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
    ],
  },
  gallery: {
    title: "Stop Guessing. Start Proving.",
    description:
      "Upgrr isn't a generic financial tool — it's the only platform built specifically for the printing equipment industry, giving every sales consultant the analytical credibility to close deals that are good for everyone at the table.",
  },
},
  novapay: {
    name: "NovaPay",
    category: "Mobile · Fintech",
    tagline:
      "How we built a cross-platform React Native fintech app with full Stripe integration — subscriptions, one-time payments, and Connect payouts — scaling to 50,000 active users in under a year.",
    thumbnail: "/novapay-ui.svg",
    images: {
      challenge: "/novapay-ui.svg",
      gallery1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1643256599483-a28ba93d6ba2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    heroMetrics: [
      { value: "+220%", label: "Transaction Volume" },
      { value: "50k+", label: "Active Users" },
    ],
    quote: {
      text: "Solyio delivered a Stripe integration so seamless our finance team thought it was built in-house. The app handles millions in transactions without a single failure.",
      author: "CEO, NovaPay",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "A fragmented payment stack with no unified mobile experience was bleeding users and blocking revenue growth.",
      cards: [
        {
          icon: "payment",
          title: "Broken Payment UX",
          description:
            "Users were abandoning checkout at a 74% rate due to redirects to browser-based payment pages, destroying trust and killing conversion on both iOS and Android.",
        },
        {
          icon: "account_balance_wallet",
          title: "No Marketplace Payouts",
          description:
            "The platform had no way to split and route payments to multiple vendors — blocking the entire marketplace model and requiring manual bank transfers every week.",
        },
      ],
    },
    solution: {
      title: "The Mobile Payment Stack",
      tagline:
        "We engineered a React Native app with native Stripe SDKs, seamless checkout flows, and a full Connect marketplace payout engine.",
      cards: [
        {
          n: "01",
          title: "Native Stripe SDK Integration",
          description:
            "Embedded Stripe's React Native SDK with Payment Sheet for one-tap checkout, supporting cards, Apple Pay, and Google Pay — all within a single in-app flow.",
          cta: "Payment Architecture",
        },
        {
          n: "02",
          title: "Stripe Connect Marketplace",
          description:
            "Built a Stripe Connect Express onboarding flow allowing vendors to register, receive automatic split payouts, and view earnings — all inside the mobile app.",
          cta: "Connect Architecture",
        },
        {
          n: "03",
          title: "Subscription Engine",
          description:
            "Implemented Stripe Billing with free trial logic, proration handling, and dunning management — reducing involuntary churn by 38% through smart retry sequences.",
          cta: "Billing Engine",
        },
      ],
    },
    outcomes: {
      title: "The Outcome",
      description:
        "NovaPay became the client's highest-grossing product within 6 months of launch, processing over $3.2M monthly.",
      bullets: [
        {
          title: "74% → 12% Checkout Abandonment",
          description: "Native payment flows eliminated the browser redirect drop-off, making checkout frictionless on both iOS and Android.",
        },
        {
          title: "Automated $1.4M Monthly in Vendor Payouts",
          description: "Stripe Connect replaced weekly manual transfers — vendors now receive automatic, real-time payouts without any ops overhead.",
        },
      ],
      tiles: [
        { value: "+220%", label: "Volume Increase", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "50k+", label: "Active Users", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "$3.2M", label: "Monthly GMV", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "−38%", label: "Churn Drop", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Built for Scale from Day One",
      description:
        "NovaPay isn't a payment wrapper — it's a full financial operating system for the mobile generation, handling millions in daily transactions with enterprise-grade reliability.",
    },
  },

  zencart: {
    name: "ZenCart",
    category: "Mobile · E-commerce",
    tagline:
      "How we built a Flutter e-commerce app with AI-powered product discovery, Stripe Checkout, Apple Pay, and Google Pay — delivering a 185% higher conversion rate than the client's legacy native app.",
    thumbnail: "/zencart-ui.svg",
    images: {
      challenge: "/zencart-ui.svg",
      gallery1: "https://images.unsplash.com/photo-1768987439370-bd60d3d0b28b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery2: "https://plus.unsplash.com/premium_photo-1664201890376-b735362539bb?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    heroMetrics: [
      { value: "+185%", label: "Conversion Rate" },
      { value: "4.9★", label: "App Store Rating" },
    ],
    quote: {
      text: "We went from a 2.1-star app to a 4.9-star app in a single release. The Flutter rebuild with proper Stripe flows completely changed how our customers feel about buying from us.",
      author: "CTO, ZenCart",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "A slow, buggy native app with a broken checkout drove customers to competitors and dragged down the brand's reputation.",
      cards: [
        {
          icon: "shopping_cart_off",
          title: "Cart Abandonment Crisis",
          description:
            "The legacy iOS app had a 5-step checkout process with no saved cards and no Apple Pay — 81% of users dropped off before completing a purchase.",
        },
        {
          icon: "devices_off",
          title: "iOS-Only, Slow & Buggy",
          description:
            "Maintaining two separate codebases (Swift + Java) was consuming 80% of the dev budget, leaving no resources for features — Android users had been abandoned for 18 months.",
        },
      ],
    },
    solution: {
      title: "The Flutter Rebuild",
      tagline:
        "We rebuilt the entire app in Flutter with a single codebase, AI recommendations, and a one-tap Stripe checkout with Apple Pay and Google Pay.",
      cards: [
        {
          n: "01",
          title: "Stripe Payment Sheet",
          description:
            "Integrated Stripe's Flutter SDK with Payment Sheet — one-tap checkout supporting cards, Apple Pay, Google Pay, and saved payment methods with 3DS2 authentication.",
          cta: "Payment Flow",
        },
        {
          n: "02",
          title: "AI Product Discovery",
          description:
            "Built a personalized recommendation engine that surfaces products based on browsing behaviour, increasing average order value by 67% through intelligent upselling.",
          cta: "Recommendation Engine",
        },
        {
          n: "03",
          title: "Cross-Platform in One Codebase",
          description:
            "A single Flutter codebase ships pixel-perfect experiences on iOS and Android, cutting development costs by 55% and halving release cycle times.",
          cta: "Architecture",
        },
      ],
    },
    outcomes: {
      title: "The Outcome",
      description:
        "ZenCart's rebirth on Flutter with Stripe turned a failing app into the client's primary revenue channel within 90 days of launch.",
      bullets: [
        {
          title: "81% → 23% Cart Abandonment",
          description: "One-tap Stripe checkout with Apple Pay eliminated the friction that was killing conversions — users now complete purchases in under 8 seconds.",
        },
        {
          title: "55% Reduction in Development Cost",
          description: "A unified Flutter codebase replaced two separate native teams, freeing budget to ship 3x more features in the same time.",
        },
      ],
      tiles: [
        { value: "+185%", label: "Conversion", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "4.9★", label: "App Store", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "+67%", label: "Avg Order Value", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "−55%", label: "Dev Cost", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "One App. Every Platform.",
      description:
        "ZenCart proves that Flutter done right isn't a compromise — it's a competitive advantage that ships faster, costs less, and converts better than anything that came before it.",
    },
  },

  trackrpro: {
    name: "TrackrPro",
    category: "Mobile · Health & Fitness",
    tagline:
      "How we built a Swift-native iOS fitness app with Stripe subscription billing and StoreKit 2 — growing to 40,000 paying subscribers in 8 months with a 94% trial-to-paid conversion rate.",
    thumbnail: "/trackrpro-ui.svg",
    images: {
      challenge: "/trackrpro-ui.svg",
      gallery1: "https://images.unsplash.com/photo-1580983693000-5654250f64d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery2: "https://images.unsplash.com/photo-1727432813810-cabde273e273?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    heroMetrics: [
      { value: "40k+", label: "Paying Subscribers" },
      { value: "94%", label: "Trial-to-Paid Rate" },
    ],
    quote: {
      text: "The subscription architecture Solyio built handles everything — trials, upgrades, downgrades, and failed payments — without us touching a line of code. It just works.",
      author: "Founder, TrackrPro",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "The fitness app had no monetisation strategy — users could access everything for free, and the team had no way to implement or manage subscriptions without breaking the UX.",
      cards: [
        {
          icon: "money_off",
          title: "Zero Monetisation",
          description:
            "With 80,000 free users and no revenue, the team needed a frictionless subscription paywall that converted without alienating the existing user base.",
        },
        {
          icon: "sync_problem",
          title: "Subscription State Chaos",
          description:
            "Competitors were managing subscription states (active, paused, cancelled, trial) with bespoke backend code that broke constantly — the client needed something bulletproof.",
        },
      ],
    },
    solution: {
      title: "The iOS Monetisation Engine",
      tagline:
        "We engineered a dual-track monetisation system using Stripe for web payments and StoreKit 2 for App Store billing — with a unified entitlement layer across both.",
      cards: [
        {
          n: "01",
          title: "Stripe Subscription Billing",
          description:
            "Integrated Stripe Billing with 7-day free trial, annual/monthly plans, and smart dunning — automated retry logic recovered 34% of failed payments that would otherwise churn.",
          cta: "Billing System",
        },
        {
          n: "02",
          title: "StoreKit 2 In-App Purchases",
          description:
            "Native StoreKit 2 integration for App Store subscriptions with real-time receipt validation, promotional offers, and family sharing — fully compliant with App Store guidelines.",
          cta: "StoreKit Architecture",
        },
        {
          n: "03",
          title: "Unified Entitlement Layer",
          description:
            "A backend entitlement service syncs subscription state from both Stripe and StoreKit 2 in real time — users who pay via web or App Store get instant access, zero delays.",
          cta: "Entitlement Engine",
        },
      ],
    },
    outcomes: {
      title: "The Outcome",
      description:
        "TrackrPro went from zero revenue to a profitable subscription business generating $480K MRR in under a year.",
      bullets: [
        {
          title: "94% Trial-to-Paid Conversion",
          description: "A carefully designed 7-day trial with progressive feature unlocking and smart push notifications drove one of the highest trial conversion rates in the fitness category.",
        },
        {
          title: "34% Failed Payment Recovery",
          description: "Stripe's smart retry logic and our custom dunning sequences automatically recovered subscriptions that would otherwise have churned silently.",
        },
      ],
      tiles: [
        { value: "40k+", label: "Subscribers", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "94%", label: "Trial Conversion", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "$480K", label: "MRR", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "+34%", label: "Payment Recovery", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Monetisation That Respects the User",
      description:
        "TrackrPro shows that a well-architected subscription system doesn't just make money — it builds trust, reduces churn, and turns free users into loyal paying customers.",
    },
  },

  deliveriq: {
    name: "DeliverIQ",
    category: "Mobile · Logistics",
    tagline:
      "How we built a React Native on-demand delivery marketplace with Stripe Connect split payments, real-time GPS tracking, and automated payouts to 500+ courier partners — cutting delivery time by 45%.",
    thumbnail: "/deliveriq-ui.svg",
    images: {
      challenge: "/deliveriq-ui.svg",
      gallery2: "https://images.unsplash.com/photo-1659353740197-4e43ab409ce1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery1: "https://images.unsplash.com/photo-1702812650865-2c84572ffee2?q=80&w=949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    heroMetrics: [
      { value: "−45%", label: "Delivery Time" },
      { value: "500+", label: "Courier Partners" },
    ],
    quote: {
      text: "The Stripe Connect implementation alone saved us 3 full-time ops roles. Payouts that took 5 days of manual work now happen automatically within minutes of delivery completion.",
      author: "COO, DeliverIQ",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Manual courier payments, no real-time tracking, and a broken dispatch system were crippling a delivery network trying to compete with Uber Eats and DoorDash.",
      cards: [
        {
          icon: "local_shipping",
          title: "Manual Payout Nightmare",
          description:
            "Paying 500+ couriers required a 5-person finance team processing manual bank transfers every Friday — error-prone, expensive, and a constant source of disputes.",
        },
        {
          icon: "location_off",
          title: "No Real-Time Visibility",
          description:
            "Customers had no live tracking — only an estimated window. Courier no-shows went undetected for up to 30 minutes, causing cascading delivery failures.",
        },
      ],
    },
    solution: {
      title: "The Delivery Platform",
      tagline:
        "We built a three-app React Native ecosystem — customer app, courier app, and merchant dashboard — unified by Stripe Connect and real-time WebSocket tracking.",
      cards: [
        {
          n: "01",
          title: "Stripe Connect Payouts",
          description:
            "Stripe Connect Express onboarding lets couriers sign up in under 3 minutes. Payouts are split automatically on delivery completion — platform fee deducted, courier paid instantly.",
          cta: "Connect Architecture",
        },
        {
          n: "02",
          title: "Real-Time GPS Tracking",
          description:
            "WebSocket-powered live location streaming with sub-second updates. Customers see their courier on a live map; merchants see all active deliveries on a live fleet dashboard.",
          cta: "Tracking System",
        },
        {
          n: "03",
          title: "AI Dispatch Engine",
          description:
            "Machine-learning dispatch algorithm assigns orders to the optimal courier based on proximity, historical performance, and live traffic data — cutting average delivery time by 45%.",
          cta: "Dispatch AI",
        },
      ],
    },
    outcomes: {
      title: "The Outcome",
      description:
        "DeliverIQ became the dominant player in their city within 6 months of launch, processing 8,000+ deliveries daily.",
      bullets: [
        {
          title: "Full Payout Automation — Zero Finance Team",
          description: "Stripe Connect eliminated all manual payment processing. 500+ couriers receive automatic payouts minutes after each completed delivery — no human intervention required.",
        },
        {
          title: "45% Faster Deliveries, 92% On-Time Rate",
          description: "The AI dispatch engine and live tracking together reduced average delivery time from 52 minutes to 28 minutes, driving a 92% on-time delivery rate.",
        },
      ],
      tiles: [
        { value: "−45%", label: "Delivery Time", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "500+", label: "Couriers", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "8k+", label: "Daily Deliveries", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "92%", label: "On-Time Rate", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "The Infrastructure Behind Every Delivery",
      description:
        "DeliverIQ proves that logistics technology wins not by copying Uber — but by building smarter, leaner infrastructure that moves money and packages faster than any competitor.",
    },
  },
}

type SlugKey = keyof typeof caseStudies

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies[slug as SlugKey]
  if (!cs) return { title: "Case Study Not Found - Solyio" }
  return {
    title: `${cs.name} Case Study | Solyio`,
    description: cs.tagline,
    alternates: { canonical: `https://solyio.com/portfolio/${slug}` },
  }
}

/* ─── PAGE ────────────────────────────────────────────────────────── */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = caseStudies[slug as SlugKey]
  if (!cs) notFound()

  return (
    <div className="font-body bg-white text-black antialiased">
      <SiteNavbar />

      <main>
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative pt-40 pb-32 px-8 md:px-12 max-w-screen-2xl mx-auto">
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 30%, rgba(255,30,65,0.08) 0%, rgba(255,255,255,0) 70%)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* Left */}
            <div className="lg:col-span-6 mb-16 lg:mb-0">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-[#FF1E41]" />
                <span className="text-[#FF1E41] font-bold tracking-[0.3em] text-xs uppercase">
                  Case Study · {cs.category}
                </span>
              </div>

              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10 text-black">
                {cs.name.includes(" ") ? (
                  <>
                    {cs.name.split(" ")[0]} <br />
                    <span className="text-[#FF1E41]">{cs.name.split(" ").slice(1).join(" ")}</span>
                  </>
                ) : (
                  <span className="text-[#FF1E41]">{cs.name}</span>
                )}
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 max-w-xl leading-relaxed font-light mb-12">
                {cs.tagline}
              </p>

              <div className="flex flex-wrap gap-12">
                {cs.heroMetrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-5xl font-bold text-black mb-2">{m.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF1E41]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: circular image + spinning rings + quote */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[500px]">
                {/* Circular image */}
                <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl relative z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cs.thumbnail}
                    alt={cs.name}
                    className="w-full h-full object-cover  brightness-110 hover:0-0 transition-all duration-1000"
                  />
                </div>
                {/* Spinning rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#FF1E41]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#FF1E41]/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                {/* Quote card */}
                <div className="absolute -bottom-10 -right-4 md:right-0 bg-white p-8 rounded-[2rem] shadow-2xl max-w-[260px] z-20 border border-zinc-50">
                  <span
                    className="material-symbols-outlined text-[#FF1E41] mb-4 text-3xl block"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    format_quote
                  </span>
                  <p className="font-medium italic text-xl leading-tight mb-6">
                    &ldquo;{cs.quote.text}&rdquo;
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                    — {cs.quote.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGE ──────────────────────────────────────────── */}
        <section className="py-40 px-8 md:px-12 bg-zinc-50">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Sticky sidebar */}
              <div className="lg:col-span-4 lg:pr-20">
                <div className="lg:sticky lg:top-40">
                  <span className="text-[#FF1E41] font-bold tracking-widest text-xs uppercase mb-6 block">
                    01 / CONTEXT
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 text-black">
                    {cs.challenge.title}
                  </h2>
                  <p className="text-zinc-500 font-light text-lg leading-relaxed">
                    {cs.challenge.tagline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-8 space-y-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {cs.challenge.cards.map((card) => (
                    <div key={card.title} className="space-y-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-100">
                        <span className="material-symbols-outlined text-[#FF1E41]">
                          {card.icon}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight text-black">
                        {card.title}
                      </h3>
                      <p className="text-zinc-600 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Dashboard image */}
                <div className="rounded-[2.5rem] overflow-hidden bg-white shadow-2xl p-4 border border-zinc-100 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cs.images.challenge}
                    alt="Dashboard"
                    className="w-full h-auto rounded-[2rem] group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTION ───────────────────────────────────────────── */}
        <section className="py-40 px-8 md:px-12 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            {/* Centered header */}
            <div className="mb-32 text-center max-w-4xl mx-auto">
              <span className="inline-block text-[#FF1E41] font-bold tracking-[0.3em] text-[10px] uppercase mb-8">
                02 / ARCHITECTURE
              </span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9] text-black">
                {cs.solution.title}
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                {cs.solution.tagline}
              </p>
            </div>

            {/* 3 architecture cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
              {cs.solution.cards.map((card) => (
                <div
                  key={card.n}
                  className="group relative p-12 bg-zinc-50 rounded-[3rem] hover:bg-black transition-all duration-700"
                >
                  <div className="mb-12">
                    <span className="text-zinc-300 group-hover:text-[#FF1E41] transition-colors text-6xl font-black opacity-20 group-hover:opacity-100">
                      {card.n}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold mb-6 text-black group-hover:text-white transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-zinc-500 group-hover:text-zinc-400 mb-12 leading-relaxed transition-colors">
                    {card.description}
                  </p>
                  <button className="flex items-center gap-4 text-[#FF1E41] font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                    {card.cta}{" "}
                    <span className="material-symbols-outlined text-sm">east</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Dark CTA banner */}
            <div className="relative overflow-hidden bg-black rounded-[4rem] p-16 md:p-24 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
                <div className="lg:col-span-8">
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                    Ready to implement a{" "}
                    <br />
                    <span className="text-[#FF1E41] italic">
                      {cs.solution.cards[0].title}?
                    </span>
                  </h3>
                  <p className="text-xl text-zinc-400 font-light">
                    Schedule a technical consultation with our architecture team to explore potential impact.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:flex justify-end mt-4 lg:mt-0">
                  <Link
                    href="/book"
                    className="inline-block bg-[#FF1E41] text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#FF1E41]/20"
                  >
                    Scale Your Business
                  </Link>
                </div>
              </div>
              {/* BG decor */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF1E41]/20 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-zinc-800/30 blur-[100px] rounded-full pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ── OUTCOMES ───────────────────────────────────────────── */}
        <section className="py-40 px-8 md:px-12 bg-white overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left */}
              <div className="lg:col-span-5 mb-24 lg:mb-0 lg:pr-12">
                <span className="text-[#FF1E41] font-bold tracking-widest text-xs uppercase mb-8 block">
                  03 / OUTCOMES
                </span>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-12 text-black">
                  Business
                  <br />
                  Impact
                </h2>
                <p className="text-xl text-zinc-500 leading-relaxed font-light mb-16">
                  {cs.outcomes.description}
                </p>
                <div className="space-y-12">
                  {cs.outcomes.bullets.map((b) => (
                    <div key={b.title} className="flex items-start gap-8">
                      <div className="w-2 h-2 rounded-full bg-[#FF1E41] mt-3 shrink-0" />
                      <div>
                        <h5 className="text-2xl font-bold mb-3 tracking-tight text-black">
                          {b.title}
                        </h5>
                        <p className="text-zinc-500 font-light leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: 2×2 stat tiles */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  {cs.outcomes.tiles.map((tile) => (
                    <div
                      key={tile.label}
                      className={`${tile.bg} aspect-[1.1] rounded-[3rem] flex flex-col items-center justify-center p-12 text-center group hover:scale-[1.02] transition-transform`}
                    >
                      <div
                        className={`text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-none group-hover:scale-110 transition-transform ${tile.valueCls}`}
                      >
                        {tile.value}
                      </div>
                      <div
                        className={`text-xs font-bold uppercase tracking-[0.3em] mt-4 ${tile.labelCls}`}
                      >
                        {tile.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ────────────────────────────────────────────── */}
        <section className="py-40 px-8 md:px-12 bg-zinc-50">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Large image */}
              <div className="md:col-span-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cs.images.gallery1}
                  alt="Gallery"
                  className="w-full h-[600px] object-cover rounded-[3rem] 0 hover:0-0 transition-all duration-1000 shadow-2xl"
                />
              </div>

              {/* Small image + white card */}
              <div className="md:col-span-5 space-y-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cs.images.gallery2}
                  alt="Gallery"
                  className="w-full h-[280px] object-cover rounded-[3rem] 0 hover:0-0 transition-all duration-1000 shadow-xl"
                />
                <div className="bg-white p-16 rounded-[3rem] flex flex-col justify-center min-h-[280px] border border-zinc-100">
                  <h3 className="text-3xl font-bold mb-6 tracking-tight text-black">
                    {cs.gallery.title}
                  </h3>
                  <p className="text-zinc-500 font-light mb-10 leading-relaxed">
                    {cs.gallery.description}
                  </p>
                  <Link
                    href="/book"
                    className="inline-block bg-black text-white py-5 px-10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FF1E41] transition-all w-fit"
                  >
                    Book Technical Deep Dive
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
