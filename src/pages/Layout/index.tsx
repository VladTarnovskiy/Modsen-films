import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import * as S from './styled';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
      <Footer />
    </>
  );
};
