"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { track } from "@/lib/site-config"

const checklistItems = [
  "Property is not currently listed for sale",
  "Mortgage payments are current",
  "Ownership is documented",
  "Property has sufficient equity",
  "Income can be verified",
  "Existing liens can be identified",
  "Property is located in an available state",
]

export function EligibilityChecklist() {
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const toggle = (i: number) =>
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-1 text-lg font-bold text-[#002868]">Quick eligibility checklist</h3>
      <p className="mb-4 text-sm text-gray-500">
        A self-review only. Checking items does not guarantee approval.
      </p>
      <ul className="space-y-2">
        {checklistItems.map((item, i) => (
          <li key={item}>
            <button
              onClick={() => toggle(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all",
                checked.has(i)
                  ? "border-green-300 bg-green-50 text-[#002868]"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#002868]/40",
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                  checked.has(i) ? "border-green-500 bg-green-500" : "border-gray-300",
                )}
              >
                {checked.has(i) && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
              </span>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const scenarios = [
  { key: "payment", label: "Lower monthly payment", note: "Prioritizing a lower payment may mean a longer term or a different structure. Compare total interest before deciding." },
  { key: "cash", label: "Maximum cash proceeds", note: "Maximizing cash increases the new loan balance and lowers remaining equity. Weigh long-term cost against the amount needed." },
  { key: "short", label: "Shorter loan term", note: "A shorter term can reduce total interest but usually raises the monthly payment." },
  { key: "equity", label: "Preserve more equity", note: "Taking less cash keeps more equity in the home and can lower the post-transaction LTV." },
  { key: "debt", label: "Consolidate debt", note: "Consolidating unsecured debt into a mortgage may lower monthly payments but converts it into debt secured by your home." },
  { key: "keep", label: "Keep current mortgage", note: "If your current rate is favorable, a HELOC or home equity loan may be worth reviewing instead of refinancing." },
]

export function ScenarioSelector() {
  const [active, setActive] = useState(scenarios[0].key)
  const current = scenarios.find((s) => s.key === active)!

  return (
    <div>
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {scenarios.map((s) => (
          <button
            key={s.key}
            onClick={() => {
              setActive(s.key)
              track("cash_out_scenario_changed", { scenario: s.key })
            }}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
              active === s.key
                ? "border-[#002868] bg-[#002868] text-white shadow"
                : "border-gray-300 bg-white text-gray-600 hover:border-[#002868]",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#BF0A30]">{current.label}</p>
          <p className="text-lg text-gray-700">{current.note}</p>
          <p className="mt-4 text-sm text-gray-500">
            Based on your selected priority, compare cash-out refinancing with a HELOC or home equity
            loan before choosing a structure.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
