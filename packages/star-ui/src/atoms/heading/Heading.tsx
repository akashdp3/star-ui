import * as React from 'react';
import Styled from 'styled-components';

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
    const { children, as: Element = 'h1', ...others } = props;

    return <Element>{children}</Element>;
};

Heading.defaultProps = defaultProps;
export default Heading;
