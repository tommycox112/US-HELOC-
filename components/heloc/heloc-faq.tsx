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
    question: "What is a home equity line of credit (HELOC)?",
    answer: "A home equity line of credit, or HELOC, is a revolving line of credit. Instead of receiving a one-time loan amount as you do with a traditional loan, a HELOC gives you a borrowing limit (or credit limit). As you repay the balance, you can withdraw money from the credit line as you would with a credit card when you need it.",
  },
  {
    question: "How much would my monthly HELOC payment be?",
    answer: "Your monthly HELOC payment depends on your loan amount, interest rate, and other factors. Use our HELOC calculator to estimate your monthly cost and see how different amounts or terms could affect your payment.",
  },
  {
    question: "How do HELOC interest rates work?",
    answer: "There are lenders that offer both variable rate and fixed interest rate home equity lines of credit. US HELOC offers both fixed and variable options so you can choose the option that works best for you. A fixed-interest rate HELOC can provide payment predictability and peace of mind for borrowers. A variable-interest rate can change over time and follows the market.",
  },
  {
    question: "What are the requirements to qualify for a HELOC?",
    answer: "To qualify for a HELOC, you must have sufficient equity in your home, meaning the amount you owe must be less than the home's current value. Lenders typically allow borrowing up to 85% of the home's value minus what you owe. Besides equity, lenders consider factors like credit score, credit history, employment, income, debt payments, and debt-to-income ratio to determine approval.",
  },
  {
    question: "Is US HELOC tax deductible?",
    answer: "You may be able to deduct interest paid on a home equity product if the loan is used for home improvement. You should consult a tax advisor regarding the deductibility of interest and charges.",
  },
  {
    question: "How long does it take to get a HELOC?",
    answer: "Most applicants can complete the application in 5 minutes and you'll receive the results of your prequalification request immediately. However, final approval is subject to verification of income and employment, as well as the condition of the property.",
  },
  {
    question: "What's the difference between a HELOC and a home equity loan?",
    answer: "A home equity loan provides a lump sum with fixed payments and interest, usually over 5 to 20 years, and is often used for major home repairs or debt consolidation. In contrast, a traditional HELOC offers a flexible credit line for ongoing expenses, allowing you to borrow as needed over a set period. US HELOC gives you the full amount upfront with fixed or variable interest rate options, but like a traditional HELOC, you can borrow again once part of the principal is repaid.",
  },
]

export function HELOCFAQ() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

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
            <Link href="#all-faqs">See additional home equity line FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
