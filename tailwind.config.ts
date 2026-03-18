import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":   "#F8FAFB",
        "bg-secondary": "#EFF3F8",
        "bg-tertiary":  "#E4EAF2",
        "border-subtle":"#DDE4EE",
        "border-mid":   "#C6D2E0",
        "border-strong":"#9AAFC4",
        accent:         "#1A52C8",
        "accent-hover": "#1440A3",
        "accent-light": "#2563EB",
        "text-primary": "#0C1B2E",
        "text-body":    "#2B3F57",
        "text-secondary":"#4D6680",
        "text-muted":   "#8099B3",
        "footer-bg":    "#06111F",
        "tier-1": "#15803D",
        "tier-2": "#B45309",
        "tier-3": "#C2410C",
        "tier-4": "#B91C1C",
        "tier-5": "#7F1D1D",
      },
      fontFamily: {
        heading: ["'Barlow Condensed'", "sans-serif"],
        body:    ["'Barlow'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
        serif:   ["'Playfair Display'", "serif"],
      },
      fontSize: {
        "display-xl": ["5rem",  { lineHeight: "1.0",  letterSpacing: "-0.02em" }],
        "display-lg": ["4rem",  { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["3rem",  { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem",{ lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        DEFAULT: "3px",
        sm: "2px",
        md: "4px",
        lg: "6px",
        xl: "8px",
      },
      boxShadow: {
        "gov":    "0 1px 4px rgba(12, 27, 46, 0.08)",
        "gov-md": "0 3px 12px rgba(12, 27, 46, 0.1)",
        "gov-lg": "0 6px 24px rgba(12, 27, 46, 0.12)",
        "accent": "0 4px 20px rgba(26, 82, 200, 0.15)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":    "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
