import styled from 'styled-components';
import img from './assets/favicon.svg';
import { FC } from 'react';

const H1 = styled.h1`
  color: red;
`;

export const App: FC = () => {
  return (
    <div>
      <H1>Hello</H1>
      <img src={img} alt="" />
    </div>
  );
};
