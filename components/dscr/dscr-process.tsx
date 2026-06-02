import { FileText, CheckCircle, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Complete our 100% online application",
    description: "Based on rental income (No W-2s, no tax returns) and prequalification won't affect your credit score.",
  },
  {
    number: "2",
    icon: CheckCircle,
    title: "Get pre-qualified quickly, funding in as few as 5 days",
    description: "Get up to $400K funded in as few as 5 days (even complex deals close in under 9).",
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Grow your rental portfolio",
    description: "With US HELOC, you're getting fast, hassle-free funding tailored for real estate investors. No waiting, no unnecessary paperwork.",
  },
]

export function DSCRProcess() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          How to Get a DSCR Loan with US HELOC
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-background">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
