import { LegalPage, LegalContact } from "@/components/legal/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosures | US HELOC",
  description:
    "Important disclosures about US HELOC products, rates, and lending practices.",
};

export default function DisclosuresPage() {
  return (
    <LegalPage title="Disclosures" updated="February 1, 2026">
      <section>
        <h2>Informational Purpose</h2>
        <p>
          The information on this website is provided for general educational
          purposes only. Nothing on this site is an offer of credit, a rate
          quote, a pre-approval, or a commitment to lend. Any figures, examples,
          or estimates shown are illustrative and do not reflect an actual offer.
        </p>
      </section>

      <section>
        <h2>Rate &amp; APR Disclosures</h2>
        <p>
          Any rates referenced are illustrative, subject to change without
          notice, and are not a commitment to lend. Actual rates depend on
          factors including credit profile, combined loan-to-value ratio,
          property type, occupancy, and loan amount. Annual Percentage Rate (APR)
          reflects interest and applicable fees. Not all applicants will qualify.
        </p>
      </section>

      <section>
        <h2>HELOC Disclosures</h2>
        <p>
          A Home Equity Line of Credit (HELOC) is a revolving line secured by
          your home. During the draw period, minimum payments may be
          interest-only; after the draw period ends, a repayment period begins
          during which no further draws are available and principal-and-interest
          payments are typically required. Variable-rate products are subject to
          rate adjustments. Because your home secures the line, it may be at risk
          if you fail to make payments. Available amounts and terms vary by
          program and are subject to underwriting.
        </p>
      </section>

      <section>
        <h2>Cash-Out Refinance Disclosures</h2>
        <p>
          A cash-out refinance replaces your existing mortgage with a new, larger
          loan, and you may receive the difference as cash. Closing costs and
          fees apply, and the new loan may carry a different rate and term than
          your current mortgage. Refinancing may extend your repayment timeline or
          increase the total interest paid over the life of the loan.
        </p>
      </section>

      <section>
        <h2>DSCR Loan Disclosures</h2>
        <p>
          Debt Service Coverage Ratio (DSCR) loans are for investment properties
          and are generally not available for primary residences. Qualification
          centers on property rental income rather than personal income. DSCR
          loans may carry different rates and terms than conventional residential
          loans. Availability, amounts, and terms are subject to property income
          qualification and other underwriting criteria.
        </p>
      </section>

      <section>
        <h2>Inquiry vs. Approval</h2>
        <p>
          Submitting an inquiry is an initial step based on information you
          provide. It is not a commitment to lend and does not guarantee approval.
          Full approval requires a complete application, credit review, property
          valuation (where applicable), income and asset verification, and
          underwriting. Final terms may differ from any preliminary estimate.
        </p>
      </section>

      <section>
        <h2>Tax Deductibility</h2>
        <p>
          Interest on a HELOC or home equity loan may be tax-deductible in certain
          situations, such as when funds are used to buy, build, or substantially
          improve the home securing the loan. US HELOC does not provide tax advice.
          Please consult a qualified tax advisor regarding your specific situation.
        </p>
      </section>

      <section>
        <h2>Equal Housing Opportunity</h2>
        <p>
          US HELOC supports the principles of the Equal Credit Opportunity Act and
          the Fair Housing Act. We do not discriminate on the basis of race,
          color, religion, national origin, sex, marital status, age, disability,
          or familial status.
        </p>
      </section>

      <LegalContact intro="For questions about these disclosures, contact us at:" showNmls />
    </LegalPage>
  );
}
