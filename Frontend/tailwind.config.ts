import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#137fec",
        "primary-dark": "#0e6bc9",
        "primary-hover": "#0e6bd0",
        "primary-light": "#e0effd",
        success: "#22c55e",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "surface-light": "#ffffff",
        "surface-dark": "#1c2a38",
        "card-light": "#ffffff",
        "card-dark": "#1a2632",
        "card-dark-highlight": "#1f2e3d",
        "neutral-soft": "#e8eef6",
        "text-main": "#1e293b",
        "text-sub": "#64748b",
        "text-muted": "#64748b",
        "danger-light": "#fef2f2",
        "danger-border": "#fecaca",
        "danger-text": "#991b1b",
        "warning-light": "#fffbeb",
        "warning-border": "#fde68a",
        "warning-text": "#92400e"
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      }
    }
  },
  plugins: []
};

export default config;
