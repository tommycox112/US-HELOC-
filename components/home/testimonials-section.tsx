"use client";

import { CheckCircle2 } from "lucide-react";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const testimonials = [
  {
    quote:
      "Approved in literally 5 minutes! I couldn't believe how fast it was. Funded within a week.",
    author: "Sarah M.",
    location: "Austin, TX",
    amount: "$125,000",
    rating: 5,
  },
  {
    quote:
      "After being rejected by my bank, US HELOC approved me the same day. Incredibly simple process.",
    author: "Michael R.",
    location: "Phoenix, AZ",
    amount: "$200,000",
    rating: 5,
  },
  {
    quote:
      "Best rates I found anywhere. The 5-day funding wasn't a gimmick - it actually happened!",
    author: "Jennifer C.",
    location: "Seattle, WA",
    amount: "$350,000",
    rating: 5,
  },
  {
    quote:
      "100% online from start to finish. Never had to visit a branch. This is how banking should work.",
    author: "David T.",
    location: "Denver, CO",
    amount: "$175,000",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[#BF0A30] mb-3">
            Real Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-gray-900">
            Trusted by Homeowners Nationwide
          </h2>
          <p className="text-gray-500 text-base">
            Quick approvals and fast funding -- hear it from real customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-14">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-5 leading-relaxed">
                {`"${testimonial.quote}"`}
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#002868] text-sm">
                    {testimonial.amount}
                  </p>
                  <p className="text-[10px] text-gray-400">HELOC</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges - compliance and security focused, not fake stats */}
        <div className="bg-[#002868] rounded-2xl p-6 md:p-8 max-w-5xl mx-auto">
          <p className="text-center text-white/50 text-xs font-semibold uppercase tracking-wider mb-5">
            Trusted & Verified
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "NMLS Licensed",
              "256-bit SSL Secured",
              "Equal Housing Lender",
              "U.S.-Based Support",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                <span className="text-white/80 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
