"use client";

import { motion } from "framer-motion";
import { HeartPulse, Dumbbell, Flame, UserCheck, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  cardio: HeartPulse,
  strength: Dumbbell,
  yoga: Flame,
  personal: UserCheck,
};

export default function ServiceCard({
  icon,
  title,
  copy,
  index,
}: {
  icon: keyof typeof ICONS;
  title: string;
  copy: string;
  index: number;
}) {
  const Icon = ICONS[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateY: -35 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className="panel group relative p-8 [perspective:1000px]"
    >
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-16 w-16"
      >
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md bg-aurora-gradient [backface-visibility:hidden]"
        >
          <Icon size={28} className="text-canvas" />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md border border-coral bg-canvas [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="font-mono text-xs text-coral">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </motion.div>
      <h3 className="mt-6 text-2xl text-paper">{title}</h3>
      <p className="mt-3 text-sm text-muted">{copy}</p>
    </motion.div>
  );
}
