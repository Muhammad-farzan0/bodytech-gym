"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ParallaxMap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mapY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const pinY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.55, 0.15, 0.55]
  );

  return (
    <div
      ref={ref}
      className="relative h-[420px] overflow-hidden rounded-md border border-line [perspective:1000px] md:h-[480px]"
    >
      <motion.div style={{ y: mapY }} className="absolute inset-[-8%]">
        <iframe
          title="BodyTech Gym location"
          src="https://www.google.com/maps?q=DHA+Phase+XII+EME+Multan+Road+Lahore&output=embed"
          className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 bg-canvas"
      />
      <motion.div
        style={{ y: pinY }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex flex-col items-center">
          <MapPin size={40} className="text-coral drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]" />
          <span className="mt-1 rounded-sm bg-canvas/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-paper">
            BodyTech EME
          </span>
        </div>
      </motion.div>
    </div>
  );
}