/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      "heading-md": ["0.9375rem", "1.125rem"],
      "heading-sm": ["0.875rem", "1rem"],
      "app-body": ["0.8125rem", "0.9375rem"],
      "prev-heading-1": ["2rem", "2.625rem"],
      "prev-heading-2": ["1.75rem", "2.3125rem"],
      "prev-heading-3": ["1.5rem", "2rem"],
      "prev-heading-4": ["1.25rem", "1.625rem"],
      "prev-heading-5": ["1rem", "1.3125rem"],
      "prev-heading-6": ["0.875rem", "1.125rem"],
      "prev-body": ["0.875rem", "1.5rem"],
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        "grey-100": "#FFFFFF",
        "grey-200": "#F5F5F5",
        "grey-300": "#E4E4E4",
        "grey-400": "#C1C4CB",
        "grey-500": "#7C8187",
        "grey-600": "#5A6069",
        "grey-700": "#35393F",
        "grey-800": "#2B2D31",
        "grey-900": "#1D1F22",
        "grey-1000": "#151619",
        orange: "#E46643",
        "orange-hover": "#F39765",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        serif: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
