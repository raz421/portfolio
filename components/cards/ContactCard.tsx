"use client";

import { motion } from "framer-motion";
import { Clock, Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import BentoCard from "../BentoCard";
import Button from "../Button";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "maharazbhuiyan3@gmail.com",
    href: "mailto:maharazbhuiyan3@gmail.com",
    color: "text-white/80",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@raz421",
    href: "https://github.com/raz421",
    color: "text-white/80",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Maharaz Bhuiyan",
    href: "https://www.linkedin.com/in/maharaz-bhuiyan-1676ab339",
    color: "text-white/80",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@maharaz_bhuiyan",
    href: "https://twitter.com",
    color: "text-white/80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function ContactCard() {
  return (
    <BentoCard
      className="border-white/10 bg-slate-950/50 backdrop-blur-md overflow-hidden shadow-2xl"
      id="contact"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 via-transparent to-pink-400/5" />
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

      <div className="relative z-10 p-6 lg:p-8">
        {/* Header Section */}
        <motion.div
          className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title and Description */}
          <div className="flex-1">
            <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-white/50 font-bold">
              Get in Touch
            </p>
            <h3 className="font-display text-4xl font-semibold tracking-tight text-white mb-4">
              Let&apos;s Connect
            </h3>
            <p className="max-w-xl text-base leading-relaxed text-white/70">
              Available for focused collaborations, innovative product launches,
              and design refreshes that demand a premium, refined approach.
            </p>
          </div>

          {/* Response Time Card */}
          <motion.div
            className="shrink-0 rounded-2xl border border-rose-400/30 bg-gradient-to-br from-rose-500/15 to-transparent p-4 text-center backdrop-blur-sm hover:border-rose-400/50 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock size={16} className="text-white/60" />
              <p className="text-[0.6rem] uppercase tracking-[0.15em] text-white/70 font-bold">
                Response Time
              </p>
            </div>
            <p className="text-sm font-bold text-white">~24 Hours</p>
          </motion.div>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/15 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-500/25"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-600/20 text-indigo-400 transition-all group-hover:scale-110 group-hover:bg-indigo-600/40">
                <contact.icon size={20} className="text-indigo-300" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-[0.6rem] uppercase tracking-[0.15em] text-white/60 font-bold">
                  {contact.label}
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                  {contact.value}
                </p>
              </div>

              {/* Arrow indicator */}
              <motion.div
                className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -5 }}
                whileHover={{ x: 3 }}
              >
                <Send size={16} className="text-indigo-300" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Primary CTA Section */}
        <motion.div
          className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex-1">
            <p className="text-sm font-medium text-white/70">
              ✨ Best for project inquiries, collaborations, and exclusive
              portfolio work.
            </p>
          </div>
          <Button
            href="mailto:maharazbhuiyan3@gmail.com"
            className="shrink-0 gap-2 px-6 py-3 text-sm font-bold"
          >
            <Mail size={16} />
            Send Email
          </Button>
        </motion.div>
      </div>
    </BentoCard>
  );
}
