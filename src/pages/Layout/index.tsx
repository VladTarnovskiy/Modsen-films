import { Footer } from '@src/components/Footer';
import { Header } from '@src/components/Header';
import { useGetSearchInfoQuery } from '@src/store/slices/ApiSlice';
import {
  changeTheme,
  selectFilmsFilter,
  selectSearchValue,
  selectTriggeredNextPageToken,
  setIsError,
  setIsLoading,
  setNextPageToken,
  setVideos,
} from '@src/store/slices/MainPageSlice';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import * as S from './styled';

export const Layout: FC = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const filterValue = useSelector(selectFilmsFilter);
  const nextPageToken = useSelector(selectTriggeredNextPageToken);

  const {
    data: videosInfo,
    isSuccess,
    isFetching,
    isError,
  } = useGetSearchInfoQuery({
    searchValue: searchValue,
    pageToken: nextPageToken,
    filterValue,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setVideos(videosInfo.items));
      dispatch(setNextPageToken(videosInfo.nextPageToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videosInfo]);

  useEffect(() => {
    dispatch(setIsLoading(isFetching));
    dispatch(setIsError(isError));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, isError]);

  useEffect(() => {
    const theme = localStorage.getItem('isLightTheme');
    if (theme) {
      dispatch(changeTheme(Boolean(JSON.parse(theme))));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
      <Footer />
    </>
  );
};
