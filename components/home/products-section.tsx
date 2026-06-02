"use client";

import {
  ArrowRight,
  Home,
  RefreshCw,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "heloc",
    badge: "Most Popular",
    title: "Home Equity Line",
    description:
      "Access your home equity as needed with a flexible revolving credit line.",
    features: [
      "Up to $750K",
      "5-min pre-qualification",
      "No prepayment penalties",
    ],
    rate: "7.95%",
    icon: Home,
    href: "/heloc",
    featured: true,
  },
  {
    id: "cashout",
    badge: "6x Faster",
    title: "Cash-Out Refinance",
    description:
      "Replace your mortgage and access equity in one transaction.",
    features: ["Competitive rates", "Quick closing", "Expert advisors"],
    rate: "6.75%",
    icon: RefreshCw,
    href: "/cash-out-refinance",
    featured: false,
  },
  {
    id: "dscr",
    badge: "For Investors",
    title: "DSCR Loans",
    description:
      "Finance investment properties using rental income qualification.",
    features: ["No W-2s required", "Based on rental income", "Up to $3M"],
    rate: "7.25%",
    icon: Building2,
    href: "/dscr-loan",
    featured: false,
  },
];

export function ProductsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#BF0A30] mb-3">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-gray-900">
            Choose Your Path to
            <br />
            <span className="text-[#002868]">Home Equity</span>
          </h2>
          <p className="text-gray-500 text-base">
            Three powerful ways to unlock your equity with quick approvals and
            fast funding.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                product.featured
                  ? "bg-[#002868] text-white shadow-xl md:scale-105 z-10"
                  : "bg-white border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold ${
                  product.featured
                    ? "bg-[#BF0A30] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {product.badge}
              </div>

              <div className="p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    product.featured ? "bg-white/10" : "bg-[#002868]/10"
                  }`}
                >
                  <product.icon
                    className={`w-6 h-6 ${
                      product.featured ? "text-white" : "text-[#002868]"
                    }`}
                  />
                </div>

                <h3
                  className={`text-xl font-bold mb-2 ${
                    product.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`text-sm mb-5 leading-relaxed ${
                    product.featured ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {product.description}
                </p>

                {/* Rate */}
                <div className="mb-5">
                  <p
                    className={`text-xs mb-0.5 font-medium ${
                      product.featured ? "text-white/60" : "text-gray-500"
                    }`}
                  >
                    Rates as low as*
                  </p>
                  <p
                    className={`text-3xl font-black ${product.featured ? "text-white" : "text-[#BF0A30]"}`}
                  >
                    {product.rate}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${product.featured ? "text-white/60" : "text-gray-500"}`}
                  >
                    APR
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2
                        className={`h-4 w-4 shrink-0 ${product.featured ? "text-green-400" : "text-green-600"}`}
                      />
                      <span
                        className={
                          product.featured ? "text-white/80" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={product.href}>
                  <Button
                    className={`w-full h-12 font-bold rounded-xl transition-all duration-300 ${
                      product.featured
                        ? "bg-white text-[#002868] hover:bg-gray-100"
                        : "bg-[#002868] hover:bg-[#001a4d] text-white"
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
