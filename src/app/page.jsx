// src/app/page.jsx
import Hero from "@/components/Hero"
import About from "@/components/About"
import Shop from "@/components/Shop"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Support from "@/components/Support"

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Shop />
      <Support />
      <Contact />
      <Footer />

    </main>
  )
}