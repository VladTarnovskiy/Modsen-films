import { buttonAnimation, itemsCenter } from 'src/styles/fragments';
import styled from 'styled-components';

export const BurgerMenuContainer = styled.div`
  position: relative;
  display: none;
  height: 26px;
  top: -16px;
  margin-left: 10px;

  @media ${({ theme }) => theme.media.s} {
    display: block;
  }
`;

export const MenuToggle = styled.input`
  opacity: 0;
  z-index: 3;

  &:checked ~ .menu__btn > span {
    position: fixed;
    top: 36px;
    right: 5px;
  }

  &:checked ~ .menu__btn > span {
    transform: rotate(45deg);
  }
  &:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
    display: none;
  }
  &:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  &:checked ~ .menu__box {
    visibility: visible;
    right: 0;
  }
`;

export const MenuLine = styled.span`
  max-width: 26px;
`;

export const MenuButton = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 3;

  & > span,
  & > span::before,
  & > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.quaternary};

    ${buttonAnimation}
  }
  & > span::before {
    content: '';
    top: -8px;
  }
  & > span::after {
    content: '';
    top: 8px;
  }
`;

export const MenuBox = styled.ul`
  display: block;
  position: fixed;
  visibility: hidden;
  z-index: 2;
  top: 0;
  right: -100%;
  max-width: 300px;
  min-width: 220px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bgBase};
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  ${buttonAnimation}
`;

export const MenuItem = styled.li`
  ${itemsCenter}
  padding: 12px;
  color: ${({ theme }) => theme.colors.base};
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }
`;

export const MenuItemTitle = styled.div`
  margin-right: 15px;
`;

export const MenuItemDescription = styled.div`
  display: flex;
`;
