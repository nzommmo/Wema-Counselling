"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="text-center mb-12 md:mb-16">
      <p
        className={`text-xs font-medium tracking-[6px] uppercase mb-4 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        } ${light ? "text-pink-200" : "text-gray-400 dark:text-gray-500"}`}
      >
        {subtitle}
      </p>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700 delay-100 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        } ${light ? "text-white" : "text-gray-900 dark:text-white"}`}
      >
        {title}
      </h2>
      <div
        className={`mx-auto w-20 h-1 rounded-full bg-linear-to-r from-pink-500 to-rose-400 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      />
      {description && (
        <p
          className={`mt-6 max-w-2xl mx-auto text-lg transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          } ${light ? "text-pink-100" : "text-gray-600 dark:text-gray-400"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
