import SearchImg from '@assets/Search.svg';
import { FC } from 'react';

import * as S from './styled';

interface IProps {
  handleSubmit: () => void;
}

export const SearchButton: FC<IProps> = ({ handleSubmit }) => {
  return (
    <S.SearchButton onClick={handleSubmit} data-testid="search-button">
      <S.SubmitButtonIcon src={SearchImg} />
    </S.SearchButton>
  );
};
