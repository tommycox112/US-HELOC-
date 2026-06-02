"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  Zap,
  Shield,
  Phone,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#002868]">
      {/* Subtle accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#BF0A30]" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left - Content */}
              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold text-[#BF0A30] mb-4">
                  Rates as low as 7.95% APR*
                </p>

                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-gray-900 text-balance">
                  See Your Rate in
                  <br />
                  <span className="text-[#BF0A30]">30 Seconds</span>
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Join thousands of Americans who{"'"}ve accessed their home
                  equity the quick and easy way.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    {
                      icon: Zap,
                      text: "Pre-qualify in minutes, not weeks",
                      color: "text-[#BF0A30]",
                    },
                    {
                      icon: Shield,
                      text: "No hidden fees or surprises",
                      color: "text-green-600",
                    },
                    {
                      icon: Clock,
                      text: "Access funds in as few as 5 days",
                      color: "text-[#002868]",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center">
                        <item.icon className={`h-4 w-4 ${item.color}`} />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust indicators */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-yellow-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">
                      Excellent
                    </span>{" "}
                    customer satisfaction
                  </span>
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-gray-50 p-8 md:p-10 border-l border-gray-100">
                <div className="space-y-5">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#002868] text-white rounded-full text-xs font-semibold mb-2">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      No Credit Impact
                    </div>
                    <p className="text-gray-500 text-xs">
                      Check your rate without affecting your score
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#002868] focus:ring-2 focus:ring-[#002868]/10 outline-none transition-all text-base"
                    />
                  </div>

                  <Button asChild className="w-full h-14 bg-[#BF0A30] hover:bg-[#9a0827] text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all">
                    <Link href="/apply">
                      Get My Personalized Rate
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  {/* Micro-copy trust text */}
                  <p className="text-[11px] text-gray-400 text-center">
                    No obligation. Secure & encrypted. By continuing, you agree
                    to our Terms and Privacy Policy.
                  </p>

                  <div className="relative py-3">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-gray-50 px-3 text-xs text-gray-400">
                        or contact us
                      </span>
                    </div>
                  </div>

                  <a href="mailto:support@usheloc.com" className="block">
                    <Button
                      variant="outline"
                      className="w-full h-12 bg-transparent border-2 border-[#002868] text-[#002868] font-semibold rounded-xl hover:bg-[#002868] hover:text-white transition-all"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      support@usheloc.com
                    </Button>
                  </a>

                  <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Shield className="h-3.5 w-3.5 text-green-500" />
                      <span>256-bit SSL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#BF0A30]" />
    </section>
  );
}
