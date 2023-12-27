import styled from 'styled-components';

export const CardContainer = styled.div`
  padding-bottom: 20px;
`;

export const CardImg = styled.img`
  width: 332px;
  height: 186px;
  background-color: teal;
`;

export const CardDescription = styled.div`
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

export const UserName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
`;
