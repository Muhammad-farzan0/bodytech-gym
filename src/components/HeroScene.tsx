"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Depth layers: farther elements move slower & smaller, closer ones move
  // faster & rotate more, simulating camera dolly-through perspective.
  const barbellY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const barbellRotate = useTransform(scrollYProgress, [0, 1], [-8, 10]);
  const barbellScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const barbellZ = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const dumbbellY = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const dumbbellRotate = useTransform(scrollYProgress, [0, 1], [6, -22]);
  const dumbbellX = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const treadmillY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const treadmillScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const treadmillOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.15]);

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  return (
    <section
      ref={ref}
      className="relative h-[130vh] md:h-[145vh] bg-canvas [perspective:1600px]"
      aria-label="Hero"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-canvas">
        {/* ember glow backdrop */}
        <motion.div
          style={{ scale: glowScale }}
          className="absolute inset-0 bg-glow-radial"
        />
        <div className="absolute inset-0 bg-mesh-gradient opacity-80" />

        {/* Treadmill — far background layer */}
        <motion.svg
          style={{
            y: treadmillY,
            scale: treadmillScale,
            opacity: treadmillOpacity,
          }}
          className="absolute left-1/2 top-[58%] w-[85vw] max-w-4xl -translate-x-1/2"
          viewBox="0 0 600 220"
          fill="none"
        >
          <rect x="40" y="150" width="520" height="26" rx="8" fill="#2A2A2A" />
          <rect x="60" y="120" width="60" height="60" rx="6" fill="#4A4A4A" />
          <rect x="80" y="40" width="16" height="90" rx="6" fill="#4A4A4A" />
          <rect x="150" y="40" width="16" height="90" rx="6" fill="#4A4A4A" />
          <rect x="70" y="30" width="110" height="16" rx="8" fill="#9A9A9A" />
          <ellipse cx="130" cy="176" rx="230" ry="10" fill="#121212" />
        </motion.svg>

        {/* Barbell — mid layer, tilted for 3D perspective */}
        <motion.svg
          style={{
            y: barbellY,
            rotate: barbellRotate,
            scale: barbellScale,
            translateZ: barbellZ,
          }}
          className="preserve-3d absolute left-1/2 top-[38%] w-[110vw] max-w-3xl -translate-x-1/2 drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
          viewBox="0 0 700 140"
          fill="none"
        >
          <rect x="40" y="62" width="620" height="16" rx="8" fill="#9A9A9A" />
          {/* left plates */}
          <rect x="20" y="20" width="26" height="100" rx="10" fill="#8FDA1E" />
          <rect x="52" y="34" width="18" height="72" rx="8" fill="#121212" />
          <rect x="76" y="44" width="12" height="52" rx="6" fill="#4A4A4A" />
          {/* right plates */}
          <rect x="654" y="20" width="26" height="100" rx="10" fill="#8FDA1E" />
          <rect x="630" y="34" width="18" height="72" rx="8" fill="#121212" />
          <rect x="612" y="44" width="12" height="52" rx="6" fill="#4A4A4A" />
        </motion.svg>

        {/* Dumbbell — closest layer, largest parallax throw */}
        <motion.svg
          style={{
            y: dumbbellY,
            x: dumbbellX,
            rotate: dumbbellRotate,
          }}
          className="absolute right-[6%] top-[20%] w-[42vw] max-w-xs drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] md:right-[10%]"
          viewBox="0 0 220 100"
          fill="none"
        >
          <rect x="90" y="38" width="40" height="24" rx="6" fill="#9A9A9A" />
          <rect x="20" y="10" width="30" height="80" rx="10" fill="#8FDA1E" />
          <rect x="52" y="24" width="18" height="52" rx="6" fill="#121212" />
          <rect x="170" y="10" width="30" height="80" rx="10" fill="#8FDA1E" />
          <rect x="150" y="24" width="18" height="52" rx="6" fill="#121212" />
        </motion.svg>

        {/* Foreground text */}
        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity }}
          className="container-forge relative flex h-full flex-col justify-center"
        >
          <span className="eyebrow w-fit md:mt-[90px]" data-aos="fade-up">
            ● 3 Branches Across Lahore
          </span>
          <h1
            className="mt-6 lg:mt-1 max-w-3xl text-[9vw] font-normal leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Kickstart your
            <br />
            <span className="font-bold text-coral">transformation.</span>
          </h1>
          <p
            className="mt-6 max-w-md text-base text-muted md:text-lg"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            Certified trainers, separate ladies & gents wings, &amp; and classes for every goal — welcome to Lahore's &amp; premier fitness center. Experience &amp; state‑of‑the‑art equipment and a motivating environment &amp; designed to help you achieve results faster.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <a href="/membership" className="btn-primary">
              View Membership Plans
            </a>
            <a href="/services" className="btn-outline">
              View Facilities
            </a>
          </div>
          <span
            className="mt-3 text-xs text-muted"
            data-aos="fade-up"
            data-aos-delay="280"
          >
            EME · Rahbar · Bahria Town
          </span>
        </motion.div>
      </div>
    </section>
  );
}
