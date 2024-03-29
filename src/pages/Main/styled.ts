import {
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from '@src/styles/fragments';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
  justify-items: center;
  gap: 20px;
  margin-bottom: 37px;

  @media ${({ theme }) => theme.media.s} {
    grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
  }
`;

export const ShowMoreBut = styled.button<{ $isFetching: boolean }>`
  width: 192px;
  height: 52px;
  padding: 14px 35px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 22px;
  border-radius: 5px;
  margin: auto;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: none;
  opacity: ${({ $isFetching }) => ($isFetching ? 0.5 : 1)};

  ${itemsCenter};

  @media ${({ theme }) => theme.media.s} {
    width: 206px;
    height: 33px;
    font-size: ${({ theme }) => theme.fontSize.base};
  }

  &:hover {
    ${({ $isFetching }) => (!$isFetching ? buttonAnimation : null)}
  }

  &:active {
    ${({ $isFetching }) => (!$isFetching ? defaultAnimationSize : null)}
  }
`;

export const InfoContainer = styled.div`
  margin-top: 200px;
`;
