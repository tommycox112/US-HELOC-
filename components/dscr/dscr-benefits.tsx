import { Zap, FileX, Cpu } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Fast funding",
    description: "Get up to $400K funded in as few as 5 days (even complex deals close in under 9).",
  },
  {
    icon: FileX,
    title: "No W-2s, no tax returns",
    description: "Qualify based on your rental income alone, no traditional income verification needed.",
  },
  {
    icon: Cpu,
    title: "Streamlined technology",
    description: "Our automated system quickly reviews docs, leases, and property details, cutting through red tape.",
  },
]

export function DSCRBenefits() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Your rental income just got more powerful
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-xl border bg-card p-6 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
