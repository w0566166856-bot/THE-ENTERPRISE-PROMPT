import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "The Enterprise Prompt" token system — a codified-document identity,
        // not a generic SaaS gradient. Prompts are treated as enterprise clauses.
        ink: {
          DEFAULT: "#0B1220", // primary dark surface (dossier cover)
          soft: "#121B2E",
          line: "#23304A", // hairline on dark
        },
        paper: {
          DEFAULT: "#F7F5EF", // light surface (document paper)
          dim: "#EFEBE1",
          line: "#E1DCCD", // hairline on light
        },
        brass: {
          DEFAULT: "#B8925A", // single accent — seal / signature ink
          dim: "#8F6F42",
          bright: "#D2AC78",
        },
        teal: {
          DEFAULT: "#2F5D57", // active / ratified state
          dim: "#24463F",
        },
        slate: {
          DEFAULT: "#5B6472", // muted body text
          dark: "#333B49",
        },
      },
      fontFamily: {
        display: ["var(--font-kufi)", "sans-serif"],
        body: ["var(--font-plex-arabic)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "3px",
      },
      letterSpacing: {
        wide2: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
