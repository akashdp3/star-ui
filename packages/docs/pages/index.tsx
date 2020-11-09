import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from '../pages/home/Home.page';

const theme = {
    colors: {
        primary: {
            lighter: 'rgb(219, 235, 255)',
            light: 'rgb(91, 160, 245)',
            base: 'rgb(56, 139, 242)',
            dark: 'rgb(33, 107, 196)',
            darker: 'rgb(17, 77, 150)'
        },
        secondary: {
            lighter: 'rgb(232, 232, 232)',
            light: 'rgb(202, 204, 207)',
            base: 'rgb(160, 164, 168)',
            dark: 'rgb(82, 87, 92)',
            darker: 'rgb(37, 40, 43)'
        },
        success: {
            lighter: 'rgb(225, 247, 232)',
            light: 'rgb(81, 194, 115)',
            base: 'rgb(49, 176, 87)',
            dark: 'rgb(28, 148, 64)',
            darker: 'rgb(15, 117, 46)'
        },
        danger: {
            lighter: 'rgb(252, 227, 228)',
            light: 'rgb(237, 100, 106)',
            base: 'rgb(229, 42, 52)',
            dark: 'rgb(207, 33, 42)',
            darker: 'rgb(161, 19, 26)'
        },
        warning: {
            lighter: 'rgb(255, 240, 209)',
            light: 'rgb(255, 192, 71)',
            base: 'rgb(251, 175, 24)',
            dark: 'rgb(227, 158, 20)',
            darker: 'rgb(201, 140, 16)'
        },
        white: {
            base: 'rgb(255, 255, 255)'
        },
        black: {
            base: 'rgb(37, 40, 43)'
        }
    },
    fontSizes: {
        0: 0,
        1: '10px',
        2: '12px',
        3: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '32px',
        8: '48px',
        9: '64px',
        10: '72px'
    }
};

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
};

export default HomePage;
