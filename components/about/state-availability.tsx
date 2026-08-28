"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const STATE_NAMES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
}

type Status = "available" | "limited" | "unavailable"

const STATUS_STYLES: Record<Status, { dot: string; chip: string; label: string }> = {
  available: {
    dot: "bg-[#0a7d4d]",
    chip: "border-[#0a7d4d]/30 bg-[#0a7d4d]/5 text-[#0a5c39]",
    label: "Available",
  },
  limited: {
    dot: "bg-[#c98a00]",
    chip: "border-[#c98a00]/30 bg-[#c98a00]/5 text-[#8a5f00]",
    label: "Limited",
  },
  unavailable: {
    dot: "bg-gray-300",
    chip: "border-gray-200 bg-gray-50 text-gray-400",
    label: "Not yet available",
  },
}

export function StateAvailability() {
  const [query, setQuery] = useState("")
  const states = siteConfig.stateAvailability.states

  const entries = useMemo(() => {
    const all = Object.entries(states) as [string, Status][]
    const q = query.trim().toLowerCase()
    const filtered = q
      ? all.filter(
          ([code]) =>
            code.toLowerCase().includes(q) || (STATE_NAMES[code] ?? "").toLowerCase().includes(q),
        )
      : all
    const order: Status[] = ["available", "limited", "unavailable"]
    return filtered.sort((a, b) => {
      const s = order.indexOf(a[1]) - order.indexOf(b[1])
      return s !== 0 ? s : (STATE_NAMES[a[0]] ?? a[0]).localeCompare(STATE_NAMES[b[0]] ?? b[0])
    })
  }, [query, states])

  const counts = useMemo(() => {
    const c: Record<Status, number> = { available: 0, limited: 0, unavailable: 0 }
    for (const [, s] of Object.entries(states) as [string, Status][]) c[s]++
    return c
  }, [states])

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4">
          {(Object.keys(STATUS_STYLES) as Status[]).map((s) => (
            <div key={s} className="flex items-center gap-2 text-sm text-gray-600">
              <span className={`h-2.5 w-2.5 rounded-full ${STATUS_STYLES[s].dot}`} />
              <span className="font-medium">{STATUS_STYLES[s].label}</span>
              <span className="text-gray-400">({counts[s]})</span>
            </div>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your state"
            aria-label="Search state availability"
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm outline-none transition-colors focus:border-[#182C2A] focus:bg-white"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {entries.map(([code, status]) => (
          <div
            key={code}
            className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-sm ${STATUS_STYLES[status].chip}`}
          >
            <span className="font-medium">{STATE_NAMES[code] ?? code}</span>
            <span className={`ml-2 h-2 w-2 shrink-0 rounded-full ${STATUS_STYLES[status].dot}`} />
          </div>
        ))}
        {entries.length === 0 ? (
          <p className="col-span-full py-6 text-center text-sm text-gray-500">
            No states match &ldquo;{query}&rdquo;.
          </p>
        ) : null}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-gray-500">
        State availability is illustrative and subject to change. Availability depends on licensing,
        program eligibility, and applicable law. Contact us to confirm current availability in your
        state.
      </p>
    </div>
  )
}
