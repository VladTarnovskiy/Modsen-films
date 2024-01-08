import {
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from 'src/styles/fragments';
import { styled } from 'styled-components';

export const ErrorContainer = styled.div`
  margin: auto;
  ${itemsCenter}
  width: fit-content;
  flex-direction: column;

  @media ${({ theme }) => theme.media.s} {
    padding: 0 5px;
  }
`;

export const ErrorImg = styled.img`
  width: 230px;
  height: 230px;
  margin-top: 180px;
  margin-left: 25px;

  @media ${({ theme }) => theme.media.s} {
    margin-top: 80px;
    width: 180px;
    height: 180px;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 22px;
`;

export const GoBackBut = styled.button`
  width: 192px;
  height: 52px;
  padding: 14px 35px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 22px;
  border-radius: 5px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: none;
  ${itemsCenter};

  @media ${({ theme }) => theme.media.s} {
    width: 206px;
    height: 33px;
    font-size: ${({ theme }) => theme.fontSize.base};
  }

  &:hover {
    ${buttonAnimation}
  }

  &:active {
    ${defaultAnimationSize}
  }
`;
