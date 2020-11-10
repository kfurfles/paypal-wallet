import React from 'react';
import { Container } from './styled';

import { ReactComponent as PayPalIcon } from './../../assets/svg/paypal-icon.svg'
import { ReactComponent as BackgroundImage } from '../../assets/svg/shape-profile.svg'

const Profile = () => {
  return (
  <Container className="profile">
      <div className="profile__info">
        <BackgroundImage className="profile__bg-image" />
        <div className="profile__top-bar">
            <div className="profile__logo">
                <PayPalIcon />
            </div>
            <div className="profile__avatar-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="avatar__image"/>
            </div>
        </div>

        <div className="balance">
            <div className="balance__amount">$272.30</div>
            <div className="balance__text">Your Balance</div>
        </div>
      </div>
      
  </Container>);
}

export { Profile };