import { videoDataMock } from '@jest-dir/mocks/videoMock';
import { Wrapper } from '@jest-dir/utils/testUtils';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Card } from '.';

describe('Card', () => {
  test('renders the relevant data', async () => {
    render(
      <Wrapper>
        <Card videoData={videoDataMock} />
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
        <Card videoData={videoDataMock} />
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
