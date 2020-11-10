/// <reference types="react" />
interface IInputProps {
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    isInvalid?: boolean;
}
declare const Input: {
    (props: IInputProps): JSX.Element;
    defaultProps: {
        disabled: boolean;
        isInvalid: boolean;
    };
};
export default Input;
