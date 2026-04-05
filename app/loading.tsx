"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.2),transparent_36%),radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.14),transparent_34%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />

      <div className="relative z-10 w-full max-w-xl">
        <motion.p
          className="text-center text-[0.68rem] uppercase tracking-[0.42em] text-white/50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Preparing Interface
        </motion.p>

        <motion.div
          className="mt-6 h-2 overflow-hidden rounded-full border border-white/15 bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent via-indigo-400 to-cyan-300"
            initial={{ x: "-35%", width: "35%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </main>
  );
}
