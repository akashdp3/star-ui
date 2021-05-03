import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'react-star-ui';

import PageLoader from './components/PageLoader';
import Routes from './routes/Routes';
import { withAppConsumer } from './context/app.context';

const App = (props) => {
    const {
        appContext: { state }
    } = props;

    return (
        <ThemeProvider theme={defaultTheme}>
            <PageLoader isLoading={state.showPageLoader} />
            <Routes />
        </ThemeProvider>
    );
};

export default withAppConsumer(App);
