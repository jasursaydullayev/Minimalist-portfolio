import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ibra': ['Ibarra Real Nova', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'first-page-nav-bg': "url('./src/img/png/first-page-nav-bg.png')",

      },
      colors: {
        'links-green': '#5FB4A2',
        'dark-blue': '#203A4C',
        'grayish': '#33323D',
        'light': '#FAFAFA',
        'light-grey': '#EAEAEB',
        'red': '#F43030'
      }
    },
  },
  plugins: [daisyui],
}

