"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HELOCCalculator() {
  const [homeValue, setHomeValue] = useState(800000)
  const [mortgageBalance, setMortgageBalance] = useState(550000)

  const maxBorrow = Math.max(0, Math.floor((homeValue * 0.8) - mortgageBalance))

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Much Could I Borrow with a HELOC?
          </h2>
          <p className="mt-4 text-muted-foreground">
            US HELOC offers lines of credit up to $750K. {"You'll"} need to have a good credit score, 
            have a reliable payment history, have a low enough debt-to-income ratio (DTI), 
            and have enough available equity in your home to qualify.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border bg-card p-6 shadow-lg lg:p-8">
            <p className="mb-8 text-center text-sm text-muted-foreground">
              Adjust the chart below to create the custom amount that relates to you.
            </p>

            {/* Home Value Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-medium">Current Home Value</label>
                <span className="text-2xl font-bold text-primary">{formatCurrency(homeValue)}</span>
              </div>
              <Slider
                value={[homeValue]}
                onValueChange={(value) => setHomeValue(value[0])}
                min={100000}
                max={2000000}
                step={10000}
                className="py-2"
              />
            </div>

            {/* Mortgage Balance Slider */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-medium">Remaining Mortgage Amount</label>
                <span className="text-2xl font-bold text-primary">{formatCurrency(mortgageBalance)}</span>
              </div>
              <Slider
                value={[mortgageBalance]}
                onValueChange={(value) => setMortgageBalance(value[0])}
                min={0}
                max={homeValue * 0.95}
                step={10000}
                className="py-2"
              />
            </div>

            {/* Result */}
            <div className="mt-10 rounded-xl bg-primary/10 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                *Based on borrowing 80% of your current home value
              </p>
              <p className="mt-3 text-sm">In this scenario, you could qualify to borrow up to</p>
              <p className="mt-2 text-5xl font-bold text-primary">
                {formatCurrency(Math.min(Math.max(0, maxBorrow), 750000))}
              </p>
            </div>

            <Button className="mt-8 w-full" size="lg" asChild>
              <Link href="#apply">
                Find My Rate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
