import * as React from 'react';

import { Element } from '../../../primitives';

interface ITextAreaProps {
    /* placeholder: textarea placeholder */
    placeholder?: string;
    /* disabled: flag to mark text area disabled */
    disabled?: boolean;
    /* invalid: flag to mark text area as error field */
    invalid?: boolean;
}
const DefaultProps = {
    disabled: false,
    isInvalid: false
};

const TextArea = (props: ITextAreaProps) => {
    const { invalid, ...others } = props;

    return (
        <Element
            as="textarea"
            component="TextArea"
            aria-invalid={invalid}
            {...others}
        />
    );
};

TextArea.defaultProps = DefaultProps;
export default TextArea;
