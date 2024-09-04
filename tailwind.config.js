/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'searchBackground': '#F4F4F4',
        'mainPurple': '#A445ED',
        'darkSearch': '#1F1F1F'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}