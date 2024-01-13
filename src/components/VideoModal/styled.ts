import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  margin: auto;
  top: 20%;
  position: relative;
  max-width: 1200px;
  width: 100%;
`;

export const VideoPlayer = styled.iframe`
  padding: 0 100px 0 100px;
  width: calc(100% - 200px);
  height: 500px;
  border-style: none;

  @media ${({ theme }) => theme.media.xl} {
    height: 450px;
    padding: 0 80px 0 80px;
    width: calc(100% - 160px);
  }

  @media ${({ theme }) => theme.media.l} {
    height: 400px;
    padding: 0 60px 0 60px;
    width: calc(100% - 120px);
  }

  @media ${({ theme }) => theme.media.s} {
    height: 300px;
    padding: 0 20px 0 20px;
    width: calc(100% - 40px);
  }
`;
