import { itemsCenter } from '@src/styles/fragments';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  ${itemsCenter}
`;

export const LogoImg = styled.img`
  width: 29px;
  height: 20px;
  margin-right: 6px;
`;

export const LogoTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const SwitchContainer = styled.div`
  min-width: 145px;
  display: flex;
  justify-content: flex-end;

  @media ${({ theme }) => theme.media.l} {
    min-width: 50px;
  }

  @media ${({ theme }) => theme.media.s} {
    display: none;
  }
`;

export const SearchBarDesktopContainer = styled.div`
  display: block;
  width: 100%;

  @media ${({ theme }) => theme.media.s} {
    display: none;
  }
`;

export const SearchBarMobileContainer = styled.div`
  display: none;
  width: 100%;

  @media ${({ theme }) => theme.media.s} {
    display: block;
  }
`;
