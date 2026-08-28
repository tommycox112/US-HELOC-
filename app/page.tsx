import type { Metadata } from "next"
import { SiteHeader } from "@/components/business/site-header"
import { Hero } from "@/components/business/hero"
import { Benefits } from "@/components/business/benefits"
import { BusinessUses } from "@/components/business/business-uses"
import { HowItWorks } from "@/components/business/how-it-works"
import { EquityCalculator } from "@/components/business/equity-calculator"
import { Eligibility } from "@/components/business/eligibility"
import { FAQs } from "@/components/business/faqs"
import { FinalCTA } from "@/components/business/final-cta"
import { SiteFooter } from "@/components/business/site-footer"
import { MobileCTA } from "@/components/business/mobile-cta"

export const metadata: Metadata = {
  title: "Business-Purpose HELOC Options | USHELOC",
  description:
    "Explore home equity financing for small business needs, including equipment, inventory, payroll, and expansion. Learn about business-purpose HELOC options.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F3EC] font-sans">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <BusinessUses />
        <HowItWorks />
        <EquityCalculator />
        <Eligibility />
        <FAQs />
        <FinalCTA />
      </main>
      <SiteFooter />
      <MobileCTA />
    </div>
  )
}
