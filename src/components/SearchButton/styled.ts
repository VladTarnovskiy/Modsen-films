import {
  borderBase,
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from '@src/styles/fragments';
import { styled } from 'styled-components';

export const SearchButton = styled.button`
  width: 57px;
  height: 38px;

  ${borderBase}
  ${itemsCenter}

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgSecondary};

    ${buttonAnimation}
  }

  &:active {
    ${defaultAnimationSize}
  }
`;

export const SubmitButtonIcon = styled.img`
  width: 17px;
  height: 16px;
`;
