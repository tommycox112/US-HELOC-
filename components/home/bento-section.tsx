"use client";

import {
  ArrowRight,
  Zap,
  Shield,
  Wallet,
  Home,
  Percent,
  CheckCircle2,
  Smartphone,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

function CountUp({
  end,
  prefix = "",
  suffix = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1500;
    const increment = end / (duration / 16);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function BentoSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-white">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#BF0A30] mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-gray-900">
            Why Choose
            <span className="text-[#002868]"> US</span>
            <span className="text-[#BF0A30]"> HELOC</span>
          </h2>
          <p className="text-gray-500 text-base">
            Quick pre-qualification, easy process, and funding in days -- not
            weeks.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Large Card - 5 Min Approval */}
          <div
            className="lg:col-span-2 lg:row-span-2 p-6 lg:p-8 rounded-2xl border-2 border-[#002868] bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#BF0A30] text-white rounded-full text-xs font-bold">
              <Zap className="h-3.5 w-3.5" />
              <span>5 min</span>
            </div>

            <div className="flex flex-col h-full pt-6">
              <div className="w-14 h-14 rounded-xl bg-[#002868] flex items-center justify-center mb-5">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900">
                5-Minute Online Application
              </h3>
              <p className="text-gray-600 mb-6">
                Our streamlined online process delivers fast pre-qualification
                decisions. Know your estimated rate in minutes, not days.
              </p>

              {/* Timeline */}
              <div className="relative mb-6">
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-[#002868] rounded-full transition-all duration-700"
                    style={{
                      width: hoveredCard === 0 ? "100%" : "33%",
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 relative">
                  {[
                    { value: "2", unit: "min", label: "Apply", active: true },
                    {
                      value: "5",
                      unit: "min",
                      label: "Pre-Qualified",
                      active: hoveredCard === 0,
                    },
                    {
                      value: "5",
                      unit: "days",
                      label: "Funded",
                      active: hoveredCard === 0,
                    },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div
                        className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                          item.active
                            ? "bg-[#002868] text-white"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <p
                        className={`text-lg font-bold transition-colors ${item.active ? "text-[#002868]" : "text-gray-400"}`}
                      >
                        {item.value}
                        <span className="text-xs">{item.unit}</span>
                      </p>
                      <p className="text-xs text-gray-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <Button asChild className="w-full bg-[#002868] hover:bg-[#001a4d] text-white rounded-xl h-12 font-bold transition-all hover:shadow-lg">
                  <Link href="/apply">
                    Start My Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  No obligation. No impact to credit.
                </p>
              </div>
            </div>
          </div>

          {/* Zero Fees */}
          <div
            className="p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:border-green-200 transition-all duration-300 group"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-3">
              <Wallet className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-bold mb-1.5 text-gray-900">
              Zero Hidden Fees
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              No origination or appraisal fees. Ever.
            </p>
            <div className="flex flex-wrap gap-2">
              {["$0 Origination", "$0 Appraisal"].map((fee, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-md"
                >
                  {fee}
                </span>
              ))}
            </div>
          </div>

          {/* Security */}
          <div
            className="p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:border-[#002868]/20 transition-all duration-300 group"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-10 h-10 rounded-lg bg-[#002868]/10 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-[#002868]" />
            </div>
            <h3 className="text-lg font-bold mb-1.5 text-gray-900">
              Bank-Level Security
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              256-bit encryption protects your data.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-gray-500 font-medium">
                Protected & Secure
              </span>
            </div>
          </div>

          {/* Rates */}
          <div
            className="p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:border-[#BF0A30]/20 transition-all duration-300 group"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-10 h-10 rounded-lg bg-[#BF0A30]/10 flex items-center justify-center mb-3">
              <Percent className="w-5 h-5 text-[#BF0A30]" />
            </div>
            <h3 className="text-lg font-bold mb-1.5 text-gray-900">
              Competitive Rates
            </h3>
            <p className="text-3xl font-black text-[#BF0A30] mb-0.5">
              <CountUp end={7} suffix=".95%" />
            </p>
            <span className="text-xs text-gray-500">APR as low as*</span>
          </div>

          {/* Amount */}
          <div
            className="p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:border-[#002868]/20 transition-all duration-300 group"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-10 h-10 rounded-lg bg-[#002868]/10 flex items-center justify-center mb-3">
              <Home className="w-5 h-5 text-[#002868]" />
            </div>
            <h3 className="text-lg font-bold mb-1.5 text-gray-900">
              Up to $750K
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Access your home equity.
            </p>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#002868] h-1.5 rounded-full transition-all duration-700"
                style={{ width: hoveredCard === 4 ? "100%" : "75%" }}
              />
            </div>
          </div>

          {/* Full Width CTA */}
          <Link
            href="/heloc"
            className="group md:col-span-2 lg:col-span-4 p-5 md:p-6 rounded-2xl bg-[#002868] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#BF0A30]" />

            <div className="flex flex-col md:flex-row md:items-center gap-4 pl-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-[#002868]" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-white">
                  100% Online Process -- No Branch Visits
                </h3>
                <p className="text-white/60 text-sm">
                  Apply, get pre-qualified, and access funds from your phone or
                  computer.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-4">
                  {["Apply", "E-Sign", "Funded"].map((step, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span className="text-white/80 text-sm font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 px-5 py-2.5 bg-[#BF0A30] rounded-xl text-white text-sm font-bold group-hover:shadow-lg transition-all">
                  See My HELOC Options
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
