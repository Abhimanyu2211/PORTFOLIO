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

const experiences = [
  {
    company: "KAITEN SOFTWARE",
    date: "May 2026 — July 2026",
    role: "Software Development Intern",
    points: [
      {
        title: "AI-Powered SEO Platform",
        desc: "Built an AI-powered SEO analysis platform where users submit a website URL and receive a detailed automated SEO report covering SEO issues, strengths, missing elements, and actionable improvements.",
      },
      {
        title: "Product Development",
        desc: "Translated business requirements into working features for a client-focused software environment, contributing to an AI product intended for integration into a larger platform.",
      },
      {
        title: "Web Development",
        desc: "Worked on responsive web solutions and AI-assisted development workflows while collaborating with developers to turn product requirements into practical software.",
      },
    ],
  },
  {
    company: "KISTECHNO TECHNOLOGIES",
    date: "July 2025",
    role: "Web Development Intern",
    points: [
      {
        title: "Frontend Development",
        desc: "Developed and implemented responsive frontend features using HTML, CSS, and JavaScript for client-facing web pages.",
      },
      {
        title: "Backend Exposure",
        desc: "Worked with PHP and MySQL and gained practical experience with backend development and database integration.",
      },
      {
        title: "Development Environment",
        desc: "Configured and worked with XAMPP for local development, testing, debugging, and feature implementation.",
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="grid-bg"
      style={{
        padding: "120px 0",
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div
        className="w-full max-w-[1440px] mx-auto"
        style={{ padding: "0 96px" }}
      >
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
            02 — EXPERIENCE
          </p>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.1}>
          <h2
            className="font-playfair tracking-tight"
            style={{
              fontSize: "clamp(4rem, 6.5vw, 6rem)",
              lineHeight: "0.9",
              marginBottom: "120px",
            }}
          >
            <span
              className="block font-bold"
              style={{ color: "var(--foreground)" }}
            >
              Where I've
            </span>
            <span
              className="block italic font-bold"
              style={{ color: "#888888" }}
            >
              worked.
            </span>
          </h2>
        </FadeUp>

        {/* Experience List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
                gap: "40px",
                alignItems: "start",
              }}
            >
              {/* Left Column: Company & Date */}
              <FadeUp delay={0.1}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span
                    style={{
                      color: "var(--accent-blue)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {exp.company}
                  </span>
                  <span
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.85rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {exp.date}
                  </span>
                </div>
              </FadeUp>

              {/* Right Column: Role & Details */}
              <FadeUp delay={0.2}>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <h3
                    className="font-playfair"
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      margin: 0,
                    }}
                  >
                    {exp.role}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      borderLeft: "2px solid var(--border)",
                      paddingLeft: "24px",
                    }}
                  >
                    {exp.points.map((point, ptIdx) => (
                      <p
                        key={ptIdx}
                        style={{
                          margin: 0,
                          fontSize: "1.05rem",
                          lineHeight: "1.8",
                          color: "var(--muted)",
                          maxWidth: "100%",
                        }}
                      >
                        <strong
                          style={{
                            color: "var(--foreground)",
                            fontWeight: 600,
                          }}
                        >
                          {point.title}:
                        </strong>{" "}
                        {point.desc}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
