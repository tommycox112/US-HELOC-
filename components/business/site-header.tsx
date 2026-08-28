"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

const NAV = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Business Uses", href: "#business-uses" },
  { label: "FAQs", href: "#faqs" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-[#DFE6E2] bg-[#F6F3EC]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center" aria-label="USHELOC home">
          <Logo className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-[#182C2A] transition-colors hover:text-[#28564A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/apply"
            className="inline-flex h-10 items-center rounded-lg bg-[#28564A] px-5 text-[15px] font-medium text-white transition-colors hover:bg-[#1F483F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28564A]"
          >
            Explore My Options
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#182C2A] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#DFE6E2] bg-[#F6F3EC] md:hidden">
          <nav className="mx-auto flex w-full max-w-[1200px] flex-col px-5 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#DFE6E2] py-3 text-base font-medium text-[#182C2A] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/apply"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-12 items-center justify-center rounded-lg bg-[#28564A] px-5 text-base font-medium text-white transition-colors hover:bg-[#1F483F]"
            >
              Explore My Options
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
