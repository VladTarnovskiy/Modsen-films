import { FC } from 'react';
import * as S from './styled';
import { NavLink } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  return (
    <S.ErrorWrapper>
      <S.ErrorCode>404</S.ErrorCode>
      <S.ErrorDescription>
        The page you are looking for not found!
      </S.ErrorDescription>
      <S.ErrorAnimation />
      <NavLink to="/">
        <S.MainPageBut>Main Page</S.MainPageBut>
      </NavLink>
    </S.ErrorWrapper>
  );
};
