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
    <S.CardContainer data-testid="card">
      <S.CardImg
        src={snippet.thumbnails.medium.url}
        onClick={() => setVideoModal(true)}
        alt={snippet.title}
      />
      <S.CreationDate onClick={() => navigate(`/details/${videoData.id}`)}>
        {localDate}
      </S.CreationDate>
      <S.CardDescription onClick={() => navigate(`/details/${videoData.id}`)}>
        <S.UserIcon $bg={snippet.thumbnails.default.url} />
        <S.VideoInfo>
          <S.ChanelTitle>{snippet.channelTitle}</S.ChanelTitle>
          <S.FilmTitle>{snippet.title}</S.FilmTitle>
        </S.VideoInfo>
      </S.CardDescription>
      <S.Duration>{time}</S.Duration>
      {videoModal && (
        <VideoModal
          videoLink={player.embedHtml}
          setVideoModal={setVideoModal}
        />
      )}
    </S.CardContainer>
  );
};
