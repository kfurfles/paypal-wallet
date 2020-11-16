import React from 'react';
import { IActivityList } from './IProps'

import { 
    ActivityBlock,
    ActivityTitle,
    ActivityCard,
    ActivityAmount } from './styled'

import { ReactComponent as GoogleDriveIcon } from '../../assets/svg/google-drive-icon.svg'


const ActivityList: React.FC<IActivityList> = (props) => {
    return(
        <ActivityBlock  className={props.className}>
            <ActivityTitle className="activity-title">{ props.title }</ActivityTitle>

            {props.list.map((activity) => {
                return (
                <ActivityCard
                    image={activity.image}
                    title={activity.title}
                    grayBackground={activity.grayBackground}  
                    subTitle={activity.subTitle}
                    info={activity.info}
                />
                )
            })}
               
        </ActivityBlock>
    )
}

ActivityList.defaultProps = {
    list: [],
    title: '<no title>'
}

export { ActivityList }