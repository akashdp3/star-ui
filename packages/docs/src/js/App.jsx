import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'react-star-ui';

import PageLoader from './components/PageLoader';
import Routes from './routes/Routes';
import { withAppConsumer } from './context/app.context';
import { useThemeDetector } from './utilities/utilities';

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

const getBackgroundColorForTheme = (theme) => {
    if (theme === THEMES.DARK) {
        return {
            backgroundColor: 'rgb(31, 41, 55)',
            color: '#fff'
        };
    }

    return {
        backgroundColor: '#fff',
        color: '#000'
    };
};

const Wrapper = Styled.div`
    background-color: ${({ theme }) =>
        getBackgroundColorForTheme(theme).backgroundColor};
    color: ${({ theme }) => getBackgroundColorForTheme(theme).color};
`;

const App = (props) => {
    const {
        appContext: { state }
    } = props;

    const [theme, setTheme] = React.useState(useThemeDetector());

    const selectedTheme = theme === THEMES.LIGHT ? lightTheme : darkTheme;
    const handleChangeTheme = (event) => {
        event && event.preventDefault && event.preventDefault();

        const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        setTheme(newTheme);
    };

    return (
        <ThemeProvider theme={selectedTheme}>
            <Wrapper className={theme} theme={theme}>
                <PageLoader isLoading={state.showPageLoader} />
                <Routes theme={theme} handleChangeTheme={handleChangeTheme} />
            </Wrapper>
        </ThemeProvider>
    );
};

export default withAppConsumer(App);
