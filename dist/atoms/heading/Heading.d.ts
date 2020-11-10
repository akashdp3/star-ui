import React from 'react';
declare type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface IHeadingProps {
    children: React.ReactNode;
    as?: HeadingTypes;
}
declare const Heading: {
    (props: IHeadingProps): JSX.Element;
    defaultProps: {
        as: string;
    };
};
export default Heading;
