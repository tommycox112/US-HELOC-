"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[10px] text-gray-500 leading-none">
              Rates from
            </p>
            <p className="text-lg font-bold text-[#002868]">
              7.95%{" "}
              <span className="text-xs font-normal text-gray-500">APR</span>
            </p>
          </div>

          <div className="flex-1">
            <Button asChild className="w-full bg-[#BF0A30] hover:bg-[#9a0827] text-white rounded-xl h-12 font-bold shadow-md text-sm">
              <Link href="/apply">
                Check Your Rate
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-1.5 text-[10px] text-gray-400">
          <span>No obligation</span>
          <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
          <span>No impact to credit</span>
          <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
          <span>Secure & encrypted</span>
        </div>
      </div>
    </div>
  );
}
