import React, { useState } from 'react';
import Pagination from './Pagination/Pagination';
import Button from '../../components/Button';

const PageBox = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='mb-16 mt-pageBox w-pageBox h-pageBox bg-boxColor rounded-pageBox shadow-boxShadow ml-pageBoxSideL mr-pageBoxSideR'>
            <Button 
                onClick={handleChange} 
                className='cursor-pointer bg-boxColor absolute w-arrow h-locationIcon mt-2 ml-arrowLeftL' 
                title={<img src='icons/LeftArrow.png' className='absolute bg-boxColor'/>}
            />
            <img src='icons/Separator.png' className='absolute bg-boxColor ml-separatorL mt-separatorT'/>
            <img src='icons/Separator.png' className='absolute bg-boxColor ml-separatorR mt-separatorT'/>
            <Button 
                onClick={handleChange} 
                className='cursor-pointer bg-boxColor absolute w-arrow h-locationIcon mt-2 ml-arrowRightL' 
                title={<img src='icons/RightArrow.png' className='absolute bg-boxColor'/>}
            />
            <Pagination
                title={currentPage}
                currentPage = {currentPage}
                itemsCount = {20}
                onPageChange = {handleChange}
            />
        </div>
    )
}

export default PageBox;
