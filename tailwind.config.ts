import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f2ff",
          100: "#eee7ff",
          200: "#dfd3ff",
          300: "#c4b2ff",
          400: "#a58aff",
          500: "#8864ff",
          600: "#7757f6",
          700: "#6245d3",
          800: "#5038ac",
          900: "#393063"
        }
      }
    }
  },
  plugins: []
};

export default config;
