import React from 'react';
import { Container, IconButton, RadioGroup, RadioItem, LabelItem } from './styled'
import Topbar from '../../components/Topbar'
import { ReactComponent as BackIcon } from '../../assets/svg/back-icon.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/search-icon.svg'

const Activity = () => {
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
        </Container>
    );
}

export { Activity }
