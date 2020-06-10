import styled from 'styled-components';
import css from '@styled-system/css';

const Box = styled('div')(
  css({
    maxWidth: 'mm',
    width: '80%',
    padding: [1, 3, 6],
  })
);

export default Box;
