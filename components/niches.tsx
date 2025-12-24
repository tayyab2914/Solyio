import {
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Building2,
  Utensils,
  Briefcase,
  Home,
  Plane,
  Dumbbell,
  Scale,
  Car,
  Palette,
} from "lucide-react"

export function Niches() {
  const niches = [
    { icon: ShoppingCart, name: "E-commerce & Retail", examples: "Inventory, support, recommendations" },
    { icon: Stethoscope, name: "Healthcare & Wellness", examples: "Scheduling, patient intake, follow-ups" },
    { icon: GraduationCap, name: "Education & E-learning", examples: "Tutoring, grading, enrollment" },
    { icon: Building2, name: "Real Estate", examples: "Lead qualification, property matching" },
    { icon: Utensils, name: "Food & Hospitality", examples: "Reservations, orders, feedback" },
    { icon: Briefcase, name: "Professional Services", examples: "Client intake, scheduling, billing" },
    { icon: Home, name: "Home Services", examples: "Booking, dispatch, customer support" },
    { icon: Plane, name: "Travel & Tourism", examples: "Itinerary planning, bookings, support" },
    { icon: Dumbbell, name: "Fitness & Sports", examples: "Memberships, scheduling, coaching" },
    { icon: Scale, name: "Legal & Compliance", examples: "Document review, intake, research" },
    { icon: Car, name: "Automotive", examples: "Appointments, inventory, customer care" },
    { icon: Palette, name: "Creative & Marketing", examples: "Content creation, campaigns, analytics" },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Industries We Serve</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            AI solutions for <span className="text-[#1e3a5f]">every industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you&apos;re in tech, healthcare, or hospitality — we build AI-powered MVPs tailored to your niche.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {niches.map((niche) => (
            <div
              key={niche.name}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-[#1e3a5f]/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f7ff]">
                <niche.icon className="h-5 w-5 text-[#1e3a5f]" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{niche.name}</h3>
                <p className="text-xs text-muted-foreground">{niche.examples}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see your industry?{" "}
            <a
              href="#contact"
              className="font-semibold text-[#1e3a5f] underline underline-offset-4 hover:text-[#2a4a73]"
            >
              Let&apos;s talk
            </a>{" "}
            — we love unique challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
