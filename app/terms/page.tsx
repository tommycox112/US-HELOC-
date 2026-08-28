import { LegalPage, LegalContact } from "@/components/legal/legal-page";
import { siteConfig, show } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | US HELOC",
  description:
    "Read the terms and conditions governing your use of the US HELOC website and services.",
};

export default function TermsPage() {
  const businessModel = show(siteConfig.brand.businessModel) ?? "licensed mortgage broker";

  return (
    <LegalPage title="Terms of Service" updated="February 1, 2026">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the US HELOC website and services, you agree to be
          bound by these Terms of Service. If you do not agree to these terms,
          please do not use our services.
        </p>
      </section>

      <section>
        <h2>2. Services Description</h2>
        <p>
          US HELOC operates as a {businessModel} and provides an online platform
          that helps homeowners and real estate investors explore financing
          options including Home Equity Lines of Credit (HELOCs), Cash-Out
          Refinancing, and DSCR loans. We facilitate the inquiry process; actual
          lending decisions and funding are made by participating licensed
          providers.
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>
          To use our services, you must be at least 18 years old, a legal resident
          of the United States, and the owner of a qualifying property. Financing
          eligibility is subject to credit approval, property valuation, and other
          underwriting criteria.
        </p>
      </section>

      <section>
        <h2>4. Application Information</h2>
        <p>
          You agree to provide accurate, current, and complete information during
          the inquiry process. Providing false or misleading information may result
          in denial and may constitute fraud under federal and state law.
        </p>
      </section>

      <section>
        <h2>5. Credit Inquiries</h2>
        <p>
          Any soft credit inquiry used for a preliminary review does not affect
          your credit score. If you proceed with a full application through a
          provider, a hard credit inquiry may be performed, which can temporarily
          affect your credit score. You will be informed before any hard credit
          pull.
        </p>
      </section>

      <section>
        <h2>6. No Guarantee of Approval</h2>
        <p>
          Preliminary results and estimates are not guarantees of approval or
          final terms. All financing is subject to credit approval, property
          appraisal, and other underwriting requirements. Final rates, terms, and
          conditions are determined by participating licensed providers.
        </p>
      </section>

      <section>
        <h2>7. E-Sign Consent</h2>
        <p>
          By using our services, you consent to receive communications and
          documents electronically. You agree that electronic signatures,
          contracts, and records have the same legal effect as paper-based
          counterparts, in accordance with the E-Sign Act and the Uniform
          Electronic Transactions Act (UETA).
        </p>
      </section>

      <section>
        <h2>8. TCPA / SMS Consent</h2>
        <p>
          If you provide your phone number, you consent to receive calls and text
          messages from US HELOC and participating providers related to your
          inquiry. Message and data rates may apply. You may opt out at any time by
          replying STOP to any text message or by contacting us directly.
        </p>
      </section>

      <section>
        <h2>9. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and
          software, is the property of US HELOC or its licensors and is protected
          by intellectual property laws. You may not reproduce, distribute, or
          create derivative works without our express written permission.
        </p>
      </section>

      <section>
        <h2>10. Limitation of Liability</h2>
        <p>
          US HELOC is not liable for any indirect, incidental, or consequential
          damages arising from your use of our services. Our total liability shall
          not exceed the fees paid by you, if any, for using our platform. This
          does not limit liability that cannot be excluded under applicable law.
        </p>
      </section>

      <section>
        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the United States and the
          applicable state of our operating entity, without regard to conflict of
          law principles.
        </p>
      </section>

      <LegalContact intro="For questions about these Terms, contact us at:" />
    </LegalPage>
  );
}
