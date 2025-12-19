import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="bg-[#1e3a5f] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to build your AI-powered MVP?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Chat to one of our experts to discuss how we can take your idea to production — for good.
          </p>
          <Button size="lg" className="bg-white text-[#1e3a5f] hover:bg-white/90">
            Book a call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
