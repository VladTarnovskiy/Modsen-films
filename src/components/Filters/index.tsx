import { FC, useState } from 'react';
import * as S from './styled';
import { useDispatch } from 'react-redux';
import { changeFilmsFilter, clearVideos } from 'src/store/slices/MainPageSlice';

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
  const [activeButton, setActiveButton] = useState('All');

  const changeFilter = (title: string) => {
    dispatch(clearVideos());
    setActiveButton(title);
    if (title === 'All') {
      dispatch(changeFilmsFilter(''));
    } else {
      dispatch(changeFilmsFilter(title));
    }
  };

  return (
    <S.FilterContainer>
      {buttonsData.map((title) => (
        <S.FilterButton
          $isActive={activeButton === title}
          key={title}
          onClick={() => changeFilter(title)}
        >
          {title}
        </S.FilterButton>
      ))}
    </S.FilterContainer>
  );
};
