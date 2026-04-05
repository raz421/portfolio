"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import BentoCard from "../BentoCard";
import Button from "../Button";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "maharazbhuiyan3@gmail.com",
    href: "mailto:maharazbhuiyan3@gmail.com",
    color: "text-red-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@raz421",
    href: "https://github.com/raz421",
    color: "text-gray-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Maharaz Bhuiyan",
    href: "https://www.linkedin.com/in/maharaz-bhuiyan-1676ab339",
    color: "text-blue-400",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@maharaz_bhuiyan",
    href: "https://twitter.com",
    color: "text-sky-400",
  },
];

export default function ContactCard() {
  return (
    <BentoCard
      className="col-span-2 row-span-1 border-white/10 bg-slate-950/55"
      id="contact"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-cyan-400/5" />

      <div className="relative z-10 mb-5 flex items-start justify-between gap-6">
        <div className="max-w-2xl">
          <p className="mb-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/38">
            Contact
          </p>
          <h3 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Let’s connect
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/52 md:text-base">
            Available for focused collaborations, product launches, and design
            refreshes that need a calmer, more premium finish.
          </p>
        </div>

        <div className="hidden shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-right md:block">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
            Response time
          </p>
          <p className="mt-1 text-sm font-medium text-white/80">
            Usually within 24 hours
          </p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.045]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * index + 0.25, duration: 0.35 }}
            whileHover={{ x: 2 }}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/72 transition-transform group-hover:scale-105">
              <contact.icon size={18} className={contact.color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/36">
                {contact.label}
              </p>
              <p className="truncate text-sm font-medium text-white/78">
                {contact.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
        <Button
          variant="primary"
          href="mailto:maharazbhuiyan3@gmail.com"
          className="px-4 py-2.5 text-sm"
        >
          <Mail size={14} />
          Email me
        </Button>
        <span className="text-sm text-white/46">
          Best for project inquiries, collaborations, and portfolio work.
        </span>
      </div>
    </BentoCard>
  );
}
