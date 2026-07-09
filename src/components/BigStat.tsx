"use client";

import { motion } from "framer-motion";

export default function BigStat() {
  return (
    <section className="container-forge py-24 md:py-32">
      <div className="panel grid gap-10 overflow-hidden p-10 md:grid-cols-2 md:items-center md:p-16">
        <div>
          <span className="badge">Certified Facility</span>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="stat-figure mt-4"
          >
            5<span className="text-coral">+</span>
          </motion.p>
          <p className="mt-4 max-w-sm text-muted">
            Years of dedicated experience helping members reach their health
            and wellness goals, at a facility certified to ISF industry
            standards.
          </p>
        </div>
        <div className="space-y-5">
          {[
            ["3", "Branches across Lahore"],
            ["2", "Separate ladies & gents wings"],
            ["4", "Flexible membership plans"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-line pb-4 last:border-0"
            >
              <span className="font-display text-2xl text-paper">{value}</span>
              <span className="max-w-[60%] text-right text-sm text-muted">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}