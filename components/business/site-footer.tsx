import Link from "next/link"
import { Logo } from "@/components/logo"
import { siteConfig, show } from "@/lib/site-config"

export function SiteFooter() {
  const email = show(siteConfig.contact.supportEmail)
  const phone = show(siteConfig.contact.phone)
  const hours = show(siteConfig.contact.businessHours)
  const legalEntity = show(siteConfig.brand.legalEntity)
  const businessModel = show(siteConfig.brand.businessModel)
  const companyNmls = show(siteConfig.licensing.companyNmls)
  const equalHousing = show(siteConfig.licensing.equalHousingOpportunity)
  const nmlsUrl = show(siteConfig.licensing.nmlsConsumerAccessUrl)

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclosures", href: show(siteConfig.licensing.disclosuresPageUrl) ?? "/disclosures" },
    { label: "Licensing", href: show(siteConfig.licensing.licensingPageUrl) ?? "/licenses" },
  ]

  return (
    <footer className="border-t border-[#DFE6E2] bg-[#F6F3EC]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo className="h-7 w-auto" />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[#52616B]">
              Home equity financing options for small business owners.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-[#182C2A]">Contact</h3>
            <ul className="mt-4 space-y-2 text-[15px] text-[#52616B]">
              {email ? (
                <li>
                  <a href={`mailto:${email}`} className="transition-colors hover:text-[#28564A]">
                    {email}
                  </a>
                </li>
              ) : null}
              {phone ? (
                <li>
                  <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="transition-colors hover:text-[#28564A]">
                    {phone}
                  </a>
                </li>
              ) : null}
              {hours ? <li>{hours}</li> : null}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-[#182C2A]">Legal</h3>
            <ul className="mt-4 space-y-2 text-[15px] text-[#52616B]">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-[#28564A]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-10 border-[#DFE6E2]" />

        {/* Disclosures — only verified identity/licensing is shown */}
        <div className="space-y-3 text-[13px] leading-relaxed text-[#8A7C6A]">
          {legalEntity ? (
            <p>
              {legalEntity}
              {businessModel ? <> — {businessModel}.</> : null}
            </p>
          ) : (
            <p className="text-[#C38F73]">
              [For review before launch: confirm the operating legal entity and its verified role as lender,
              broker, or referral service.]
            </p>
          )}

          {companyNmls || equalHousing ? (
            <p>
              {companyNmls ? <>NMLS #{companyNmls}. </> : null}
              {nmlsUrl ? (
                <>
                  Verify at{" "}
                  <a href={nmlsUrl} className="underline hover:text-[#28564A]" target="_blank" rel="noreferrer">
                    NMLS Consumer Access
                  </a>
                  .{" "}
                </>
              ) : null}
              {equalHousing ? <>Equal Housing Opportunity.</> : null}
            </p>
          ) : null}

          <p>
            This site is for informational purposes and is not a commitment to lend. Financing is secured by
            residential property; failure to repay could result in foreclosure. All financing is subject to
            eligibility, lender approval, and program availability.
          </p>

          <p>© {new Date().getFullYear()} US HELOC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
