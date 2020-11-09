import styled from 'styled-components'
import * as COLOR from '../../variables/colors'
import { IProps } from './IProps'
type ImageCardType = Pick<IProps,'grayBackground'>

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 15px 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.03);
    border-radius: 25px;
`

export const ImageCard = styled.div<ImageCardType>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 20px;
    background-color: ${props => props.grayBackground ? COLOR.GRAY : 'transparent' };
`

export const CenterContainer = styled.div`
    text-align: left;
`

export const Title = styled.div`
    color: ${COLOR.BLACK};
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;
`

export const SubTitle = styled.div`
    margin-top: 5px;
    color: ${COLOR.BLACK};
    font-size: 12px;
    color: ${COLOR.BLACK_W_50_OPACITY};
`

export const LeftInfo = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`