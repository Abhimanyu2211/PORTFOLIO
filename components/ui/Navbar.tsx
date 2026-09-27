"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "https://github.com", target: "_blank" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-12 lg:px-24 h-[68px] transition-all duration-300 flex items-center justify-center ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
          : "bg-[var(--background)] border-b border-[var(--border)]"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-[var(--foreground)] font-medium text-[0.95rem] tracking-tight hover:opacity-70 transition-opacity">
          Abhimanyu Singh Rathore
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              className="text-[var(--muted)] text-[13px] font-normal hover:text-[var(--foreground)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)] transition-all duration-200 ml-1"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.svg
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] py-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-3 text-[var(--muted)] text-sm font-medium hover:text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-8 py-3">
              <button onClick={toggle} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
                {theme === "dark" ? "☀ Light mode" : "☾ Dark mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
