"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "@/components/ui/section-header";
import AnimatedCard from "@/components/ui/animated-card";
import CTASection from "@/components/sections/cta-section";
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

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function ServiceCardSkeleton() {
  return (
    <div className="bg-white dark:bg-surface-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-surface-700 animate-pulse h-full flex flex-col">
      <div className="h-48 bg-gray-200 dark:bg-surface-700" />
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="h-5 bg-gray-200 dark:bg-surface-700 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-surface-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-surface-700 rounded w-5/6" />
        <div className="h-4 bg-gray-200 dark:bg-surface-700 rounded w-1/2 mt-auto" />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  useEffect(() => {
    api
      .get<{ data: Service[] }>("counselling/services")
      .then((res) => setServices(res.data.data.filter((s: Service) => s.is_active)))
      .catch((err: unknown) => console.error("Failed to fetch services:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleBook = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setBookingOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-linear-to-b from-pink-50/50 to-white dark:from-surface-900 dark:to-surface-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <p className="text-sm font-medium text-pink-600 tracking-wider uppercase mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Services offered at{" "}
              <span className="bg-linear-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Mindful Wema
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              At Mindful Wema, we offer a range of specialized services,
              including counseling for children, adolescents, couples, and
              families. We also provide support for addiction, trauma, and
              parental coaching. Our corporate training and clinical supervision
              services ensure mental well-being in the workplace.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <Image
                src="/images/MainServicesImg.jpg"
                alt="Our services"
                width={1200}
                height={500}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 dark:bg-surface-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="OUR SERVICES"
            title="How we can help you"
          />

          {!loading && services.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
              Services are currently unavailable. Please check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <ServiceCardSkeleton key={i} />
                  ))
                : services.map((service, i) => (
                    <AnimatedCard key={service.id} delay={(i % 4) * 100}>
                      <div className="group bg-white dark:bg-surface-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-500 border border-gray-100 dark:border-surface-700 hover:border-pink-100 dark:hover:border-pink-900/50 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={FALLBACK_IMAGE}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                            {service.description}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-4">
                            <span>{service.duration_minutes} min</span>
                            <span className="font-medium text-gray-600 dark:text-gray-300">
                              KES {service.price.toLocaleString()}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleBook(service.title)}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-600 hover:text-pink-700 transition-all duration-300 group/link"
                          >
                            Book Now
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1"
                            />
                          </button>
                        </div>
                      </div>
                    </AnimatedCard>
                  ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />

      {/* Single shared modal instance */}
      <BookAppointment
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={preselectedService}
      />
    </>
  );
}