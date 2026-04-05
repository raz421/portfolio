"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import BentoCard from "../BentoCard";

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
      className="col-span-2 row-span-1 border-white/10 bg-slate-950/60"
      id="contact"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.28em] text-white/40">
            Contact
          </p>
          <h3 className="font-display text-3xl font-semibold text-white">
            Let’s connect
          </h3>
        </div>
        <p className="hidden max-w-sm text-right text-sm text-white/50 md:block">
          Available for focused collaborations and product work.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.04]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index + 1.2 }}
            whileHover={{ x: 2 }}
          >
            <div
              className={`${contact.color} transition-transform group-hover:scale-110`}
            >
              <contact.icon size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/36">
                {contact.label}
              </p>
              <p className="truncate text-sm font-medium text-white/72">
                {contact.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </BentoCard>
  );
}
