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
        brand: {
          pink: "#FF3B7B",
          "pink-hover": "#E02E69",
          "pink-light": "#FFF0F5",
          blue: "#2563EB",
          "blue-hover": "#1D4ED8",
          "blue-light": "#EFF6FF",
          dark: "#0F172A",
          muted: "#64748B",
          border: "#E2E8F0",
          bg: "#FFFFFF",
          "bg-alt": "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        brand: "16px",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
        card: "0 10px 30px -4px rgba(15, 23, 42, 0.08)",
        floating: "0 20px 40px -10px rgba(255, 59, 123, 0.15)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
