import { Check, AlertTriangle } from "lucide-react"

const FIT = [
  "You own residential property.",
  "You have equity after accounting for existing property loans.",
  "You are seeking financing for business purposes.",
  "You can provide the information required by the lender.",
  "You have considered how repayments fit your budget.",
]

const COMMITMENT = [
  "Failure to repay could result in foreclosure.",
  "Rates and payment structures vary by program.",
  "Draw and redraw rules depend on the agreement.",
  "Fees and closing requirements may apply.",
  "Approval and availability are not guaranteed.",
]

export function Eligibility() {
  return (
    <section className="bg-[#F6F3EC]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-14">
        {/* Fit */}
        <div>
          <h2 className="font-serif text-[30px] leading-[1.1] text-[#182C2A] md:text-[40px]">
            Could this fit your business?
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#52616B]">
            A business-purpose HELOC may be worth exploring if you own residential property, have sufficient
            equity, and have a clear business use and repayment plan.
          </p>
          <ul className="mt-8 space-y-4">
            {FIT.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#28564A]" strokeWidth={2} aria-hidden="true" />
                <span className="text-[16px] leading-relaxed text-[#182C2A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Commitment */}
        <div className="rounded-2xl border border-[#DFE6E2] bg-white p-7 md:p-9">
          <h2 className="font-serif text-[30px] leading-[1.1] text-[#182C2A] md:text-[40px]">
            Understand the commitment.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#52616B]">
            This financing uses your home as collateral. Consider the payments, fees, and risks carefully
            before proceeding.
          </p>
          <ul className="mt-8 space-y-4">
            {COMMITMENT.map((item) => (
              <li key={item} className="flex gap-3">
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C38F73]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-[16px] leading-relaxed text-[#182C2A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
