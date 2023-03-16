/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      boxSizing : 'border-box',
      fontawesomeSvgCore: {
        license: "free",
      },
      backgroundColor: {
        gray: "#d4d4d4",
      },
    },
    fontSize: {
      sm: "1.2rem",
      base: "1.6rem",
      lg: "1.8rem",
      xl: "2rem",
      "2xl": "2.4rem",
      "3xl": "3.2rem",
      "4xl": "4.8rem",
      "5xl": "6.4rem",
      "6xl": "7.2rem",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};