import React from 'react';
import Styled from 'styled-components';

interface IRadioProps {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
}
const DEFAULT_PROPS = {
    label: '',
    disabled: false,
    checked: false
};

const StyledRadioContainer = Styled.label`
    position: relative;
    display: grid;
    grid-template-columns: max-content auto;
    padding-left: 25px;
    margin-bottom: 12px;
    user-select: none;
    font-size: 14px;
    cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};

    /* On mouse-over, add a primary background color */
    &:hover input:not(:disabled) ~ .checkmark {
        border-color: ${(props: any) => props.theme.colors.primary.base};
    }

    /* When the radio is checked, add a primary background */
    input:checked ~ .checkmark {
        background-color: ${(props: any) => props.theme.colors.white};
        border-color: ${(props: any) => props.theme.colors.primary.base};
    }

    /* Show the checkmark when checked */
    input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .checkmark:after {
        top: 3px;
        left: 3px;
        width: 10px;
        height: 10px;
        background: ${(props: any) => props.theme.colors.primary.base};
        border-radius: 50%;
    }
`;
const StyledRadio = Styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;
const StyledRadioSpan = Styled.span`
    /* Create a custom radio */
    position: absolute;
    top: 1px;
    left: 1px;
    height: 16px;
    width: 16px;
    border: 1px solid ${(props) => props.theme.colors.secondary.lighter};
    border-radius: 50%;

    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;
const StyledRadioValue = Styled.span`
    color: ${(props: any) =>
        props.disabled && props.theme.colors.secondary.light};
    padding-top: 2px;
`;

const RadioComponent = (props: IRadioProps) => {
    const { disabled, label, ...others } = props;

    return (
        <StyledRadioContainer disabled={disabled}>
            <StyledRadioValue disabled={disabled}>{label}</StyledRadioValue>
            <StyledRadio
                type="radio"
                disabled={disabled}
                {...others}
            />
            <StyledRadioSpan className="checkmark" />
        </StyledRadioContainer>
    );
};

RadioComponent.defaultProps = DEFAULT_PROPS;
export default RadioComponent;
