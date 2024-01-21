import { SkeletonBackgroundAnimation } from '@src/styles/fragments';
import styled from 'styled-components';

export const SkeletonDetailsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const SkeletonVideoPlayer = styled.div`
  width: 100%;
  height: 500px;

  ${SkeletonBackgroundAnimation}

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

  @media ${({ theme }) => theme.media.s} {
    width: 130px;
  }
`;

export const SkeletonChanelTitle = styled.div`
  margin-bottom: 4px;
  height: 22px;
  width: 130px;

  ${SkeletonBackgroundAnimation}

  @media ${({ theme }) => theme.media.s} {
    width: 80px;
  }
`;

export const SkeletonVideoStatistic = styled.div`
  height: 22px;
  width: 230px;
  margin-left: 45px;

  ${SkeletonBackgroundAnimation}

  @media ${({ theme }) => theme.media.s} {
    width: 130px;
    margin-left: 28px;
  }
`;

export const SkeletonUserIcon = styled.div`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 100%;

  ${SkeletonBackgroundAnimation}

  @media ${({ theme }) => theme.media.s} {
    width: 22px;
    height: 22px;
    margin-right: 6px;
  }
`;

export const SkeletonVideoDescription = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;

  ${SkeletonBackgroundAnimation}
`;
