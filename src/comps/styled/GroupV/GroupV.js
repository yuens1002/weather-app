import styled from 'styled-components';

// giving any single-ton comps the same vertical in-btwn spacing
const GroupV = styled.div`
  > * {
    padding-bottom: ${({ theme: { space } }) => space[5]};
  }
  padding: ${({ padding, theme: { space } }) =>
    padding ? padding : `${space[1]} 0 0`};
`;

export { GroupV };
