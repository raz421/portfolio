"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";
import BentoCard from "../BentoCard";

const stackProgress = [
  {
    name: "JavaScript",
    percent: 92,
    confidence: 94,
    projects: 18,
    trend: "+6",
    tone: "from-yellow-300 to-amber-500",
  },
  {
    name: "Next.js",
    percent: 88,
    confidence: 90,
    projects: 12,
    trend: "+9",
    tone: "from-indigo-300 to-violet-500",
  },
  {
    name: "React",
    percent: 90,
    confidence: 92,
    projects: 16,
    trend: "+5",
    tone: "from-cyan-300 to-sky-500",
  },
  {
    name: "Node.js",
    percent: 84,
    confidence: 86,
    projects: 11,
    trend: "+7",
    tone: "from-emerald-300 to-green-500",
  },
  {
    name: "EJS",
    percent: 78,
    confidence: 80,
    projects: 7,
    trend: "+2",
    tone: "from-fuchsia-300 to-pink-500",
  },
  {
    name: "API Design",
    percent: 82,
    confidence: 87,
    projects: 10,
    trend: "+8",
    tone: "from-blue-300 to-indigo-500",
  },
];

export default function ProjectCard() {
  const averageProgress = Math.round(
    stackProgress.reduce((total, item) => total + item.percent, 0) /
      stackProgress.length,
  );
  const averageConfidence = Math.round(
    stackProgress.reduce((total, item) => total + item.confidence, 0) /
      stackProgress.length,
  );
  const totalProjects = stackProgress.reduce(
    (total, item) => total + item.projects,
    0,
  );
  const topSkill = [...stackProgress].sort((a, b) => b.percent - a.percent)[0];
  const growthSkill = [...stackProgress].sort(
    (a, b) => Number(b.trend) - Number(a.trend),
  )[0];

  return (
    <BentoCard className="flex flex-col justify-between overflow-hidden border-white/10 bg-slate-950/50 backdrop-blur-md shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-cyan-400/5" />
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative z-10 p-6 lg:p-8">
        {/* Header Badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-white/70 font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Zap size={14} className="text-indigo-400" />
          Skill Intelligence Matrix
        </motion.div>

        {/* Main Stats Grid */}
        <motion.div
          className="mb-8 overflow-hidden rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 to-transparent p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            {/* Stats Box */}
            <div className="rounded-xl border border-indigo-400/30 bg-indigo-500/5 p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/60 font-semibold">
                Overall Proficiency
              </p>
              <p className="mt-3 font-display text-4xl font-bold text-white">
                {averageProgress}%
              </p>
              <p className="mt-2 text-xs text-white/50 font-medium">
                Current average across core stack
              </p>

              <div className="mt-5 h-2 rounded-full bg-indigo-500/20">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${averageProgress}%` }}
                  transition={{
                    delay: 0.3,
                    duration: 1.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-indigo-400/20 bg-indigo-500/5 px-3 py-2">
                  <p className="text-[0.6rem] uppercase tracking-widest text-white/50">
                    Confidence
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {averageConfidence}%
                  </p>
                </div>
                <div className="rounded-lg border border-indigo-400/20 bg-indigo-500/5 px-3 py-2">
                  <p className="text-[0.6rem] uppercase tracking-widest text-white/50">
                    Projects
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {totalProjects}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              {stackProgress.slice(0, 4).map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2 + idx * 0.05,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="flex items-center justify-between text-xs text-white/70 mb-1.5 font-semibold">
                    <span>{skill.name}</span>
                    <span className="text-white/80">{skill.percent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <motion.div
                      className={`h-1.5 rounded-full bg-gradient-to-r ${skill.tone} shadow-lg`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percent}%` }}
                      transition={{
                        delay: 0.3 + idx * 0.05,
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[0.6rem] text-white/50">
                    <span>{skill.projects} projects</span>
                    <span className="text-white/70 font-semibold">
                      +{skill.trend}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section with Top Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl font-semibold text-white mb-2">
              Capability Intelligence
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-white/60 font-medium">
              Dynamic expertise profile combining proficiency, confidence, and
              project delivery depth.
            </p>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            {/* Top Skill */}
            <motion.div
              className="rounded-xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/15 to-transparent px-4 py-4 hover:border-indigo-400/50 transition-all"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <p className="text-[0.6rem] uppercase tracking-[0.15em] text-white/60 font-bold">
                🔥 Top Skill
              </p>
              <p className="mt-2 text-base font-bold text-white">
                {topSkill.name}
              </p>
              <p className="mt-1 text-xs text-white/60">
                {topSkill.percent}% proficiency
              </p>
            </motion.div>

            {/* Growth Skill */}
            <motion.div
              className="rounded-xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/15 to-transparent px-4 py-4 hover:border-indigo-400/50 transition-all"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <p className="text-[0.6rem] uppercase tracking-[0.15em] text-white/60 font-bold flex items-center gap-1.5">
                <TrendingUp size={13} /> Fastest Growth
              </p>
              <p className="mt-2 text-base font-bold text-white">
                {growthSkill.name}
              </p>
              <p className="mt-1 text-xs text-white/60 font-medium">
                {growthSkill.trend}% momentum
              </p>
            </motion.div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {stackProgress.map((skill, idx) => (
              <motion.span
                key={skill.name}
                className="rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.15em] text-indigo-200 font-semibold hover:border-indigo-400/50 hover:bg-indigo-500/20 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + idx * 0.03,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </BentoCard>
  );
}
