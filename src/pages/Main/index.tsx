import { FC } from 'react';
import * as S from './styled';
import { Card } from 'src/components/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsLoading,
  selectIsSuccess,
  selectNextPageToken,
  selectVideos,
  setIsLoading,
  setTriggeredNextPageToken,
} from 'src/store/slices/MainPageSlice';
import { Filters } from 'src/components/Filters';
import { CardSkeleton } from 'src/components/CardSkeleton';

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const nextPageToken = useSelector(selectNextPageToken);
  const isLoading = useSelector(selectIsLoading);
  const isSuccess = useSelector(selectIsSuccess);
  const isError = useSelector(selectIsError);
  const videos = useSelector(selectVideos);

  const getNextPageVideosData = () => {
    if (!isLoading) {
      dispatch(setTriggeredNextPageToken(nextPageToken));
      dispatch(setIsLoading(true));
    }
  };

  let content: JSX.Element | JSX.Element[];
  if (isError) {
    content = <S.InfoContainer>Sorry, something went wrong.</S.InfoContainer>;
  } else if (isLoading) {
    content = [...Array(6)].map((item, index) => <CardSkeleton key={index} />);
  } else if (isSuccess) {
    if (videos.length >= 1) {
      console.log(videos);
      content = videos.map((video) => (
        <Card key={video.keyID} videoData={video} />
      ));
    } else {
      content = <div>Nothing found.</div>;
    }
  } else {
    content = <S.InfoContainer>Sorry, something went wrong.</S.InfoContainer>;
  }

  return (
    <div>
      <Filters />
      <S.CardContainer>{content}</S.CardContainer>
      {nextPageToken ? (
        <S.ShowMoreBut $isFetching={isLoading} onClick={getNextPageVideosData}>
          Show More
        </S.ShowMoreBut>
      ) : (
        <S.ShowMoreBut $isFetching={true}>Show More</S.ShowMoreBut>
      )}
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
