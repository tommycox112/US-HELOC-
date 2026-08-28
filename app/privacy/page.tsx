import { LegalPage, LegalContact } from "@/components/legal/legal-page";
import { siteConfig, show } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | US HELOC",
  description:
    "Learn how US HELOC collects, uses, and protects your personal and financial information.",
};

export default function PrivacyPolicyPage() {
  const privacyEmail = show(siteConfig.contact.complaintsEmail) ?? show(siteConfig.contact.supportEmail);

  return (
    <LegalPage title="Privacy Policy" updated="February 1, 2026">
      <section>
        <h2>1. Introduction</h2>
        <p>
          US HELOC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          personal and financial information when you visit our website, use our
          services, or submit an inquiry. This policy is provided in accordance
          with the Gramm-Leach-Bliley Act (GLBA) and applicable state privacy
          laws.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p className="mb-3">We may collect the following categories of personal information:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Identifiers:</strong> Name, email address, phone number,
            mailing address, Social Security Number (SSN), date of birth.
          </li>
          <li>
            <strong>Financial Information:</strong> Income, employment status,
            credit history, bank account details, property information, mortgage
            balances.
          </li>
          <li>
            <strong>Device / Usage Data:</strong> IP address, browser type, pages
            visited, referring URL, cookies, and similar tracking technologies.
          </li>
          <li>
            <strong>Communications:</strong> Information you provide when
            contacting us, including emails and chat transcripts.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>To process and evaluate your inquiry.</li>
          <li>To verify your identity and prevent fraud.</li>
          <li>To communicate with you about your inquiry or our services.</li>
          <li>To comply with legal and regulatory requirements.</li>
          <li>To improve our website, products, and customer experience.</li>
          <li>To send you marketing communications (with your consent, where required).</li>
        </ul>
      </section>

      <section>
        <h2>4. Information Sharing</h2>
        <p className="mb-3">
          We do not sell your personal information. We may share your information
          with:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Lending Providers:</strong> Participating licensed providers
            to evaluate and process financing.
          </li>
          <li>
            <strong>Service Providers:</strong> Third parties that help us operate
            our business (e.g., credit bureaus, appraisal companies, title
            companies).
          </li>
          <li>
            <strong>Legal / Regulatory:</strong> When required by law, regulation,
            or legal process.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          We use industry-standard security measures, including encryption in
          transit, secure data storage, and access controls to protect your
          information. However, no method of electronic storage or transmission is
          100% secure.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p className="mb-3">Depending on your state of residence, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Access, correct, or delete your personal information.</li>
          <li>Opt out of certain data sharing or marketing communications.</li>
          <li>Request a copy of the information we hold about you.</li>
        </ul>
        {privacyEmail ? (
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
          </p>
        ) : null}
      </section>

      <section>
        <h2>7. Cookies &amp; Tracking</h2>
        <p>
          We use cookies and similar technologies to improve your experience,
          analyze site traffic, and personalize content. You can manage cookie
          preferences through your browser settings.
        </p>
      </section>

      <LegalContact intro="If you have questions about this Privacy Policy, please contact us at:" email={privacyEmail ?? undefined} />
    </LegalPage>
  );
}
