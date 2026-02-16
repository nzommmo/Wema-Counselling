"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxOptions {
  /** Speed multiplier. Positive = move with scroll, negative = against. Default: 0.3 */
  speed?: number;
  /** Scroll range start (0 = top of viewport). Default: "start end" */
  offset?: [string, string];
}

/**
 * Returns a ref and a `y` MotionValue for parallax scrolling.
 * Attach the ref to the container element and use `style={{ y }}` on the child.
 */
export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.3 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return { ref, y, opacity, scrollYProgress };
}

/**
 * Simple float animation for decorative elements.
 */
export const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const slowFloatAnimation = {
  y: [0, -10, 0],
  x: [0, 5, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
