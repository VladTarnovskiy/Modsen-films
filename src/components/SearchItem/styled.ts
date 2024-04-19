import { itemsCenter } from '@src/styles/fragments';
import { styled } from 'styled-components';

export const SearchItem = styled.div`
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.small};
  width: 100%;
  height: 30px;
  padding: 0 4px;
  overflow: hidden;
  white-space: nowrap;

  ${itemsCenter}

  justify-content: flex-start;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }

  &:last-child {
    border: none;
  }
`;
