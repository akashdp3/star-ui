import React from 'react';
import Styled from 'styled-components';

import { getAppearance } from './button.helper';

type ButtonTypes = 'submit' | 'button' | 'reset';
type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'ghost';
type ButtonSizes = 'small' | 'normal' | 'big';

interface IButtonProps {
  type?: ButtonTypes;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children: React.ReactNode;
}
const DefaultProps = {
  type: 'button',
  variant: 'secondary',
  size: 'normal'
};

const ButtonElement = Styled.button`
  color: ${(props) => getAppearance(props.variant, props.theme).color};
`;

const Button = (props: IButtonProps) => {
  const { children, ...others } = props;

  return <ButtonElement {...others}>{children}</ButtonElement>;
};

Button.defaultProps = DefaultProps;

export default Button;
