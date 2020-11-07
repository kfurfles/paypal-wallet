import React from 'react'
import { IProps } from './IProps'
import { 
    Container,
    Center,
    Side } from './styled'

const Topbar: React.FC<IProps> = (props) => {
    return(<Container>
        <Side>{ props.left }</Side>
        <Center>{ (props.center || props.children) || '<no content topbar>' }</Center>
        <Side>{ props.right }</Side>
    </Container>)
}



export { Topbar }