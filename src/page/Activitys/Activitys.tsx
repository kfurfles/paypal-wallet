import React, { useState } from 'react';
import { 
    Container, 
    IconButton, 
    RadioGroup, 
    RadioItem, 
    LabelItem,
    ActivityBlock,
    ActivityTitle,
    ActivityCard,
    ActivityAmount,
    InputBox,
    InputSearch } from './styled'
import Topbar from '../../components/Topbar'
import { ReactComponent as BackIcon } from '../../assets/svg/back-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/search-icon.svg'


import { ReactComponent as GoogleDriveIcon } from '../../assets/svg/google-drive-icon.svg'

const Activitys = () => {

    const [searchBox, setSearchBox] = useState(false); 
    const [searchValue, setSearchValue] = useState('');
    const [activityType,setActivityType] = useState('all');

    const renderSearchBox = searchBox 
        ? (<InputBox>
            <SearchIcon />
            <InputSearch value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="qual atividade ?" />
          </InputBox>)
        : ''

    const searchBoxToggle = () => {
        setSearchBox(!searchBox)
    }

    const setActivityTypeInput = (value: string) => {
        setActivityType(value)
        setSearchBox(false)
    }

    return (
        <Container className="activity">
            <Topbar 
                left={<IconButton><BackIcon /></IconButton>}
                center="Activity"    
                right={
                    <IconButton onClick={() => searchBoxToggle()}>
                        <SearchIcon />
                    </IconButton>
                }
            />

            { renderSearchBox }

            <RadioGroup>
                <RadioItem checked={"all" === activityType} onChange={e => {setActivityTypeInput("all")}} name="activity" id="all" value="all" type="radio"></RadioItem>
                <LabelItem htmlFor="all">All</LabelItem>

                <RadioItem checked={"income" === activityType} onChange={e => {setActivityTypeInput("income")}} name="activity" id="income" value="income" type="radio"></RadioItem>
                <LabelItem htmlFor="income">Income</LabelItem>

                <RadioItem checked={"outcome" === activityType} onChange={e => {setActivityTypeInput("outcome")}} name="activity" id="outcome" value="outcome" type="radio"></RadioItem>
                <LabelItem htmlFor="outcome">Outcome</LabelItem>
            </RadioGroup>

            <ActivityBlock>
                <ActivityTitle>Today</ActivityTitle>

                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title="Mike Rine"
                    grayBackground={true}  
                    subTitle="1 minute ago"
                    info={<ActivityAmount valueType="income">+200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title="Mike Rine"
                    grayBackground={true}  
                    subTitle="1 minute ago"
                    info={<ActivityAmount valueType="outcome">-200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title="Mike Rine"
                    grayBackground={true}  
                    subTitle="1 minute ago"
                    info={<ActivityAmount valueType="income">+200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title="Mike Rine"
                    grayBackground={true}  
                    subTitle="1 minute ago"
                    info={<ActivityAmount valueType="outcome">-200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title="Mike Rine"
                    grayBackground={true}  
                    subTitle="1 minute ago"
                    info={<ActivityAmount valueType="income">+200</ActivityAmount>}
                ></ActivityCard>
                <ActivityCard
                    image={<GoogleDriveIcon />}
                    title="Mike Rine"
                    grayBackground={true}  
                    subTitle="1 minute ago"
                    info={<ActivityAmount valueType="outcome">-200</ActivityAmount>}
                ></ActivityCard>
               
            </ActivityBlock>

        </Container>
    );
}

export { Activitys }