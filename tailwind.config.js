/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter'],
        circular: 'CircularStd',
      },
      colors: {
        purple: '#5D50C6',
        pink: '#F85E9F',
        orange: '#FF5722',
      },
    },
  },
  plugins: [],
};
