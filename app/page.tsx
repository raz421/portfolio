"use client";

import { pageTransition, revealUp } from "@/components/animations/motionSystem";
import AboutCard from "@/components/cards/AboutCard";
import ContactCard from "@/components/cards/ContactCard";
import HeroCard from "@/components/cards/HeroCard";
import LocationCard from "@/components/cards/LocationCard";
import MusicCard from "@/components/cards/MusicCard";
import ProfileCard from "@/components/cards/ProfileCard";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectsSection from "@/components/cards/ProjectsSection";
import SkillsCard from "@/components/cards/SkillsCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type PointerEvent, useEffect, useRef } from "react";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.4,
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const spotlightX = useMotionValue(56);
  const spotlightY = useMotionValue(16);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(99,102,241,0.22), transparent 26%), radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(34,211,238,0.12), transparent 38%)`;

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".story-section").forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 72 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -16,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        // Removed pinning that conflicts with sticky header
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - bounds.left) / bounds.width) * 100;
    const nextY = ((event.clientY - bounds.top) / bounds.height) * 100;

    spotlightX.set(Math.max(0, Math.min(100, nextX)));
    spotlightY.set(Math.max(0, Math.min(100, nextY)));
  };

  return (
    <>
      <SiteHeader />
      <main
        ref={rootRef}
        id="top"
        className="relative min-h-screen"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          spotlightX.set(56);
          spotlightY.set(16);
        }}
      >
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ y: bgY }}
          >
            <div className="aurora-float absolute left-[-12%] top-[-10%] h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
            <div className="aurora-float absolute right-[-10%] top-[14%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="aurora-float absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.28)_40%,rgba(2,6,23,0.7)_100%)]" />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen"
            style={{ backgroundImage: spotlight }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0 opacity-[0.22] will-change-transform"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 80, repeat: Infinity, ease: "linear" }
            }
            style={{
              backgroundImage:
                "conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.18), rgba(34,211,238,0.1), rgba(99,102,241,0.18))",
              filter: "blur(72px)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8 pt-32">
          <motion.div variants={pageTransition} initial="hidden" animate="show">
            <motion.section
              ref={heroRef}
              className="story-section mt-12"
              variants={revealUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div data-parallax>
                <HeroCard />
              </div>
            </motion.section>

            {/* PREMIUM GRID SECTION 1 */}
            <motion.section
              className="story-section mt-12 space-y-6"
              variants={revealUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.14 }}
              data-parallax
            >
              {/* First Row: Profile + Skills */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <ProfileCard />
                </div>
                <div className="lg:col-span-2">
                  <SkillsCard />
                </div>
              </div>

              {/* Second Row: About (Full Width) */}
              <div className="grid grid-cols-1 gap-6">
                <AboutCard />
              </div>

              {/* Third Row: Location + Music */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <LocationCard />
                </div>
                <div>
                  <MusicCard />
                </div>
              </div>
            </motion.section>

            {/* PROJECT SHOWCASE SECTION */}
            <motion.section
              className="story-section mt-16 space-y-8"
              variants={revealUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Full Width Project Card */}
              <div>
                <ProjectCard />
              </div>

              {/* Contact Card */}
              <div>
                <ContactCard />
              </div>
            </motion.section>

            <motion.div
              ref={projectRef}
              className="story-section mt-8"
              variants={revealUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectsSection />
            </motion.div>

            <motion.div
              className="story-section"
              variants={revealUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.14 }}
            >
              <SiteFooter />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
