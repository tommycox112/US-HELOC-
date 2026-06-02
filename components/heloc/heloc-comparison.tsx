import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { value: "$20B", label: "in equity unlocked with US HELOC's platform" },
  { value: "217K+", label: "households served with US HELOC's platform" },
  { value: "100%", label: "online application process" },
]

const comparisonData = [
  {
    feature: "Application",
    usheloc: "100% online, see your rate quickly",
    bank: "Varies by lender, may require in-person processes",
    personal: "Varies by lender",
  },
  {
    feature: "Payment Penalty",
    usheloc: "Never",
    bank: "Possible, varies by lender",
    personal: "Possible",
  },
  {
    feature: "Tax Deductible",
    usheloc: "For home improvement*",
    bank: "For home improvement*",
    personal: "Not tax deductible",
  },
  {
    feature: "Funding Speed",
    usheloc: "As few as 5 days on loans of $400k or less",
    bank: "Could be weeks",
    personal: "Varies, generally quick",
  },
  {
    feature: "Average APR",
    usheloc: "Competitive rates",
    bank: "Variable rates, potentially higher",
    personal: "Typically higher than HELOCs",
  },
]

export function HELOCComparison() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        {/* Stats Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The #1 non-bank home equity line of credit in the U.S.*
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No need to wait for an in-person appraisal for loans under $400K. Competitive rates. 
            Faster than a bank loan, cheaper than a personal loan.
          </p>
          
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-8 text-center text-2xl font-bold">
            How does {"US HELOC's"} HELOC compare against other options
          </h3>
          
          {/* Desktop Table */}
          <div className="hidden overflow-hidden rounded-xl border bg-card lg:block">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left font-semibold"></th>
                  <th className="p-4 text-center">
                    <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                      US HELOC
                    </span>
                  </th>
                  <th className="p-4 text-center font-semibold text-muted-foreground">
                    Traditional Bank HELOC*
                  </th>
                  <th className="p-4 text-center font-semibold text-muted-foreground">
                    Average Personal Loan**
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex items-center gap-2 text-sm text-primary">
                        <Check className="h-4 w-4" />
                        {row.usheloc}
                      </div>
                    </td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{row.bank}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{row.personal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 lg:hidden">
            {comparisonData.map((row) => (
              <div key={row.feature} className="rounded-xl border bg-card p-4">
                <h4 className="font-semibold">{row.feature}</h4>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2 rounded-lg bg-primary/10 p-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <span className="text-xs font-medium text-primary">US HELOC</span>
                      <p className="text-sm">{row.usheloc}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 text-muted-foreground">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      <span className="text-xs font-medium">Bank HELOC</span>
                      <p className="text-sm">{row.bank}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            *lendingtree.com &nbsp; **money.usnews.com
          </p>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link href="#apply">Find My Rate</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
