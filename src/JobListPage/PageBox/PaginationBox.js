import React from 'react';
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
                title={<img src='icons/ArrowLeft.svg' className={classes.arrow}/>}
            />
            <img src='icons/Separator.svg' className={classes.imgSeparatorRight}/>
            <img src='icons/Separator.svg' className={classes.imgSeparatorLeft}/>
            <Button 
                onClick={handleChangeRightArrow}
                className={classes.rightArrow}
                title={<img src='icons/ArrowRight.svg' className={classes.arrow}/>}
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
