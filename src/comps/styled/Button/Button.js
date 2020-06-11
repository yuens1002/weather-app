import React from 'react';
import styled from 'styled-components';
import { color, space, compose } from 'styled-system';
import css from '@styled-system/css';

const SBtn = styled('button')(
  css({
    fontFamily: 'normal',
    fontWeight: 'bold',
    px: 4,
    py: 4,
    border: 'none',
    ':hover, :focus': {
      bg: 'light-pink',
      cursor: 'pointer',
      color: 'gray900',
    },
    bg: ({ bg }) => bg || 'primary',
    color: ({ color }) => color || 'white',
    boxShadow: 'none',
    borderRadius: 0,
  }),
  compose(color, space)
);

export default (props) => (
  <SBtn
    {...props}
    onClick={props.btnHandler}
    onKeyDown={(e) => {
      e.key === 13 && props.btnHandler();
    }}>
    {props.children}
  </SBtn>
);
