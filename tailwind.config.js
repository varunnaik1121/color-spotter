/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      game: {
        DEFAULT: 'rgb(39,37,34)',
        primary: 'rgb(49,46,43)',
        secondary: 'rgb(127,166,80)',
      },
      text: {
        DEFAULT: '#FFFFFF',
      },
      buttons: {
        DEFAULT: 'rgb(65,65,65)',
        primary: 'rgb(65,60,55)',
      },
    },
    fontFamily: {
      valo: ['plaguard', 'sans-serif'],
    },
  },
  plugins: [],
};
