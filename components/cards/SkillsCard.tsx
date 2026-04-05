"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

const skills = [
  { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "Tailwind", icon: "🎨", color: "from-cyan-500 to-blue-500" },
  { name: "JavaScript", icon: "JS", color: "from-yellow-500 to-orange-500" },
  { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-700" },
  { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-700" },
];

export default function SkillsCard() {
  return (
    <BentoCard className="col-span-1 row-span-1 border-white/10 bg-slate-950/60">
      <p className="mb-2 text-xs uppercase tracking-[0.28em] text-white/40">
        Capabilities
      </p>
      <h3 className="font-display mb-2 text-2xl font-semibold text-white">
        Tech Stack
      </h3>
      <p className="mb-4 text-sm leading-6 text-white/50">
        Tools I reach for when a build needs to feel premium and dependable.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            whileHover={{ y: -2 }}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-[0.65rem] font-bold text-white shadow-lg shadow-black/20`}
            >
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-white/72">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
}
