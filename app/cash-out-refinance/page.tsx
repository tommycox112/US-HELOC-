import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ShieldCheck,
  ScrollText,
  BadgeCheck,
  HandCoins,
  ArrowDown,
  Check,
  X,
  Hammer,
  CreditCard,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  PiggyBank,
  Building2,
  MoreHorizontal,
  Home,
  UserCheck,
  Wallet,
  Scale,
  FileCheck2,
  MapPin,
  ClipboardCheck,
  Lock,
  KeyRound,
  FileLock2,
  MessageSquareLock,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PrequalProvider } from "@/components/cash-out/prequal-drawer"
import { SnapshotCard } from "@/components/cash-out/snapshot-card"
import { ComparisonToggle } from "@/components/cash-out/comparison-toggle"
import { AdvancedCalculator } from "@/components/cash-out/advanced-calculator"
import { EligibilityChecklist, ScenarioSelector } from "@/components/cash-out/interactive-extras"
import { PrequalButton, SpecialistButton, ScheduleButton, MobileStickyCta } from "@/components/cash-out/cta-buttons"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig, disclosures, show } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Cash-Out Refinance Options and Calculator | US HELOC",
  description:
    "Estimate potential cash-out refinance proceeds, compare refinancing with a HELOC, and explore possible home-equity options based on your property and mortgage profile.",
  alternates: { canonical: "https://www.usheloc.com/cash-out-refinance" },
  openGraph: {
    title: "Cash-Out Refinance Options and Calculator | US HELOC",
    description:
      "Estimate potential cash-out refinance proceeds and compare with a HELOC based on your property and mortgage profile.",
    url: "https://www.usheloc.com/cash-out-refinance",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
}

const flowSteps = [
  "Current property value",
  "Pay off existing mortgage",
  "Subtract estimated closing costs",
  "Receive eligible cash proceeds",
  "Begin new mortgage terms",
]

const benefits = [
  "Access a lump sum of available equity",
  "Consolidate mortgage and cash needs into one loan",
  "Potentially replace variable or short-term debt",
  "Finance renovations or major expenses",
  "Potentially adjust the mortgage term",
  "Maintain one primary housing payment",
]

const tradeoffs = [
  "Your current mortgage is replaced",
  "The new interest rate may be higher",
  "Closing costs generally apply",
  "The mortgage term may restart",
  "Monthly payments may increase",
  "Your home secures the new debt",
  "Taking cash reduces remaining home equity",
  "Long-term borrowing costs may increase",
]

const uses = [
  { icon: Hammer, title: "Home renovations", note: "Financing improvements adds to the loan balance secured by your home." },
  { icon: CreditCard, title: "Debt consolidation", note: "Consolidating unsecured debt into a mortgage may reduce monthly payments, but it converts that debt into an obligation secured by your home and may extend the repayment period." },
  { icon: Briefcase, title: "Business investment", note: "Using home equity for business carries risk to your primary residence." },
  { icon: GraduationCap, title: "Education expenses", note: "Compare against student-loan options and repayment protections first." },
  { icon: ShoppingBag, title: "Major purchases", note: "Large one-time costs are spread across the full mortgage term." },
  { icon: PiggyBank, title: "Emergency reserves", note: "Borrowing to hold reserves increases interest cost over time." },
  { icon: Building2, title: "Investment-property down payment", note: "Leveraging one property to acquire another increases overall exposure." },
  { icon: MoreHorizontal, title: "Other significant expenses", note: "Weigh total borrowing cost against the benefit of the expense." },
]

const qualification = [
  { icon: Home, title: "Property value and equity" },
  { icon: UserCheck, title: "Credit profile" },
  { icon: Wallet, title: "Income and employment" },
  { icon: Scale, title: "Debt-to-income ratio" },
  { icon: FileCheck2, title: "Mortgage payment history" },
  { icon: Building2, title: "Property type" },
  { icon: MapPin, title: "Occupancy" },
  { icon: ClipboardCheck, title: "Title and existing liens" },
]

const documents = [
  "Government-issued identification",
  "Recent mortgage statement",
  "Homeowners insurance declaration",
  "Income documentation",
  "Employment information",
  "Bank statements",
  "Property-tax information",
  "HOA statement, if applicable",
  "Trust or ownership documents",
  "Existing lien information",
  "Current lease information for rental property",
  "Additional documents requested during underwriting",
]

