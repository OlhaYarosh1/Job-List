import React, { useState } from 'react';
import Pagination from './Pagination/Pagination';
import Button from '../../components/Button';
import classes from './PaginationBox.module.css';

const PaginationBox = ({currentPage, itemsCount, countPerPage, onPageSelect}) => {

    const handleChange = (pageNumber) => {
        console.log(pageNumber)

        if (onPageSelect) {
            onPageSelect(pageNumber);
        }
    };

    const handleChangeLeftArrow = () => {
        onPageSelect(currentPage - 1);
    };

    const handleChangeRightArrow = () => {
        onPageSelect(currentPage + 1);
    };   

    return (
        <div className={classes.box}>
            <Button 
                onClick={handleChangeLeftArrow}
                className={classes.leftArrow}
                title={<img src='icons/LeftArrow.png' className={classes.arrow}/>}
            />
            <img src='icons/Separator.png' className={classes.imgSeparatorLeft}/>
            <img src='icons/Separator.png' className={classes.imgSeparatorRight}/>
            <Button 
                onClick={handleChangeRightArrow}
                className={classes.rightArrow}
                title={<img src='icons/RightArrow.png' className={classes.arrow}/>}
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

export default PaginationBox;
