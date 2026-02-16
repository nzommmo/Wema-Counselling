"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SkeletonImageProps extends Omit<ImageProps, "onLoad"> {
  skeletonClassName?: string;
}

export default function SkeletonImage({
  skeletonClassName = "",
  className = "",
  alt,
  ...props
}: SkeletonImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Shimmer skeleton */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-gray-200 dark:bg-surface-800 animate-pulse ${skeletonClassName}`}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
        </div>
      )}

      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
