import styled from 'styled-components';
import { color, typography } from 'styled-system';
import css from '@styled-system/css';

const H1 = styled('h1')(
  css({
    fontFamily: 'heading',
    fontSize: [3, 4, 5],
    fontWeight: 'normal',
  }),
  typography,
  color
);

export default H1;
