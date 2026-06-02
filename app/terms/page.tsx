import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | US HELOC",
  description:
    "Read the terms and conditions governing your use of the US HELOC website and services.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-16 px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-2">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: February 1, 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using the US HELOC website and services, you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Services Description
              </h2>
              <p className="leading-relaxed">
                US HELOC provides an online platform that connects homeowners and
                real estate investors with lending products including Home Equity
                Lines of Credit (HELOCs), Cash-Out Refinancing, and DSCR Loans.
                We facilitate the application process; actual lending decisions
                and funding are made by our licensed lending partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Eligibility
              </h2>
              <p className="leading-relaxed">
                To use our services, you must be at least 18 years old, a legal
                resident of the United States, and the owner of a qualifying
                property. Loan eligibility is subject to credit approval,
                property valuation, and other underwriting criteria.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Application Information
              </h2>
              <p className="leading-relaxed">
                You agree to provide accurate, current, and complete information
                during the application process. Providing false or misleading
                information may result in denial of your application and may
                constitute fraud under federal and state law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Credit Inquiries
              </h2>
              <p className="leading-relaxed">
                Pre-qualification checks use a soft credit inquiry that does not
                affect your credit score. If you proceed with a full application,
                a hard credit inquiry will be performed, which may temporarily
                affect your credit score. We will always inform you before
                performing a hard credit pull.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. No Guarantee of Approval
              </h2>
              <p className="leading-relaxed">
                Pre-qualification results and rate estimates are not guarantees of
                approval or final loan terms. All loans are subject to credit
                approval, property appraisal, and other underwriting
                requirements. Final rates, terms, and conditions are determined
                by our lending partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. E-Sign Consent
              </h2>
              <p className="leading-relaxed">
                By using our services, you consent to receive communications and
                documents electronically. You agree that electronic signatures,
                contracts, and records have the same legal effect as paper-based
                counterparts, in accordance with the E-Sign Act and the Uniform
                Electronic Transactions Act (UETA).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. TCPA / SMS Consent
              </h2>
              <p className="leading-relaxed">
                By providing your phone number, you consent to receive calls and
                text messages from US HELOC and our partners related to your
                inquiry or application. Message and data rates may apply. You may
                opt out at any time by replying STOP to any text message or by
                contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, and
                software, is the property of US HELOC or its licensors and is
                protected by intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our express
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                10. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                US HELOC is not liable for any indirect, incidental, or
                consequential damages arising from your use of our services. Our
                total liability shall not exceed the fees paid by you, if any,
                for using our platform. This does not limit liability that cannot
                be excluded under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                11. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of the State of Florida,
                without regard to conflict of law principles. Any disputes shall
                be resolved in the courts located in Miami-Dade County,
                Florida.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                12. Contact
              </h2>
              <p className="leading-relaxed">
                For questions about these Terms, contact us at:
              </p>
              <div className="mt-3 bg-muted rounded-lg p-4">
                <p>US HELOC</p>
                <p>Email: legal@usheloc.com</p>
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
