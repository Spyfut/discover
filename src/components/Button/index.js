import React from 'react'
import './index.css'

function Button (props) {
    const {children, link, onClick} = props;
    return (
        <a className='button' href={link} onClick={onClick}>
            <span>{children}</span>
            <div className='border'></div>
        </a>
    )   
}

export default Button