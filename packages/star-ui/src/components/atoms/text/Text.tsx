import * as React from 'react';

import { Element } from '../../../primitives';

type TextVariants =
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'default'
    | 'secondary';
type TextAligns = 'left' | 'center' | 'right';

interface ITextProps {
    /* align: Text alignments('left', 'right', 'center') */
    align?: TextAligns;
    /* size: Font size */
    size?: number;
    /* variant: Text colors */
    variant?: TextVariants;
    /* width: to be specified for ellipsis */
    width?: string;
    /* children: preferred string type */
    children: React.ReactNode;
    /* style: custom style if any */
    style?: object;
}
const DEFAULT_PROPS = {
    align: 'left',
    variant: 'default',
    style: {}
};

const Text = (props: ITextProps) => {
    const { width, align, ...others } = props;

    let css = {
        textAlign: align,
        maxWidth: width,
        whiteSpace: width && 'nowrap',
        overflow: width && 'hidden',
        textOverflow: 'ellipsis',
        display: width && 'block'
    };

    return <Element as="span" component="Text" css={css} {...others} />;
};

Text.defaultProps = DEFAULT_PROPS;
export default Text;
