/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Montserrat", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        darkGreen: "#243e36",
        lightGreen: "#7ca982",
        whiteGreen: "#f1f7ed",
      },
    },
  },
  plugins: [],
};
