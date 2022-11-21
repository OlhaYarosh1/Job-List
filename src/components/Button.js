import React from 'react'

const Button = ({title, onClick, className}) => {
    return (
        <div className='bg-boxColor'>
            <button className={className} onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button;