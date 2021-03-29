import * as React from 'react';
import Styled from 'styled-components';

import { getAppearance, getSizes } from './button.helper';

type ButtonTypes = 'submit' | 'button' | 'reset';
type ButtonVariants =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'ghost';
type ButtonSizes = 'small' | 'normal' | 'large';

interface IButtonProps {
    /* children: Preferred string type */
    children: React.ReactNode;
    /* type: options('button', 'submit', 'reset') */
    type?: ButtonTypes;
    /* variant: Checkout button helper to get different css for each variant */
    variant?: ButtonVariants;
    /* disabled: Boolean value to mark a button disabled */
    disabled?: boolean;
    /* loading: show loader when there is a operation going on */
    loading?: boolean;
    /* size: button sizes */
    size?: ButtonSizes;
}
const DefaultProps = {
    type: 'button',
    variant: 'secondary',
    size: 'normal',
    disabled: false,
    loading: false
};

const ButtonElement = Styled.button`
    /* Make all items in children align in one line */
    display: inline-flex;
    /* Show pointer hover since button is a clickable item */
    cursor: pointer;
    /* Default padding */
    padding: ${(props: any) => getSizes(props).padding};
    /* Default fontSize, only one fontsize is supported for now */
    font-size: ${(props: any) => getSizes(props).fontSize};
    /* Border properties */
    border-width: 1px;
    border-radius: 4px;

    /* All Colors */
    color: ${(props: any) => getAppearance(props).color};
    background-color: ${(props: any) => getAppearance(props).backgroundColor};
    border-color: ${(props: any) => getAppearance(props).borderColor};

    &:hover:enabled {
        background-color: ${(props: any) =>
            getAppearance(props).hoverBackgroundColor};
        border-color: ${(props: any) => getAppearance(props).hoverBorderColor};
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.4;
        box-shadow: none;
    }
`;

const Button = (props: IButtonProps) => {
    const { children, disabled, ...others } = props;

    return (
        <ButtonElement disabled={disabled} {...others}>
            {children}
        </ButtonElement>
    );
};

Button.defaultProps = DefaultProps;
export default Button;
