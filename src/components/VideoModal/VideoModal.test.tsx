import { videoIframeDataMock } from '@jest-dir/mocks/videoIframeDataMock';
import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen, waitFor } from '@testing-library/react';

import { VideoModal } from '.';

describe('Video modal', () => {
  const mockFn = jest.fn();
  test('video modal render', async () => {
    render(
      <Wrapper>
        <VideoModal setVideoModal={mockFn} videoLink={videoIframeDataMock} />
      </Wrapper>
    );
    await waitFor(() => {
      const detailsModal = screen.getByTestId('details-modal');

      expect(detailsModal).toBeInTheDocument();
    });
  });
});
