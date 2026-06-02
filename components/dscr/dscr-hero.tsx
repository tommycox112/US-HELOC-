import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Building2 } from "lucide-react"
import Link from "next/link"

export function DSCRHero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-12 text-white lg:pb-24 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary hover:bg-primary/30">
              <Building2 className="mr-1 h-3 w-3" />
              For Investment Properties
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Debt Service Coverage Ratio (DSCR) Loans
            </h1>
            
            <p className="mt-4 text-2xl font-medium text-primary">
              Invest smarter, not harder
            </p>
            
            <p className="mt-6 text-lg text-gray-300 text-pretty">
              Ready to grow your rental portfolio without jumping through hoops? With {"US HELOC's"} DSCR loan, 
              you can skip the endless paperwork and get approved based on your {"property's"} income, 
              not your personal finances. If {"you're"} refinancing, we make it simple, fast, and stress-free.
            </p>

            <div className="mt-8">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link href="/apply">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">Up to $3M</div>
                <div className="text-sm text-gray-400">Loan amounts available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-400">Online process</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="flex h-full items-center justify-center">
                <Building2 className="h-32 w-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
