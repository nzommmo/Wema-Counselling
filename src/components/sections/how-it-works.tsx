"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import AnimatedCard from "@/components/ui/animated-card";

const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Get in touch via our booking page, contact form, or WhatsApp. Tell us a little about what you're going through.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Matched",
    description:
      "We'll pair you with the right counsellor based on your needs, preferences, and goals for the best possible outcome.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Begin Sessions",
    description:
      "Attend your sessions in-person or online. Your counsellor will create a personalized plan tailored to your journey.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Thrive",
    description:
      "Build lasting skills and strategies for a healthier, happier life. We're with you every step of the way.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8S14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8S7 8.67 7 9.5S7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-gray-50/50 dark:from-surface-950 dark:to-surface-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="HOW IT WORKS"
          title="Your path to wellness in 4 simple steps"
          description="Getting started is easy. Here's how we'll work together to help you overcome challenges and live a fuller life."
        />

        {/* Desktop: Horizontal steps with connecting line */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[60px] left-[12%] right-[12%] h-[2px]">
            <div className="w-full h-full bg-gray-200 dark:bg-surface-700 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-full bg-linear-to-r from-pink-500 to-rose-400 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <AnimatedCard key={step.number} delay={i * 200}>
                <div className="flex flex-col items-center text-center group">
                  {/* Step circle */}
                  <div className="relative mb-8">
                    <motion.div
                      className="w-[120px] h-[120px] rounded-full bg-white dark:bg-surface-900 border-2 border-gray-100 dark:border-surface-700 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-pink-500/10 group-hover:border-pink-200 dark:group-hover:border-pink-800 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                      </div>
                    </motion.div>

                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-linear-to-br from-pink-600 to-rose-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px]">
            <div className="w-full h-full bg-gray-200 dark:bg-surface-700 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-linear-to-b from-pink-500 to-rose-400 rounded-full"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-10">
            {steps.map((step, i) => (
              <AnimatedCard key={step.number} delay={i * 150}>
                <div className="flex gap-6 items-start relative">
                  {/* Circle on the line */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-900 border-2 border-gray-100 dark:border-surface-700 flex items-center justify-center shadow-md z-10 relative">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-linear-to-br from-pink-600 to-rose-500 flex items-center justify-center text-white text-[10px] font-bold shadow-md z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
