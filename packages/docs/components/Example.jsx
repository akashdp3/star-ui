import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, Alert } from 'react-star-ui';

const Example = ({ children }) => {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default Example;
