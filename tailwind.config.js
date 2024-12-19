/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px', // Custom extra-small breakpoint
      sm: '640px', // Default Tailwind breakpoint
      md: '768px', // Default Tailwind breakpoint
      lg: '1024px', // Default Tailwind breakpoint
      xl: '1280px', // Default Tailwind breakpoint
    },
    extend: {
      fontFamily: {
        serif: ['Montserrat', 'sans-serif'], //TODO: in future have names as primary or secondary
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        darkGreen: '#243e36', //TODO: in future have names as primaryDark, primaryLight, darkAccent, lightAccent, etc.
        lightGreen: '#7ca982',
        whiteGreen: '#f1f7ed',
      },
    },
  },
  plugins: [],
};
