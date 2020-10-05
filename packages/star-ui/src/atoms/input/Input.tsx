import React from 'react';
import Styled from 'styled-components';

interface IInputProps {
  placeholder?: string;
}

const InputElement = Styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props: any) => props.theme.colors.secondary.base};
  border-radius: 4px;
`;

const Input = (props: IInputProps) => {
  // const { label, ...others } = props;

  return <InputElement {...props} />;
};

export default Input;
