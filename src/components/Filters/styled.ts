import { borderBase, buttonAnimation, itemsCenter } from 'src/styles/fragments';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  padding: 12px 6px;
  flex-wrap: wrap;
  gap: 6px;
  ${borderBase}
  ${itemsCenter}
`;

export const FilterButton = styled.button`
  border-radius: 9999px;
  height: 30px;
  min-width: 90px;
  padding: 7px 12px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  ${borderBase}
  ${itemsCenter}

  &:hover {
    ${buttonAnimation}
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  &:active {
    transform: scale(1);
  }
`;
