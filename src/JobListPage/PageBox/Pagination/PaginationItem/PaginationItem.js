import React from 'react';
import Button from '../../../../components/Button';
import classes from './PaginationItem.module.css';

const PaginationItem = ({ page, currentPage, onPageChange, title }) => {
    return (
        <Button 
            title={title} 
            onClick={() => onPageChange(page)}
            className={classes.paginationItem}
        >
            {page}
        </Button>
    );
};

export default PaginationItem;
