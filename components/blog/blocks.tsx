import Link from "next/link"
import type { Block } from "@/lib/blog"
import { slugifyHeading } from "@/lib/blog"
import { Inline } from "./inline"

const CALLOUT_STYLES = {
  info: { bar: "bg-[#006a66]", icon: "info", tint: "bg-[#006a66]/5 border-[#006a66]/15" },
  warning: { bar: "bg-[#c2410c]", icon: "warning", tint: "bg-[#c2410c]/5 border-[#c2410c]/15" },
  tip: { bar: "bg-[#FF1E41]", icon: "lightbulb", tint: "bg-[#FF1E41]/5 border-[#FF1E41]/15" },
  key: { bar: "bg-[#1c1b1b]", icon: "key", tint: "bg-[#1c1b1b]/[0.04] border-[#1c1b1b]/10" },
} as const

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={slugifyHeading(block.text)}
          className="font-headline scroll-mt-28 text-3xl md:text-4xl font-bold tracking-tight text-[#1c1b1b] mt-16 mb-6 first:mt-0"
        >
          <Inline text={block.text} />
        </h2>
      )

    case "h3":
      return (
        <h3
          id={slugifyHeading(block.text)}
          className="font-headline scroll-mt-28 text-xl md:text-2xl font-bold tracking-tight text-[#1c1b1b] mt-10 mb-4"
        >
          <Inline text={block.text} />
        </h3>
      )

    case "p":
      return (
        <p className="text-[17px] md:text-lg leading-[1.75] text-[#463736] mb-6">
          <Inline text={block.text} />
        </p>
      )

    case "ul":
      return (
        <ul className="mb-8 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[17px] leading-[1.7] text-[#463736]">
              <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF1E41]" />
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      )

    case "ol":
      return (
        <ol className="mb-8 space-y-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-[17px] leading-[1.7] text-[#463736]">
              <span className="font-headline mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF1E41]/10 text-xs font-bold text-[#bb0029]">
                {i + 1}
              </span>
              <span className="pt-0.5">
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ol>
      )

    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-[#FF1E41] pl-6 md:pl-8">
          <p className="font-headline text-xl md:text-2xl font-medium italic leading-snug tracking-tight text-[#1c1b1b]">
            <Inline text={block.text} />
          </p>
          {block.cite && (
            <cite className="mt-4 block text-xs font-bold uppercase not-italic tracking-[0.2em] text-[#5e3f3e]/60">
              {block.cite}
            </cite>
          )}
        </blockquote>
      )

    case "callout": {
      const s = CALLOUT_STYLES[block.variant]
      return (
        <aside className={`my-10 flex gap-4 rounded-2xl border p-6 md:p-7 ${s.tint}`}>
          <span
            className={`material-symbols-outlined h-fit shrink-0 rounded-full p-1.5 text-white ${s.bar}`}
            style={{ fontSize: "18px" }}
          >
            {s.icon}
          </span>
          <div className="min-w-0">
            {block.title && (
              <div className="font-headline mb-2 text-sm font-bold uppercase tracking-[0.15em] text-[#1c1b1b]">
                {block.title}
              </div>
            )}
            <p className="text-[16px] leading-relaxed text-[#463736]">
              <Inline text={block.text} />
            </p>
          </div>
        </aside>
      )
    }

    case "table":
      return (
        <figure className="my-10">
          <div className="overflow-x-auto rounded-2xl border border-[#d8c2c1]/40">
            <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
              <thead>
                <tr className="bg-[#f0eded]">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="font-headline border-b border-[#d8c2c1]/40 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#1c1b1b]"
                    >
                      <Inline text={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-[#d8c2c1]/25 last:border-0 odd:bg-white even:bg-[#fcf9f8]"
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-4 align-top leading-relaxed ${
                          ci === 0 ? "font-medium text-[#1c1b1b]" : "text-[#463736]"
                        }`}
                      >
                        <Inline text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-[#5e3f3e]/70">
              <Inline text={block.caption} />
            </figcaption>
          )}
        </figure>
      )

    case "stats":
      return (
        <div className="my-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {block.items.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#d8c2c1]/40 bg-[#fcf9f8] p-5 text-center">
              <div className="font-headline text-3xl font-black tracking-tight text-[#FF1E41]">{s.value}</div>
              <div className="font-headline mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1c1b1b]">
                {s.label}
              </div>
              {s.note && <div className="mt-1.5 text-xs leading-snug text-[#5e3f3e]/70">{s.note}</div>}
            </div>
          ))}
        </div>
      )

    case "steps":
      return (
        <div className="my-10 space-y-5">
          {block.items.map((step, i) => (
            <div key={i} className="flex gap-5 rounded-2xl border border-[#d8c2c1]/40 bg-white p-6">
              <div className="font-headline kinetic-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white">
                {i + 1}
              </div>
              <div className="min-w-0">
                <h4 className="font-headline mb-2 text-lg font-bold tracking-tight text-[#1c1b1b]">
                  <Inline text={step.title} />
                </h4>
                <p className="text-[16px] leading-relaxed text-[#463736]">
                  <Inline text={step.text} />
                </p>
              </div>
            </div>
          ))}
        </div>
      )

    case "code":
      return (
        <figure className="my-10 overflow-hidden rounded-2xl border border-[#1c1b1b]/10 bg-[#0f0e0e]">
          {block.filename && (
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="material-symbols-outlined text-white/40" style={{ fontSize: "14px" }}>
                description
              </span>
              <span className="font-mono text-xs text-white/50">{block.filename}</span>
            </div>
          )}
          <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
            <code className="font-mono text-white/85">{block.code}</code>
          </pre>
        </figure>
      )

    case "image":
      return (
        <figure className="my-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl border border-[#d8c2c1]/40"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-[#5e3f3e]/70">
              <Inline text={block.caption} />
            </figcaption>
          )}
        </figure>
      )

    case "faq":
      return (
        <div className="my-10 space-y-4">
          {block.items.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-[#d8c2c1]/40 bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="font-headline flex cursor-pointer items-center justify-between gap-4 text-lg font-bold tracking-tight text-[#1c1b1b]">
                <span>
                  <Inline text={f.q} />
                </span>
                <span
                  className="material-symbols-outlined shrink-0 text-[#FF1E41] transition-transform group-open:rotate-45"
                  style={{ fontSize: "20px" }}
                >
                  add
                </span>
              </summary>
              <p className="mt-4 text-[16px] leading-relaxed text-[#463736]">
                <Inline text={f.a} />
              </p>
            </details>
          ))}
        </div>
      )

    case "cta":
      return (
        <aside className="my-12 overflow-hidden rounded-3xl bg-[#0f0e0e] p-8 md:p-10">
          <h3 className="font-headline mb-3 text-2xl md:text-3xl font-bold tracking-tight text-white">
            <Inline text={block.title} />
          </h3>
          <p className="mb-7 max-w-2xl text-[16px] leading-relaxed text-white/60">
            <Inline text={block.text} />
          </p>
          <Link
            href={block.href}
            className="font-headline inline-flex items-center gap-2 rounded-full bg-[#FF1E41] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#bb0029] active:scale-95"
          >
            {block.buttonLabel}
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              arrow_forward
            </span>
          </Link>
        </aside>
      )

    case "divider":
      return <hr className="my-12 border-0 border-t border-[#d8c2c1]/40" />

    default:
      return null
  }
}
