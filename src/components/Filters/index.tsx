import { FC } from 'react';
import * as S from './styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilmsFilter,
  clearVideos,
  selectFilmsFilter,
} from 'src/store/slices/MainPageSlice';

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
    <S.FilterContainer>
      {buttonsData.map((title) => (
        <S.FilterButton
          $isActive={filterValue === title}
          key={title}
          onClick={() => changeFilter(title)}
        >
          {title}
        </S.FilterButton>
      ))}
    </S.FilterContainer>
  );
};
