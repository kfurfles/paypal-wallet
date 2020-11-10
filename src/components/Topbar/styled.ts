import styled from '@emotion/styled'
import * as COLOR from '../../variables/colors'

export const Container = styled.div`
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
`

export const Side = styled.div`
    button{
        background-color: transparent;
        border: none;
        width: 36px;
        height: 36px;
    }
`

export const Center = styled.div`
    color: ${COLOR.BLACK};
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px
`