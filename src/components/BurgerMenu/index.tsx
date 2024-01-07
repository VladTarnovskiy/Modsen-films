import { FC } from 'react';
import * as S from './styled';
import { ThemeSwitch } from '../ThemeSwitch';

export const BurgerMenu: FC = () => {
  return (
    <S.BurgerMenuContainer>
      <S.MenuToggle id="menu__toggle" type="checkbox" />
      <S.MenuButton className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </S.MenuButton>
      <S.MenuBox className="menu__box">
        <S.MenuItem>
          <S.MenuItemTitle>Theme:</S.MenuItemTitle>
          <S.MenuItemDescription>
            <ThemeSwitch />
          </S.MenuItemDescription>
        </S.MenuItem>
      </S.MenuBox>
    </S.BurgerMenuContainer>
  );
};
