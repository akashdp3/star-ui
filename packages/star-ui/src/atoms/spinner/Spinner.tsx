import React from 'react';
import Styled, { keyframes } from 'styled-components';

type SpinnerSizes = 'sm' | 'md' | 'bg';

interface ISpinnerProps {
  size?: SpinnerSizes;
}
const defaultProps = {
  size: 'md'
};

const SPINNER_SIZES = {
  sm: '16px',
  md: '24px',
  bg: '32px'
};

const rotate = keyframes`
   0% { transform: rotate(0deg) }
  100% { transform: rotate(1turn) }
`;

const SpinnerElement = Styled.span`
  width: ${(props: any) => SPINNER_SIZES[props.size]};
  height: 24px;
  box-sizing: border-box;
  display: inline-block;

  border: 2px solid;
  border-color: ${(props: any) =>
    props.borderColor || props.theme.colors.secondary.light};
  border-left-color: ${(props: any) =>
    props.borderLeftColor || props.theme.colors.secondary.dark};
  border-radius: 50%;
  animation: 0.8s infinite ${rotate};
`;

const Spinner = (props: ISpinnerProps) => {
  return <SpinnerElement {...props} />;
};

Spinner.defaultProps = defaultProps;

export default Spinner;
