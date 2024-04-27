import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
        primary: "Yellow Ginger",
        secondary: "Montserrat",
    },
    colors: {
        primary: "#72441b",
        secondary: "#e0ba85",
        "text-primary": "#101010",
        "text-secondary": "#333333",
        background: "#fdfdfd",
        "background-secondary": "#FBEDCA",
    },
  },
  plugins: [],
};
export default config;
