import * as React from 'react';

import { Element } from '../../../primitives';

type StackDirections = 'horizontal' | 'vertical';
interface IStackProps {
    /* direction: stack direction('vertical', 'horizontal') */
    direction?: StackDirections;
    /* children: can be anything */
    children: React.ReactNode;
    /* align items */
    align?: string;
    /* Flex gap */
    gap?: string;
}
const DEFAULT_PROPS = {
    direction: 'horizontal'
};

const StackComponent = (props: IStackProps) => {
    const { direction, align, gap, ...others } = props;
    const css = {
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        alignItems: align,
        gap
    };

    // @ts-ignore
    return <Element as="div" component="Stack" css={css} {...others} />;
};

StackComponent.defaultProps = DEFAULT_PROPS;
export default StackComponent;
