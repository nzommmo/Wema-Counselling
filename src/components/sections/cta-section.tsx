"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-pink-600 via-rose-500 to-pink-600" />
      <div className="absolute inset-0 bg-[url('/TestimonialsBg.png')] opacity-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Start Your Journey to a{" "}
          <span className="text-pink-200">Healthier Mind</span> Today
        </h2>

        <p
          className={`text-lg text-pink-100 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Take the first step towards positive change. Our experienced counsellors
          are ready to guide you through life&apos;s challenges.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="https://calendly.com/maureennjihia468/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 text-lg font-semibold bg-white text-pink-600 rounded-xl shadow-xl shadow-black/10 hover:bg-pink-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Book Appointment
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 text-lg font-semibold border-2 border-white text-white rounded-xl hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Contact Us
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
