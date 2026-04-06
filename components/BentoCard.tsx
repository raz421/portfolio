"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
}

export default function BentoCard({
  children,
  className = "",
  ...props
}: BentoCardProps) {
  return (
    <motion.div
      className={`bento-card bento-card-hover surface-shimmer ${className}`}
      initial={{ opacity: 0, y: 12, scale: 0.994 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.004, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
