import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Contact Solyio | Book a Free Call",
  description:
    "Tell us what you need — web, mobile, cloud or AI. We'll get back to you within 2 hours and figure out the best way to build it together.",
  alternates: { canonical: "https://solyio.com/book" },
}

/* ─── HERO ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#bb0029] font-bold mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-[-0.04em] leading-[0.9] text-[#1c1b1b] mb-8">
            Let&apos;s Build{" "}
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #bb0029 0%, #e90035 100%)" }}
            >
              Something Great.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5e3f3e] max-w-2xl leading-relaxed">
            Tell us what you need — web platform, mobile app, cloud setup, or
            AI automation. We&apos;ll get back to you within 2 hours and map
            out exactly how to build it.
          </p>
        </div>

        <div className="md:col-span-4 hidden md:flex justify-end">
          <div className="w-32 h-32 rounded-full border border-[#e8bcbb]/30 flex items-center justify-center animate-pulse">
            <span className="material-symbols-outlined text-4xl text-[#bb0029]">
              hub
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── MAIN CONTENT ───────────────────────────────────────────────── */

function ContactSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Form */}
      <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] border border-[#e8bcbb]/10">
        <ContactForm />
      </div>

      {/* Right column */}
      <div className="lg:col-span-5 space-y-12">
        {/* Info grid */}
        <div className="bg-[#f0eded] rounded-2xl p-10 space-y-12">
          {/* Location */}
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[#bb0029]">
                location_on
              </span>
            </div>
            <div>
              <h4 className="text-[0.7rem] uppercase tracking-widest font-black text-[#1c1b1b] mb-2">
                Office Headquarters
              </h4>
              <p className="text-[#5e3f3e] leading-relaxed">
                42 Technology Plaza, Suite 900
                <br />
                Canary Wharf, London E14 5AB
                <br />
                United Kingdom
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[#bb0029]">
                alternate_email
              </span>
            </div>
            <div>
              <h4 className="text-[0.7rem] uppercase tracking-widest font-black text-[#1c1b1b] mb-2">
                Email Channels
              </h4>
              <p className="text-xl font-bold text-[#1c1b1b]">info@solyio.ai</p>
              <p className="text-sm text-[#5e3f3e]">
                Response within 2 hours on business days
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[#bb0029]">
                call
              </span>
            </div>
            <div>
              <h4 className="text-[0.7rem] uppercase tracking-widest font-black text-[#1c1b1b] mb-2">
                Global Direct
              </h4>
              <p className="text-xl font-bold text-[#1c1b1b]">+44 20 7946 0123</p>
              <p className="text-sm text-[#5e3f3e]">
                Mon – Fri, 08:00 – 18:00 GMT
              </p>
            </div>
          </div>
        </div>

        {/* Fast-track CTA card */}
        <div className="bg-[#1c1b1b] text-[#fcf9f8] rounded-2xl p-10 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-2xl font-headline font-bold mb-4">
              Prefer a Direct Call?
            </h3>
            <p className="text-[#e5e2e1] mb-8 text-sm leading-relaxed">
              Skip the form. Email us directly and we&apos;ll schedule a
              call to discuss your project — web, mobile, cloud or{" "}
              <span className="text-[#bb0029] font-bold">AI automation</span>{" "}
              — and figure out the best approach together.
            </p>
            <a
              href="mailto:info@solyio.ai"
              className="inline-flex items-center gap-2 border border-[#e5e2e1]/30 rounded-full px-6 py-3 hover:bg-white hover:text-[#1c1b1b] transition-all font-bold text-sm"
            >
              Schedule a Call
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
          {/* Glow */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[#bb0029]/20 blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

/* ─── MAP BANNER ─────────────────────────────────────────────────── */

function MapSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 mt-20">
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5vJ2XgDAEUpa3Z0jTCzLYiWF3xpGByOB_16ilLezIFAi2XSIgX1eOZSvJbaBgSVwUUE_r-0B1JCxh2hNyxxVVJJpiUln5Zh_M5n7LKNjEaPcPuUT-kJLdWwM36t3Z7DpoJalMDpw7a30D8QwH_Uy4UINDSbmQ_7An747hFNZJ-jprXL67ihEKLAqqDh-3AQwUDxdhSXYocVWf1N31PD6c0RuxxUQr5qwS7R615o2wtDS0JjySZDh0ydjsQ5apYoJcG21N7rNbrhDo"
          alt="Solyio HQ — London Canary Wharf"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#bb0029]/5 pointer-events-none" />
        <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
          <h5 className="font-headline font-bold text-[#bb0029] mb-1">Find Us</h5>
          <p className="text-xs text-[#5e3f3e]">
            Our engineering hub is located in the heart of London&apos;s tech district.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function BookPage() {
  return (
    <div className="font-body bg-[#fcf9f8] text-[#1c1b1b] selection:bg-[#bb0029]/10 selection:text-[#bb0029]">
      <SiteNavbar />
      <main className="pt-32 pb-20">
        <HeroSection />
        <ContactSection />
        <MapSection />
      </main>
      <SiteFooter />
    </div>
  )
}
