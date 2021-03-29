import * as React from 'react';

import { Element } from '../../../primitives';

type ButtonTypes = 'submit' | 'button' | 'reset';
type ButtonVariants =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'ghost';
type ButtonSizes = 'small' | 'medium' | 'large';

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
    size: 'medium',
    disabled: false,
    loading: false
};

const Button = (props: IButtonProps) => {
    return <Element as="button" component="Button" {...props} />;
};

Button.defaultProps = DefaultProps;
export default Button;
