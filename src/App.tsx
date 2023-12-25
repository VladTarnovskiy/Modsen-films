import { FC } from 'react';
import img from './assets/favicon.svg';

export const App: FC = () => {
  return (
    <div>
      Hello
      <img src={img} alt="" />
    </div>
  );
};
