import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DSCRCalculator } from "@/components/calculators/dscr-calculator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  Building2,
  FileX,
  TrendingUp,
  Zap,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSCR Loans - Debt Service Coverage Ratio Loans | US HELOC",
  description:
    "Get a DSCR loan for your investment property. Qualify based on rental income, not personal income. No W-2s, no tax returns. Fast funding in as few as 5 days.",
};

const features = [
  {
    icon: FileX,
    title: "No W-2s Required",
    description: "Qualify based on property income, not personal income",
  },
  {
    icon: TrendingUp,
    title: "Investor Focused",
    description: "Designed specifically for real estate investors",
  },
  {
    icon: Zap,
    title: "Fast Funding",
    description: "Close in as few as 5 days",
  },
  {
    icon: Building2,
    title: "Multiple Properties",
    description: "Finance your entire portfolio",
  },
];

const benefits = [
  "No personal income documentation required",
  "Qualify based on property cash flow",
  "Perfect for self-employed investors",
  "Finance single-family or multi-unit properties",
  "Short-term rentals and Airbnb eligible",
  "Close in your LLC or entity name",
];

const faqs = [
  {
    question: "What is a DSCR loan?",
    answer:
      "A DSCR (Debt Service Coverage Ratio) loan is a type of investment property loan that qualifies borrowers based on the property's rental income rather than personal income. The DSCR is calculated by dividing the property's net operating income by the total debt service (mortgage payment).",
  },
  {
    question: "What DSCR ratio do I need?",
    answer:
      "Most lenders require a minimum DSCR of 1.0, meaning the property's income covers the mortgage payment. Higher ratios (1.25+) may qualify for better rates. We can work with ratios as low as 0.75 for strong borrowers.",
  },
  {
    question: "Can I use projected rent for a new purchase?",
    answer:
      "Yes, for new purchases we can use an appraiser's market rent estimate to calculate DSCR. This allows you to qualify even before the property has tenants.",
  },
  {
    question: "Do you finance short-term rentals?",
    answer:
      "Yes, we finance Airbnb and other short-term rental properties. We use a specialized approach to estimate income for these properties based on comparable short-term rental data.",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function DSCRLoanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Calculator */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-white">
          {/* American Stars Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <StarIcon
                key={i}
                className="absolute text-[#002868]/5 w-8 h-8 animate-pulse"
                style={{
                  left: `${(i * 8) % 100}%`,
                  top: `${(i * 12) % 100}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
          
          {/* Blue stripe accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BF0A30] via-[#002868] to-[#BF0A30]" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="pt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002868] text-white mb-6">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Investment Property Loans</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002868] mb-6">
                  DSCR Loans for{" "}
                  <span className="text-[#BF0A30]">Investors</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-xl">
                  Qualify based on rental income, not personal income.{" "}
                  <strong>No W-2s, no tax returns.</strong> Built for serious real estate investors.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-2xl font-bold text-[#002868]">No W-2</p>
                    <p className="text-xs text-gray-500">Required</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
                    <p className="text-2xl font-bold text-[#BF0A30]">0.75+</p>
                    <p className="text-xs text-gray-500">Min DSCR</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-2xl font-bold text-[#002868]">5 days</p>
                    <p className="text-xs text-gray-500">To Fund</p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>Investor Preferred</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span>All 50 States</span>
                </div>
              </div>

              {/* Right - Calculator */}
              <div className="lg:-mt-4">
                <DSCRCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-[#002868] relative overflow-hidden">
          {/* Stars decoration */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <StarIcon
                key={i}
                className="absolute text-white/10 w-6 h-6"
                style={{
                  left: `${10 + (i * 12) % 80}%`,
                  top: `${20 + (i * 15) % 60}%`,
                }}
              />
            ))}
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built for Real Estate Investors
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Skip the paperwork. Qualify based on your property{"'"}s potential, not your tax returns.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#BF0A30] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-bold text-[#BF0A30] mb-4 uppercase tracking-wider">
                  For Investors
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#002868] mb-6">
                  Built for your portfolio
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Traditional lenders make it difficult for investors to scale.
                  DSCR loans remove the barriers by qualifying you on property
                  performance, not personal income.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-[#BF0A30] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                {/* DSCR Explanation Card */}
                <div className="rounded-2xl border-2 border-[#002868]/20 bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl">
                  <div className="text-sm text-gray-500 mb-2">How DSCR Works</div>
                  <div className="text-center py-6 bg-white rounded-xl border border-gray-200 mb-6">
                    <p className="text-sm text-gray-500 mb-2">DSCR Formula</p>
                    <div className="text-2xl font-mono font-bold text-[#002868]">
                      <span className="text-[#BF0A30]">Monthly Rent</span> ÷ <span className="text-[#002868]">PITIA</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm font-medium text-green-700">1.25+ DSCR</span>
                      <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Best Rates</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm font-medium text-blue-700">1.0+ DSCR</span>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Qualifies</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm font-medium text-yellow-700">0.75+ DSCR</span>
                      <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">May Qualify</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    PITIA = Principal + Interest + Taxes + Insurance + Association
                  </p>
                </div>
                {/* Decorative stars */}
                <StarIcon className="absolute -top-4 -right-4 w-8 h-8 text-[#BF0A30]" />
                <StarIcon className="absolute -bottom-4 -left-4 w-6 h-6 text-[#002868]" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-bold text-[#BF0A30] mb-4 uppercase tracking-wider">
                  FAQ
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002868]">
                  DSCR Loan Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-gray-200 bg-white mb-2 rounded-xl px-4"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-[#BF0A30] py-6 text-[#002868]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#BF0A30] relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <StarIcon
                key={i}
                className="absolute text-white/10 w-8 h-8"
                style={{
                  left: `${(i * 10) % 100}%`,
                  top: `${(i * 20) % 100}%`,
                }}
              />
            ))}
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Ready to grow your portfolio?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Check your DSCR loan rate in minutes. No impact to your credit score.
              </p>
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg group bg-white text-[#BF0A30] hover:bg-gray-100 font-bold shadow-xl"
              >
                Check Your DSCR Rate
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
