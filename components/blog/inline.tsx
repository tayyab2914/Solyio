import Link from "next/link"
import type { ReactNode } from "react"

/**
 * Minimal inline formatter for post copy: **bold**, *italic*, `code`,
 * and [label](/href). Kept deliberately small — posts are typed data, not
 * user input, so there is nothing to sanitise beyond React's own escaping.
 */
const PATTERN = /(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g

export function Inline({ text }: { text: string }): ReactNode {
  const parts = text.split(PATTERN).filter((p) => p !== "")

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-[#1c1b1b]">
              {part.slice(2, -2)}
            </strong>
          )
        }

        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded-md bg-[#1c1b1b]/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-[#bb0029]"
            >
              {part.slice(1, -1)}
            </code>
          )
        }

        const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part)
        if (link) {
          const [, label, href] = link
          const external = href.startsWith("http")
          if (external) {
            return (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#bb0029] underline decoration-[#FF1E41]/30 underline-offset-4 transition-colors hover:decoration-[#FF1E41]"
              >
                {label}
              </a>
            )
          }
          return (
            <Link
              key={i}
              href={href}
              className="font-medium text-[#bb0029] underline decoration-[#FF1E41]/30 underline-offset-4 transition-colors hover:decoration-[#FF1E41]"
            >
              {label}
            </Link>
          )
        }

        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return (
            <em key={i} className="italic">
              {part.slice(1, -1)}
            </em>
          )
        }

        return <span key={i}>{part}</span>
      })}
    </>
  )
}
