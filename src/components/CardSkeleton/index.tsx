import { FC } from 'react';

import * as S from './styled';

export const CardSkeleton: FC = () => {
  return (
    <S.Container data-testid="card-skeleton">
      <S.Img />
      <S.CreationDate />
      <S.Description>
        <S.UserIcon />
        <S.VideoInfo>
          <S.ChanelTitle />
          <S.FilmTitle />
        </S.VideoInfo>
      </S.Description>
    </S.Container>
  );
};
