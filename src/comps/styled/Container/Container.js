import styled from 'styled-components';
import {
  color,
  compose,
  space,
  layout,
  flexbox,
  typography,
} from 'styled-system';

const Container = styled('div')(
  { width: '100%' },
  compose(color, space, layout, flexbox, typography)
);

export default Container;
