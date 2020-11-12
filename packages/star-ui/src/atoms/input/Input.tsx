import React from 'react';
import Styled from 'styled-components';

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

const InputElement = Styled.input`
    /* Takes parent's width */
    width: 100%;
    /* Default input padding */
    padding: 0 8px;
    /* Default input height */
    height: 32px;
    /* Solid border with width 1px. Set color to danger when invalid */
    border: 1px solid ${(props: any) =>
        props.invalid
            ? props.theme.colors.danger.base
            : props.theme.colors.secondary.base};
    border-radius: 4px;
    // TODO: Find out following's impact on accessibility
    outline: none;

  &:focus:not(:disabled), &:hover:not(:disabled) {
    border-color: ${(props: any) =>
        props.invalid
            ? props.theme.colors.danger.base
            : props.theme.colors.primary.dark};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    box-shadow: none;
  }
`;

const Input = (props: IInputProps) => {
    return <InputElement {...props} />;
};

Input.defaultProps = defaultProps;
export default Input;
