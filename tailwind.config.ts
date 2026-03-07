import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff7ff",
          100: "#dbeeff",
          200: "#bfdfff",
          300: "#93c8ff",
          400: "#5da7ff",
          500: "#357ff6",
          600: "#265fd6",
          700: "#214cad",
          800: "#223f8b",
          900: "#223a6f"
        }
      }
    }
  },
  plugins: []
};

export default config;
