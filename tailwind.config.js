const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
    screens: {
      "lg": "550px",
      "sm": "100px",
    },
    colors: {
      ...colors,
      "text": "#e8e8e8",
      "bg": "#2f2f2f",
      "primary": "#66008c",
      "secondary": "#1b1847",
      "accent": "#6902b7",
    },
  },
  plugins: [],
}

