import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Users,
  Shield,
  Zap,
  MapPin,
  Phone,
  Mail,
  Building2,
  Target,
  Heart,
  Award,
  Flag,
  Home,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | US HELOC",
  description:
    "The story of US HELOC - built in America to help homeowners and investors unlock the equity they have worked hard to earn. Meet the team behind the mission.",
};

const values = [
  {
    icon: Zap,
    title: "Speed & Simplicity",
    description:
      "Accessing your home equity shouldn't take weeks of paperwork. Our process is built to move quickly while keeping you informed at every step.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "No hidden fees, no surprises. We believe in plain-English communication about rates, terms, and the entire lending process.",
  },
  {
    icon: Heart,
    title: "Homeowner First",
    description:
      "Every decision starts with one question: does this help the homeowner? Your financial goals sit at the center of everything we do.",
  },
  {
    icon: Target,
    title: "Built to Last",
    description:
      "We grow responsibly - balancing opportunity with discipline, compliance, and trust so we can serve American homeowners for the long haul.",
  },
];

const milestones = [
  { year: "The Idea", description: "US HELOC was founded to modernize an outdated home equity process" },
  { year: "Nationwide", description: "Built to serve homeowners and investors across the United States" },
  { year: "100% Online", description: "A fully digital application and closing experience, start to finish" },
  { year: "Growing", description: "Expanding products to serve more homeowners, families, and investors" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#002868] py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#002868] to-[#001a4a]" />
          {/* Flag stripe accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#BF0A30]" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6 ring-1 ring-white/20">
                <Flag className="w-4 h-4 text-[#BF0A30] fill-[#BF0A30]" />
                <span className="text-sm font-medium">Proudly built in America</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
                Helping American homeowners access the equity they earned
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto text-pretty">
                US HELOC was created to give hardworking homeowners and real
                estate investors a faster, clearer, and more honest way to tap
                into the value they have built - the American dream, put to work.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-sm font-bold text-[#BF0A30] mb-4 uppercase tracking-wider">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
                Owning a home is the American dream. Using it shouldn&apos;t be a nightmare.
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Across the country, millions of Americans have done everything
                right. They bought a home, made their payments, and quietly built
                real wealth in the walls around them. Yet when the time came to
                actually use that equity - to grow a business, consolidate debt,
                renovate, or invest - they ran into the same wall: endless
                paperwork, confusing terms, and a process that felt stuck in a
                different decade.
              </p>
              <p>
                US HELOC started with a simple frustration and a bigger belief.
                Our founders had spent years working alongside business owners,
                homeowners, and financial professionals, and they kept seeing the
                same gap. The equity was there. The people deserved it. But the
                path to reach it was slow, opaque, and unnecessarily complicated.
              </p>
              <p>
                So we set out to build something better - an entirely online home
                equity platform designed around clarity, speed, and trust.
                No maze of forms. No jargon. No guessing about where you stand.
                Just a straightforward way for homeowners and investors to explore
                HELOCs, home equity loans, cash-out refinancing, and DSCR
                investment financing, and move forward with confidence.
              </p>
              <p className="text-foreground font-medium">
                We are proud to serve homeowners from coast to coast, and even
                prouder of the reason we do it: the value you&apos;ve built belongs
                to you, and putting it to work should feel empowering - not
                exhausting.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-muted/30 border-y">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-bold text-[#BF0A30] mb-4 uppercase tracking-wider">
                  Our Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                  Simplifying home equity for hardworking Americans
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For too long, accessing home equity has meant endless
                  paperwork, weeks of waiting, and a frustrating process. US
                  HELOC was founded to change that.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our platform uses modern technology to streamline every step,
                  from application to funding. Whether you are a homeowner
                  looking to tap into your equity or a real estate investor
                  seeking flexible financing, we make the process fast,
                  transparent, and entirely online.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to fair, responsible lending and to treating
                  every homeowner with the honesty and respect they deserve
                  (NMLS# 1660690).
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-6 border hover:shadow-md transition-shadow"
                  >
                    <p className="text-lg font-bold text-[#002868]">
                      {milestone.year}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#BF0A30] mb-4 uppercase tracking-wider">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                The people behind the mission
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
                A team of finance, operations, and risk professionals united by a
                shared belief: American homeowners deserve a better way to access
                what they&apos;ve earned.
              </p>
            </div>

            {/* CEO - Featured Card */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-[320px_1fr] gap-0">
                  <div className="aspect-square md:aspect-auto relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202026%2C%2008_21_40%20PM-ayyqeObV4AJJy71qRs6RC8XyhlnfOM.png"
                      alt="Alexander Bacher, Chief Executive Officer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      Alexander Bacher
                    </h3>
                    <p className="text-[#BF0A30] font-semibold mb-4">
                      Chief Executive Officer &amp; Founder
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Alexander brings leadership experience across finance,
                      business development, talent acquisition, operations, and
                      strategic growth. After earning his master&apos;s degree in the
                      Netherlands, he returned with a global perspective on
                      business, leadership, and financial systems - and a passion
                      for applying it to the American market.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Working closely with business owners and financial
                      professionals, Alexander saw the same gap again and again:
                      countless American homeowners had built meaningful equity,
                      yet accessing it was slow, confusing, and outdated. That
                      realization became the foundation for US HELOC.
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic">
                      &quot;People should have the opportunity to use the value they
                      have already built - whether for business growth, debt
                      consolidation, home improvements, investments, or major life
                      goals.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CFO & COO */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* John Victor Ernesto Rodriguez - CFO */}
              <div className="bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zNbIhdNcct30E4yUZciZefr8x28VKd.png"
                    alt="John Victor Ernesto Rodriguez, Chief Financial Officer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    John Victor Ernesto Rodriguez
                  </h3>
                  <p className="text-[#BF0A30] font-semibold mb-4">
                    Chief Financial Officer
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    A finance professional with deep experience in small business
                    lending, SBA financing, and structured capital solutions.
                    John recognized the same gap in the market: many Americans had
                    significant home equity, but accessing it was slow, confusing,
                    and overly complicated.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    &quot;Homeowners should have the opportunity to benefit from what
                    they have earned - their equity, their ownership, and their
                    financial progress.&quot;
                  </p>
                </div>
              </div>

              {/* David Huffman - COO */}
              <div className="bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202026%2C%2008_30_19%20PM-pgHsrsdO3Op5ligRJMVsuzPYbPP01a.png"
                    alt="David Huffman, Chief Operating Officer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    David Huffman
                  </h3>
                  <p className="text-[#BF0A30] font-semibold mb-4">
                    Chief Operating Officer
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    David brings a strong background in business operations,
                    lending processes, and client experience. He focuses on
                    creating a smooth customer journey - from the first online
                    inquiry to final funding - so every homeowner receives clear,
                    consistent communication along the way.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    &quot;Home equity should not be locked away behind complicated
                    paperwork, slow approvals, and unclear terms.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* George Petvian - CRO */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-[320px_1fr] gap-0">
                  <div className="aspect-square md:aspect-auto relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ay85yO4tFjrw1kodtEBHz8ftr0kajV.png"
                      alt="George Petvian, Chief Risk Officer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      George Petvian
                    </h3>
                    <p className="text-[#BF0A30] font-semibold mb-4">
                      Chief Risk Officer
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      George brings a strong background in entrepreneurship, risk
                      management, business strategy, and financial
                      decision-making. As a Greek entrepreneur, he built his
                      career around identifying opportunity while respecting risk.
                      That experience taught him that successful financial
                      platforms are built on structure, discipline, compliance,
                      and trust.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      At US HELOC, George plays a key role in making sure the
                      platform grows responsibly. His focus is on risk management,
                      borrower quality, operational controls, compliance
                      awareness, and long-term stability.
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic">
                      &quot;Build a home equity platform that balances opportunity
                      with responsibility - giving qualified homeowners access to
                      capital while protecting trust, transparency, and long-term
                      financial stability.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30 border-y">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#BF0A30] mb-4 uppercase tracking-wider">
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                What we stand for
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#002868]/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#002868]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* American promise band */}
        <section className="relative py-16 bg-[#002868] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#BF0A30]" />
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/80" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <Home className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">Homeowner focused</p>
                <p className="text-white/70 text-sm mt-1">
                  Built around the value you&apos;ve worked to create
                </p>
              </div>
              <div>
                <Flag className="w-8 h-8 text-[#BF0A30] fill-[#BF0A30] mx-auto mb-3" />
                <p className="text-white font-semibold">Made in America</p>
                <p className="text-white/70 text-sm mt-1">
                  Serving homeowners and investors nationwide
                </p>
              </div>
              <div>
                <Handshake className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">Built on trust</p>
                <p className="text-white/70 text-sm mt-1">
                  Transparent terms and honest guidance, always
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#BF0A30] mb-4 uppercase tracking-wider">
                Our Products
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Solutions for every need
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl border bg-card p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  HELOC
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A flexible line of credit secured by your home. Draw funds as
                  you need them, pay interest only on what you use. Lines from
                  $15,000 to $750,000.
                </p>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="/heloc">Learn More</Link>
                </Button>
              </div>
              <div className="rounded-xl border bg-card p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Cash-Out Refinance
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Replace your current mortgage with a new loan and access the
                  difference as cash. Consolidate debts or fund large expenses.
                </p>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="/cash-out-refinance">Learn More</Link>
                </Button>
              </div>
              <div className="rounded-xl border bg-card p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  DSCR Loans
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Designed for real estate investors. Qualify based on rental
                  income, not personal income. No W-2s or tax returns needed.
                </p>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="/dscr-loan">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Careers section anchor */}
        <section id="careers" className="py-20 bg-muted/30 border-y">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-12 h-12 text-[#002868] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Join Our Team
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are always looking for talented individuals who share our
                passion for innovation and customer service. If you are
                interested in helping us reshape the home equity industry, we
                would love to hear from you.
              </p>
              <Button asChild>
                <a href="mailto:support@usheloc.com">
                  View Open Positions
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners section anchor */}
        <section id="partners" className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-12 h-12 text-[#002868] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Partner With Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work with real estate professionals, financial advisors,
                mortgage brokers, and technology partners to bring better home
                equity solutions to more Americans. Interested in partnering?
              </p>
              <Button asChild>
                <a href="mailto:support@usheloc.com">
                  Become a Partner
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-[#002868]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">
                Get in Touch
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <Phone className="w-6 h-6 text-white mx-auto mb-3" />
                  <p className="text-sm text-white/70 mb-1">Phone</p>
                  <p className="text-white font-medium">(332) 230-9248</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <Mail className="w-6 h-6 text-white mx-auto mb-3" />
                  <p className="text-sm text-white/70 mb-1">Email</p>
                  <p className="text-white font-medium">support@usheloc.com</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <MapPin className="w-6 h-6 text-white mx-auto mb-3" />
                  <p className="text-sm text-white/70 mb-1">Locations</p>
                  <p className="text-white font-medium">Miami, FL</p>
                  <p className="text-white font-medium">New York, NY</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-8">
                NMLS# 1660690 | Equal Housing Lender | Licensed in all 50 states
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
