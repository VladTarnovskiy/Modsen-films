import { FC } from 'react';
import img from 'src/assets/favicon.svg';
import { H1 } from './styled';

export const MainPage: FC = () => {
  return (
    <div>
      <div>
        <H1>Hello</H1>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
