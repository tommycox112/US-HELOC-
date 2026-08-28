const BENEFITS = [
  {
    num: "01",
    title: "Support day-to-day operations",
    body: "Explore funding for payroll, inventory, and other operating expenses.",
  },
  {
    num: "02",
    title: "Invest in your next stage",
    body: "Consider financing for equipment, improvements, or business expansion.",
  },
  {
    num: "03",
    title: "Explore an equity-based option",
    body: "Your property value and existing mortgage balances help determine potential borrowing capacity.",
  },
  {
    num: "04",
    title: "Understand the next steps",
    body: "Learn what information is needed and review available options before deciding whether to proceed.",
  },
]

export function Benefits() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-[34px] leading-[1.08] text-[#182C2A] md:text-[46px]">
            Your home equity. Your business priorities.
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-[#52616B]">
            Explore how financing secured by your home could support the business you&apos;re building.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-8 md:mt-16 md:grid-cols-4 md:gap-y-0">
          {BENEFITS.map((b, i) => (
            <div
              key={b.num}
              className={`border-t border-[#DFE6E2] pt-6 md:border-t-0 md:pt-0 ${
                i === 0 ? "md:pl-0" : "md:border-l md:border-[#DFE6E2] md:pl-8"
              } ${i !== BENEFITS.length - 1 ? "md:pr-8" : ""}`}
            >
              <span className="font-serif text-[22px] text-[#C38F73]">{b.num}</span>
              <h3 className="mt-3 text-[18px] font-semibold text-[#182C2A]">{b.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#52616B]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
