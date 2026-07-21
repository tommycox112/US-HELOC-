"use client"

import { ArrowRight, Phone, CalendarClock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePrequal } from "@/components/cash-out/prequal-drawer"
import { siteConfig, show, track } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function PrequalButton({
  label = "Check My Options",
  source,
  variant = "primary",
  size = "lg",
  className,
}: {
  label?: string
  source?: string
  variant?: "primary" | "navy" | "outline" | "white"
  size?: "default" | "lg"
  className?: string
}) {
  const { open } = usePrequal()
  const styles = {
    primary: "bg-[#BF0A30] text-white hover:bg-[#8B0000]",
    navy: "bg-[#002868] text-white hover:bg-[#001b4d]",
    outline: "border border-[#002868] bg-transparent text-[#002868] hover:bg-blue-50",
    white: "bg-white text-[#BF0A30] hover:bg-gray-100",
  }
  return (
    <Button
      size={size}
      onClick={() => {
        track("cash_out_hero_cta_clicked", { source, label })
        open(source)
      }}
      className={cn("rounded-full font-semibold shadow-lg transition-all", styles[variant], className)}
    >
      {label}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}

export function SpecialistButton({
  variant = "outline",
  className,
  label = "Speak With a Specialist",
}: {
  variant?: "outline" | "white"
  className?: string
  label?: string
}) {
  const email = show(siteConfig.contact.email)
  const styles = {
    outline: "border border-[#002868] bg-transparent text-[#002868] hover:bg-blue-50",
    white: "border border-white/30 bg-transparent text-white hover:bg-white/10",
  }
  return (
    <Button
      asChild
      size="lg"
      variant="ghost"
      className={cn("rounded-full font-semibold", styles[variant], className)}
    >
      <a href={email ? `mailto:${email}` : "#schedule"} onClick={() => track("cash_out_consultation_scheduled")}>
        <Phone className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  )
}

export function ScheduleButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      size="lg"
      variant="ghost"
      className={cn("rounded-full border border-white/30 bg-transparent font-semibold text-white hover:bg-white/10", className)}
    >
      <a href={siteConfig.links.scheduleCall} onClick={() => track("cash_out_consultation_scheduled")}>
        <CalendarClock className="mr-2 h-4 w-4" />
        Schedule a Consultation
      </a>
    </Button>
  )
}

/** Sticky bottom CTA for mobile. */
export function MobileStickyCta() {
  const { open } = usePrequal()
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <Button
        onClick={() => {
          track("cash_out_hero_cta_clicked", { source: "mobile-sticky" })
          open("mobile-sticky")
        }}
        className="h-12 w-full rounded-full bg-[#BF0A30] font-semibold text-white hover:bg-[#8B0000]"
      >
        Estimate My Cash-Out
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
