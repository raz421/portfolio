"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PremiumLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-slate-950"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.26),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.2),transparent_36%),linear-gradient(180deg,#020617_0%,#020617_60%,#0f172a_100%)]" />

          <motion.div
            className="absolute left-[-20%] top-1/2 h-px w-[140%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: "20%", opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
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

            <motion.h2
              className="mt-4 font-display text-5xl font-semibold text-white md:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              WELCOME
            </motion.h2>

            <motion.div
              className="mt-8 h-2 w-full max-w-md overflow-hidden rounded-full border border-white/15 bg-white/10"
              initial={{ opacity: 0, scaleX: 0.9 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent via-indigo-400 to-cyan-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.25,
                }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-sm text-white/58"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Crafting a polished, motion-first portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
