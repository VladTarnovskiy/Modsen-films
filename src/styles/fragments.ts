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
    background-color: rgb(194, 207, 214);
  }
  100% {
    background-color: rgb(240, 243, 245);
  }
`;

export const SkeletonBackgroundAnimation = css`
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
