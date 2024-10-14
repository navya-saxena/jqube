/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#03045e', // Adding navy-900 with the hex color
        },
      },
    },
  },
  variants: {},

  plugins: [],
}