const timeline = [
  { step: "Initial Review", desc: "Property, mortgage, financing goal, and contact information." },
  { step: "Credit and Income Review", desc: "Credit authorization and verification of income, assets, and debts." },
  { step: "Property Review", desc: "Automated valuation, appraisal, inspection, or other property review may be required." },
  { step: "Title and Underwriting", desc: "Review of ownership, existing liens, property eligibility, and loan conditions." },
  { step: "Final Disclosures and Closing", desc: "Review final terms, sign closing documents, and complete any required waiting period." },
  { step: "Disbursement", desc: "Eligible proceeds are released after closing conditions and applicable rescission periods are satisfied." },
]

const caseStudies = [
  { title: "Renovation Scenario", goal: "Finance a major property renovation", structure: "Cash-out refinance versus HELOC", consideration: "Whether replacing the existing mortgage justified the closing costs" },
  { title: "Debt Consolidation Scenario", goal: "Replace multiple monthly debt payments", structure: "Cash-out refinancing", consideration: "Total long-term cost and converting unsecured debt into debt secured by the home" },
  { title: "Major Expense Scenario", goal: "Access a large one-time amount", structure: "Cash-out refinance and fixed home equity loan", consideration: "Monthly payment, rate structure, and remaining equity" },
]

const security = [
  { icon: Lock, title: "Encrypted data transmission", desc: "Information is transmitted over secure connections." },
  { icon: KeyRound, title: "Identity verification", desc: "Steps to help confirm applicant identity." },
  { icon: FileLock2, title: "Controlled document access", desc: "Documents are handled through controlled workflows." },
  { icon: MessageSquareLock, title: "Communication consent", desc: "Clear, opt-in communication preferences." },
]

const faqs = [
  { q: "What is a cash-out refinance?", a: "A cash-out refinance replaces your current mortgage with a larger new mortgage. After paying off existing liens and transaction costs, the difference may be provided to you as cash." },
  { q: "How much cash may I be able to access?", a: "The amount depends on your property value, existing liens, program limits, credit profile, income, and occupancy. Lenders typically limit the new loan to a percentage of the property value." },
  { q: "How is the maximum loan amount determined?", a: "It is generally based on the estimated property value multiplied by a target loan-to-value, subject to program, state, and borrower requirements." },
  { q: "Does a cash-out refinance replace my current mortgage?", a: "Yes. A cash-out refinance pays off and replaces your existing first mortgage with a new loan." },
  { q: "How is it different from a HELOC?", a: "A HELOC is a separate revolving line that usually sits behind your first mortgage, while a cash-out refinance replaces the first mortgage entirely and provides funds at closing." },
  { q: "Are closing costs required?", a: "Closing costs generally apply and vary by program, property, and state. Third-party fees may apply." },
  { q: "Will the interest rate change?", a: "The new mortgage will have its own rate, which may be higher or lower than your current rate depending on market conditions and your profile." },
  { q: "How long does the process normally take?", a: siteConfig.language.closingTime },
  { q: "Will checking options affect my credit?", a: "Reviewing preliminary options based on the information you enter does not require a credit pull. A formal application may involve a credit check with your authorization." },
  { q: "Is an appraisal required?", a: "A property valuation may be required. Some transactions may use an automated valuation, while others may require a full appraisal." },
  { q: "Can I refinance an investment property?", a: "Investment properties may be eligible under certain programs, subject to different requirements and pricing." },
  { q: "Can I use the proceeds for business purposes?", a: "Some programs allow it, but using home equity for business carries risk to your residence. Requirements vary." },
  { q: "What happens to my existing HELOC?", a: "An existing HELOC may be paid off through the refinance or subordinated, depending on the program and lender requirements." },
  { q: "Can existing debts be paid directly at closing?", a: "In many cases eligible debts can be paid directly at closing, subject to program rules and documentation." },
  { q: "Are there prepayment penalties?", a: "Prepayment terms vary by program and lender. Review your specific loan terms and disclosures." },
  { q: "What documents are required?", a: "Exact documentation depends on the program and applicant profile. A typical checklist is shown above." },
  { q: "Can I qualify with multiple liens?", a: "Multiple liens can often be identified and addressed, but they affect available proceeds and eligibility." },
  { q: "Can self-employed borrowers qualify?", a: "Self-employed borrowers may qualify under programs that account for their income documentation." },
  { q: "Is cash-out refinance interest tax deductible?", a: `Deductibility depends on how the funds are used and your individual situation. ${disclosures.tax}` },
  { q: "What happens after closing?", a: "After closing conditions and applicable rescission periods are satisfied, eligible proceeds are disbursed and your new mortgage terms begin." },
]

