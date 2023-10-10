/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "pl-",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
