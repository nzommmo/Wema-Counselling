"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FloatingParticles from "@/components/ui/floating-particles";
import BookAppointment from "@/components/sections/bookappointment";

const rotatingPhrases = [
  "Navigating Life\u2019s Challenges",
  "Building Stronger Families",
  "Empowering Your Growth",
  "Restoring Inner Peace",
];

function TypewriterHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      Your Partner in{" "}
      <span className="inline-block relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className="bg-linear-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {rotatingPhrases[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.h1>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-pink-50 via-white to-rose-50 dark:from-surface-950 dark:via-surface-900 dark:to-surface-950"
          style={{ y: bgY }}
        />

        {/* Decorative blobs with parallax */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl"
          style={{ y: blob1Y }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200/20 dark:bg-rose-900/15 rounded-full blur-3xl"
          style={{ y: blob2Y }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles overlay */}
        <FloatingParticles />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
            {/* Left Content */}
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p
                className="text-sm font-medium text-pink-600 tracking-wider uppercase mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome to Mindful Wema
              </motion.p>

              <TypewriterHeadline />

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                We assist teens, youths, couples, and families in overcoming
                various challenges they face. Start your journey to wellness today
                with professional counselling.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <Button
                  onClick={() => setBookingOpen(true)}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book Appointment
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/about" variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100 dark:border-surface-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex -space-x-2">
                  {[
                    "/images/avatar-1.png",
                    "/images/avatar-2.png",
                    "/images/avatar-3.png",
                  ].map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`Happy client ${i + 1}`}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-surface-900"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    500+ clients helped
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">4.9 ★ rating</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Image with parallax */}
            <motion.div
              className="relative hidden lg:block"
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Decorative ring */}
                <motion.div
                  className="absolute -inset-4 bg-linear-to-br from-pink-200 to-rose-200 rounded-3xl opacity-60"
                  animate={{ rotate: [3, 5, 3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/10">
                  <Image
                    src="/images/HeroIllustration.png"
                    alt="Mindful Wema counselling"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-rose-400 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="text-white"
                    >
                      <path
                        fill="currentColor"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Trusted Care</p>
                    <p className="text-xs text-gray-500">Licensed Counsellors</p>
                  </div>
                </motion.div>

                {/* Floating success indicator */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-xl px-4 py-3"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <p className="text-xs text-gray-500">Success Rate</p>
                  <p className="text-lg font-bold text-green-600">98%</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookAppointment isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}