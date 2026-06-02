const infoItems = [
  {
    title: "What is a debt service coverage ratio (DSCR)?",
    content: "Your DSCR = Net Operating Income (NOI) / Total Debt Service. A DSCR above 1.0 means your rental income covers your loan payments—making you a solid candidate for financing.",
  },
  {
    title: "What is a DSCR Loan?",
    content: "A DSCR loan is designed for real estate investors, allowing you to qualify based on your property's rental income rather than your personal income. It's a practical option for investors who prefer not to provide traditional income documentation.",
  },
  {
    title: "Use cases of DSCR loans",
    content: "DSCR loans are great for refinancing investments, cash-out refinancing, and expanding real estate portfolios.",
  },
  {
    title: "Who should consider a DSCR loan?",
    content: "Real estate investors looking to expand their rental portfolio. Self-employed individuals who want easy qualification. Corporations needing investment property financing.",
  },
  {
    title: "How does a DSCR loan work?",
    content: "Instead of looking at your personal income, lenders check your rental income. If your DSCR meets requirements, you qualify—no W-2s needed.",
  },
  {
    title: "What property types can you use a DSCR loan for?",
    content: "Single-family residences (SFRs), condos, PUDs, and townhomes.",
  },
  {
    title: "What loan amounts does US HELOC offer?",
    content: "US HELOC offers loan amounts from $75,000 - $1,000,000. If a drive-by valuation is not available in the state for loan amounts under $400,000, a full appraisal will be required.",
  },
  {
    title: "How much can I borrow?",
    content: "Max 80% LTV for rate-and-term refinances and up to 75% for cash-out refinances.",
  },
]

export function DSCRInfo() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Everything You Need to Know About DSCR Loans
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {infoItems.map((item, index) => (
            <div key={index} className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
