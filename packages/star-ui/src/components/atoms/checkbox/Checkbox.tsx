import React from 'react';
import Styled from 'styled-components';

interface ICheckBoxProps {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
}
const DEFAULT_PROPS = {
    label: '',
    disabled: false,
    checked: false
};

const StyledCheckBoxContainer = Styled.label`
    width: fit-content;
    display: block;
    position: relative;
    padding-left: 24px;
    cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size:14px;

    .label {
        ${(props: any) =>
            props.disabled &&
            `
                color: ${props.theme.tokens.colors.secondary.light};
            `}
        padding-top: 2px;
    }

    input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
    }

    /* On mouse-over, add a grey background color */
    &:hover input:not(:disabled) ~ .checkmark {
        border-color: ${(props: any) => props.theme.tokens.colors.primary.base};
    }

    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
        background-color: ${(props: any) =>
            props.theme.tokens.colors.primary.base};
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
        border: 1px solid ${(props: any) =>
            props.theme.tokens.colors.secondary.lighter};
        border-width: 0 1px 1px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

const StyledCheckBoxSpan = Styled.span`
    /* Create a custom checkbox */
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid ${(props: any) =>
        props.theme.tokens.colors.secondary.lighter};
    border-radius: 4px;
    cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};

    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

const CheckBox = (props: ICheckBoxProps) => {
    const { label, disabled, ...others } = props;

    return (
        // @ts-ignore
        <StyledCheckBoxContainer disabled={disabled}>
            <span className="label">{label}</span>
            <input type="checkbox" disabled={disabled} {...others} />
            {/* @ts-ignore */}
            <StyledCheckBoxSpan className="checkmark" disabled={disabled} />
        </StyledCheckBoxContainer>
    );
};

CheckBox.defaultProps = DEFAULT_PROPS;
export default CheckBox;
