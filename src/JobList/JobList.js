import React from 'react';
import {FiBookmark} from 'react-icons/fi';

const JobList = () => {
    return (
        <div className='flex w-max h-max flex-row items-start p-0 gap-2 absolute mt-top ml-left bg-boxColor rounded-lg'>
            <div className='w-img h-img bg-red-600 mt-6 ml-4 absolute rounded-full'>
            </div>
            <div className='mt-6 ml-titleLeft w-title h-title font-sans not-italic bg-yellow-400 font-bold leading-title tracking-title text-title'>
                Arbeit
            </div>
            <div>
                <FiBookmark className='text-grey07 bg-boxColor absolute w-4 h-5 mt-saveT ml-saveL'/>
            </div>
        </div>    
    )
}

export default JobList;
