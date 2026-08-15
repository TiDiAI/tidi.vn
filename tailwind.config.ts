import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8FAFC",
        "paper-dim": "#EEF2F7",
        ink: "#0F172A",
        "ink-soft": "#1E293B",
        "ai-blue": "#2563EB",
        "ai-blue-light": "#5B8DF6",
        "ai-violet": "#7C3AED",
        signal: "#10B981",
        line: "#E2E8F0",
        "line-dark": "#293548",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "ai-gradient": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "ai-gradient-soft": "linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(124,58,237,0.10) 100%)",
        "ink-gradient": "linear-gradient(180deg, #0F172A 0%, #131C31 100%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.08)",
        glow: "0 0 0 1px rgba(37,99,235,0.15), 0 20px 60px -20px rgba(37,99,235,0.35)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        ticker: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
        floatY: "floatY 5s ease-in-out infinite",
        ticker: "ticker 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
