import React from 'react';
import Styled from 'styled-components';

interface IInputProps {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  isInvalid?: boolean;
}
const defaultProps = {
  disabled: false,
  isInvalid: false
};

const InputElement = Styled.input`
  width: 100%;
  padding: 0 16px;
  height: 32px;
  border: 1px solid ${(props: any) =>
    props.isInvalid
      ? props.theme.colors.danger.base
      : props.theme.colors.secondary.base};
  border-radius: 4px;

  &:focus {
    outline: none;
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

const Input = (props: IInputProps) => {
  return <InputElement {...props} />;
};

Input.defaultProps = defaultProps;
export default Input;
