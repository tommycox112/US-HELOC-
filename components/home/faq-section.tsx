"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I get funded?",
    answer:
      "Most customers receive funding in as few as 5 days. Our streamlined online process eliminates the delays typically associated with traditional lenders.",
  },
  {
    question: "Will checking my rate affect my credit score?",
    answer:
      "No. We use a soft credit pull to show you your rate options, which does not affect your credit score. A hard pull only occurs if you decide to proceed with an application.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "You can borrow between $15,000 and $750,000, depending on your home equity and creditworthiness. Our online calculator can give you a quick estimate.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "We believe in transparency. All fees are clearly disclosed upfront before you commit. There are no prepayment penalties and no surprise charges. See your loan estimate for full details.",
  },
  {
    question: "Do I need an in-person appraisal?",
    answer:
      "For most loans under $400,000, we use advanced property valuation technology that eliminates the need for an in-person appraisal, saving you time and money.",
  },
  {
    question: "What can I use the funds for?",
    answer:
      "You can use your HELOC funds for virtually any purpose: home improvements, debt consolidation, education expenses, emergency funds, investments, or major purchases.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left - Header */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#002868]/5 rounded-full">
              <HelpCircle className="h-4 w-4 text-[#002868]" />
              <span className="text-sm font-bold text-[#002868]">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-gray-900">
              Common Questions
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Everything you need to know about our home equity products. Can{"'"}t find what
              you{"'"}re looking for?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#002868] to-[#001a4d] text-white font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Contact support
            </a>
          </div>

          {/* Right - Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-all data-[state=open]:shadow-lg data-[state=open]:border-[#002868]/30"
              >
                <AccordionTrigger className="text-left font-bold hover:text-[#002868] py-6 text-gray-900 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
