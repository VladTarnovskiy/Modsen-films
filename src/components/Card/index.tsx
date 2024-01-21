import { IVideo } from '@src/interfaces/videoData';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { VideoModal } from '../VideoModal';
import * as S from './styled';

interface IProps {
  videoData: IVideo;
}

export const Card: FC<IProps> = ({ videoData }) => {
  const navigate = useNavigate();
  const [videoModal, setVideoModal] = useState(false);

  return (
    <>
      <S.CardContainer data-testid="card">
        <S.CardImageContainer
          onClick={() => setVideoModal(true)}
          data-testid="card-video"
        >
          <S.CardImg src={videoData.mediumImg} alt={videoData.title} />
          <S.Duration>{videoData.duration}</S.Duration>
        </S.CardImageContainer>
        <S.CardDataContainer
          onClick={() => navigate(`/details/${videoData.id}`)}
          data-testid="card-details"
        >
          <S.CreationDate>{videoData.publishedAt}</S.CreationDate>
          <S.CardDescription>
            <S.UserIcon $bg={videoData.defaultImg} />
            <S.VideoInfo>
              <S.ChanelTitle>{videoData.channelTitle}</S.ChanelTitle>
              <S.FilmTitle>{videoData.title}</S.FilmTitle>
            </S.VideoInfo>
          </S.CardDescription>
        </S.CardDataContainer>
      </S.CardContainer>
      {videoModal && (
        <VideoModal
          videoLink={videoData.player}
          setVideoModal={setVideoModal}
        />
      )}
    </>
  );
};
