/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        'hijau' : '#227A65',
        'abu' : '#DDE5E9',
        'abu2': '#72717B',
        'hijau2': '#2B997E'
      },
      boxShadow: {
        'costum-navbar': '0px 6px 60px rgba(18, 18, 18, 0.06)',
      }
    },
  },
  plugins: [],
}