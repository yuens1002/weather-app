import styled from "styled-components";

// giving any single-ton comps the same vertical in-btwn spacing
const GroupV = styled.div`
  > * {
    padding-bottom: 0.6rem;
  }
  padding: ${({ padding }) => (padding ? padding : "0.4rem 0 0")};
`;

export { GroupV };
