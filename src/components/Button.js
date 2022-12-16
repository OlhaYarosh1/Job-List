import React from 'react'

const Button = ({title, onClick, className}) => {
    return (
        <div className='bg-transparent scale-[0.98]'>
            <button className={className} onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button;
