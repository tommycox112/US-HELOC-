"use client"

import { useMemo, useState } from "react"
import { motion } from "motion/react"
import { Info, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { usePrequal } from "@/components/cash-out/prequal-drawer"
import { siteConfig, disclosures } from "@/lib/site-config"
import { CountUp } from "@/components/motion/reveal"

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

const creditRanges = ["740+", "700–739", "640–699", "Below 640"]
const occupancies = ["Primary residence", "Second home", "Investment property"]

export function SnapshotCard() {
  const { open } = usePrequal()
  const [value, setValue] = useState(700000)
  const [mortgage, setMortgage] = useState(360000)
  const [liens, setLiens] = useState(0)
  const [desiredCash, setDesiredCash] = useState(100000)
  const [credit, setCredit] = useState(creditRanges[0])
  const [occupancy, setOccupancy] = useState(occupancies[0])
  const [state, setState] = useState("TX")

  const maxLtv = siteConfig.loanAssumptions.maxLtvPct / 100
  const closingPct = siteConfig.loanAssumptions.defaultClosingCostPct / 100

  const r = useMemo(() => {
    const currentLiens = mortgage + liens
    const equity = Math.max(value - currentLiens, 0)
    const maxNewLoan = value * maxLtv
    const grossAvailable = Math.max(maxNewLoan - currentLiens, 0)
    const requestedNewLoan = Math.min(currentLiens + desiredCash, maxNewLoan)
    const closingCosts = requestedNewLoan * closingPct
    const netCash = Math.max(requestedNewLoan - currentLiens - closingCosts, 0)
    const newLtv = value > 0 ? (requestedNewLoan / value) * 100 : 0
    const remainingEquity = Math.max(value - requestedNewLoan, 0)
    const eligible = newLtv <= siteConfig.loanAssumptions.maxLtvPct && equity > 0
    const stateStatus = siteConfig.stateAvailability.states[state] ?? "unavailable"
    return {
      equity,
      maxNewLoan,
      grossAvailable,
      requestedNewLoan,
      closingCosts,
      netCash,
      newLtv,
      remainingEquity,
      eligible: eligible && stateStatus !== "unavailable",
      stateStatus,
      // breakdown segments of property value
      seg: {
        payoff: currentLiens,
        cash: netCash,
        costs: closingCosts,
        remaining: remainingEquity,
      },
    }
  }, [value, mortgage, liens, desiredCash, credit, occupancy, state, maxLtv, closingPct])

  const total = value || 1
  const segments = [
    { label: "Existing mortgage payoff", val: r.seg.payoff, color: "#182C2A" },
    { label: "Cash proceeds", val: r.seg.cash, color: "#28564A" },
    { label: "Estimated costs", val: r.seg.costs, color: "#94a3b8" },
    { label: "Remaining equity", val: r.seg.remaining, color: "#0d9488" },
  ]

  return (
    <TooltipProvider delayDuration={150}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl"
      >
        {/* Brand accent header */}
        <div className="h-1 w-full bg-[#28564A]" />

        <div className="border-b border-gray-100 bg-gradient-to-br from-[#EEF2ED] to-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#28564A]">Cash-Out Snapshot</p>
              <h3 className="text-lg font-bold text-[#182C2A]">Estimate your available cash</h3>
            </div>
            <ShieldCheck className="h-6 w-6 text-[#182C2A]/40" />
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-3">
            <NumberField label="Estimated property value" value={value} onChange={setValue} />
            <NumberField label="Current mortgage balance" value={mortgage} onChange={setMortgage} />
            <NumberField label="Additional liens" value={liens} onChange={setLiens} />
            <NumberField label="Desired cash amount" value={desiredCash} onChange={setDesiredCash} />
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-gray-600">Estimated credit range</Label>
              <Select value={credit} onValueChange={setCredit}>
                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {creditRanges.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="min-w-0 space-y-1.5">
                <Label className="text-xs font-medium text-gray-600">Occupancy</Label>
                <Select value={occupancy} onValueChange={setOccupancy}>
                  <SelectTrigger className="h-9 min-w-0 [&>span]:truncate"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {occupancies.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="min-w-0 space-y-1.5">
                <Label className="text-xs font-medium text-gray-600">State</Label>
                <Select value={state} onValueChange={setState}>
                  <SelectTrigger className="h-9 min-w-0 [&>span]:truncate"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.keys(siteConfig.stateAvailability.states).map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-3">
            <div className="rounded-2xl bg-[#182C2A] p-4 text-white">
              <p className="text-xs text-white/60">Estimated available cash</p>
              <CountUp value={Math.round(r.netCash)} prefix="$" className="text-3xl font-bold" />
              <p className="mt-1 text-[11px] text-white/50">Estimate only — not an approval.</p>
            </div>

            {/* Horizontal property-value breakdown */}
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
                Property value breakdown
              </div>
              <div className="flex h-4 w-full overflow-hidden rounded-full bg-gray-100">
                {segments.map((s) => (
                  <motion.div
                    key={s.label}
                    initial={{ width: 0 }}
                    animate={{ width: `${(s.val / total) * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ backgroundColor: s.color }}
                    title={`${s.label}: ${usd(s.val)}`}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1 text-[11px]">
                {segments.map((s) => (
                  <div key={s.label} className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                    <span className="text-gray-500">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <dl className="space-y-1.5 text-sm">
              <Row label="Estimated current equity" value={usd(r.equity)} />
              <Row label="Estimated new loan" value={usd(r.requestedNewLoan)} />
              <Row
                label={
                  <span className="flex items-center gap-1">
                    Est. post-transaction LTV
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button type="button" aria-label="What is LTV?">
                          <Info className="h-3.5 w-3.5 text-gray-400" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-56 text-xs">
                        Loan-to-value is calculated by dividing the estimated new loan balance by the
                        estimated property value.
                      </TooltipContent>
                    </Tooltip>
                  </span>
                }
                value={`${r.newLtv.toFixed(1)}%`}
              />
              <Row label="Est. closing-cost range" value={`${usd(r.closingCosts * 0.85)}–${usd(r.closingCosts * 1.15)}`} />
            </dl>

            <div
              className={`rounded-xl px-3 py-2 text-xs font-medium ${
                r.eligible
                  ? "bg-green-50 text-green-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {r.stateStatus === "unavailable"
                ? "Product availability varies by state — not currently available in the selected state."
                : r.eligible
                  ? "You may have potential options to review."
                  : "Requested amount may exceed typical limits — options still worth reviewing."}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-4">
          <Button
            onClick={() => open("snapshot")}
            className="h-11 w-full rounded-full bg-[#28564A] font-semibold text-white hover:bg-[#1F483F]"
          >
            Explore My Options <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-2 text-center text-[10px] leading-relaxed text-gray-400">{disclosures.estimate}</p>
        </div>
      </motion.div>
    </TooltipProvider>
  )
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (n: number) => void
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-gray-600">{label}</Label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
        <Input
          inputMode="numeric"
          className="h-9 pl-7 text-sm"
          value={value ? value.toLocaleString("en-US") : ""}
          onChange={(e) => onChange(Number(e.target.value.replace(/[^0-9]/g, "")) || 0)}
        />
      </div>
    </div>
  )
}

function Row({ label, value }: { label: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-gray-100 pb-1.5">
      <dt className="text-gray-500">{label}</dt>
      <dd className="font-semibold text-[#182C2A]">{value}</dd>
    </div>
  )
}
