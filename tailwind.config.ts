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
        navy:        "#0A1628",
        "navy-light":"#111D31",
        "navy-mid":  "#162340",
        accent:      "#2563EB",
        "accent-light":"#3B82F6",
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "'Source Sans Pro'", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "glow":    "0 4px 24px rgba(37, 99, 235, 0.3)",
        "dark":    "0 8px 40px rgba(0,0,0,0.4)",
        "dark-lg": "0 16px 64px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
