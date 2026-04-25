/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
