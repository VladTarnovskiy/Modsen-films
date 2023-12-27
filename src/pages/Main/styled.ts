import { buttonAnimation, itemsCenter } from 'src/styles/fragments';
import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 28px 6px;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
  justify-items: center;
  gap: 20px;
  margin-bottom: 37px;
`;

export const ShowMoreBut = styled.button`
  width: 192px;
  height: 52px;
  padding: 14px 35px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 22px;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  ${itemsCenter}

  &:hover {
    ${buttonAnimation}
  }

  &:active {
    transform: scale(1);
  }
`;
