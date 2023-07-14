import React from 'react'

const STYLES = ['btn--primary','btn--outline']

const SIZES = ['btn--large', 'btn--small']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>
{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    // return{
    //     <Link to='/addtasks'className='btn-mobile'>
    //     <button
    //     className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
    //     onClick ={onClick}
    //     type = {type}
    //     >
    //     {children}
    //     </button>
    //     </Link>
    // }

}