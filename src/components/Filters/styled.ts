import {
  borderBase,
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from '@src/styles/fragments';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  padding: 12px 6px;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 28px;
  ${borderBase};
  border-left: none;
  border-right: none;
  ${itemsCenter};

  @media ${({ theme }) => theme.media.s} {
    border: none;
  }
`;

export const FilterButton = styled.button<{ $isActive: boolean }>`
  color: ${({ theme }) => theme.colors.base};
  border-radius: 9999px;
  height: 30px;
  min-width: 90px;
  padding: 7px 12px;
  margin-right: 10px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.bgSecondary : theme.colors.bgPrimary};
  ${borderBase}
  ${itemsCenter}

  &:hover {
    ${buttonAnimation}
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    color: ${({ theme }) => theme.colors.tertiary};
    border: none;
  }

  &:active {
    ${defaultAnimationSize}
  }
`;
