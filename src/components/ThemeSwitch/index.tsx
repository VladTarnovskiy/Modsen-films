import Moon from '@assets/Moon.svg';
import Sun from '@assets/Sun.svg';
import {
  changeTheme,
  selectIsLightTheme,
} from '@src/store/slices/MainPageSlice';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styled';

export const ThemeSwitch: FC = () => {
  const isLight = useSelector(selectIsLightTheme);
  const dispatch = useDispatch();

  const changeCurrentTheme = () => {
    localStorage.setItem('isLightTheme', JSON.stringify(!isLight));
    dispatch(changeTheme(!isLight));
  };

  return (
    <S.Switch>
      <S.SwitchThumb
        onClick={changeCurrentTheme}
        $isLight={isLight}
        data-testid="theme-switch"
      >
        {isLight ? (
          <S.SwitchImg src={Sun} data-testid="sun-img" />
        ) : (
          <S.SwitchImg src={Moon} data-testid="moon-img" />
        )}
      </S.SwitchThumb>
    </S.Switch>
  );
};
