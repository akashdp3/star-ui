import React from 'react';
import Styled, { keyframes } from 'styled-components';

type SpinnerSizes = 'sm' | 'md' | 'bg';

interface ISpinnerProps {
    size?: SpinnerSizes;
    borderColor?: string;
    borderLeftColor?: string;
}
const defaultProps = {
    size: 'md',
    borderColor: null,
    borderLeftColor: null
};

interface ISpinnerSizes {
    [key: string]: string;
}
const SPINNER_SIZES: ISpinnerSizes = {
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
  height: ${(props: any) => SPINNER_SIZES[props.size]};
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
