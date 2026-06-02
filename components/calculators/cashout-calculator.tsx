"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, RefreshCw, DollarSign, Percent, CheckCircle2, Clock } from "lucide-react";

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

const loanPurposes = [
  { id: "debt", label: "Debt Consolidation", icon: "💳" },
  { id: "home", label: "Home Improvement", icon: "🏠" },
  { id: "invest", label: "Investment", icon: "📈" },
  { id: "other", label: "Other", icon: "✨" },
];

export function CashoutCalculator() {
  const [homeValue, setHomeValue] = useState(600000);
  const [currentMortgage, setCurrentMortgage] = useState(350000);
  const [cashNeeded, setCashNeeded] = useState(75000);
  const [selectedPurpose, setSelectedPurpose] = useState("debt");
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const maxCashOut = Math.max(0, Math.floor((homeValue * 0.8 - currentMortgage) / 1000) * 1000);
  const newLoanAmount = currentMortgage + Math.min(cashNeeded, maxCashOut);
  const estimatedRate = 6.875;
  const monthlyPayment = Math.round(newLoanAmount * (estimatedRate / 100 / 12) / (1 - Math.pow(1 + estimatedRate / 100 / 12, -360)));
  const ltv = ((newLoanAmount / homeValue) * 100).toFixed(1);

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
      <div className="bg-gradient-to-r from-[#BF0A30] to-[#8B0000] p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="flex items-center gap-3 mb-2 relative z-10">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">Cash-Out Refi Calculator</h3>
        </div>
        <p className="text-white/80 text-sm relative z-10">Get cash from your home equity</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Home Value */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Home Value</label>
            <span className="text-lg font-bold text-[#002868]">${homeValue.toLocaleString()}</span>
          </div>
          <Slider
            value={[homeValue]}
            onValueChange={(v) => setHomeValue(v[0])}
            min={150000}
            max={2500000}
            step={10000}
            className="[&_[role=slider]]:bg-[#BF0A30] [&_[role=slider]]:border-[#BF0A30] [&_.bg-primary]:bg-[#002868]"
          />
        </div>

        {/* Current Mortgage */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Current Mortgage</label>
            <span className="text-lg font-bold text-[#002868]">${currentMortgage.toLocaleString()}</span>
          </div>
          <Slider
            value={[currentMortgage]}
            onValueChange={(v) => setCurrentMortgage(v[0])}
            min={0}
            max={homeValue * 0.75}
            step={5000}
            className="[&_[role=slider]]:bg-[#BF0A30] [&_[role=slider]]:border-[#BF0A30] [&_.bg-primary]:bg-[#002868]"
          />
        </div>

        {/* Cash Needed */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Cash Needed</label>
            <span className="text-lg font-bold text-[#BF0A30]">${Math.min(cashNeeded, maxCashOut).toLocaleString()}</span>
          </div>
          <Slider
            value={[cashNeeded]}
            onValueChange={(v) => setCashNeeded(v[0])}
            min={10000}
            max={Math.max(10000, maxCashOut)}
            step={5000}
            className="[&_[role=slider]]:bg-[#BF0A30] [&_[role=slider]]:border-[#BF0A30] [&_.bg-primary]:bg-[#BF0A30]"
          />
          <p className="text-xs text-gray-500">Max available: ${maxCashOut.toLocaleString()}</p>
        </div>

        {/* Loan Purpose */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Loan Purpose</label>
          <div className="grid grid-cols-2 gap-2">
            {loanPurposes.map((purpose) => (
              <button
                key={purpose.id}
                onClick={() => setSelectedPurpose(purpose.id)}
                className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                  selectedPurpose === purpose.id
                    ? "border-[#BF0A30] bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-lg mr-2">{purpose.icon}</span>
                <span className="text-sm font-medium">{purpose.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <Button
          onClick={handleCalculate}
          disabled={isCalculating || maxCashOut <= 0}
          className="w-full h-14 bg-[#002868] hover:bg-[#001845] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isCalculating ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Calculating...
            </div>
          ) : (
            <>
              Calculate Cash-Out
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        {/* Results */}
        {showResults && maxCashOut > 0 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="h-px bg-gradient-to-r from-[#BF0A30] via-white to-[#002868]" />
            
            <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-6 text-center border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Cash You Could Receive</p>
              <p className="text-4xl font-bold text-[#BF0A30]">
                <AnimatedNumber value={Math.min(cashNeeded, maxCashOut)} prefix="$" />
              </p>
              <div className="flex items-center justify-center gap-2 mt-2 text-green-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Funded in ~5 days</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500 mb-1">New Loan</p>
                <p className="text-base font-bold text-[#002868]">${(newLoanAmount / 1000).toFixed(0)}K</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500 mb-1">Est. Rate</p>
                <p className="text-base font-bold text-[#002868]">{estimatedRate}%</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500 mb-1">LTV</p>
                <p className="text-base font-bold text-[#002868]">{ltv}%</p>
              </div>
            </div>

            <div className="bg-[#002868] rounded-xl p-4 text-white">
              <div className="flex justify-between items-center">
                <span className="text-white/80">New Monthly Payment</span>
                <span className="text-2xl font-bold">${monthlyPayment.toLocaleString()}/mo</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-green-600 justify-center">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Great candidate for cash-out refi!</span>
            </div>

            <Button className="w-full h-12 bg-[#BF0A30] hover:bg-[#8B0000] text-white rounded-full font-semibold">
              Get Your Actual Rate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
