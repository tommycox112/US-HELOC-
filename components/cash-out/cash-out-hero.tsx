import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function CashOutHero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-12 text-white lg:pb-24 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary hover:bg-primary/30">
            <Zap className="mr-1 h-3 w-3" />
            6x Faster Than Traditional Refinance
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            Get Cash <span className="text-primary">6x Faster</span>
          </h1>
          
          <p className="mt-4 text-2xl font-medium text-gray-300">
            with US HELOC vs. a Traditional Refi
          </p>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 text-pretty">
            US HELOC lets you tap your home equity, consolidate debts, and refinance your existing 
            mortgage from home with one easy online-only application!
          </p>

          <div className="mt-8">
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/apply">
                Check Your Rate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
