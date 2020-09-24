import React from 'react';
import Styled from 'styled-components';

import { getAppearance } from './button.helper';

type ButtonTypes = 'submit' | 'button' | 'reset';
type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'ghost';
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

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
  cursor: pointer;
  padding: 10px 12px;
  border-width: 1px;
  border-radius: 4px;

  /* All Colors */
  color: ${(props: any) => getAppearance(props).color};
  background-color: ${(props: any) => getAppearance(props).backgroundColor};
  border-color: ${(props: any) => getAppearance(props).borderColor};

  &:hover {
    background-color: ${(props: any) =>
      getAppearance(props).hoverBackgroundColor};
    border-color: ${(props: any) => getAppearance(props).hoverBorderColor};
  }
`;

const Button = (props: IButtonProps) => {
  const { children, ...others } = props;

  return <ButtonElement {...others}>{children}</ButtonElement>;
};

Button.defaultProps = DefaultProps;

export default Button;
