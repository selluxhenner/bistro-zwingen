import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Menu from "@/components/menu"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Menu />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
