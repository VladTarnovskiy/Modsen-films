import { FC } from 'react';
import * as S from './styled';
import SearchImg from 'src/assets/Search.svg';

export const SearchBar: FC = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchBar type="text" placeholder="Search" />
      <S.SubmitButton>
        <S.SubmitButtonIcon src={SearchImg} />
      </S.SubmitButton>
    </S.SearchBarContainer>
  );
};
