import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Star, Clock } from "lucide-react"
import Link from "next/link"

export function HELOCHero() {
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
            Fast, Online HELOC Lender
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            Home Equity Line of Credit
          </h1>
          
          <p className="mt-4 text-2xl font-medium text-primary">
            Get the cash you need without leaving home
          </p>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 text-pretty">
            Apply with our 100% online application in minutes with funding in as few as 5 days. 
            No in-person appraisal needed for loans under $400K.
          </p>

          <div className="mt-8">
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="#apply">
                Find My Rate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">NMLS Licensed</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm">Equal Housing Lender</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm">Funding in as few as 5 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
