"use client";

import { motion } from "framer-motion";
import Button from "./Button";

const navItems = [
  { label: "Project", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50"
    >
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 px-4 py-4 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.95)] backdrop-blur-2xl sm:px-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-cyan-400/20" />
              <span className="relative z-10 text-[0.65rem] font-semibold tracking-[0.32em] text-white/90">
                MH
              </span>
            </div>

            <div className="min-w-0">
              <p className="text-[0.65rem] uppercase tracking-[0.38em] text-white/38">
                Premium portfolio
              </p>
              <h1 className="truncate font-display text-xl font-semibold text-white sm:text-2xl">
                Golam Haider Maharaz
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <nav className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  variant="ghost"
                  className="shrink-0 px-4 py-2 text-xs text-white/78"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
