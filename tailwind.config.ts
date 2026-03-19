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
        primary: "#1B1A2B",
        accent: "#2563EB",
        "accent-hover": "#1D4ED8",
        "body-text": "#6B7280",
        "light-bg": "#F8F9FA",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "'Source Sans Pro'", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
