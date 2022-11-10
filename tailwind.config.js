/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boxColor: '#FFFFFF',
        grey07: '#70778B',
        title: '#3A4562',
      },
      width: {
        max: '1400px',
        img: '85px',
        title: '712px',
      },
      height: {
        max: '164px',
        img: '85px',
        title: '50px',
      },
      margin: {
        top: '29px',
        left: '260px',
        titleLeft: '127px',
        saveT: '29.33px',
        saveL: '521px',
      },
      fontFamily: {
        sans: ['Proxima Nova, sans-serif'],
      },
      fontSize: {
        title: '20px'
      },
      lineHeight: {
        title: '25px'
      },
      letterSpacing: {
        title: '-0.625px'
      }
    },
  },
  plugins: [],
}