const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.svelte"
  ],
  theme: {
    extend: {},
    screens: {
      "lg": "500px",
      "sm": "100px",
    },
    colors: {
      ...colors,
      "text": "#e8e8e8",
      "bg": "#2f2f2f",
      "primary": "#66008c",
      "secondary": "#1b1847",
      "accent": "#6902b7",
    }
  },
  plugins: [],
}

