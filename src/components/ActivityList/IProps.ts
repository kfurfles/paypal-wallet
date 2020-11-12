export interface IActivityItem {
    valueType: 'income' | 'outcome';
    title: string;
    grayBackground: boolean;
    subTitle: string;
    info?: React.ReactDOM | string,
    image: React.ReactDOM | string
}

export interface IActivityList {
    list: IActivityItem[],
    title: string
}

