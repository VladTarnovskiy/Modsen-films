import { itemsCenter } from 'src/styles/fragments';
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
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: 5px 15px;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  width: 57px;
  height: 38px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  ${itemsCenter}

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(1);
  }
`;

export const SubmitButtonIcon = styled.img`
  width: 17px;
  height: 16px;
`;
