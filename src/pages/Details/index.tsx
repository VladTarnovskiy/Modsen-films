import { FC } from 'react';
import * as S from './styled';
// import AvatarImg from 'assets/Avatar.svg';
// import { IVideo } from 'src/interfaces/videoData';
import { useParams } from 'react-router-dom';
import { useGetVideoDataQuery } from 'src/store/slices/ApiSlice';
import { Loader } from 'src/components/Loader';

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
    const playerEl = videoData.player.embedHtml.split('"')[5];
    content = (
      <S.DetailsContainer>
 <iframe
          width="480"
          height="360"
          src={playerEl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>      <S.DetailsDescription>
        <S.UserIcon src={AvatarImg} />
        <S.VideoInfo>
          {content}

          <S.ChanelTitle>{snippet.channelTitle}</S.ChanelTitle>
          <S.FilmTitle>{snippet.localized.title}</S.FilmTitle>
        </S.VideoInfo>
      </S.DetailsDescription>
    </S.DetailsContainer>
    );
    console.log(videoData);
  } else if (isError) {
    content = <div>Nothing Found.</div>;
  } else {
    content = <Loader />;
  }

  return (<>{content}</>
          
  );
};
