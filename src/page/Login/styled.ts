import styled from 'styled-components';
// import * as $ from '../../variables/colors';

import { ReactComponent as PayPalLogo } from '../../assets/svg/logo-paypal.svg'
import Input from './../../components/Input'
import Button from './../../components/Button'

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    padding-bottom: 30px;
`

export const SvgLogo = styled(PayPalLogo)`
    margin-top: 100px
`

const InputBase = styled(Input)`
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    min-width: 260px
`

export const InputEmail = styled(InputBase)`
    margin-top: 98px
`

export const InputPassword = styled(InputBase)`
    margin-top: 16px
`

export const LoginButton = styled(Button)`
    margin-top: 32px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    min-width: 260px;
    padding: 10px;
`

export const SecondaryButton = styled(LoginButton)`
    margin-top: 16px;
`
