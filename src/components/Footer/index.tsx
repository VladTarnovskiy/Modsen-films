import {
  footerLocalLinksOne,
  footerLocalLinksTwo,
  footerSocialLinks,
} from '@src/constants/footer';
import { FC } from 'react';

import { FooterLocalLink } from '../FooterLocalLink';
import { FooterSocialLink } from '../FooterSocialLink';
import * as S from './styled';

export const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <S.Container>
      <S.LinksContainer>
        <S.LocalLinksContainer>
          <S.LocalLinksList>
            {footerLocalLinksOne.map((link) => (
              <FooterLocalLink key={link.title} linkData={link} />
            ))}
          </S.LocalLinksList>
          <S.LocalLinksList>
            <S.LocalLinksGroup>
              {footerLocalLinksTwo[0].map((link) => (
                <FooterLocalLink key={link.title} linkData={link} />
              ))}
            </S.LocalLinksGroup>
            <S.LocalLinksGroup>
              {footerLocalLinksTwo[1].map((link) => (
                <FooterLocalLink key={link.title} linkData={link} />
              ))}
            </S.LocalLinksGroup>
            <S.LocalLinksGroup>
              {footerLocalLinksTwo[2].map((link) => (
                <FooterLocalLink key={link.title} linkData={link} />
              ))}
            </S.LocalLinksGroup>
          </S.LocalLinksList>
        </S.LocalLinksContainer>
        <S.SocialLinksContainer>
          {footerSocialLinks.map((linkData) => (
            <FooterSocialLink linkData={linkData} key={linkData.title} />
          ))}
        </S.SocialLinksContainer>
      </S.LinksContainer>
      <S.CreationDate>{year} Modsen company</S.CreationDate>
    </S.Container>
  );
};
