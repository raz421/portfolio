"use client";

import { motion } from "framer-motion";
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
    <BentoCard className="col-span-2 row-span-1 flex flex-col justify-between overflow-hidden border-white/10 bg-slate-950/60">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-cyan-400/3" />

      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
          Skill intelligence matrix
        </div>

        <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-xl border border-white/10 bg-slate-950/30 p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/38">
                Overall proficiency
              </p>
              <p className="mt-3 font-display text-3xl font-semibold text-white">
                {averageProgress}%
              </p>
              <p className="mt-2 text-xs text-white/46">
                Current average across core stack
              </p>

              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-accent to-cyan-400"
                  style={{ width: `${averageProgress}%` }}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-2">
                  <p className="text-white/42">Confidence</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {averageConfidence}%
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-2">
                  <p className="text-white/42">Projects</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {totalProjects}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {stackProgress.slice(0, 4).map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex items-center justify-between text-xs text-white/54">
                    <span>{skill.name}</span>
                    <span>
                      {skill.percent}% · {skill.confidence}% conf
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.tone}`}
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[0.65rem] text-white/40">
                    <span>{skill.projects} projects</span>
                    <span>Trend {skill.trend}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="font-display mb-2 text-3xl font-semibold text-white">
                Capability intelligence
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-white/50">
                Dynamic profile combining proficiency, confidence, and delivery
                depth.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mb-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-xs text-white/58">
            <p className="uppercase tracking-[0.2em] text-white/38">
              Top Skill
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {topSkill.name}
            </p>
            <p className="mt-1 text-white/45">
              {topSkill.percent}% proficiency
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-xs text-white/58">
            <p className="uppercase tracking-[0.2em] text-white/38">
              Fastest Growth
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {growthSkill.name}
            </p>
            <p className="mt-1 text-white/45">{growthSkill.trend}% momentum</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5 text-xs text-white/54">
          {stackProgress.map((skill) => (
            <span
              key={skill.name}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
