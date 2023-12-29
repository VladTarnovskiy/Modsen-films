import { buttonAnimation, defaultAnimationSize } from 'src/styles/fragments';
import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 55px 6px 17px 6px;
`;

export const LinksContainer = styled.div`
  margin-bottom: 22px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-items: center;
`;

export const LocalLinksContainer = styled.div`
  flex-basis: 1/2;
  padding-bottom: 23px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 38px;
`;

export const LocalLinksList = styled.div`
  margin-right: 32px;
  width: 293px;
`;

export const LocalLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  max-width: 144px;
`;

export const SocialLink = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 27px;

  &.last {
    margin-right: 0;
  }

  &:hover {
    ${buttonAnimation}
    transform: scale(1.2);
  }

  &:active {
    ${defaultAnimationSize}
  }
`;

export const CreationDate = styled.div`
  margin: auto;
  width: fit-content;
  margin-bottom: 17px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.quaternary};
`;
