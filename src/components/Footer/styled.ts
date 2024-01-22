import { styled } from 'styled-components';

import { itemsCenter } from './../../styles/fragments';

export const Container = styled.footer`
  padding: 55px 6px 17px 6px;
  border-top: 2px solid;
  border-color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.media.m} {
    padding-bottom: 0;
    padding-top: 16px;
  }

  @media ${({ theme }) => theme.media.s} {
    padding-top: 8px;
  }
`;

export const LinksContainer = styled.div`
  margin-bottom: 22px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.l} {
    flex-direction: column;
    align-items: center;
  }
`;

export const LocalLinksContainer = styled.div`
  padding-bottom: 23px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 38px;

  @media ${({ theme }) => theme.media.l} {
    margin-left: 0;
    font-size: 18px;
  }

  @media ${({ theme }) => theme.media.s} {
    margin-left: 0;
    font-size: 14px;
  }

  @media ${({ theme }) => theme.media.s} {
    flex-direction: column;
  }
`;

export const LocalLinksGroup = styled.div`
  ${itemsCenter}

  justify-content: flex-start;
`;

export const LocalLinksList = styled.div`
  margin-right: 32px;

  @media ${({ theme }) => theme.media.l} {
    width: auto;
  }

  @media ${({ theme }) => theme.media.s} {
    margin-bottom: 16px;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  max-width: 144px;
`;

export const CreationDate = styled.p`
  margin: auto;
  width: fit-content;
  margin-bottom: 17px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.quaternary};

  @media ${({ theme }) => theme.media.l} {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-bottom: 0;
    padding-bottom: 8px;
  }

  @media ${({ theme }) => theme.media.s} {
    font-size: 12px;
  }
`;
