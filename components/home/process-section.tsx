"use client";

import { FileText, CheckCircle2, Banknote, ArrowRight, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
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
      {count}
      {suffix}
    </span>
  );
}

const steps = [
  {
    icon: FileText,
    time: "2 min",
    title: "Apply Online",
    description:
      "Simple online form with no paperwork required. Just basic info about you and your home.",
    color: "bg-[#002868]",
  },
  {
    icon: CheckCircle2,
    time: "5 min",
    title: "Get Pre-Qualified",
    description:
      "Get a pre-qualification decision quickly. See your estimated rate and terms.",
    color: "bg-[#BF0A30]",
  },
  {
    icon: Banknote,
    time: "5 days",
    title: "Access Funds",
    description:
      "Money deposited directly to your account. Use it for anything you need.",
    color: "bg-green-600",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(stepTimer);
  }, []);

  return (
    <section className="py-20 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#002868] mb-4 bg-[#002868]/5 px-4 py-1.5 rounded-full">
            <Zap className="h-3.5 w-3.5" />
            <span>Lightning Fast Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-gray-900">
            Application to Cash
            <br />
            <span className="text-[#BF0A30]">In Under a Week</span>
          </h2>
          <p className="text-gray-500 text-base">
            While traditional lenders take{" "}
            <span className="line-through text-gray-400">45+ days</span>, our
            streamlined process gets you funded in{" "}
            <span className="font-semibold text-[#002868]">days</span>.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar (desktop) */}
          <div className="hidden md:block relative mb-10">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#002868] rounded-full transition-all duration-500"
                style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveStep(index)}
              >
                <div
                  className={`bg-white rounded-xl p-6 border-2 h-full transition-all duration-300 ${
                    index === activeStep
                      ? "border-[#002868] shadow-lg"
                      : "border-gray-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Step number */}
                  <div
                    className={`absolute -top-3 left-6 w-7 h-7 rounded-full ${step.color} text-white flex items-center justify-center text-sm font-bold`}
                  >
                    {index + 1}
                  </div>

                  {/* Time badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 ${step.color} text-white rounded-full text-xs font-semibold mb-4 mt-2`}
                  >
                    <Clock className="h-3 w-3" />
                    {step.time}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4`}
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10">
                    <div
                      className={`w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center transition-colors ${
                        index < activeStep
                          ? "border-green-500 text-green-500"
                          : "border-gray-200 text-gray-300"
                      }`}
                    >
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Comparison Bar */}
          <div className="bg-[#002868] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#BF0A30]" />

            <div className="text-center md:text-left">
              <p className="text-white/60 text-xs mb-1 font-medium">
                Total time to funding
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-white">
                  Under <CountUp end={7} />
                </span>
                <span className="text-lg font-bold text-[#BF0A30]">days</span>
              </div>
              <p className="text-white/40 text-xs mt-1">
                vs 45-60 days with traditional lenders
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center px-4 py-3 bg-white/10 rounded-xl">
                <p className="text-3xl font-black text-[#BF0A30]">
                  <CountUp end={6} suffix="x" />
                </p>
                <p className="text-white/60 text-[10px] font-semibold">
                  Faster
                </p>
              </div>
              <Button asChild className="bg-[#BF0A30] hover:bg-[#9a0827] text-white h-12 px-6 font-bold rounded-xl shadow-md hover:shadow-lg transition-all">
                <Link href="/apply">
                  Start Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
