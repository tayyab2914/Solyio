"use client"

import { useEffect, useState } from "react"
import type { TocEntry } from "@/lib/blog"

/**
 * Sticky table of contents with scroll spy. Deep-linkable headings also give
 * AI search engines clean anchors to cite a specific answer from.
 */
export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string>(entries[0]?.id ?? "")

  useEffect(() => {
    if (!entries.length) return

    const headings = entries
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => el !== null)

    if (!headings.length) return

    const observer = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((r) => r.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
          return
        }

        // Nothing in the band — fall back to the last heading scrolled past.
        const passed = headings.filter((h) => h.getBoundingClientRect().top < 120)
        if (passed.length) setActiveId(passed[passed.length - 1].id)
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 },
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [entries])

  if (entries.length < 3) return null

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="font-headline mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#5e3f3e]/50">
        On this page
      </div>
      <ul className="space-y-1 border-l border-[#d8c2c1]/40">
        {entries.map((e) => {
          const active = e.id === activeId
          return (
            <li key={e.id}>
              <a
                href={`#${e.id}`}
                aria-current={active ? "location" : undefined}
                className={`-ml-px block border-l-2 py-1.5 leading-snug transition-colors ${
                  e.level === 3 ? "pl-7 text-[13px]" : "pl-4"
                } ${
                  active
                    ? "border-[#FF1E41] font-semibold text-[#bb0029]"
                    : "border-transparent text-[#5e3f3e]/70 hover:border-[#d8c2c1] hover:text-[#1c1b1b]"
                }`}
              >
                {e.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
