import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 0;
  border: none;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  transition: border-bottom-color 0.5s ease;
  :focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.gray800};
  }
`;

export { StyledInput };
