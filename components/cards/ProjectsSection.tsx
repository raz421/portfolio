"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import BentoCard from "../BentoCard";
import Button from "../Button";

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  delay: number;
}

function ProjectItem({
  title,
  description,
  tags,
  image,
  demoUrl,
  githubUrl,
  delay,
}: ProjectItemProps) {
  return (
    <motion.div
      className="group flex h-full flex-col rounded-[1.35rem] bg-slate-950/50 p-4 transition-all hover:-translate-y-0.5 hover:bg-slate-950/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="mb-4 overflow-hidden rounded-2xl bg-slate-900/70">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-80" />
        </div>
      </div>

      <h4 className="font-display mb-2 text-[1.15rem] font-semibold leading-tight text-white">
        {title}
      </h4>
      <p className="mb-3 text-sm leading-6 text-white/52 line-clamp-2">
        {description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.02] px-3 py-1 text-xs text-white/58"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
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
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Enhanced E-commerce Product Explorer",
      description:
        "AI-powered e-commerce product explorer that helps users discover products faster with smart filtering, search assistance, and a clean browsing experience.",
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
      tags: ["React", "OpenAI", "Node.js", "MongoDB"],
      image: "/images/project-placeholder.svg",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management Dashboard",
      description:
        "Collaborative project management tool with real-time updates, team chat, file sharing, and analytics.",
      tags: ["Vue.js", "Firebase", "WebSocket", "Chart.js"],
      image: "/images/project-placeholder.svg",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics platform for tracking social media performance across multiple platforms with AI-powered insights and recommendations.",
      tags: ["React", "Python", "TensorFlow", "Redis"],
      image: "/images/project-placeholder.svg",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
    },
  ];

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

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.title}
            {...project}
            delay={0.2 + index * 0.1}
          />
        ))}
      </div>
    </BentoCard>
  );
}
