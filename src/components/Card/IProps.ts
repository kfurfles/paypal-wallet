import { BaseHTMLAttributes, ReactNode } from "react";

export interface IProps {
    image: React.ReactNode,
    className?: string
    grayBackground?: boolean
    title: string,
    subTitle: string,
    info?: React.ReactNode
}