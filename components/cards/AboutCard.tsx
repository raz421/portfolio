import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import BentoCard from "../BentoCard";

export default function AboutCard() {
  const aboutPoints = [
    "I build interfaces that feel clean, fast, and trustworthy from the first interaction.",
    "My focus is the mix of design systems, performance, and modern JavaScript.",
  ];

  const strengths = [
    "Clean & Intuitive UI",
    "Performance Obsessed",
    "Visual Hierarchy Mastery",
  ];

  return (
    <BentoCard
      className="flex h-full w-full min-h-[320px] flex-col border-white/5 bg-slate-950/50 backdrop-blur-md shadow-2xl overflow-hidden"
      id="about"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-400/8" />
      <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative z-10 p-6 lg:p-8"
      >
        {/* Header */}
        <div className="mb-8">
          <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50">
            About
          </p>
          <h2 className="font-display mb-4 text-4xl font-semibold tracking-tight text-white">
            About Me
          </h2>
          <p className="max-w-lg text-sm font-medium text-white/80 leading-relaxed">
            Product-minded Frontend Developer
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col justify-between gap-8">
          {/* Description paragraphs */}
          <div className="space-y-5">
            {aboutPoints.map((point, index) => (
              <motion.p
                key={point}
                className="text-base leading-relaxed text-white/75 max-w-2xl"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                {point}
              </motion.p>
            ))}
          </div>

          {/* Strengths grid */}
          <motion.div
            className="mt-auto grid gap-3 pt-6 border-t border-white/5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
              Values
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm transition-all hover:border-indigo-400/50 hover:bg-indigo-500/10"
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400/70 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-sm font-medium text-white/80 group-hover:text-white/90 transition-colors">
                    {strength}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </BentoCard>
  );
}
