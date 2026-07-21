"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { X, Linkedin, ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/motion/reveal"

type Leader = (typeof siteConfig.leadership)[number]

export function LeadershipGrid() {
  const [active, setActive] = useState<Leader | null>(null)
  const leaders = siteConfig.leadership.filter((l) => l.verified)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active])

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {leaders.map((leader, i) => (
          <Reveal key={leader.name} delay={i * 0.08}>
            <button
              type="button"
              onClick={() => setActive(leader)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-[#bf0a30]/40 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={`Portrait of ${leader.name}, ${leader.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#002868] via-[#bf0a30] to-[#002868]" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-[#002868]">{leader.name}</h3>
                <p className="text-sm font-semibold text-[#bf0a30]">{leader.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{leader.responsibility}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#002868] opacity-0 transition-opacity group-hover:opacity-100">
                  Read profile <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} profile`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-[#002868]/60 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="relative z-10 grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl sm:grid-cols-[240px_1fr]"
          >
            <div className="relative hidden bg-gray-100 sm:block">
              <Image
                src={active.image || "/placeholder.svg"}
                alt={`Portrait of ${active.name}`}
                fill
                sizes="240px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800"
              >
                <X className="h-4 w-4" />
              </button>
              <h3 className="text-2xl font-bold text-[#002868]">{active.name}</h3>
              <p className="font-semibold text-[#bf0a30]">{active.title}</p>
              <p className="mt-4 leading-relaxed text-gray-700">{active.bio}</p>

              {active.quote ? (
                <blockquote className="mt-5 border-l-4 border-[#bf0a30] bg-gray-50 py-3 pl-4 pr-2 text-sm italic leading-relaxed text-[#002868]">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
              ) : null}

              <h4 className="mt-6 text-xs font-bold uppercase tracking-wide text-gray-500">Areas of focus</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {active.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-[#002868]/5 px-3 py-1 text-xs font-medium text-[#002868]"
                  >
                    {a}
                  </span>
                ))}
              </div>

              {active.education || active.nmls ? (
                <dl className="mt-6 space-y-1 text-sm text-gray-600">
                  {active.education ? (
                    <div className="flex gap-2">
                      <dt className="font-semibold text-gray-800">Education:</dt>
                      <dd>{active.education}</dd>
                    </div>
                  ) : null}
                  {active.nmls ? (
                    <div className="flex gap-2">
                      <dt className="font-semibold text-gray-800">NMLS:</dt>
                      <dd>{active.nmls}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}

              {active.linkedin ? (
                <a
                  href={active.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#002868] hover:text-[#bf0a30]"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  )
}
