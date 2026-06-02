import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "What are the requirements to qualify for a DSCR loan?",
    answer: "FICO Score: 680 or higher. DSCR: Greater than or equal to 1.0. Maximum LTV (Loan-to-Value): Up to 80% for rate-and-term refinances and up to 75% for cash-out refinances. Property Types: Single-family residences, condos, PUDs, and townhomes.",
  },
  {
    question: "How is DSCR calculated?",
    answer: "Formula: DSCR = Net Operating Income / Total Debt Service. A DSCR above 1.0 means your rental income covers your mortgage.",
  },
  {
    question: "What is a good DSCR?",
    answer: "Most lenders prefer a DSCR of 1.25 or higher, as it indicates stronger cash flow. However, some lenders—including US HELOC—may accept DSCRs as low as 1.0 depending on other factors like credit score and property type.",
  },
  {
    question: "How can you improve your DSCR?",
    answer: "You can improve your DSCR by increasing rental income, reducing operating expenses, or refinancing to lower your existing debt payments. Minimizing vacancies can also help.",
  },
  {
    question: "Is a DSCR loan a hard money loan?",
    answer: "No. DSCR loans are long-term mortgage products designed for real estate investors. Unlike hard money loans, they typically offer lower interest rates, longer terms, and more stable financing.",
  },
  {
    question: "What credit score do you need for a DSCR loan?",
    answer: "680+ is the minimum required.",
  },
  {
    question: "What's the minimum down payment for a DSCR loan?",
    answer: "Typically 20%, though a higher DSCR can help lower that requirement.",
  },
  {
    question: "Can you live in a property bought with a DSCR loan?",
    answer: "No. DSCR loans are strictly for investment properties, not primary residences.",
  },
]

export function DSCRFAQ() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          DSCR Loan FAQs
        </h2>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="#all-faqs">See additional DSCR loan FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
