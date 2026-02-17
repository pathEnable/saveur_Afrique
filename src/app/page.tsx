import { Hero } from "@/components/Hero"
import { MenuPreview } from "@/components/MenuPreview"
import { AboutSection } from "@/components/AboutSection"
import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MenuPreview />
      <Testimonials />
    </>
  )
}
