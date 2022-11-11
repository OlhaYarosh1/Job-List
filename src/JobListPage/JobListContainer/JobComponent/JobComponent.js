import React from 'react';

const JobComponent = () => {
    return (
        <div className='flex-none order-none grow-0 flex flex-row h-component p-0 mb-2 relative bg-boxColor rounded-lg shadow-boxShadow'>
            <div className='w-img h-img bg-red-600 mt-6 ml-4 absolute rounded-full'>
            </div>
            <div className='mt-6 ml-titleLeft w-title h-title font-sans not-italic bg-yellow-400 font-bold leading-title tracking-title text-title'>
                Arbeit
            </div>
            <div></div>
            <img src='icons/Save.png' alt='' className='w-4 h-5 bg-boxColor mr-6 mt-saveT ml-saveL'/>
        </div>
    )
}

export default JobComponent;
