"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, MapPin, CheckCircle2, Clock, Phone } from "lucide-react"
import Link from "next/link"

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f7ff] to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Contact Us</p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Let's start a <span className="text-[#1e3a5f]">conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about AI-powered MVPs? Want to explore how we can help your business? We'd love to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <Mail className="h-6 w-6 text-[#1e3a5f]" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">Email Us</h3>
              <p className="text-sm text-muted-foreground">hello@solyio.com</p>
              <p className="text-sm text-muted-foreground">support@solyio.com</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <Phone className="h-6 w-6 text-[#1e3a5f]" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">Call Us</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <MessageSquare className="h-6 w-6 text-[#1e3a5f]" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
              <p className="text-sm text-muted-foreground">via our chat widget</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <MapPin className="h-6 w-6 text-[#1e3a5f]" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">Remote-first company</p>
              <p className="text-sm text-muted-foreground">Serving clients globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">Send us a message</h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours. We're here to answer any questions
                you have about our AI-powered MVP development services.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f7ff]">
                    <Clock className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f7ff]">
                    <CheckCircle2 className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">No Obligations</h3>
                    <p className="text-sm text-muted-foreground">Free consultation, no strings attached</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-[#1e3a5f]/20 bg-[#f0f7ff] p-6">
                <h3 className="mb-2 font-semibold text-foreground">Prefer to book a call?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Skip the form and schedule a free 30-minute discovery call directly.
                </p>
                <Button asChild className="bg-[#1e3a5f] text-white hover:bg-[#2a4a73]">
                  <Link href="/book">Book a Discovery Call</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="mb-6 text-muted-foreground">We'll get back to you within 24 hours.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name</Label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#1e3a5f] text-white hover:bg-[#2a4a73]">
                    Send Message
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does it take to build an MVP?",
                a: "Our AI-powered development process delivers production-ready MVPs in just 10 days. This includes discovery, design, development, AI agent integration, and launch.",
              },
              {
                q: "What if I don't have technical knowledge?",
                a: "That's exactly who we built Solyio for! We handle all the technical work while you focus on your business vision. No coding required from your side.",
              },
              {
                q: "What kind of AI agents do you integrate?",
                a: "We integrate custom AI agents for customer support, content generation, data analysis, marketing automation, and more. The specific agents depend on your business needs.",
              },
              {
                q: "Do you provide ongoing support after launch?",
                a: "Yes! We offer various support packages including maintenance, updates, and scaling assistance. Your MVP is just the beginning of our partnership.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
