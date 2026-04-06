import { Variants } from "framer-motion";

// Smooth cubic-bezier easing curves for buttery animations
export const premiumEase: [number, number, number, number] = [
  0.32, 0.72, 0.61, 1,
];
export const smoothEase: [number, number, number, number] = [
  0.25, 0.46, 0.45, 0.94,
];

export const pageTransition: Variants = {
  hidden: { opacity: 0, scale: 0.985, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: smoothEase,
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.99, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: smoothEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};
