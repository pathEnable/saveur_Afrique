import { Hero } from "@/components/Hero"
import { MenuPreview } from "@/components/MenuPreview"
import { AboutSection } from "@/components/AboutSection"
import { Testimonials } from "@/components/Testimonials"
import { DailyPromo } from "@/components/DailyPromo"

export default function Home() {
  return (
    <>
      <Hero />
      <DailyPromo />
      <AboutSection />
      <MenuPreview />
      <Testimonials />
    </>
  )
}
