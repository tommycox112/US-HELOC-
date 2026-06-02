import { FileText, CheckCircle, RefreshCw } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Complete our 100% online application",
    description: "No in-person appraisal needed for loans under $400K. Pre-qualification won't affect your credit score. You'll quickly see your HELOC options.",
  },
  {
    number: "2",
    icon: CheckCircle,
    title: "Get pre-qualified quickly, funding in as few as 5 days",
    description: "Borrow from $15,000 to $750,000 with one-time origination fee. Easy online notary services in most locations with expert support.",
  },
  {
    number: "3",
    icon: RefreshCw,
    title: "Option to redraw up to 100%",
    description: "Take advantage of the option to take additional draws as needed during your draw period.",
  },
]

export function HELOCProcess() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-background">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
