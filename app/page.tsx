import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { HeadScripts } from "@/app/head-scripts"

export default function Home() {
  return (
    <>
      <HeadScripts />
      <main className="min-h-screen">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <AboutSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  )
}
