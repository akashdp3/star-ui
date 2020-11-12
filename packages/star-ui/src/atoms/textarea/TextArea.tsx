import React from 'react';
import Styled from 'styled-components';

interface ITextAreaProps {
    /* placeholder: textarea placeholder */
    placeholder?: string;
    /* disabled: flag to mark text area disabled */
    disabled?: boolean;
    /* invalid: flag to mark text area as error field */
    invalid?: boolean;
}
const defaultProps = {
    disabled: false,
    isInvalid: false
};

const TextAreaElement = Styled.textarea`
    /* Takes parent's default width */
    width: 100%;
    /* Default padding */
    padding: 8px;
    /* Solid border with 1px width. border color depends on 'invalid' flag */
    border: 1px solid ${(props: any) =>
        props.invalid
            ? props.theme.colors.danger.base
            : props.theme.colors.secondary.base};
    border-radius: 4px;
    /* TODO: Check impact on accessibility due to following */
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

const TextArea = (props: ITextAreaProps) => {
    return <TextAreaElement {...props} />;
};

export default TextArea;
