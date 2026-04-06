import { motion } from "framer-motion";
import Image from "next/image";
import BentoCard from "../BentoCard";

export default function ProfileCard() {
  return (
    <BentoCard className="group relative h-full w-full overflow-hidden border-white/5 bg-slate-950/50 backdrop-blur-md shadow-2xl">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-cyan-400/8" />
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Profile Image with Enhanced Ring */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            {/* Animated outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 blur-xl opacity-50"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Image ring with multiple borders */}
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-indigo-400/30 ring-offset-2 ring-offset-transparent bg-dark shadow-[0_20px_50px_-24px_rgba(99,102,241,0.6)]">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Active status indicator */}
            <motion.div
              className="absolute bottom-0 right-0 h-6 w-6 rounded-full border-3 border-slate-950 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className="group/badge flex items-center gap-2.5 rounded-full border border-indigo-400/40 bg-indigo-500/10 backdrop-blur-lg px-5 py-2.5 shadow-lg hover:border-indigo-400/60 hover:bg-indigo-500/15 transition-all"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-semibold text-white tracking-wide">
              Available For Projects
            </span>
          </motion.div>
        </motion.div>
      </div>
    </BentoCard>
  );
}
