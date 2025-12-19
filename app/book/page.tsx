import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingPageContent } from "@/components/booking-page-content"

export const metadata = {
  title: "Book a Discovery Call - Solyio",
  description: "Schedule a free 30-minute discovery call to discuss your MVP idea with our AI experts.",
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BookingPageContent />
      <Footer />
    </main>
  )
}
