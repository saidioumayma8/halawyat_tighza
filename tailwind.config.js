/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#CDA34F',
        'beige': '#F5EDE2',
        'soft-pink': '#F3C6D1',
        'dark-gray': '#333333',
        'medium-gray': '#666666',
        'light-gray': '#CCCCCC',
      },
      fontFamily: {
        'arabic': ['Cairo', 'Noto Kufi Arabic', 'sans-serif'],
        'french': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}