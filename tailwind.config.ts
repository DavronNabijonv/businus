// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#012235",   // Asosiy ko'k rang
        secondary: "#4CCEDO", // Ikkinchi rang (sariq)
        hoverColor: "#848484",    // Yashil urg'u
        fillIcon: "#12A4A6",    // Xatolik rangi (qizil)
        linear: "#OO578A",      // Qora fon
      },
    },
  },
  plugins: [],
};

export default config;
