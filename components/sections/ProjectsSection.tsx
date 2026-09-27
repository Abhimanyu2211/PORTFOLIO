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

const projects = [
  {
    num: "01",
    title: "SEO Engine — AI-Powered SEO Analysis Platform",
    desc: "AI-powered website analysis platform where users submit a website URL and receive a detailed SEO report. Analyzes website performance, identifies SEO issues and strengths, and generates actionable recommendations to improve search visibility.",
    tags: ["Python", "AI/LLM", "SEO", "Web Analysis"],
  },
  {
    num: "02",
    title: "ArtisanConnect — AI-Driven Market Linkage Platform",
    desc: "A concept for an AI-driven platform designed to help marginalized artisans showcase their products, organize product information, and connect with potential buyers. Focused on smart cataloging, product discovery, and improving market access for local artisans.",
    tags: ["AI", "Machine Learning", "Product Cataloging", "Marketplace"],
    github: "https://github.com/Abhimanyu2211/SIH",
  },
  {
    num: "03",
    title: "FlyUp Business Consulting Website",
    desc: "Designed and developed a responsive business consulting website for a Canada-based client. Replaced a generic template with a custom interface, adding tailored layouts, animations, and a modern visual experience. Delivered as a live production website.",
    tags: ["React", "JavaScript", "UI Design", "Responsive Design"],
    liveLink: "https://flyupconsulting.com/",
  },
  {
    num: "04",
    title: "Kaiten Software Official Website",
    desc: "Redesigned and rebuilt Kaiten Software's official website, replacing the previous cluttered interface with a cleaner and more modern experience. Focused on responsive layouts, visual consistency, performance, and user experience.",
    tags: ["Web Development", "JavaScript", "UI/UX", "Responsive Design"],
    liveLink: "https://kaitensoftware.com/",
  },
  {
    num: "05",
    title: "Code Snippet Manager",
    desc: "A lightweight web application for storing, organizing, searching, and reusing code snippets. Built as a practical project to strengthen JavaScript fundamentals, browser storage, DOM manipulation, and frontend problem-solving.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/Abhimanyu2211/code-snippet-manager",
  },
  {
    num: "06",
    title: "Friday — Python Voice Assistant",
    desc: "A simple Python-based voice assistant built to explore programming fundamentals and basic automation. Uses voice input and programmed commands to perform simple tasks and demonstrate how Python can be used to build interactive applications.",
    tags: ["Python", "Voice Assistant", "Automation", "Python Fundamentals"],
    github: "https://github.com/Abhimanyu2211/F.R.I.D.A.Y",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        borderTop: "1px solid var(--border)",
        backgroundColor: "#f2f0eb", // Beige background for the section
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
            03 — PROJECTS
          </p>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.05}>
          <h2
            className="font-playfair tracking-tight"
            style={{
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              fontWeight: 700,
              color: "var(--foreground)",
              marginBottom: "48px",
              marginTop: 0,
              lineHeight: "0.9",
            }}
          >
            Projects
          </h2>
        </FadeUp>

        {/* Projects Grid */}
        <FadeUp delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              backgroundColor: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#fcfbfa", // White card background
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.65rem",
                    color: "var(--muted)",
                    marginBottom: "16px",
                    display: "block",
                  }}
                >
                  {project.num}
                </span>

                <h3
                  className="font-playfair"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    marginBottom: "16px",
                    lineHeight: "1.3",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "var(--muted)",
                    lineHeight: "1.7",
                    marginBottom: "32px",
                  }}
                >
                  {project.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "24px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "#f0ebe1",
                        padding: "4px 8px",
                        fontSize: "0.65rem",
                        fontFamily: "monospace",
                        color: "var(--muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "12px", alignItems: "center", alignSelf: "flex-start", marginTop: "auto" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        backgroundColor: "transparent",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--foreground)";
                        e.currentTarget.style.color = "var(--background)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "var(--foreground)";
                      }}
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        backgroundColor: "var(--accent-blue)",
                        border: "1px solid var(--accent-blue)",
                        color: "#ffffff",
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.opacity = "0.9";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                    >
                      Live Site ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
