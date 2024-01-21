import { buttonsData } from '@src/constants/filters';
import {
  changeFilmsFilter,
  clearVideos,
  selectFilmsFilter,
} from '@src/store/slices/MainPageSlice';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styled';

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
    <S.Container data-testid="filters">
      {buttonsData.map((title) => (
        <S.Button
          $isActive={filterValue === title}
          key={title}
          onClick={() => changeFilter(title)}
          data-testid="filters-button"
        >
          {title}
        </S.Button>
      ))}
    </S.Container>
  );
};
