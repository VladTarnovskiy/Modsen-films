import { FC } from 'react';
import * as S from './styled';
import ViewsIcon from 'assets/Views.svg';
import LikedIcon from 'assets/Liked.svg';
import { useParams } from 'react-router-dom';
import { useGetVideoDataQuery } from 'src/store/slices/ApiSlice';
import { DetailsSkeleton } from 'src/components/DetailsSkeleton';

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
    const playerEl = player.embedHtml.split('"')[5];
    const date = new Date(snippet.publishedAt);
    const options = {
      weekday: undefined,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions;

    const localDate = date.toLocaleDateString('en-EN', options);
    content = (
      <>
        <S.VideoPlayer
          src={playerEl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
      </>
    );
  } else if (isError) {
    content = <S.InfoContainer>Nothing Found.</S.InfoContainer>;
  } else {
    content = <DetailsSkeleton />;
  }

  return <S.DetailsContainer>{content} </S.DetailsContainer>;
};
