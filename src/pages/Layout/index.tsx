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
import { MyLocalStorage } from '@src/utils/localStorage';
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
    isFetching,
    isError,
  } = useGetSearchInfoQuery({
    searchValue: searchValue,
    pageToken: nextPageToken,
    filterValue,
  });

  useEffect(() => {
    if (videosInfo) {
      dispatch(setVideos(videosInfo.videos));
      dispatch(setNextPageToken(videosInfo.nextPageToken));
    }
  }, [dispatch, videosInfo]);

  useEffect(() => {
    dispatch(setIsLoading(isFetching));
    dispatch(setIsError(isError));
  }, [isFetching, isError, dispatch]);

  useEffect(() => {
    const theme = MyLocalStorage.getItem('isLightTheme');
    if (theme) {
      dispatch(changeTheme(theme === 'true' ? true : false));
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
      <Footer />
    </>
  );
};
