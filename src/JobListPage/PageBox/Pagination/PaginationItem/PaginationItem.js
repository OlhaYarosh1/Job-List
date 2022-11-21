import React from 'react';
import Button from '../../../../components/Button';

const PaginationItem = ({ page, currentPage, onPageChange, title }) => {
    return (
        <Button 
            title={title} 
            onClick={() => onPageChange(page)} 
            className='inline-block h-pageNumber mt-3 w-pageNumber font-sans not-italic bg-transparent focus:border-solid
            font-bold text-grey07 text-pagination tracking-pagination leading-title focus:underline focus:decoration-pageNumber focus:text-pageNumber'
        >
            {page}
        </Button>
    );
};

export default PaginationItem;
