import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HELOCCalculator } from "@/components/calculators/heloc-calculator";
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
  Clock,
  DollarSign,
  Home,
  Shield,
  Zap,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Equity Line of Credit (HELOC) - Apply Online | US HELOC",
  description:
    "Apply for a HELOC online in minutes. Get pre-qualified quickly with funding in as few as 5 days. Borrow up to $750,000 with competitive rates.",
};

const features = [
  {
    icon: Zap,
    title: "5-Day Funding",
    description: "Get your funds faster than any traditional lender",
  },
  {
    icon: DollarSign,
    title: "Up to $750K",
    description: "Access significant equity for major expenses",
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprises",
  },
  {
    icon: Clock,
    title: "100% Online",
    description: "Complete the entire process from home",
  },
];

const benefits = [
  "Borrow only what you need, when you need it",
  "Pay interest only on the amount you draw",
  "Redraw funds as you repay your balance",
  "No prepayment penalties",
  "Fixed and variable rate options",
  "Tax-deductible interest for home improvements",
];

const faqs = [
  {
    question: "What is a HELOC?",
    answer:
      "A Home Equity Line of Credit (HELOC) is a revolving line of credit secured by your home. It allows you to borrow against your home equity as needed, similar to a credit card, but with much lower interest rates.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "You can typically borrow up to 80-85% of your home value minus what you owe. With US HELOC, you can access lines from $15,000 to $750,000 depending on your equity and creditworthiness.",
  },
  {
    question: "How fast can I get funded?",
    answer:
      "Most customers receive funding in as few as 5 days. Our streamlined online process eliminates the delays typically associated with traditional lenders.",
  },
  {
    question: "Is a HELOC tax deductible?",
    answer:
      "Interest on a HELOC may be tax-deductible if the funds are used for home improvements. Consult with a tax advisor for your specific situation.",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function HELOCPage() {
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
          
          {/* Red stripe accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BF0A30] via-[#002868] to-[#BF0A30]" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="pt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002868] text-white mb-6">
                  <Home className="w-4 h-4" />
                  <span className="text-sm font-medium">Home Equity Line of Credit</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002868] mb-6">
                  Flexible access to your{" "}
                  <span className="text-[#BF0A30]">home equity</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-xl">
                  Draw funds as you need them, only pay interest on what you use.
                  Get pre-qualified quickly with funding in as few as <strong>5 days</strong>.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-2xl font-bold text-[#002868]">Fast</p>
                    <p className="text-xs text-gray-500">Pre-qualification</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
                    <p className="text-2xl font-bold text-[#BF0A30]">$750K</p>
                    <p className="text-xs text-gray-500">Max Line</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-2xl font-bold text-[#002868]">7.99%</p>
                    <p className="text-xs text-gray-500">APR from</p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>4.9/5 Trustpilot</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span>50,000+ Customers</span>
                </div>
              </div>

              {/* Right - Calculator */}
              <div className="lg:-mt-4">
                <HELOCCalculator />
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
                Why Choose US HELOC?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                America{"'"}s fastest and easiest way to access your home equity
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
                  Benefits
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#002868] mb-6">
                  Why choose a HELOC?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  A HELOC gives you the flexibility to access your equity on
                  your terms. Unlike a traditional loan, you only pay interest
                  on what you actually use.
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
                <div className="rounded-2xl border-2 border-[#002868]/20 bg-gradient-to-br from-blue-50 to-red-50 p-8 shadow-xl">
                  <div className="text-sm text-gray-500 mb-2">Example HELOC</div>
                  <div className="text-5xl font-bold text-[#002868] mb-6">$150,000</div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Credit Line</span>
                      <span className="font-semibold text-[#002868]">$150,000</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Amount Drawn</span>
                      <span className="font-semibold text-[#002868]">$50,000</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">APR</span>
                      <span className="font-semibold text-[#002868]">8.49%</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-600">Monthly Payment</span>
                      <span className="font-bold text-[#BF0A30] text-xl">$354/mo*</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    *Interest-only payment on drawn amount
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
                  HELOC Questions
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
                Ready to get started?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Check your rate in minutes. No impact to your credit score.
              </p>
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg group bg-white text-[#BF0A30] hover:bg-gray-100 font-bold shadow-xl"
              >
                Check Your HELOC Rate
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
