const stats = [
  { value: "5 min", label: "complete the online application" },
  { value: "5 days", label: "to funding in many cases*" },
  { value: "100%", label: "online application process" },
]

export function CashOutStats() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A Faster Way to Access Your Home Equity
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            A cash-out refinance from a bank can take weeks to complete and the out-of-pocket costs 
            can be unmanageable. With US HELOC, you can consolidate your outstanding mortgage balance, 
            plus any other debts you have, into one easy payment.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border bg-card p-8 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary lg:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
