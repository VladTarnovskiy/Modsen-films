import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './styled';

export const NotFoundPage: FC = () => {
  return (
    <S.Container>
      <S.Code>404</S.Code>
      <S.Description>The page you are looking for not found!</S.Description>
      <S.Animation />
      <NavLink to="/">
        <S.Button data-testid="main-page-btn">Main Page</S.Button>
      </NavLink>
    </S.Container>
  );
};
