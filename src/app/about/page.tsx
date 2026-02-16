"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import AnimatedCard from "@/components/ui/animated-card";
import MeetTheTeam from "@/components/sections/meet-the-team";

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
      </svg>
    ),
    title: "Compassion",
    description: "We approach every client with empathy, understanding, and genuine care.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    title: "Confidentiality",
    description: "Your privacy and trust are our highest priorities in every session.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5" />
      </svg>
    ),
    title: "Inclusivity",
    description: "We welcome everyone regardless of age, background, or circumstance.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 15.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73z" />
      </svg>
    ),
    title: "Excellence",
    description: "Our licensed professionals deliver evidence-based, top-quality therapy.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Clients Helped" },
  { value: 13, suffix: "+", label: "Services Offered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function AboutPage() {
  const { ref: statsRef, inView: statsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-linear-to-b from-pink-50/50 to-white dark:from-surface-900 dark:to-surface-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <AnimatedCard>
                <p className="text-sm font-medium text-pink-600 tracking-wider uppercase mb-4">
                  About Us
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                  About{" "}
                  <span className="bg-linear-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                    Mindful Wema
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Mindful Wema Solutions Limited is a private registered company
                  dedicated to providing specialized counselling services. We
                  assist teens, youths, couples, and families in overcoming
                  various challenges they face.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  At Mindful Wema Solutions, we believe in a holistic approach to
                  mental wellness. Our trained counselors and psychologists create
                  personalized therapy sessions that cater to the unique needs of
                  each client, ensuring that they receive the emotional support
                  and practical strategies necessary for positive change.
                </p>
                <Button
                  href="https://calendly.com/maureennjihia468/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Start Therapy Today
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-1" />
                </Button>
              </AnimatedCard>
            </div>

            <AnimatedCard delay={200}>
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-linear-to-br from-pink-200 to-rose-200 rounded-3xl opacity-50"
                  animate={{ rotate: [2, 4, 2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <Image
                  src="/images/AboutIllustration.png"
                  alt="About Mindful Wema"
                  width={600}
                  height={600}
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counter */}
      <section ref={statsRef} className="py-16 bg-linear-to-r from-pink-600 to-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {statsVisible ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={i * 0.2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </p>
                <p className="text-pink-100 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 dark:bg-surface-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="OUR VALUES"
            title="What drives us every day"
            description="Our core values guide every interaction and session, ensuring the highest standard of care for our clients."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedCard key={value.title} delay={i * 100}>
                <div className="group bg-white dark:bg-surface-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-500 border border-gray-100 dark:border-surface-700 hover:border-pink-100 dark:hover:border-pink-900/50 text-center hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-pink-500 to-rose-400 flex items-center justify-center mx-auto mb-5 text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <MeetTheTeam />

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-surface-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-linear-to-br from-pink-200 to-rose-200 rounded-3xl opacity-50"
                  animate={{ rotate: [-2, -4, -2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <Image
                  src="/images/mission_illustration.png"
                  alt="Our mission"
                  width={600}
                  height={500}
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div>
                <p className="text-sm font-medium text-pink-600 tracking-wider uppercase mb-4">
                  Our Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Empowering lives through mindful guidance
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Whether it&apos;s stress management, relationship struggles, or
                  personal growth, we are here to help every step of the way. Our
                  expertise extends to research services for university and
                  college students, guiding them in crafting effective academic
                  proposals, data collection, and timely analysis.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  We are committed to creating a safe and supportive environment
                  where every individual feels valued, heard, and empowered to
                  make positive changes in their life.
                </p>
                <Button href="/services" variant="outline" className="w-full sm:w-auto">
                  Explore Our Services
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </>
  );
}
