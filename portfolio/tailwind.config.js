// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 0, 0)",
        secondary: "rgb(91, 94, 118)",
        heading: "rgb(154, 160, 175)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
     
    },
  },
  plugins: [],
};
