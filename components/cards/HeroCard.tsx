"use client";

import {
  premiumEase,
  staggerContainer,
  staggerItem,
} from "@/components/animations/motionSystem";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { type PointerEvent } from "react";
import BentoCard from "../BentoCard";
import Button from "../Button";

const HERO_TITLE = "Golam Haider Maharaz";

const titleChars = HERO_TITLE.split("");

export default function HeroCard() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, {
    stiffness: 180,
    damping: 30,
    mass: 0.5,
  });
  const springY = useSpring(pointerY, {
    stiffness: 180,
    damping: 30,
    mass: 0.5,
  });

  const foregroundTransform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;
  const backgroundTransform = useMotionTemplate`translate3d(calc(${springX}px * -0.45), calc(${springY}px * -0.45), 0)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;

    pointerX.set(x * 0.03);
    pointerY.set(y * 0.03);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <BentoCard
      className="relative col-span-full overflow-hidden border-white/10 bg-slate-950/70 min-h-[90vh] flex flex-col justify-center"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      id="hero"
    >
      <motion.div
        className="absolute inset-0"
        style={{ transform: backgroundTransform }}
      >
        <motion.div
          className="absolute inset-[-18%] bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.25),transparent_34%),radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2),transparent_35%)]"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 1.2, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: [0.32, 0.72, 0.61, 1],
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/50 to-dark/80" />

      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center px-6 py-20 md:px-8 lg:px-12"
        style={{ transform: foregroundTransform }}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-indigo-300 font-semibold"
          variants={staggerItem}
        >
          <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />
          Fullstack Developer & UI Craftsman
        </motion.div>

        <div className="mb-12">
          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
            {titleChars.map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.18 + index * 0.025,
                  duration: 0.6,
                  ease: premiumEase,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          className="mb-12 max-w-2xl space-y-4"
          variants={staggerItem}
        >
          <p className="text-xl leading-relaxed text-white/90 font-medium">
            I build premium digital experiences with clean code, strategic
            design, and attention to every detail.
          </p>
          <p className="text-base leading-relaxed text-white/70">
            Specializing in React, Next.js, and modern web technologies—creating
            interfaces that are both beautiful and performant. Every project
            reflects a commitment to quality, user experience, and technical
            excellence.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-3 max-w-xl"
          variants={staggerItem}
        >
          <div className="border-l-2 border-indigo-500/50 pl-4">
            <p className="text-[0.75rem] uppercase tracking-[0.15em] text-white/50 font-semibold">
              Experience
            </p>
            <p className="mt-1 text-2xl font-bold text-white">5+</p>
            <p className="text-xs text-white/60">Years Building</p>
          </div>
          <div className="border-l-2 border-indigo-500/50 pl-4">
            <p className="text-[0.75rem] uppercase tracking-[0.15em] text-white/50 font-semibold">
              Projects
            </p>
            <p className="mt-1 text-2xl font-bold text-white">30+</p>
            <p className="text-xs text-white/60">Completed</p>
          </div>
          <div className="border-l-2 border-indigo-500/50 pl-4">
            <p className="text-[0.75rem] uppercase tracking-[0.15em] text-white/50 font-semibold">
              Tech Stack
            </p>
            <p className="mt-1 text-2xl font-bold text-white">Modern</p>
            <p className="text-xs text-white/60">Tools & Frameworks</p>
          </div>
        </motion.div>

        <motion.div
          className="mb-8 flex flex-wrap items-center gap-4"
          variants={staggerItem}
        >
          <Button
            href="#projects"
            className="hero-cta-glow px-8 py-4 text-base"
          >
            View Work
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            className="px-8 py-4 text-base"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.p className="text-sm text-white/60" variants={staggerItem}>
          💡 Open to opportunities, collaborations, and exciting projects
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-white/48 md:left-8 lg:left-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.4 }}
      >
        Scroll to explore
        <motion.span
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/72"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.span>
      </motion.div>
    </BentoCard>
  );
}
