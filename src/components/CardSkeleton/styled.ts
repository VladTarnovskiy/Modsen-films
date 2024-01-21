import { SkeletonBackgroundAnimation } from '@src/styles/fragments';
import styled from 'styled-components';

export const SkeletonCardContainer = styled.div`
  position: relative;
  padding-bottom: 20px;
  width: 332px;
  height: 300px;

  @media ${({ theme }) => theme.media.s} {
    width: 212px;
    padding-bottom: 0;
  }
`;

export const SkeletonCardImg = styled.div`
  width: 100%;
  height: 186px;

  ${SkeletonBackgroundAnimation}

  @media ${({ theme }) => theme.media.s} {
    height: 129px;
  }
`;

export const SkeletonCardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 12px;
`;

export const SkeletonUserIcon = styled.div`
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

export const SkeletonVideoInfo = styled.div`
  margin: 13px 24px 13px 0;

  @media ${({ theme }) => theme.media.s} {
    margin-top: 0;
  }
`;

export const SkeletonCreationDate = styled.div`
  height: 18px;
  width: 130px;
  margin-bottom: 3px;
  margin-top: 3px;

  ${SkeletonBackgroundAnimation}
`;

export const SkeletonFilmTitle = styled.div`
  height: 22px;
  width: 230px;

  ${SkeletonBackgroundAnimation}

  @media ${({ theme }) => theme.media.s} {
    width: 150px;
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
