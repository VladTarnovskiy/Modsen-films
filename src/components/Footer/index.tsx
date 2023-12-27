import { FC } from 'react';
import * as S from './styled';
import FaceBookImg from 'assets/Facebook.svg';
import InstagramImg from 'assets/Instagram.svg';
import TwitterImg from 'assets/Twitter.svg';
import LinkedInImg from 'assets/LinkedIn.svg';

export const Footer: FC = () => {
  return (
    <S.FooterContainer>
      <S.LinksContainer>
        <S.LocalLinksContainer>
          <S.LocalLinksList>
            <S.LocalLink>
              <a href="#">TermsPrivacyPolicy & Safety</a>
            </S.LocalLink>
            <S.LocalLink>
              <a href="#">How YouTube works</a>
            </S.LocalLink>
            <S.LocalLink>
              <a href="#">Test new features</a>
            </S.LocalLink>
          </S.LocalLinksList>
          <S.LocalLinksList>
            <S.LocalLink>
              <a href="#">About</a> <a href="#">Press</a>{' '}
              <a href="#">Copyright</a>
            </S.LocalLink>
            <S.LocalLink>
              <a href="#">Contact us</a> <a href="#">Creators</a>
            </S.LocalLink>
            <S.LocalLink>
              <a href="#">Advertise</a> <a href="#">Developers</a>
            </S.LocalLink>
          </S.LocalLinksList>
        </S.LocalLinksContainer>
        <S.SocialLinksContainer>
          <a href="https://web.facebook.com/ModsenSoftware/">
            <S.SocialLink src={FaceBookImg} />
          </a>
          <a href="https://twitter.com/modsencompany">
            <S.SocialLink src={TwitterImg} />
          </a>
          <a href="https://www.instagram.com/modsencompany/">
            <S.SocialLink src={InstagramImg} />
          </a>
          <a href="https://www.linkedin.com/company/modsen/">
            <S.SocialLink src={LinkedInImg} />
          </a>
        </S.SocialLinksContainer>
      </S.LinksContainer>
      <S.CreationDate>2023 Modsen company</S.CreationDate>
    </S.FooterContainer>
  );
};
