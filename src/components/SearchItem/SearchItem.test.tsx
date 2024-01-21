import { Wrapper } from '@jest-dir/utils/testUtils';
import { render, screen } from '@testing-library/react';

import { SearchItem } from '.';

describe('Search item', () => {
  test('element renders', async () => {
    const mockFn = jest.fn();
    const data = {
      kind: 'youtube#searchResult',
      etag: 'lG4XK5a5x3E4Hy-x5I4iQGvbxuk',
      id: {
        kind: 'youtube#video',
        videoId: '3bhkYoMWTFE',
      },
      snippet: {
        title: 'Modsen',
      },
    };
    render(
      <Wrapper>
        <SearchItem searchItem={data} setSearchFromList={mockFn} />
      </Wrapper>
    );

    const title = screen.getByText(/Modsen/i);

    expect(title).toBeInTheDocument();
  });
});
