import {
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from '@src/styles/fragments';
import { styled } from 'styled-components';

export const Container = styled.a`
  display: block;
  ${itemsCenter}
`;

export const SocialLink = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 27px;

  &.last {
    margin-right: 0;
  }

  &:hover {
    ${buttonAnimation}

    transform: scale(1.2);
  }

  &:active {
    ${defaultAnimationSize}
  }
`;
