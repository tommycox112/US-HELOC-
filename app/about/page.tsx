import type { Metadata } from "next"
import Link from "next/link"
import {
  Building2,
  ShieldCheck,
  FileText,
  Scale,
  Users,
  Mail,
  MapPin,
  BadgeCheck,
  Landmark,
  Compass,
  HeartHandshake,
  Eye,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/motion/reveal"
import { PrequalProvider } from "@/components/cash-out/prequal-drawer"
import { PrequalButton, SpecialistButton } from "@/components/cash-out/cta-buttons"
import { LeadershipGrid } from "@/components/about/leadership-grid"
import { StateAvailability } from "@/components/about/state-availability"
import { StoryTimeline } from "@/components/about/story-timeline"
import { siteConfig, show, disclosures } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About US HELOC | Our Story, Leadership & Commitment to Homeowners",
  description:
    "The story of US HELOC — built in America to help homeowners and investors put the equity they've earned to work, with transparency, licensed guidance, and a technology-first experience. Meet the founders and leadership behind the mission.",
}

const values = [
  {
    icon: Eye,
    title: "Transparency First",
    body: "Clear, plain-language information about your options, costs, and process — with no pressure and no surprises.",
  },
  {
    icon: HeartHandshake,
    title: "Homeowner Focused",
    body: "Every decision starts with one question: does this genuinely help the homeowner make an informed, confident choice?",
  },
  {
    icon: Scale,
    title: "Compliance by Design",
    body: "Advertising review, disclosures, and consent language are built into how we operate — not bolted on afterward.",
  },
  {
    icon: Compass,
    title: "Guidance, Not Sales",
    body: "We help you understand the tradeoffs so you can decide what fits your goals, timeline, and budget.",
  },
]

const commitments = [
  {
    icon: ShieldCheck,
    title: "We protect your information",
    body: "Your details are used to help you explore options — handled with care and shared only as needed to serve your request.",
  },
  {
    icon: FileText,
    title: "We disclose clearly",
    body: "Estimates are labeled as estimates. Our role, our operating entity, and participating providers are described plainly.",
  },
  {
    icon: BadgeCheck,
    title: "We present licensing honestly",
    body: "We only display licensing, ratings, and availability claims once they have been verified.",
  },
]

