import {
  buttonAnimation,
  defaultAnimationSize,
  itemsCenter,
} from 'src/styles/fragments';
import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  padding-bottom: 20px;
  width: 332px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    ${buttonAnimation}
  }

  &:active {
    ${defaultAnimationSize}
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 186px;
`;

export const CardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 12px;
`;

export const UserIcon = styled.div<{ $bg: string }>`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 100%;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
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

export const Duration = styled.div`
  top: 160px;
  right: 5px;
  position: absolute;
  width: 70px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.bgBase};
  border-radius: 9999px;
  ${itemsCenter}
`;
