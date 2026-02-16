"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import AnimatedCard from "@/components/ui/animated-card";
import { faqs } from "@/data/faqs";

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`bg-white dark:bg-surface-900 rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-pink-200 dark:border-pink-800 shadow-lg shadow-pink-500/5"
          : "border-gray-100 dark:border-surface-700 hover:border-pink-100 dark:hover:border-pink-900/50 shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-semibold text-gray-900 dark:text-white leading-snug pr-4">
          {faq.question}
        </span>

        {/* Animated plus/minus icon */}
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-linear-to-br from-pink-500 to-rose-400 rotate-0"
              : "bg-gray-100 dark:bg-surface-800 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30"
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className={`transition-colors duration-300 ${
                isOpen ? "text-white" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {isOpen ? (
                <path
                  fill="currentColor"
                  d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
                />
              ) : (
                <path
                  fill="currentColor"
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
                />
              )}
            </svg>
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-gray-100 dark:border-surface-700 pt-4">
                <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white via-gray-50/50 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FREQUENTLY ASKED QUESTIONS"
          title="Got questions? We have answers"
          description="Find answers to the most common questions about our counselling services, sessions, and how to get started."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedCard key={i} delay={i * 80}>
              <AccordionItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
