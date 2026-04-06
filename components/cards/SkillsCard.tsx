import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

const skills = [
  { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", icon: "▲", color: "from-slate-700 to-slate-900" },
  { name: "Tailwind", icon: "🎨", color: "from-cyan-500 to-blue-500" },
  { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", icon: "TS", color: "from-blue-600 to-indigo-600" },
  { name: "Node.js", icon: "🟢", color: "from-emerald-500 to-teal-700" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function SkillsCard() {
  return (
    <BentoCard className="h-full w-full border-white/5 bg-slate-950/50 backdrop-blur-md shadow-2xl overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-400/5" />
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col p-6 lg:p-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/50">
            Capabilities
          </p>
          <h3 className="font-display mb-3 text-4xl font-semibold tracking-tight text-white">
            Tech Stack
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Thoughtfully selected tools for building premium, scalable
            experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="mt-auto grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-4 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-indigo-400/60 hover:from-indigo-500/20 hover:to-cyan-500/10 hover:shadow-lg hover:shadow-indigo-500/20"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
            >
              {/* Icon background glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl bg-gradient-to-b from-indigo-500/10 to-transparent transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative z-10 mb-2 text-2xl transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill name */}
              <span className="relative z-10 text-center text-xs font-bold text-white/90 transition-colors group-hover:text-white">
                {skill.name}
              </span>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
                whileHover={{ width: "70%" }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </BentoCard>
  );
}
