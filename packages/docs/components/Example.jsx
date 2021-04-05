import React from 'react';
import Styled from 'styled-components';

interface IExample {
    children: React.ReactNode;
}

const Example = ({ children }: IExample) => {
    return <div>{children}</div>;
};

Example.Section = Styled.div`
    margin-bottom: 24px;
`;

export default Example;
