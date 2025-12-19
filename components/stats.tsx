export function Stats() {
  const stats = [
    {
      value: "10",
      unit: "days",
      label: "From idea to launch",
      description: "Average delivery time",
    },
    {
      value: "50",
      suffix: "%",
      label: "Cost reduction",
      description: "Compared to traditional dev",
    },
    {
      value: "95",
      suffix: "%",
      label: "Client satisfaction",
      description: "Would recommend us",
    },
  ]

  return (
    <section className="border-y border-border/50 bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Solyio in numbers</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-[#1e3a5f] md:text-6xl">{stat.value}</span>
                <span className="text-2xl font-semibold text-[#1e3a5f] md:text-3xl">{stat.unit || stat.suffix}</span>
              </div>
              <p className="text-lg font-medium text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
