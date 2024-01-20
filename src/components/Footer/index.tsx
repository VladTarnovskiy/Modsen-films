import {
  FaceBookImg,
  FaceBookImgLight,
  InstagramImg,
  InstagramImgLight,
  LinkedInImg,
  LinkedInImgLight,
  TwitterImg,
  TwitterImgLight,
} from '@assets/footer/index';
import {
  footerLocalLinksOne,
  footerLocalLinksTwo,
} from '@src/constants/footer';
import { selectIsLightTheme } from '@src/store/slices/MainPageSlice';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { FooterLink } from '../FooterLink';
import * as S from './styled';

export const Footer: FC = () => {
  const isLightTheme = useSelector(selectIsLightTheme);
  const year = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.LinksContainer>
        <S.LocalLinksContainer>
          <S.LocalLinksList>
            {footerLocalLinksOne.map((link) => (
              <FooterLink key={link.title} linkData={link} />
            ))}
          </S.LocalLinksList>
          <S.LocalLinksList>
            <S.LocalLinksGroup>
              {footerLocalLinksTwo[0].map((link) => (
                <FooterLink key={link.title} linkData={link} />
              ))}
            </S.LocalLinksGroup>
            <S.LocalLinksGroup>
              {footerLocalLinksTwo[1].map((link) => (
                <FooterLink key={link.title} linkData={link} />
              ))}
            </S.LocalLinksGroup>
            <S.LocalLinksGroup>
              {footerLocalLinksTwo[2].map((link) => (
                <FooterLink key={link.title} linkData={link} />
              ))}
            </S.LocalLinksGroup>
          </S.LocalLinksList>
        </S.LocalLinksContainer>
        <S.SocialLinksContainer>
          <a
            target="_blank"
            href="https://web.facebook.com/ModsenSoftware/"
            rel="noreferrer"
          >
            <S.SocialLink src={isLightTheme ? FaceBookImg : FaceBookImgLight} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/modsencompany"
            rel="noreferrer"
          >
            <S.SocialLink src={isLightTheme ? TwitterImg : TwitterImgLight} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/modsencompany/"
            rel="noreferrer"
          >
            <S.SocialLink
              src={isLightTheme ? InstagramImg : InstagramImgLight}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/modsen/"
            rel="noreferrer"
          >
            <S.SocialLink
              className="last"
              src={isLightTheme ? LinkedInImg : LinkedInImgLight}
            />
          </a>
        </S.SocialLinksContainer>
      </S.LinksContainer>
      <S.CreationDate>{year} Modsen company</S.CreationDate>
    </S.FooterContainer>
  );
};
