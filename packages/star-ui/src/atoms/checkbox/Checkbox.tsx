import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

interface ICheckBoxProps {
    label?: string;
    onChange?: Function;
    disabled?: boolean;
    checked?: boolean;
}
const DEFAULT_PROPS = {
    label: '',
    onChange: () => {},
    disabled: false,
    checked: false
};

const StyledCheckBoxContainer = Styled.label`
    width: fit-content;
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size:14px;


    /* On mouse-over, add a grey background color */
    &:hover input:not(:disabled) ~ .checkmark {
        border-color: ${(props: any) => props.theme.colors.primary.base};
    }

    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
        background-color: ${(props: any) => props.theme.colors.primary.base};
    }

    input:disabled ~ .checkmark {
        /* border-color: ${(props: any) =>
            props.theme.colors.secondary.light}; */
        /* background-color: ${(props: any) =>
            props.theme.colors.secondary.light}; */
    }

    /* Show the checkmark when checked */
    input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .checkmark:after {
        left: 5px;
        top: 2px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 1px 1px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

const StyledCheckBox = Styled.input`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
`;

const StyledCheckBoxSpan = Styled.span`
    /* Create a custom checkbox */
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid ${(props: any) => props.theme.colors.secondary_lighter};
    border-radius: 4px;
    cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};

    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;
const StyledCheckBoxValue = Styled.span`

`;

const CheckBox = (props: ICheckBoxProps) => {
    const { label, disabled, ...others } = props;

    return (
        <StyledCheckBoxContainer className="container" disabled={disabled}>
            <StyledCheckBoxValue disabled={disabled}>
                {label}
            </StyledCheckBoxValue>
            <StyledCheckBox type="checkbox" disabled={disabled} {...others} />
            <StyledCheckBoxSpan className="checkmark" disabled={disabled} />
        </StyledCheckBoxContainer>
    );
};

CheckBox.defaultProps = DEFAULT_PROPS;
export default CheckBox;
