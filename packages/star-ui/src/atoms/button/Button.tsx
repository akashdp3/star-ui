import React from 'react';
import Styled from 'styled-components';

import { getAppearance } from './button.helper';

type ButtonTypes = 'submit' | 'button' | 'reset';
type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'ghost';
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

interface IButtonProps {
  type?: ButtonTypes;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isDisabled?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  style?: object;
}
const DefaultProps = {
  type: 'button',
  variant: 'secondary',
  size: 'normal',
  isDisabled: false,
  loadingText: ''
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

  &:hover:enabled {
    background-color: ${(props: any) =>
      getAppearance(props).hoverBackgroundColor};
    border-color: ${(props: any) => getAppearance(props).hoverBorderColor};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    box-shadow: none;
  }
`;

const Button = (props: IButtonProps) => {
  const { children, isDisabled, loadingText, ...others } = props;

  return (
    <ButtonElement disabled={isDisabled} {...others}>
      {children}
    </ButtonElement>
  );
};

Button.defaultProps = DefaultProps;

export default Button;
