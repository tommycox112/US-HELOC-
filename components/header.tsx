"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Clock, Phone } from "lucide-react";
import { Logo } from "@/components/logo";

const navItems = [
  { name: "HELOC", href: "/heloc" },
  { name: "Cash-Out Refi", href: "/cash-out-refinance" },
  { name: "DSCR Loans", href: "/dscr-loan" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar with American stripe effect */}
      <div className="relative bg-[#002868] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#BF0A30]/20 via-transparent to-[#BF0A30]/20 animate-pulse" />
          <div className="container flex items-center justify-between py-2.5 text-sm relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
              <Clock className="h-3.5 w-3.5 text-white" />
              <span className="font-bold text-white text-xs">5 MIN</span>
            </div>
            <span className="font-medium text-white/90">Online Pre-Qualification</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/70 text-xs">No Hidden Fees</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-white" />
            <span className="font-semibold text-sm">support@usheloc.com</span>
          </div>
        </div>
        {/* American stripe accents */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BF0A30]" />
      </div>
      
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center group relative">
            <div className="relative overflow-hidden">
              <Logo className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-semibold text-[#002868] hover:text-[#BF0A30] transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BF0A30] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-semibold text-[#002868] hover:text-[#BF0A30] transition-colors"
            >
              Sign In
            </Link>
            <Button asChild className="bg-[#BF0A30] hover:bg-[#8B0000] text-white rounded-full px-6 h-10 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/apply">
                Check Your Rate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#002868]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white">
              <div className="flex items-center gap-2 pb-6 mb-6 border-b border-gray-200">
                <Logo className="h-8 w-auto" />
              </div>
              
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-lg text-base font-semibold text-[#002868] hover:bg-blue-50 transition-colors"
                  >
                    {item.name}
                    <ArrowRight className="h-4 w-4 text-[#BF0A30]" />
                  </Link>
                ))}
                
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-200">
                  <Button variant="outline" className="rounded-full w-full h-12 font-semibold border-[#002868] text-[#002868] bg-transparent hover:bg-blue-50">
                    Sign In
                  </Button>
                  <Button asChild className="rounded-full w-full h-12 bg-[#BF0A30] hover:bg-[#8B0000] text-white font-semibold" onClick={() => setIsOpen(false)}>
                    <Link href="/apply">
                      Check Your Rate
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-8 p-4 bg-[#002868] rounded-lg text-white">
                  <p className="text-sm text-white/70 mb-1">Questions?</p>
                  <p className="text-lg font-bold">support@usheloc.com</p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
