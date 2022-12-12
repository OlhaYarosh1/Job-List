import React from 'react';
import DetailedJobPage from './DetailedJobPage/DetailedJobPage';


const DetailedJobContainer = ({myId}) => {
    return (
        <div>
            <DetailedJobPage myId={myId}/>
        </div>
    )
}

export default DetailedJobContainer;
