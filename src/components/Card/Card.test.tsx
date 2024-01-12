import { render, screen } from '@testing-library/react';
import { Card } from '.';
import { Wrapper } from '../../../__jest__/utils/testUtils';
import { videoDataMock } from '../../../__jest__/mocks/videoMock';
import { BrowserRouter } from 'react-router-dom';

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
});
