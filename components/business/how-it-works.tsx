import Link from "next/link"

const STEPS = [
  {
    num: "01",
    title: "Tell us what you need",
    body: "Share basic property information, your requested financing amount, and how you plan to use the funds.",
  },
  {
    num: "02",
    title: "Explore available options",
    body: "Review potential financing options, subject to eligibility and lender requirements.",
  },
  {
    num: "03",
    title: "Complete the lender's process",
    body: "If you decide to proceed, provide the required information and complete underwriting and closing.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#182C2A] text-[#F6F3EC]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-18 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-serif text-[36px] leading-[1.05] md:text-[52px]">Your next step, made clear.</h2>
          <p className="mt-4 text-[18px] leading-relaxed text-[#C9D3CB]">
            Start with your property and business needs. Then explore whether an available program may fit.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10">
          {STEPS.map((s, i) => (
            <div key={s.num} className={i !== 0 ? "md:border-l md:border-white/15 md:pl-10" : ""}>
              <span className="font-serif text-[56px] leading-none text-[#C38F73] md:text-[68px]">{s.num}</span>
              <h3 className="mt-5 text-[20px] font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[#C9D3CB]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/apply"
            className="inline-flex h-12 w-fit items-center rounded-lg bg-[#F6F3EC] px-7 text-[16px] font-medium text-[#182C2A] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore My Options
          </Link>
          <p className="text-[14px] text-[#A9B6AD]">
            Submitting an inquiry is not an approval or commitment to lend.
          </p>
        </div>
      </div>
    </section>
  )
}
