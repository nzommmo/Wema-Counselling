import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";
import HowItWorks from "@/components/sections/how-it-works";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FAQSection from "@/components/sections/faq-section";
import CTASection from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
