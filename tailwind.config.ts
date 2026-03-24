import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#0a0b10",
        surface: "#13151f",
        surfaceHover: "#1a1c29",
        borderSubtle: "rgba(255, 255, 255, 0.05)",
        borderGlow: "rgba(255, 255, 255, 0.1)",
        brand: {
          purple: "#b558f6",
          pink: "#ec4899",
          orange: "#f59e0b",
          cyan: "#06b6d4",
          green: "#10b981",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
