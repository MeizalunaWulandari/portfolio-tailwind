/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope']
      },
      colors: {
        primary: '#00b9e1',
        normal: '#66676a',
        dark: '#3c3c3d',
        midlight: '#b9bac0',
        light: '#f5f5f6'
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
