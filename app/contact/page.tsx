import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"

export const metadata = {
  title: "Contact Us - Solyio",
  description: "Get in touch with Solyio. We're here to help with your AI-powered MVP questions.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
