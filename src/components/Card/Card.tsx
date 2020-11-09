import React from 'react'
import { 
    Container,
    ImageCard,
    CenterContainer,
    LeftInfo,
    SubTitle,
    Title } from './styled'
import { IProps } from './IProps'

const Card : React.FC<IProps> = (props) => {
    return (
    <Container className={props.className}>     
        <ImageCard grayBackground={props.grayBackground}>{props.image}</ImageCard>
        
        <CenterContainer>
            <Title>{props.title}</Title>
            <SubTitle>{props.subTitle}</SubTitle>
        </CenterContainer>

        <LeftInfo>{props.info}</LeftInfo>
    </Container>)
}

export { Card }