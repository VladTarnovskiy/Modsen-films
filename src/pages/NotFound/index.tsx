import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './styled';

export const NotFoundPage: FC = () => {
  return (
    <S.ErrorWrapper>
      <S.ErrorCode>404</S.ErrorCode>
      <S.ErrorDescription>
        The page you are looking for not found!
      </S.ErrorDescription>
      <S.ErrorAnimation />
      <NavLink to="/">
        <S.MainPageBut data-testid="main-page-btn">Main Page</S.MainPageBut>
      </NavLink>
    </S.ErrorWrapper>
  );
};
