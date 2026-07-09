"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Trainer = {
  name: string;
  role: string;
  focus: string;
  initials: string;
};

export default function TrainerCard({ trainer }: { trainer: Trainer }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="[perspective:1000px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="panel preserve-3d group relative overflow-hidden p-8"
      >
        <div
          className="pointer-events-none absolute -inset-1 bg-glow-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ transform: "translateZ(-1px)" }}
        />
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-aurora-gradient font-display text-2xl text-canvas"
          style={{ transform: "translateZ(40px)" }}
        >
          {trainer.initials}
        </div>
        <h3
          className="mt-6 text-2xl text-paper"
          style={{ transform: "translateZ(30px)" }}
        >
          {trainer.name}
        </h3>
        <span
          className="eyebrow mt-1 block"
          style={{ transform: "translateZ(20px)" }}
        >
          {trainer.role}
        </span>
        <p
          className="mt-4 text-sm text-muted"
          style={{ transform: "translateZ(20px)" }}
        >
          {trainer.focus}
        </p>
      </motion.div>
    </div>
  );
}
