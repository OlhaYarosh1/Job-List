import React from 'react';
import DetailedJobContainer from './DetailedJobContainer/DetailedJobContainer';
import classes from './DetailedPage.module.css';

const DetailedPage = () => {
    return (
        <div className={classes.detailedPage}>
            <DetailedJobContainer/>
        </div>
    )
}

export default DetailedPage;
