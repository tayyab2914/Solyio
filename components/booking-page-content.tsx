"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, CheckCircle2, Users, Zap, Target, ArrowRight } from "lucide-react"

export function BookingPageContent() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
    preferredTime: "",
    budget: "",
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Book a Discovery Call</p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Let's bring your <span className="text-[#1e3a5f]">MVP idea</span> to life
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule a free 30-minute discovery call. We'll explore your idea, identify AI opportunities, and create a
              roadmap to launch in 10 days.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">What to expect on the call</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <Target className="h-6 w-6 text-[#1e3a5f]" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Understand Your Vision</h3>
              <p className="text-sm text-muted-foreground">
                We'll dive deep into your MVP idea, target audience, and business goals.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <Zap className="h-6 w-6 text-[#1e3a5f]" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Identify AI Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Discover how AI agents can automate and enhance your product.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <Users className="h-6 w-6 text-[#1e3a5f]" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Custom Roadmap</h3>
              <p className="text-sm text-muted-foreground">
                Get a clear plan for how we'll build and launch your MVP in 10 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">Schedule your free discovery call</h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form and we'll send you a calendar invite within 24 hours. Choose a time that works best
                for your schedule.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f7ff]">
                    <Calendar className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Flexible Scheduling</h3>
                    <p className="text-sm text-muted-foreground">Pick a time that works for your timezone</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f7ff]">
                    <Clock className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">30 Minutes</h3>
                    <p className="text-sm text-muted-foreground">Quick, focused conversation about your goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f7ff]">
                    <CheckCircle2 className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">No Commitment</h3>
                    <p className="text-sm text-muted-foreground">Completely free, no obligations</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-10 rounded-xl border border-border bg-muted/30 p-6">
                <p className="mb-4 text-sm text-muted-foreground italic">
                  "The discovery call was incredibly valuable. Within 30 minutes, they understood my vision and showed
                  me exactly how AI could transform my idea. Two weeks later, my MVP was live."
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f]">
                    <span className="text-sm font-semibold text-white">JD</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">James Davidson</p>
                    <p className="text-xs text-muted-foreground">Founder, RoboMarketer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">You're on the list!</h3>
                  <p className="mb-6 text-muted-foreground">
                    We'll reach out within 24 hours to confirm your discovery call. Check your inbox for a confirmation
                    email.
                  </p>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>What's next?</strong> Check your email for a calendar invite with video call details.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Project Name</Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc. or My Startup Idea"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idea">Tell us about your MVP idea *</Label>
                    <Textarea
                      id="idea"
                      placeholder="Briefly describe your MVP idea, what problem it solves, and who your target audience is..."
                      rows={4}
                      value={formData.idea}
                      onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Input
                        id="preferredTime"
                        placeholder="e.g., Weekday mornings EST"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <Input
                        id="budget"
                        placeholder="e.g., $5K-$10K"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#1e3a5f] text-white hover:bg-[#2a4a73]">
                    Request Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    No commitment required. We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="bg-[#1e3a5f] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">From idea to launch in 10 days</h2>
          <p className="mb-8 text-white/80">
            Our proven process turns your MVP idea into a revenue-ready product with AI agents built in.
          </p>
          <div className="grid gap-4 sm:grid-cols-5">
            {["Discovery", "Design", "Build", "AI Integration", "Launch"].map((step, index) => (
              <div key={step} className="rounded-lg bg-white/10 p-4">
                <span className="mb-2 block text-2xl font-bold text-white">{index + 1}</span>
                <span className="text-sm text-white/80">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
