import React from 'react';

type ButtonType = 'submit' | 'button' | 'reset';

interface IButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
}
const defaultProps = {
  type: 'button',
};

const Button = (props: IButtonProps) => {
  const { type, children } = props;

  return <button type={type}>{children}</button>;
};

Button.defaultProps = defaultProps;

export default Button;
