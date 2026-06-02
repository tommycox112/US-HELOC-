import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  "No personal income required — Your property's cash flow does the talking.",
  "Refi with ease — Whether you need cash to renovate your rental, or to manage cash for your business, we've got you covered!",
  "Loan amounts up to $1M — And if you're borrowing under $400K, no appraisal required!",
  "Speedy closings — Streamlined title process means fewer delays.",
  "Straightforward terms — FICO 680+, DSCR > 1.0, CLTV up to 80% (75% for cash-out loans).",
]

export function DSCRFeatures() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why {"US HELOC's"} DSCR Loan is a Game Changer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Invest smarter, not harder with our investor-focused lending solution.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/apply">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-8 shadow-lg">
            <h3 className="text-xl font-semibold">Quick Qualification Check</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center justify-between border-b pb-3">
                <span className="text-muted-foreground">FICO Score</span>
                <span className="font-semibold">680+</span>
              </li>
              <li className="flex items-center justify-between border-b pb-3">
                <span className="text-muted-foreground">DSCR Requirement</span>
                <span className="font-semibold">{">"}= 1.0</span>
              </li>
              <li className="flex items-center justify-between border-b pb-3">
                <span className="text-muted-foreground">Max LTV (Rate & Term)</span>
                <span className="font-semibold">80%</span>
              </li>
              <li className="flex items-center justify-between border-b pb-3">
                <span className="text-muted-foreground">Max LTV (Cash-Out)</span>
                <span className="font-semibold">75%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Loan Amounts</span>
                <span className="font-semibold">$75K - $1M</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
