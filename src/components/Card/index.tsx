import { FC } from 'react';
import * as S from './styled';
import { IVideo } from '@src/interfaces/videoData';
import { getDuration } from '@src/utils/getDuration';
import { useNavigate } from 'react-router-dom';
import { getDate } from '@src/utils/getDate';

interface IProps {
  videoData: IVideo;
}

export const Card: FC<IProps> = ({ videoData }) => {
  const navigate = useNavigate();
  const { snippet, contentDetails } = videoData;
  const time = getDuration(contentDetails.duration);
  const localDate = getDate(snippet.publishedAt);

  return (
    <S.CardContainer
      onClick={() => navigate(`/details/${videoData.id}`)}
      data-testid="card"
    >
      <S.CardImg src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <S.CreationDate>{localDate}</S.CreationDate>
      <S.CardDescription>
        <S.UserIcon $bg={snippet.thumbnails.default.url} />
        <S.VideoInfo>
          <S.ChanelTitle>{snippet.channelTitle}</S.ChanelTitle>
          <S.FilmTitle>{snippet.title}</S.FilmTitle>
        </S.VideoInfo>
      </S.CardDescription>
      <S.Duration>{time}</S.Duration>
    </S.CardContainer>
  );
};
