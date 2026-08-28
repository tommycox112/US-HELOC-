"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"

const LTV = 0.8

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0)
}

function parseCurrency(raw: string) {
  const digits = raw.replace(/[^0-9]/g, "")
  if (!digits) return 0
  return Math.min(Number.parseInt(digits, 10), 100_000_000)
}

export function EquityCalculator() {
  const [homeValue, setHomeValue] = useState(800_000)
  const [existingLoans, setExistingLoans] = useState(550_000)

  const { totalEquity, additionalCapacity, overLimit } = useMemo(() => {
    const equity = Math.max(0, homeValue - existingLoans)
    const capacity = Math.max(0, homeValue * LTV - existingLoans)
    return {
      totalEquity: equity,
      additionalCapacity: capacity,
      overLimit: homeValue * LTV - existingLoans <= 0,
    }
  }, [homeValue, existingLoans])

  return (
    <section id="calculator" className="bg-[#E5EBDF]">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left copy */}
        <div>
          <h2 className="max-w-md font-serif text-[34px] leading-[1.08] text-[#182C2A] md:text-[46px]">
            Explore your potential borrowing capacity.
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#52616B]">
            Use this illustration to see how property value and existing loans may affect the amount
            available for additional financing.
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#52616B]">
            <span className="font-medium text-[#182C2A]">This result is illustrative.</span> It is not a
            loan offer, approval, or property valuation.
          </p>
        </div>

        {/* Right panel */}
        <div className="rounded-2xl border border-[#DFE6E2] bg-white p-6 md:p-8">
          {/* Home value */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="home-value" className="text-[15px] font-medium text-[#182C2A]">
                Estimated home value
              </label>
              <input
                id="home-value"
                inputMode="numeric"
                value={formatCurrency(homeValue)}
                onChange={(e) => setHomeValue(parseCurrency(e.target.value))}
                className="w-36 rounded-lg border border-[#DFE6E2] bg-[#FAF9F6] px-3 py-2 text-right text-[15px] font-semibold text-[#182C2A] focus:border-[#28564A] focus:outline-none"
                aria-label="Estimated home value"
              />
            </div>
            <Slider
              value={[homeValue]}
              min={100_000}
              max={3_000_000}
              step={10_000}
              onValueChange={(v) => setHomeValue(v[0])}
              className="mt-4 [&_[data-slot=slider-range]]:bg-[#28564A] [&_[data-slot=slider-thumb]]:border-[#28564A]"
              aria-label="Estimated home value slider"
            />
          </div>

          {/* Existing loans */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label htmlFor="existing-loans" className="max-w-[60%] text-[15px] font-medium text-[#182C2A]">
                Existing loan balances
              </label>
              <input
                id="existing-loans"
                inputMode="numeric"
                value={formatCurrency(existingLoans)}
                onChange={(e) => setExistingLoans(parseCurrency(e.target.value))}
                className="w-36 rounded-lg border border-[#DFE6E2] bg-[#FAF9F6] px-3 py-2 text-right text-[15px] font-semibold text-[#182C2A] focus:border-[#28564A] focus:outline-none"
                aria-label="Total existing mortgage and other property loan balances"
              />
            </div>
            <Slider
              value={[Math.min(existingLoans, 3_000_000)]}
              min={0}
              max={3_000_000}
              step={10_000}
              onValueChange={(v) => setExistingLoans(v[0])}
              className="mt-4 [&_[data-slot=slider-range]]:bg-[#28564A] [&_[data-slot=slider-thumb]]:border-[#28564A]"
              aria-label="Existing loan balances slider"
            />
          </div>

          {/* Results */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#DFE6E2] pt-8 sm:grid-cols-2">
            <div className="rounded-xl bg-[#F6F3EC] p-4">
              <p className="text-[13px] font-medium text-[#52616B]">Estimated total home equity</p>
              <p className="mt-1.5 text-[24px] font-semibold text-[#182C2A]">{formatCurrency(totalEquity)}</p>
            </div>
            <div className="rounded-xl bg-[#28564A] p-4 text-white">
              <p className="text-[13px] font-medium text-white/80">Est. additional borrowing capacity</p>
              <p className="mt-1.5 text-[24px] font-semibold">{formatCurrency(additionalCapacity)}</p>
            </div>
          </div>

          {overLimit ? (
            <p className="mt-4 text-[13px] leading-relaxed text-[#8A7C6A]">
              Your existing balances meet or exceed the assumed limit, so this illustration shows no
              additional borrowing capacity.
            </p>
          ) : null}

          <p className="mt-5 rounded-lg bg-[#F6F3EC] px-3 py-2.5 text-center text-[13px] font-medium text-[#182C2A]">
            Illustration based on an assumed 80% combined loan-to-value limit.
          </p>

          <Link
            href="/apply"
            className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#28564A] px-6 text-[16px] font-medium text-white transition-colors hover:bg-[#1F483F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28564A]"
          >
            Explore My Options
          </Link>

          <p className="mt-5 text-[12px] leading-relaxed text-[#8A7C6A]">
            This calculator is illustrative and is not a loan offer, approval, or property valuation. Actual
            eligibility and amounts depend on lender requirements, credit, income, property details, existing
            liens, fees, and program limits.
          </p>
        </div>
      </div>
    </section>
  )
}
