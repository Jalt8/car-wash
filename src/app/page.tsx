import Hero from '@/components/Hero'
import AboutCarspa from '@/components/AboutCarspa'
import FeatureHighlights from '@/components/FeatureHighlights'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <AboutCarspa />
      <Services />
      <Testimonials />
      <CTASection />
    </>
  )
}