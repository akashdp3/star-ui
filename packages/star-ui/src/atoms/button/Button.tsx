import React from 'react';
import Styled from 'styled-components';

type ButtonTypes = 'submit' | 'button' | 'reset';
type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'ghost';
type ButtonSizes = 'small' | 'normal' | 'big';

interface IButtonProps {
  type?: ButtonTypes;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children: React.ReactNode;
}
const defaultProps = {
  type: 'button',
  variant: 'secondary',
  size: 'normal'
};

const ButtonElement = Styled.button``;

const Button = (props: IButtonProps) => {
  const { type, children } = props;

  return <ButtonElement type={type}>{children}</ButtonElement>;
};

Button.defaultProps = defaultProps;

export default Button;
