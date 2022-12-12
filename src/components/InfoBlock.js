import React from 'react';

const InfoBlock = ({title, className}) => {
    return (
        <div className=''>
            <div className={className}>{title}</div>
        </div>
    )
}

export default InfoBlock;
