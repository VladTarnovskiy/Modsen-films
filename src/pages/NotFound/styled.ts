import {
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from '@src/styles/fragments';
import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  text-align: center;
`;
export const Code = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.base};
  font-size: 4rem;
  margin-bottom: 10px;
  line-height: 60px;

  @media ${({ theme }) => theme.media.s} {
    line-height: 45px;
    font-size: 3rem;
  }
`;

export const Description = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.light};
  font-size: 3rem;
  line-height: 60px;
  margin-bottom: 10px;

  @media ${({ theme }) => theme.media.s} {
    line-height: 45px;
    font-size: 2rem;
  }
`;

export const Animation = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  background-repeat: no-repeat;
  height: 600px;
  background-position: center;
  background-size: contain;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.media.m} {
    height: 400px;
  }

  @media ${({ theme }) => theme.media.s} {
    height: 200px;
  }
`;

export const Button = styled.button`
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
