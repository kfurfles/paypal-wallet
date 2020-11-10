import styled from 'styled-components'
import * as COLOR from './../../variables/colors'

import { ButtonProps } from './IProps'

export const ButtonEl = styled.button<ButtonProps>`
    border: 1px solid ${props => props.variation === 'primary' ? COLOR.PRIMARY : 'transparent'  };
    padding: 20px;
    color: ${props => props.variation === 'primary' ? COLOR.WHITE : COLOR.BLACK_W_50_OPACITY };
    background: ${props => props.variation === 'primary' ? COLOR.BLACKGROUND_GRADIENT : 'transparent' };
    box-shadow: ${props => props.variation === 'primary' ? '0px 24px 48px -18px rgba(21, 70, 160, 0.5)' : 'none' };  ;
    border-radius: 20px;
`