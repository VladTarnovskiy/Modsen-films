import LikedIcon from '@assets/Liked.svg';
import ViewsIcon from '@assets/Views.svg';
import { DetailsSkeleton } from '@src/components/DetailsSkeleton';
import { useGetVideoDataQuery } from '@src/store/slices/ApiSlice';
import { getDate } from '@src/utils/getDate';
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
    const { snippet, statistics, player } = videoData;
    const playerLink = `https:${player.embedHtml.split('"')[5]}?autoplay=1`;
    const localDate = getDate(snippet.publishedAt);

    content = (
      <div data-testid="details-page">
        <S.VideoPlayer
          src={playerLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        />
        <S.FilmTitle>{snippet.title}</S.FilmTitle>
        <S.ChanelInfo>
          <S.UserIcon $bg={snippet.thumbnails.default.url} />
          <S.ChanelTitle>{snippet.channelTitle}</S.ChanelTitle>
        </S.ChanelInfo>
        <S.VideoStatistic>
          <S.VideoStatisticItem>
            <S.VideoStatisticIcon src={ViewsIcon} />
            <S.VideoStatisticInfo>{statistics.viewCount}</S.VideoStatisticInfo>
          </S.VideoStatisticItem>
          <S.VideoStatisticItem>
            <S.VideoStatisticIcon src={LikedIcon} />
            <S.VideoStatisticInfo>{statistics.likeCount}</S.VideoStatisticInfo>
          </S.VideoStatisticItem>
        </S.VideoStatistic>
        <S.VideoPublishedDate>{localDate}</S.VideoPublishedDate>
        <S.VideoDescription>{snippet.description}</S.VideoDescription>
      </div>
    );
  } else if (isError) {
    content = <S.InfoContainer>Sorry, something went wrong.</S.InfoContainer>;
  } else {
    content = <DetailsSkeleton />;
  }

  return <S.DetailsContainer>{content} </S.DetailsContainer>;
};
