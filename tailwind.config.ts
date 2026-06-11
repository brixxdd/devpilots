import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dev: {
          bg: "#F7FBFF",
          navy: "#062B49",
          navy2: "#0A3A5E",
          cyan: "#35BDF2",
          orange: "#FF7A1A",
          gray: "#6B7280",
          black: "#111827",
        },
      },
      boxShadow: {
        glass: "0 18px 48px rgba(6, 43, 73, 0.12)",
        orange: "0 16px 34px rgba(255, 122, 26, 0.26)",
        navy: "0 20px 56px rgba(6, 43, 73, 0.2)",
      },
      borderRadius: {
        glass: "1.375rem",
        panel: "1.875rem",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
