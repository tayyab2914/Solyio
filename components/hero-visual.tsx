"use client"

import { useEffect, useState } from "react"

const TASKS = [
  { icon: "psychology",   label: "Custom LLM initialized",        status: "done" },
  { icon: "smartphone",  label: "Mobile interface deployed",       status: "done" },
  { icon: "language",    label: "Web platform scaling…",           status: "running" },
  { icon: "hub",         label: "AI agents connected",             status: "done" },
  { icon: "trending_up", label: "Revenue loop optimizing…",        status: "running" },
]

const CHAT = [
  { from: "user",  text: "Automate my sales funnel with AI" },
  { from: "ai",    text: "Deploying lead-scoring model + CRM sync…" },
  { from: "ai",    text: "Done. Conversion rate ↑ 38% projected." },
]

export function HeroVisual() {
  const [activeTask, setActiveTask] = useState(0)
  const [chatStep, setChatStep]     = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveTask((s) => (s + 1) % TASKS.length), 1800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (chatStep >= CHAT.length) return
    const t = setTimeout(() => setChatStep((s) => s + 1), 1200 + chatStep * 900)
    return () => clearTimeout(t)
  }, [chatStep])

  return (
    <div className="relative w-full max-w-[480px] mx-auto select-none" aria-hidden>
      {/* ── Orbital rings ─────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="w-[460px] h-[460px] rounded-full border border-[#FF1E41]/8"
          style={{ animation: "spin 28s linear infinite" }}
        />
        <div
          className="absolute w-[360px] h-[360px] rounded-full border border-[#FF1E41]/5"
          style={{ animation: "spin 18s linear infinite reverse" }}
        />
        {/* Orbiting dot */}
        <div
          className="absolute w-[460px] h-[460px] rounded-full"
          style={{ animation: "spin 28s linear infinite" }}
        >
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF1E41] shadow-[0_0_10px_#FF1E41]" />
        </div>
      </div>

      {/* ── Main terminal card ─────────────────────────────────── */}
      <div className="relative z-10 bg-[#141313] rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)] border border-white/8">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 bg-white/4 border-b border-white/6">
          <span className="w-3 h-3 rounded-full bg-[#FF1E41]" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-4 text-[11px] text-white/30 font-mono tracking-wider">
            solyio / neural-engine v2.0
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-400 font-mono font-bold">LIVE</span>
          </span>
        </div>

        {/* Task pipeline */}
        <div className="px-5 pt-5 pb-4 space-y-3 border-b border-white/6">
          {TASKS.map((task, i) => {
            const isPast    = i < activeTask
            const isCurrent = i === activeTask
            return (
              <div
                key={task.label}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  isCurrent ? "opacity-100" : isPast ? "opacity-45" : "opacity-20"
                }`}
              >
                {/* Status dot */}
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold
                    ${isPast    ? "bg-emerald-500/20 text-emerald-400" : ""}
                    ${isCurrent ? "bg-[#FF1E41]/20  text-[#FF1E41]"   : ""}
                    ${!isPast && !isCurrent ? "bg-white/5 text-white/20" : ""}
                  `}
                >
                  {isPast ? "✓" : isCurrent ? "◉" : "○"}
                </span>

                {/* Icon */}
                <span className="material-symbols-outlined text-[16px] text-white/30">
                  {task.icon}
                </span>

                {/* Label */}
                <span className="text-[12px] font-mono text-white flex-1">
                  {task.label}
                </span>

                {/* Running indicator */}
                {isCurrent && (
                  <span className="flex gap-0.5 shrink-0">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="w-1 h-3.5 bg-[#FF1E41] rounded-full"
                        style={{
                          animation: `bounce 0.8s ease-in-out ${d * 0.15}s infinite`,
                        }}
                      />
                    ))}
                  </span>
                )}
              </div>
            )
          })}

          {/* Efficiency bar */}
          <div className="pt-3 border-t border-white/5 mt-3">
            <div className="flex justify-between mb-1.5">
              <span className="text-[10px] font-mono text-white/30">Efficiency Index</span>
              <span className="text-[10px] font-mono text-[#FF1E41] font-bold">+112%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[80%] bg-gradient-to-r from-[#FF1E41] to-[#bb0029] rounded-full relative">
                <span className="absolute right-0 inset-y-0 w-5 bg-white/40 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat preview */}
        <div className="px-5 py-4 space-y-2.5">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-3">
            AI Agent · Live Session
          </p>
          {CHAT.slice(0, chatStep).map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "ai" && (
                <span className="w-5 h-5 rounded-full bg-[#FF1E41]/20 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[10px] text-[#FF1E41]">
                    smart_toy
                  </span>
                </span>
              )}
              <span
                className={`text-[11px] px-3 py-1.5 rounded-xl max-w-[75%] leading-relaxed ${
                  msg.from === "user"
                    ? "bg-[#FF1E41]/15 text-white/70"
                    : "bg-white/6 text-white/60"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
          {chatStep < CHAT.length && (
            <div className="flex gap-1 px-2 py-1">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-white/20"
                  style={{ animation: `bounce 1s ease-in-out ${d * 0.2}s infinite` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Floating badge — Mobile ─────────────────────────────── */}
      <div
        className="absolute -top-5 -right-8 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#e8bcbb]/20 flex items-center gap-2.5"
        style={{ animation: "floating 6s ease-in-out infinite" }}
      >
        <div className="w-8 h-8 rounded-xl bg-[#FF1E41]/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#FF1E41] text-lg">smartphone</span>
        </div>
        <div>
          <p className="text-[11px] font-black text-[#1c1b1b] leading-none">Mobile Apps</p>
          <p className="text-[10px] text-[#5e3f3e] mt-0.5">iOS · Android · Cross-platform</p>
        </div>
      </div>

      {/* ── Floating badge — Web ────────────────────────────────── */}
      <div
        className="absolute -bottom-5 -left-8 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#e8bcbb]/20 flex items-center gap-2.5"
        style={{ animation: "floating 7s ease-in-out 1.5s infinite" }}
      >
        <div className="w-8 h-8 rounded-xl bg-[#FF1E41]/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#FF1E41] text-lg">language</span>
        </div>
        <div>
          <p className="text-[11px] font-black text-[#1c1b1b] leading-none">Web Platforms</p>
          <p className="text-[10px] text-[#5e3f3e] mt-0.5">SaaS · Enterprise · Scale</p>
        </div>
      </div>

      {/* ── Floating badge — Revenue ────────────────────────────── */}
      <div
        className="absolute top-1/2 -right-12 -translate-y-1/2 z-20 bg-[#FF1E41] rounded-2xl px-4 py-3 shadow-xl shadow-[#FF1E41]/30 text-white"
        style={{ animation: "floating 8s ease-in-out 0.8s infinite" }}
      >
        <p className="text-xl font-headline font-black leading-none">+2x</p>
        <p className="text-[9px] font-bold uppercase tracking-widest opacity-80 mt-0.5">
          Revenue
        </p>
      </div>

      {/* ── Floating badge — AI ─────────────────────────────────── */}
      <div
        className="absolute -top-3 left-6 z-20 bg-[#1c1b1b] rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
        style={{ animation: "floating 9s ease-in-out 3s infinite" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-mono text-white/70">AI Engine · Online</span>
      </div>
    </div>
  )
}
