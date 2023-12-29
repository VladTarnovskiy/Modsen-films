import { FC } from 'react';
import * as S from './styled';
import AvatarImg from 'assets/Avatar.svg';
import { IVideo } from 'src/interfaces/videoData';
import { getDuration } from 'src/utils/getDuration';
import { useNavigate } from 'react-router-dom';

interface IProps {
  videoData: IVideo;
}

export const Card: FC<IProps> = ({ videoData }) => {
  const { snippet, contentDetails } = videoData;
  const time = getDuration(contentDetails.duration);
  const navigate = useNavigate();
  // const playerEl = player.embedHtml.split('"')[5];

  return (
    <S.CardContainer onClick={() => navigate(`/details/${videoData.id}`)}>
      <S.CardImg src={snippet.thumbnails.medium.url} />
      <S.CardDescription>
        <S.UserIcon src={AvatarImg} />
        <S.VideoInfo>
          <S.ChanelTitle>{snippet.channelTitle}</S.ChanelTitle>
          <S.FilmTitle>{snippet.localized.title}</S.FilmTitle>
        </S.VideoInfo>
      </S.CardDescription>
      {/* <iframe
        width="480"
        height="360"
        src={playerEl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
      <S.Duration>{time}</S.Duration>
    </S.CardContainer>
  );
};
