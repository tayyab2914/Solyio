import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">Testimonials</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Founders building with AI <span className="text-[#1e3a5f]">properly</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="mb-6 h-10 w-10 text-[#1e3a5f]/20" />
            <blockquote className="mb-8 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              &ldquo;We didn&apos;t want something we&apos;d outgrow or be left managing solo. Solyio met our AI
              challenges — and offered a setup that works. It wasn&apos;t just a dev tool or just a consultant, it was
              both.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7ff] text-lg font-semibold text-[#1e3a5f]">
                JD
              </div>
              <div>
                <p className="font-semibold text-foreground">James Davidson</p>
                <p className="text-sm text-muted-foreground">Founder, RoboMarketer</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Join founders building AI-first products without hiring a full dev team or wasting months.
          </p>
        </div>
      </div>
    </section>
  )
}
