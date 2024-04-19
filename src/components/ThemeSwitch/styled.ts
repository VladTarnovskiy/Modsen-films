import { itemsCenter } from '@src/styles/fragments';
import styled from 'styled-components';

export const Switch = styled.div`
  border-radius: 13px;
  height: 25px;
  width: 50px;
  padding: 0;
  box-shadow: 0px 1px 5px 0px ${({ theme }) => theme.colors.quaternary} inset;
`;

export const Thumb = styled.button<{ $isLightTheme: boolean }>`
  transition: all 0.1s ease-out;
  border-radius: 100%;
  margin-top: -2px;
  height: 28px;
  width: 28px;
  margin-left: ${({ $isLightTheme }) => ($isLightTheme ? 0 : '23px')};
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  ${itemsCenter}

  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  transition: all 0.2s ease-out;
  height: 24px;
  width: 24px;

  &:active {
    transform: rotate(180deg);
  }
`;
