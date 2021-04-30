import React from 'react';
import Styled from 'styled-components';

import Sidebar from './Sidebar';
import Content from './Content';

const Wrapper = Styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const Documentation = () => {
    return (
        <Wrapper>
            <Sidebar />
            <Content />
        </Wrapper>
    );
};

export default Documentation;
