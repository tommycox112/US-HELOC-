import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Approval process",
    usheloc: "Based on rental income (no W-2s, no tax returns)",
    traditional: "Based on personal income and DTI",
  },
  {
    feature: "Speed",
    usheloc: "Funding in as few as 5 days",
    traditional: "Can take weeks or months",
  },
  {
    feature: "Paperwork",
    usheloc: "Minimal — no tax returns, no personal income verification",
    traditional: "Extensive documentation required",
  },
  {
    feature: "Loan amounts",
    usheloc: "Up to $1M (no appraisal under $400K)",
    traditional: "Often requires appraisals regardless of loan size",
  },
  {
    feature: "Title requirements",
    usheloc: "Streamlined title process",
    traditional: "Standard title requirements with potential delays",
  },
  {
    feature: "Investor-friendly",
    usheloc: "Designed for real estate investors and corporations",
    traditional: "Often more restrictive for investors",
  },
]

export function DSCRComparison() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          US HELOC vs. Traditional Investment Property Loans
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          When it comes to financing rental properties, not all loans are created equal. {"Here's"} how 
          {"US HELOC's"} DSCR Loan stacks up against traditional options.
        </p>

        {/* Desktop Table */}
        <div className="mt-12 hidden overflow-hidden rounded-xl border bg-card lg:block">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center">
                  <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    US HELOC DSCR Loan
                  </span>
                </th>
                <th className="p-4 text-center font-semibold text-muted-foreground">
                  Traditional Investment Property Loan
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
                  <td className="p-4 text-center text-sm text-muted-foreground">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-12 space-y-4 lg:hidden">
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
                  <X className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <span className="text-xs font-medium">Traditional</span>
                    <p className="text-sm">{row.traditional}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
