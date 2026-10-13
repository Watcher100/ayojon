/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#7cc4ff',
          400: '#36a6ff',
          500: '#0c8ce9',
          600: '#006fc7',
          700: '#0058a1',
          800: '#064a83',
          900: '#0b3f6d',
          950: '#082749',
        },
        secondary: {
          50: '#fdf4ed',
          100: '#fae8d5',
          200: '#f5d0ab',
          300: '#ecac78',
          400: '#e18047',
          500: '#d76326',
          600: '#c44b19',
          700: '#9d3815',
          800: '#7f3118',
          900: '#672c17',
          950: '#38130a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}