import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of properties are eligible?",
    answer: "US HELOC offers loans on: Single family residences, Condos, Townhouses. The property may be the applicant's primary or secondary residence. Have an investment property? Try our DSCR loan! Certain types of properties may not be eligible.",
  },
  {
    question: "Can I use US HELOC on a paid off home?",
    answer: "Yes, you can. If you own your home outright with no existing mortgage, you can still access your equity through our HELOC product.",
  },
  {
    question: "Can I use US HELOC to pay off my existing mortgage?",
    answer: "Yes, you can use US HELOC to pay off your most junior lien. This is a great way to consolidate your debts into one simple payment.",
  },
  {
    question: "What documentation should I have ready when I apply?",
    answer: "Have your ID ready. You will also need login credentials to your online bank accounts for both income verification and setting up your disbursement account. If your property is owned by a trust, you'll also need your Certificate of Trust.",
  },
]

export function CashOutFAQ() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Have More Questions?
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
      </div>
    </section>
  )
}
