import Link from "next/link";
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
import { ArrowRight, Check, Building2, FileX, TrendingUp, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSCR Loans — Debt Service Coverage Ratio Financing | USHELOC",
  description:
    "Learn how DSCR loans qualify investment properties on rental income rather than personal income, and estimate a property's coverage ratio. Informational only.",
};

const features = [
  {
    icon: FileX,
    title: "Income-light documentation",
    description: "These programs focus on property cash flow rather than personal income.",
  },
  {
    icon: TrendingUp,
    title: "Investor focused",
    description: "Designed around the economics of a rental property.",
  },
  {
    icon: Layers,
    title: "Portfolio friendly",
    description: "Often used by investors financing more than one property.",
  },
  {
    icon: Building2,
    title: "Property types",
    description: "Single-family, small multi-unit, and certain rentals may be eligible.",
  },
];

const benefits = [
  "Qualification centers on property cash flow",
  "Often suited to self-employed investors",
  "Single-family and multi-unit properties may be eligible",
  "Certain short-term rentals may be considered",
  "Financing in an entity or LLC name may be available",
  "Structured around the property's performance",
];

const dscrTiers = [
  { label: "1.25+ DSCR", note: "Strong coverage" },
  { label: "1.0+ DSCR", note: "Income covers payment" },
  { label: "0.75+ DSCR", note: "May be workable with conditions" },
];

const faqs = [
  {
    question: "What is a DSCR loan?",
    answer:
      "A DSCR (Debt Service Coverage Ratio) loan is an investment-property loan that centers qualification on the property's rental income rather than the borrower's personal income. DSCR is calculated by dividing the property's income by its total debt service (the full housing payment).",
  },
  {
    question: "What DSCR ratio is typically needed?",
    answer:
      "Guidelines vary by program. Many lenders look for a ratio around 1.0, meaning the property's income covers the payment, and stronger ratios may access more favorable terms. Some programs consider lower ratios with conditions. All figures are subject to underwriting.",
  },
  {
    question: "Can projected rent be used for a purchase?",
    answer:
      "In many cases an appraiser's market-rent estimate can be used to calculate DSCR on a purchase, which can allow qualification before the property has tenants. Requirements vary by program.",
  },
  {
    question: "Are short-term rentals eligible?",
    answer:
      "Some programs consider short-term rental properties, often using specialized income approaches based on comparable data. Eligibility and documentation requirements vary.",
  },
];

export default function DSCRLoanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F3EC]">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Calculator */}
        <section className="relative overflow-hidden border-b border-[#DFE6E2] bg-[#F6F3EC] pt-16 pb-20">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div className="pt-6">
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#28564A]">
                  Investment Property Financing
                </span>
                <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-[#182C2A] md:text-6xl">
                  DSCR loans for <span className="italic text-[#28564A]">investors</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#52616B]">
                  DSCR programs qualify investment properties based on rental cash flow rather than
                  personal income — an approach built around how an investment property actually
                  performs.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-full bg-[#28564A] px-8 text-base font-semibold text-white hover:bg-[#1F483F]"
                  >
                    <Link href="/apply">
                      Explore My Options
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <p className="mt-5 max-w-md text-xs leading-relaxed text-[#8A7C6A]">
                  Informational only. Not an offer of credit or a commitment to lend. All financing
                  is subject to eligibility, underwriting, and verification.
                </p>
              </div>

              {/* Right - Calculator */}
              <div className="lg:-mt-2">
                <DSCRCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-[#182C2A] py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 max-w-2xl">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8FBBA9]">
                Built for investors
              </span>
              <h2 className="mt-3 font-serif text-3xl text-[#F6F3EC] md:text-4xl">
                Qualify on the property&apos;s performance
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#28564A]">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#F6F3EC]">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#B7C4BD]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#F6F3EC] py-24">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#28564A]">
                  For investors
                </span>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#182C2A] md:text-5xl">
                  Built around your portfolio
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#52616B]">
                  DSCR programs center on how a property performs, which can make them a natural fit
                  for investors whose personal tax picture does not reflect their full financial
                  strength.
                </p>
                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#28564A]">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-[#3E4A47]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#DFE6E2] bg-white p-8 shadow-[0_10px_40px_rgba(24,44,42,0.06)]">
                <div className="mb-2 text-sm text-[#52616B]">How DSCR works</div>
                <div className="mb-6 rounded-xl border border-[#DFE6E2] bg-[#EEF2ED] py-6 text-center">
                  <p className="mb-2 text-sm text-[#52616B]">DSCR Formula</p>
                  <div className="font-mono text-xl font-bold text-[#182C2A]">
                    Monthly Rent <span className="text-[#28564A]">÷</span> PITIA
                  </div>
                </div>
                <div className="space-y-3">
                  {dscrTiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="flex items-center justify-between rounded-lg border border-[#DFE6E2] bg-[#F6F3EC] p-3"
                    >
                      <span className="text-sm font-semibold text-[#182C2A]">{tier.label}</span>
                      <span className="text-xs text-[#52616B]">{tier.note}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs leading-relaxed text-[#8A7C6A]">
                  PITIA = Principal + Interest + Taxes + Insurance + Association. Tiers are
                  illustrative and vary by program and underwriting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-[#DFE6E2] bg-[#EEF2ED] py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#28564A]">
                  FAQ
                </span>
                <h2 className="mt-3 font-serif text-3xl text-[#182C2A] md:text-4xl">
                  DSCR loan questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="mb-2 rounded-xl border-[#DFE6E2] bg-white px-4"
                  >
                    <AccordionTrigger className="py-6 text-left text-lg font-medium text-[#182C2A] hover:text-[#28564A]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 leading-relaxed text-[#52616B]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#28564A] py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl leading-tight text-[#F6F3EC] md:text-5xl">
                Ready to explore your options?
              </h2>
              <p className="mt-6 text-lg text-[#CBD8D1]">
                Start an inquiry to learn what investment-property financing could look like for your
                goals. No obligation.
              </p>
              <Button
                asChild
                size="lg"
                className="group mt-8 h-14 rounded-full bg-[#F6F3EC] px-10 text-lg font-semibold text-[#28564A] shadow-xl hover:bg-white"
              >
                <Link href="/apply">
                  Explore My Options
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
