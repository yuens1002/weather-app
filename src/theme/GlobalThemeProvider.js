import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';

export const GlobalThemeProvider = ({ theme = defaultTheme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
