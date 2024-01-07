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

  return (
    <S.SwitchContainer>
      <S.Switch>
        <S.SwitchThumb
          onClick={() => {
            dispatch(changeTheme(!isLight));
          }}
          $isLight={isLight}
        >
          {isLight ? <S.SwitchImg src={Sun} /> : <S.SwitchImg src={Moon} />}
        </S.SwitchThumb>
      </S.Switch>
    </S.SwitchContainer>
  );
};
