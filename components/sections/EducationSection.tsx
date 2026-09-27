"use client";

import { motion } from "framer-motion";

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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const certifications = [
  {
    title: "Programming in Java — NPTEL Gold Medal",
    issuer: "NPTEL",
  },
  {
    title: "Data Structures & Algorithms using Python — NPTEL Silver Medal",
    issuer: "NPTEL",
  },
  {
    title: "AI/ML using Java",
    issuer: "Oracle Academy",
  },
  {
    title: "Developing Soft Skills and Personality — NPTEL Gold Medal",
    issuer: "NPTEL",
  },
  {
    title: "PostgreSQL",
    issuer: "Spoken Tutorial · IIT Bombay",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="grid-bg py-16 md:py-24 lg:py-[120px]"
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="w-full px-6 md:px-8 lg:px-[30px]">
        {/* Section label */}
        <FadeUp delay={0}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "24px",
              fontFamily: "monospace",
            }}
          >
            04 — EDUCATION
          </p>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.1}>
          <h2
            className="font-playfair tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 5.5vw, 5rem)",
              lineHeight: "0.9",
              marginBottom: "80px",
            }}
          >
            <span
              className="block font-bold"
              style={{ color: "var(--foreground)" }}
            >
              Academic
            </span>
            <span
              className="block italic font-bold"
              style={{ color: "#888888" }}
            >
              background.
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-start">
          {/* Left Column: DEGREE */}
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h3
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  fontFamily: "monospace",
                  marginBottom: "8px",
                }}
              >
                DEGREE
              </h3>
              
              <div
                className="bg-white p-6 md:p-8 lg:px-12 lg:py-8 border border-[var(--border)]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    color: "var(--accent-blue)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    fontFamily: "monospace",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  SWAMI KESHVANAND INSTITUTE OF TECHNOLOGY, MANAGEMENT & GRAMOTHAN
                </span>
                
                <h4
                  className="font-playfair"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    lineHeight: "1.3",
                    margin: 0,
                  }}
                >
                  B.Tech in Computer Science & Engineering
                </h4>
                
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      color: "var(--muted)",
                    }}
                  >
                    2024 — 2028
                  </span>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      color: "var(--muted)",
                    }}
                  >
                    CGPA: 9.47 / 10
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: CERTIFICATIONS & ACHIEVEMENTS */}
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h3
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  fontFamily: "monospace",
                  marginBottom: "8px",
                }}
              >
                CERTIFICATIONS & ACHIEVEMENTS
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column" }}>
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      padding: "24px 0",
                      borderBottom: idx !== certifications.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent-blue)",
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--foreground)",
                          lineHeight: "1.4",
                        }}
                      >
                        {cert.title}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "monospace",
                          color: "var(--muted)",
                        }}
                      >
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
