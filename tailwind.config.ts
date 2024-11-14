import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gMarketSansLight: ["var(--font-gMarketSans-light)"],
        gMarketSansMedium: ["var(--font-gMarketSans-medium)"],
        gMarketSansBold: ["var(--font-gMarketSans-bold)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
