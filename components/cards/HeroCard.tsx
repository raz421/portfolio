"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

export default function HeroCard() {
  return (
    <BentoCard className="relative flex flex-col justify-between overflow-hidden border-white/10 bg-slate-950/60">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-cyan-400/4" />

      <div className="relative z-10 flex-1">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] text-white/48"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Front-end portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-tight text-white md:text-5xl">
            Golam Haider Maharaz
          </h1>
        </motion.div>

        <motion.p
          className="mt-5 max-w-xl text-lg leading-8 text-white/70 md:text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Product-focused web developer crafting clean, premium interfaces and
          conversion-ready digital experiences.
        </motion.p>

        <motion.p
          className="mt-4 max-w-2xl text-sm leading-7 text-white/54"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I focus on clear architecture, strong visual rhythm, and interfaces
          that feel expensive because every detail is intentional.
        </motion.p>
      </div>

      <motion.div
        className="relative z-10 mt-7 flex flex-wrap gap-2.5 text-sm text-white/70"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-white/72">
          Next.js
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-white/72">
          UI systems
        </span>
      </motion.div>
    </BentoCard>
  );
}
