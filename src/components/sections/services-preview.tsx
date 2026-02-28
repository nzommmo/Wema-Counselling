"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AnimatedCard from "@/components/ui/animated-card";
import SkeletonImage from "@/components/ui/skeleton-image";
import SectionHeader from "@/components/ui/section-header";
import Button from "@/components/ui/button";
import BookAppointment from "@/components/sections/bookappointment";
import api from "../../../axiosinstance";

const FALLBACK_IMAGE = "/images/MainServicesImg.jpg";

interface Service {
  id: number;
  title: string;
  description: string;
  service_type: string;
  duration_minutes: number;
  price: number;
  display_order: number;
  is_active: boolean;
}

// ─── Flip Card ────────────────────────────────────────────────────────────────

function FlipCard({ service, onBook }: { service: Service; onBook: (title: string) => void }) {
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
                src={FALLBACK_IMAGE}
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
              <p className="text-pink-200 text-xs mt-3">
                {service.duration_minutes} min &middot; KES{" "}
                {service.price.toLocaleString()}
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onBook(service.title);
              }}
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-pink-50 transition-colors duration-300 self-start mt-4"
            >
              Book Now
              <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function FlipCardSkeleton() {
  return (
    <div className="h-[340px] bg-white dark:bg-surface-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-surface-700 animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-surface-700" />
      <div className="p-6 space-y-3">
        <div className="h-5 bg-gray-200 dark:bg-surface-700 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-surface-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-surface-700 rounded w-5/6" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicesPreview() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  useEffect(() => {
    api
      .get<{ data: Service[] }>("counselling/services")
      .then((res) =>
        setServices(res.data.data.filter((s: Service) => s.is_active).slice(0, 6))
      )
      .catch((err: unknown) => console.error("Failed to fetch services:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleBook = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setBookingOpen(true);
  };

  return (
    <>
      <section className="py-20 lg:py-28 bg-linear-to-b from-white via-pink-50/30 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="OUR SERVICES"
            title="We offer the best services"
            description="Specialized counselling for teens, youths, couples, and families. Research services for academic proposals and data analysis."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <FlipCardSkeleton key={i} />
                ))
              : services.map((service, i) => (
                  <AnimatedCard key={service.id} delay={i * 100}>
                    <div className="group">
                      <FlipCard service={service} onBook={handleBook} />
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

      <BookAppointment
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={preselectedService}
      />
    </>
  );
}