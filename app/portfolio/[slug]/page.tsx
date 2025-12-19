import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const projects = {
  robomarketer: {
    name: "RoboMarketer",
    tagline: "AI marketing automation that never sleeps",
    description: "AI marketing automation platform with content generation and campaign optimization agents.",
    fullDescription:
      "RoboMarketer is a comprehensive AI-powered marketing automation platform designed for growing businesses. It combines content generation, campaign management, and performance optimization into one seamless experience. The platform uses advanced AI agents to create, schedule, and optimize marketing content across multiple channels.",
    aiAgent: "Marketing & Content Agent",
    outcome: "10x faster content creation",
    tags: ["Marketing", "AI Agents", "Automation"],
    features: [
      "AI-powered content generation for blogs, social media, and email",
      "Automated campaign scheduling and optimization",
      "Multi-channel marketing from a single dashboard",
      "Real-time performance analytics and insights",
      "A/B testing with AI-driven recommendations",
      "Customer segmentation and targeting",
    ],
    techStack: ["Next.js", "OpenAI GPT-4", "Vercel AI SDK", "PostgreSQL", "Stripe"],
    timeline: "10 days",
    clientType: "Marketing Agency",
    results: [
      { metric: "Content Output", value: "10x", description: "increase in content production" },
      { metric: "Time Saved", value: "40hrs", description: "saved per week on marketing tasks" },
      { metric: "Campaign ROI", value: "285%", description: "average return on ad spend" },
    ],
    seoKeywords: ["AI marketing automation", "content generation platform", "marketing AI agent"],
  },
  expertaiq: {
    name: "ExpertAIQ",
    tagline: "Transform data into actionable insights",
    description: "AI-powered insights platform that transforms raw data into actionable business intelligence.",
    fullDescription:
      "ExpertAIQ is an AI-driven analytics platform that helps businesses make data-informed decisions faster. The platform ingests data from multiple sources, processes it through intelligent agents, and delivers actionable insights in plain language.",
    aiAgent: "Research & Analysis Agent",
    outcome: "80% reduction in manual research",
    tags: ["Analytics", "AI Insights", "Data"],
    features: [
      "Natural language query interface for data analysis",
      "Automated report generation and scheduling",
      "Multi-source data integration",
      "Predictive analytics and trend forecasting",
      "Custom dashboard builder",
      "Slack and email alert integrations",
    ],
    techStack: ["Next.js", "Claude AI", "Vercel AI SDK", "Supabase", "D3.js"],
    timeline: "10 days",
    clientType: "Research Firm",
    results: [
      { metric: "Research Time", value: "80%", description: "reduction in manual research hours" },
      { metric: "Data Sources", value: "15+", description: "integrated data sources" },
      { metric: "Reports", value: "500+", description: "automated reports generated monthly" },
    ],
    seoKeywords: ["AI analytics platform", "business intelligence AI", "data analysis automation"],
  },
  cashads: {
    name: "CashAds",
    tagline: "AI-optimized advertising that maximizes ROAS",
    description: "Automated ad management platform with AI-driven bidding and creative optimization.",
    fullDescription:
      "CashAds revolutionizes digital advertising by putting AI in charge of your ad campaigns. The platform automatically manages bidding strategies, optimizes creative assets, and reallocates budget to top-performing campaigns.",
    aiAgent: "Ad Optimization Agent",
    outcome: "35% improvement in ROAS",
    tags: ["Advertising", "Optimization", "AI"],
    features: [
      "AI-driven bid management across platforms",
      "Automated creative testing and optimization",
      "Budget reallocation based on performance",
      "Cross-platform campaign management",
      "Real-time ROAS tracking and alerts",
      "Competitor analysis and benchmarking",
    ],
    techStack: ["Next.js", "GPT-4", "Vercel AI SDK", "Neon", "Google Ads API"],
    timeline: "10 days",
    clientType: "E-commerce Brand",
    results: [
      { metric: "ROAS", value: "35%", description: "improvement in return on ad spend" },
      { metric: "CPA", value: "42%", description: "reduction in cost per acquisition" },
      { metric: "Ad Spend", value: "$2M+", description: "managed monthly ad budget" },
    ],
    seoKeywords: ["AI advertising platform", "ad optimization AI", "ROAS improvement"],
  },
  "healthtrack-ai": {
    name: "HealthTrack AI",
    tagline: "Personalized health insights powered by AI",
    description: "Patient engagement platform with AI-powered health recommendations and appointment scheduling.",
    fullDescription:
      "HealthTrack AI transforms patient engagement for healthcare providers. The platform uses AI agents to provide personalized health recommendations, automate appointment scheduling, and deliver proactive health insights.",
    aiAgent: "Health & Wellness Agent",
    outcome: "60% reduction in no-shows",
    tags: ["Healthcare", "Patient Engagement", "AI"],
    features: [
      "Personalized health recommendations",
      "AI-powered appointment scheduling",
      "Medication reminders and tracking",
      "Symptom checker with AI triage",
      "Secure patient-provider messaging",
      "Integration with EHR systems",
    ],
    techStack: ["Next.js", "Claude AI", "Vercel AI SDK", "Supabase", "Twilio"],
    timeline: "10 days",
    clientType: "Healthcare Clinic",
    results: [
      { metric: "No-Shows", value: "60%", description: "reduction in missed appointments" },
      { metric: "Patient Engagement", value: "3x", description: "increase in app interactions" },
      { metric: "Time Saved", value: "25hrs", description: "saved weekly on scheduling" },
    ],
    seoKeywords: ["healthcare AI platform", "patient engagement AI", "medical appointment scheduling"],
  },
  learnmate: {
    name: "LearnMate",
    tagline: "AI tutoring that adapts to every student",
    description: "Adaptive learning platform with AI tutors that personalize education for each student.",
    fullDescription:
      "LearnMate is an AI-powered educational platform that provides personalized tutoring at scale. The platform analyzes each student's learning style, identifies knowledge gaps, and creates customized learning paths.",
    aiAgent: "Education & Tutoring Agent",
    outcome: "45% improvement in test scores",
    tags: ["Education", "EdTech", "AI Tutoring"],
    features: [
      "Adaptive learning paths based on student performance",
      "24/7 AI tutor availability",
      "Progress tracking and analytics for parents",
      "Interactive quizzes and assessments",
      "Multi-subject support",
      "Gamification and achievement system",
    ],
    techStack: ["Next.js", "GPT-4", "Vercel AI SDK", "PostgreSQL", "Stripe"],
    timeline: "10 days",
    clientType: "Online Education Company",
    results: [
      { metric: "Test Scores", value: "45%", description: "average improvement in grades" },
      { metric: "Students", value: "10K+", description: "active learners on platform" },
      { metric: "Sessions", value: "50K+", description: "tutoring sessions monthly" },
    ],
    seoKeywords: ["AI tutoring platform", "adaptive learning AI", "edtech AI"],
  },
  propwise: {
    name: "PropWise",
    tagline: "AI-powered property management made simple",
    description:
      "Real estate management platform with AI agents for tenant communication and maintenance coordination.",
    fullDescription:
      "PropWise streamlines property management with intelligent AI agents. The platform handles tenant inquiries, coordinates maintenance requests, and automates rent collection.",
    aiAgent: "Property Management Agent",
    outcome: "50% faster maintenance resolution",
    tags: ["Real Estate", "Property Management", "AI"],
    features: [
      "AI-powered tenant communication",
      "Automated maintenance request routing",
      "Smart rent collection and reminders",
      "Vacancy listing and lead management",
      "Financial reporting and analytics",
      "Document management and e-signatures",
    ],
    techStack: ["Next.js", "Claude AI", "Vercel AI SDK", "Supabase", "Stripe"],
    timeline: "10 days",
    clientType: "Property Management Company",
    results: [
      { metric: "Response Time", value: "50%", description: "faster maintenance resolution" },
      { metric: "Properties", value: "500+", description: "units managed on platform" },
      { metric: "Tenant Satisfaction", value: "4.8/5", description: "average rating" },
    ],
    seoKeywords: ["property management AI", "real estate automation", "tenant management platform"],
  },
}

