import { ISearchItem } from '@src/interfaces/search';
import { FC } from 'react';

import * as S from './styled';

interface IProps {
  searchItem: ISearchItem;
  setSearchFromList: (value: string) => void;
}

export const SearchItem: FC<IProps> = ({ searchItem, setSearchFromList }) => {
  const itemValue = searchItem.snippet.title;

  const setSearchItem = () => {
    setSearchFromList(itemValue);
  };
  return <S.SearchItem onClick={setSearchItem}>{itemValue}</S.SearchItem>;
};
