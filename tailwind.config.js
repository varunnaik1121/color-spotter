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
    },
    fontFamily: {
      valo: ['plaguard', 'sans-serif'],
    },
  },
  plugins: [],
};
