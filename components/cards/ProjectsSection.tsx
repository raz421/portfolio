"use client";

import {
  premiumEase,
  staggerContainer,
  staggerItem,
} from "@/components/animations/motionSystem";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { memo, useEffect, useMemo, useState } from "react";
import BentoCard from "../BentoCard";
import Button from "../Button";

interface Project {
  title: string;
  description: string;
  details: string;
  category: "AI" | "Web App" | "Dashboard";
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

interface ProjectItemProps extends Project {
  delay: number;
  onPreview: (project: Project) => void;
}

const PROJECTS: Project[] = [
  {
    title: "AI-Enhanced E-commerce Product Explorer",
    description:
      "AI-powered e-commerce product explorer that helps users discover products faster with smart filtering, search assistance, and a clean browsing experience.",
    details:
      "This product explorer combines semantic search, adaptive filtering, and a conversion-focused browsing flow for high-intent shoppers.",
    category: "AI",
    tags: ["Next.js", "AI", "E-commerce", "Tailwind CSS"],
    image: "/images/project-1.png",
    demoUrl: "https://ai-enhanced-e-commerce-product-expl-delta.vercel.app/",
    githubUrl:
      "https://github.com/raz421/AI-Enhanced-E-commerce-Product-Explorer",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content creation tool using OpenAI GPT-4 API with custom prompts, template library, and content optimization.",
    details:
      "A structured creation environment with prompt templates, revision loops, and export-friendly formatting designed for marketing teams.",
    category: "AI",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    image: "/images/project-placeholder.svg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Collaborative project management tool with real-time updates, team chat, file sharing, and analytics.",
    details:
      "A productivity dashboard balancing dense task data with clarity, including timeline intelligence and role-driven experiences.",
    category: "Dashboard",
    tags: ["Vue.js", "Firebase", "WebSocket", "Chart.js"],
    image: "/images/project-placeholder.svg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Analytics",
    description:
      "Analytics platform for tracking social media performance across multiple platforms with AI-powered insights and recommendations.",
    details:
      "This platform highlights growth trends, content quality signals, and campaign anomalies with digestible visual narratives.",
    category: "Web App",
    tags: ["React", "Python", "TensorFlow", "Redis"],
    image: "/images/project-placeholder.svg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
  },
];

const ProjectItem = memo(function ProjectItem({
  title,
  description,
  details,
  tags,
  image,
  demoUrl,
  githubUrl,
  category,
  delay,
  onPreview,
}: ProjectItemProps) {
  return (
    <motion.div
      layout
      className="project-tile group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950/50 p-4 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ delay, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -9, scale: 1.01 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/12 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-4 flex justify-center">
        <div className="relative w-full max-w-xl">
          {/* Laptop frame */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-600 to-slate-800 p-3 shadow-2xl">
            {/* Screen content */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black">
              <Image
                src={image}
                alt={`${title} preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Screen shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Laptop stand */}
          <div className="mx-auto mt-1 h-2 w-32 rounded-b-xl bg-gradient-to-b from-slate-600 to-slate-700 shadow-lg" />
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/44">
        <span>{category}</span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[0.62rem] text-white/60">
          Case study
        </span>
      </div>

      <h4 className="font-display relative z-10 mb-2 text-[1.15rem] font-semibold leading-tight text-white">
        {title}
      </h4>
      <p className="relative z-10 mb-3 text-sm leading-6 text-white/52 line-clamp-2">
        {description}
      </p>

      <div className="relative z-10 mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.02] px-3 py-1 text-xs text-white/58"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-auto flex flex-wrap gap-3">
        <Button variant="primary" href={demoUrl} className="px-4 py-2 text-sm">
          <ExternalLink size={14} />
          Demo
        </Button>
        <Button
          variant="secondary"
          href={githubUrl}
          className="px-4 py-2 text-sm"
        >
          <Github size={14} />
          Code
        </Button>
        <Button
          variant="ghost"
          className="px-4 py-2 text-sm"
          onClick={() =>
            onPreview({
              title,
              description,
              details,
              category,
              tags,
              image,
              demoUrl,
              githubUrl,
            })
          }
        >
          Preview
        </Button>
      </div>
    </motion.div>
  );
});

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | Project["category"]>(
    "All",
  );
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterOptions = useMemo(
    () => ["All", "AI", "Web App", "Dashboard"] as const,
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS;
    }

    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <BentoCard
      className="col-span-full mt-8 !border-0 bg-slate-950/60"
      id="projects"
    >
      <div className="mb-7">
        <p className="mb-2 text-xs uppercase tracking-[0.28em] text-white/40">
          Selected work
        </p>
        <motion.h2
          className="font-display mb-3 text-4xl font-semibold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Selected Projects
        </motion.h2>
        <motion.p
          className="max-w-2xl text-sm leading-7 text-white/52"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
        >
          A curated collection of products that combine visual clarity,
          practical architecture, and a deliberate attention to polish.
        </motion.p>
      </div>

      <motion.div
        className="mb-6 flex flex-wrap gap-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {filterOptions.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            variants={staggerItem}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] transition-all ${
              activeFilter === filter
                ? "border-accent/40 bg-accent/15 text-white shadow-[0_10px_28px_-18px_rgba(99,102,241,0.9)]"
                : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/20 hover:text-white"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectItem
              key={project.title}
              {...project}
              delay={0.12 + index * 0.08}
              onPreview={setActiveProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/55 px-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/92 shadow-[0_40px_120px_-48px_rgba(2,6,23,0.95)]"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.45, ease: premiumEase }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
                <button
                  type="button"
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white/80 transition hover:bg-slate-900"
                  onClick={() => setActiveProject(null)}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 sm:p-7">
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/45">
                  {activeProject.category}
                </p>
                <h3 className="font-display text-3xl font-semibold text-white">
                  {activeProject.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  {activeProject.details}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={activeProject.demoUrl}>
                    <ExternalLink size={14} />
                    Live demo
                  </Button>
                  <Button href={activeProject.githubUrl} variant="secondary">
                    <Github size={14} />
                    View code
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BentoCard>
  );
}
