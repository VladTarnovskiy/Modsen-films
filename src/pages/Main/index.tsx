import { FC, useEffect } from 'react';
import * as S from './styled';
import { Card } from 'src/components/Card';
import {
  useGetSearchInfoQuery,
  useGetVideosInfoQuery,
} from 'src/store/slices/ApiSlice';

export const MainPage: FC = () => {
  const { data: charactersInfo, isSuccess } = useGetSearchInfoQuery({
    searchValue: 'drama',
  });
  const { data: videosInfo, isSuccess: videoSucces } = useGetVideosInfoQuery({
    ids: charactersInfo?.ids,
  });

  useEffect(() => {
    if (isSuccess && videoSucces) {
      console.log(charactersInfo);
      console.log(videosInfo);
    }
  });

  return (
    <S.MainContainer>
      <S.CardContainer>
        <Card />
      </S.CardContainer>
      <S.ShowMoreBut>Show More</S.ShowMoreBut>
    </S.MainContainer>
  );
};
