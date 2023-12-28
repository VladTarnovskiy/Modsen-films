import { FC } from 'react';
import * as S from './styled';
import AvatarImg from 'assets/Avatar.svg';
import { IVideo } from 'src/interfaces/videoData';

interface IProps {
  videoInfo: IVideo;
}

export const Card: FC<IProps> = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  return (
    <S.CardContainer>
      <S.CardImg />
      <S.CardDescription>
        <S.UserIcon src={AvatarImg} />
        <S.VideoInfo>
          <div>{snippet.channelTitle}</div>
          <S.UserName>{statistics.likeCount}</S.UserName>
        </S.VideoInfo>
      </S.CardDescription>
    </S.CardContainer>
  );
};
