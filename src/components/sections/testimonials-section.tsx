"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";
import AnimatedCard from "@/components/ui/animated-card";
import { testimonials } from "@/data/testimonials";

// Triple the list for seamless infinite marquee (ensures no gaps)
const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white dark:bg-surface-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-500 border border-gray-100 dark:border-surface-700 hover:border-pink-100 dark:hover:border-pink-800 hover:-translate-y-1 h-full">
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-rose-400 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="text-white"
        >
          <path
            fill="currentColor"
            d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162C3.25 8.637 3.046 9.147 2.8 9.639C2.647 10.149 2.558 10.637 2.5 11.1c-.058.48-.073.917-.05 1.32c-.013.396.054.799.12 1.1A3.5 3.5 0 0 0 6.5 17A3.5 3.5 0 0 0 10 13.5A3.5 3.5 0 0 0 6.5 10m11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.497.917-.743 1.41c-.153.51-.242.997-.3 1.46c-.058.48-.073.917-.05 1.32c-.013.396.054.799.12 1.1A3.5 3.5 0 0 0 17.5 17a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5"
          />
        </svg>
      </div>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-[15px]">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-surface-700">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

// Marquee version with fixed width for the scrolling track
function MarqueeTestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="w-[380px] shrink-0">
      <TestimonialCard testimonial={testimonial} />
    </div>
  );
}

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-gray-50 to-white dark:from-surface-950 dark:to-surface-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          subtitle="TESTIMONIALS"
          title="What our customers say about us!"
        />
      </div>

      {/* Tablet & Desktop: Seamless infinite marquee */}
      <div
        className="hidden md:block relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-gray-50 dark:from-surface-950 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-gray-50 dark:from-surface-950 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-8 py-4 marquee-track"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {marqueeItems.map((testimonial, i) => (
            <MarqueeTestimonialCard
              key={`marquee-${i}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Stacked cards with fade-in */}
      <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedCard key={testimonial.name} delay={i * 150}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