type ProjectKey = keyof typeof projects

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug as ProjectKey]

  if (!project) {
    return { title: "Project Not Found - Solyio" }
  }

  return {
    title: `${project.name} - AI-Powered ${project.tags[0]} MVP Case Study`,
    description: `${project.fullDescription} Built in ${project.timeline} with ${project.aiAgent}. Results: ${project.outcome}.`,
    keywords: [
      ...(project.seoKeywords || []),
      "AI MVP case study",
      "SaaS development",
      project.clientType,
      ...project.tags.map((t) => t.toLowerCase()),
    ],
    alternates: {
      canonical: `https://solyio.com/portfolio/${slug}`,
    },
    openGraph: {
      title: `${project.name} - Solyio Portfolio`,
      description: project.description,
      url: `https://solyio.com/portfolio/${slug}`,
      type: "article",
      images: [
        {
          url: `/portfolio/${slug}-og.png`,
          width: 1200,
          height: 630,
          alt: `${project.name} - AI-Powered MVP by Solyio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} - AI MVP Case Study`,
      description: `${project.description} ${project.outcome}`,
    },
  }
}

function ProjectJsonLd({ project, slug }: { project: (typeof projects)[ProjectKey]; slug: string }) {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.name} - AI-Powered MVP Case Study`,
    description: project.fullDescription,
    author: {
      "@type": "Organization",
      name: "Solyio",
      url: "https://solyio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Solyio",
      logo: {
        "@type": "ImageObject",
        url: "https://solyio.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://solyio.com/portfolio/${slug}`,
    },
    about: {
      "@type": "SoftwareApplication",
      name: project.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: project.description,
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://solyio.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://solyio.com/portfolio" },
      { "@type": "ListItem", position: 3, name: project.name, item: `https://solyio.com/portfolio/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as ProjectKey]

  if (!project) {
    notFound()
  }

  return (
    <>
      <ProjectJsonLd project={project} slug={slug} />
      <main className="min-h-screen bg-background" role="main" aria-label={`${project.name} Case Study`}>
        <Header />
        <ProjectDetail project={project} />
        <Footer />
      </main>
    </>
  )
}
