import { FC } from 'react';
import * as S from './styled';
import { Card } from 'src/components/Card';

export const MainPage: FC = () => {
  return (
    <S.MainContainer>
      <S.CardContainer>
        <Card />
      </S.CardContainer>
      <S.ShowMoreBut>Show More</S.ShowMoreBut>
    </S.MainContainer>
  );
};
