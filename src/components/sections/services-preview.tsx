"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AnimatedCard from "@/components/ui/animated-card";
import SkeletonImage from "@/components/ui/skeleton-image";
import SectionHeader from "@/components/ui/section-header";
import Button from "@/components/ui/button";
import { services } from "@/data/services";

function FlipCard({ service }: { service: (typeof services)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-[340px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        } group-hover:rotate-y-180`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="bg-white dark:bg-surface-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-surface-700 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <SkeletonImage
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1">
                {service.description}
              </p>
              <p className="text-xs text-pink-500 font-medium mt-3">
                <span className="hidden lg:inline">Hover</span>
                <span className="lg:hidden">Tap</span> to see more →
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="bg-linear-to-br from-pink-600 to-rose-500 rounded-2xl p-8 h-full flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <Link
              href="https://calendly.com/maureennjihia468/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-pink-50 transition-colors duration-300 self-start mt-4"
              onClick={(e) => e.stopPropagation()}
            >
              Book Now
              <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPreview() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white via-pink-50/30 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="OUR SERVICES"
          title="We offer the best services"
          description="Specialized counselling for teens, youths, couples, and families. Research services for academic proposals and data analysis."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((service, i) => (
            <AnimatedCard key={service.slug} delay={i * 100}>
              <div className="group">
                <FlipCard service={service} />
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/services" variant="outline" className="w-full sm:w-auto">
            View All Services
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
