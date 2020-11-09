import styled from 'styled-components';
import { IActivityItem } from './IProps'
import * as COLOR from '../../variables/colors';

import Card from '../../components/Card'

export const IconButton = styled.button`
    svg{
        width: 20px;
        height: 20px
    }
`

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    padding-bottom: 30px;
    padding-left: 34px;
    padding-right: 34px;
`

export const RadioGroup = styled.div`
    margin-top: 34px;
    background-color: ${"#ececec"};
    /* background-color: ${COLOR.GRAY}; */
    display: flex;
    justify-content: space-between;
    padding: 3px;
    border-radius: 10px;
`

export const RadioItem = styled.input`
    width: 0px;
    height: 0px;
    margin: 0;

    &:checked + label {
        background-color: ${COLOR.PRIMARY};
        color: ${COLOR.WHITE}; 
    }
`

export const LabelItem = styled.label`
    background-color: transparent;
    color: ${COLOR.BLACK_W_50_OPACITY};
    font-weight: bold;
    font-size: 16px;
    padding: 11px 24px;
    border-radius: 10px;
`

export const ActivityBlock = styled.div`
    margin-top: 23px;
`

export const ActivityTitle = styled.div`
    color: ${COLOR.BLACK_W_50_OPACITY};
    text-align: left;
    font-size: 12px;
    margin-bottom: 13px;
`

export const ActivityCard = styled(Card)`
    margin-top: 4px;
    margin-bottom: 4px;
`

export const ActivityAmount = styled.div<IActivityItem>`
    font-size:13px;
    font-weight:bold;
    color: ${props => props.valueType === 'income' ? COLOR.GREEN : COLOR.RED };
`