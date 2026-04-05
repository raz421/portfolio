"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import BentoCard from "../BentoCard";

export default function ProfileCard() {
  return (
    <BentoCard className="group relative col-span-1 row-span-1 overflow-hidden border-white/10 bg-slate-950/60">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cyan-400/5" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="relative mb-4 group/image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-cyan-400 to-indigo-400 blur-md opacity-40 transition-opacity group-hover/image:opacity-70" />

            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/10 bg-dark shadow-[0_14px_40px_-24px_rgba(59,130,246,0.55)]">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            <motion.div
              className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-dark-lighter bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.35)]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles size={12} className="text-accent" />
            <span className="text-xs font-medium text-white/80">
              Open for select work
            </span>
          </motion.div>
        </motion.div>
      </div>
    </BentoCard>
  );
}
