"use client"

import { useEffect, useState } from "react"

const SERVICES = [
  {
    label: "AI Automation",
    sub: "Chatbots · Agents · Workflows",
    icon: "smart_toy",
  },
  {
    label: "Web Development",
    sub: "SaaS · Platforms · E-commerce",
    icon: "code",
  },
  {
    label: "Mobile Apps",
    sub: "iOS · Android · Cross-platform",
    icon: "smartphone",
  },
  {
    label: "Cloud Infrastructure",
    sub: "AWS · GCP · DevOps · Scale",
    icon: "cloud",
  },
  {
    label: "Marketing Services",
    sub: "SEO · Paid Ads · Content · GEO",
    icon: "campaign",
  },
  {
    label: "Cyber Security",
    sub: "Pentests · Compliance · Zero-Trust",
    icon: "security",
  },
]

const DURATION = 3200 // ms per service

export function HeroHeadline() {
  const [index, setIndex] = useState(0)
  const [tick, setTick] = useState(0) // increment to reset CSS animations

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SERVICES.length)
      setTick((t) => t + 1)
    }, DURATION)
    return () => clearInterval(id)
  }, [])

  const service = SERVICES[index]

  return (
    <div>
      {/* ── Main headline ── */}
      <h1 className="font-headline font-bold tracking-tighter text-[#1c1b1b] leading-[0.85] mb-6">
        {/* Static line */}
        <span className="block text-5xl md:text-7xl lg:text-8xl mb-2">
          We Build Your
        </span>

        {/* Animated service name */}
        <span
          key={`label-${tick}`}
          className="block text-5xl md:text-7xl lg:text-8xl text-[#FF1E41] overflow-hidden"
          style={{
            animation: `serviceSlideIn ${DURATION * 0.25}ms cubic-bezier(0.16,1,0.3,1) forwards`,
            display: "inline-block",
            transformOrigin: "left center",
          }}
        >
          {service.label}
        </span>
      </h1>

      {/* ── Sub-label — synced fade ── */}
      <div
        key={`sub-${tick}`}
        className="flex items-center gap-2.5 mb-8"
        style={{
          animation: `serviceSubFade ${DURATION * 0.3}ms cubic-bezier(0.16,1,0.3,1) ${DURATION * 0.1}ms both`,
        }}
      >
        <span
          className="material-symbols-outlined text-[#FF1E41]"
          style={{ fontSize: "18px" }}
        >
          {service.icon}
        </span>
        <span className="text-[#5e3f3e] font-body text-base md:text-lg font-medium tracking-wide">
          {service.sub}
        </span>
      </div>

      {/* ── Progress bar + dots ── */}
      <div className="flex items-center gap-4 mb-10">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIndex(i); setTick((t) => t + 1) }}
              aria-label={SERVICES[i].label}
              className={`rounded-full transition-all duration-400 ${
                i === index
                  ? "w-6 h-2 bg-[#FF1E41]"
                  : "w-2 h-2 bg-[#e8bcbb] hover:bg-[#FF1E41]/40"
              }`}
            />
          ))}
        </div>

        {/* Progress track */}
        <div className="flex-1 max-w-[160px] h-[3px] bg-[#e8bcbb]/40 rounded-full overflow-hidden">
          <div
            key={`bar-${tick}`}
            className="h-full bg-[#FF1E41] rounded-full"
            style={{
              animation: `progressFill ${DURATION}ms linear forwards`,
            }}
          />
        </div>

        {/* Counter */}
        <span className="text-[11px] font-black tracking-widest text-[#5e3f3e]/40 font-headline tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
