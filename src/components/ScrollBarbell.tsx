"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Signature scroll indicator: a barbell that "loads" plates onto its bar
 * as the visitor scrolls down a page. Six plates total; each lights up
 * (scales + turns ember-red) once its threshold of scroll progress is passed.
 */
export default function ScrollBarbell() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  const plateCount = 6;
  const plates = Array.from({ length: plateCount });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div className="relative mx-auto h-full max-w-7xl px-6 md:px-10">
        {/* thin bar track */}
        <div className="absolute left-6 right-6 top-0 h-[2px] bg-line/30 md:left-10 md:right-10" />
        {/* progress fill = the bar being loaded */}
        <motion.div
          style={{ scaleX: smooth }}
          className="absolute left-6 right-6 top-0 h-[2px] origin-left bg-aurora-gradient md:left-10 md:right-10"
        />
        {/* plates */}
        <div className="absolute left-6 right-6 top-0 flex -translate-y-1/2 justify-between md:left-10 md:right-10">
          {plates.map((_, i) => (
            <Plate key={i} index={i} total={plateCount} progress={smooth} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Plate({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const threshold = (index + 1) / total;
  return (
    <span className="block h-[7px] w-[7px] overflow-hidden rounded-full border border-line/60 bg-canvas-soft">
      <PlateFill progress={progress} threshold={threshold} />
    </span>
  );
}

function PlateFill({
  progress,
  threshold,
}: {
  progress: ReturnType<typeof useSpring>;
  threshold: number;
}) {
  const scale = useTransform(progress, [threshold - 0.02, threshold], [1, 1.9]);
  const bg = useTransform(
    progress,
    [threshold - 0.02, threshold],
    ["rgb(26,26,26)", "rgb(204,0,0)"]
  );
  return (
    <motion.span
      style={{ scale, backgroundColor: bg }}
      className="block h-full w-full rounded-full"
    />
  );
}
