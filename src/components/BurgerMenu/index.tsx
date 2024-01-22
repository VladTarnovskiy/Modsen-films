import { FC } from 'react';

import { ThemeSwitch } from '../ThemeSwitch';
import * as S from './styled';

export const BurgerMenu: FC = () => {
  return (
    <S.Container>
      <S.Toggle id="menu__toggle" type="checkbox" />
      <S.Button className="menu__btn" htmlFor="menu__toggle">
        <S.Line></S.Line>
      </S.Button>
      <S.Box className="menu__box">
        <S.Item>
          <S.ItemTitle>Theme:</S.ItemTitle>
          <S.ItemDescription>
            <ThemeSwitch />
          </S.ItemDescription>
        </S.Item>
      </S.Box>
    </S.Container>
  );
};
