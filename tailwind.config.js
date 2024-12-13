/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'gold': {
          400: '#D4AF37',
          500: '#C5A028',
        },
        'obsidian': {
          900: '#0A0A0A',
          800: '#141414',
          700: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};