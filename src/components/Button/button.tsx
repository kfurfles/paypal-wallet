import React from 'react';
import { ButtonEl } from './styled'
import { ButtonProps } from './IProps'

const Button: React.FC<ButtonProps> = (props) => (
    <ButtonEl {...props}>{props.children}</ButtonEl>
)

Button.defaultProps = {
    variation: 'primary'
}

export { Button }
