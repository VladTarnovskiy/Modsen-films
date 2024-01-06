import { SkeletonBackgroundAnimation } from 'src/styles/fragments';
import styled from 'styled-components';

export const SkeletonCardContainer = styled.div`
  position: relative;
  padding-bottom: 20px;
  width: 332px;
  height: 300px;
`;

export const SkeletonCardImg = styled.div`
  ${SkeletonBackgroundAnimation}
  width: 100%;
  height: 186px;
`;

export const SkeletonCardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 12px;
`;

export const SkeletonUserIcon = styled.div`
  ${SkeletonBackgroundAnimation}
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 100%;
`;

export const SkeletonVideoInfo = styled.div`
  margin: 13px 24px 13px 0;
`;

export const SkeletonFilmTitle = styled.div`
  ${SkeletonBackgroundAnimation}
  height: 22px;
  width: 230px;
`;

export const SkeletonChanelTitle = styled.div`
  ${SkeletonBackgroundAnimation}
  margin-bottom: 4px;
  height: 22px;
  width: 130px;
`;
