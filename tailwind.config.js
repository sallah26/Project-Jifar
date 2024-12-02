/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        dimmer: 'brightness(10%)',
      },
    },
  },
  plugins: [],
}