"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/hero2.jpg",
  "/images/hero1.jpg"
];
const TOTAL = images.length;

export default function ImageCarousel() {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive((a) => (a - 1 + TOTAL) % TOTAL), []);
  const next = useCallback(() => setActive((a) => (a + 1) % TOTAL), []);

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Main image */}
      <div className="relative w-full overflow-hidden rounded-none" style={{ aspectRatio: "3/2" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full rounded-none bg-[var(--border)] flex items-center justify-center"
            style={{ background: "var(--border)" }}
          >
            <Image
              src={images[active]}
              alt={`Hero image ${active + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between px-2 pt-1 pb-2">
        {/* Dots */}
        <div className="flex items-center gap-[6px]">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-[20px] h-[6px] bg-[var(--foreground)]"
                  : "w-[6px] h-[6px] bg-[var(--border)]"
              }`}
              style={i !== active ? { background: "rgba(0,0,0,0.15)" } : {}}
            />
          ))}
        </div>

        {/* Counter + Arrows */}
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-[var(--muted)] font-medium tabular-nums tracking-wide mr-2">
            {active + 1} / {TOTAL}
          </span>
          <button
            onClick={prev}
            id="carousel-prev"
            aria-label="Previous image"
            className="w-[30px] h-[30px] rounded-sm border border-[var(--border)] bg-transparent flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)] transition-all duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={next}
            id="carousel-next"
            aria-label="Next image"
            className="w-[30px] h-[30px] rounded-sm border border-[var(--border)] bg-transparent flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)] transition-all duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Thumbnails row */}
      <div className="grid grid-cols-2 gap-3" style={{ maxWidth: "300px" }}>
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Thumbnail ${i + 1}`}
            className={`relative rounded-none overflow-hidden transition-all duration-200 ${
              i === active
                ? "ring-[2px] ring-[var(--foreground)] ring-offset-2 ring-offset-[var(--background)] opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              src={src}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
