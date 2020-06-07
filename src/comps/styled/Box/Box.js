import styled from 'styled-components';
import css from '@styled-system/css';
import { space, compose } from 'styled-system';

const Box = styled('div')(
  css({
    maxWidth: 'mm',
    width: '80%',
    height: '80%',
    bg: 'gray100',
    padding: [1, 3, 6],
    margin: 'auto auto',
  })
);

export default Box;
