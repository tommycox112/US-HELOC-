import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licenses & NMLS Information | US HELOC",
  description:
    "Licensing information and NMLS details for US HELOC lending operations.",
};

export default function LicensesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-16 px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-2">
            Licenses & NMLS Information
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: February 1, 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                NMLS Information
              </h2>
              <p className="leading-relaxed">
                US HELOC is a licensed mortgage lender. Our Nationwide Multistate
                Licensing System (NMLS) number is{" "}
                <strong>1660690</strong>. You can verify our license status on the{" "}
                <a
                  href="https://www.nmlsconsumeraccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  NMLS Consumer Access
                </a>{" "}
                website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                State Licensing
              </h2>
              <p className="leading-relaxed mb-4">
                US HELOC is licensed to operate in all 50 states. Specific
                license numbers and state-level disclosures are available upon
                request or can be verified through the NMLS Consumer Access
                portal.
              </p>
              <p className="leading-relaxed">
                Some states have specific disclosure requirements for mortgage
                lenders. If you reside in one of these states, additional
                state-specific disclosures may apply to your loan. These will be
                provided during the application process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Equal Housing Lender
              </h2>
              <p className="leading-relaxed">
                US HELOC is an Equal Housing Lender. We are committed to fair
                lending practices and do not discriminate on the basis of race,
                color, religion, national origin, sex, handicap, or familial
                status in compliance with the Fair Housing Act and the Equal
                Credit Opportunity Act.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Regulatory Oversight
              </h2>
              <p className="leading-relaxed">
                US HELOC is subject to oversight by federal and state regulators,
                including the Consumer Financial Protection Bureau (CFPB) and
                state departments of financial regulation. If you have a
                complaint, you may contact us directly or file a complaint with
                the CFPB at{" "}
                <a
                  href="https://www.consumerfinance.gov/complaint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  consumerfinance.gov/complaint
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p className="leading-relaxed">
                For licensing inquiries, contact us at:
              </p>
              <div className="mt-3 bg-muted rounded-lg p-4">
                <p>US HELOC</p>
                <p>NMLS# 1660690</p>
                <p>Email: licensing@usheloc.com</p>
                <p>Phone: (332) 230-9248</p>
                <p>Miami, FL &middot; New York, NY</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
