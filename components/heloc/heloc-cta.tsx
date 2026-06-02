import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HELOCCTA() {
  return (
    <section id="apply" className="bg-navy py-16 text-white lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Started with a HELOC
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Apply online in minutes, with funding in as few as 5 days. 
            Enjoy competitive rates and get the funds you need, fast.
          </p>

          <div className="mt-8">
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/apply">
                Find My Rate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            {"Checking your rate won't affect your credit score"}
          </p>
        </div>
      </div>
    </section>
  )
}
