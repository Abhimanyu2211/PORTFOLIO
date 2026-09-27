"use client";

import { motion } from "framer-motion";
import ImageCarousel from "@/components/ui/ImageCarousel";

const ease = "easeOut" as const;

function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen grid-bg flex items-center pt-[68px]"
    >
      {/* Subtle color wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(74,111,165,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-24 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT ── */}
        <div className="flex flex-col lg:pl-10 max-w-[100vw] overflow-hidden">

          {/* Overline */}
          <FadeUp delay={0} className="flex items-center gap-4" style={{ marginBottom: "48px" }}>
            <span
              className="block flex-shrink-0"
              style={{ background: "var(--accent-blue)", height: "1px", width: "40px" }}
            />
            <span
              style={{ color: "var(--accent-blue)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              AI/ML Engineer &bull; Artificial Intelligence &bull; Software Development
            </span>
          </FadeUp>

          {/* Name */}
          <FadeUp delay={0.1}>
            <h1
              className="font-playfair tracking-tight break-words"
              style={{ fontSize: "clamp(3rem, 12vw, 6rem)", lineHeight: "0.9", marginBottom: "40px" }}
            >
              <span className="block font-bold" style={{ color: "var(--foreground)" }}>
                Abhimanyu
              </span>
              <span className="block italic font-bold" style={{ color: "#888888" }}>
                Singh Rathore
              </span>
            </h1>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.2}>
            <p
              style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "48px", maxWidth: "480px" }}
            >
              Computer Science student focused on Artificial Intelligence and
              Machine Learning, building intelligent applications and practical
              AI-powered solutions with modern technologies.
            </p>
          </FadeUp>

          {/* CTA Buttons */}
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <a
                id="btn-github"
                href="https://github.com/Abhimanyu2211"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "12px 24px", fontSize: "0.875rem", fontWeight: 500,
                  background: "var(--foreground)", color: "white",
                  border: "none", cursor: "pointer", textDecoration: "none", minWidth: "130px"
                }}
              >
                GitHub
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
              <a
                id="btn-linkedin"
                href="https://www.linkedin.com/in/abhimanyurathore22"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "12px 24px", fontSize: "0.875rem", fontWeight: 500,
                  background: "transparent", color: "var(--foreground)",
                  border: "1px solid var(--border)", textDecoration: "none", minWidth: "130px"
                }}
              >
                LinkedIn
              </a>
              <a
                id="btn-contact"
                href="mailto:abhimanyusingh221106@gmail.com"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "12px 24px", fontSize: "0.875rem", fontWeight: 500,
                  background: "transparent", color: "var(--foreground)",
                  border: "1px solid var(--border)", textDecoration: "none", minWidth: "130px"
                }}
              >
                Get in touch
              </a>
            </div>
          </FadeUp>
        </div>

        {/* ── RIGHT — Carousel ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="w-full lg:mt-24 lg:pl-4"
        >
          <ImageCarousel />
        </motion.div>
      </div>
    </section>
  );
}
