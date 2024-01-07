import { FC } from 'react';
import * as S from './styled';
import Sun from 'assets/Sun.svg';
import Moon from 'assets/Moon.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTheme,
  selectIsLightTheme,
} from 'src/store/slices/MainPageSlice';

export const ThemeSwitch: FC = () => {
  const isLight = useSelector(selectIsLightTheme);
  const dispatch = useDispatch();

  const changeCurrentTheme = () => {
    localStorage.setItem('isLightTheme', JSON.stringify(!isLight));
    dispatch(changeTheme(!isLight));
  };

  return (
    <S.Switch>
      <S.SwitchThumb onClick={changeCurrentTheme} $isLight={isLight}>
        {isLight ? <S.SwitchImg src={Sun} /> : <S.SwitchImg src={Moon} />}
      </S.SwitchThumb>
    </S.Switch>
  );
};
