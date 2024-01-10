import { FC } from 'react';
import * as S from './styled';
import Logo from 'assets/Logo.svg';
import { SearchBar } from '../SearchBar';
import { ThemeSwitch } from '../ThemeSwitch';
import { NavLink, useLocation } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu';

export const Header: FC = () => {
  const location = useLocation();

  return (
    <>
      <S.StyledHeader>
        <NavLink to="/">
          <S.LogoContainer>
            <S.LogoImg src={Logo}></S.LogoImg>
            <S.LogoTitle>ModsenFilms</S.LogoTitle>
          </S.LogoContainer>
        </NavLink>
        {location.pathname === '/' && (
          <S.SearchBarDesktopContainer>
            <SearchBar />
          </S.SearchBarDesktopContainer>
        )}
        <S.SwitchContainer>
          <ThemeSwitch />
        </S.SwitchContainer>
        <BurgerMenu />
      </S.StyledHeader>
      {location.pathname === '/' && (
        <S.SearchBarMobileContainer>
          <SearchBar />
        </S.SearchBarMobileContainer>
      )}
    </>
  );
};
