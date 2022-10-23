/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mGray': '#F5F7FB',
        'mWhite': '#FFFFFF',
        'mOrange': '#EFA985',
        'mPurple': '#4D426D',
        'mGreen': '#3BA58B',
      }
    },
  },
  plugins: [],
}
