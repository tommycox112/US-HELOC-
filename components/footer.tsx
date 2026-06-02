import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/logo";

const footerLinks = {
  Products: [
    { name: "Home Equity Line (HELOC)", href: "/heloc" },
    { name: "Cash-Out Refinance", href: "/cash-out-refinance" },
    { name: "DSCR Loans", href: "/dscr-loan" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/about#careers" },
    { name: "Partners", href: "/about#partners" },
  ],
  Resources: [
    { name: "Help Center", href: "/about#contact" },
    { name: "FAQs", href: "/#faq" },
    { name: "Disclosures", href: "/disclosures" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Disclosures", href: "/disclosures" },
    { name: "Licenses & NMLS", href: "/licenses" },
  ],
};

const certifications = [
  "NMLS Licensed",
  "256-bit SSL Secured",
  "Equal Housing Lender",
];

export function Footer() {
  return (
    <footer className="bg-[#002868] relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-0.5 bg-[#BF0A30]" />

      <div className="container py-12 relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-8 pb-8 mb-8 border-b border-white/10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo className="h-9 w-auto" inverted />
            </Link>
            <p className="text-white/60 max-w-md text-sm leading-relaxed mb-4">
              A fast, easy way to access your home equity. Quick
              pre-qualification, funding in as few as 5 days, 100% online.
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-white/8 rounded-md"
                >
                  <CheckCircle2 className="h-3 w-3 text-green-400" />
                  <span className="text-[11px] text-white/60">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-xs font-semibold text-white/80 mb-3 uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href="tel:3322309248"
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
              >
                <Phone className="h-4 w-4 text-[#BF0A30]" />
                <span>(332) 230-9248</span>
              </a>
              <a
                href="mailto:support@usheloc.com"
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
              >
                <Mail className="h-4 w-4 text-[#BF0A30]" />
                <span>support@usheloc.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 text-[#BF0A30]" />
                <span>Miami, FL &middot; New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-white/80 mb-3 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors underline-offset-4 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/40">
          <p>
            NMLS# 1660690. Equal Housing Lender. Licensed in all 50 states.
          </p>
          <p>
            {new Date().getFullYear()} US HELOC. All rights reserved. Not a
            lender.
          </p>
        </div>
      </div>
    </footer>
  );
}
