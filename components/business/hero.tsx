import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-[#F6F3EC]">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* Left */}
        <div className="order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#28564A]">
            Home equity for business owners
          </p>
          <h1 className="mt-5 font-serif text-[44px] leading-[1.02] text-[#182C2A] md:text-[62px] lg:text-[76px]">
            Put your home equity to work for your business.
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-[#52616B]">
            Explore business-purpose HELOC options to help cover equipment, inventory, payroll, and your
            next stage of growth. USHELOC helps you understand the next steps based on your property and
            financing needs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/apply"
              className="inline-flex h-12 items-center rounded-lg bg-[#28564A] px-7 text-[16px] font-medium text-white transition-colors hover:bg-[#1F483F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28564A]"
            >
              Explore My Options
            </Link>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-1.5 text-[16px] font-medium text-[#182C2A] transition-colors hover:text-[#28564A]"
            >
              See How It Works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <p className="mt-8 text-[15px] text-[#52616B]">
            For business owners seeking financing secured by residential property.
          </p>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-[#8A7C6A]">
            Financing is secured by your home. Failure to repay could result in foreclosure.
          </p>
        </div>

        {/* Right — arched editorial photo */}
        <div className="order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-b-2xl rounded-t-[180px] border border-[#DFE6E2] bg-[#E5EBDF]">
            <Image
              src="/business/hero-owner.png"
              alt="Small business owner standing in their workshop"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
