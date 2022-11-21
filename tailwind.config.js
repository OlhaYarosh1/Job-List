/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '0px',
        'md': '615px',
        'lg': '1544px',
      },
      boxShadow: {
        'boxShadow' : '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)'
      },
      maxWidth: {
        component: '72.92%',
      },
      minWidth: {
        pagination: '36.79%',
      },
      colors: {
        mainColor: '#F5F5F5',
        boxColor: '#FFFFFF',
        grey07: '#70778B',
        title: '#3A4562',
        titleMobile: '#3A4562',
        address: '#878D9D',
        star: '#38415D',
        mobile: '#EFF0F5',
        starMobile: '#384564',
        pageNumber: '#5876C5',
      },
      width: {
        max: '1400px',
        component: '72.92%',
        img: '85px',
        imgMob: '66px',
        title: '50.86%',
        titleMobile: '70.2%',
        address: '68.5%',
        addressMobile: '70.45%',
        locationIcon: '13px',
        starIcon: '19px',
        starIconMobile: '10px',
        starIconMobileBox: '54px',
        pageBox: '36.79%',
        arrow: '14.29px',
        pageNumber: '31px',
        arrow: '18px'
      },
      height: {
        max: '2673px',
        maxMobile: '6076px',
        img: '85px',
        imgMob: '66px',
        title: '50px',
        component: '164px',
        address: '25px',
        starIcon: '18px',
        addressMobile: '50px',
        locationIcon: '18px',
        pageBox: '52px',
        pageNumber: '31px',
        mobile: '206px',
      },
      borderRadius: {
        pageBox: '10.4px'
      },
      margin: {
        top: '29px',
        bottomMobile: '83px',
        bottom: '24px',
        side: '13.54%',
        pageBoxSideL: '28.79%',
        pageBoxSideR: '34.43%',
        titleLeft: '127px',
        titleMobileLeft: '101px',
        bottom: '64px',
        titleRight: '40.07%',
        saveL: '97.14%',
        saveR: '24px',
        saveT: '29.33px',
        addressTop: '82px',
        addressTopMobile: '97px',
        imgTop: '14.63%',
        imgTopMb: '45px',
        imgLeftMb: '4.04%',
        imgLeft: '1.14%',
        locationIconT: '116px',
        locationIconTMobile: '155px',
        starL: '79.86%',
        starT: '73px',
        starIconMobile: '17px',
        pageBox: '49px',
        arrowLeftL: '1.64%',
        arrowLeftT: '17px',
        arrowRightL: '33.79%',
        separatorL: '4.88%',
        separatorR: '31.81%',
        separatorT: '10.4px',
        pageNumbers: '8.93%',
        sideLMb: '2.17%',
        listT: '9px'
      },
      fontFamily: {
        sans: ['Proxima Nova, sans-serif'],
      },
      fontSize: {
        title: '20px',
        titleMobile: '18px',
        address: '16px',
        pagination: '20.8px'
      },
      lineHeight: {
        title: '25px'
      },
      letterSpacing: {
        title: '-0.625px',
        titleMobile: '-0.5625px',
        address: '0.23619px',
        pagination: '0.3366%',
      },
    },
  },
  plugins: [],
}