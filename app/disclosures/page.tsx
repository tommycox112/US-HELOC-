import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosures | US HELOC",
  description:
    "Important disclosures about US HELOC loan products, rates, and lending practices.",
};

export default function DisclosuresPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-16 px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-2">
            Disclosures
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: February 1, 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Rate & APR Disclosures
              </h2>
              <p className="leading-relaxed">
                Advertised rates are subject to change without notice and are not
                a commitment to lend. Your actual rate will depend on factors
                including credit score, loan-to-value ratio, property type, and
                loan amount. Annual Percentage Rate (APR) includes interest and
                any applicable fees. Not all applicants will qualify for the
                lowest rate shown.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                HELOC Disclosures
              </h2>
              <p className="leading-relaxed">
                Home Equity Line of Credit (HELOC) products are available for
                amounts between $15,000 and $750,000. During the draw period,
                minimum payments may be interest-only. After the draw period ends,
                the repayment period begins, during which no further draws are
                available and principal and interest payments are required.
                Variable rate products are subject to rate adjustments. Your home
                is used as collateral and may be at risk if you fail to make
                payments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Cash-Out Refinance Disclosures
              </h2>
              <p className="leading-relaxed">
                Cash-out refinance replaces your existing mortgage with a new,
                larger loan. You receive the difference between the new loan
                amount and your current mortgage balance as cash. Closing costs
                and fees apply. The new loan may have a different rate and term
                than your current mortgage. Refinancing may extend your repayment
                timeline or increase total interest paid over the life of the
                loan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                DSCR Loan Disclosures
              </h2>
              <p className="leading-relaxed">
                Debt Service Coverage Ratio (DSCR) loans are for investment
                properties only and are not available for primary residences.
                Qualification is based primarily on property rental income rather
                than personal income. DSCR loans may have higher interest rates
                than conventional residential loans. Loan amounts up to
                $1,000,000 are available subject to property income qualification
                and other underwriting criteria.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Pre-Qualification vs. Approval
              </h2>
              <p className="leading-relaxed">
                Pre-qualification is an initial assessment based on information
                you provide and a soft credit check. It is not a commitment to
                lend and does not guarantee approval. Full approval requires a
                complete application, hard credit inquiry, property appraisal (if
                applicable), income and asset verification, and underwriting
                review. Final loan terms may differ from pre-qualification
                estimates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Funding Timeline
              </h2>
              <p className="leading-relaxed">
                &quot;Funding in as few as 5 days&quot; applies to qualifying
                HELOC applications under $400,000 that do not require a full
                appraisal. Actual timelines vary based on loan complexity,
                property type, title clearance, and other factors. More complex
                transactions may take longer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Tax Deductibility
              </h2>
              <p className="leading-relaxed">
                Interest on a HELOC or home equity loan may be tax-deductible if
                the funds are used to buy, build, or substantially improve the
                home securing the loan. US HELOC does not provide tax advice.
                Please consult a qualified tax advisor regarding the
                deductibility of interest in your specific situation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Equal Housing Lender
              </h2>
              <p className="leading-relaxed">
                US HELOC is an Equal Housing Lender. We do not discriminate on
                the basis of race, color, religion, national origin, sex,
                handicap, or familial status.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Third-Party Comparisons
              </h2>
              <p className="leading-relaxed">
                Comparison information presented on our website is based on
                publicly available data and general market conditions. Sources
                include LendingTree, Bankrate, U.S. News & World Report, and The
                Mortgage Reports. Individual experiences may vary. Third-party
                data is provided for informational purposes only and is not
                guaranteed to be accurate or current.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p className="leading-relaxed">
                For questions about these disclosures, contact us at:
              </p>
              <div className="mt-3 bg-muted rounded-lg p-4">
                <p>US HELOC</p>
                <p>NMLS# 1660690</p>
                <p>Email: disclosures@usheloc.com</p>
                <p>Phone: (332) 230-9248</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
