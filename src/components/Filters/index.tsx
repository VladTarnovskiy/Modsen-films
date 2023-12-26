import { FC } from 'react';
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
  return (
    <S.FilterContainer>
      {buttonsData.map((button) => (
        <S.FilterButton key={button}>{button}</S.FilterButton>
      ))}
    </S.FilterContainer>
  );
};
