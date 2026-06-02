import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { BentoSection } from "@/components/home/bento-section";
import { ProcessSection } from "@/components/home/process-section";
import { ProductsSection } from "@/components/home/products-section";
import { HELOCExplainer } from "@/components/home/heloc-explainer";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ProcessSection />
        <HELOCExplainer />
        <BentoSection />
        <ProductsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
