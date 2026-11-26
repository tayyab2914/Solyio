"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error ?? "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.")
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[0.7rem] uppercase tracking-widest font-bold text-[#5e3f3e]">
            Full Identity
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full bg-[#f6f3f2] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#bb0029]/50 transition-all outline-none text-[#1c1b1b] placeholder:text-[#5e3f3e]/40"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[0.7rem] uppercase tracking-widest font-bold text-[#5e3f3e]">
            Digital Address
          </label>
          <input
            type="email"
            placeholder="john@company.ai"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full bg-[#f6f3f2] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#bb0029]/50 transition-all outline-none text-[#1c1b1b] placeholder:text-[#5e3f3e]/40"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[0.7rem] uppercase tracking-widest font-bold text-[#5e3f3e]">
          Subject / Intent
        </label>
        <input
          type="text"
          placeholder="AI Infrastructure Inquiry"
          required
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className="w-full bg-[#f6f3f2] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#bb0029]/50 transition-all outline-none text-[#1c1b1b] placeholder:text-[#5e3f3e]/40"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[0.7rem] uppercase tracking-widest font-bold text-[#5e3f3e]">
          Message Details
        </label>
        <textarea
          rows={5}
          placeholder="Tell us about your technical challenges..."
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full bg-[#f6f3f2] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#bb0029]/50 transition-all outline-none resize-none text-[#1c1b1b] placeholder:text-[#5e3f3e]/40"
        />
      </div>

      {/* Success banner */}
      {status === "success" && (
        <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          Message transmitted! We&apos;ll be in touch within 2 hours.
        </div>
      )}

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          <span className="material-symbols-outlined text-lg">error</span>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full py-5 rounded-full font-headline font-bold text-lg tracking-tight text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundImage: "linear-gradient(135deg, #bb0029 0%, #e90035 100%)" }}
      >
        {status === "loading" ? (
          <>
            <span
              className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
              style={{ animation: "spin 0.8s linear infinite" }}
            />
            Transmitting…
          </>
        ) : status === "success" ? (
          <>
            <span className="material-symbols-outlined text-lg">check_circle</span>
            Message Sent
          </>
        ) : (
          <>
            Transmit Message
            <span className="material-symbols-outlined">send</span>
          </>
        )}
      </button>
    </form>
  )
}
