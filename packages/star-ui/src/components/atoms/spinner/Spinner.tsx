import * as React from 'react';
import Styled, { keyframes } from 'styled-components';

type SpinnerSizes = 'sm' | 'md' | 'lg';

interface ISpinnerProps {
    /* Different sizes for spinner: 'sm': small, 'md': medium, 'lg': large*/
    size?: SpinnerSizes;
    /* customSize if any. It is given priority over size */
    customSize?: string;
    /* Custom border color */
    borderColor?: string;
    /* Custom border left color */
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
    lg: '32px'
};

/**
 * Animation for spinner
 */
const rotate = keyframes`
   0% { transform: rotate(0deg) }
  100% { transform: rotate(1turn) }
`;

const SpinnerElement = Styled.span`
    /* Spinner width: Assign custom size if any, otherwise assign from defined sizes */
    width: ${(props: any) => props.customSize || SPINNER_SIZES[props.size]};
    /* Spinner height: Assign custom size if any, otherwise assign from defined sizes */
    height: ${(props: any) => props.customSize || SPINNER_SIZES[props.size]};
    box-sizing: border-box;
    display: inline-block;

    /* Set solid border with width 2px */
    border: 2px solid;
    /* Assign custom border color, otherwise assign secondary light from theme */
    border-color: ${(props: any) =>
        props.borderColor || props.theme.tokens.colors.secondary.light};
    /* Assign custom border left color, otherwise assign secondary dark from theme */
    border-left-color: ${(props: any) =>
        props.borderLeftColor || props.theme.tokens.colors.secondary.dark};
    /* Set border radius to 50% to make it a circle */
    border-radius: 50%;
    /* Spinner animation */
    animation: 0.8s infinite ${rotate};
`;

const Spinner = (props: ISpinnerProps) => {
    // @ts-ignore TODO: Fix this
    return <SpinnerElement {...props} />;
};

Spinner.defaultProps = defaultProps;

export default Spinner;
