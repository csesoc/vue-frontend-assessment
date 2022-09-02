/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#242424',
        purple: '#535bf2',
      },
    },
    fontFamily: {
      'sans': 'Inter, Avenir, Helvetica, Arial, sans-serif'
    }
  },
  plugins: [],
}
