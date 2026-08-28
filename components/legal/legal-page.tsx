import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig, show } from "@/lib/site-config";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F3EC]">
      <Header />
      <main className="flex-1">
        {/* Header band */}
        <div className="border-b border-[#DFE6E2] bg-[#182C2A]">
          <div className="container max-w-4xl px-4 py-16 md:px-6">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8FBBA9]">
              Legal &amp; Compliance
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-[#F6F3EC] md:text-5xl">
              {title}
            </h1>
            {updated ? <p className="mt-3 text-sm text-[#B7C4BD]">Last updated: {updated}</p> : null}
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-4xl px-4 py-16 md:px-6">
          <div className="space-y-8 text-[#3E4A47] [&_a]:text-[#28564A] [&_a]:underline [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-[#182C2A] [&_li]:leading-relaxed [&_p]:leading-relaxed [&_strong]:text-[#182C2A]">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/**
 * Contact block driven entirely by verified config values.
 * Any unverified field (phone, office, NMLS) is automatically hidden.
 */
export function LegalContact({
  intro = "For questions, contact us at:",
  email,
  showNmls = false,
}: {
  intro?: string;
  email?: string;
  showNmls?: boolean;
}) {
  const displayEmail = email ?? show(siteConfig.contact.supportEmail);
  const phone = show(siteConfig.contact.phone);
  const nmls = showNmls ? show(siteConfig.licensing.companyNmls) : null;
  const legalEntity = show(siteConfig.brand.legalEntity) ?? siteConfig.brand.name;

  return (
    <section>
      <h2>Contact</h2>
      <p>{intro}</p>
      <div className="mt-3 rounded-xl border border-[#DFE6E2] bg-white p-5">
        <p className="font-semibold text-[#182C2A]">{legalEntity}</p>
        {nmls ? <p>NMLS# {nmls}</p> : null}
        {displayEmail ? (
          <p>
            Email:{" "}
            <a href={`mailto:${displayEmail}`}>{displayEmail}</a>
          </p>
        ) : null}
        {phone ? <p>Phone: {phone}</p> : null}
        <p className="mt-2 text-xs text-[#8A7C6A]">
          Business hours: {show(siteConfig.contact.businessHours) ?? "By email"}
        </p>
      </div>
    </section>
  );
}
