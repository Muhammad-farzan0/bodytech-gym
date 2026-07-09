"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    year: "Est.",
    title: "BodyTech Opens Its Doors",
    copy: "BodyTech begins its journey in training, health, and wellness in Lahore.",
  },
  {
    year: "ISF",
    title: "Industry Certification Earned",
    copy: "Our facility becomes certified to the International Standard for Facilities (ISF).",
  },
  {
    year: "Growth",
    title: "Expansion Across Lahore",
    copy: "BodyTech grows to three branches — EME, Rahbar, and Bahria Town.",
  },
  {
    year: "Today",
    title: "5+ Years Strong",
    copy: "A team of certified trainers, physiotherapists, and nutritionists serving members of every age.",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[15px] top-0 h-full w-[2px] bg-line/25 md:left-1/2 md:-translate-x-1/2" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[15px] top-0 w-[2px] bg-aurora-gradient md:left-1/2 md:-translate-x-1/2"
      />

      <div className="space-y-16">
        {milestones.map((m, i) => {
          const alignRight = i % 2 === 0;
          return (
            <div
              key={m.year}
              className={`relative flex items-start gap-6 md:gap-0 ${
                alignRight ? "md:justify-start" : "md:justify-end"
              }`}
              data-aos={alignRight ? "fade-right" : "fade-left"}
            >
              <div className="absolute left-0 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-coral bg-canvas font-mono text-[10px] text-coral md:left-1/2 md:-translate-x-1/2">
                {i + 1}
              </div>
              <div
                className={`panel ml-12 w-full p-6 md:ml-0 md:w-[42%] ${
                  alignRight ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                <span className="font-mono text-xs text-coral">{m.year}</span>
                <h3 className="mt-2 text-xl text-paper">{m.title}</h3>
                <p className="mt-2 text-sm text-muted">{m.copy}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}