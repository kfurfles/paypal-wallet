import React from 'react';
import { 
    Container, 
    IconButton, 
    RadioGroup, 
    RadioItem, 
    LabelItem,
    ActivityBlock,
    ActivityTitle,
    ActivityCard,
    ActivityAmount } from './styled'
import Topbar from '../../components/Topbar'
import { ReactComponent as BackIcon } from '../../assets/svg/back-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/search-icon.svg'


import { ReactComponent as GoogleDriveIcon } from '../../assets/svg/google-drive-icon.svg'

const Activitys = () => {
    return (
        <Container className="activity">
            <Topbar 
                left={<IconButton><BackIcon /></IconButton>}
                center={"Activity"}    
                right={<IconButton><SearchIcon /></IconButton>}
            />

            <RadioGroup>
                <RadioItem name="activity" id="all" value="all" type="radio"></RadioItem>
                <LabelItem htmlFor="all">All</LabelItem>

                <RadioItem name="activity" id="income" value="income" type="radio"></RadioItem>
                <LabelItem htmlFor="income">Income</LabelItem>

                <RadioItem name="activity" id="outcome" value="outcome" type="radio"></RadioItem>
                <LabelItem htmlFor="outcome">Outcome</LabelItem>
            </RadioGroup>

            <ActivityBlock>
                <ActivityTitle>Today</ActivityTitle>

                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title={"Mike Rine"}
                    grayBackground={true}  
                    subTitle={"1 minute ago"}
                    info={<ActivityAmount valueType={"income"}>+200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title={"Mike Rine"}
                    grayBackground={true}  
                    subTitle={"1 minute ago"}
                    info={<ActivityAmount valueType={"outcome"}>-200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title={"Mike Rine"}
                    grayBackground={true}  
                    subTitle={"1 minute ago"}
                    info={<ActivityAmount valueType={"income"}>+200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title={"Mike Rine"}
                    grayBackground={true}  
                    subTitle={"1 minute ago"}
                    info={<ActivityAmount valueType={"outcome"}>-200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title={"Mike Rine"}
                    grayBackground={true}  
                    subTitle={"1 minute ago"}
                    info={<ActivityAmount valueType={"income"}>+200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title={"Mike Rine"}
                    grayBackground={true}  
                    subTitle={"1 minute ago"}
                    info={<ActivityAmount valueType={"outcome"}>-200</ActivityAmount>}
                ></ActivityCard>
               
            </ActivityBlock>

        </Container>
    );
}

export { Activitys }
