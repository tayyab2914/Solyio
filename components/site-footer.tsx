import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full pt-28 pb-14 bg-[#f0eded] border-t border-[#e8bcbb]/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 px-6 md:px-10 lg:px-12 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <div className="mb-8 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Solyio" className="h-20 w-auto mr-3" />
          </div>
          <p className="font-body text-base text-[#5e3f3e] leading-relaxed mb-10 opacity-80">
AI-powered digital foundations for effortless business growth — web, mobile, cloud, and automation built to scale.          </p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-[#1c1b1b] font-headline font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">
            Platform
          </h4>
          <ul className="space-y-5 font-headline text-sm tracking-tight">
            {[
              { label: "Services",   href: "/services" },
              { label: "Industries", href: "/industries" },
              { label: "Portfolio",  href: "/portfolio" },
              { label: "Contact",    href: "/book" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-[#5e3f3e] hover:text-[#bb0029] transition-colors opacity-70 hover:opacity-100">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[#1c1b1b] font-headline font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">
            Company
          </h4>
          <ul className="space-y-5 font-headline text-sm tracking-tight">
            {[
              { label: "About Solyio", href: "/about" },
              { label: "Careers",      href: "/careers" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-[#5e3f3e] hover:text-[#bb0029] transition-colors opacity-70 hover:opacity-100">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Status + copyright */}
        <div className="flex flex-col justify-between items-start lg:items-end">
          <div className="bg-white/50 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-[#e8bcbb]/30 text-left shadow-lg w-full lg:w-auto">
            <div className="text-[10px] font-black text-[#bb0029] mb-3 uppercase tracking-[0.3em]">
              System Status
            </div>
            <div className="text-[#1c1b1b] font-headline font-bold flex items-center gap-4 text-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
100% Operational            </div>
          </div>
          <div className="font-headline text-[11px] tracking-[0.1em] text-[#5e3f3e] mt-8 lg:mt-0 opacity-60 uppercase font-bold">
            © 2026 Solyio. Engineered with Kinetic Intelligence.
          </div>
        </div>
      </div>
    </footer>
  )
}
