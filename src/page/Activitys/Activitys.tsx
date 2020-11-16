import React, { useEffect, useState } from 'react';
import { 
    Container, 
    IconButton, 
    RadioGroup, 
    RadioItem, 
    LabelItem,
    ActivityAmount,
    InputBox,
    InputSearch } from './styled'
import Topbar from '../../components/Topbar'
import { ReactComponent as BackIcon } from '../../assets/svg/back-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/search-icon.svg'

import { ReactComponent as GoogleDriveIcon } from '../../assets/svg/google-drive-icon.svg'
import ActivityList from '../../components/ActivityList';

import { getActivitys } from './service'

const Activitys = () => {

    const [searchBox, setSearchBox] = useState(false); 
    const [searchValue, setSearchValue] = useState('');
    const [activityType,setActivityType] = useState('all');
    const [activityList,setActivityList] = useState<any>([]);


    const searchBoxToggle = () => {
        setSearchBox(!searchBox)
    }

    const setActivityTypeInput = (value: string) => {
        setActivityType(value)
        setSearchBox(false)
    }
    
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
        setActivityType('all')
    },[])

    

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

            <InputBox active={searchBox}>
                <SearchIcon />
                <InputSearch value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="qual atividade ?" />
            </InputBox>

            <RadioGroup>
                <RadioItem checked={"all" === activityType} onChange={e => {setActivityTypeInput("all")}} name="activity" id="all" value="all" type="radio"></RadioItem>
                <LabelItem htmlFor="all">All</LabelItem>

                <RadioItem checked={"income" === activityType} onChange={e => {setActivityTypeInput("income")}} name="activity" id="income" value="income" type="radio"></RadioItem>
                <LabelItem htmlFor="income">Income</LabelItem>

                <RadioItem checked={"outcome" === activityType} onChange={e => {setActivityTypeInput("outcome")}} name="activity" id="outcome" value="outcome" type="radio"></RadioItem>
                <LabelItem htmlFor="outcome">Outcome</LabelItem>
            </RadioGroup>

            <ActivityList list={activityList} title="Today"></ActivityList>    

            {/* <ActivityBlock>
                <ActivityTitle className="activity-title">Today</ActivityTitle>

                <ActivityCard
                    className="activity-card"
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
               
            </ActivityBlock> */}

        </Container>
    );
}

export { Activitys }
