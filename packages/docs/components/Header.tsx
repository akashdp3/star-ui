import React from 'react';

import NavBar from './NavBar';

interface IHeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: Function;
}

const Header = (props: IHeaderProps) => {
    return (
        <div>
            <NavBar {...props} />
        </div>
    );
};

export default Header;
