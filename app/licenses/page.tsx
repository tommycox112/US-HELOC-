import { LegalPage, LegalContact } from "@/components/legal/legal-page";
import { siteConfig, show, isShown } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licenses & NMLS Information | US HELOC",
  description:
    "Licensing information and NMLS details for US HELOC.",
};

export default function LicensesPage() {
  const nmls = show(siteConfig.licensing.companyNmls);
  const nmlsUrl = show(siteConfig.licensing.nmlsConsumerAccessUrl) ?? "https://www.nmlsconsumeraccess.org/";
  const licensedAllStates = isShown(siteConfig.licensing.licensedAllStates);
  const equalHousing = isShown(siteConfig.licensing.equalHousingOpportunity);
  const businessModel = show(siteConfig.brand.businessModel) ?? "licensed mortgage broker";

  return (
    <LegalPage title="Licenses & NMLS Information" updated="February 1, 2026">
      <section>
        <h2>NMLS Information</h2>
        <p>
          US HELOC operates as a {businessModel}.{" "}
          {nmls ? (
            <>
              Our Nationwide Multistate Licensing System (NMLS) identifier is{" "}
              <strong>{nmls}</strong>. You can verify license status on the{" "}
              <a href={nmlsUrl} target="_blank" rel="noopener noreferrer">
                NMLS Consumer Access
              </a>{" "}
              website.
            </>
          ) : (
            <>
              License and NMLS identifiers are being finalized and will be published
              here once verified. In the meantime you can look up licensed entities on
              the{" "}
              <a href={nmlsUrl} target="_blank" rel="noopener noreferrer">
                NMLS Consumer Access
              </a>{" "}
              website.
            </>
          )}
        </p>
      </section>

      <section>
        <h2>State Licensing</h2>
        {licensedAllStates ? (
          <p className="mb-4">
            US HELOC is licensed to operate in all 50 states. Specific license
            numbers and state-level disclosures are available upon request or can be
            verified through NMLS Consumer Access.
          </p>
        ) : (
          <p className="mb-4">
            Availability varies by state and product. Specific license numbers and
            state-level disclosures are available upon request or can be verified
            through NMLS Consumer Access. We only offer financing options in states
            where the applicable licensing is in place.
          </p>
        )}
        <p>
          Some states have specific disclosure requirements. If you reside in one of
          these states, additional state-specific disclosures may apply and will be
          provided during the process.
        </p>
      </section>

      {equalHousing ? (
        <section>
          <h2>Equal Housing Opportunity</h2>
          <p>
            US HELOC supports Equal Housing Opportunity. We are committed to fair
            lending principles and do not discriminate on the basis of race, color,
            religion, national origin, sex, marital status, age, disability, or
            familial status, in keeping with the Fair Housing Act and the Equal
            Credit Opportunity Act.
          </p>
        </section>
      ) : null}

      <section>
        <h2>Regulatory Oversight</h2>
        <p>
          Mortgage brokers and lenders are subject to oversight by federal and state
          regulators, including the Consumer Financial Protection Bureau (CFPB) and
          state departments of financial regulation. If you have a complaint, you may
          contact us directly or file a complaint with the CFPB at{" "}
          <a
            href="https://www.consumerfinance.gov/complaint/"
            target="_blank"
            rel="noopener noreferrer"
          >
            consumerfinance.gov/complaint
          </a>
          .
        </p>
      </section>

      <LegalContact intro="For licensing inquiries, contact us at:" showNmls />
    </LegalPage>
  );
}
