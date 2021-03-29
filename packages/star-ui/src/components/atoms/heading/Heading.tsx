import * as React from 'react';

import { Element } from '../../../primitives';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface IHeadingProps {
    /* children: prefer string type */
    children: React.ReactNode;
    /* as: Render heading as a particular tag, default value: h1 */
    as?: HeadingTypes;
}
const defaultProps = {
    as: 'h1'
};

const Heading = (props: IHeadingProps) => {
    return <Element component="Heading" {...props} />;
};

Heading.defaultProps = defaultProps;
export default Heading;
