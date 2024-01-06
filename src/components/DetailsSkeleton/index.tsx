import { FC } from 'react';
import * as S from './styled';

export const DetailsSkeleton: FC = () => {
  return (
    <>
      <S.SkeletonVideoPlayer />
      <S.SkeletonFilmTitle />
      <S.SkeletonChanelInfo>
        <S.SkeletonUserIcon />
        <S.SkeletonChanelTitle />
      </S.SkeletonChanelInfo>
      <S.SkeletonVideoStatistic />
      <S.SkeletonVideoDescription />
    </>
  );
};
