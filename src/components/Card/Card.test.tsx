import { Wrapper } from '@jest-dir/utils/testUtils';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Card } from '.';

describe('Card', () => {
  const mockData = {
    id: '3bhkYoMWTFE',
    keyID: 'aerqg4edd2342r',
    title: '😹Cats Doing Cat Things😹 (3)',
    channelTitle: 'catvid-19',
    defaultImg: 'https://i.ytimg.com/vi/3bhkYoMWTFE/default.jpg',
    mediumImg: 'https://i.ytimg.com/vi/3bhkYoMWTFE/mqdefault.jpg',
    publishedAt: 'January 21, 2024',
    duration: '00:18',
    player: 'https://www.youtube.com/embed/uZ_Ok8IT7fs?autoplay=1',
  };

  test('renders the relevant data', async () => {
    render(
      <Wrapper>
        <Card videoData={mockData} />
      </Wrapper>,
      {
        wrapper: BrowserRouter,
      }
    );

    const channelTitle = screen.getByText(/catvid-19/i);
    const videoTitle = screen.getByText(/Cats Doing Cat Things/i);

    expect(channelTitle).toBeInTheDocument();
    expect(videoTitle).toBeInTheDocument();
  });
  test('get video modal by video click', async () => {
    render(
      <Wrapper>
        <Card videoData={mockData} />
      </Wrapper>,
      {
        wrapper: BrowserRouter,
      }
    );

    const cardVideo = screen.getByTestId('card-video');
    fireEvent.click(cardVideo);
    const detailsModal = screen.getByTestId('details-modal');

    expect(detailsModal).toBeInTheDocument();
  });
});
