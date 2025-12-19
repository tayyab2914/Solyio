"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e3a5f]">
            <span className="text-sm font-bold text-white">S</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Solyio</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/#ai-agents"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            AI Agents
          </Link>
          <Link
            href="/#your-mvp-journey"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Your MVP Journey
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" className="bg-[#1e3a5f] text-white hover:bg-[#2a4a73]" asChild>
            <Link href="/book">Book a call</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-4">
            <Link
              href="/#services"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#ai-agents"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Agents
            </Link>
            <Link
              href="/#your-mvp-journey"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Your MVP Journey
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button size="sm" className="bg-[#1e3a5f] text-white hover:bg-[#2a4a73]" asChild>
                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                  Book a call
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
