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

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "C"],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "LLMs",
      "Prompt Engineering",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub"],
  },
  {
    category: "Core Computer Science",
    items: [
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-[120px]"
      style={{ borderTop: "1px solid var(--border)", backgroundColor: "#f2f0eb" }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
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
            }}
          >
            01 — About
          </p>
        </FadeUp>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-[60px] items-start">
          {/* ── LEFT — Bio ── */}
          <div>
            <FadeUp delay={0.05}>
              <h2
                className="font-playfair"
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                  lineHeight: "1.1",
                  marginBottom: "40px",
                  fontWeight: 700,
                  color: "var(--foreground)",
                }}
              >
                AIML Engineer in the making,{" "}
                <span style={{ fontStyle: "italic", color: "#888" }}>
                  builder at heart.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  color: "var(--muted)",
                  fontSize: "0.925rem",
                  lineHeight: "1.9",
                  maxWidth: "680px",
                }}
              >
                <p>
                  I&apos;m a{" "}
                  <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>
                    Computer Science &amp; Engineering student
                  </strong>{" "}
                  at Swami Keshvanand Institute of Technology, Management &amp; Gramothan,
                  with a strong interest in Artificial Intelligence, Machine Learning,
                  and intelligent software systems.
                </p>
                <p>
                  My current focus is building a strong foundation in machine learning
                  while exploring the rapidly evolving world of AI engineering, LLM
                  applications, and prompt engineering. I enjoy understanding how
                  intelligent systems work and turning those concepts into practical
                  software.
                </p>
                <p>
                  Alongside AI and machine learning, I actively work on my
                  problem-solving skills through{" "}
                  <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>
                    Data Structures and Algorithms in C++
                  </strong>
                  . I believe strong fundamentals in programming, mathematics, and
                  computer science are essential for building reliable and effective
                  intelligent systems.
                </p>
                <p>
                  I&apos;m continuously learning, experimenting, and building toward one
                  goal — becoming a strong AIML engineer capable of creating intelligent
                  systems that solve real-world problems.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT — Skills ── */}
          <div className="flex flex-col gap-8 w-full max-w-[420px] lg:ml-auto mt-12 lg:mt-0">
            {skillGroups.map((group, gi) => (
              <FadeUp key={group.category} delay={0.1 + gi * 0.05}>
                <div>
                  {/* Category heading */}
                  <p
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "12px",
                    }}
                  >
                    {group.category}
                  </p>

                  {/* Skills grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
                    }}
                  >
                    {group.items.map((item) => (
                      <div
                        key={item}
                        style={{
                          padding: "10px 14px",
                          fontSize: "0.8rem",
                          fontFamily: "monospace",
                          color: "var(--muted)",
                          backgroundColor: "#fcfbfa",
                          border: "1px solid var(--border)",
                          fontWeight: 400,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
