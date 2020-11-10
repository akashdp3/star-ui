import React from 'react';
declare type TextVariants = 'primary' | 'success' | 'danger' | 'warning' | 'default' | 'secondary';
declare type TextAligns = 'left' | 'center' | 'right';
interface ITextProps {
    align?: TextAligns;
    size?: number;
    variant?: TextVariants;
    width?: string;
    children: React.ReactNode;
    style?: object;
}
declare const Text: {
    (props: ITextProps): JSX.Element;
    defaultProps: {
        align: string;
        variant: string;
        style: {};
    };
};
export default Text;
