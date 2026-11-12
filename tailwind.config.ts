import type { Config } from "tailwindcss";

// Proposed (not yet official) Anbariyya palette from the project brief.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#123D2E", deep: "#0B2A1F", night: "#071E16", soft: "#1B4D3B" },
        gold: { DEFAULT: "#C6A15B", deep: "#7A5C24", light: "#E2C68A" },
        ivory: "#F8F5ED",
        sand: { DEFAULT: "#EFE8D8", line: "#E4DCC8", dark: "#DDD3BC" },
        charcoal: "#252A27",
        muted: "#5B625E",
        mist: "#C9D3CE",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "'IBM Plex Sans Arabic'", "system-ui", "sans-serif"],
        arabic: ["Amiri", "'IBM Plex Sans Arabic'", "serif"],
        arui: ["'IBM Plex Sans Arabic'", "Inter", "sans-serif"],
      },
      maxWidth: { site: "1240px" },
    },
  },
  plugins: [],
};
export default config;
