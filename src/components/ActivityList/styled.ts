import styled from '@emotion/styled'
import * as COLOR from '../../variables/colors'

import { IActivityItem } from './IProps'
import Card from '../Card'

export const ActivityBlock = styled.div`
    margin-top: 23px;
`

export const ActivityTitle = styled.div`
    color: ${COLOR.BLACK_W_50_OPACITY};
    text-align: left;
    font-size: 12px;
    margin-bottom: 13px;
`

export const ActivityCard = styled(Card)`
    margin-top: 4px;
    margin-bottom: 4px;
`

export const ActivityAmount = styled.div<Pick<IActivityItem, 'valueType'>>`
    font-size:13px;
    font-weight:bold;
    color: ${props => props.valueType === 'income' ? COLOR.GREEN : COLOR.RED };
`