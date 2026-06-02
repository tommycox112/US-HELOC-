import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function DSCRCTA() {
  return (
    <section id="apply" className="bg-navy py-16 text-white lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Grow Your Rental Portfolio?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get started with a DSCR loan today. No W-2s, no tax returns. 
            Qualify based on your {"property's"} rental income.
          </p>

          <div className="mt-8">
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/apply">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            {"Prequalification won't affect your credit score"}
          </p>
        </div>
      </div>
    </section>
  )
}
