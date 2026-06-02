import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | US HELOC",
  description:
    "Learn how US HELOC collects, uses, and protects your personal and financial information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-16 px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: February 1, 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                US HELOC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your personal and financial information when you visit
                our website, use our services, or apply for a loan product. This
                policy is provided in accordance with the Gramm-Leach-Bliley Act
                (GLBA) and applicable state privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Information We Collect
              </h2>
              <p className="leading-relaxed mb-3">
                We may collect the following categories of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identifiers:</strong> Name, email address, phone
                  number, mailing address, Social Security Number (SSN), date of
                  birth.
                </li>
                <li>
                  <strong>Financial Information:</strong> Income, employment
                  status, credit history, bank account details, property
                  information, mortgage balances.
                </li>
                <li>
                  <strong>Device / Usage Data:</strong> IP address, browser type,
                  pages visited, referring URL, cookies, and similar tracking
                  technologies.
                </li>
                <li>
                  <strong>Communications:</strong> Information you provide when
                  contacting us, including emails, chat transcripts, and phone
                  call recordings (where permitted by law).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To process and evaluate your loan application or
                  pre-qualification request.
                </li>
                <li>
                  To verify your identity and prevent fraud.
                </li>
                <li>
                  To communicate with you about your application, account, or our
                  services.
                </li>
                <li>
                  To comply with legal and regulatory requirements.
                </li>
                <li>
                  To improve our website, products, and customer experience.
                </li>
                <li>
                  To send you marketing communications (with your consent, where
                  required).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Information Sharing
              </h2>
              <p className="leading-relaxed mb-3">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Lending Partners:</strong> To process and fund your
                  loan.
                </li>
                <li>
                  <strong>Service Providers:</strong> Third parties that help us
                  operate our business (e.g., credit bureaus, appraisal
                  companies, title companies, notary services).
                </li>
                <li>
                  <strong>Legal / Regulatory:</strong> When required by law,
                  regulation, or legal process.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Data Security
              </h2>
              <p className="leading-relaxed">
                We use industry-standard security measures, including 256-bit SSL
                encryption, secure data storage, and access controls to protect
                your information. However, no method of electronic storage or
                transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Your Rights
              </h2>
              <p className="leading-relaxed mb-3">
                Depending on your state of residence, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or delete your personal information.</li>
                <li>Opt out of certain data sharing or marketing communications.</li>
                <li>Request a copy of the information we hold about you.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@usheloc.com"
                  className="text-primary underline"
                >
                  privacy@usheloc.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Cookies & Tracking
              </h2>
              <p className="leading-relaxed">
                We use cookies and similar technologies to improve your
                experience, analyze site traffic, and personalize content. You can
                manage cookie preferences through your browser settings. For more
                details, see our Cookie Policy section within this document.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <div className="mt-3 bg-muted rounded-lg p-4">
                <p>US HELOC</p>
                <p>Email: privacy@usheloc.com</p>
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