export default function CashOutRefinancePage() {
  const rating = show(siteConfig.trust.reviewRating)
  const eho = show(siteConfig.licensing.equalHousingOpportunity)
  const nmls = show(siteConfig.licensing.companyNmls)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.usheloc.com/" },
      { "@type": "ListItem", position: 2, name: "Cash-Out Refinance", item: "https://www.usheloc.com/cash-out-refinance" },
    ],
  }

  return (
    <PrequalProvider>
      <div className="flex min-h-screen flex-col bg-white pb-16 md:pb-0">
        <Header />
        <main className="flex-1">
          {/* ================= HERO ================= */}
          <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF2ED] via-white to-white pt-14 pb-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_0%,rgba(0,40,104,0.08),transparent)]" />
            <div className="container relative z-10">
              <div className="grid items-start gap-12 lg:grid-cols-2">
                <div className="pt-4">
                  <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#28564A]/20 bg-[#28564A]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#28564A]">
                      Cash-Out Refinancing
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[#182C2A] md:text-5xl lg:text-6xl">
                      Turn Available Home Equity Into a New Mortgage Strategy
                    </h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-5 max-w-xl text-pretty text-lg text-gray-600">
                      Replace your existing mortgage with a new loan while accessing a portion of your
                      available equity in one lump sum.
                    </p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <p className="mt-3 max-w-xl text-pretty text-sm text-gray-500">
                      Review potential options based on your property value, mortgage balance, credit
                      profile, income, and financing goals.
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <PrequalButton label="Estimate My Cash-Out" source="hero" />
                      <SpecialistButton />
                    </div>
                  </Reveal>
                  <Reveal delay={0.25}>
                    <p className="mt-4 text-xs text-gray-400">
                      Initial estimates are for educational purposes and do not represent approval or a
                      commitment to lend.
                    </p>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
                      {[
                        { icon: ShieldCheck, t: "Secure online review" },
                        { icon: Scale, t: "Personalized comparison" },
                        { icon: HandCoins, t: "Guidance to closing" },
                      ].map((x) => (
                        <div key={x.t} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-3">
                          <x.icon className="h-5 w-5 shrink-0 text-[#182C2A]" />
                          <span className="text-xs font-medium text-gray-600">{x.t}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                <div className="lg:pt-2">
                  <SnapshotCard />
                </div>
              </div>
            </div>
          </section>

          {/* ================= TRUST STRIP ================= */}
          <section className="border-y border-gray-100 bg-white py-5">
            <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#182C2A]" /> Secure application experience</span>
              <span className="flex items-center gap-2"><ScrollText className="h-4 w-4 text-[#182C2A]" /> Transparent estimates</span>
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#182C2A]" /> No obligation to proceed</span>
              {nmls && <span className="flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-[#182C2A]" /> NMLS #{nmls}</span>}
              {eho && <span>Equal Housing Opportunity</span>}
              {rating && <span>{rating} {show(siteConfig.trust.reviewSource)}</span>}
            </div>
          </section>

          {/* ================= HOW IT WORKS ================= */}
          <section className="py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  One Transaction, Two Financial Changes
                </h2>
                <p className="mt-4 text-pretty text-gray-600">
                  A cash-out refinance replaces your current mortgage with a larger new mortgage. The
                  difference, after paying off existing liens and transaction costs, is generally provided
                  to you as cash.
                </p>
              </Reveal>

              <div className="mt-12 grid gap-10 lg:grid-cols-2">
                {/* Flow */}
                <div className="space-y-3">
                  {flowSteps.map((s, i) => (
                    <Reveal key={s} delay={i * 0.05}>
                      <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#182C2A] text-sm font-bold text-white">
                          {i + 1}
                        </div>
                        <span className="font-medium text-[#182C2A]">{s}</span>
                      </div>
                      {i < flowSteps.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowDown className="h-4 w-4 text-gray-300" />
                        </div>
                      )}
                    </Reveal>
                  ))}
                </div>

                {/* Sample scenario */}
                <Reveal delay={0.1}>
                  <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                    <div className="relative h-40 w-full">
                      <Image src="/cash-out/american-home.png" alt="Classic American home" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#182C2A]/70 to-transparent" />
                      <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">Illustrative example</p>
                    </div>
                    <div className="space-y-2.5 p-6 text-sm">
                      {[
                        ["Estimated property value", "$700,000"],
                        ["Current mortgage balance", "$360,000"],
                        ["New mortgage amount", "$500,000"],
                        ["Estimated costs", "$12,000"],
                        ["Illustrative cash proceeds", "$128,000"],
                        ["Estimated new LTV", "71.4%"],
                      ].map(([l, v]) => (
                        <div key={l} className="flex items-center justify-between border-b border-dashed border-gray-100 pb-2">
                          <span className="text-gray-500">{l}</span>
                          <span className="font-semibold text-[#182C2A]">{v}</span>
                        </div>
                      ))}
                      <p className="pt-2 text-xs text-gray-400">{disclosures.illustrative}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ================= BENEFITS & TRADEOFFS ================= */}
          <section className="bg-gray-50/70 py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  Potential Benefits and Important Tradeoffs
                </h2>
              </Reveal>
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <Reveal>
                  <div className="h-full rounded-3xl border border-green-200 bg-white p-7">
                    <h3 className="mb-4 text-lg font-bold text-[#182C2A]">Potential Benefits</h3>
                    <ul className="space-y-3">
                      {benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div className="h-full rounded-3xl border border-amber-200 bg-white p-7">
                    <h3 className="mb-4 text-lg font-bold text-[#182C2A]">Important Tradeoffs</h3>
                    <ul className="space-y-3">
                      {tradeoffs.map((t) => (
                        <li key={t} className="flex items-start gap-3 text-sm text-gray-700">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.1}>
                <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-[#182C2A]/15 bg-[#EEF2ED]/70 p-5 text-center text-sm text-[#182C2A]">
                  A cash-out refinance may not be the best option when the existing mortgage has a
                  substantially lower rate. Compare total cost, monthly payment, closing costs, and
                  break-even timing before proceeding.
                </div>
              </Reveal>
            </div>
          </section>

          {/* ================= COMPARISON ================= */}
          <section id="compare" className="py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  Cash-Out Refinance or HELOC?
                </h2>
                <p className="mt-4 text-gray-600">Compare the two structures against your priorities.</p>
              </Reveal>
              <div className="mt-12">
                <ComparisonToggle />
              </div>
            </div>
          </section>

          {/* ================= CALCULATOR ================= */}
          <section id="calculator" className="scroll-mt-24 bg-gray-50/70 py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  Estimate Your Potential Cash-Out Proceeds
                </h2>
                <p className="mt-4 text-gray-600">
                  Adjust the assumptions to see estimated proceeds, payments, and break-even.
                </p>
              </Reveal>
              <div className="mt-10">
                <AdvancedCalculator />
              </div>
            </div>
          </section>

          {/* ================= COMMON USES ================= */}
          <section className="py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  How Homeowners Commonly Use Cash-Out Proceeds
                </h2>
              </Reveal>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {uses.map((u, i) => (
                  <Reveal key={u.title} delay={(i % 4) * 0.05}>
                    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#182C2A]/5 text-[#182C2A]">
                        <u.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 font-semibold text-[#182C2A]">{u.title}</h3>
                      <p className="text-xs leading-relaxed text-gray-500">{u.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ================= QUALIFICATION ================= */}
          <section className="bg-gray-50/70 py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  What Mortgage Providers Commonly Review
                </h2>
                <p className="mt-4 text-gray-600">
                  Requirements vary by lender, state, program, property type, occupancy, and borrower profile.
                </p>
              </Reveal>
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-3">
                  {qualification.map((q, i) => (
                    <Reveal key={q.title} delay={(i % 2) * 0.05}>
                      <div className="flex h-full items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                        <q.icon className="h-5 w-5 shrink-0 text-[#28564A]" />
                        <span className="text-sm font-medium text-[#182C2A]">{q.title}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={0.1}>
                  <EligibilityChecklist />
                </Reveal>
              </div>
            </div>
          </section>

          {/* ================= DOCUMENTATION ================= */}
          <section className="py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  Documents You May Be Asked to Provide
                </h2>
              </Reveal>
              <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
                {documents.map((d, i) => (
                  <Reveal key={d} delay={(i % 2) * 0.04}>
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-gray-700">
                      <FileCheck2 className="h-4 w-4 shrink-0 text-[#182C2A]" /> {d}
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500">
                Exact documentation depends on the program and applicant profile.
              </p>
            </div>
          </section>

          {/* ================= TIMELINE ================= */}
          <section className="bg-[#182C2A] py-20 text-white">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold md:text-4xl">What the Process May Look Like</h2>
              </Reveal>
              <div className="mx-auto mt-12 max-w-3xl">
                {timeline.map((t, i) => (
                  <Reveal key={t.step} delay={i * 0.05}>
                    <div className="flex gap-5 pb-8 last:pb-0">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#28564A] text-sm font-bold">
                          {i + 1}
                        </div>
                        {i < timeline.length - 1 && <div className="mt-1 w-px flex-1 bg-white/20" />}
                      </div>
                      <div className="pb-2">
                        <h3 className="font-semibold">{t.step}</h3>
                        <p className="mt-1 text-sm text-white/60">{t.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-white/50">
                {siteConfig.language.expedited} Actual timelines vary based on appraisal, title, document
                completion, underwriting conditions, lender capacity, and applicable waiting periods.
              </p>
            </div>
          </section>

          {/* ================= SCENARIOS ================= */}
          <section className="py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  See How the Structure Changes
                </h2>
                <p className="mt-4 text-gray-600">Switch priorities to see how the emphasis shifts.</p>
              </Reveal>
              <div className="mt-10">
                <ScenarioSelector />
              </div>
            </div>
          </section>

          {/* ================= CASE STUDIES ================= */}
          <section className="bg-gray-50/70 py-20">
            <div className="container">
              <Reveal className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  Designed for a Clearer Borrowing Experience
                </h2>
              </Reveal>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {caseStudies.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.06}>
                    <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6">
                      <h3 className="mb-4 text-lg font-bold text-[#182C2A]">{c.title}</h3>
                      <dl className="flex-1 space-y-3 text-sm">
                        <div><dt className="text-xs font-bold uppercase tracking-wider text-gray-400">Goal</dt><dd className="text-gray-700">{c.goal}</dd></div>
                        <div><dt className="text-xs font-bold uppercase tracking-wider text-gray-400">Structure reviewed</dt><dd className="text-gray-700">{c.structure}</dd></div>
                        <div><dt className="text-xs font-bold uppercase tracking-wider text-gray-400">Key consideration</dt><dd className="text-gray-700">{c.consideration}</dd></div>
                      </dl>
                      <p className="mt-4 border-t border-gray-100 pt-3 text-[11px] text-gray-400">
                        Illustrative scenario. Not a customer testimonial. Actual outcomes vary.
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ================= SECURITY ================= */}
          <section className="relative overflow-hidden bg-[#0a1730] py-20 text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_0%,rgba(191,10,48,0.15),transparent)]" />
            <div className="container relative z-10">
              <Reveal className="mx-auto max-w-2xl text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h2 className="text-balance text-3xl font-bold md:text-4xl">
                  A Secure Process for Sensitive Financial Information
                </h2>
              </Reveal>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {security.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.05}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                      <s.icon className="mb-4 h-6 w-6 text-white/80" />
                      <h3 className="mb-1.5 font-semibold">{s.title}</h3>
                      <p className="text-sm text-white/50">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              {show(siteConfig.trust.securityCertifications) && (
                <p className="mt-8 text-center text-sm text-white/60">
                  Certifications: {(show(siteConfig.trust.securityCertifications) as string[]).join(", ")}
                </p>
              )}
            </div>
          </section>

          {/* ================= FAQ ================= */}
          <section id="faq" className="py-20">
            <div className="container">
              <Reveal className="mx-auto mb-10 max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold text-[#182C2A] md:text-4xl">
                  Cash-Out Refinance Questions
                </h2>
              </Reveal>
              <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((f, i) => (
                    <AccordionItem key={f.q} value={`item-${i}`} className="mb-2 rounded-2xl border border-gray-200 bg-white px-5">
                      <AccordionTrigger className="py-5 text-left font-medium text-[#182C2A] hover:text-[#28564A]">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-gray-600">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* ================= FINAL CTA ================= */}
          <section id="schedule" className="scroll-mt-24 py-20">
            <div className="container">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#182C2A] to-[#0a1730] px-6 py-16 text-center text-white md:px-16">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(191,10,48,0.25),transparent)]" />
                  <div className="relative z-10 mx-auto max-w-2xl">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl">
                      See What a Cash-Out Refinance Could Look Like
                    </h2>
                    <p className="mt-4 text-pretty text-white/70">
                      Answer a few questions about your property, existing mortgage, and financing goals to
                      review potential next steps.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                      <PrequalButton label="Explore My Options" source="final-cta" variant="white" />
                      <ScheduleButton />
                    </div>
                    <p className="mt-5 text-xs text-white/50">{disclosures.noObligation}</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/50">
                      <Link href="/heloc" className="hover:text-white">HELOC</Link>
                      <Link href="/heloc" className="hover:text-white">Home Equity Loan</Link>
                      <Link href="/dscr-loan" className="hover:text-white">DSCR Loans</Link>
                      <Link href="/disclosures" className="hover:text-white">Disclosures</Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
        <MobileStickyCta />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </PrequalProvider>
  )
}
