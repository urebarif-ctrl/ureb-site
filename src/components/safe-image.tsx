"use client";

import { useState } from "react";

export function SafeImage({
  src,
  fallbackSrc = "/ureb-headshot.jpg",
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
