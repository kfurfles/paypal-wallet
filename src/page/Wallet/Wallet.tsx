import React from 'react';

import { ReactComponent as BackIcon } from '../../assets/svg/arrow.svg'
import { ReactComponent as EditIcon } from '../../assets/svg/edit-icon.svg'
import { ReactComponent as VisaFlag } from '../../assets/svg/visa-flag.svg'
import { ReactComponent as MasterFlag } from '../../assets/svg/master-flag.svg'

import { 
    Container, 
    WalletBackground, 
    WalletBackgroundImage,
    TopBar, 
    TopBarBackButton, 
    TopBarEditButton, 
    TopBarTitle,
    Avatar, 
    AvatarWapper, 
    AvatarImage,
    PersonalInfo, 
    PersonalInfoTitle, 
    PersonalInfoContainer, 
    PersonalInfoLabel, 
    PersonalInfoText,
    CreditCards, 
    CreditCardsTitle, 
    CreditCardsAddNewButton, 
    CreditCardsList, 
    CreditCardsBrand, 
    CreditCardsInfo,
    CreditCardsNumberUser,
    CreditCardsTitleUser } from './styled'

const Wallet = () => {
    return (
        <Container>
            <WalletBackground>
                <WalletBackgroundImage />
            </WalletBackground>

            <TopBar>
                <TopBarBackButton><BackIcon /></TopBarBackButton>
                <TopBarTitle>Your Wallet</TopBarTitle>
                <TopBarEditButton><EditIcon /></TopBarEditButton>
            </TopBar>

            <Avatar>
                <AvatarWapper>
                    <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="avatar__image"/>
                </AvatarWapper>
            </Avatar>
            
            <PersonalInfo>
                <PersonalInfoTitle>Personal info</PersonalInfoTitle>

                <PersonalInfoContainer>
                    <PersonalInfoLabel>Name</PersonalInfoLabel>
                    <PersonalInfoText>Vadim Demenko</PersonalInfoText>
                </PersonalInfoContainer>
                <PersonalInfoContainer>
                    <PersonalInfoLabel>E-mail</PersonalInfoLabel>
                    <PersonalInfoText>vadikforz@gmail.com</PersonalInfoText>
                </PersonalInfoContainer>
                <PersonalInfoContainer>
                    <PersonalInfoLabel>Phone</PersonalInfoLabel>
                    <PersonalInfoText>+4 1782 049 294</PersonalInfoText>
                </PersonalInfoContainer>
            </PersonalInfo>
            
            <CreditCards>
                <CreditCardsTitle>
                    My banking cards
                    <CreditCardsAddNewButton>Add</CreditCardsAddNewButton>
                </CreditCardsTitle>

                <CreditCardsList>
                    <CreditCardsBrand>
                        <VisaFlag />
                    </CreditCardsBrand>
                    <CreditCardsInfo>
                        <CreditCardsTitleUser>Visa</CreditCardsTitleUser>
                        <CreditCardsNumberUser>4*** **** ****2 4746</CreditCardsNumberUser>
                    </CreditCardsInfo>
                </CreditCardsList>
                
                <CreditCardsList>
                    <CreditCardsBrand>
                        <MasterFlag />
                    </CreditCardsBrand>
                    <CreditCardsInfo>
                        <CreditCardsTitleUser>MasterCard</CreditCardsTitleUser>
                        <CreditCardsNumberUser>4*** **** ****3 5236</CreditCardsNumberUser>
                    </CreditCardsInfo>
                </CreditCardsList>

            </CreditCards>
        </Container>
    );
}

export { Wallet }
