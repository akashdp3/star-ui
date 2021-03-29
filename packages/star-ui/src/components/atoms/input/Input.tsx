import * as React from 'react';

import { Element } from '../../../primitives';

interface IInputProps {
    /* placeholder: Placeholder for input */
    placeholder?: string;
    /* type: input type options('text', 'password'...etc) */
    type?: string;
    /* disabled: Flag to make input disabled */
    disabled?: boolean;
    /* invalid: make input border color to danger */
    invalid?: boolean;
}
const defaultProps = {
    disabled: false,
    invalid: false
};

const Input = (props: IInputProps) => {
    const { invalid, ...others } = props;

    return (
        <Element
            as="input"
            component="Input"
            aria-invalid={invalid}
            {...others}
        />
    );
};

Input.defaultProps = defaultProps;
export default Input;
