"use client";

import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Home, DollarSign, CreditCard, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function HELOCExplainer() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#002868]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#BF0A30]/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#002868]/10 rounded-full text-[#002868] text-sm font-bold mb-6">
              <HelpCircle className="h-4 w-4" />
              <span>What is a HELOC?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              Home Equity Line of Credit, <span className="text-[#002868]">Simplified</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A HELOC lets you borrow against the equity in your home - the difference between your home{"'"}s value and what you owe.
            </p>
          </div>

          {/* Visual Explanation */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 mb-16 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-[#002868]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-[#002868]" />
                </div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Your Home Value</p>
                <p className="text-3xl font-black text-gray-900">$500,000</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-[#BF0A30]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="h-8 w-8 text-[#BF0A30]" />
                </div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Mortgage Balance</p>
                <p className="text-3xl font-black text-gray-900">$250,000</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#002868] to-[#001a4d] rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-white/70 mb-2 font-medium">Available Equity</p>
                <p className="text-3xl font-black text-white">$200,000</p>
                <p className="text-xs text-white/50 mt-2 font-medium">Up to 80% LTV</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600 bg-green-50 rounded-full py-3 px-6 w-fit mx-auto">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="font-semibold">You only pay interest on what you use</span>
            </div>
          </div>

          {/* Benefits & Risks - Plain Language */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Benefits */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                HELOC Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Lower rates than credit cards or personal loans",
                  "Only pay interest on what you borrow",
                  "Flexible access to funds when you need them",
                  "Potential tax deductions on interest (consult your tax advisor)",
                  "10-year draw period to access funds",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Things to Consider */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-amber-600" />
                Things to Consider
              </h3>
              <ul className="space-y-3">
                {[
                  "Your home is used as collateral",
                  "Variable rates may change over time",
                  "You need sufficient home equity to qualify",
                  "Monthly payments required during repayment period",
                  "Closing costs may apply (often waived with US HELOC)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-amber-200 flex items-center justify-center shrink-0 mt-0.5 text-amber-700 text-xs font-bold">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Common Uses */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-6">What Can You Use a HELOC For?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🏠", label: "Home Improvements", popular: true },
                { icon: "💳", label: "Debt Consolidation", popular: true },
                { icon: "🎓", label: "Education Costs", popular: false },
                { icon: "🚨", label: "Emergency Fund", popular: false },
                { icon: "🏢", label: "Investment Properties", popular: false },
                { icon: "💼", label: "Business Expenses", popular: false },
                { icon: "🏥", label: "Medical Bills", popular: false },
                { icon: "🎉", label: "Major Purchases", popular: false },
              ].map((use, i) => (
                <div key={i} className={`relative p-4 rounded-xl border text-center transition-all hover:shadow-md ${use.popular ? 'bg-[#002868]/5 border-[#002868]/20' : 'bg-white border-gray-100'}`}>
                  {use.popular && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] bg-[#BF0A30] text-white px-2 py-0.5 rounded-full font-bold">POPULAR</span>
                  )}
                  <span className="text-2xl mb-2 block">{use.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{use.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-[#002868] via-[#001a4d] to-[#002868] rounded-3xl p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4">Ready to Access Your Home Equity?</h3>
              <p className="text-white/80 mb-8 text-lg">See your personalized rate in 30 seconds. No impact to credit score.</p>
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-[#BF0A30] to-[#9a0827] hover:from-[#9a0827] hover:to-[#7a0620] text-white rounded-full px-10 h-16 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Link href="/apply">
                  Get My Personalized Rate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
