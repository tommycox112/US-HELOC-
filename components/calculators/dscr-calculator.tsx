"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  ArrowRight,
  Building2,
  TrendingUp,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Home,
  Building,
  Warehouse,
  Palmtree,
} from "lucide-react";

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
      {prefix}
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </span>
  );
}

const propertyTypes = [
  { id: "sfr", label: "Single Family", icon: Home },
  { id: "multi", label: "2-4 Units", icon: Building },
  { id: "condo", label: "Condo/Townhome", icon: Warehouse },
  { id: "str", label: "Short-Term Rental", icon: Palmtree },
];

export function DSCRCalculator() {
  const [propertyValue, setPropertyValue] = useState(400000);
  const [downPayment, setDownPayment] = useState(25);
  const [monthlyRent, setMonthlyRent] = useState(3200);
  const [propertyType, setPropertyType] = useState("sfr");
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const loanAmount = propertyValue * (1 - downPayment / 100);
  const illustrativeRate = 7.5;
  const monthlyPI = Math.round(loanAmount * (illustrativeRate / 100 / 12) / (1 - Math.pow(1 + illustrativeRate / 100 / 12, -360)));
  const estimatedTaxes = Math.round((propertyValue * 0.012) / 12);
  const estimatedInsurance = Math.round((propertyValue * 0.004) / 12);
  const totalPITIA = monthlyPI + estimatedTaxes + estimatedInsurance;
  const dscr = totalPITIA > 0 ? monthlyRent / totalPITIA : 0;

  const getDSCRStatus = () => {
    if (dscr >= 1.25) return { status: "excellent", icon: CheckCircle2, text: "Strong coverage — typically the most favorable terms" };
    if (dscr >= 1.0) return { status: "good", icon: CheckCircle2, text: "Income covers the payment based on these inputs" };
    if (dscr >= 0.75) return { status: "fair", icon: AlertCircle, text: "May be workable with conditions" };
    return { status: "low", icon: XCircle, text: "Coverage is low — consider higher rent or down payment" };
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setShowResults(false);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 1200);
  };

  const dscrStatus = getDSCRStatus();

  const statusText = (s: string) =>
    s === "excellent" ? "text-[#28564A]" : s === "good" ? "text-[#3E7C63]" : s === "fair" ? "text-[#B8860B]" : "text-[#B0453B]";

  return (
    <div className="overflow-hidden rounded-2xl border border-[#DFE6E2] bg-white shadow-[0_10px_40px_rgba(24,44,42,0.08)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#28564A] to-[#1F483F] p-6 text-white">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <Building2 className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold">DSCR Estimator</h3>
        </div>
        <p className="text-sm text-white/80">Estimate a property&apos;s debt service coverage ratio</p>
      </div>

      <div className="space-y-6 p-6">
        {/* Property Type */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-[#3E4A47]">Property Type</label>
          <div className="grid grid-cols-2 gap-2">
            {propertyTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setPropertyType(type.id)}
                  className={`flex items-center gap-2 rounded-xl border-2 p-3 text-left transition-all duration-200 ${
                    propertyType === type.id
                      ? "border-[#28564A] bg-[#EEF2ED]"
                      : "border-[#DFE6E2] hover:border-[#C4CEC8]"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#28564A]" />
                  <span className="text-sm font-medium text-[#182C2A]">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Property Value */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-[#3E4A47]">Property Value</label>
            <span className="text-lg font-bold text-[#28564A]">${propertyValue.toLocaleString()}</span>
          </div>
          <Slider
            value={[propertyValue]}
            onValueChange={(v) => setPropertyValue(v[0])}
            min={100000}
            max={3000000}
            step={10000}
            className="[&_[data-slot=slider-range]]:bg-[#28564A] [&_[data-slot=slider-thumb]]:border-[#28564A]"
          />
        </div>

        {/* Down Payment */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-[#3E4A47]">Down Payment</label>
            <span className="text-lg font-bold text-[#28564A]">
              {downPayment}% (${((propertyValue * downPayment) / 100).toLocaleString()})
            </span>
          </div>
          <Slider
            value={[downPayment]}
            onValueChange={(v) => setDownPayment(v[0])}
            min={15}
            max={50}
            step={5}
            className="[&_[data-slot=slider-range]]:bg-[#28564A] [&_[data-slot=slider-thumb]]:border-[#28564A]"
          />
          <div className="flex justify-between text-xs text-[#8A7C6A]">
            <span>15%</span>
            <span>50%</span>
          </div>
        </div>

        {/* Monthly Rent */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-[#3E4A47]">Expected Monthly Rent</label>
            <span className="text-lg font-bold text-[#28564A]">${monthlyRent.toLocaleString()}</span>
          </div>
          <Slider
            value={[monthlyRent]}
            onValueChange={(v) => setMonthlyRent(v[0])}
            min={1000}
            max={15000}
            step={100}
            className="[&_[data-slot=slider-range]]:bg-[#28564A] [&_[data-slot=slider-thumb]]:border-[#28564A]"
          />
        </div>

        {/* Live DSCR Preview */}
        <div className="rounded-xl border border-[#DFE6E2] bg-[#EEF2ED] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#52616B]">Current DSCR</p>
              <p className={`text-3xl font-bold ${statusText(dscrStatus.status)}`}>{dscr.toFixed(2)}</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <TrendingUp className={`h-7 w-7 ${statusText(dscrStatus.status)}`} />
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#D8E0DA]">
            <div
              className="h-full bg-[#28564A] transition-all duration-500"
              style={{ width: `${Math.min(100, (dscr / 1.5) * 100)}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-xs text-[#8A7C6A]">
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
          className="h-14 w-full rounded-full bg-[#28564A] text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#1F483F] hover:shadow-xl"
        >
          {isCalculating ? (
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Analyzing...
            </div>
          ) : (
            <>
              Estimate DSCR
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        {/* Results */}
        {showResults && (
          <div className="animate-in fade-in slide-in-from-bottom-4 space-y-4 duration-500">
            <div className="h-px bg-gradient-to-r from-transparent via-[#DFE6E2] to-transparent" />

            {/* DSCR Result */}
            <div className="rounded-xl border border-[#DFE6E2] bg-[#EEF2ED] p-6 text-center">
              <p className="mb-1 text-sm text-[#52616B]">Estimated DSCR</p>
              <p className={`text-5xl font-bold ${statusText(dscrStatus.status)}`}>
                <AnimatedNumber value={dscr} decimals={2} />
              </p>
              <div className={`mt-2 flex items-center justify-center gap-2 ${statusText(dscrStatus.status)}`}>
                <dscrStatus.icon className="h-5 w-5" />
                <span className="font-medium">{dscrStatus.text}</span>
              </div>
            </div>

            {/* Loan Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#F6F3EC] p-4">
                <p className="mb-1 text-xs text-[#52616B]">Est. Loan Amount</p>
                <p className="text-lg font-bold text-[#28564A]">${loanAmount.toLocaleString()}</p>
              </div>
              <div className="rounded-xl bg-[#F6F3EC] p-4">
                <p className="mb-1 text-xs text-[#52616B]">Illustrative Rate</p>
                <p className="text-lg font-bold text-[#28564A]">{illustrativeRate}%</p>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="rounded-xl bg-[#182C2A] p-4 text-white">
              <p className="mb-3 text-sm text-white/70">Illustrative Monthly Payment (PITIA)</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Principal &amp; Interest</span>
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
                <div className="my-2 h-px bg-white/20" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total PITIA</span>
                  <span>${totalPITIA.toLocaleString()}</span>
                </div>
              </div>
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
              Illustrative estimate for informational purposes only. Rate, taxes, and insurance are
              assumptions, not quotes. Actual DSCR, terms, and eligibility are determined by
              underwriting and verification.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
