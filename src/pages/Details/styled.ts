import { itemsCenter } from '@src/styles/fragments';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 40px;
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 500px;
  border-style: none;

  @media ${({ theme }) => theme.media.xl} {
    height: 450px;
  }

  @media ${({ theme }) => theme.media.l} {
    height: 400px;
  }

  @media ${({ theme }) => theme.media.s} {
    height: 300px;
  }
`;

export const ChanelInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 12px;
`;

export const FilmTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};

  @media ${({ theme }) => theme.media.s} {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const ChanelTitle = styled.div`
  margin-bottom: 4px;
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
  }
`;

export const VideoPublishedDate = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;

  @media ${({ theme }) => theme.media.s} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const VideoDescription = styled.div`
  word-break: break-all;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const VideoStatistic = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;

  @media ${({ theme }) => theme.media.s} {
    flex-wrap: wrap;
    padding-left: 20px;
  }
`;

export const VideoStatisticItem = styled.div`
  margin-top: 10px;
  margin-right: 20px;
  ${itemsCenter}
`;

export const VideoStatisticIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const VideoStatisticInfo = styled.div`
  @media ${({ theme }) => theme.media.s} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const InfoContainer = styled.div`
  margin-top: 200px;
  width: 100%;
  ${itemsCenter}
`;
