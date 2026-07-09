import type { Config } from "tailwindcss";

function themed(varName: string) {
  return `rgb(var(${varName}) / <alpha-value>)`;
}

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: themed("--canvas"),
        "canvas-soft": themed("--canvas-soft"),
        surface: themed("--surface"),
        line: themed("--line"),
        paper: themed("--paper"),
        muted: themed("--muted"),
        // Black / red / gray identity — red accent, themed per light/dark
        coral: {
          DEFAULT: themed("--coral"),
          dim: themed("--coral-dim"),
          bright: themed("--coral-bright"),
        },
        pink: {
          DEFAULT: themed("--pink"),
          soft: themed("--pink-soft"),
        },
        lime: {
          DEFAULT: themed("--lime"),
          dim: themed("--lime-dim"),
        },
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      perspective: {
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1600: "1600px",
        2000: "2000px",
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(circle at 50% 0%, rgb(var(--coral) / 0.12), transparent 60%)",
        "aurora-gradient":
          "linear-gradient(135deg, rgb(var(--coral)) 0%, rgb(var(--coral-bright)) 100%)",
        "aurora-gradient-soft":
          "linear-gradient(135deg, rgb(var(--coral) / 0.12) 0%, rgb(var(--pink) / 0.12) 100%)",
        "mesh-gradient":
          "radial-gradient(at 15% 10%, rgb(var(--coral) / 0.14) 0px, transparent 45%), radial-gradient(at 85% 0%, rgb(var(--pink) / 0.14) 0px, transparent 50%), radial-gradient(at 50% 100%, rgb(var(--surface) / 0.05) 0px, transparent 55%)",
      },
      boxShadow: {
        glow: "0 20px 60px -15px rgb(var(--coral) / 0.35)",
        "glow-pink": "0 20px 60px -15px rgb(var(--pink) / 0.35)",
        soft: "0 8px 30px -8px rgb(0 0 0 / 0.18)",
        deep: "0 40px 100px -30px rgb(0 0 0 / 0.55)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-18px) rotate(var(--r, 0deg))" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".preserve-3d": { transformStyle: "preserve-3d" },
        ".backface-hidden": { backfaceVisibility: "hidden" },
      });
    },
  ],
};
export default config;
