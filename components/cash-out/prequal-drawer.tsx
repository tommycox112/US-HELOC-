"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import {
  X,
  ArrowLeft,
  ArrowRight,
  Check,
  ShieldCheck,
  Loader2,
  CalendarClock,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { disclosures, siteConfig, track } from "@/lib/site-config"

/* ----------------------------- Context ----------------------------------- */

type PrequalContextValue = { open: (source?: string) => void }
const PrequalContext = createContext<PrequalContextValue | null>(null)

export function usePrequal() {
  const ctx = useContext(PrequalContext)
  if (!ctx) throw new Error("usePrequal must be used within PrequalProvider")
  return ctx
}

/* ------------------------------ Data ------------------------------------- */

const goals = [
  "Access cash",
  "Consolidate debt",
  "Renovate my home",
  "Replace my mortgage",
  "Reduce monthly payments",
  "Compare with a HELOC",
  "Other",
]

const propertyTypes = ["Single-family", "Condo", "Townhome", "Multi-family", "Other"]
const occupancy = ["Primary residence", "Second home", "Investment property"]
const creditRanges = ["Excellent (740+)", "Good (700–739)", "Fair (640–699)", "Below 640", "Not sure"]
const employmentTypes = ["W-2 employee", "Self-employed", "Retired", "Other"]
const timelines = ["As soon as possible", "1–3 months", "3–6 months", "Just exploring"]

const steps = ["Goal", "Property", "Request", "Profile", "Consent"] as const

type FormState = {
  goal: string
  address: string
  propertyType: string
  occupancy: string
  value: string
  mortgageBalance: string
  additionalLiens: string
  cashAmount: string
  term: string
  currentRate: string
  timeInProperty: string
  timeline: string
  firstName: string
  lastName: string
  email: string
  phone: string
  credit: string
  employment: string
  income: string
  agreeTerms: boolean
  agreeContact: boolean
  agreeSms: boolean
}

const initialForm: FormState = {
  goal: "",
  address: "",
  propertyType: "",
  occupancy: "",
  value: "",
  mortgageBalance: "",
  additionalLiens: "",
  cashAmount: "",
  term: "",
  currentRate: "",
  timeInProperty: "",
  timeline: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  credit: "",
  employment: "",
  income: "",
  agreeTerms: false,
  agreeContact: false,
  agreeSms: false,
}

/* --------------------------- UI primitives ------------------------------- */

