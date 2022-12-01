import React from 'react'

const Button = ({title, onClick, className, ref}) => {
    return (
        <div className='bg-transparent'>
            <button className={className} onClick={onClick} ref={ref}>{title}</button>
        </div>
    )
}

export default Button;
