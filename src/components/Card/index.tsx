import { FC } from 'react';
import * as S from './styled';
import AvatarImg from 'assets/Avatar.svg';

export const Card: FC = () => {
  return (
    <S.CardContainer>
      <S.CardImg />
      <S.CardDescription>
        <S.UserIcon src={AvatarImg} />
        <S.VideoInfo>
          <div>Joe Video</div>
          <S.UserName> Ray 1445</S.UserName>
        </S.VideoInfo>
      </S.CardDescription>
    </S.CardContainer>
  );
};
