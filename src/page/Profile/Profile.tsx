import React, { useEffect, useState } from 'react';
import { 
    Container, 
    PersonalInfoContainer, 
    ProfileTopBar, 
    AvatarWrapper, 
    Balance,
    BalanceAmount,
    BalanceLabel,
    ActionContainer,
    ContentContainer,
    ActivityTitle,
    SendMoneyButton,
    ButtonAction as RequestMoneyButton,
    ActivityList } from './styled';
import { ReactComponent as PayPalIcon } from './../../assets/svg/paypal-icon.svg'
import { ReactComponent as GoogleDriveIcon } from './../../assets/svg/google-drive-icon.svg'
import { ReactComponent as RequestMoney } from './../../assets/svg/request-money.svg'

import { getActivitys } from './service'
import { ActivityAmount } from '../../components/ActivityList/styled';


const Profile = () => {

    const [activityList,setActivityList] = useState<any>([]);

    useEffect(() => {
        const list = getActivitys.map(el => {
            const activityType: 'income' | 'outcome' = el.activityType === 'income' ? 'income' : 'outcome' 

            return {
                title: `${el.company}`,
                grayBackground: true,  
                subTitle: el.registered,
                info: <ActivityAmount valueType={activityType}>{`${activityType === 'income' ? '+' : '-'} ${el.amount}`}</ActivityAmount>,
                image: <GoogleDriveIcon />
            }
        })

        setActivityList(list)
    },[])

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

            <ContentContainer>
                <ActionContainer>
                    <SendMoneyButton>
                        <RequestMoney />
                            Send<br />Money
                    </SendMoneyButton>
                    <RequestMoneyButton variation="secondary">
                        <RequestMoney />
                            Request<br />Payment
                    </RequestMoneyButton>
                </ActionContainer>

                <ActivityList 
                    list={activityList}
                    title={<ActivityTitle>Activity</ActivityTitle>}
                />
            </ContentContainer>

        
    </Container>);
}

export { Profile };