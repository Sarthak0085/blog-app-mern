/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1565DB",
        dark: {
          hard: "#0D2436",
          soft: "#1835B6",
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto : ["'Roboto'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
