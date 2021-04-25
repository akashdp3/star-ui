import React from 'react';
import Styled from 'styled-components';

import Sidebar from './Sidebar';
import Content from './Content';

const Wrapper = Styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const AppContainer = (props) => {
    const { children } = props;

    return (
        <div>
            <div className="h-14 border-b-2 border-bottom border-gray-300">
                Star-ui
            </div>
            <Wrapper>
                <Sidebar />
                <Content>{children}</Content>
            </Wrapper>
        </div>
    );
};

export default AppContainer;
