import styled from 'styled-components';

import * as COLOR from '../../variables/colors';

export const IconButton = styled.button`
    svg{
        width: 20px;
        height: 20px
    }
`

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
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
