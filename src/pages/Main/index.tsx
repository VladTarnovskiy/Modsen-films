import { FC, useEffect, useState } from 'react';
import * as S from './styled';
import { Card } from 'src/components/Card';
import { useGetSearchInfoQuery } from 'src/store/slices/ApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNextPageToken,
  selectSearchValue,
  selectVideos,
  setNextPageToken,
  setVideos,
} from 'src/store/slices/MainPageSlice';
import { Loader } from 'src/components/Loader';
import { Filters } from 'src/components/Filters';

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const nextPageToken = useSelector(selectNextPageToken);
  const [currentPageToken, setCurrentPageToken] = useState<string | null>(null);

  const videos = useSelector(selectVideos);

  const {
    data: videosInfo,
    isSuccess,
    // isError,
    isFetching,
  } = useGetSearchInfoQuery({
    searchValue: searchValue,
    pageToken: currentPageToken,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setVideos(videosInfo.items));
      if (videosInfo.nextPageToken) {
        dispatch(setNextPageToken(videosInfo.nextPageToken));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videosInfo]);

  const getNextPageVideosData = () => {
    if (!isFetching) {
      setCurrentPageToken(nextPageToken);
    }
  };

  let content: JSX.Element | JSX.Element[];

  if (isSuccess) {
    if (videos.length >= 1) {
      console.log(videos);
      content = videos.map((video) => (
        <Card key={video.keyID} videoData={video} />
      ));
    } else {
      content = <div>Nothing found.</div>;
    }
  } else if (isFetching) {
    content = (
      <S.LoaderContainer>
        <Loader />
      </S.LoaderContainer>
    );
  } else {
    content = (
      <S.LoaderContainer>Sorry, something went wrong.</S.LoaderContainer>
    );
  }

  return (
    <div>
      {nextPageToken && <Filters />}
      <S.CardContainer>{content}</S.CardContainer>
      <S.ShowMoreBut $isFetching={isFetching} onClick={getNextPageVideosData}>
        Show More
      </S.ShowMoreBut>
    </div>
  );
};

// import { FC } from 'react';
// import * as S from './styled';
// import { useSelector } from 'react-redux';
// import {
//   selectIsError,
//   selectIsLoading,
//   selectVideosInfo,
// } from 'src/store/slices/MainPageSlice';
// import { Loader } from 'src/components/Loader';
// import { Filters } from 'src/components/Filters';
// import { Card } from 'src/components/Card';

// export const MainPage: FC = () => {
//   const videos = useSelector(selectVideosInfo);
//   const isLoading = useSelector(selectIsLoading);
//   const isError = useSelector(selectIsError);

//   let content: JSX.Element | JSX.Element[];

//   if (videos.length >= 1) {
//     // dispatch(setVideos(videosInfo.items));
//     // if (videos.length >= 1) {
//     content = videos.map((video) => <Card key={video.id} videoData={video} />);
//     // dispatch(setVideosInfo(videosInfo));
//     // } else {
//     //   content = <div>Nothing found.</div>;
//     // }
//   } else if (isError) {
//     content = (
//       <S.LoaderContainer>Sorry, something went wrong.</S.LoaderContainer>
//     );
//   } else if (isLoading) {
//     content = (
//       <S.LoaderContainer>
//         <Loader />
//       </S.LoaderContainer>
//     );
//   } else {
//     content = <div>Nothing found.</div>;
//   }

//   return (
//     <div>
//       <Filters />
//       <S.CardContainer>{content}</S.CardContainer>
//       <S.ShowMoreBut>Show More</S.ShowMoreBut>
//     </div>
//   );
// };