function ChoiceGrid({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: string[]
  value: string
  onChange: (v: string) => void
  columns?: number
}) {
  return (
    <div className={cn("grid gap-2", columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2")}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
            value === opt
              ? "border-[#BF0A30] bg-[#BF0A30]/5 text-[#002868] ring-1 ring-[#BF0A30]"
              : "border-gray-200 bg-white text-gray-700 hover:border-[#002868]/40",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

function Money({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-[#002868]">
        {label}
      </Label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
        <Input
          id={id}
          inputMode="numeric"
          className="pl-7"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ""))}
        />
      </div>
    </div>
  )
}

/* --------------------------- Drawer body --------------------------------- */

function DrawerBody({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const set = <K extends keyof FormState>(key: K, val: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: val }))

  const validateStep = (): boolean => {
    const errs: string[] = []
    if (step === 0 && !form.goal) errs.push("Please select a financing goal.")
    if (step === 1) {
      if (!form.propertyType) errs.push("Select a property type.")
      if (!form.occupancy) errs.push("Select property occupancy.")
      if (!form.value) errs.push("Enter an estimated property value.")
    }
    if (step === 3) {
      if (!form.firstName) errs.push("Enter your first name.")
      if (!form.lastName) errs.push("Enter your last name.")
      if (!form.email || !form.email.includes("@")) errs.push("Enter a valid email.")
    }
    if (step === 4) {
      if (!form.agreeTerms) errs.push("You must agree to the Terms and Privacy Policy.")
      if (!form.agreeContact) errs.push("Please allow us to contact you to proceed.")
    }
    setErrors(errs)
    return errs.length === 0
  }

  const next = () => {
    if (!validateStep()) return
    track("cash_out_application_step_completed", { step: steps[step] })
    if (step < steps.length - 1) {
      setStep((s) => s + 1)
    } else {
      handleSubmit()
    }
  }

  const back = () => {
    setErrors([])
    setStep((s) => Math.max(0, s - 1))
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    track("cash_out_application_submitted", { goal: form.goal })
    // CRM webhook placeholder
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  const progress = submitted ? 100 : ((step + 1) / steps.length) * 100

  if (submitted) {
    return <SuccessScreen onClose={onClose} email={form.email} />
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-gray-100 p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#BF0A30]" />
            <span className="text-sm font-semibold text-[#002868]">Secure Prequalification</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <Progress value={progress} className="h-1.5" />
        <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
          <span>
            Step {step + 1} of {steps.length}: {steps[step]}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-5">
        {errors.length > 0 && (
          <div
            role="alert"
            className="mb-4 rounded-xl border border-[#BF0A30]/30 bg-[#BF0A30]/5 p-3 text-sm text-[#8B0000]"
          >
            <ul className="list-inside list-disc space-y-0.5">
              {errors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        {step === 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002868]">What is your primary goal?</h3>
            <ChoiceGrid options={goals} value={form.goal} onChange={(v) => set("goal", v)} />
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002868]">Tell us about the property</h3>
            <div className="space-y-1.5">
              <Label htmlFor="address" className="text-sm font-medium text-[#002868]">
                Property address
              </Label>
              <Input
                id="address"
                placeholder="Start typing your address… (autocomplete placeholder)"
                value={form.address}
                onChange={(e) => set("address", e.target.value)}
              />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-[#002868]">Property type</Label>
              <ChoiceGrid options={propertyTypes} value={form.propertyType} onChange={(v) => set("propertyType", v)} columns={3} />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-[#002868]">Occupancy</Label>
              <ChoiceGrid options={occupancy} value={form.occupancy} onChange={(v) => set("occupancy", v)} columns={3} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Money id="value" label="Estimated value" value={form.value} onChange={(v) => set("value", v)} placeholder="700,000" />
              <Money id="bal" label="Current mortgage balance" value={form.mortgageBalance} onChange={(v) => set("mortgageBalance", v)} placeholder="360,000" />
            </div>
            <Money id="liens" label="Additional lien balances" value={form.additionalLiens} onChange={(v) => set("additionalLiens", v)} placeholder="0" />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002868]">Your financing request</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Money id="cash" label="Desired cash amount" value={form.cashAmount} onChange={(v) => set("cashAmount", v)} placeholder="100,000" />
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-[#002868]">Preferred loan term</Label>
                <ChoiceGrid options={["10 yr", "15 yr", "20 yr", "30 yr"]} value={form.term} onChange={(v) => set("term", v)} columns={2} />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="crate" className="text-sm font-medium text-[#002868]">
                  Current mortgage rate (%)
                </Label>
                <Input id="crate" inputMode="decimal" placeholder="e.g. 4.25" value={form.currentRate} onChange={(e) => set("currentRate", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-[#002868]">Desired timeline</Label>
                <ChoiceGrid options={timelines} value={form.timeline} onChange={(v) => set("timeline", v)} columns={1} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="tip" className="text-sm font-medium text-[#002868]">
                Expected time remaining in property
              </Label>
              <Input id="tip" placeholder="e.g. 7 years" value={form.timeInProperty} onChange={(e) => set("timeInProperty", e.target.value)} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002868]">About you</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="fn" className="text-sm font-medium text-[#002868]">First name</Label>
                <Input id="fn" autoComplete="given-name" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ln" className="text-sm font-medium text-[#002868]">Last name</Label>
                <Input id="ln" autoComplete="family-name" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="em" className="text-sm font-medium text-[#002868]">Email</Label>
              <Input id="em" type="email" inputMode="email" autoComplete="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ph" className="text-sm font-medium text-[#002868]">Phone</Label>
              <Input id="ph" type="tel" inputMode="tel" autoComplete="tel" placeholder="(555) 555-5555" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-[#002868]">Estimated credit range</Label>
              <ChoiceGrid options={creditRanges} value={form.credit} onChange={(v) => set("credit", v)} columns={1} />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-[#002868]">Employment type</Label>
              <ChoiceGrid options={employmentTypes} value={form.employment} onChange={(v) => set("employment", v)} columns={2} />
            </div>
            <Money id="inc" label="Estimated annual household income" value={form.income} onChange={(v) => set("income", v)} placeholder="150,000" />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002868]">Consent</h3>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-3">
              <Checkbox checked={form.agreeTerms} onCheckedChange={(c) => set("agreeTerms", c === true)} className="mt-0.5" />
              <span className="text-sm text-gray-700">
                I agree to the{" "}
                <a href="/terms" className="font-medium text-[#BF0A30] underline">Terms</a> and{" "}
                <a href="/privacy" className="font-medium text-[#BF0A30] underline">Privacy Policy</a>.
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-3">
              <Checkbox checked={form.agreeContact} onCheckedChange={(c) => set("agreeContact", c === true)} className="mt-0.5" />
              <span className="text-sm text-gray-700">
                I give permission to be contacted by phone and email regarding my financing request.
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-3">
              <Checkbox checked={form.agreeSms} onCheckedChange={(c) => set("agreeSms", c === true)} className="mt-0.5" />
              <span className="text-xs leading-relaxed text-gray-600">
                (Optional) By checking this box, you agree to receive text messages from {siteConfig.brand.name}{" "}
                regarding your financing request. Message frequency may vary. Message and data rates may apply.
                Reply STOP to opt out or HELP for assistance. Consent is not a condition of obtaining services.
              </span>
            </label>

            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-sm text-gray-500">
              <Upload className="mx-auto mb-1 h-5 w-5 text-gray-400" />
              Secure document upload will be available after submission.
            </div>

            <p className="text-xs leading-relaxed text-gray-500">{disclosures.noObligation}</p>
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div className="flex items-center gap-3 border-t border-gray-100 p-4">
        {step > 0 && (
          <Button variant="outline" onClick={back} className="rounded-full bg-transparent" disabled={submitting}>
            <ArrowLeft className="mr-1 h-4 w-4" /> Back
          </Button>
        )}
        <Button
          onClick={next}
          disabled={submitting}
          className="ml-auto rounded-full bg-[#BF0A30] px-6 font-semibold text-white hover:bg-[#8B0000]"
        >
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
            </>
          ) : step === steps.length - 1 ? (
            "Submit Request"
          ) : (
            <>
              Continue <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

function SuccessScreen({ onClose, email }: { onClose: () => void; email: string }) {
  const reduced = useReducedMotion() ?? false
  const ref = "USH-" + Math.random().toString(36).slice(2, 8).toUpperCase()
  return (
    <div className="flex h-full flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={reduced ? {} : { scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500"
      >
        <Check className="h-8 w-8 text-white" strokeWidth={3} />
      </motion.div>
      <h3 className="mb-2 text-2xl font-bold text-[#002868]">Your Request Has Been Received</h3>
      <p className="mb-6 max-w-sm text-sm text-gray-600">
        A financing specialist may contact you to review the information provided, clarify your
        objectives, and discuss potential next steps.
      </p>
      <div className="mb-6 w-full max-w-xs space-y-2 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Reference</span>
          <span className="font-semibold text-[#002868]">{ref}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Contact method</span>
          <span className="font-medium text-[#002868]">{email || "Email"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Documents</span>
          <span className="font-medium text-amber-600">Awaiting upload</span>
        </div>
      </div>
      <div className="flex w-full max-w-xs flex-col gap-2">
        <Button asChild className="rounded-full bg-[#002868] font-semibold text-white hover:bg-[#001b4d]">
          <a href="#schedule">
            <CalendarClock className="mr-2 h-4 w-4" /> Schedule a Call
          </a>
        </Button>
        <Button variant="outline" onClick={onClose} className="rounded-full bg-transparent">
          Return to Calculator
        </Button>
      </div>
    </div>
  )
}

/* --------------------------- Provider ------------------------------------ */

export function PrequalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const reduced = useReducedMotion() ?? false

  const open = useCallback((source?: string) => {
    track("cash_out_application_started", { source })
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  return (
    <PrequalContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Prequalification form"
              className="fixed inset-y-0 right-0 z-[101] flex w-full max-w-md flex-col bg-white shadow-2xl"
              initial={reduced ? { opacity: 0 } : { x: "100%" }}
              animate={reduced ? { opacity: 1 } : { x: 0 }}
              exit={reduced ? { opacity: 0 } : { x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#BF0A30] via-white to-[#002868]" />
              <div className="min-h-0 flex-1">
                <DrawerBody onClose={close} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PrequalContext.Provider>
  )
}
