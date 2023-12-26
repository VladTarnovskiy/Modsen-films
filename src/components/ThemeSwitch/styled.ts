import { itemsCenter } from 'src/styles/fragments';
import styled from 'styled-components';

export const SwitchContainer = styled.div`
  border-radius: 9999px;
  height: 25px;
  min-width: 50px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
`;

export const Switch = styled.div`
  position: relative;
  border-radius: 9999px;
  height: 25px;
  width: 25px;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${itemsCenter}
`;

export const SwitchImg = styled.img`
  height: 24px;
  width: 24px;
  margin-left: -2px;
`;
