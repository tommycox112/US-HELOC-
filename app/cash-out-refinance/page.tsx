import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CashoutCalculator } from "@/components/calculators/cashout-calculator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check, RefreshCw, Zap, Clock, Percent, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash-Out Refinance - Get Cash 6x Faster | US HELOC",
  description:
    "Get cash 6x faster with US HELOC vs. a traditional refinance. Tap your home equity, consolidate debts, and refinance your mortgage 100% online.",
};

const stats = [
  { value: "6x", label: "Faster than traditional" },
  { value: "$500K", label: "Maximum cash out" },
  { value: "5 days", label: "Average funding" },
  { value: "100%", label: "Online process" },
];

const benefits = [
  "Replace your current mortgage with better terms",
  "Access your equity in one lump sum",
  "Consolidate high-interest debt",
  "Fund major home improvements",
  "No prepayment penalties",
  "Competitive fixed rates",
];

const faqs = [
  {
    question: "What is a cash-out refinance?",
    answer:
      "A cash-out refinance replaces your existing mortgage with a new, larger loan. The difference between your old loan balance and the new loan is given to you as cash, which you can use for any purpose.",
  },
  {
    question: "How is this different from a HELOC?",
    answer:
      "A cash-out refinance gives you a lump sum and replaces your existing mortgage. A HELOC is a separate line of credit in addition to your mortgage. Cash-out refis typically have fixed rates while HELOCs often have variable rates.",
  },
  {
    question: "How much cash can I get?",
    answer:
      "You can typically cash out up to 80% of your home value minus what you owe. The exact amount depends on your equity, credit score, and other factors.",
  },
  {
    question: "How fast is the process?",
    answer:
      "Our streamlined process takes an average of 5 days from application to funding - that's 6x faster than traditional lenders who often take 30-45 days.",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function CashOutRefinancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Calculator */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-white">
          {/* American pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <StarIcon
                key={i}
                className="absolute text-[#BF0A30]/5 w-8 h-8 animate-pulse"
                style={{
                  left: `${(i * 8) % 100}%`,
                  top: `${(i * 12) % 100}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
          
          {/* Red stripe accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868]" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="pt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF0A30] text-white mb-6">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm font-medium">Cash-Out Refinance</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002868] mb-6">
                  Get cash{" "}
                  <span className="text-[#BF0A30]">6x faster</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-xl">
                  Replace your mortgage and access your equity in one transaction.
                  Average funding in <strong>5 days</strong> vs. 30-45 days with traditional lenders.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center p-3 bg-gradient-to-br from-blue-50 to-red-50 rounded-xl border border-gray-200">
                      <p className="text-xl font-bold text-[#002868]">{stat.value}</p>
                      <p className="text-[10px] text-gray-500 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>4.9/5 Trustpilot</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span>NMLS Licensed</span>
                </div>
              </div>

              {/* Right - Calculator */}
              <div className="lg:-mt-4">
                <CashoutCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-20 bg-[#002868] relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <StarIcon
                key={i}
                className="absolute text-white/10 w-6 h-6"
                style={{
                  left: `${10 + (i * 15) % 80}%`,
                  top: `${20 + (i * 20) % 60}%`,
                }}
              />
            ))}
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Cash-Out With Us?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                America{"'"}s fastest cash-out refinance - get funded in days, not months
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Lightning Fast", desc: "6x faster than traditional lenders" },
                { icon: Clock, title: "100% Online", desc: "Complete everything from home" },
                { icon: Percent, title: "Great Rates", desc: "Competitive fixed rates" },
                { icon: RefreshCw, title: "Simple Process", desc: "One loan, one payment" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#BF0A30] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.desc}</p>
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
                  Why Cash-Out Refi
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#002868] mb-6">
                  One loan, endless possibilities
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Consolidate your mortgage and access your equity with a single
                  loan. Use the funds for debt consolidation, home improvements,
                  or any major expense.
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
                {/* Comparison Card */}
                <div className="rounded-2xl border-2 border-[#002868]/20 overflow-hidden shadow-xl">
                  <div className="bg-[#002868] text-white p-4 text-center">
                    <h3 className="font-bold text-lg">US HELOC vs Traditional Lenders</h3>
                  </div>
                  <div className="bg-white p-6">
                    <div className="grid grid-cols-3 gap-4 text-center mb-4 pb-4 border-b">
                      <div />
                      <div className="font-bold text-[#BF0A30]">US HELOC</div>
                      <div className="font-bold text-gray-400">Traditional</div>
                    </div>
                    {[
                      { label: "Time to Fund", us: "5 days", trad: "30-45 days" },
                      { label: "Application", us: "5 min online", trad: "In-person" },
                      { label: "Documentation", us: "Minimal", trad: "Extensive" },
                      { label: "Hidden Fees", us: "None", trad: "Common" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-3 gap-4 text-center py-3 border-b border-gray-100 last:border-0">
                        <div className="text-sm text-gray-600 text-left">{row.label}</div>
                        <div className="text-sm font-semibold text-[#002868]">{row.us}</div>
                        <div className="text-sm text-gray-400">{row.trad}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative */}
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
                  Cash-Out Refi Questions
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
                Check Your Cash-Out Rate
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
