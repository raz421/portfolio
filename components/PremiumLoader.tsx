"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PremiumLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const brand = "MAHARAZ".split("");

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((value) => {
        const increment = value > 78 ? 2 : 5;
        return Math.min(100, value + increment);
      });
    }, 70);

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1900);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(progressTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-slate-950"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -18, scale: 0.99, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.26),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.2),transparent_36%),linear-gradient(180deg,#020617_0%,#020617_60%,#0f172a_100%)]" />

          <motion.div
            className="absolute left-[-20%] top-1/2 h-px w-[140%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: "20%", opacity: [0, 1, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: [0.32, 0.72, 0.61, 1],
            }}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="text-[0.68rem] uppercase tracking-[0.42em] text-white/55"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Loading Experience
            </motion.p>

            <div className="mt-4 flex items-center justify-center gap-1 font-display text-5xl font-semibold text-white md:text-7xl">
              {brand.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="mt-8 h-2 w-full max-w-md overflow-hidden rounded-full border border-white/15 bg-white/10"
              initial={{ opacity: 0, scaleX: 0.9 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent via-indigo-400 to-cyan-300"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-sm text-white/58"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Crafting a polished, motion-first portfolio · {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
