import {
  changeFilmsFilter,
  clearVideos,
  selectFilmsFilter,
} from '@src/store/slices/MainPageSlice';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styled';

const buttonsData = [
  'All',
  'actions',
  'drama',
  'crime',
  'romantic',
  'horror',
  'documentary',
];

export const Filters: FC = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilmsFilter);

  const changeFilter = (title: string) => {
    if (filterValue !== title) {
      dispatch(clearVideos());
      dispatch(changeFilmsFilter(title));
    }
  };

  return (
    <S.FilterContainer data-testid="filters">
      {buttonsData.map((title) => (
        <S.FilterButton
          $isActive={filterValue === title}
          key={title}
          onClick={() => changeFilter(title)}
          data-testid="filters-button"
        >
          {title}
        </S.FilterButton>
      ))}
    </S.FilterContainer>
  );
};
