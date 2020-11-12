import React from 'react';
import { 
    Container, 
    PersonalInfoContainer, 
    ProfileTopBar, 
    AvatarWrapper, 
    Balance,
    BalanceAmount,
    BalanceLabel } from './styled';

import { ReactComponent as PayPalIcon } from './../../assets/svg/paypal-icon.svg'

const Profile = () => {
  return (
  <Container>
        <PersonalInfoContainer>
            {/* <BackgroundImage className="profile__bg-image" /> */}
            <ProfileTopBar>
                <div>
                    <PayPalIcon />
                </div>
                <AvatarWrapper>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="avatar__image"/>
                </AvatarWrapper>
            </ProfileTopBar>

            <Balance>
                <BalanceAmount>$ 272.30</BalanceAmount>
                <BalanceLabel>Your Balance</BalanceLabel>
            </Balance>
        </PersonalInfoContainer>
      
  </Container>);
}

export { Profile };