import React from 'react';
declare type ButtonTypes = 'submit' | 'button' | 'reset';
declare type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost';
declare type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';
interface IButtonProps {
    type?: ButtonTypes;
    variant?: ButtonVariants;
    size?: ButtonSizes;
    isDisabled?: boolean;
    loadingText?: string;
    children: React.ReactNode;
    style?: object;
    isLoading: boolean;
}
declare const Button: {
    (props: IButtonProps): JSX.Element;
    defaultProps: {
        type: string;
        variant: string;
        size: string;
        isDisabled: boolean;
        isLoading: boolean;
    };
};
export default Button;
