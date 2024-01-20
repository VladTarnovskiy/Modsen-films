import {
  borderBase,
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from '@src/styles/fragments';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  ${itemsCenter}
  padding: 0 20px;

  @media ${({ theme }) => theme.media.s} {
    padding: 0 5px;
  }
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

export const SearcherContainer = styled.div`
  position: relative;
  max-width: 570px;
  width: 100%;
`;

export const ElasticSearch = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  transform: translateY(100%);
  width: 100%;
  min-height: 40px;
  background-color: ${({ theme }) => theme.colors.bgBase};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;

  ${borderBase}

  border-top: none;
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
