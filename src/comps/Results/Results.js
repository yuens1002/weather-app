import React from 'react';
import styled from 'styled-components';

const StyledResults = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  margin: ${({ theme }) => theme.space[2]};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[1]};
`;

const Results = ({ results }) => {
  return Object.keys(results).map((k) => (
    <StyledResults key={k}>
      <h4>{k}</h4>
      {results[k]}
    </StyledResults>
  ));
};

export default Results;
