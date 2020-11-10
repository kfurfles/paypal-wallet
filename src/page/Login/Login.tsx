import React from 'react';
import { 
    Container, 
    SvgLogo, 
    InputEmail, 
    InputPassword, 
    LoginButton,
    SecondaryButton } from './styled'

const Login = () => {
    return (
        <Container className="login">
            <SvgLogo />
            <InputEmail type="email" placeholder="Enter your name or e-mail" />
            <InputPassword type="password" placeholder="Password" />
            <LoginButton>Log In</LoginButton>
            <SecondaryButton variation={"secondary"}>Having trouble logging in?</SecondaryButton>
            <SecondaryButton variation={"secondary"}>Sign up</SecondaryButton>
        </Container>
    );
}

export { Login }
