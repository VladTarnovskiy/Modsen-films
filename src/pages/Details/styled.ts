import { itemsCenter } from 'src/styles/fragments';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 500px;
`;

export const ChanelInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 12px;
`;

export const FilmTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const ChanelTitle = styled.div`
  margin-bottom: 4px;
`;

export const UserIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 100%;
`;

export const VideoPublishedDate = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const VideoDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const VideoStatistic = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
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

export const VideoStatisticInfo = styled.div``;

export const LoaderContainer = styled.div`
  margin-top: 200px;
  width: 100%;
  ${itemsCenter}
`;
