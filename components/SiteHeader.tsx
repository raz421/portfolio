"use client";

import { motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";
import { type MouseEvent, useEffect, useMemo, useState } from "react";
import Button from "./Button";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Project", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SiteHeader() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeLink, setActiveLink] = useState("#top");

  const observedSections = useMemo(() => navItems.map((item) => item.href), []);

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme === "light" || currentTheme === "dark") {
      setTheme(currentTheme);
      return;
    }

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      document.documentElement.dataset.theme = storedTheme;
    }
  }, []);

  useEffect(() => {
    const nodes = observedSections
      .map((selector) => document.querySelector(selector))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveLink(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-32% 0px -55% 0px",
        threshold: [0.25, 0.4, 0.7],
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [observedSections]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveLink(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5"
      >
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 px-4 py-4 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.95)] backdrop-blur-2xl sm:px-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div
                className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-cyan-400/20" />
                <span className="relative z-10 text-[0.65rem] font-semibold tracking-[0.32em] text-white/90">
                  MH
                </span>
              </motion.div>

              <div className="min-w-0">
                <p className="text-[0.65rem] uppercase tracking-[0.38em] text-white/38">
                  Premium portfolio
                </p>
                <h1 className="truncate font-display text-xl font-semibold text-white sm:text-2xl">
                  Golam Haider Maharaz
                </h1>
              </div>
            </div>

            <motion.div
              className="flex flex-col gap-3 lg:flex-row lg:items-center"
              variants={navContainer}
              initial="hidden"
              animate="show"
            >
              <motion.button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to bright mode"
                    : "Switch to dark mode"
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-wide text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                {theme === "dark" ? (
                  <>
                    <SunMedium size={15} />
                  </>
                ) : (
                  <>
                    <MoonStar size={15} />
                  </>
                )}
              </motion.button>

              <motion.nav className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={navItem}
                    className="relative"
                  >
                    {activeLink === item.href && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="pointer-events-none absolute inset-0 rounded-full bg-white/[0.08] shadow-[0_0_26px_-14px_rgba(99,102,241,0.9)]"
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 28,
                        }}
                      />
                    )}
                    <Button
                      href={item.href}
                      variant="ghost"
                      className="shrink-0 px-4 py-2 text-xs text-white/78"
                      onClick={handleNavClick(item.href)}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
