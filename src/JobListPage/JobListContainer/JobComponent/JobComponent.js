import React from 'react';

const JobComponent = ({ title, address, picture }) => {

    return (
        <div className='flex-none order-none grow-0 flex flex-row md:h-component
        lg:p-0 mb-2 lg:bg-boxColor md:bg-boxColor rounded-lg shadow-boxShadow sm:bg-mobile sm:h-mobile'>
            <div className='md:mt-6 md:ml-4 absolute bg-transparent sm:mt-imgTopMb sm:ml-imgLeftMb'>
                <img src={picture} alt='' className='md:w-img md:h-img rounded-full sm:w-imgMob sm:h-imgMob'/>
            </div>
            <div className='bg-transparent font-sans not-italic
            md:mt-6 md:ml-titleLeft md:w-title md:h-20 md:font-bold md:leading-title md:tracking-title md:text-title 
            sm:mt-11 sm:ml-titleMobileLeft sm:w-titleMobile sm:h-12 sm:font-normal sm:leading-6 sm:tracking-titleMobile sm:text-titleMobile'>
                <a href='/' className='bg-transparent hover:opacity-80'>{title}</a>
            </div>
            <div className='bg-transparent absolute self-stretch not-italic font-sans font-normal leading-title text-address tracking-address
            md:w-address md:h-address md:mt-addressTop md:ml-titleLeft
            sm:w-addressMobile sm:h-addressMobile sm:mt-addressTopMobile sm:ml-titleMobileLeft'>
                {address}
            </div>
            <img 
                src='icons/Location.png' 
                alt='' 
                className='absolute bg-transparent md:w-locationIcon md:h-locationIcon
            md:mt-locationIconT md:ml-titleLeft sm:mt-locationIconTMobile sm:ml-titleMobileLeft'/>
            <div className='absolute bg-transparent md:ml-starL md:text-star md:mt-starT md:w-24 md:h-20
            sm:ml-titleMobileLeft sm:text-starMobile sm:mt-starIconMobile cursor-pointer sm:w-starIconMobileBox'>
                <img src='icons/Star.png' alt='' className='bg-transparent hover:scale-125 inline-block sm:w-starIconMobile md:w-starIcon md:h-starIcon'/>
                <img src='icons/Star.png' alt='' className='bg-transparent hover:scale-125 inline-block sm:w-starIconMobile md:w-starIcon md:h-starIcon'/>
                <img src='icons/Star.png' alt='' className='bg-transparent hover:scale-125 inline-block sm:w-starIconMobile md:w-starIcon md:h-starIcon'/>
                <img src='icons/Star.png' alt='' className='bg-transparent hover:scale-125 inline-block sm:w-starIconMobile md:w-starIcon md:h-starIcon'/>
                <img src='icons/Star.png' alt='' className='bg-transparent hover:scale-125 inline-block sm:w-starIconMobile md:w-starIcon md:h-starIcon'/>
            </div>
            <div className='bg-transparent absolute md:ml-saveL flex justify-end'>
                <img src='icons/Save.png' alt='' className='hover:scale-110 cursor-pointer md:w-4 md:h-5 sm:w-0 sm:h-0 md:mr-saveR md:mt-saveT bg-transparent'/>
            </div>
        </div>
    )
}

export default JobComponent;
