function fontStack(fonts) {
  return fonts
    .map((font) => (font.includes(' ') ? `"${font}"` : font))
    .join(', ');
}

export const theme = {
  fontSizes: [
    '1rem',
    '1.414rem',
    '1.999rem',
    '2.827rem',
    '3.998rem',
    '5.653rem',
  ],
  fonts: {
    normal: fontStack([
      'Raleway',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
    ]),
    heading: fontStack(['Sacramento', 'cursive']),
  },
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
  },
  colors: {
    gray100: 'hsl(210, 10%, 99%)',
    gray200: 'hsl(210, 25%, 95%)',
    gray300: 'hsl(210, 15%, 90%)',
    gray400: 'hsl(210, 10%, 85%)',
    gray500: 'hsl(210, 10%, 75%)',
    gray600: 'hsl(210, 8%, 62%)',
    gray700: 'hsl(210, 7%, 43%)',
    gray800: 'hsl(210, 7%, 17%)',
    gray900: 'hsl(210, 5%, 9%)',
    error: '#e7040f',
    primary: '#d5008f',
    'light-pink': '#ffa3d7',
  },
  sizes: [
    '10rem',
    '14.14rem',
    '19.99rem',
    '28.27rem',
    '39.98rem',
    '56.53rem',
    '79.93rem',
  ],
  space: [
    '0',
    '4px',
    '8px',
    '12px',
    '16px',
    '20px',
    '24px',
    '28px',
    '32px',
    '64px',
  ],
  radii: ['0', '4px', '6px', '8px', '10px'],
};

theme.fontSizes['body'] = '1rem';
theme.fontSizes['display1'] = theme.fontSizes[6];
theme.fontSizes['display2'] = theme.fontSizes[5];
theme.fontSizes['display3'] = theme.fontSizes[4];
theme.sizes['sm'] = theme.sizes[1];
theme.sizes['mm'] = theme.sizes[3];
theme.sizes['lg'] = theme.sizes[5];
theme.colors['text'] = theme.colors.gray900;
