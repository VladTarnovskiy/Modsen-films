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
  const isLightTheme = useSelector(selectIsLightTheme);
  const dispatch = useDispatch();

  const changeCurrentTheme = () => {
    localStorage.setItem('isLightTheme', JSON.stringify(!isLightTheme));
    dispatch(changeTheme(!isLightTheme));
  };

  return (
    <S.Switch>
      <S.Thumb
        onClick={changeCurrentTheme}
        $isLightTheme={isLightTheme}
        data-testid="theme-switch"
      >
        {isLightTheme ? (
          <S.Img src={Sun} data-testid="sun-img" />
        ) : (
          <S.Img src={Moon} data-testid="moon-img" />
        )}
      </S.Thumb>
    </S.Switch>
  );
};
