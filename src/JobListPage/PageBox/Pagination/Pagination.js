import React from 'react'
import PaginationItem from './PaginationItem/PaginationItem';
import classes from './Pagination.module.css';

const range = (start, end) => {
    return [...Array(end).keys()].map((element) => element + start);
};

const Pagination = ({ currentPage, itemsCount, countPerPage, onPageChange, title }) => {
    const pagesCount = Math.ceil(itemsCount / countPerPage);
    const pages = range(1, pagesCount);

    // const focusRef = useRef(null);
    // useEffect(() => {
    //     focusRef.currentPage.focus
    // }, []);
    return (
        <div className={classes.pagination}>
            {pages.map((page, index) => (
                <PaginationItem
                    page={pagesCount}
                    key={page}
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(index)}
                    title={index + 1}
                />
            ))}
        </div>
    );
}

export default Pagination;
