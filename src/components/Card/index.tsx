import { FC, useState } from 'react';
import * as S from './styled';
import { IVideo } from '@src/interfaces/videoData';
import { getDuration } from '@src/utils/getDuration';
import { useNavigate } from 'react-router-dom';
import { getDate } from '@src/utils/getDate';
import { VideoModal } from '../VideoModal';

interface IProps {
  videoData: IVideo;
}

export const Card: FC<IProps> = ({ videoData }) => {
  const navigate = useNavigate();
  const { snippet, contentDetails, player } = videoData;
  const time = getDuration(contentDetails.duration);
  const localDate = getDate(snippet.publishedAt);

  const [videoModal, setVideoModal] = useState(false);

  return (
    <>
      <S.CardContainer data-testid="card">
        <S.CardImageContainer
          onClick={() => setVideoModal(true)}
          data-testid="card-video"
        >
          <S.CardImg src={snippet.thumbnails.medium.url} alt={snippet.title} />
          <S.Duration>{time}</S.Duration>
        </S.CardImageContainer>
        <S.CardDataContainer
          onClick={() => navigate(`/details/${videoData.id}`)}
          data-testid="card-details"
        >
          <S.CreationDate>{localDate}</S.CreationDate>
          <S.CardDescription>
            <S.UserIcon $bg={snippet.thumbnails.default.url} />
            <S.VideoInfo>
              <S.ChanelTitle>{snippet.channelTitle}</S.ChanelTitle>
              <S.FilmTitle>{snippet.title}</S.FilmTitle>
            </S.VideoInfo>
          </S.CardDescription>
        </S.CardDataContainer>
      </S.CardContainer>
      {videoModal && (
        <VideoModal
          videoLink={player.embedHtml}
          setVideoModal={setVideoModal}
        />
      )}
    </>
  );
};
