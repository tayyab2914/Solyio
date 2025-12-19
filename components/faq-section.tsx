"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to build a SaaS MVP?",
    answer:
      "With Solyio, we deliver a revenue-ready SaaS MVP in just 10 days. Our AI-powered development process and pre-built components allow us to move fast without sacrificing quality. Traditional development can take 3-6 months, but our approach gets you to market 10x faster.",
  },
  {
    question: "What are AI agents and how do they help my business?",
    answer:
      "AI agents are intelligent software programs that can automate tasks, provide customer support, generate content, analyze data, and handle operations 24/7. They reduce operational costs by up to 80%, work without breaks or salaries, and scale instantly with your business needs. Common use cases include customer service bots, content generation, lead qualification, and data analysis.",
  },
  {
    question: "Do I need technical skills to work with Solyio?",
    answer:
      "No technical skills required. Solyio is built specifically for non-technical founders, entrepreneurs, and businesses. We handle all the technical development, AI integration, and infrastructure while you focus on your vision, customers, and business strategy. You'll receive a fully functional product you can operate without coding.",
  },
  {
    question: "Which countries do you serve?",
    answer:
      "We serve clients globally with a primary focus on the United States, United Kingdom, Germany, France, Netherlands, Spain, Italy, and other European countries. Our distributed team works across time zones to deliver your MVP on schedule, regardless of your location.",
  },
  {
    question: "What industries can benefit from AI-powered MVPs?",
    answer:
      "Almost every industry can benefit from AI automation. We've successfully built MVPs for e-commerce, healthcare, education, real estate, professional services, food & hospitality, fintech, fitness & wellness, legal services, automotive, and creative industries. If your business involves repetitive tasks, customer interactions, or data processing, AI can help.",
  },
  {
    question: "What's included in an AI-powered MVP?",
    answer:
      "Every MVP includes custom AI agents tailored to your use case, a fully functional web application, payment integration (Stripe), user authentication, responsive design, SEO optimization, analytics setup, and 30 days of post-launch support. We also provide documentation and training to help you manage your product.",
  },
  {
    question: "How much does it cost to build an MVP with Solyio?",
    answer:
      "Our MVP packages are designed for startups and small businesses. Book a free discovery call to discuss your specific needs and get a custom quote. We offer flexible payment plans and our pricing is typically 60-80% less than traditional development agencies while delivering faster results.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, every MVP comes with 30 days of complimentary post-launch support. We also offer monthly maintenance packages, feature development, and scaling services for businesses that need ongoing technical support. Our team remains available to help you grow and iterate on your product.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">FAQ</span>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Frequently Asked Questions About <span className="text-primary">AI MVP Development</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            Everything you need to know about building your SaaS MVP with AI agents
          </p>
        </div>

        <div className="space-y-4" role="list" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-background border border-border rounded-xl overflow-hidden" role="listitem">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Have more questions?{" "}
            <a href="/contact" className="text-primary font-medium hover:underline">
              Contact us
            </a>{" "}
            or{" "}
            <a href="/book" className="text-primary font-medium hover:underline">
              book a free call
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
