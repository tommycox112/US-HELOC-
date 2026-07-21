"use client"

import { motion } from "motion/react"
import { siteConfig } from "@/lib/site-config"

export function StoryTimeline() {
  const milestones = siteConfig.milestones.filter((m) => m.verified)

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* vertical rail */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#002868] via-[#bf0a30] to-[#002868] sm:left-1/2" />

      <ol className="space-y-8">
        {milestones.map((m, i) => {
          const left = i % 2 === 0
          return (
            <li key={m.label} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  left ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
                }`}
              >
                {/* node */}
                <span
                  className={`absolute left-4 top-1.5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#bf0a30] shadow sm:left-auto ${
                    left ? "sm:-right-[7px] sm:left-auto" : "sm:-left-[7px]"
                  }`}
                />
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#bf0a30]">
                    {m.date ? m.date : `Chapter ${i + 1}`}
                  </span>
                  <p className="mt-1 font-semibold text-[#002868]">{m.label}</p>
                </div>
              </motion.div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
