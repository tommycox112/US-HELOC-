import Link from "next/link";
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
import { ArrowRight, Check, Layers, RefreshCw, ShieldCheck, SlidersHorizontal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Equity Line of Credit (HELOC) | USHELOC",
  description:
    "Learn how a home equity line of credit works, how it differs from a lump-sum loan, and estimate the equity you may be able to access. Informational only.",
};

const features = [
  {
    icon: SlidersHorizontal,
    title: "Draw as needed",
    description: "Access funds over time instead of taking a single lump sum.",
  },
  {
    icon: Layers,
    title: "Interest on what you use",
    description: "You generally pay interest only on the amount you actually draw.",
  },
  {
    icon: RefreshCw,
    title: "Revolving access",
    description: "As you repay principal, that availability can typically be reused.",
  },
  {
    icon: ShieldCheck,
    title: "Secured by your home",
    description: "A HELOC is secured by your property, which affects rate and terms.",
  },
];

const benefits = [
  "Borrow only what you need, when you need it",
  "Pay interest on the amount you draw, not the full line",
  "Reuse availability as you repay principal",
  "Flexible for phased projects or ongoing needs",
  "Fixed and variable structures may be available",
  "Interest may be deductible in some cases — ask a tax advisor",
];

const faqs = [
  {
    question: "What is a HELOC?",
    answer:
      "A Home Equity Line of Credit (HELOC) is a revolving line of credit secured by your home. It lets you borrow against your available equity over time, similar to how a credit card works, typically during a defined draw period.",
  },
  {
    question: "How much might I be able to borrow?",
    answer:
      "Availability depends on your home value, what you owe, your credit profile, and the lender's guidelines. Many programs consider a combined loan-to-value up to roughly 80%, but actual limits vary and are subject to underwriting.",
  },
  {
    question: "How is a HELOC different from a cash-out refinance?",
    answer:
      "A HELOC is a separate revolving line layered on top of your existing mortgage, while a cash-out refinance replaces your mortgage with a new, larger loan. Which one fits depends on your current rate, needs, and goals.",
  },
  {
    question: "Is HELOC interest tax deductible?",
    answer:
      "Interest may be deductible in certain situations, such as when funds are used to improve the home that secures the line. Tax rules vary by situation — please consult a qualified tax advisor.",
  },
];

export default function HELOCPage() {
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
                  Home Equity Line of Credit
                </span>
                <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-[#182C2A] md:text-6xl">
                  Flexible access to your <span className="italic text-[#28564A]">home equity</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#52616B]">
                  A HELOC lets you draw funds as you need them and generally pay interest only on
                  what you use — a flexible way to put the equity you have already built to work.
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
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-14 rounded-full border-[#28564A] bg-transparent px-8 text-base font-semibold text-[#28564A] hover:bg-[#28564A]/5"
                  >
                    <Link href="/cash-out-refinance">Compare with cash-out</Link>
                  </Button>
                </div>
                <p className="mt-5 max-w-md text-xs leading-relaxed text-[#8A7C6A]">
                  Informational only. Not an offer of credit or a commitment to lend. All financing
                  is subject to eligibility, underwriting, and verification.
                </p>
              </div>

              {/* Right - Calculator */}
              <div className="lg:-mt-2">
                <HELOCCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-[#182C2A] py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 max-w-2xl">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8FBBA9]">
                How it works
              </span>
              <h2 className="mt-3 font-serif text-3xl text-[#F6F3EC] md:text-4xl">
                A line of credit built around your equity
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
                  Benefits
                </span>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#182C2A] md:text-5xl">
                  Why homeowners consider a HELOC
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#52616B]">
                  A HELOC gives you the flexibility to access your equity on your terms. Unlike a
                  lump-sum loan, you generally pay interest only on what you actually use.
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
                <div className="mb-2 text-sm text-[#52616B]">How a HELOC is structured</div>
                <div className="mb-6 font-serif text-3xl text-[#182C2A]">Draw & repay</div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-[#EEF2ED] py-3">
                    <span className="text-[#52616B]">Draw period</span>
                    <span className="font-semibold text-[#182C2A]">Access funds as needed</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EEF2ED] py-3">
                    <span className="text-[#52616B]">Interest</span>
                    <span className="font-semibold text-[#182C2A]">On the amount drawn</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EEF2ED] py-3">
                    <span className="text-[#52616B]">Repayment</span>
                    <span className="font-semibold text-[#182C2A]">Restores availability</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-[#52616B]">Secured by</span>
                    <span className="font-semibold text-[#28564A]">Your home</span>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#8A7C6A]">
                  Illustrative structure only. Specific terms, draw and repayment periods, and rate
                  type vary by program and are subject to underwriting.
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
                  HELOC questions
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
                Start an inquiry to learn what home-equity financing could look like for your
                situation. No obligation.
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
