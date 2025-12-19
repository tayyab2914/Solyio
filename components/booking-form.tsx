"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, CheckCircle2 } from "lucide-react"

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
    preferredTime: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your booking system
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="book" className="py-20 md:py-28 bg-gradient-to-b from-[#f0f7ff] to-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-border bg-card p-12 shadow-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">You&apos;re on the list!</h2>
            <p className="text-muted-foreground">
              We&apos;ll reach out within 24 hours to confirm your discovery call. Check your inbox for a confirmation
              email.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="book" className="py-20 md:py-28 bg-gradient-to-b from-[#f0f7ff] to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Book a Call</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Let&apos;s discuss your <span className="text-[#1e3a5f]">MVP idea</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule a free 30-minute discovery call. We&apos;ll explore your idea, identify AI opportunities, and see
              if we&apos;re a good fit.
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
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
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
                <Label htmlFor="idea">Tell us about your idea</Label>
                <Textarea
                  id="idea"
                  placeholder="Briefly describe your MVP idea and what problem it solves..."
                  rows={4}
                  value={formData.idea}
                  onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time (optional)</Label>
                <Input
                  id="preferredTime"
                  placeholder="e.g., Weekday mornings EST"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#1e3a5f] text-white hover:bg-[#2a4a73]">
                Request Discovery Call
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No commitment required. We&apos;ll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
