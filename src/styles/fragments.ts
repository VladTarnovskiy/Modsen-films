import { css, keyframes } from 'styled-components';

export const itemsCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const buttonAnimation = css`
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.1s ease-out;
`;

export const defaultAnimationSize = css`
  transform: scale(1);
`;

export const borderBase = css`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
`;

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const SkeletonBackgroundAnimation = css`
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
