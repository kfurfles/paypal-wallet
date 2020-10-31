import React from 'react';
import './styles.scss';

import { ReactComponent as BackIcon } from '../../assets/svg/arrow.svg'
import { ReactComponent as BackgroundImage } from '../../assets/svg/shape-bg.svg'
import { ReactComponent as EditIcon } from '../../assets/svg/edit-icon.svg'
import { ReactComponent as VisaFlag } from '../../assets/svg/visa-flag.svg'
import { ReactComponent as MasterFlag } from '../../assets/svg/master-flag.svg'

const Wallet = () => {
    return (
        <div className="wallet">
            <div className="wallet__background">
                <BackgroundImage className="wallet__image" />
            </div>

            <div className="top-bar">
                <div className="top-bar__back-button"><BackIcon /></div>
                <div className="top-bar__title">Your Wallet</div>
                <div className="top-bar__edit-button"><EditIcon /></div>
            </div>

            <div className="avatar">
                <div className="avatar__wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="avatar__image"/>
                </div>
            </div>
            
            <div className="personal-info">
                <div className="personal-info__title">Personal info</div>

                <div className="personal-info__info">
                    <span className="label">Name</span>
                    <span className="info">Vadim Demenko</span>
                </div>
                <div className="personal-info__info">
                    <span className="label">E-mail</span>
                    <span className="info">vadikforz@gmail.com</span>
                </div>
                <div className="personal-info__info">
                    <span className="label">Phone</span>
                    <span className="info">+4 1782 049 294</span>
                </div>
            </div>
            
            <div className="credit-cards">
                <div className="credit-cards__title">
                    My banking cards
                    <button className="credit-cards__add-new">Add</button>
                </div>

                <div className="credit-cards__cards">
                    <div className="brand">
                        <VisaFlag />
                    </div>
                    <div className="info">
                        <div className="title">Visa</div>
                        <div className="number">4*** **** ****2 4746</div>
                    </div>
                </div>
                
                <div className="credit-cards__cards">
                    <div className="brand">
                        <MasterFlag />
                    </div>
                    <div className="info">
                        <div className="title">MasterCard</div>
                        <div className="number">4*** **** ****3 5236</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export { Wallet }
