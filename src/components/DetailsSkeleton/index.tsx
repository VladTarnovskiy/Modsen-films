import { FC } from 'react';

import * as S from './styled';

export const DetailsSkeleton: FC = () => {
  return (
    <div data-testid="details-skeleton">
      <S.VideoPlayer />
      <S.FilmTitle />
      <S.ChanelInfo>
        <S.UserIcon />
        <S.ChanelTitle />
      </S.ChanelInfo>
      <S.VideoStatistic />
      <S.VideoDescription />
    </div>
  );
};
