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

// export const Switch = styled.div`
//   position: relative;
//   border-radius: 9999px;
//   height: 25px;
//   width: 25px;
//   background-color: ${({ theme }) => theme.colors.secondary};
//   ${itemsCenter}
// `;

// export const SwitchImg = styled.img`
//   height: 24px;
//   width: 24px;
//   margin-left: -2px;
// `;
