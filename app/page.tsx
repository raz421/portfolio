"use client";

import AboutCard from "@/components/cards/AboutCard";
import ContactCard from "@/components/cards/ContactCard";
import LocationCard from "@/components/cards/LocationCard";
import MusicCard from "@/components/cards/MusicCard";
import ProfileCard from "@/components/cards/ProfileCard";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectsSection from "@/components/cards/ProjectsSection";
import SkillsCard from "@/components/cards/SkillsCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.4,
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-accent via-indigo-400 to-cyan-300"
        style={{ scaleX: smoothProgress }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: bgY }}
      >
        <div className="aurora-float absolute left-[-12%] top-[-10%] h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="aurora-float absolute right-[-10%] top-[14%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="aurora-float absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.28)_40%,rgba(2,6,23,0.7)_100%)]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SiteHeader />

          <motion.section
            className="mt-12 grid auto-rows-[210px] grid-cols-1 gap-5 md:grid-cols-3 md:gap-7 lg:grid-cols-4"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.14 }}
          >
            <div className="md:col-span-1 lg:col-span-1 md:row-span-1">
              <ProfileCard />
            </div>

            <div className="md:col-span-1 lg:col-span-1 md:row-span-1">
              <SkillsCard />
            </div>

            <div className="row-span-2 md:col-span-1 lg:col-span-1">
              <AboutCard />
            </div>

            <div className="md:col-span-1 lg:col-span-1 md:row-span-1">
              <LocationCard />
            </div>

            <div className="md:col-span-1 lg:col-span-1 md:row-span-1">
              <MusicCard />
            </div>
          </motion.section>

          <motion.section
            className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard />
            <ContactCard />
          </motion.section>

          <motion.div
            className="mt-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectsSection />
          </motion.div>

          <SiteFooter />
        </motion.div>
      </div>
    </main>
  );
}
