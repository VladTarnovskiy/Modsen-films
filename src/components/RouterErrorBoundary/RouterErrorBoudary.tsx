import DinoImg from '@assets/ErrorDino.svg';
import { FC } from 'react';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

import * as S from './styled';

export const RouterErrorBoundary: FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let message = 'Something went wrong.';

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      message = "You aren't authorized to see this.";
    }

    if (error.status === 503) {
      message = 'Sorry, our API is down.';
    }
  }

  return (
    <S.ErrorContainer>
      <S.ErrorImg src={DinoImg} alt="Error dino" />
      <S.ErrorMessage>{message}</S.ErrorMessage>
      <S.GoBackBut onClick={() => navigate(-1)}>Go back</S.GoBackBut>
    </S.ErrorContainer>
  );
};
