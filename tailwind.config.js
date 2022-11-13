/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'boxShadow' : '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)'
      },
      maxWidth: {
        component: '72.92%',
      },
      colors: {
        boxColor: '#FFFFFF',
        grey07: '#70778B',
        title: '#3A4562',
        address: '#878D9D',
      },
      width: {
        max: '1400px',
        component: '72.92%',
        img: '85px',
        title: '50.86%',
        address: '68.5%',
        locationIcon: '13px',
        starIcon: '19px',
        pageBox: '36.79%'
      },
      height: {
        max: '2673px',
        img: '85px',
        title: '50px',
        component: '6.14%',
        address: '25px',
        locationIcon: '18px',
        pageBox: '52px'
      },
      borderRadius: {
        pageBox: '10.4px'
      },
      margin: {
        top: '29px',
        side: '260px',
        pageBoxSideL: '28.79%',
        pageBoxSideR: '34.43%',
        titleLeft: '127px',
        bottom: '64px',
        titleRight: '40.07%',
        saveL: '37.21%',
        saveT: '29.33px',
        addressTop: '82px',
        imgTop: '14.63%',
        imgLeft: '1.14%',
        locationIconT: '116px',
        starL: '79.86%',
        starT: '73px',
        pageBox: '49px'
      },
      fontFamily: {
        sans: ['Proxima Nova, sans-serif'],
      },
      fontSize: {
        title: '20px',
        address: '16px',
      },
      lineHeight: {
        title: '25px'
      },
      letterSpacing: {
        title: '-0.625px',
        address: '0.23619px',
      }
    },
  },
  plugins: [],
}