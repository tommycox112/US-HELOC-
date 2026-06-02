import { Check, X, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const comparisonData = [
  {
    feature: "Application",
    usheloc: "100% online, see your rate quickly",
    bankCashOut: "Requires full mortgage application",
    bankHeloc: "Varies by lender. May require bank visits",
  },
  {
    feature: "Funding Speed",
    usheloc: "As few as 5 days on loans of $400k or less",
    bankCashOut: "Varies, often 30–60 days",
    bankHeloc: "Could be weeks",
  },
  {
    feature: "Fees",
    usheloc: "No out of pocket costs",
    bankCashOut: "Varies; often includes appraisal fees, underwriting fees, title fees, often totalling up to $4,300",
    bankHeloc: "Varies; often include appraisal costs, title search, and attorney fees",
  },
  {
    feature: "Automatically Consolidate Debts",
    usheloc: "Yes, automatically consolidate your mortgage, credit cards, personal loans, and more into one easy monthly payment",
    bankCashOut: "No, can refinance mortgage but must pay off debts manually",
    bankHeloc: "No, must pay off debts manually",
  },
  {
    feature: "Redraws",
    usheloc: "Yes, US HELOC lets you redraw up to 100% during the draw period",
    bankCashOut: "No, would have to restart the entire application process",
    bankHeloc: "Yes, HELOCs allow for redraws for a finite period of time",
  },
]

export function CashOutComparison() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          How does US HELOC compare against other options
        </h2>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-xl border bg-card lg:block">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-4 text-left font-semibold"></th>
                <th className="p-4 text-center">
                  <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    US HELOC Cash-Out Refi
                  </span>
                </th>
                <th className="p-4 text-center font-semibold text-muted-foreground">
                  Traditional Bank Cash-Out Refi
                </th>
                <th className="p-4 text-center font-semibold text-muted-foreground">
                  Traditional Bank HELOC
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={row.feature} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-start gap-2 text-sm text-primary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-left">{row.usheloc}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{row.bankCashOut}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{row.bankHeloc}</td>
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
                    <span className="text-xs font-medium">Bank Cash-Out</span>
                    <p className="text-sm">{row.bankCashOut}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2 text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <span className="text-xs font-medium">Bank HELOC</span>
                    <p className="text-sm">{row.bankHeloc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          *lendingtree.com **bankrate.com ***themortgagereports.com
        </p>

        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link href="/apply">Check Your Rate</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
