/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
          75: '#b2b2b2',
          50: '#555',
          25: '#888',
          10: '#dadada',
          5: "#747474",
          2: "#969696",
        },
      },
      spacing: {
        88: '22rem',
      },
      boxShadow: {
        'custom': '20px 20px 55px rgba(0, 0, 0, 0.5)', // Custom shadow definition
      },
    },
  },
  plugins: [],
}

