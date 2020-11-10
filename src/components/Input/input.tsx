import React, { InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types'
import { InputEl } from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string,
}


const Input: React.FC<InputProps> = (props) => {
    return(<InputEl placeholder={props.placeholder} {...props}></InputEl>)
}

Input.defaultProps = {
    placeholder: '<no placeholder>'    
}

Input.propTypes = {
    placeholder: PropTypes.string,
}

export { Input }
