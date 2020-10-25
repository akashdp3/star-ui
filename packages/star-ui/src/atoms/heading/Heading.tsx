import React from 'react';
import Styled from 'styled-components';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface IHeadingProps {
    children: React.ReactNode;
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
