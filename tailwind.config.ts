import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f00069",
        background: "#e9dcd1",
        foreground: "#1D2939",
        accent: "#f00069",
        beige: "#e9dcd1",
        card: "#fffffe",
        "gray-dark": "#475467",
        "gray-light": "#98A2B3",
        "btn-bg": "#101828",
        border: "#dfdad1",
      },
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
        cardo: ["var(--font-cardo)", "serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
