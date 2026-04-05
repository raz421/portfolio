"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass, MapPin } from "lucide-react";
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
      className="group relative col-span-1 row-span-1 cursor-pointer overflow-hidden border-white/10 bg-slate-950/60"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open ${location} on Google Maps`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-cyan-400/3" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-5">
        <motion.div
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.28em] text-white/52"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.45 }}
        >
          <Compass size={13} className="text-cyan-300" />
          Coordinates
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.45 }}
        >
          <div className="mb-2 flex items-center gap-2 text-white/56">
            <MapPin size={16} className="text-white/70" />
            <p className="text-xs uppercase tracking-[0.22em]">Based in</p>
          </div>

          <h3 className="font-display text-3xl font-semibold leading-tight text-white">
            {location}
          </h3>

          <p className="mt-2 text-sm text-white/56">{region}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.22em] text-white/60">
              {latitude.toFixed(4)}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.22em] text-white/60">
              {longitude.toFixed(4)}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-between border-t border-white/10 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.45 }}
        >
          <span className="text-xs uppercase tracking-[0.22em] text-white/48">
            View on Google Maps
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-white/70 transition-all group-hover:border-white/15 group-hover:text-white">
            <ArrowUpRight size={14} />
          </span>
        </motion.div>
      </div>
    </BentoCard>
  );
}
