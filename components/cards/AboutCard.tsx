"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

export default function AboutCard() {
  const aboutPoints = [
    "I build interfaces that feel clean, fast, and trustworthy from the first interaction.",
    "My focus is the mix of design systems, performance, and modern JavaScript.",
  ];

  return (
    <BentoCard
      className="col-span-1 row-span-2 flex min-h-0 flex-col border-white/10 bg-slate-950/60"
      id="about"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-cyan-400/3" />

      <motion.h2
        className="font-display relative z-10 mb-2 text-3xl font-semibold text-white"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="relative z-10 mb-4 text-[0.68rem] uppercase tracking-[0.26em] text-white/42"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.25 }}
      >
        Product minded frontend developer
      </motion.p>

      <motion.div
        className="relative z-10 flex-1 space-y-3 overflow-y-auto pr-1 leading-7 text-white/68"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {aboutPoints.map((point, index) => (
          <motion.p
            key={point}
            className="max-w-[28ch] text-[0.96rem] leading-7"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 + index * 0.06, duration: 0.25 }}
          >
            {point}
          </motion.p>
        ))}

        <motion.div
          className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/58"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.25 }}
        >
          <span className="text-white/76">Clean UI</span>
          <span>Fast delivery</span>
          <span>Strong visual hierarchy</span>
        </motion.div>
      </motion.div>
    </BentoCard>
  );
}
