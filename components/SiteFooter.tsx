"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Button from "./Button";

const footerLinks = [
  { label: "Email", href: "mailto:maharazbhuiyan3@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/raz421", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maharaz-bhuiyan-1676ab339",
    icon: Linkedin,
  },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_30px_100px_-45px_rgba(15,23,42,1)] md:p-8">
        <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Closing note
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              Let’s turn the next brief into something unforgettable.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              If you want a portfolio, product page, or brand site that feels
              high-end and dependable, I can help shape it into a sharper story.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="mailto:maharazbhuiyan3@gmail.com" variant="primary">
                <Mail size={18} />
                Send email
              </Button>
              <Button href="#top" variant="secondary">
                <ArrowUpRight size={18} />
                Back to top
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {footerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white/75 transition-all hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <Icon
                    size={18}
                    className="text-white/60 transition-transform group-hover:scale-110"
                  />
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                      {link.label}
                    </p>
                    <p className="mt-1 text-sm text-white/80">Open channel</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Maharaz. Crafted with Next.js, Tailwind CSS, and Framer
            Motion.
          </p>
          <p>Premium portfolio experience with a glassmorphism bento layout.</p>
        </div>
      </div>
    </motion.footer>
  );
}
