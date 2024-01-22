import { styled } from 'styled-components';

export const LocalLink = styled.a`
  display: block;
  margin-right: 8px;
  width: fit-content;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
