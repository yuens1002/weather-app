import { createGlobalStyle } from 'styled-components';
import css from '@styled-system/css';

export const GlobalStyles = createGlobalStyle(
  css({
    '*': {
      boxSizing: 'border-box',
    },
    ':root': {
      color: 'gray800',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontFamily: 'normal',
      fontSize: [0],
    },
    body: {
      margin: 0,
      padding: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'heading',
      fontWeight: 'normal',
    },
    h1: {
      fontSize: [3, 4, 5],
    },
    h2: {
      fontSize: [2, 3, 4],
    },
    h3: {
      fontSize: [1, 2, 3],
    },
  })
);
