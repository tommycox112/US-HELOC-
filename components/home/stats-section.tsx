"use client";

import { Zap, Clock, Home, Monitor } from "lucide-react";

const stats = [
  { icon: Zap, value: "5", unit: "min", label: "Online Application" },
  { icon: Clock, value: "5", unit: "days", label: "To Funding*" },
  { icon: Home, value: "$750", unit: "K", label: "Max Credit Line" },
  { icon: Monitor, value: "100", unit: "%", label: "Online Process" },
];

export function StatsSection() {
  return (
    <section className="py-4 bg-[#002868] relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="w-8 h-8 rounded-lg bg-[#BF0A30] flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-[#BF0A30]">
                    {stat.unit}
                  </span>
                </div>
                <span className="text-[10px] text-white/60 font-medium">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
