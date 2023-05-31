/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": {"max": "992px"},

      "lg": {"min": "992px"},
    },
    extend: {
      colors: {
        "text-white": "#deecf6",
        "whoiam": "#2b2b2b",
      },
      spacing: {
        "whoiam": "600px",
        "whoiam2": "740px",
        "whoiam3": "880px",
      },
    },
  },
  plugins: [],
}