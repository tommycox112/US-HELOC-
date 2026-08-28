import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Logo } from "@/components/logo"
import { siteConfig, disclosures, show } from "@/lib/site-config"

const footerLinks = {
  Products: [
    { name: "HELOC", href: "/heloc" },
    { name: "Home Equity Loan", href: "/heloc" },
    { name: "Cash-Out Refinance", href: "/cash-out-refinance" },
    { name: "DSCR Loans", href: "/dscr-loan" },
    { name: "Compare Options", href: "/heloc#compare" },
  ],
  Calculators: [
    { name: "Cash-Out Calculator", href: "/cash-out-refinance#calculator" },
    { name: "HELOC Calculator", href: "/heloc#calculator" },
    { name: "DSCR Calculator", href: "/dscr-loan#calculator" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/about#leadership" },
    { name: "Careers", href: "/about#careers" },
    { name: "Partners", href: "/about#partners" },
    { name: "Contact", href: "/about#contact" },
  ],
  "Trust Center": [
    { name: "Licensing & NMLS", href: "/licenses" },
    { name: "Disclosures", href: "/disclosures" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Accessibility", href: "/disclosures#accessibility" },
  ],
}

export function Footer() {
  const legalEntity = show(siteConfig.brand.legalEntity)
  const dba = show(siteConfig.brand.dba)
  const businessModel = show(siteConfig.brand.businessModel)
  const companyNmls = show(siteConfig.licensing.companyNmls)
  const eho = show(siteConfig.licensing.equalHousingOpportunity)
  const nmlsAccess = show(siteConfig.licensing.nmlsConsumerAccessUrl)
  const email = show(siteConfig.contact.email)
  const phone = show(siteConfig.contact.phone)
  const hours = show(siteConfig.contact.businessHours)
  const office = show(siteConfig.contact.primaryOffice)
  const statesServed = Object.keys(siteConfig.stateAvailability.states).filter(
    (s) => siteConfig.stateAvailability.states[s] !== "unavailable",
  )

  return (
    <footer className="border-t border-[#DFE6E2] bg-[#F6F3EC] text-[#52616B]">
      <div className="container py-14">
        <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand + identity */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo className="h-9 w-auto" />
            </Link>
            <p className="mb-5 max-w-md text-pretty text-sm leading-relaxed text-[#52616B]">
              {siteConfig.brand.name} helps homeowners and real-estate investors explore
              home-equity financing options through a streamlined online process with human
              guidance.
            </p>

            <div className="space-y-2 rounded-xl border border-[#DFE6E2] bg-white p-4 text-sm">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-[#182C2A] transition-colors hover:text-[#28564A]"
                >
                  <Mail className="h-4 w-4 text-[#28564A]" />
                  <span>{email}</span>
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-[#182C2A] transition-colors hover:text-[#28564A]"
                >
                  <Phone className="h-4 w-4 text-[#28564A]" />
                  <span>{phone}</span>
                </a>
              )}
              {hours && (
                <div className="flex items-center gap-3 text-[#52616B]">
                  <Clock className="h-4 w-4 text-[#28564A]" />
                  <span>{hours}</span>
                </div>
              )}
              {office && (
                <div className="flex items-center gap-3 text-[#52616B]">
                  <MapPin className="h-4 w-4 text-[#28564A]" />
                  <span>{office}</span>
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#182C2A]">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#52616B] underline-offset-4 transition-colors hover:text-[#28564A] hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal identity band */}
        <div className="space-y-3 border-t border-[#DFE6E2] pt-8 text-[11px] leading-relaxed text-[#8A7C6A]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legalEntity && (
              <span>
                {siteConfig.brand.name} is a digital home-financing brand operated by{" "}
                <span className="text-[#182C2A]">{legalEntity}</span>
                {dba ? `, ${dba.toLowerCase()}` : ""}.
              </span>
            )}
            {businessModel && (
              <span className="text-[#52616B]">Operating as a {businessModel}.</span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {companyNmls && (
              <span>
                Company NMLS #{companyNmls}
                {nmlsAccess && (
                  <>
                    {" "}
                    &middot;{" "}
                    <a
                      href={nmlsAccess}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-[#28564A]"
                    >
                      NMLS Consumer Access
                    </a>
                  </>
                )}
              </span>
            )}
            {eho && <span>Equal Housing Opportunity.</span>}
            {statesServed.length > 0 && (
              <span>Available in {statesServed.length} states (see State Availability).</span>
            )}
          </div>

          <p className="max-w-4xl text-pretty">{disclosures.aboutGeneral}</p>
          <p className="max-w-4xl text-pretty">{disclosures.cashOutFooter}</p>

          <p className="pt-2 text-[#8A7C6A]">
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
