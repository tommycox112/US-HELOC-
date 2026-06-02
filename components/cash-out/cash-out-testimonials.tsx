"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Kevin",
    rating: 5,
    title: "Great service great rates",
    content: "Looking to consolidate debt or need access to equity in your home, US HELOC made the process quick and easy and provided rates which beat other lenders. I would recommend US HELOC to anyone looking to pull equity out of their home.",
  },
  {
    id: 2,
    name: "James B.",
    rating: 5,
    title: "One of the most easiest processes",
    content: "So far it's been one of the most easiest processes that I've ever experienced when trying to obtain a loan. Before, I tried to go through who I already have my mortgage with and it turned into a joke. I truly hope US HELOC sets a strong example for others to follow.",
  },
  {
    id: 3,
    name: "Martin L.",
    rating: 5,
    title: "Simply the best!",
    content: "US HELOC made the application for a HELOC very convenient and the process was painless and quick! The mortgage was funded 8 days after completing the online application. The notarizing was even done online. Competitive rates and unmatched in the industry.",
  },
]

export function CashOutTestimonials() {
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
          <span className="font-semibold">3,667 Excellent Reviews on</span>
          <span className="font-bold text-primary">Trustpilot</span>
        </div>
      </div>
    </section>
  )
}
