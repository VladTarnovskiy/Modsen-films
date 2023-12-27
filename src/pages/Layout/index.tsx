import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
