"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, ArrowRight, RefreshCw, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePrequal } from "@/components/cash-out/prequal-drawer"
import { track } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const priorities = [
  { key: "payment", label: "Lower monthly payment priority", favors: "heloc" },
  { key: "keep", label: "Keep current mortgage", favors: "heloc" },
  { key: "lump", label: "Receive lump sum", favors: "cashout" },
  { key: "flex", label: "Flexible future access", favors: "heloc" },
  { key: "fixed", label: "Fixed-rate preference", favors: "cashout" },
] as const

const cashOut = {
  title: "Cash-Out Refinance",
  best: [
    "You want one lump-sum disbursement",
    "You are open to replacing the current mortgage",
    "You want a fixed mortgage structure",
    "You need a relatively large amount",
    "The new mortgage terms support your long-term plan",
  ],
  characteristics: [
    "Replaces existing first mortgage",
    "Funds provided at closing",
    "Closing costs typically apply",
    "Fixed-rate options are usually available",
    "Interest generally applies to the entire borrowed amount",
  ],
}

const heloc = {
  title: "HELOC",
  best: [
    "You want flexible access over time",
    "You prefer to keep the current mortgage",
    "You need funds in stages",
    "You want to borrow only when needed",
    "Your current mortgage rate is favorable",
  ],
  characteristics: [
    "Usually remains behind the first mortgage",
    "Revolving access during the draw period",
    "Rates are commonly variable",
    "Payment may change over time",
    "Interest generally applies to the outstanding balance",
  ],
}

export function ComparisonToggle() {
  const { open } = usePrequal()
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
    track("cash_out_heloc_compared", { priority: key })
  }

  let cashScore = 0
  let helocScore = 0
  priorities.forEach((p) => {
    if (selected.has(p.key)) p.favors === "cashout" ? cashScore++ : helocScore++
  })
  const recommendation =
    selected.size === 0
      ? null
      : cashScore >= helocScore
        ? "A cash-out refinance may be worth reviewing"
        : "A HELOC may be worth reviewing"

  return (
    <div>
      {/* Priority toggles */}
      <div className="mx-auto mb-8 max-w-3xl">
        <p className="mb-3 text-center text-sm font-medium text-gray-600">
          Select what matters most to you:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {priorities.map((p) => (
            <button
              key={p.key}
              onClick={() => toggle(p.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                selected.has(p.key)
                  ? "border-[#28564A] bg-[#28564A] text-white shadow"
                  : "border-gray-300 bg-white text-gray-600 hover:border-[#182C2A]",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {recommendation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto mt-5 max-w-md rounded-2xl border border-[#182C2A]/15 bg-[#EEF2ED]/70 p-4 text-center"
            >
              <p className="text-sm font-semibold text-[#182C2A]">{recommendation}</p>
              <p className="mt-1 text-xs text-gray-500">
                This is educational information, not financial advice or a guarantee of suitability.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Comparison cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        <CompareCard data={cashOut} icon={RefreshCw} highlight={recommendation?.includes("cash-out")} accent="#28564A" />
        <CompareCard data={heloc} icon={Layers} highlight={recommendation?.includes("HELOC")} accent="#182C2A" />
      </div>

      <div className="mt-8 text-center">
        <Button
          onClick={() => open("comparison")}
          size="lg"
          className="rounded-full bg-[#182C2A] px-8 font-semibold text-white hover:bg-[#001b4d]"
        >
          Compare My Options <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function CompareCard({
  data,
  icon: Icon,
  highlight,
  accent,
}: {
  data: typeof cashOut
  icon: React.ElementType
  highlight?: boolean
  accent: string
}) {
  return (
    <motion.div
      animate={{
        boxShadow: highlight
          ? `0 20px 45px -20px ${accent}80`
          : "0 10px 30px -20px rgba(0,0,0,0.2)",
        borderColor: highlight ? accent : "#e5e7eb",
      }}
      className="overflow-hidden rounded-3xl border-2 bg-white"
    >
      <div className="flex items-center gap-3 border-b border-gray-100 p-6">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}15`, color: accent }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-[#182C2A]">{data.title}</h3>
      </div>
      <div className="grid gap-6 p-6 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Best considered when</p>
          <ul className="space-y-2">
            {data.best.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Characteristics</p>
          <ul className="space-y-2">
            {data.characteristics.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
