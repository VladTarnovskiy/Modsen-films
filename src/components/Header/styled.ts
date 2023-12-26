import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bgBase};
  padding: 1px, 0px, 1px, 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 29px;
  height: 20px;
`;

export const LogoTitle = styled.h1`
  width: 29px;
  height: 20px;
  font-family: 'Roboto Bold', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
