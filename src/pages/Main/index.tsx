import { FC, useEffect } from 'react';
import * as S from './styled';
import { Card } from 'src/components/Card';
import { useGetSearchInfoQuery } from 'src/store/slices/ApiSlice';
import { useSelector } from 'react-redux';
import { selectSearchValue } from 'src/store/slices/MainPageSlice';
import { Loader } from 'src/components/Loader';

export const MainPage: FC = () => {
  const searchValue = useSelector(selectSearchValue);

  const {
    data: videosInfo,
    isSuccess,
    isError,
  } = useGetSearchInfoQuery({
    searchValue: searchValue,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(videosInfo);
    }
  }, [isSuccess, videosInfo]);

  let content: JSX.Element | JSX.Element[];

  if (isSuccess) {
    if (videosInfo.items.length >= 1) {
      content = videosInfo.items.map((video) => (
        <Card key={video.id} videoInfo={video} />
      ));
    } else {
      content = <div>Nothing found.</div>;
    }
  } else if (isError) {
    content = <S.LoaderContainer>Nothing Found.</S.LoaderContainer>;
  } else {
    console.log('loader');
    content = (
      <S.LoaderContainer>
        <Loader />
      </S.LoaderContainer>
    );
  }

  return (
    <S.MainContainer>
      <S.CardContainer>{content}</S.CardContainer>
      <S.ShowMoreBut>Show More</S.ShowMoreBut>
    </S.MainContainer>
  );
};
