import { Home, CreditCard, GraduationCap, Briefcase, Umbrella, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const useCases = [
  {
    icon: Home,
    title: "Home improvement",
    description: "Finance your next project.",
  },
  {
    icon: CreditCard,
    title: "High interest debt consolidation",
    description: "Tap equity to simplify debt into one easy payment.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Pay for college tuition at a lower rate.",
  },
  {
    icon: Briefcase,
    title: "Fund Business",
    description: "Finance your business ventures.",
  },
  {
    icon: Umbrella,
    title: "Retirement",
    description: "Major purchases, and more.",
  },
]

export function HELOCUseCases() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          What can I use a home equity line of credit for?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          A HELOC can be used for many different purposes such as:
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <useCase.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{useCase.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{useCase.description}</p>
              <Link
                href="#learn-more"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Learn more
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#apply">Find My Rate</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
