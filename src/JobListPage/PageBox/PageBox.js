import React, { useState } from 'react';
import Pagination from './Pagination/Pagination';
import Button from '../../components/Button';

const PageBox = () => {
    const [currentPage, setCurrentPage] = useState();

    const handleChange = () => {
        console.log(currentPage)
    };

    const handleChangeLeftArrow = () => {
        console.log(currentPage - 1)
    };

    const handleChangeRightArrow = () => {
        console.log(currentPage + 1)
    };   

    return (
        <div className='mb-16 mt-pageBox w-pageBox h-pageBox bg-boxColor rounded-pageBox shadow-boxShadow ml-pageBoxSideL mr-pageBoxSideR'>
            <Button 
                onClick={handleChangeLeftArrow} 
                className='cursor-pointer bg-boxColor absolute w-arrow h-locationIcon mt-2 ml-arrowLeftL' 
                title={<img src='icons/LeftArrow.png' className='absolute bg-boxColor'/>}
            />
            <img src='icons/Separator.png' className='absolute bg-boxColor ml-separatorL mt-separatorT'/>
            <img src='icons/Separator.png' className='absolute bg-boxColor ml-separatorR mt-separatorT'/>
            <Button 
                onClick={handleChangeRightArrow} 
                className='cursor-pointer bg-boxColor absolute w-arrow h-locationIcon mt-2 ml-arrowRightL' 
                title={<img src='icons/RightArrow.png' className='absolute bg-boxColor'/>}
            />
            <Pagination
                currentPage = {currentPage}
                itemsCount = {20}
                onPageChange = {handleChange}
            />
        </div>
    )
}

export default PageBox;
