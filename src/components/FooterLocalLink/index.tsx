import { FC } from 'react';

import * as S from './styled';

interface IProps {
  linkData: { title: string; link: string };
}

export const FooterLocalLink: FC<IProps> = ({ linkData }) => {
  return <S.LocalLink href={linkData.link}>{linkData.title}</S.LocalLink>;
};
