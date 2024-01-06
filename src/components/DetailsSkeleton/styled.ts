import { SkeletonBackgroundAnimation } from 'src/styles/fragments';
import styled from 'styled-components';

export const SkeletonDetailsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const SkeletonVideoPlayer = styled.div`
  width: 100%;
  height: 500px;
  ${SkeletonBackgroundAnimation}
`;

export const SkeletonChanelInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 12px;
`;

export const SkeletonFilmTitle = styled.div`
  margin-top: 5px;
  height: 22px;
  width: 230px;
  ${SkeletonBackgroundAnimation}
`;

export const SkeletonChanelTitle = styled.div`
  margin-bottom: 4px;
  height: 22px;
  width: 130px;
  ${SkeletonBackgroundAnimation}
`;

export const SkeletonVideoStatistic = styled.div`
  height: 22px;
  width: 230px;
  margin-left: 45px;
  ${SkeletonBackgroundAnimation}
`;

export const SkeletonUserIcon = styled.div`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 100%;
  ${SkeletonBackgroundAnimation}
`;

export const SkeletonVideoDescription = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  ${SkeletonBackgroundAnimation}
`;
