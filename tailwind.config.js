/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      padding: {
        DEFAULT: '15px'
      }
    },screens: {
      sm: '480px',
      md: '920px',
      lg: '976px',
      xl: '1440px',
    },extend: {
      fontFamily: {
        primary: 'Poppins'
      }
  },
  },
  plugins: [ require('flowbite/plugin')],
}

