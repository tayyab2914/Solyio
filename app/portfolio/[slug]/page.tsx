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
    category: "SaaS · Analytics",
    tagline:
      "How we built an AI research engine that eliminates manual data analysis — cutting research time by 80% and unlocking instant business intelligence.",
    thumbnail: "/ExpertAIQ.png",
    images: {
      challenge: CHALLENGE_IMG,
      gallery1: GALLERY_IMG_1,
      gallery2: GALLERY_IMG_2,
    },
    heroMetrics: [
      { value: "+80%", label: "Research Efficiency" },
      { value: "15+", label: "Integrated Sources" },
    ],
    quote: {
      text: "The most significant leap in our team's intelligence capability.",
      author: "Head of Research, ExpertAIQ",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Manual research pipelines were consuming 80% of analyst time on low-value aggregation tasks.",
      cards: [
        {
          icon: "manage_search",
          title: "Data Fragmentation",
          description:
            "Research teams spent 12+ hours weekly aggregating data from 15 disconnected platforms with no unified intelligence layer or single source of truth.",
        },
        {
          icon: "trending_down",
          title: "Delayed Decisions",
          description:
            "Critical business decisions were delayed by days while analysts manually processed and cross-referenced reports, creating costly strategic blind spots.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We deployed a multi-source neural aggregation layer that transforms raw data into instant, actionable business intelligence.",
      cards: [
        {
          n: "01",
          title: "Neural Analysis Layer",
          description:
            "Proprietary AI engine that ingests 15+ data sources simultaneously and generates natural-language insights in under 2 seconds.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Data Mesh Connector",
          description:
            "Distributed integration fabric that unifies fragmented data pipelines into a single, coherent intelligence network accessible in real-time.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "Report Automation",
          description:
            "Automated reporting suite that generates comprehensive analysis reports and delivers them via Slack and email on a custom schedule.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "The deployment of ExpertAIQ fundamentally shifted research workflows from reactive data collection to proactive predictive intelligence.",
      bullets: [
        {
          title: "80% Time Reclaimed",
          description:
            "Analysts redirected from manual data collection to high-value strategic interpretation and decision-making.",
        },
        {
          title: "Real-time Intelligence",
          description:
            "Decision-makers now receive live data insights instead of 48-hour-delayed static reports.",
        },
      ],
      tiles: [
        { value: "+80%", label: "Time Saved", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "500+", label: "Monthly Reports", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "15+", label: "Data Sources", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "2s", label: "Query Response", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "ExpertAIQ isn't just a dashboard; it's the foundation for the next decade of intelligent business analytics and strategic foresight.",
    },
  },

  robomarketer: {
    name: "RoboMarketer",
    category: "SaaS · Marketing",
    tagline:
      "How we engineered an autonomous marketing AI that 10x'd content output and drove 285% average ROAS — without adding a single headcount.",
    thumbnail: "/RoboMarketer.png",
    images: {
      challenge: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07b?auto=format&fit=crop&w=1200&q=80",
      gallery1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    },
    heroMetrics: [
      { value: "10x", label: "Content Output" },
      { value: "285%", label: "Campaign ROI" },
    ],
    quote: {
      text: "Our content production multiplied while our team stayed the same size.",
      author: "CMO, RoboMarketer",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Content bottlenecks were killing campaign velocity and capping growth at a fraction of potential.",
      cards: [
        {
          icon: "hourglass_empty",
          title: "Slow Content Pipeline",
          description:
            "Marketing teams spent 40+ hours weekly producing content manually, creating a severe bottleneck that delayed campaign launches and reduced competitive agility.",
        },
        {
          icon: "analytics",
          title: "Underperforming Campaigns",
          description:
            "Without predictive optimization, ad campaigns were adjusted reactively — days after wasted spend had already accumulated across channels.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We built an autonomous content-to-campaign pipeline that creates, optimizes, and deploys marketing at machine speed.",
      cards: [
        {
          n: "01",
          title: "AI Content Engine",
          description:
            "GPT-4 powered generation layer that produces on-brand blogs, social posts, and email copy at 10x the speed of human writers, with A/B variant generation built in.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Campaign Optimizer",
          description:
            "Real-time bid management and creative testing engine that continuously reallocates budget toward top-performing ad variants across all major platforms.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "Multi-Channel Mesh",
          description:
            "Unified orchestration layer that synchronizes content and campaigns across email, social, paid, and SEO from a single intelligent control plane.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "RoboMarketer transformed marketing from a cost center into a predictable, scalable growth engine with measurable returns.",
      bullets: [
        {
          title: "10x Content Velocity",
          description:
            "The team now publishes 10x more high-quality content with zero additional headcount or agency spend.",
        },
        {
          title: "285% Average ROAS",
          description:
            "AI-optimized campaigns consistently outperform human-managed counterparts by 3x across every channel.",
        },
      ],
      tiles: [
        { value: "10x", label: "Content Output", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "285%", label: "Campaign ROI", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "40h", label: "Saved Weekly", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "94%", label: "Accuracy Rate", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "RoboMarketer isn't just a content tool; it's the autonomous marketing intelligence layer that compounds competitive advantage over time.",
    },
  },

  cashads: {
    name: "CashAds",
    category: "Advertising · E-commerce",
    tagline:
      "How we deployed an AI-driven ad optimization engine that improved ROAS by 35% and cut cost per acquisition by 42% across $2M+ in monthly spend.",
    thumbnail: "/Cashads.png",
    images: {
      challenge: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      gallery1: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80",
    },
    heroMetrics: [
      { value: "+35%", label: "ROAS Improvement" },
      { value: "−42%", label: "CPA Reduction" },
    ],
    quote: {
      text: "We recaptured millions in wasted ad spend within the first quarter.",
      author: "Growth Director, CashAds",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Reactive bid management was silently burning budget while leaving high-intent conversions on the table.",
      cards: [
        {
          icon: "money_off",
          title: "Wasted Ad Spend",
          description:
            "Manual bid adjustments were made days after performance data arrived — by then, tens of thousands in budget had already been misallocated to underperforming audiences.",
        },
        {
          icon: "image_not_supported",
          title: "Creative Fatigue",
          description:
            "Ad creatives went stale without systematic testing, causing audience engagement to steadily decline and cost-per-click to surge across campaigns.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We deployed a neural bidding and creative intelligence layer that optimizes every dollar in real-time, 24/7.",
      cards: [
        {
          n: "01",
          title: "AI Bidding Engine",
          description:
            "Real-time bid optimization engine that adjusts keyword and audience bids every 15 minutes using predictive signals — not lagging 7-day averages.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Creative Optimizer",
          description:
            "Automated creative testing framework that runs continuous multivariate experiments and retires underperforming variants before they drain budget.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "Budget Allocator",
          description:
            "Intelligent cross-channel budget reallocation system that shifts spend toward the highest-performing platforms in real-time based on live ROAS signals.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "CashAds transformed ad management from a manual guessing game into a precision-engineered profit machine with compounding returns.",
      bullets: [
        {
          title: "$2M+ Monthly Spend Managed",
          description:
            "The AI engine now autonomously manages over $2M in monthly ad budget with greater accuracy than any human team.",
        },
        {
          title: "42% CPA Reduction",
          description:
            "Cost per acquisition dropped dramatically as the system continuously eliminated inefficient spend pathways.",
        },
      ],
      tiles: [
        { value: "+35%", label: "ROAS Gain", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "−42%", label: "CPA Drop", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "$2M+", label: "Managed Monthly", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "15m", label: "Optimization Cycle", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "CashAds isn't just an ad manager; it's the autonomous profit engine that makes every advertising dollar work harder than the last.",
    },
  },

  "healthtrack-ai": {
    name: "PriceSmurf",
    category: "Healthcare · SaaS",
    tagline:
      "How we built an AI patient engagement platform that reduced appointment no-shows by 60% and tripled patient interactions for a leading healthcare clinic.",
    thumbnail: "/PriceSmurf.png",
    images: {
      challenge: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      gallery1: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1584982751601-97dthe70864d?auto=format&fit=crop&w=800&q=80",
    },
    heroMetrics: [
      { value: "−60%", label: "No-show Rate" },
      { value: "3x", label: "Patient Engagement" },
    ],
    quote: {
      text: "This platform transformed how we connect with and retain our patients.",
      author: "Operations Director, Healthcare Clinic",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "Appointment no-shows and disengaged patients were costing the clinic tens of thousands in lost revenue weekly.",
      cards: [
        {
          icon: "event_busy",
          title: "High No-show Rate",
          description:
            "Without intelligent reminders, up to 30% of scheduled appointments went unattended — creating staffing waste and revenue gaps that compounded daily.",
        },
        {
          icon: "person_off",
          title: "Patient Disengagement",
          description:
            "Generic communication strategies failed to resonate with patients, leading to poor health outcomes and low retention that threatened long-term practice viability.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We deployed a personalized patient intelligence layer that communicates with each patient at the right moment with the right message.",
      cards: [
        {
          n: "01",
          title: "Smart Scheduling AI",
          description:
            "Predictive appointment engine that analyzes patient history to identify high-risk no-show slots and automatically triggers personalized re-engagement sequences.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Reminder Intelligence",
          description:
            "Multi-channel reminder system (SMS, email, in-app) powered by behavioral AI that selects the optimal channel, timing, and message tone for each individual patient.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "EHR Integration Layer",
          description:
            "Secure integration fabric that connects with existing Electronic Health Record systems to provide seamless, context-aware patient communication.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "PriceSmurf transformed patient management from a reactive call-center operation into a proactive, AI-driven care engagement platform.",
      bullets: [
        {
          title: "60% No-show Reduction",
          description:
            "Intelligent reminders and re-engagement sequences dramatically reduced wasted appointment slots and recovered lost revenue.",
        },
        {
          title: "3x Patient Interactions",
          description:
            "Personalized AI communication tripled meaningful patient touchpoints, driving better health outcomes and retention.",
        },
      ],
      tiles: [
        { value: "−60%", label: "No-shows", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "3x", label: "Engagement", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "25h", label: "Saved Weekly", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "98%", label: "Msg Delivery", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "PriceSmurf isn't just a scheduling tool; it's the patient intelligence layer that makes every clinic interaction more effective than the last.",
    },
  },

  upgrr: {
    name: "Upgrr",
    category: "SaaS · Growth",
    tagline:
      "How we engineered a personalized growth platform that tripled user retention and automated the entire user upgrade journey through predictive AI.",
    thumbnail: "/upgrr.png",
    images: {
      challenge: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      gallery1: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    heroMetrics: [
      { value: "+3x", label: "User Retention" },
      { value: "+50%", label: "Upgrade Velocity" },
    ],
    quote: {
      text: "Upgrr turned our churn problem into our greatest growth advantage.",
      author: "CEO, Upgrr",
    },
    challenge: {
      title: "The Challenge",
      tagline:
        "High churn and low upgrade rates were silently eroding a promising SaaS product's growth trajectory.",
      cards: [
        {
          icon: "person_remove",
          title: "Invisible Churn",
          description:
            "Users were silently disengaging without triggering any alerts, and by the time manual follow-ups occurred, the window for re-engagement had already closed.",
        },
        {
          icon: "upgrade",
          title: "Stalled Upgrades",
          description:
            "Generic in-app messaging failed to connect the right premium features to the right users at the right moment, leaving a massive conversion gap unexploited.",
        },
      ],
    },
    solution: {
      title: "The AI Implementation",
      tagline:
        "We deployed a behavioral prediction layer that identifies upgrade and churn signals before they materialize — and acts on them automatically.",
      cards: [
        {
          n: "01",
          title: "Churn Prediction Engine",
          description:
            "Real-time behavioral AI that scores every user's churn probability daily and automatically triggers personalized re-engagement sequences before they disengage.",
          cta: "Explore Engine",
        },
        {
          n: "02",
          title: "Upgrade Intelligence",
          description:
            "Contextual upgrade prompt system that analyzes each user's usage patterns and surfaces the most relevant premium feature at the highest-intent moment.",
          cta: "System Design",
        },
        {
          n: "03",
          title: "Growth Analytics",
          description:
            "Live dashboard providing product and growth teams with instant cohort-level retention insights, upgrade funnel analysis, and revenue impact forecasts.",
          cta: "View Demo",
        },
      ],
    },
    outcomes: {
      title: "Business Impact",
      description:
        "Upgrr's AI layer transformed user lifecycle management from a reactive support function into a proactive, revenue-compounding growth engine.",
      bullets: [
        {
          title: "3x Retention Improvement",
          description:
            "Proactive AI intervention caught at-risk users weeks before they churned, tripling 90-day retention rates.",
        },
        {
          title: "50% Faster Upgrades",
          description:
            "Contextual upgrade prompts accelerated the freemium-to-paid conversion journey by identifying and acting on intent signals in real-time.",
        },
      ],
      tiles: [
        { value: "+3x", label: "Retention", bg: "bg-zinc-50", valueCls: "text-[#FF1E41]", labelCls: "text-zinc-400" },
        { value: "+50%", label: "Upgrade Speed", bg: "bg-black", valueCls: "text-white", labelCls: "text-[#FF1E41]" },
        { value: "92%", label: "Prediction Acc.", bg: "bg-[#FF1E41]", valueCls: "text-white", labelCls: "text-white/60" },
        { value: "0", label: "Manual Chases", bg: "bg-zinc-100", valueCls: "text-black", labelCls: "text-zinc-400" },
      ],
    },
    gallery: {
      title: "Designed for Tomorrow",
      description:
        "Upgrr isn't just a retention tool; it's the growth intelligence layer that turns every user interaction into a compounding revenue signal.",
    },
  },

  novapay: {
    name: "NovaPay",
    category: "Mobile · Fintech",
    tagline:
      "How we built a cross-platform React Native fintech app with full Stripe integration — subscriptions, one-time payments, and Connect payouts — scaling to 50,000 active users in under a year.",
    thumbnail: "/novapay-ui.svg",
    images: {
      challenge: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      gallery1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1512941937669-84a2000f7bff?auto=format&fit=crop&w=800&q=80",
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
      challenge: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      gallery1: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1523206489230-c012df5cde1b?auto=format&fit=crop&w=800&q=80",
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
      challenge: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      gallery1: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1510440777527-f17fb63e60ca?auto=format&fit=crop&w=800&q=80",
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
      challenge: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
      gallery1: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?auto=format&fit=crop&w=1200&q=80",
      gallery2: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=800&q=80",
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
                    className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
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
                  className="w-full h-[600px] object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                />
              </div>

              {/* Small image + white card */}
              <div className="md:col-span-5 space-y-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cs.images.gallery2}
                  alt="Gallery"
                  className="w-full h-[280px] object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl"
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
