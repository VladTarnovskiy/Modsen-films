import { itemsCenter } from 'src/styles/fragments';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 15px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  ${itemsCenter}
`;

export const LogoImg = styled.img`
  width: 29px;
  height: 20px;
  margin-right: 6px;
`;

export const LogoTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
