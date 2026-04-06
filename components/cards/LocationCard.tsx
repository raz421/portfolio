"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, MapPin } from "lucide-react";
import BentoCard from "../BentoCard";

export default function LocationCard() {
  const latitude = 23.8103;
  const longitude = 90.3489;
  const location = "Dhaka, Bangladesh";
  const region = "UTC+6 · Remote friendly";

  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  const handleClick = () => {
    window.open(googleMapsUrl, "_blank");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <BentoCard
      className="group relative col-span-1 row-span-1 cursor-pointer overflow-hidden border-white/10 bg-slate-950/50 backdrop-blur-md transition-all hover:border-white/20"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open ${location} on Google Maps`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/8 via-transparent to-cyan-400/5" />
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl group-hover:blur-2xl transition-all" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-5">
        <motion.div
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/70"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          whileHover={{ scale: 1.05 }}
        >
          <Globe size={14} className="text-teal-400" />
          Coordinates
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex-1"
        >
          <div className="mb-2 flex items-center gap-2 text-white/50">
            <MapPin size={16} className="text-white/60" />
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/70">
              Based In
            </p>
          </div>

          <h3 className="font-display text-3xl font-semibold leading-tight text-white mb-1">
            {location}
          </h3>

          <p className="text-xs text-white/60 font-medium">{region}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <motion.span
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-white/80 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              {latitude.toFixed(4)}°
            </motion.span>
            <motion.span
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-white/80 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              {longitude.toFixed(4)}°
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-between border-t border-white/10 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.45 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
            View on Maps
          </span>
          <motion.div
            whileHover={{ x: 4, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight
              size={16}
              className="text-white/60 group-hover:text-white/80 transition-colors"
            />
          </motion.div>
        </motion.div>
      </div>
    </BentoCard>
  );
}
