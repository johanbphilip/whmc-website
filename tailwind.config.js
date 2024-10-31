/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px", // Custom extra-small breakpoint
      sm: "640px", // Default Tailwind breakpoint
      md: "768px", // Default Tailwind breakpoint
      lg: "1024px", // Default Tailwind breakpoint
      xl: "1280px", // Default Tailwind breakpoint
      "2xl": "1536px", // Default Tailwind breakpoint
    },
    extend: {
      fontFamily: {
        serif: ["Montserrat", "sans-serif"], // in future change to the font name itself
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
