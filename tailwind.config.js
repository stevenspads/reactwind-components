const { fontFamily } = require("tailwindcss/defaultTheme")

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: colors.indigo,
        secondary: colors.gray,
      }
    },
  },
  plugins: [],
}
