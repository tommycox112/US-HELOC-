"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const buildVariants = (reduced: boolean, y: number): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : y },
  visible: { opacity: 1, y: 0 },
})

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "section" | "li" | "span"
}) {
  const reduced = useReducedMotion() ?? false
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={buildVariants(reduced, y)}
    >
      {children}
    </MotionTag>
  )
}

/** Count-up number animation. Only use for verified metrics or calculator outputs. */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}) {
  const reduced = useReducedMotion() ?? false
  if (reduced) {
    return (
      <span className={className}>
        {prefix}
        {value.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </span>
    )
  }
  return (
    <motion.span
      key={value}
      className={className}
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {prefix}
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  )
}
