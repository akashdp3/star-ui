import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/themes/default';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
