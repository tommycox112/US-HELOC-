import Image from "next/image"
import { Wrench, Package, Users, Wallet, TrendingUp, Megaphone } from "lucide-react"

const USES = [
  { icon: Wrench, title: "Equipment", body: "Purchase or replace tools, machinery, and essential business equipment." },
  { icon: Package, title: "Inventory", body: "Stock products and materials to support customer demand." },
  { icon: Users, title: "Payroll", body: "Help cover staffing expenses during business cycles." },
  { icon: Wallet, title: "Working capital", body: "Support everyday operating expenses and cash flow needs." },
  { icon: TrendingUp, title: "Expansion", body: "Invest in additional space, improvements, or new business opportunities." },
  { icon: Megaphone, title: "Marketing", body: "Support advertising and customer acquisition initiatives." },
]

export function BusinessUses() {
  return (
    <section id="business-uses" className="bg-[#F6F3EC]">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#DFE6E2] bg-[#E5EBDF] lg:aspect-[5/6]">
          <Image
            src="/business/uses-owner.png"
            alt="Business owner reviewing inventory in their shop"
            fill
            sizes="(max-width: 1024px) 90vw, 560px"
            className="object-cover"
          />
        </div>

        {/* Text list */}
        <div>
          <h2 className="max-w-md font-serif text-[34px] leading-[1.08] text-[#182C2A] md:text-[46px]">
            Built around the needs of your business.
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#52616B]">
            Funding for the needs behind your business — from the everyday to the next big step.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {USES.map((u) => (
              <div key={u.title} className="flex gap-3.5">
                <u.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#28564A]" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <h3 className="text-[16px] font-semibold text-[#182C2A]">{u.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#52616B]">{u.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-9 text-[13px] leading-relaxed text-[#8A7C6A]">
            Permitted uses depend on the financing program and loan agreement.
          </p>
        </div>
      </div>
    </section>
  )
}
