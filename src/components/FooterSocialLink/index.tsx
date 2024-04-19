import { selectIsLightTheme } from '@src/store/slices/MainPageSlice';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

interface IProps {
  linkData: {
    title: string;
    dark: string;
    light: string;
    href: string;
  };
}

export const FooterSocialLink: FC<IProps> = ({ linkData }) => {
  const isLightTheme = useSelector(selectIsLightTheme);

  return (
    <S.Container target="_blank" href={linkData.href} rel="noreferrer">
      <S.SocialLink
        data-testid="socialLink"
        src={isLightTheme ? linkData.dark : linkData.light}
      />
    </S.Container>
  );
};
