import styled from '@emotion/styled'
import * as COLOR from './../../variables/colors'

import { ReactComponent as BackgroundImage } from '../../assets/svg/shape-bg.svg'

const ZIndexBase = styled.div`
    z-index: 2;
    position: relative;
`

export const Container = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 40px;
`

export const WalletBackground = styled.div`
    width: 100%;
    height: 192px;
    position: absolute;
    top: -12px;
    left: 0;
    z-index: 1;
    background: ${COLOR.BLACKGROUND_GRADIENT};
    border-radius: 0px;
    display: flex;
    justify-content: flex-start;
`

export const WalletBackgroundImage = styled(BackgroundImage)`
`

export const TopBar = styled(ZIndexBase)`
    color: ${COLOR.WHITE};
    display: flex;
    justify-content: space-between;
`

export const TopBarBackButton = styled.div``

export const TopBarTitle = styled.div`
    font-weight: 600;
`

export const TopBarEditButton = styled.div``

export const Avatar = styled(ZIndexBase)`
    margin-top: 17px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const AvatarWapper = styled.div`
    width: 147px;
    height: 147px;
    border-radius: 50%;
    border: 2px solid ${COLOR.WHITE};
    overflow: hidden;
`

export const AvatarImage = styled.img`
    width: 100%;
`

export const PersonalInfo = styled(ZIndexBase)`
    margin-top: 30px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
`

export const PersonalInfoTitle = styled.div`
    font-weight: 500;
    color: ${COLOR.BLACK_W_50_OPACITY};
    font-size: 12px;
`

export const PersonalInfoContainer = styled.div`
    margin-top: 18px;
    color: ${COLOR.BLACK};
    font-weight: 600;
`

export const PersonalInfoLabel = styled.span`
    width: 70px;
    display: inline-block;
    text-align: left;
`

export const PersonalInfoText = styled.span`
`

export const CreditCards = styled(ZIndexBase)`
    margin-top: 54px;
`

export const CreditCardsTitle = styled.div`
    font-weight: 500;
    color: ${COLOR.BLACKGROUND_GRADIENT};
    font-size: 12px;
    text-align: left;
    display: flex;
    justify-content: space-between;
`

export const CreditCardsAddNewButton = styled.button`
    padding-left: 20px;
    position: relative;
    background: transparent;
    border: none;
    color: ${COLOR.BLACK_W_50_OPACITY};
    
    &:after,&:before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 12px;
        height: 1px;
        border-radius: 2px;
        background: ${COLOR.BLACK_W_50_OPACITY};
        transform: translateY(-50%);
    }
    &:before{
        transform: translateY(-50%) rotate(90deg);
    }
`

export const CreditCardsList = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 15px 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.03);
    border-radius: 25px;
    margin-top: 17px;
`

export const CreditCardsBrand = styled.div`
    display: flex;
    align-items: center; 
    margin-right: 16px;
`

export const CreditCardsInfo = styled.div`
    text-align: left;
`

export const CreditCardsTitleUser = styled.div`
    color: ${COLOR.BLACK};
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;
`

export const CreditCardsNumberUser = styled.div`
    margin-top: 5px;
    color: ${COLOR.BLACK};
    font-size: 12px;
    color: ${COLOR.BLACK_W_50_OPACITY};
`
