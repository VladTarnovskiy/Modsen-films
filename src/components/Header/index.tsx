import Logo from '@assets/Logo.svg';
import { PathnameCheck } from '@src/utils/HOC/pathNameCheck';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { BurgerMenu } from '../BurgerMenu';
import { SearchBar } from '../SearchBar';
import { ThemeSwitch } from '../ThemeSwitch';
import * as S from './styled';

export const Header: FC = () => {
  return (
    <>
      <S.StyledHeader>
        <NavLink to="/">
          <S.LogoContainer data-testid="logo">
            <S.LogoImg src={Logo}></S.LogoImg>
            <S.LogoTitle>ModsenFilms</S.LogoTitle>
          </S.LogoContainer>
        </NavLink>
        <PathnameCheck>
          <S.SearchBarDesktopContainer>
            <SearchBar />
          </S.SearchBarDesktopContainer>
        </PathnameCheck>
        <S.SwitchContainer>
          <ThemeSwitch />
        </S.SwitchContainer>
        <BurgerMenu />
      </S.StyledHeader>
      <PathnameCheck>
        <S.SearchBarMobileContainer>
          <SearchBar />
        </S.SearchBarMobileContainer>
      </PathnameCheck>
    </>
  );
};
