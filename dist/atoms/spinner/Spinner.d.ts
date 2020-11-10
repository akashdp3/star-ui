/// <reference types="react" />
declare type SpinnerSizes = 'sm' | 'md' | 'bg';
interface ISpinnerProps {
    size?: SpinnerSizes;
    customSize?: string;
    borderColor?: string;
    borderLeftColor?: string;
}
declare const Spinner: {
    (props: ISpinnerProps): JSX.Element;
    defaultProps: {
        size: string;
        borderColor: null;
        borderLeftColor: null;
    };
};
export default Spinner;
