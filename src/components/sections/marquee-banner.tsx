"use client";

import { motion } from "framer-motion";

const words = [
  "Empowerment",
  "Healing",
  "Growth",
  "Compassion",
  "Resilience",
  "Wellness",
  "Trust",
  "Balance",
  "Strength",
  "Hope",
];

export default function MarqueeBanner() {
  const repeated = [...words, ...words];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-linear-to-r from-pink-600 to-rose-500">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {repeated.map((word, i) => (
          <span
            key={i}
            className="text-white/90 text-lg md:text-xl font-semibold tracking-wide flex items-center gap-8"
          >
            {word}
            <span className="text-white/40 text-sm">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
