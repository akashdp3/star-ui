import React from 'react';

import Header from '../../components/Header';

const HomePage = () => {
    const [theme, setTheme] = React.useState('dark');

    const toggleTheme = () => {
        let newTheme = 'light';
        if (theme === 'light') {
            newTheme = 'dark';
        }
        setTheme(newTheme);
    };

    return (
        <div>
            <Header theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
};

export default HomePage;
