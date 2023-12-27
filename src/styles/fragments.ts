import { css } from 'styled-components';

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

export const borderBase = css`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
`;
