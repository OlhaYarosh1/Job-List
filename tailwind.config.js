/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'boxShadow' : '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)'
      },
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
        max: '2673px',
        img: '85px',
        title: '50px',
        component: '164px',
      },
      margin: {
        top: '29px',
        side: '260px',
        titleLeft: '127px',
        bottom: '64px',
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