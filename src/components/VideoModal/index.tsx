import { FC, useRef, MouseEvent, Dispatch, SetStateAction } from 'react';
import * as S from './styled';
import { createPortal } from 'react-dom';

interface IProps {
  videoLink: string;
  setVideoModal: Dispatch<SetStateAction<boolean>>;
}

export const VideoModal: FC<IProps> = ({ videoLink, setVideoModal }) => {
  const playerLink = `https:${videoLink.split('"')[5]}?autoplay=1`;
  const modalWindow = useRef<HTMLDivElement>(null);

  const closeModalWindow = () => {
    setVideoModal(false);
  };

  const closeWithOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const modalEl = modalWindow.current;

    if (modalEl?.contains && !modalEl.contains(target)) {
      closeModalWindow();
    }
  };

  return createPortal(
    <S.Overlay
      onClick={closeWithOverlayClick}
      data-testid="details-modal-overlay"
    >
      <S.ModalContainer data-testid="details-modal" ref={modalWindow}>
        <S.VideoPlayer
          src={playerLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        />
      </S.ModalContainer>
    </S.Overlay>,
    document.body
  );
};
