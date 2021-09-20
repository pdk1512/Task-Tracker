import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({colorbtn, text, path, onClick}) => {

    return (
        <>
        {/* <button onClick={onClick} style={{backgroundColor: color}} 
            className='btn'>{text}</button> */}
        <Link onClick={onClick} 
            className={colorbtn} to={path}>{text}</Link>
        </>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
