import React from 'react';
import DetailedJobContainer from './DetailedJobContainer/DetailedJobContainer';
import classes from './DetailedPage.module.css';

const DetailedPage = ({myId}) => {
    return (
        <div className={classes.detailedPage}>
            <DetailedJobContainer myId={myId}/>
        </div>
    )
}

export default DetailedPage;
