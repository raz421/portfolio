"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  memo,
  type MouseEvent,
  type PointerEvent,
  ReactNode,
  useMemo,
} from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, {
    stiffness: 200,
    damping: 28,
    mass: 0.4,
  });
  const springY = useSpring(offsetY, {
    stiffness: 200,
    damping: 28,
    mass: 0.4,
  });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;

    offsetX.set(x * 0.16);
    offsetY.set(y * 0.16);
  };

  const resetMagnet = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  const baseClasses =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark";

  const variants = useMemo(
    () => ({
      primary:
        "bg-gradient-to-r from-accent to-secondary text-white shadow-[0_18px_40px_-18px_rgba(99,102,241,0.8)] hover:shadow-[0_22px_58px_-18px_rgba(99,102,241,0.92)]",
      secondary:
        "border border-white/10 bg-white/[0.03] text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.08]",
      ghost: "text-white/75 hover:bg-white/[0.05] hover:text-white",
    }),
    [],
  );

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
      <motion.a
        href={href}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        className={classes}
        style={{ x: springX, y: springY }}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetMagnet}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
      >
        {shimmer}
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetMagnet}
      whileTap={{ scale: 0.97 }}
    >
      {shimmer}
      {content}
    </motion.button>
  );
}

export default memo(Button);
