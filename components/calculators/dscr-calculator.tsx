"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Building2, TrendingUp, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

function AnimatedNumber({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
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
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}{decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue).toLocaleString()}{suffix}
    </span>
  );
}

const propertyTypes = [
  { id: "sfr", label: "Single Family", icon: "🏠" },
  { id: "multi", label: "2-4 Units", icon: "🏘️" },
  { id: "condo", label: "Condo/Townhome", icon: "🏢" },
  { id: "str", label: "Short-Term Rental", icon: "🏖️" },
];

export function DSCRCalculator() {
  const [propertyValue, setPropertyValue] = useState(400000);
  const [downPayment, setDownPayment] = useState(25);
  const [monthlyRent, setMonthlyRent] = useState(3200);
  const [propertyType, setPropertyType] = useState("sfr");
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const loanAmount = propertyValue * (1 - downPayment / 100);
  const estimatedRate = 7.5;
  const monthlyPI = Math.round(loanAmount * (estimatedRate / 100 / 12) / (1 - Math.pow(1 + estimatedRate / 100 / 12, -360)));
  const estimatedTaxes = Math.round(propertyValue * 0.012 / 12);
  const estimatedInsurance = Math.round(propertyValue * 0.004 / 12);
  const totalPITIA = monthlyPI + estimatedTaxes + estimatedInsurance;
  const dscr = totalPITIA > 0 ? monthlyRent / totalPITIA : 0;

  const getDSCRStatus = () => {
    if (dscr >= 1.25) return { status: "excellent", color: "green", icon: CheckCircle2, text: "Excellent - Best rates available" };
    if (dscr >= 1.0) return { status: "good", color: "blue", icon: CheckCircle2, text: "Good - You qualify" };
    if (dscr >= 0.75) return { status: "fair", color: "yellow", icon: AlertCircle, text: "May qualify with conditions" };
    return { status: "low", color: "red", icon: XCircle, text: "May not qualify - increase rent or down payment" };
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setShowResults(false);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };

  const dscrStatus = getDSCRStatus();

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#002868] via-[#1a3a7a] to-[#002868] p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 mb-2 relative z-10">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">DSCR Loan Calculator</h3>
        </div>
        <p className="text-white/80 text-sm relative z-10">Calculate your debt service coverage ratio</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Property Type */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Property Type</label>
          <div className="grid grid-cols-2 gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setPropertyType(type.id)}
                className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                  propertyType === type.id
                    ? "border-[#002868] bg-blue-50 scale-[1.02]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-lg mr-2">{type.icon}</span>
                <span className="text-sm font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Property Value */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Property Value</label>
            <span className="text-lg font-bold text-[#002868]">${propertyValue.toLocaleString()}</span>
          </div>
          <Slider
            value={[propertyValue]}
            onValueChange={(v) => setPropertyValue(v[0])}
            min={100000}
            max={3000000}
            step={10000}
            className="[&_[role=slider]]:bg-[#002868] [&_[role=slider]]:border-[#002868] [&_.bg-primary]:bg-[#002868]"
          />
        </div>

        {/* Down Payment */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Down Payment</label>
            <span className="text-lg font-bold text-[#002868]">{downPayment}% (${(propertyValue * downPayment / 100).toLocaleString()})</span>
          </div>
          <Slider
            value={[downPayment]}
            onValueChange={(v) => setDownPayment(v[0])}
            min={15}
            max={50}
            step={5}
            className="[&_[role=slider]]:bg-[#002868] [&_[role=slider]]:border-[#002868] [&_.bg-primary]:bg-[#002868]"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>15%</span>
            <span>50%</span>
          </div>
        </div>

        {/* Monthly Rent */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Expected Monthly Rent</label>
            <span className="text-lg font-bold text-[#BF0A30]">${monthlyRent.toLocaleString()}</span>
          </div>
          <Slider
            value={[monthlyRent]}
            onValueChange={(v) => setMonthlyRent(v[0])}
            min={1000}
            max={15000}
            step={100}
            className="[&_[role=slider]]:bg-[#BF0A30] [&_[role=slider]]:border-[#BF0A30] [&_.bg-primary]:bg-[#BF0A30]"
          />
        </div>

        {/* Live DSCR Preview */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current DSCR</p>
              <p className={`text-3xl font-bold ${
                dscr >= 1.25 ? "text-green-600" : dscr >= 1.0 ? "text-blue-600" : dscr >= 0.75 ? "text-yellow-600" : "text-red-600"
              }`}>
                {dscr.toFixed(2)}
              </p>
            </div>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
              dscr >= 1.0 ? "bg-green-100" : "bg-red-100"
            }`}>
              <TrendingUp className={`w-7 h-7 ${dscr >= 1.0 ? "text-green-600" : "text-red-600"}`} />
            </div>
          </div>
          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                dscr >= 1.25 ? "bg-green-500" : dscr >= 1.0 ? "bg-blue-500" : dscr >= 0.75 ? "bg-yellow-500" : "bg-red-500"
              }`}
              style={{ width: `${Math.min(100, (dscr / 1.5) * 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0.75</span>
            <span>1.0</span>
            <span>1.25</span>
            <span>1.5+</span>
          </div>
        </div>

        {/* Calculate Button */}
        <Button
          onClick={handleCalculate}
          disabled={isCalculating}
          className="w-full h-14 bg-[#BF0A30] hover:bg-[#8B0000] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isCalculating ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Analyzing...
            </div>
          ) : (
            <>
              Calculate DSCR Loan
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        {/* Results */}
        {showResults && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="h-px bg-gradient-to-r from-[#002868] via-white to-[#BF0A30]" />

            {/* DSCR Result */}
            <div className={`rounded-xl p-6 text-center border-2 ${
              dscrStatus.status === "excellent" ? "bg-green-50 border-green-200" :
              dscrStatus.status === "good" ? "bg-blue-50 border-blue-200" :
              dscrStatus.status === "fair" ? "bg-yellow-50 border-yellow-200" :
              "bg-red-50 border-red-200"
            }`}>
              <p className="text-sm text-gray-600 mb-1">Your DSCR Ratio</p>
              <p className={`text-5xl font-bold ${
                dscrStatus.status === "excellent" ? "text-green-600" :
                dscrStatus.status === "good" ? "text-blue-600" :
                dscrStatus.status === "fair" ? "text-yellow-600" :
                "text-red-600"
              }`}>
                <AnimatedNumber value={dscr} decimals={2} />
              </p>
              <div className={`flex items-center justify-center gap-2 mt-2 ${
                dscrStatus.status === "excellent" ? "text-green-600" :
                dscrStatus.status === "good" ? "text-blue-600" :
                dscrStatus.status === "fair" ? "text-yellow-600" :
                "text-red-600"
              }`}>
                <dscrStatus.icon className="w-5 h-5" />
                <span className="font-medium">{dscrStatus.text}</span>
              </div>
            </div>

            {/* Loan Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Loan Amount</p>
                <p className="text-lg font-bold text-[#002868]">${loanAmount.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Est. Rate</p>
                <p className="text-lg font-bold text-[#002868]">{estimatedRate}%</p>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="bg-[#002868] rounded-xl p-4 text-white">
              <p className="text-white/70 text-sm mb-3">Monthly Payment Breakdown (PITIA)</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Principal & Interest</span>
                  <span>${monthlyPI.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Est. Taxes</span>
                  <span>${estimatedTaxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Est. Insurance</span>
                  <span>${estimatedInsurance.toLocaleString()}</span>
                </div>
                <div className="h-px bg-white/20 my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total PITIA</span>
                  <span>${totalPITIA.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {dscr >= 0.75 && (
              <Button className="w-full h-12 bg-[#BF0A30] hover:bg-[#8B0000] text-white rounded-full font-semibold">
                Get Pre-Qualified Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
