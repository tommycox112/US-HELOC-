"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const FAQS = [
  {
    q: "What is a business-purpose HELOC?",
    a: "A home equity line of credit secured by residential property and used for business purposes. The loan agreement determines how funds are accessed and repaid, including any redraw options.",
  },
  {
    q: "Can I use the funds for payroll, equipment, or inventory?",
    a: "These may be permitted business uses, depending on the program. Confirm your intended use with the lender before proceeding.",
  },
  {
    q: "How much could I qualify for?",
    a: "Potential financing depends on your property value, existing liens, credit, income, and the lender's program limits. The calculator provides an illustration, not an approval.",
  },
  {
    q: "Do I need to own a home?",
    a: "This type of financing requires eligible residential property as collateral. Ownership and property eligibility requirements vary by lender.",
  },
  {
    q: "Will submitting an inquiry affect my credit?",
    a: "An inquiry and a lender application are different steps. Review the credit authorization before proceeding to understand whether a credit check will occur and whether it may affect your score.",
  },
  {
    q: "How long does the process take?",
    a: "Timing depends on the lender, verification requirements, property review, and closing process. Ask about the expected timeline for your specific application.",
  },
  {
    q: "What fees and repayment terms apply?",
    a: "Fees, rates, repayment terms, and draw features vary by program. Review the lender's disclosures and loan agreement before accepting an offer.",
  },
  {
    q: "Is my home at risk?",
    a: "Yes. Your home secures the financing, and failure to repay could result in foreclosure. Consider your ability to make payments even if business revenue declines.",
  },
]

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="bg-white">
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="text-center font-serif text-[34px] leading-[1.08] text-[#182C2A] md:text-[46px]">
          A few things to know.
        </h2>

        <div className="mt-12 border-t border-[#DFE6E2]">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-[#DFE6E2]">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[18px] font-medium text-[#182C2A]">{item.q}</span>
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#DFE6E2] text-[#28564A]">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-11 text-[16px] leading-relaxed text-[#52616B]">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
