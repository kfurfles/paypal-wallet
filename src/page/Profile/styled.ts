import styled from '@emotion/styled'
import * as COLOR from '../../variables/colors'

import BackgroundImage from '../../assets/svg/shape-profile.svg'

export const Container = styled.div`  
`

export const PersonalInfoContainer = styled.div`
    background: ${COLOR.BLACKGROUND_GRADIENT};
    position: relative;
    z-index: -2;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 40px;
    padding-bottom: 28px;
    border-radius: 0 0 41px 0;
    box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);

    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(${BackgroundImage}) no-repeat;
        z-index: -1;
        opacity: 0.15;
    }
`

export const BackgroundPersonalInfo = styled.div`
`

export const ProfileTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AvatarWrapper = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 20px;
    border: 2px solid ${COLOR.PRIMARY};
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
    }
`

export const Balance = styled.div`
    margin-top: 67px;
    text-align: left;
`

export const BalanceAmount = styled.div`
    font-weight: bold;
    color: ${COLOR.WHITE};
    font-size: 40px;
`

export const BalanceLabel = styled.div`
    font-size: 16px;
    color: ${COLOR.WHITE};
`