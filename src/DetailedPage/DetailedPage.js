import React from 'react';
import DetailedJobContainer from './DetailedJobContainer/DetailedJobContainer';

const DetailedPage = ({myId}) => {
    return (
        <div>
            <DetailedJobContainer myId={myId}/>
        </div>
    )
}

export default DetailedPage;
