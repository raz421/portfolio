"use client";

import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import BentoCard from "../BentoCard";

export default function MusicCard() {
  return (
    <BentoCard className="col-span-1 row-span-1 relative overflow-hidden border-white/10 bg-slate-950/60">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/4 via-transparent to-cyan-400/3" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="mb-4 flex items-center gap-2">
          <Music2 size={18} className="text-white/65" />
          <h3 className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
            Focus soundtrack
          </h3>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.05] text-white/75">
            <Music2 size={20} />
          </div>

          <div className="flex-1">
            <p className="mb-1 font-semibold text-white">Lo-fi study mix</p>
            <p className="text-xs text-white/42">Steady focus, no noise</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-emerald-400"
              initial={{ width: "0%" }}
              animate={{ width: "60%" }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </div>
          <span className="text-xs text-white/35">2:34</span>
        </div>
      </motion.div>
    </BentoCard>
  );
}
