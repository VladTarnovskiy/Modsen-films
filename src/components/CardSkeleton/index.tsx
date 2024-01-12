import { FC } from 'react';
import * as S from './styled';

export const CardSkeleton: FC = () => {
  return (
    <S.SkeletonCardContainer data-testid="card-skeleton">
      <S.SkeletonCardImg />
      <S.SkeletonCardDescription>
        <S.SkeletonUserIcon />
        <S.SkeletonVideoInfo>
          <S.SkeletonChanelTitle />
          <S.SkeletonFilmTitle />
        </S.SkeletonVideoInfo>
      </S.SkeletonCardDescription>
    </S.SkeletonCardContainer>
  );
};
