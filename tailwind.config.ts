import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "1100px",
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        "13": "repeat(auto-fit, minmax(80px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
