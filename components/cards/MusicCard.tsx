import { motion } from "framer-motion";
import { Music, Play, Volume2 } from "lucide-react";
import BentoCard from "../BentoCard";

export default function MusicCard() {
  return (
    <BentoCard className="relative h-full w-full overflow-hidden border-white/10 bg-slate-950/50 backdrop-blur-md shadow-2xl">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-cyan-400/5" />
      <div className="absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      <motion.div
        className="relative z-10 flex h-full flex-col justify-between p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-auto">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/20 ring-2 ring-emerald-400/50">
              <Music size={18} className="text-emerald-300" />
            </div>
            <div>
              <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/80">
                Focus Soundtrack
              </h3>
              <p className="text-[0.55rem] uppercase tracking-[0.15em] text-white/50 mt-0.5">
                Curated
              </p>
            </div>
          </div>
          <motion.button
            className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 transition-all ring-2 ring-emerald-400/40 hover:ring-emerald-400/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={16} className="text-emerald-300 fill-emerald-300" />
          </motion.button>
        </div>

        {/* Music Info Section */}
        <motion.div
          className="mt-6 flex flex-col gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {/* Album Art Placeholder with Icon */}
          <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 p-4 backdrop-blur-sm hover:border-emerald-400/50 hover:from-emerald-500/20 transition-all">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/40 to-emerald-600/30 ring-1 ring-emerald-400/30">
              <Music size={28} className="text-emerald-200" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-semibold text-white truncate">
                Lo-fi Study Mix
              </p>
              <p className="text-[0.8rem] text-white/60 mt-1">
                Steady focus • No noise
              </p>
            </div>
          </div>

          {/* Progress bar with animated fill */}
          <div className="flex items-center gap-3 pt-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                initial={{ width: "0%" }}
                animate={{ width: "45%" }}
                transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-[0.7rem] font-semibold text-white/60 tabular-nums">
              2:34
            </span>
          </div>

          {/* Volume indicator */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <Volume2 size={14} className="text-white/40" />
            <div className="flex gap-1">
              {[0.4, 0.6, 0.8, 1].map((value, idx) => (
                <motion.div
                  key={idx}
                  className="h-1 w-1 rounded-full bg-emerald-400/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: value <= 0.7 ? 1 : 0.5 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </BentoCard>
  );
}
