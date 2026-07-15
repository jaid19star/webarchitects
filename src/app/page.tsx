import { WatercolorHero } from '@/components/hero/WatercolorHero'
import { Portfolio } from '@/components/portfolio/Portfolio'
import { Process } from '@/components/process/Process'
import { Testimonials } from '@/components/testimonials/Testimonials'
import { BookingWizard } from '@/components/booking/BookingWizard'
import { NavBar, Footer } from '@/components/layout'
import { CursorGlow } from '@/components/ui/CursorGlow'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen bg-canvas text-ink overflow-x-hidden">
        <CursorGlow />
        <WatercolorHero />
        <Portfolio />
        <Process />
        <Testimonials />
        <BookingWizard />
      </main>
      <Footer />
    </>
  )
}