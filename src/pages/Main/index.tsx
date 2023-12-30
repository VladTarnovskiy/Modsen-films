import { FC } from 'react';
import * as S from './styled';
import { Card } from 'src/components/Card';
import { useGetSearchInfoQuery } from 'src/store/slices/ApiSlice';
import { useSelector } from 'react-redux';
import {
  selectSearchValue,
  // setVideosInfo,
} from 'src/store/slices/MainPageSlice';
import { Loader } from 'src/components/Loader';
import { Filters } from 'src/components/Filters';

export const MainPage: FC = () => {
  // const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  const {
    data: videosInfo,
    isSuccess,
    isError,
  } = useGetSearchInfoQuery({
    searchValue: searchValue,
  });

  let content: JSX.Element | JSX.Element[];

  if (isSuccess) {
    if (videosInfo.items.length >= 1) {
      content = videosInfo.items.map((video) => (
        <Card key={video.id} videoData={video} />
      ));
      // dispatch(setVideosInfo(videosInfo));
    } else {
      content = <div>Nothing found.</div>;
    }
  } else if (isError) {
    content = (
      <S.LoaderContainer>Sorry, something went wrong.</S.LoaderContainer>
    );
  } else {
    content = (
      <S.LoaderContainer>
        <Loader />
      </S.LoaderContainer>
    );
  }

  return (
    <div>
      <Filters />
      <S.CardContainer>{content}</S.CardContainer>
      <S.ShowMoreBut>Show More</S.ShowMoreBut>
    </div>
  );
};
