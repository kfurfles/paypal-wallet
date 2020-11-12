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
        <ActivityBlock>
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

                {/* <ActivityCard
                    image={<GoogleDriveIcon />}
                    title="Mike Rine"
                    grayBackground={true}  
                    subTitle="1 minute ago"
                    info={<ActivityAmount valueType="income">+200</ActivityAmount>}
                ></ActivityCard> */}
               
            </ActivityBlock>
    )
}

ActivityList.defaultProps = {
    list: [
        {
            grayBackground: false,
            info: '',
            subTitle: '',
            valueType: 'income',
            title: 'test',
            image: ''
        }
    ],
    title: '<no title>'
}

export { ActivityList }