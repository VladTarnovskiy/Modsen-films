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
      <S.Container data-testid="card">
        <S.ImageContainer
          onClick={() => setVideoModal(true)}
          data-testid="card-video"
        >
          <S.Img src={videoData.mediumImg} alt={videoData.title} />
          <S.Duration>{videoData.duration}</S.Duration>
        </S.ImageContainer>
        <S.DataContainer
          onClick={() => navigate(`/details/${videoData.id}`)}
          data-testid="card-details"
        >
          <S.CreationDate>{videoData.publishedAt}</S.CreationDate>
          <S.Description>
            <S.UserIcon $bg={videoData.defaultImg} />
            <S.VideoInfo>
              <S.ChanelTitle>{videoData.channelTitle}</S.ChanelTitle>
              <S.FilmTitle>{videoData.title}</S.FilmTitle>
            </S.VideoInfo>
          </S.Description>
        </S.DataContainer>
      </S.Container>
      {videoModal && (
        <VideoModal
          videoLink={videoData.player}
          setVideoModal={setVideoModal}
        />
      )}
    </>
  );
};
