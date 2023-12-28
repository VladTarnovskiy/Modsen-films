import { FC } from 'react';
import * as S from './styled';

export const Loader: FC = () => {
  return (
    <S.LoaderContainer>
      <S.Ring className="first"></S.Ring>
      <S.Ring className="second"></S.Ring>
      <S.Ring className="third"></S.Ring>
      <S.Ring className="ring"></S.Ring>
    </S.LoaderContainer>
  );
};
