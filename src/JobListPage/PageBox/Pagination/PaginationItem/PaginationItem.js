import React from 'react';
import Button from '../../../../components/Button';

const PaginationItem = ({ page, currentPage, onPageChange, title }) => {
    return (
        <Button 
            title={title} 
            onClick={() => onPageChange(page)} 
            className='inline-block h-pageNumber mt-3 w-pageNumber font-sans not-italic bg-boxColor 
            font-bold text-grey07 text-pagination tracking-pagination leading-title'
        >
            {page}
        </Button>
    );
};

export default PaginationItem;
