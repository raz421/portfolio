"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-indigo-500 text-white shadow-[0_18px_40px_-18px_rgba(139,92,246,0.7)] hover:shadow-[0_22px_50px_-18px_rgba(139,92,246,0.8)]",
    secondary:
      "border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.08]",
    ghost: "text-white/75 hover:bg-white/[0.05] hover:text-white",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="relative z-10 inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const shimmer = (
    <span className="pointer-events-none absolute inset-0">
      <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[shimmer_0.9s_ease]" />
    </span>
  );

  if (href) {
    const isInternal = href.startsWith("#") || href.startsWith("/");

    return (
      <a
        href={href}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        className={classes}
      >
        {shimmer}
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {shimmer}
      {content}
    </button>
  );
}
