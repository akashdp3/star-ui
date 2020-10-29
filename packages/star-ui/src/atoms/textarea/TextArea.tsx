import React from 'react';
import Styled from 'styled-components';

interface ITextAreaProps {
    placeholder?: string;
    disabled?: boolean;
    isInvalid?: boolean;
}
const defaultProps = {
    disabled: false,
    isInvalid: false
};

const TextAreaElement = Styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props: any) =>
      props.isInvalid
          ? props.theme.colors.danger.base
          : props.theme.colors.secondary.base};
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: ${(props: any) =>
        props.isInvalid
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
