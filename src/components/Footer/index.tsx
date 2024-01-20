import FaceBookImg from '@assets/Facebook.svg';
import FaceBookImgLight from '@assets/FacebookLight.svg';
import InstagramImg from '@assets/Instagram.svg';
import InstagramImgLight from '@assets/InstagramLight.svg';
import LinkedInImg from '@assets/LinkedIn.svg';
import LinkedInImgLight from '@assets/LinkedInLight.svg';
import TwitterImg from '@assets/Twitter.svg';
import TwitterImgLight from '@assets/TwitterLight.svg';
import { selectIsLightTheme } from '@src/store/slices/MainPageSlice';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

export const Footer: FC = () => {
  const isLight = useSelector(selectIsLightTheme);

  return (
    <S.FooterContainer>
      <S.LinksContainer>
        <S.LocalLinksContainer>
          <S.LocalLinksList>
            <div>
              <S.LocalLink href="#">TermsPrivacyPolicy & Safety</S.LocalLink>
            </div>
            <div>
              <S.LocalLink href="#">How YouTube works</S.LocalLink>
            </div>
            <div>
              <S.LocalLink href="#">Test new features</S.LocalLink>
            </div>
          </S.LocalLinksList>
          <S.LocalLinksList>
            <div>
              <S.LocalLink href="#">About</S.LocalLink>{' '}
              <S.LocalLink href="#">Press</S.LocalLink>{' '}
              <S.LocalLink href="#">Copyright</S.LocalLink>
            </div>
            <div>
              <S.LocalLink href="#">Contact us</S.LocalLink>{' '}
              <S.LocalLink href="#">Creators</S.LocalLink>
            </div>
            <div>
              <S.LocalLink href="#">Advertise</S.LocalLink>{' '}
              <S.LocalLink href="#">Developers</S.LocalLink>
            </div>
          </S.LocalLinksList>
        </S.LocalLinksContainer>
        <S.SocialLinksContainer>
          <a href="https://web.facebook.com/ModsenSoftware/">
            <S.SocialLink src={isLight ? FaceBookImg : FaceBookImgLight} />
          </a>
          <a href="https://twitter.com/modsencompany">
            <S.SocialLink src={isLight ? TwitterImg : TwitterImgLight} />
          </a>
          <a href="https://www.instagram.com/modsencompany/">
            <S.SocialLink src={isLight ? InstagramImg : InstagramImgLight} />
          </a>
          <a href="https://www.linkedin.com/company/modsen/">
            <S.SocialLink
              className="last"
              src={isLight ? LinkedInImg : LinkedInImgLight}
            />
          </a>
        </S.SocialLinksContainer>
      </S.LinksContainer>
      <S.CreationDate>2023 Modsen company</S.CreationDate>
    </S.FooterContainer>
  );
};
