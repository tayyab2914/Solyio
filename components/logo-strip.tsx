export function LogoStrip() {
  const logos = [
    { name: "RoboMarketer", initial: "R" },
    { name: "ExpertAIQ", initial: "E" },
    { name: "CashAds", initial: "C" },
    { name: "Pricesmurf", initial: "P" },
    { name: "Upgrr", initial: "U" },
    { name: "DataFlow", initial: "D" },
  ]

  return (
    <section className="border-y border-border/50 bg-muted/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Trusted by innovative startups building with AI
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-muted">
                <span className="text-sm font-bold">{logo.initial}</span>
              </div>
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
