import styled from '@emotion/styled'
import { IActivityItem } from './IProps';
import * as COLOR from '../../variables/colors';

import Card from '../../components/Card';
import Input from '../../components/Input';

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
    cursor: pointer;

    &:nth-of-type(3) {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`

interface IInputBox {
    active: boolean
}
export const InputBox = styled.div<IInputBox>`
    position: relative;
    margin-top: ${props => props.active ? '20px' : '0px'};
    max-height: ${props => props.active ? '100px' : '0px'};
    opacity: ${props => props.active ? 1 : 0 };
    visibility: ${props => props.active ? 'visible' : 'hidden' };
    transition: 0.5s ease-in-out all;
    overflow: hidden;

    svg {
        position: absolute;
        left: 10px;
        top: 50%;
        width: 20px;
        height: 20px;
        transform: translateY(-50%);
    }
`

export const InputSearch = styled(Input)`
    width: 100%;
    padding: 15px 15px 15px 40px;
    border-radius: 15px;
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