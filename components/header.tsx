"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowRight, ChevronDown, ShieldCheck, Lock } from "lucide-react"
import { Logo } from "@/components/logo"
import { siteConfig, show } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const navGroups = [
  {
    name: "Home Equity",
    items: [
      { name: "HELOC", href: "/heloc", desc: "Flexible revolving credit line" },
      { name: "Home Equity Loan", href: "/heloc", desc: "Fixed lump-sum second mortgage" },
      { name: "Cash-Out Refinance", href: "/cash-out-refinance", desc: "Replace your mortgage, access equity" },
      { name: "Compare Options", href: "/heloc#compare", desc: "See which structure fits" },
    ],
  },
  {
    name: "Investment Property",
    items: [{ name: "DSCR Loans", href: "/dscr-loan", desc: "Qualify on property cash flow" }],
  },
]

const simpleLinks = [
  { name: "Calculators", href: "/cash-out-refinance#calculator" },
  { name: "Resources", href: "/disclosures" },
  { name: "About", href: "/about" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const applyUrl = siteConfig.links.apply

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Announcement bar — compliant language */}
      <div className="relative overflow-hidden bg-[#002868] text-white">
        <div className="container flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="hidden font-medium text-white/90 sm:inline">
              Explore potential home-equity options through a streamlined online process.
            </span>
            <span className="font-medium text-white/90 sm:hidden">
              Explore home-equity options online.
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <span className="hidden items-center gap-1 md:flex">
              <Lock className="h-3 w-3" /> Secure
            </span>
            <span className="hidden text-white/30 md:inline">|</span>
            <span className="hidden md:inline">No obligation</span>
            <span className="hidden text-white/30 lg:inline">|</span>
            <span className="hidden lg:inline">Subject to underwriting</span>
          </div>
        </div>
        {/* Flag stripe */}
        <div className="flex h-[3px] w-full">
          <div className="flex-1 bg-[#BF0A30]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#BF0A30]" />
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-white",
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center">
            <Logo className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop nav with dropdowns */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navGroups.map((group) => (
              <div key={group.name} className="group relative">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-[#002868] transition-colors hover:text-[#BF0A30]">
                  {group.name}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mt-1 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
                    {group.items.map((item) => (
                      <Link
                        key={item.name + item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-blue-50"
                      >
                        <span className="block text-sm font-semibold text-[#002868]">{item.name}</span>
                        <span className="block text-xs text-gray-500">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {simpleLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-[#002868] transition-colors hover:text-[#BF0A30]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={siteConfig.links.signIn}
              className="text-sm font-semibold text-[#002868] transition-colors hover:text-[#BF0A30]"
            >
              Sign In
            </Link>
            <Link
              href="/about#contact"
              className="hidden text-sm font-semibold text-[#002868] transition-colors hover:text-[#BF0A30] xl:inline"
            >
              Talk to a Specialist
            </Link>
            <Button
              asChild
              className="h-10 rounded-full bg-[#BF0A30] px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#8B0000]"
            >
              <Link href={applyUrl}>
                Check My Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#002868]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col bg-white p-0">
              <div className="flex items-center gap-2 border-b border-gray-200 p-5">
                <Logo className="h-8 w-auto" />
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                {navGroups.map((group) => (
                  <div key={group.name} className="mb-4">
                    <p className="mb-1 px-3 text-xs font-bold uppercase tracking-wider text-[#BF0A30]">
                      {group.name}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.name + item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-[#002868] transition-colors hover:bg-blue-50"
                      >
                        {item.name}
                        <ArrowRight className="h-4 w-4 text-[#BF0A30]" />
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mb-4">
                  {simpleLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-[#002868] transition-colors hover:bg-blue-50"
                    >
                      {item.name}
                      <ArrowRight className="h-4 w-4 text-[#BF0A30]" />
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="space-y-3 border-t border-gray-200 p-4">
                <Button
                  asChild
                  className="h-12 w-full rounded-full bg-[#BF0A30] font-semibold text-white hover:bg-[#8B0000]"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={applyUrl}>
                    Check My Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 w-full rounded-full border-[#002868] bg-transparent font-semibold text-[#002868] hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/about#contact">Talk to a Specialist</Link>
                </Button>
                {show(siteConfig.contact.email) && (
                  <div className="flex items-center gap-2 rounded-lg bg-[#002868] p-3 text-white">
                    <ShieldCheck className="h-4 w-4 text-white/70" />
                    <span className="text-sm font-semibold">{show(siteConfig.contact.email)}</span>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
