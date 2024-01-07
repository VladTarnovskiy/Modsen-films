import {
  borderBase,
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from 'src/styles/fragments';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  margin: 0 5px;
  ${itemsCenter}
`;

export const SearchBar = styled.input`
  max-width: 570px;
  width: 100%;
  height: 38px;
  padding: 5px 15px;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.base};
  ${borderBase}

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.base};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.quaternary};
  }
`;

export const SubmitButton = styled.button`
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
