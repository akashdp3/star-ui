import React from 'react';
import Styled from 'styled-components';

import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Content from './Content';

const Wrapper = Styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const AppContainer = (props) => {
    const { children, ...others } = props;

    return (
        <div>
            <NavBar {...others} />
            <Wrapper className="max-w-7xl mx-auto mt-2 px-2 sm:px-6 lg:px-8">
                <Sidebar />
                <Content>{children}</Content>
            </Wrapper>
        </div>
    );
};

export default AppContainer;
