"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Anne C.",
    rating: 5,
    title: "Best HELOC ever",
    content: "So seamless and simple. This was my best financial experience ever. Fast and professional.",
  },
  {
    id: 2,
    name: "Eric C.",
    rating: 5,
    title: "Best in class user experience / support team",
    content: "Best-in-class user experience and highly responsive support team. I got my loan funded within a week of submitting my application which was a fully digital and seamless process. Loan terms were competitive even against traditional lending sources.",
  },
  {
    id: 3,
    name: "Jason U.",
    rating: 5,
    title: "Easy to use",
    content: "I work in IT and the overall format and ease-of-use of the website, technology to connect to bank account, back end credit checks, and notary is amazing. Could not think of a better way to streamline this process.",
  },
  {
    id: 4,
    name: "Maggie D.",
    rating: 5,
    title: "Shocked by how easy and fast the process was to get a HELOC",
    content: "I am unbelievably impressed by the way they were able to verify my income from bank statements and by the quick property valuation. And VERY happy with my loan terms!",
  },
  {
    id: 5,
    name: "Kanak L.",
    rating: 5,
    title: "HELOC approval at the speed of light",
    content: "Procuring this loan was a great experience, removing the hassle and delays you would normally encounter through a traditional bank. All documents were electronically submitted, making the experience seamless.",
  },
  {
    id: 6,
    name: "Patricia M.",
    rating: 5,
    title: "The BEST way to access equity",
    content: "Very efficient way to process all the paperwork involved in a home line equity loan. The best part is, they will use different sources of income verification not just tax statements.",
  },
  {
    id: 7,
    name: "RL",
    rating: 5,
    title: "Fastest ever",
    content: "Fastest, easiest equity loan ever! Seamless tech and quick transfer of the funds.",
  },
]

export function HELOCTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        {/* Featured Testimonial */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border bg-card p-8 lg:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
            
            <div className="flex items-center gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            
            <h3 className="mt-4 text-xl font-semibold lg:text-2xl">
              {testimonials[currentIndex].title}
            </h3>
            
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {testimonials[currentIndex].content}
            </p>
            
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <div className="font-medium">Written by customer—{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">5.0 stars</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      currentIndex === i ? "bg-primary" : "bg-muted-foreground/30"
                    )}
                  >
                    <span className="sr-only">Go to testimonial {i + 1}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prevSlide}>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="icon" onClick={nextSlide}>
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trustpilot Badge */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="text-lg font-semibold">Excellent</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-muted-foreground">4,027 reviews on</span>
          <span className="font-semibold text-primary">Trustpilot</span>
        </div>
      </div>
    </section>
  )
}
