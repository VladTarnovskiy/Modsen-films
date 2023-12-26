import { FC } from 'react';
import * as S from './styled';
import Sun from 'src/assets/Sun.svg';

export const ThemeSwitch: FC = () => {
  return (
    <S.SwitchContainer>
      <S.Switch>
        <S.SwitchImg src={Sun} />
      </S.Switch>
    </S.SwitchContainer>
  );
};