export default function AboutPage() {
  const nmls = show(siteConfig.licensing.companyNmls)
  const legalEntity = show(siteConfig.brand.legalEntity)
  const businessModel = show(siteConfig.brand.businessModel)
  const email = show(siteConfig.contact.supportEmail)
  const hours = show(siteConfig.contact.businessHours)
  const office = show(siteConfig.contact.primaryOffice)

  return (
    <PrequalProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          {/* ============================= HERO ============================= */}
          <section className="relative overflow-hidden bg-[#182C2A] text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #fff 0, #fff 2px, transparent 2px, transparent 64px)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-1 bg-[#28564A]" />
            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
                  <Landmark className="h-3.5 w-3.5 text-white" /> Proudly built in America
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-6 max-w-3xl text-balance font-serif text-5xl font-normal leading-[1.05] sm:text-6xl md:text-7xl">
                  Helping American homeowners put the equity they earned to work
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
                  {siteConfig.brand.name} was created to give hardworking homeowners and real-estate
                  investors a faster, clearer, and more honest way to tap into the value they&apos;ve
                  built — the American dream, put to work.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PrequalButton label="Explore My Options" className="bg-[#28564A] hover:bg-[#1F483F]" />
                  <SpecialistButton
                    label="Talk to a Specialist"
                    className="border-white/30 bg-white/5 text-white hover:bg-white/10"
                  />
                </div>
              </Reveal>
            </div>
          </section>

          {/* ===================== IDENTITY / WHO WE ARE ==================== */}
          <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <Reveal>
                <div>
                  <span className="text-sm font-bold uppercase tracking-wide text-[#28564A]">
                    Who we are
                  </span>
                  <h2 className="mt-3 text-balance text-3xl font-bold text-[#182C2A] sm:text-4xl">
                    A clearer way to explore home-equity financing
                  </h2>
                  <p className="mt-5 leading-relaxed text-gray-600">
                    {siteConfig.brand.name} provides information and technology designed to help
                    homeowners understand and compare home-financing options. We combine an
                    easy-to-use online experience with knowledgeable people who explain the process
                    in language that actually makes sense.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">{disclosures.aboutGeneral}</p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-gray-200 bg-gray-50/60 p-6 shadow-sm sm:p-8">
                  <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#182C2A]">
                    <Building2 className="h-4 w-4 text-[#28564A]" /> Company snapshot
                  </h3>
                  <dl className="mt-5 space-y-4 text-sm">
                    {legalEntity ? (
                      <div>
                        <dt className="font-semibold text-gray-500">Operating entity</dt>
                        <dd className="mt-0.5 text-gray-800">{legalEntity}</dd>
                      </div>
                    ) : null}
                    {businessModel ? (
                      <div>
                        <dt className="font-semibold text-gray-500">Our role</dt>
                        <dd className="mt-0.5 capitalize text-gray-800">{businessModel}</dd>
                      </div>
                    ) : null}
                    <div>
                      <dt className="font-semibold text-gray-500">How financing is offered</dt>
                      <dd className="mt-0.5 text-gray-800">
                        {show(siteConfig.brand.sponsoringOrganization)}
                      </dd>
                    </div>
                    {nmls ? (
                      <div>
                        <dt className="font-semibold text-gray-500">Company NMLS</dt>
                        <dd className="mt-0.5 text-gray-800">
                          {nmls}{" "}
                          <a
                            href={show(siteConfig.licensing.nmlsConsumerAccessUrl) ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#182C2A] underline underline-offset-2"
                          >
                            NMLS Consumer Access
                          </a>
                        </dd>
                      </div>
                    ) : null}
                    {show(siteConfig.licensing.equalHousingOpportunity) ? (
                      <div className="flex items-center gap-2 pt-1 text-gray-800">
                        <Scale className="h-4 w-4 text-[#182C2A]" />
                        <span className="font-medium">Equal Housing Opportunity</span>
                      </div>
                    ) : null}
                  </dl>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ========================= OUR STORY =========================== */}
          <section className="bg-gray-50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4">
              <Reveal>
                <div className="mx-auto max-w-3xl text-center">
                  <span className="text-sm font-bold uppercase tracking-wide text-[#28564A]">
                    Our story
                  </span>
                  <h2 className="mt-3 text-balance text-3xl font-bold text-[#182C2A] sm:text-4xl">
                    Owning a home is the American dream. Using it shouldn&apos;t be a nightmare.
                  </h2>
                </div>
              </Reveal>

              <div className="mx-auto mt-8 max-w-3xl space-y-5 text-pretty leading-relaxed text-gray-600">
                <Reveal delay={0.05}>
                  <p>
                    Across the country, millions of Americans have done everything right. They bought
                    a home, made their payments, and quietly built real wealth in the walls around
                    them. Yet when the time came to actually use that equity — to grow a business,
                    consolidate debt, renovate, or invest — they ran into the same wall: endless
                    paperwork, confusing terms, and a process that felt stuck in a different decade.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    {siteConfig.brand.name} started with a simple frustration and a bigger belief. Our
                    founders had spent years working alongside business owners, homeowners, and
                    financial professionals, and they kept seeing the same gap. The equity was there.
                    The people deserved it. But the path to reach it was slow, opaque, and
                    unnecessarily complicated.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p>
                    So we set out to build something better — an entirely online home-equity platform
                    designed around clarity, speed, and trust. No maze of forms. No jargon. No guessing
                    about where you stand. Just a straightforward way for homeowners and investors to
                    explore their options and move forward with confidence.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="font-medium text-[#182C2A]">
                    We&apos;re proud to serve homeowners from coast to coast, and even prouder of the
                    reason we do it: the value you&apos;ve built belongs to you, and putting it to work
                    should feel empowering — not exhausting.
                  </p>
                </Reveal>
              </div>

              <div className="mt-14">
                <StoryTimeline />
              </div>
            </div>
          </section>

          {/* ========================= LEADERSHIP ========================== */}
          <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-bold uppercase tracking-wide text-[#28564A]">
                  Leadership
                </span>
                <h2 className="mt-3 text-balance text-3xl font-bold text-[#182C2A] sm:text-4xl">
                  The people behind the mission
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  A team of finance, operations, and risk professionals united by a shared belief:
                  American homeowners deserve a better way to access what they&apos;ve earned. Select
                  any leader to read their full story.
                </p>
              </div>
            </Reveal>
            <div className="mt-12">
              <LeadershipGrid />
            </div>
          </section>

          {/* ========================= OUR VALUES ========================== */}
          <section className="bg-gray-50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4">
              <Reveal>
                <div className="mx-auto max-w-2xl text-center">
                  <span className="text-sm font-bold uppercase tracking-wide text-[#28564A]">
                    What we stand for
                  </span>
                  <h2 className="mt-3 text-balance text-3xl font-bold text-[#182C2A] sm:text-4xl">
                    Values that guide every conversation
                  </h2>
                </div>
              </Reveal>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((val, i) => (
                  <Reveal key={val.title} delay={i * 0.08}>
                    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#182C2A]/5">
                        <val.icon className="h-6 w-6 text-[#182C2A]" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-[#182C2A]">{val.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{val.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ===================== PROMISE BAND ================= */}
          <section className="relative bg-[#182C2A] py-5 text-white">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#28564A]" />
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 text-center text-sm font-semibold sm:flex-row sm:gap-10">
              <span className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-white" /> Homeowner focused
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="flex items-center gap-2">
                <Landmark className="h-4 w-4 text-white" /> Guidance from real people
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white" /> Built on trust
              </span>
            </div>
          </section>

          {/* ===================== STATE AVAILABILITY ====================== */}
          <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-bold uppercase tracking-wide text-[#28564A]">
                  Where we operate
                </span>
                <h2 className="mt-3 text-balance text-3xl font-bold text-[#182C2A] sm:text-4xl">
                  Serving homeowners across the country
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  Availability expands over time. Search below to see where {siteConfig.brand.name}{" "}
                  currently supports homeowners.
                </p>
              </div>
            </Reveal>
            <div className="mt-10">
              <StateAvailability />
            </div>
          </section>

          {/* ==================== TRUST / COMMITMENTS ====================== */}
          <section className="bg-gray-50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4">
              <Reveal>
                <div className="mx-auto max-w-2xl text-center">
                  <span className="text-sm font-bold uppercase tracking-wide text-[#28564A]">
                    Trust &amp; transparency
                  </span>
                  <h2 className="mt-3 text-balance text-3xl font-bold text-[#182C2A] sm:text-4xl">
                    Our commitments to you
                  </h2>
                </div>
              </Reveal>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {commitments.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.08}>
                    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#28564A]/10">
                        <c.icon className="h-6 w-6 text-[#28564A]" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-[#182C2A]">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-sm">
                  <span className="font-semibold text-[#182C2A]">Learn more:</span>
                  <Link
                    href={show(siteConfig.licensing.licensingPageUrl) ?? "/licenses"}
                    className="inline-flex items-center gap-1 font-medium text-[#182C2A] underline underline-offset-2 hover:text-[#28564A]"
                  >
                    <FileText className="h-4 w-4" /> Licensing
                  </Link>
                  <Link
                    href={show(siteConfig.licensing.disclosuresPageUrl) ?? "/disclosures"}
                    className="inline-flex items-center gap-1 font-medium text-[#182C2A] underline underline-offset-2 hover:text-[#28564A]"
                  >
                    <ShieldCheck className="h-4 w-4" /> Disclosures
                  </Link>
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center gap-1 font-medium text-[#182C2A] underline underline-offset-2 hover:text-[#28564A]"
                    >
                      <Mail className="h-4 w-4" /> {email}
                    </a>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </section>

          {/* ========================== CONTACT CTA ======================== */}
          <section className="bg-[#182C2A] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-4xl px-4 text-center">
              <Reveal>
                <h2 className="text-balance text-3xl font-bold sm:text-4xl">
                  Ready to explore your options?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/70">
                  Get a no-obligation estimate in minutes, or talk with a specialist who can walk you
                  through the process at your pace.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <PrequalButton label="Explore My Options" className="bg-[#28564A] hover:bg-[#1F483F]" />
                  <SpecialistButton
                    label="Talk to a Specialist"
                    className="border-white/30 bg-white/5 text-white hover:bg-white/10"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/60">
                  {hours ? (
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4" /> {hours}
                    </span>
                  ) : null}
                  {email ? (
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" /> {email}
                    </span>
                  ) : null}
                  {office ? (
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {office}
                    </span>
                  ) : null}
                </div>
              </Reveal>

              <p className="mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-white/40">
                {disclosures.noObligation}
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PrequalProvider>
  )
}
