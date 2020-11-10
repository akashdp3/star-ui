/// <reference types="react" />
interface ITextAreaProps {
    placeholder?: string;
    disabled?: boolean;
    isInvalid?: boolean;
}
declare const TextArea: (props: ITextAreaProps) => JSX.Element;
export default TextArea;
