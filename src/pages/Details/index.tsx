import LikedIcon from '@assets/Liked.svg';
import ViewsIcon from '@assets/Views.svg';
import { DetailsSkeleton } from '@src/components/DetailsSkeleton';
import { useGetVideoDataQuery } from '@src/store/slices/ApiSlice';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './styled';

export const DetailsPage: FC = () => {
  const { detailsId } = useParams();
  const {
    data: videoData,
    isSuccess,
    isError,
  } = useGetVideoDataQuery({
    videoID: detailsId!,
  });

  let content: JSX.Element | JSX.Element[];

  if (isSuccess) {
    content = (
      <div data-testid="details-page">
        <S.VideoPlayer
          src={videoData.player}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        />
        <S.FilmTitle>{videoData.title}</S.FilmTitle>
        <S.ChanelInfo>
          <S.UserIcon $bg={videoData.defaultImg} />
          <S.ChanelTitle>{videoData.channelTitle}</S.ChanelTitle>
        </S.ChanelInfo>
        <S.VideoStatistic>
          <S.VideoStatisticItem>
            <S.VideoStatisticIcon src={ViewsIcon} />
            <S.VideoStatisticInfo>{videoData.viewCount}</S.VideoStatisticInfo>
          </S.VideoStatisticItem>
          <S.VideoStatisticItem>
            <S.VideoStatisticIcon src={LikedIcon} />
            <S.VideoStatisticInfo>{videoData.likeCount}</S.VideoStatisticInfo>
          </S.VideoStatisticItem>
        </S.VideoStatistic>
        <S.VideoPublishedDate>{videoData.publishedAt}</S.VideoPublishedDate>
        <S.VideoDescription>{videoData.description}</S.VideoDescription>
      </div>
    );
  } else if (isError) {
    content = <S.InfoContainer>Sorry, something went wrong.</S.InfoContainer>;
  } else {
    content = <DetailsSkeleton />;
  }

  return <S.Container>{content} </S.Container>;
};
