"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  plan,
  index,
}: {
  plan: Plan;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      whileHover={{
        translateZ: 30,
        scale: plan.highlighted ? 1.05 : 1.02,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative flex flex-col p-8 [perspective:1200px] ${
        plan.highlighted
          ? "z-10 border-2 border-coral bg-surface shadow-glow md:-translate-y-6 md:scale-[1.05]"
          : "panel"
      } rounded-md`}
    >
      {plan.highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-aurora-gradient px-4 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-canvas">
          Most Popular
        </span>
      )}
      <h3 className="font-display text-2xl text-paper">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted">{plan.tagline}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-mono text-4xl text-coral">{plan.price}</span>
        <span className="font-mono text-sm text-muted">{plan.period}</span>
      </div>
      <ul className="mt-8 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-muted">
            <Check size={16} className="mt-0.5 shrink-0 text-coral" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className={`mt-8 text-center ${
          plan.highlighted ? "btn-primary" : "btn-outline"
        }`}
      >
        Choose {plan.name}
      </a>
    </motion.div>
  );
}
