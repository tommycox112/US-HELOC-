"use client"

import { useMemo, useState, useEffect } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { AlertTriangle, ArrowRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { usePrequal } from "@/components/cash-out/prequal-drawer"
import { siteConfig, disclosures, track } from "@/lib/site-config"

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

/** Monthly principal & interest via standard amortization. */
function monthlyPI(principal: number, annualRatePct: number, years: number) {
  const r = annualRatePct / 100 / 12
  const n = years * 12
  if (r === 0) return principal / n
  return (principal * r) / (1 - Math.pow(1 + r, -n))
}

function MoneyInput({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-gray-600">{label}</Label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
        <Input
          inputMode="numeric"
          className="h-10 pl-7"
          value={value ? value.toLocaleString("en-US") : ""}
          onChange={(e) => onChange(Number(e.target.value.replace(/[^0-9]/g, "")) || 0)}
        />
      </div>
    </div>
  )
}

/* ============================== Cash-Out Tab ============================== */

function CashOutCalculator() {
  const { open } = usePrequal()
  const [value, setValue] = useState(700000)
  const [first, setFirst] = useState(360000)
  const [second, setSecond] = useState(0)
  const [helocBal, setHelocBal] = useState(0)
  const [targetLtv, setTargetLtv] = useState(siteConfig.loanAssumptions.maxLtvPct)
  const [desiredCash, setDesiredCash] = useState(100000)
  const [closingPct, setClosingPct] = useState(siteConfig.loanAssumptions.defaultClosingCostPct)
  const [rate, setRate] = useState(siteConfig.loanAssumptions.defaultRatePct)
  const [term, setTerm] = useState(siteConfig.loanAssumptions.defaultTermYears)
  const [taxes, setTaxes] = useState(6000)
  const [insurance, setInsurance] = useState(1800)
  const [hoa, setHoa] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    track("cash_out_calculator_started")
  }, [])

  const c = useMemo(() => {
    const liens = first + second + helocBal
    const equity = Math.max(value - liens, 0)
    const maxNewLoan = value * (targetLtv / 100)
    const grossAvailable = Math.max(maxNewLoan - liens, 0)
    const newLoan = Math.min(liens + desiredCash, maxNewLoan)
    const closingCosts = newLoan * (closingPct / 100)
    const netProceeds = Math.max(newLoan - liens - closingCosts, 0)
    const newLtv = value > 0 ? (newLoan / value) * 100 : 0
    const remainingEquity = Math.max(value - newLoan, 0)
    const pi = monthlyPI(newLoan, rate, term)
    const pitia = pi + taxes / 12 + insurance / 12 + hoa
    const breakEvenMonths = netProceeds > 0 ? closingCosts / Math.max(pi * 0.15, 1) : 0
    return { liens, equity, maxNewLoan, grossAvailable, newLoan, closingCosts, netProceeds, newLtv, remainingEquity, pi, pitia, breakEvenMonths }
  }, [value, first, second, helocBal, targetLtv, desiredCash, closingPct, rate, term, taxes, insurance, hoa])

  const chartData = [
    { name: "Existing payoff", value: Math.round(c.liens), color: "#182C2A" },
    { name: "Cash proceeds", value: Math.round(c.netProceeds), color: "#28564A" },
    { name: "Closing costs", value: Math.round(c.closingCosts), color: "#94a3b8" },
    { name: "Remaining equity", value: Math.round(c.remainingEquity), color: "#0d9488" },
  ].filter((d) => d.value > 0)

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      {/* Inputs */}
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <MoneyInput label="Estimated property value" value={value} onChange={setValue} />
          <MoneyInput label="Current first mortgage" value={first} onChange={setFirst} />
          <MoneyInput label="Existing second mortgage" value={second} onChange={setSecond} />
          <MoneyInput label="Existing HELOC balance" value={helocBal} onChange={setHelocBal} />
          <MoneyInput label="Desired cash proceeds" value={desiredCash} onChange={setDesiredCash} />
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-gray-600">Property taxes / yr</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
              <Input inputMode="numeric" className="h-10 pl-7" value={taxes.toLocaleString("en-US")} onChange={(e) => setTaxes(Number(e.target.value.replace(/[^0-9]/g, "")) || 0)} />
            </div>
          </div>
          <MoneyInput label="Homeowners insurance / yr" value={insurance} onChange={setInsurance} />
          <MoneyInput label="HOA payment / mo" value={hoa} onChange={setHoa} />
        </div>

        <SliderRow label="Target maximum LTV" value={targetLtv} min={50} max={90} step={1} suffix="%" onChange={setTargetLtv} />
        <SliderRow label="Estimated closing-cost %" value={closingPct} min={0} max={6} step={0.1} suffix="%" onChange={setClosingPct} decimals={1} />
        <SliderRow label="Estimated interest rate" value={rate} min={siteConfig.loanAssumptions.minRatePct} max={siteConfig.loanAssumptions.maxRatePct} step={0.05} suffix="%" onChange={setRate} decimals={2} />

        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-gray-600">Loan term</Label>
          <div className="flex gap-2">
            {siteConfig.loanAssumptions.termOptions.map((t) => (
              <button
                key={t}
                onClick={() => setTerm(t)}
                className={`flex-1 rounded-xl border py-2 text-sm font-medium transition ${
                  term === t ? "border-[#28564A] bg-[#28564A] text-white" : "border-gray-200 bg-white text-gray-600 hover:border-[#182C2A]"
                }`}
              >
                {t} yr
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Outputs */}
      <div className="space-y-4">
        <div className="relative rounded-3xl border border-gray-200 bg-white p-5">
          <div className="mx-auto h-52 w-full">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <PieChart>
                  <Pie data={chartData} dataKey="value" innerRadius={58} outerRadius={82} paddingAngle={2} startAngle={90} endAngle={-270} isAnimationActive>
                    {chartData.map((d) => <Cell key={d.name} fill={d.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-2">
              <span className="text-xs text-gray-500">Est. net proceeds</span>
              <span className="text-2xl font-bold text-[#182C2A]">{usd(c.netProceeds)}</span>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            {chartData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-gray-500">{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Metric label="Current equity" value={usd(c.equity)} />
          <Metric label="Max estimated new loan" value={usd(c.maxNewLoan)} />
          <Metric label="Gross cash available" value={usd(c.grossAvailable)} />
          <Metric label="Estimated closing costs" value={usd(c.closingCosts)} />
          <Metric label="Monthly P&I" value={usd(c.pi)} accent />
          <Metric label="Est. total housing (PITIA)" value={usd(c.pitia)} accent />
          <Metric label="Post-transaction LTV" value={`${c.newLtv.toFixed(1)}%`} />
          <Metric label="Remaining equity" value={usd(c.remainingEquity)} />
        </div>

        <Button
          onClick={() => {
            track("cash_out_calculator_completed", { netProceeds: Math.round(c.netProceeds) })
            open("calculator")
          }}
          className="h-11 w-full rounded-full bg-[#28564A] font-semibold text-white hover:bg-[#1F483F]"
        >
          Explore My Options <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

/* ============================== Break-Even Tab =========================== */

function BreakEvenCalculator() {
  const [curRate, setCurRate] = useState(4.25)
  const [curBalance, setCurBalance] = useState(360000)
  const [curTermLeft, setCurTermLeft] = useState(26)
  const [newRate, setNewRate] = useState(6.75)
  const [newTerm, setNewTerm] = useState(30)
  const [closingCosts, setClosingCosts] = useState(12000)
  const [cash, setCash] = useState(100000)

  const b = useMemo(() => {
    const curPayment = monthlyPI(curBalance, curRate, curTermLeft)
    const curTotalInterest = curPayment * curTermLeft * 12 - curBalance
    const newLoan = curBalance + cash + closingCosts
    const newPayment = monthlyPI(newLoan, newRate, newTerm)
    const newTotalInterest = newPayment * newTerm * 12 - newLoan
    const paymentDiff = newPayment - curPayment
    const breakEvenMonths = paymentDiff < 0 ? closingCosts / Math.abs(paymentDiff) : Infinity
    const fiveYearCur = curPayment * 60
    const fiveYearNew = newPayment * 60 - cash
    const totalCostDiff = newTotalInterest + closingCosts - curTotalInterest
    return { curPayment, curTotalInterest, newPayment, newTotalInterest, paymentDiff, breakEvenMonths, fiveYearCur, fiveYearNew, totalCostDiff, newLoan }
  }, [curRate, curBalance, curTermLeft, newRate, newTerm, closingCosts, cash])

  const warnings: string[] = []
  if (newRate > curRate + 1) warnings.push("The proposed rate is significantly higher than your current rate.")
  if (newTerm * 12 > curTermLeft * 12 + 24) warnings.push("The loan term is being materially restarted, which may increase total interest.")
  if (closingCosts > cash * 0.5 && cash > 0) warnings.push("Closing costs are high relative to the requested cash.")
  if (!isFinite(b.breakEvenMonths)) warnings.push("With a higher payment, there is no monthly-payment break-even from savings alone.")

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Compare keeping your current mortgage with replacing it. Higher rates or a restarted term can increase long-term cost even when you receive cash today.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <SliderRow label="Current mortgage rate" value={curRate} min={2} max={10} step={0.05} suffix="%" onChange={setCurRate} decimals={2} />
          <SliderRow label="Proposed refinance rate" value={newRate} min={2} max={12} step={0.05} suffix="%" onChange={setNewRate} decimals={2} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <MoneyInput label="Current balance" value={curBalance} onChange={setCurBalance} />
          <MoneyInput label="Cash requested" value={cash} onChange={setCash} />
          <MoneyInput label="Estimated closing costs" value={closingCosts} onChange={setClosingCosts} />
          <div className="space-y-1.5">
            <Label className="text-xs font-medium text-gray-600">Remaining term (yrs)</Label>
            <Input inputMode="numeric" className="h-10" value={curTermLeft} onChange={(e) => setCurTermLeft(Number(e.target.value.replace(/[^0-9]/g, "")) || 0)} />
          </div>
        </div>
        <SliderRow label="Proposed new term" value={newTerm} min={10} max={30} step={5} suffix=" yrs" onChange={setNewTerm} />
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Metric label="Current payment (P&I)" value={usd(b.curPayment)} />
          <Metric label="New payment (P&I)" value={usd(b.newPayment)} accent />
          <Metric label="Monthly difference" value={`${b.paymentDiff >= 0 ? "+" : ""}${usd(b.paymentDiff)}`} />
          <Metric label="Cost break-even" value={isFinite(b.breakEvenMonths) ? `${Math.ceil(b.breakEvenMonths)} mo` : "—"} />
          <Metric label="Current est. remaining interest" value={usd(b.curTotalInterest)} />
          <Metric label="New est. total interest" value={usd(b.newTotalInterest)} />
          <Metric label="5-yr cost (current)" value={usd(b.fiveYearCur)} />
          <Metric label="5-yr cost (new, net cash)" value={usd(b.fiveYearNew)} />
        </div>

        <div className={`rounded-2xl p-4 ${warnings.length ? "border border-amber-200 bg-amber-50" : "border border-green-200 bg-green-50"}`}>
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
            {warnings.length ? (
              <><AlertTriangle className="h-4 w-4 text-amber-600" /><span className="text-amber-800">Things to weigh carefully</span></>
            ) : (
              <span className="text-green-800">No major warning flags based on your inputs</span>
            )}
          </div>
          {warnings.length > 0 && (
            <ul className="list-inside list-disc space-y-1 text-xs text-amber-800">
              {warnings.map((w) => <li key={w}>{w}</li>)}
            </ul>
          )}
          <p className="mt-2 text-xs text-gray-500">
            Estimated total-cost difference vs. keeping your mortgage:{" "}
            <span className="font-semibold text-[#182C2A]">
              {b.totalCostDiff >= 0 ? "+" : ""}{usd(b.totalCostDiff)}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

/* ============================== Shared bits ============================== */

function SliderRow({
  label, value, min, max, step, suffix, onChange, decimals = 0,
}: {
  label: string; value: number; min: number; max: number; step: number; suffix?: string; onChange: (n: number) => void; decimals?: number
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label className="text-xs font-medium text-gray-600">{label}</Label>
        <span className="text-sm font-bold text-[#182C2A]">{value.toFixed(decimals)}{suffix}</span>
      </div>
      <Slider value={[value]} min={min} max={max} step={step} onValueChange={(v) => onChange(v[0])} />
    </div>
  )
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-3 ${accent ? "border-[#28564A]/20 bg-[#28564A]/5" : "border-gray-200 bg-white"}`}>
      <p className="text-[11px] leading-tight text-gray-500">{label}</p>
      <p className={`mt-0.5 text-base font-bold ${accent ? "text-[#28564A]" : "text-[#182C2A]"}`}>{value}</p>
    </div>
  )
}

export function AdvancedCalculator() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
      <Tabs defaultValue="cashout">
        <TabsList className="mb-6 grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="cashout">Cash-Out Estimator</TabsTrigger>
          <TabsTrigger value="breakeven">Should I Replace My Mortgage?</TabsTrigger>
        </TabsList>
        <TabsContent value="cashout">
          <CashOutCalculator />
        </TabsContent>
        <TabsContent value="breakeven">
          <BreakEvenCalculator />
        </TabsContent>
      </Tabs>
      <p className="mt-6 border-t border-gray-100 pt-4 text-xs leading-relaxed text-gray-400">
        {disclosures.calculator}
      </p>
    </div>
  )
}
