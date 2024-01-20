import { FC } from 'react';
import * as S from './styled';
import { ISearchItem } from '@src/interfaces/search';

interface IProps {
  searchItem: ISearchItem;
  setSearchFromList: (value: string) => void;
}

export const SearchItem: FC<IProps> = ({ searchItem, setSearchFromList }) => {
  const itemValue = searchItem.snippet.title;
  return (
    <S.SearchItem onClick={() => setSearchFromList(itemValue)}>
      {itemValue}
    </S.SearchItem>
  );
};
