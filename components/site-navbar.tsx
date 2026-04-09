"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"

const SERVICE_LINKS = [
  { label: "AI Automation", href: "/services/ai-automation", icon: "smart_toy" },
  { label: "Web Development", href: "/services/web-development", icon: "code" },
  { label: "Mobile Development", href: "/services/mobile-development", icon: "smartphone" },
  { label: "Marketing Services", href: "/services/marketing-services", icon: "campaign" },
  { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure", icon: "cloud" },
  { label: "Cyber Security", href: "/services/cyber-security", icon: "security" },
]

const NAV_LINKS = [
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
]

interface SiteNavbarProps {
  variant?: "light" | "dark"
}

export function SiteNavbar({ variant = "light" }: SiteNavbarProps) {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const dark = variant === "dark"

  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/")

  const isActive = (href: string) => {
    if (href === "/industries") return pathname === "/industries"
    if (href === "/portfolio")
      return pathname === "/portfolio" || pathname.startsWith("/portfolio/")
    if (href === "/about") return pathname === "/about"
    return false
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 100)
  }

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    setServicesOpen(true)
  }

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const linkBase = dark
    ? "text-white/60 hover:text-white"
    : "text-[#1c1b1b] opacity-70 hover:opacity-100 hover:text-[#bb0029]"

  const linkActive = dark
    ? "text-[#FF1E41] font-bold border-b-2 border-[#FF1E41] pb-0.5"
    : "text-[#bb0029] font-bold border-b-2 border-[#bb0029] pb-0.5"

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl border-none transition-colors ${
          dark ? "bg-[#0f0e0e]/80" : "bg-[#fcf9f8]/80"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-5 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Solyio"
              className={`h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105 duration-300 ${
                dark ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {/* Services dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`font-headline text-sm tracking-widest uppercase transition-all duration-300 flex items-center gap-1 ${
                  isServicesActive ? linkActive : linkBase
                }`}
              >
                Services
                <span
                  className={`material-symbols-outlined text-base transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  style={{ fontSize: "16px" }}
                >
                  expand_more
                </span>
              </button>

              {/* Dropdown panel */}
              {servicesOpen && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 rounded-2xl shadow-2xl border overflow-hidden z-50 ${
                    dark
                      ? "bg-[#1c1b1b] border-white/10"
                      : "bg-white border-[#f0eded]"
                  }`}
                >
                  {/* View all link */}
                  <Link
                    href="/services"
                    className={`flex items-center justify-between px-5 py-3 text-xs font-headline tracking-widest uppercase border-b transition-colors ${
                      dark
                        ? "text-white/40 border-white/10 hover:text-white hover:bg-white/5"
                        : "text-[#5e3f3e]/60 border-[#f0eded] hover:text-[#bb0029] hover:bg-[#fcf9f8]"
                    }`}
                  >
                    All Services
                    <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                      arrow_forward
                    </span>
                  </Link>

                  {SERVICE_LINKS.map(({ label, href, icon }) => {
                    const active = pathname === href
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-3 px-5 py-3.5 transition-all duration-200 group ${
                          active
                            ? dark
                              ? "bg-[#FF1E41]/10 text-[#FF1E41]"
                              : "bg-[#FF1E41]/5 text-[#bb0029]"
                            : dark
                            ? "text-white/70 hover:bg-white/5 hover:text-white"
                            : "text-[#1c1b1b] hover:bg-[#fcf9f8] hover:text-[#bb0029]"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined transition-colors ${
                            active
                              ? "text-[#FF1E41]"
                              : dark
                              ? "text-white/30 group-hover:text-white/70"
                              : "text-[#5e3f3e]/40 group-hover:text-[#FF1E41]"
                          }`}
                          style={{ fontSize: "18px" }}
                        >
                          {icon}
                        </span>
                        <span className="font-body text-sm font-medium">{label}</span>
                        {active && (
                          <span
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF1E41]"
                          />
                        )}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Other nav links */}
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href)
              return (
                <Link
                  key={label}
                  href={href}
                  className={`font-headline text-sm tracking-widest uppercase transition-all duration-300 ${
                    active ? linkActive : linkBase
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Right: CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="hidden md:block bg-[#FF1E41] text-white font-headline text-sm font-bold tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#bb0029] active:scale-95 transition-all duration-300"
            >
              Get Started
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
                dark ? "text-white hover:bg-white/10" : "text-[#1c1b1b] hover:bg-black/5"
              }`}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  dark ? "bg-white" : "bg-[#1c1b1b]"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  dark ? "bg-white" : "bg-[#1c1b1b]"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  dark ? "bg-white" : "bg-[#1c1b1b]"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            dark ? "bg-black/60" : "bg-black/40"
          } ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] shadow-2xl transition-transform duration-300 flex flex-col ${
            dark ? "bg-[#0f0e0e]" : "bg-[#fcf9f8]"
          } ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer header */}
          <div className={`flex justify-between items-center px-6 py-5 border-b ${dark ? "border-white/10" : "border-[#f0eded]"}`}>
            <span className={`font-headline text-sm tracking-widest uppercase ${dark ? "text-white/40" : "text-[#5e3f3e]/50"}`}>
              Menu
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className={`p-1 rounded-lg ${dark ? "text-white/60 hover:text-white" : "text-[#1c1b1b]/60 hover:text-[#1c1b1b]"}`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
            </button>
          </div>

          {/* Drawer links */}
          <div className="flex-1 overflow-y-auto py-4">
            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-6 py-4 font-headline text-sm tracking-widest uppercase transition-colors ${
                  isServicesActive
                    ? "text-[#FF1E41]"
                    : dark
                    ? "text-white/70"
                    : "text-[#1c1b1b]"
                }`}
              >
                Services
                <span
                  className={`material-symbols-outlined transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  style={{ fontSize: "18px" }}
                >
                  expand_more
                </span>
              </button>

              {mobileServicesOpen && (
                <div className={`border-y mx-6 rounded-xl overflow-hidden mb-2 ${dark ? "border-white/10 bg-white/5" : "border-[#f0eded] bg-white"}`}>
                  <Link
                    href="/services"
                    className={`flex items-center gap-2 px-4 py-3 text-xs font-headline tracking-widest uppercase border-b transition-colors ${
                      dark
                        ? "text-white/40 border-white/10 hover:text-white"
                        : "text-[#5e3f3e]/50 border-[#f0eded] hover:text-[#bb0029]"
                    }`}
                  >
                    All Services →
                  </Link>
                  {SERVICE_LINKS.map(({ label, href, icon }) => {
                    const active = pathname === href
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`flex items-center gap-3 px-4 py-3.5 transition-colors ${
                          active
                            ? "text-[#FF1E41] bg-[#FF1E41]/5"
                            : dark
                            ? "text-white/70 hover:text-white"
                            : "text-[#1c1b1b] hover:text-[#bb0029]"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[#FF1E41]/60" style={{ fontSize: "16px" }}>{icon}</span>
                        <span className="font-body text-sm">{label}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Other links */}
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href)
              return (
                <Link
                  key={label}
                  href={href}
                  className={`block px-6 py-4 font-headline text-sm tracking-widest uppercase transition-colors ${
                    active
                      ? "text-[#FF1E41]"
                      : dark
                      ? "text-white/70 hover:text-white"
                      : "text-[#1c1b1b] hover:text-[#bb0029]"
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className={`px-6 py-6 border-t ${dark ? "border-white/10" : "border-[#f0eded]"}`}>
            <Link
              href="/book"
              className="block w-full text-center bg-[#FF1E41] text-white font-headline text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#bb0029] active:scale-95 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
