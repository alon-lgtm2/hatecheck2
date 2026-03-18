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
        navy:    "#0A1628",
        body:    "#374151",
        muted:   "#9CA3AF",
        border:  "#E5E7EB",
        hover:   "#FAFAFA",
      },
      fontFamily: {
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
      },
      boxShadow: {
        DEFAULT: "none",
        sm: "none",
        md: "none",
        lg: "none",
      },
    },
  },
  plugins: [],
};

export default config;
