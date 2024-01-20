import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const PathnameCheck: FC<IProps> = ({ children }) => {
  const location = useLocation();

  return <>{location.pathname === '/' && children}</>;
};
