import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface Tag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children?: ReactNode;
    color?: 'ghost' | 'red' | 'green' | 'primary' | 'grey'
    size?: 'm' | 's'
    href?: string
}