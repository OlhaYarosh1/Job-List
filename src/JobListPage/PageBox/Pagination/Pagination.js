import React from 'react'
import PaginationItem from './PaginationItem/PaginationItem';

const range = (start, end) => {
    return [...Array(end).keys()].map((element) => element + start);
};

const Pagination = ({ currentPage, itemsCount, onPageChange, title }) => {
    const pagesCount = Math.ceil(itemsCount / 15);
    const pages = range(1, pagesCount);

    return (
        <div className='flex absolute ml-pageNumbers bg-boxColor'>
            {pages.map((page) => (
                <PaginationItem
                page={page}
                key={page}
                currentPage={currentPage}
                onPageChange={onPageChange}
                title={title}
                />
            ))}
        </div>
    );
}

export default Pagination;
