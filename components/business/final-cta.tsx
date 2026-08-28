import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="bg-[#28564A]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 text-center md:px-8 md:py-28">
        <h2 className="mx-auto max-w-3xl font-serif text-[38px] leading-[1.05] text-[#F6F3EC] md:text-[58px]">
          Your home equity. Your next business move.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[18px] leading-relaxed text-[#C9D3CB]">
          Tell us about your property and financing needs to take the next step.
        </p>
        <Link
          href="/apply"
          className="mt-9 inline-flex h-13 items-center rounded-lg bg-[#F6F3EC] px-8 py-3.5 text-[16px] font-medium text-[#182C2A] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore My Options
        </Link>
        <p className="mt-6 text-[14px] text-[#A9B6AD]">
          Subject to eligibility, lender approval, and program availability.
        </p>
      </div>
    </section>
  )
}
