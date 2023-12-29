import styled from 'styled-components';

export const DetailsContainer = styled.div`
`;

export const DetailsVideo = styled.img`
  width: 100%;
  height: 186px;
`;

export const DetailsDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 12px;
`;

export const UserIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 100%;
`;

export const VideoInfo = styled.div`
  margin: 13px 24px 13px 0;
`;

export const FilmTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const ChanelTitle = styled.div`
  margin-bottom: 4px;
`;
