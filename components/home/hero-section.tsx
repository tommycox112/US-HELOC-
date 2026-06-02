"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle2, Lock, Sparkles } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { useState, useEffect, useRef } from "react";

function RateCheckWidget() {
  const [homeValue, setHomeValue] = useState(500000);
  const [mortgageBalance, setMortgageBalance] = useState(250000);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const equity = homeValue - mortgageBalance;
  const maxLoan = Math.floor(equity * 0.8);
  const estimatedRate = 7.95 + (mortgageBalance / homeValue > 0.6 ? 0.5 : 0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 1200);
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-700 animate-bg-pulse ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-[#002868] p-5 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-lg">Quick Rate Check</span>
              <p className="text-white/70 text-xs">No credit impact</p>
            </div>
          </div>
          <span className="text-xs bg-white/15 px-3 py-1.5 rounded-full font-semibold">
            60 SEC
          </span>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {!showResults ? (
          <>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">
                  Home Value
                </label>
                <span className="text-lg font-bold text-[#002868] tabular-nums">
                  ${homeValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={100000}
                max={2000000}
                step={10000}
                value={homeValue}
                onChange={(e) => setHomeValue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #002868 0%, #002868 ${((homeValue - 100000) / 1900000) * 100}%, #e5e7eb ${((homeValue - 100000) / 1900000) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>$100K</span>
                <span>$2M</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">
                  Mortgage Balance
                </label>
                <span className="text-lg font-bold text-[#002868] tabular-nums">
                  ${mortgageBalance.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={homeValue * 0.9}
                step={5000}
                value={mortgageBalance}
                onChange={(e) => setMortgageBalance(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #002868 0%, #002868 ${(mortgageBalance / (homeValue * 0.9)) * 100}%, #e5e7eb ${(mortgageBalance / (homeValue * 0.9)) * 100}%, #e5e7eb 100%)`,
                }}
              />
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Available Equity</span>
                <span className="text-xl font-bold text-[#002868]">
                  ${equity.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#002868] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(equity / homeValue) * 100}%` }}
                />
              </div>
            </div>

              <Button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full h-14 bg-[#BF0A30] hover:bg-[#9a0827] text-white font-bold text-base rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-70"
              >
                {isCalculating ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Checking rates...</span>
                  </div>
                ) : (
                  <>
                    Check My Rate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
          </>
        ) : (
          <div className="space-y-4 animate-scale-in">
            <div className="text-center py-2">
              <div className="inline-flex items-center gap-2 text-green-700 mb-2 bg-green-50 px-4 py-1.5 rounded-full text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span className="font-semibold">Great News!</span>
              </div>
              <p className="text-gray-600 text-sm">
                Based on your equity, you may qualify for:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#002868] rounded-xl p-4 text-white text-center">
                <p className="text-xs text-white/70 mb-1">Credit Line Up To</p>
                <p className="text-xl font-bold">${maxLoan.toLocaleString()}</p>
              </div>
              <div className="bg-[#BF0A30] rounded-xl p-4 text-white text-center">
                <p className="text-xs text-white/70 mb-1">Estimated APR</p>
                <p className="text-xl font-bold">{estimatedRate.toFixed(2)}%</p>
              </div>
            </div>

            <Button asChild className="w-full h-12 bg-[#002868] hover:bg-[#001a4d] text-white font-bold rounded-xl transition-all hover:shadow-lg">
              <Link href="/apply">
                Get My Personalized Rate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <button
              onClick={() => setShowResults(false)}
              className="w-full text-sm text-gray-500 hover:text-[#002868] transition-colors font-medium"
            >
              Adjust Values
            </button>
          </div>
        )}

        <div className="flex items-center justify-center gap-6 text-xs text-gray-400 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-green-600" />
            <span>Secure & encrypted</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
            <span>No impact to credit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#002868]/[0.03] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#BF0A30]/[0.02] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      {/* Compact Top Trust Bar */}
      <div className="relative bg-[#002868] text-white py-2.5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 text-xs">
            {[
              { text: "U.S.-Based Support" },
              { text: "SSL Secured" },
              { text: "No Obligation" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-green-400" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container relative py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div
            className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-6">
              <LogoIcon className="h-5 w-5" />
              <span className="text-xs font-semibold text-gray-600">
                Made for U.S. Homeowners
              </span>
            </div>

            {/* Headline - Clear hierarchy, bigger text, less clutter */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-gray-900 text-balance leading-[1.1]">
              Unlock Your Home Equity
              <br />
              <span className="text-[#002868]">Fast & Flexible</span>
            </h1>

            {/* Subhead - Max 2 lines */}
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Compare options without impacting your credit. Get pre-qualified in
              minutes, funded in days.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button asChild className="w-full sm:w-auto bg-[#BF0A30] hover:bg-[#9a0827] text-white font-bold px-8 h-14 text-base rounded-xl transition-all duration-300 hover:shadow-lg">
                <Link href="/apply">
                  Check My Rate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Link href="/heloc">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#002868] text-[#002868] hover:bg-[#002868] hover:text-white font-bold px-8 h-14 text-base rounded-xl transition-all duration-300 bg-transparent"
                >
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Micro-copy trust text */}
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-10">
              <span>No obligation</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>No impact to credit</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>Secure & encrypted</span>
            </div>

            {/* Quick Value Props */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["No paperwork", "No branches", "Funds in 5 days"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                    <span className="font-medium">{item}</span>
                  </span>
                )
              )}
            </div>

            {/* Trust badges - compact */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600 font-medium">
                  NMLS Licensed
                </span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#002868]" />
                <span className="text-sm text-gray-600 font-medium">
                  Equal Housing Lender
                </span>
              </div>
            </div>
          </div>

          {/* Right - Rate Check Widget */}
          <div
            className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <RateCheckWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
