import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mesh-background-light': "url('/mesh-gradient.png')",
        'mesh-background-dark': "url('/mesh-gradient-dark.svg')",
      },
      fontFamily: {
        sans: ["var(--font-rethink-sans)"],
        passionConflict: ["var(--font-passion-conflict)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
        },
        secondary: {
          DEFAULT: "#64748b",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
