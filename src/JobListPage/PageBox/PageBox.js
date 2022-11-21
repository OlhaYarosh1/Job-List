import React, { useState } from 'react';
import Pagination from './Pagination/Pagination';
import Button from '../../components/Button';

const PageBox = ({currentPage, itemsCount, countPerPage, onPageSelect}) => {

    const handleChange = (pageNumber) => {
        console.log(pageNumber)

        if (onPageSelect) {
            onPageSelect(pageNumber);
        }
    };


    const handleChangeLeftArrow = (pageNumber) => {
        onPageSelect(currentPage - 1);
    };

    const handleChangeRightArrow = () => {
        onPageSelect(currentPage + 1);
    };   

    return (
        <div className='mb-16 mt-pageBox min-w-pageBox h-pageBox bg-boxColor rounded-pageBox shadow-boxShadow ml-pageBoxSideL mr-pageBoxSideR'>
            <Button 
                onClick={handleChangeLeftArrow} 
                className='cursor-pointer bg-transparent absolute w-arrow h-locationIcon mt-2 ml-arrowLeftL' 
                title={<img src='icons/LeftArrow.png' className='absolute bg-transparent'/>}
            />
            <img src='icons/Separator.png' className='absolute bg-transparent ml-separatorL mt-separatorT'/>
            <img src='icons/Separator.png' className='absolute bg-transparent ml-separatorR mt-separatorT'/>
            <Button 
                onClick={handleChangeRightArrow} 
                className='cursor-pointer bg-transparent absolute w-arrow h-locationIcon mt-2 ml-arrowRightL' 
                title={<img src='icons/RightArrow.png' className='absolute bg-transparent'/>}
            />
            <Pagination
                currentPage = {currentPage}
                itemsCount = {itemsCount}
                countPerPage={countPerPage}
                onPageChange = {handleChange}
            />
        </div>
    )
}

export default PageBox;
