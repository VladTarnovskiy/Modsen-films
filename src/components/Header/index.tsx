import { FC } from 'react';
import * as S from './styled';
import Logo from 'assets/Logo.svg';
import { SearchBar } from '../SearchBar';
import { ThemeSwitch } from '../ThemeSwitch';
import { Filters } from '../Filters';

export const Header: FC = () => {
  return (
    <>
      <S.StyledHeader>
        <S.LogoContainer>
          <S.LogoImg src={Logo}></S.LogoImg>
          <S.LogoTitle>ModsenFilms</S.LogoTitle>
        </S.LogoContainer>
        <SearchBar />
        <ThemeSwitch />
      </S.StyledHeader>
      <Filters />
    </>
  );
};
