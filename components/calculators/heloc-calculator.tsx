"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Home, TrendingUp } from "lucide-react";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 500;
    const steps = 20;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export function HELOCCalculator() {
  const [homeValue, setHomeValue] = useState(500000);
  const [mortgageBalance, setMortgageBalance] = useState(300000);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const equity = homeValue - mortgageBalance;
  const maxLine = Math.max(0, Math.floor((homeValue * 0.8 - mortgageBalance) / 1000) * 1000);

  const handleCalculate = () => {
    setIsCalculating(true);
    setShowResults(false);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 1200);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#DFE6E2] bg-white shadow-[0_10px_40px_rgba(24,44,42,0.08)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#28564A] to-[#1F483F] p-6 text-white">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <Home className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold">Equity Estimator</h3>
        </div>
        <p className="text-sm text-white/70">Estimate the equity you may be able to access</p>
      </div>

      <div className="space-y-6 p-6">
        {/* Home Value Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-[#3E4A47]">Estimated Home Value</label>
            <span className="text-lg font-bold text-[#28564A]">${homeValue.toLocaleString()}</span>
          </div>
          <Slider
            value={[homeValue]}
            onValueChange={(v) => setHomeValue(v[0])}
            min={100000}
            max={2000000}
            step={10000}
            className="[&_[data-slot=slider-range]]:bg-[#28564A] [&_[data-slot=slider-thumb]]:border-[#28564A]"
          />
          <div className="flex justify-between text-xs text-[#8A7C6A]">
            <span>$100K</span>
            <span>$2M</span>
          </div>
        </div>

        {/* Mortgage Balance Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-[#3E4A47]">Mortgage Balance</label>
            <span className="text-lg font-bold text-[#28564A]">${mortgageBalance.toLocaleString()}</span>
          </div>
          <Slider
            value={[mortgageBalance]}
            onValueChange={(v) => setMortgageBalance(v[0])}
            min={0}
            max={homeValue * 0.9}
            step={5000}
            className="[&_[data-slot=slider-range]]:bg-[#28564A] [&_[data-slot=slider-thumb]]:border-[#28564A]"
          />
          <div className="flex justify-between text-xs text-[#8A7C6A]">
            <span>$0</span>
            <span>${(homeValue * 0.9).toLocaleString()}</span>
          </div>
        </div>

        {/* Equity Display */}
        <div className="rounded-xl border border-[#DFE6E2] bg-[#EEF2ED] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#52616B]">Your Estimated Home Equity</p>
              <p className="text-2xl font-bold text-[#28564A]">${equity.toLocaleString()}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#28564A]">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <Button
          onClick={handleCalculate}
          disabled={isCalculating || maxLine <= 0}
          className="h-14 w-full rounded-full bg-[#28564A] text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#1F483F] hover:shadow-xl disabled:opacity-50"
        >
          {isCalculating ? (
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Estimating...
            </div>
          ) : (
            <>
              Estimate My Options
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        {/* Results */}
        {showResults && maxLine > 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 space-y-4 duration-500">
            <div className="h-px bg-gradient-to-r from-transparent via-[#DFE6E2] to-transparent" />

            <div className="py-4 text-center">
              <p className="mb-1 text-sm text-[#52616B]">Estimated Amount You May Access</p>
              <p className="text-4xl font-bold text-[#28564A]">
                <AnimatedNumber value={maxLine} prefix="$" />
              </p>
              <p className="mt-1 text-xs text-[#8A7C6A]">Illustrative estimate based on up to 80% combined loan-to-value</p>
            </div>

            <Button
              asChild
              className="h-12 w-full rounded-full bg-[#28564A] font-semibold text-white hover:bg-[#1F483F]"
            >
              <Link href="/apply">
                Explore My Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <p className="text-center text-xs text-[#8A7C6A]">
              This is an estimate for informational purposes only, not an offer of credit, a rate quote, or a commitment to lend. Actual availability, amounts, and terms depend on eligibility, underwriting, and verification.
            </p>
          </div>
        )}

        {showResults && maxLine <= 0 && (
          <div className="py-4 text-center text-[#52616B]">
            <p>Based on these inputs, there may not be enough equity to access at this time.</p>
            <p className="mt-2 text-sm">Try adjusting the estimated home value or mortgage balance.</p>
          </div>
        )}
      </div>
    </div>
  );
}
