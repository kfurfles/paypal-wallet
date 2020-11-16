import { BaseProps } from '../../interface/IBaseProps'

export interface IActivityItem {
    valueType: 'income' | 'outcome';
    title: string;
    grayBackground: boolean;
    subTitle: string;
    info?: React.ReactDOM | string,
    image: React.ReactDOM | string
}

export interface IActivityList  extends BaseProps {
    list: IActivityItem[],
    title: JSX.Element | JSX.Element[] | string
}

