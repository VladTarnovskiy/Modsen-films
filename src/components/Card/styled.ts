import { buttonAnimation, itemsCenter } from '@src/styles/fragments';
import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;
  width: 332px;
  overflow: hidden;
  transition: all 0.1s ease-out;

  @media ${({ theme }) => theme.media.s} {
    width: 212px;
    padding-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 186px;
  overflow: hidden;

  @media ${({ theme }) => theme.media.s} {
    height: 129px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    ${buttonAnimation}
  }
`;

export const DataContainer = styled.div`
  height: 100%;
`;

export const Description = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const UserIcon = styled.div<{ $bg: string }>`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 100%;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;

  @media ${({ theme }) => theme.media.s} {
    width: 22px;
    height: 22px;
    margin-right: 6px;
  }
`;

export const VideoInfo = styled.div`
  margin: 13px 24px 13px 0;

  @media ${({ theme }) => theme.media.s} {
    margin-top: 0;
  }
`;

export const ChanelTitle = styled.p`
  margin-bottom: 4px;

  @media ${({ theme }) => theme.media.s} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const FilmTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const CreationDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  width: fit-content;
  margin-right: auto;
  padding-bottom: 5px;
`;

export const Duration = styled.p`
  top: 160px;
  right: 5px;
  position: absolute;
  width: 70px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 10px;

  ${itemsCenter}

  @media ${({ theme }) => theme.media.s} {
    top: 110px;
    width: 60px;
    border-radius: 8px;
    height: 15px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
