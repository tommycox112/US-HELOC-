"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function MobileCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#DFE6E2] bg-[#F6F3EC]/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/apply"
        className="flex h-12 w-full items-center justify-center rounded-lg bg-[#28564A] text-[16px] font-medium text-white transition-colors hover:bg-[#1F483F]"
      >
        Explore My Options
      </Link>
    </div>
  )
}
