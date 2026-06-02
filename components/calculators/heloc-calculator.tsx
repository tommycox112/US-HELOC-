"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Home, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react";

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
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export function HELOCCalculator() {
  const [homeValue, setHomeValue] = useState(500000);
  const [mortgageBalance, setMortgageBalance] = useState(300000);
  const [creditScore, setCreditScore] = useState(720);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const equity = homeValue - mortgageBalance;
  const maxLine = Math.max(0, Math.floor((homeValue * 0.8 - mortgageBalance) / 1000) * 1000);
  const estimatedRate = creditScore >= 740 ? 7.99 : creditScore >= 700 ? 8.49 : creditScore >= 660 ? 9.49 : 10.49;
  const monthlyPayment = Math.round((maxLine * 0.5 * (estimatedRate / 100 / 12)));

  const handleCalculate = () => {
    setIsCalculating(true);
    setShowResults(false);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#002868] to-[#001845] p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Home className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">HELOC Calculator</h3>
        </div>
        <p className="text-white/70 text-sm">See how much you could borrow</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Home Value Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Home Value</label>
            <span className="text-lg font-bold text-[#002868]">${homeValue.toLocaleString()}</span>
          </div>
          <Slider
            value={[homeValue]}
            onValueChange={(v) => setHomeValue(v[0])}
            min={100000}
            max={2000000}
            step={10000}
            className="[&_[role=slider]]:bg-[#BF0A30] [&_[role=slider]]:border-[#BF0A30] [&_.bg-primary]:bg-[#002868]"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>$100K</span>
            <span>$2M</span>
          </div>
        </div>

        {/* Mortgage Balance Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Mortgage Balance</label>
            <span className="text-lg font-bold text-[#002868]">${mortgageBalance.toLocaleString()}</span>
          </div>
          <Slider
            value={[mortgageBalance]}
            onValueChange={(v) => setMortgageBalance(v[0])}
            min={0}
            max={homeValue * 0.9}
            step={5000}
            className="[&_[role=slider]]:bg-[#BF0A30] [&_[role=slider]]:border-[#BF0A30] [&_.bg-primary]:bg-[#002868]"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>$0</span>
            <span>${(homeValue * 0.9).toLocaleString()}</span>
          </div>
        </div>

        {/* Credit Score Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Credit Score</label>
            <span className="text-lg font-bold text-[#002868]">{creditScore}</span>
          </div>
          <Slider
            value={[creditScore]}
            onValueChange={(v) => setCreditScore(v[0])}
            min={620}
            max={850}
            step={10}
            className="[&_[role=slider]]:bg-[#BF0A30] [&_[role=slider]]:border-[#BF0A30] [&_.bg-primary]:bg-[#002868]"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>620</span>
            <span>850</span>
          </div>
        </div>

        {/* Equity Display */}
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Your Home Equity</p>
              <p className="text-2xl font-bold text-[#002868]">${equity.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#002868] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <Button
          onClick={handleCalculate}
          disabled={isCalculating || maxLine <= 0}
          className="w-full h-14 bg-[#BF0A30] hover:bg-[#8B0000] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
        >
          {isCalculating ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Calculating...
            </div>
          ) : (
            <>
              Calculate My HELOC
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        {/* Results */}
        {showResults && maxLine > 0 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            
            <div className="text-center py-4">
              <p className="text-sm text-gray-600 mb-1">Your Estimated Credit Line</p>
              <p className="text-4xl font-bold text-[#002868]">
                <AnimatedNumber value={maxLine} prefix="$" />
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Est. APR</p>
                <p className="text-xl font-bold text-[#002868]">{estimatedRate}%</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Monthly Payment*</p>
                <p className="text-xl font-bold text-[#002868]">${monthlyPayment.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-green-600 justify-center">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">You likely qualify!</span>
            </div>

            <Button className="w-full h-12 bg-[#002868] hover:bg-[#001845] text-white rounded-full font-semibold">
              Check Your Actual Rate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-xs text-gray-400 text-center">
              *Interest-only payment on 50% of line. Rates vary based on creditworthiness.
            </p>
          </div>
        )}

        {showResults && maxLine <= 0 && (
          <div className="text-center py-4 text-gray-500">
            <p>Based on your inputs, you may not have enough equity for a HELOC.</p>
            <p className="text-sm mt-2">Try adjusting your home value or mortgage balance.</p>
          </div>
        )}
      </div>
    </div>
  );
}
