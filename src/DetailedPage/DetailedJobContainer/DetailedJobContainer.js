import React from 'react';
import DetailedJobPage from './DetailedJobPage/DetailedJobPage';


const DetailedJobContainer = ({myId}) => {
    return (
        <div className=''>
            <DetailedJobPage myId={myId}/>
        </div>
    )
}

export default DetailedJobContainer;
