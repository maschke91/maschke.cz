/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "*.{js,tsx,css}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}

