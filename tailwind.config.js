/** @type {import('tailwindcss').Config} */
module.exports = {
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
        custom: ["LexendExa", "sans-serif"],
        customBold: ["MiriamLibre", "sans-serif"],
      },
      fontWeight: {
        normal: 100,
        bold: 900,
      },
      letterSpacing: {
        wide40: "0.4em", // Esto representa un espaciado del 40%
      },
    },
  },
  plugins: [],
};
