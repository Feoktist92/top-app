import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    children: ReactNode;
    color: 'ghost' | 'primary' | 'green' | 'red' | 'gray';
    href?: string;
}
