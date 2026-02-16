import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CTASection from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
